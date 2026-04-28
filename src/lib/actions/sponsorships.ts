'use server'

import { z } from 'zod'
import { createClient, getUser } from '@/lib/supabase/server'
import { revalidatePath, unstable_cache } from 'next/cache'

// ─── Schemas ─────────────────────────────────────────────────────────────────

const PledgeFundingSchema = z.object({
  studentAppId: z.string().uuid('Invalid application ID'),
  amount: z
    .number('Amount is required')
    .positive('Amount must be positive')
    .max(10_000_000, 'Pledge exceeds platform maximum'),
})

// ─── Actions ─────────────────────────────────────────────────────────────────

export const getVerifiedStudents = unstable_cache(
  async () => {
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
  },
  ['verified-students'],
  { revalidate: 60, tags: ['verified-students'] }
)

export async function pledgeFunding(studentAppId: string, amount: number) {
  const parsed = PledgeFundingSchema.safeParse({ studentAppId, amount })
  if (!parsed.success) {
    throw new Error(parsed.error.issues.map(i => i.message).join(', '))
  }

  const { data: { user } } = await getUser()

  if (!user) throw new Error('Unauthorized')

  const supabase = await createClient()

  // Create the funding match
  const { data, error } = await supabase
    .from('funding_matches')
    .insert({
      sponsor_id:      user.id,
      student_app_id:  parsed.data.studentAppId,
      amount:          parsed.data.amount,
      status:          'pledged',
    })
    .select()
    .single()

  if (error) throw error

  // Create an initial ledger entry
  const { error: ledgerError } = await supabase
    .from('funding_ledger')
    .insert({
      sponsor_id:       user.id,
      student_app_id:   parsed.data.studentAppId,
      amount:           parsed.data.amount,
      transaction_type: 'pledge_fulfillment',
      status:           'pending',
    })

  if (ledgerError) throw ledgerError

  revalidatePath('/dashboard/sponsor')
  revalidatePath('/dashboard/sponsor/ledger')
  revalidatePath('/dashboard/sponsor/discovery')
  return data
}

export async function getSponsorMatches() {
  const { data: { user } } = await getUser()

  if (!user) throw new Error('Unauthorized')

  const supabase = await createClient()

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
