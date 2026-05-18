import { getUser, createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { AdminLayoutWrapper } from '@/components/admin/AdminLayoutWrapper';
import { AdminRoleProvider } from '@/components/admin/AdminRoleContext';
export default async function AdminLayout({
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

  if (!profile || (profile.role !== 'admin' && profile.role !== 'super_admin')) {
    // Redirect non-admins to their respective dashboards or login
    return redirect('/dashboard');
  }

  return (
    <AdminRoleProvider role={profile.role}>
      <AdminLayoutWrapper>
        {children}
      </AdminLayoutWrapper>
    </AdminRoleProvider>
  );
}
