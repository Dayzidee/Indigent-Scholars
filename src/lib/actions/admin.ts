'use server'

import { z } from 'zod'
import { createClient, getUser } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

// ─── Schemas ─────────────────────────────────────────────────────────────────

const VerifyApplicationSchema = z.object({
  studentAppId: z.string().uuid('Invalid application ID'),
  status: z.enum(['verified', 'rejected', 'requested_changes'] as const),
  notes: z.string().max(2000, 'Notes must be under 2000 characters').optional(),
})

// ─── Actions ─────────────────────────────────────────────────────────────────

export async function verifyApplication(
  studentAppId: string,
  status: 'verified' | 'rejected' | 'requested_changes',
  notes?: string
) {
  const parsed = VerifyApplicationSchema.safeParse({ studentAppId, status, notes })
  if (!parsed.success) {
    throw new Error(parsed.error.issues.map(i => i.message).join(', '))
  }

  const { data: { user: admin } } = await getUser()

  if (!admin) throw new Error('Unauthorized admin access attempt')

  const supabase = await createClient()

  // Update application status
  const { data: updatedApp, error: appError } = await supabase
    .from('student_applications')
    .update({ 
      status: parsed.data.status, 
      updated_at: new Date().toISOString()
    })
    .eq('id', parsed.data.studentAppId)
    .select()
    .single()

  if (appError) throw appError

  // Create verification log
  const { error: logError } = await supabase
    .from('verification_logs')
    .insert({
      admin_id:    admin.id,
      target_id:   parsed.data.studentAppId,
      target_type: 'student_application',
      action:      parsed.data.status,
      notes:       parsed.data.notes,
    })

  if (logError) throw logError

  revalidatePath('/dashboard/admin/verification')
  revalidatePath('/dashboard/admin')
  return updatedApp
}

export async function getGlobalStats() {
  const supabase = await createClient()

  const [fundsResult, studentsResult, pendingResult] = await Promise.all([
    supabase
      .from('funding_ledger')
      .select('amount')
      .eq('status', 'completed'),
    supabase
      .from('student_applications')
      .select('id', { count: 'exact', head: true })
      .eq('status', 'verified'),
    supabase
      .from('student_applications')
      .select('id', { count: 'exact', head: true })
      .eq('status', 'pending'),
  ])

  const totalFunds = fundsResult.data?.reduce(
    (acc, curr) => acc + Number(curr.amount), 0
  ) ?? 0

  return {
    totalFunds,
    studentsFunded:       studentsResult.count ?? 0,
    pendingVerifications: pendingResult.count  ?? 0,
  }
}

export async function getAllProfiles() {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .order('role', { ascending: true })

  if (error) throw error
  return data
}
