'use client'

import { Sidebar } from './Sidebar'
import { DashboardHeader } from './DashboardHeader'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-slate-950 overflow-hidden font-sans">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <DashboardHeader />

        {/* Scrollable Content Area */}
        <main className="flex-1 overflow-y-auto px-10 py-12 relative">
          {/* Subtle Background Accents */}
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-teal-500/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

          {/* Children Content */}
          <div className="max-w-7xl mx-auto w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
