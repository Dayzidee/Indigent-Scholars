import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

/**
 * Entry point for /dashboard
 * Redirects the user to their specific dashboard based on their role.
 */
export default async function DashboardRedirect() {
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return redirect('/login');
  }

  // Fetch profile to determine role
  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .single();

  if (!profile) {
    // If no profile exists, something is wrong with the onboarding
    console.error('No profile found for user:', user.id);
    return redirect('/register');
  }

  // Proper redirection logic
  if (profile.role === 'sponsor') {
    return redirect('/dashboard/sponsor');
  }

  if (profile.role === 'student') {
    return redirect('/dashboard/student');
  }

  if (profile.role === 'admin') {
    return redirect('/admin');
  }

  // Fallback (unassigned)
  return redirect('/register');
}
