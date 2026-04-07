import { SideNavBar } from '@/components/dashboard/student/SideNavBar'
import { TopNavBar } from '@/components/dashboard/student/TopNavBar'
import { FloatingCustomerCare } from '@/components/ui/FloatingCustomerCare'

export default function StudentDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-surface">
      <SideNavBar />
      <div className="pl-64">
        <TopNavBar />
        <main className="pt-16 min-h-[calc(100vh-64px)] overflow-x-hidden relative">
          {children}
        </main>
        <FloatingCustomerCare />
      </div>
    </div>
  )
}
