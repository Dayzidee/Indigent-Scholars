'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function verifyApplication(
  studentAppId: string, 
  status: 'verified' | 'rejected' | 'requested_changes',
  notes?: string
) {
  const supabase = await createClient()
  const { data: { user: admin } } = await supabase.auth.getUser()

  if (!admin) throw new Error('Unauthorized admin access attempt')

  // Update application status
  const { data: updatedApp, error: appError } = await supabase
    .from('student_applications')
    .update({ 
      status, 
      updated_at: new Date().toISOString() 
    })
    .eq('id', studentAppId)
    .select()
    .single()

  if (appError) throw appError

  // Create verification log
  const { error: logError } = await supabase
    .from('verification_logs')
    .insert({
      admin_id: admin.id,
      target_id: studentAppId,
      target_type: 'student_application',
      action: status,
      notes: notes
    })

  if (logError) throw logError

  revalidatePath('/admin/verification')
  revalidatePath('/admin')
  return updatedApp
}

export async function getGlobalStats() {
  const supabase = await createClient()

  // Get total funds raised
  const { data: fundsData } = await supabase
    .from('funding_ledger')
    .select('amount')
    .eq('status', 'completed')
  
  const totalFunds = fundsData?.reduce((acc, curr) => acc + Number(curr.amount), 0) || 0

  // Get total students funded
  const { count: studentsFunded } = await supabase
    .from('student_applications')
    .select('id', { count: 'exact', head: true })
    .eq('status', 'verified') // Example condition

  // Get pending verifications
  const { count: pendingVerifications } = await supabase
    .from('student_applications')
    .select('id', { count: 'exact', head: true })
    .eq('status', 'pending')

  return {
    totalFunds,
    studentsFunded: studentsFunded || 0,
    pendingVerifications: pendingVerifications || 0,
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
