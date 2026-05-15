'use client'

import { useState } from 'react'
import { SuperAdminSidebar } from './SuperAdminSidebar'
import { usePathname } from 'next/navigation'

/**
 * Layout wrapper for the Super Admin console.
 * Reuses the same visual shell as AdminLayoutWrapper but with the
 * SuperAdminSidebar and Super Admin specific header branding.
 */
export function SuperAdminLayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const pathname = usePathname()

  const getPageTitle = () => {
    const segments = pathname?.split('/').filter(Boolean) || []
    if (segments.length <= 1) return 'Global Overview'

    const lastSegment = segments[segments.length - 1]
    const titleMap: Record<string, string> = {
      'admins': 'Admin Management',
      'verification': 'Verification Center',
      'users': 'User CRM',
      'financials': 'Financial Command Ledger',
      'settings': 'Platform Settings'
    }

    return titleMap[lastSegment] || lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1)
  }

  return (
    <div className="flex h-screen bg-slate-950 overflow-hidden font-sans text-slate-300">
      <SuperAdminSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden relative">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 flex justify-between items-center px-4 md:px-8 py-3 w-full h-20">
          <div className="flex items-center gap-4 flex-1">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 -ml-2 text-slate-400 hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined text-[24px]">menu</span>
            </button>
            
            <h2 className="text-lg font-black text-white hidden md:block tracking-tight">
              {getPageTitle()}
            </h2>
            
            <div className="relative w-full max-w-md hidden sm:block md:ml-8">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-lg">search</span>
              <input 
                className="w-full bg-slate-950/50 border border-slate-800 rounded-lg pl-10 pr-4 py-2 text-sm text-slate-300 focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500/50 transition-all placeholder:text-slate-500" 
                placeholder="Search admins, students, or logs..." 
                type="text"
              />
            </div>
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            <div className="flex items-center gap-2 md:gap-3">
              <button className="w-10 h-10 flex items-center justify-center text-slate-400 hover:bg-slate-800 hover:text-white rounded-full transition-colors relative">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-2 right-2 w-2 h-2 bg-amber-500 rounded-full border-2 border-slate-900" />
              </button>
              
              <div className="flex items-center gap-3 pl-2 sm:pl-4 sm:border-l sm:border-slate-800">
                <div className="text-right hidden xl:block">
                  <p className="text-sm font-bold text-white capitalize">System Admin</p>
                  <p className="text-[10px] text-amber-400 font-semibold tracking-wider uppercase">Super Admin</p>
                </div>
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-500/20 to-rose-500/20 border border-amber-700/50 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px] text-amber-400">shield_person</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-10 relative">
          {/* Subtle Ambient Background */}
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

          <div className="max-w-[1600px] mx-auto w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
