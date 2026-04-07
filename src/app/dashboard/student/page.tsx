import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { IncompleteView } from '@/components/dashboard/student/IncompleteView'
import { SubmittedView } from '@/components/dashboard/student/SubmittedView'
import { VerifiedView } from '@/components/dashboard/student/VerifiedView'

export default async function StudentDashboardPage() {
  const supabase = await createClient()

  // 1. Get current user session
  const { data: { user }, error: authError } = await supabase.auth.getUser()
  if (authError || !user) {
    redirect('/login')
  }

  // 2. Get profile and application status
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  const { data: application } = await supabase
    .from('student_applications')
    .select('*')
    .eq('student_id', user.id)
    .single()

  // 3. Determine view type
  if (!application) {
    return <IncompleteView />
  }

  if (application.status === 'pending') {
    return <SubmittedView />
  }

  if (application.status === 'verified') {
    return <VerifiedView />
  }

  // Default to incomplete for now if rejected or unknown
  return <IncompleteView />
}
