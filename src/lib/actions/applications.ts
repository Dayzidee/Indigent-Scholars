'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function submitApplication(formData: {
  school_info: any
  funding_needs: number
  document_urls: string[]
}) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) throw new Error('Unauthorized')

  const { data, error } = await supabase
    .from('student_applications')
    .upsert({
      student_id: user.id,
      school_info: formData.school_info,
      funding_needs: formData.funding_needs,
      document_urls: formData.document_urls,
      status: 'pending',
      updated_at: new Date().toISOString(),
    })
    .select()
    .single()

  if (error) throw error

  revalidatePath('/student')
  revalidatePath('/student/application')
  return data
}

export async function getStudentApplication() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) return null

  const { data, error } = await supabase
    .from('student_applications')
    .select('*')
    .eq('student_id', user.id)
    .single()

  if (error && error.code !== 'PGRST116') throw error // PGRST116 is no rows found
  return data
}
