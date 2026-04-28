'use server'

import { z } from 'zod'
import { createClient, getUser } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { cache } from 'react'

// ─── Schemas ─────────────────────────────────────────────────────────────────

const SchoolInfoSchema = z.object({
  university:          z.string().min(2,  'University name is required'),
  faculty:             z.string().min(2,  'Faculty is required'),
  department:          z.string().min(2,  'Department is required'),
  level:               z.string().min(1,  'Level is required'),
  matricNumber:        z.string().optional(),
  cgpa:                z.number().min(0).max(5).optional(),
  graduationYear:      z.number().int().min(2024).max(2035).optional(),
  state:               z.string().optional(),
  sponsorshipCategory: z.string().optional(),
}).passthrough() // allow extra fields from the multi-step form

const SubmitApplicationSchema = z.object({
  school_info:    SchoolInfoSchema,
  funding_needs:  z.number('Funding amount is required')
                   .positive('Funding amount must be positive')
                   .max(10_000_000, 'Funding amount exceeds platform maximum'),
  document_urls:  z.array(z.string().url('Each document URL must be valid')).optional(),
})

const UpdateProfileSchema = z.object({
  full_name: z.string().min(2, 'Full name must be at least 2 characters').max(100),
  email:     z.string().email('Invalid email address').optional(),
})

// ─── Actions ─────────────────────────────────────────────────────────────────

export async function submitApplication(
  rawData: Record<string, unknown>
) {
  // Validate before touching the database
  const parsed = SubmitApplicationSchema.safeParse(rawData)
  if (!parsed.success) {
    return { 
      error: parsed.error.issues.map(i => i.message).join(', ') 
    }
  }
  const { school_info, funding_needs, document_urls } = parsed.data

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) return { error: 'Unauthorized' }

  const { error } = await supabase
    .from('student_applications')
    .upsert({
      student_id:    user.id,
      school_info,
      funding_needs,
      document_urls: document_urls ?? [],
      status:        'pending',
      updated_at:    new Date().toISOString(),
    }, { onConflict: 'student_id' })

  if (error) return { error: error.message }

  revalidatePath('/dashboard/student/application')
  revalidatePath('/dashboard/student')
  return { success: true }
}

export const getStudentApplication = cache(async () => {
  const { data: { user } } = await getUser()

  if (!user) return null

  const supabase = await createClient()
  const { data, error } = await supabase
    .from('student_applications')
    .select('*')
    .eq('student_id', user.id)
    .maybeSingle()

  if (error) throw error
  return data
})

export async function updateProfileAction(rawData: Record<string, unknown>) {
  const parsed = UpdateProfileSchema.safeParse(rawData)
  if (!parsed.success) {
    return { 
      error: parsed.error.issues.map(i => i.message).join(', ') 
    }
  }
  const { full_name } = parsed.data

  const { data: { user } } = await getUser()

  if (!user) return { error: 'Unauthorized' }

  const supabase = await createClient()
  const { error } = await supabase
    .from('profiles')
    .update({ full_name })
    .eq('id', user.id)

  if (error) return { error: error.message }

  revalidatePath('/dashboard/student/settings')
  revalidatePath('/dashboard/student')
  return { success: true }
}
