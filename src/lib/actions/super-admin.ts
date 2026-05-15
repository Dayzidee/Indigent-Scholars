'use server'

import { createAdminClient } from '@/lib/supabase/admin'
import { createClient, getUser } from '@/lib/supabase/server'
import { randomBytes } from 'crypto'

/**
 * Discriminated union result type (Kota Skillz pattern)
 */
type Result<T> =
  | { tag: 'success'; data: T }
  | { tag: 'failure'; error: string }

/**
 * Default features that every new admin gets access to.
 */
const DEFAULT_FEATURES = ['verification', 'crm', 'financials', 'settings'] as const

/**
 * Verifies the current user is a super_admin.
 * Must be called at the start of every super admin action.
 */
async function verifySuperAdmin(): Promise<Result<string>> {
  const { data: { user } } = await getUser()
  if (!user) {
    return { tag: 'failure', error: 'Not authenticated' }
  }

  const supabase = await createClient()
  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .single()

  if (!profile || profile.role !== 'super_admin') {
    return { tag: 'failure', error: 'Unauthorized: Super Admin access required' }
  }

  return { tag: 'success', data: user.id }
}

/**
 * Generates a cryptographically secure random password.
 * Uses Node.js crypto module (server-side only).
 */
function generateSecurePassword(length: number = 16): string {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*'
  const bytes = randomBytes(length)
  let password = ''
  for (let i = 0; i < length; i++) {
    password += charset[bytes[i] % charset.length]
  }
  return password
}

/**
 * Creates a new admin user account.
 * 
 * Flow:
 * 1. Verify caller is super_admin
 * 2. Generate secure random password
 * 3. Create auth user via Supabase Admin API
 * 4. Create profile with role='admin'
 * 5. Insert default permissions (all enabled)
 * 6. Record invitation
 * 7. Return credentials (shown once to super admin)
 */
export async function createAdminUser(
  email: string,
  fullName: string
): Promise<Result<{ email: string; password: string }>> {
  // 1. Authorization check
  const authCheck = await verifySuperAdmin()
  if (authCheck.tag === 'failure') return authCheck

  const superAdminId = authCheck.data

  // 2. Input validation
  const trimmedEmail = email.trim().toLowerCase()
  const trimmedName = fullName.trim()

  if (!trimmedEmail || !trimmedEmail.includes('@')) {
    return { tag: 'failure', error: 'Invalid email address' }
  }
  if (!trimmedName || trimmedName.length < 2) {
    return { tag: 'failure', error: 'Full name must be at least 2 characters' }
  }

  try {
    const supabaseAdmin = createAdminClient()

    // 3. Generate password
    const password = generateSecurePassword(16)

    // 4. Create auth user (auto-confirms email)
    const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
      email: trimmedEmail,
      password,
      email_confirm: true,
      user_metadata: {
        full_name: trimmedName,
        role: 'admin',
      },
    })

    if (authError) {
      return { tag: 'failure', error: authError.message }
    }

    if (!authData.user) {
      return { tag: 'failure', error: 'User creation failed — no user returned' }
    }

    const userId = authData.user.id

    // 5. Create profile
    const { error: profileError } = await supabaseAdmin
      .from('profiles')
      .insert({
        id: userId,
        email: trimmedEmail,
        full_name: trimmedName,
        role: 'admin',
      })

    if (profileError) {
      // Rollback: delete the auth user if profile creation fails
      await supabaseAdmin.auth.admin.deleteUser(userId)
      return { tag: 'failure', error: `Profile creation failed: ${profileError.message}` }
    }

    // 6. Insert default permissions (all enabled)
    const permissionRows = DEFAULT_FEATURES.map((feature) => ({
      admin_id: userId,
      feature,
      is_enabled: true,
      updated_by: superAdminId,
    }))

    await supabaseAdmin.from('admin_permissions').insert(permissionRows)

    // 7. Record invitation
    await supabaseAdmin.from('admin_invitations').insert({
      email: trimmedEmail,
      invited_by: superAdminId,
      status: 'accepted', // Pre-accepted since we create the account directly
    })

    return {
      tag: 'success',
      data: { email: trimmedEmail, password },
    }
  } catch (err) {
    console.error('createAdminUser error:', err)
    return { tag: 'failure', error: 'An unexpected error occurred' }
  }
}

/**
 * Lists all admin users (role='admin') from profiles.
 */
export async function listAdmins(): Promise<Result<Array<{
  id: string
  email: string
  full_name: string | null
  role: string
}>>> {
  const authCheck = await verifySuperAdmin()
  if (authCheck.tag === 'failure') return authCheck

  try {
    const supabaseAdmin = createAdminClient()

    const { data, error } = await supabaseAdmin
      .from('profiles')
      .select('id, email, full_name, role')
      .eq('role', 'admin')
      .order('email', { ascending: true })

    if (error) {
      return { tag: 'failure', error: error.message }
    }

    return { tag: 'success', data: data || [] }
  } catch (err) {
    console.error('listAdmins error:', err)
    return { tag: 'failure', error: 'Failed to fetch admin list' }
  }
}

/**
 * Deletes an admin user (auth + profile).
 * Cascading delete on admin_permissions handles permission cleanup.
 */
export async function deleteAdminUser(adminId: string): Promise<Result<null>> {
  const authCheck = await verifySuperAdmin()
  if (authCheck.tag === 'failure') return authCheck

  if (!adminId) {
    return { tag: 'failure', error: 'Admin ID is required' }
  }

  try {
    const supabaseAdmin = createAdminClient()

    // Verify the target is actually an admin (not a super_admin or student)
    const { data: targetProfile } = await supabaseAdmin
      .from('profiles')
      .select('role')
      .eq('id', adminId)
      .single()

    if (!targetProfile || targetProfile.role !== 'admin') {
      return { tag: 'failure', error: 'Target user is not an admin' }
    }

    // Delete profile first (cascades to admin_permissions)
    const { error: profileError } = await supabaseAdmin
      .from('profiles')
      .delete()
      .eq('id', adminId)

    if (profileError) {
      return { tag: 'failure', error: `Failed to delete profile: ${profileError.message}` }
    }

    // Delete auth user
    const { error: authError } = await supabaseAdmin.auth.admin.deleteUser(adminId)

    if (authError) {
      return { tag: 'failure', error: `Failed to delete auth user: ${authError.message}` }
    }

    return { tag: 'success', data: null }
  } catch (err) {
    console.error('deleteAdminUser error:', err)
    return { tag: 'failure', error: 'An unexpected error occurred' }
  }
}

/**
 * Gets all feature permissions for a specific admin.
 */
export async function getAdminPermissions(adminId: string): Promise<Result<Array<{
  feature: string
  is_enabled: boolean
}>>> {
  const authCheck = await verifySuperAdmin()
  if (authCheck.tag === 'failure') return authCheck

  try {
    const supabaseAdmin = createAdminClient()

    const { data, error } = await supabaseAdmin
      .from('admin_permissions')
      .select('feature, is_enabled')
      .eq('admin_id', adminId)

    if (error) {
      return { tag: 'failure', error: error.message }
    }

    return { tag: 'success', data: data || [] }
  } catch (err) {
    console.error('getAdminPermissions error:', err)
    return { tag: 'failure', error: 'Failed to fetch permissions' }
  }
}

/**
 * Toggles a specific feature permission for an admin.
 */
export async function updateAdminPermission(
  adminId: string,
  feature: string,
  isEnabled: boolean
): Promise<Result<null>> {
  const authCheck = await verifySuperAdmin()
  if (authCheck.tag === 'failure') return authCheck

  const superAdminId = authCheck.data

  if (!DEFAULT_FEATURES.includes(feature as typeof DEFAULT_FEATURES[number])) {
    return { tag: 'failure', error: `Invalid feature: ${feature}` }
  }

  try {
    const supabaseAdmin = createAdminClient()

    const { error } = await supabaseAdmin
      .from('admin_permissions')
      .upsert(
        {
          admin_id: adminId,
          feature,
          is_enabled: isEnabled,
          updated_by: superAdminId,
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'admin_id,feature' }
      )

    if (error) {
      return { tag: 'failure', error: error.message }
    }

    return { tag: 'success', data: null }
  } catch (err) {
    console.error('updateAdminPermission error:', err)
    return { tag: 'failure', error: 'Failed to update permission' }
  }
}
