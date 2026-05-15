import { getUser, createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { SuperAdminLayoutWrapper } from '@/components/admin/SuperAdminLayoutWrapper';

/**
 * Super Admin layout — server component that gates access to super_admin role only.
 */
export default async function SuperAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: { user } } = await getUser();

  if (!user) {
    return redirect('/login');
  }

  const supabase = await createClient();
  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .single();

  if (!profile || profile.role !== 'super_admin') {
    return redirect('/dashboard');
  }

  return (
    <SuperAdminLayoutWrapper>
      {children}
    </SuperAdminLayoutWrapper>
  );
}
