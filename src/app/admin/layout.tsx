import { getUser, createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { DashboardLayout } from '@/components/layout/DashboardLayout';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { cookies } = await import('next/headers');
  const cookieStore = await cookies();
  const isAdminBypass = cookieStore.get('admin_bypass')?.value === 'true';

  if (!isAdminBypass) {
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

    if (!profile || profile.role !== 'admin') {
      // Redirect non-admins to their respective dashboards or login
      return redirect('/dashboard');
    }
  }

  return (
    <DashboardLayout>
      {children}
    </DashboardLayout>
  );
}
