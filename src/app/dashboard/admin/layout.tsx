'use client'

import { useState } from 'react'
import { AdminSidebar } from '@/components/dashboard/admin/AdminSidebar'
import { AdminTopNav } from '@/components/dashboard/admin/AdminTopNav'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // NOTE: Real authentication/role check should happen here or in middleware
  // For the "reveal" we're allowing access to the mocked views.

  return (
    <div className="min-h-screen bg-[#FCF9F8]">
      <AdminSidebar 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
      
      <div className="flex-1 flex flex-col md:ml-64 transition-all duration-300">
        <AdminTopNav 
          onMenuClick={() => setIsMobileMenuOpen(true)} 
        />
        
        <main className="flex-1 pt-[72px] pb-12 transition-all duration-300">
          {children}
        </main>
      </div>
    </div>
  )
}
