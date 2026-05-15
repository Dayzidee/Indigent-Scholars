import { createClient } from '@supabase/supabase-js'

/**
 * Creates a Supabase client with the SERVICE_ROLE key.
 * 
 * ⚠️ SECURITY: This client bypasses RLS entirely.
 * It must ONLY be used in server actions and server components.
 * NEVER import this in client components or expose it to the browser.
 * 
 * Use cases:
 * - Creating admin users via auth.admin.createUser()
 * - Deleting users via auth.admin.deleteUser()
 * - Administrative profile management
 */
export const createAdminClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error(
      'Missing SUPABASE_SERVICE_ROLE_KEY or NEXT_PUBLIC_SUPABASE_URL. ' +
      'Ensure these are set in your .env.local file.'
    )
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })
}
