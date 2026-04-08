'use client'

import { useState } from 'react'
import { SponsorSideNavBar } from '@/components/dashboard/sponsor/SponsorSideNavBar'
import { SponsorTopNavBar } from '@/components/dashboard/sponsor/SponsorTopNavBar'

interface SponsorLayoutProps {
  children: React.ReactNode
}

export default function SponsorLayout({ children }: SponsorLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-surface font-body antialiased selection:bg-primary/10">
      {/* Side Navigation */}
      <SponsorSideNavBar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <SponsorTopNavBar />
        
        <main className="flex-1 lg:ml-64 mt-16 p-6 lg:p-12">
          {children}
        </main>
      </div>

      {/* Mobile Sidebar Overlay (if added later) */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  )
}
