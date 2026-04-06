'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function getVerifiedStudents() {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('student_applications')
    .select(`
      *,
      profiles (
        full_name,
        email
      )
    `)
    .eq('status', 'verified')
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}

export async function pledgeFunding(studentAppId: string, amount: number) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) throw new Error('Unauthorized')

  // Create the funding match
  const { data, error } = await supabase
    .from('funding_matches')
    .insert({
      sponsor_id: user.id,
      student_app_id: studentAppId,
      amount: amount,
      status: 'pledged'
    })
    .select()
    .single()

  if (error) throw error

  // Create an initial ledger entry
  await supabase
    .from('funding_ledger')
    .insert({
      sponsor_id: user.id,
      student_app_id: studentAppId,
      amount: amount,
      transaction_type: 'pledge_fulfillment', // Transitioning naturally
      status: 'pending'
    })

  revalidatePath('/sponsor')
  revalidatePath('/sponsor/ledger')
  revalidatePath('/sponsor/discover')
  return data
}

export async function getSponsorMatches() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) throw new Error('Unauthorized')

  const { data, error } = await supabase
    .from('funding_matches')
    .select(`
      *,
      student_applications (
        *,
        profiles (
          full_name
        )
      )
    `)
    .eq('sponsor_id', user.id)

  if (error) throw error
  return data
}
