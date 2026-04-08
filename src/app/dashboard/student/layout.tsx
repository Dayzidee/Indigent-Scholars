'use client'

import { SideNavBar } from '@/components/dashboard/student/SideNavBar'
import { TopNavBar } from '@/components/dashboard/student/TopNavBar'
import { FloatingCustomerCare } from '@/components/ui/FloatingCustomerCare'
import { useState } from 'react'

export default function StudentDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-surface">
      <SideNavBar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="md:pl-64 transition-all duration-300">
        <TopNavBar onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="pt-[72px] min-h-[calc(100vh-72px)] overflow-x-hidden relative">
          {children}
        </main>
        <FloatingCustomerCare />
      </div>
    </div>
  )
}
