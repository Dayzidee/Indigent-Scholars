'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface AdminHeaderProps {
  onMenuClick: () => void
}

export function AdminHeader({ onMenuClick }: AdminHeaderProps) {
  const pathname = usePathname()
  const [userName] = useState<string>('System Admin')
  const [role] = useState<string>('Super Admin')

  // Use mock data to avoid latency
  useEffect(() => {
    // Optionally simulate slight load time or just leave it static
  }, [])

  // Derive page title from pathname
  const getPageTitle = () => {
    const segments = pathname?.split('/').filter(Boolean) || []
    if (segments.length <= 1) return 'Global Overview'

    const lastSegment = segments[segments.length - 1]
    const titleMap: Record<string, string> = {
      'verification': 'Verification Center',
      'users': 'User CRM',
      'financials': 'Financial Command Ledger',
      'settings': 'Platform Settings'
    }

    return titleMap[lastSegment] || lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1)
  }

  return (
    <header className="sticky top-0 z-40 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 flex justify-between items-center px-4 md:px-8 py-3 w-full h-20">
      <div className="flex items-center gap-4 flex-1">
        <button
          onClick={onMenuClick}
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
            className="w-full bg-slate-950/50 border border-slate-800 rounded-lg pl-10 pr-4 py-2 text-sm text-slate-300 focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500/50 transition-all placeholder:text-slate-500" 
            placeholder="Search students, transactions, or logs..." 
            type="text"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        <div className="hidden lg:flex items-center gap-4 border-r border-slate-800 pr-6">
          <Link href="/admin" className={cn(
            "font-semibold text-sm px-1 py-1 transition-colors border-b-2",
            pathname === '/admin' ? "text-teal-400 border-teal-400" : "text-slate-400 border-transparent hover:text-white"
          )}>
            Dashboard
          </Link>
          <Link href="#" className="text-slate-400 hover:text-white transition-colors font-medium text-sm">Reports</Link>
          <Link href="#" className="text-slate-400 hover:text-white transition-colors font-medium text-sm">Logs</Link>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <button className="w-10 h-10 flex items-center justify-center text-slate-400 hover:bg-slate-800 hover:text-white rounded-full transition-colors relative">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-slate-900"></span>
          </button>
          <button className="hidden sm:flex w-10 h-10 items-center justify-center text-slate-400 hover:bg-slate-800 hover:text-white rounded-full transition-colors">
            <span className="material-symbols-outlined">help_outline</span>
          </button>
          
          <div className="flex items-center gap-3 pl-2 sm:pl-4 sm:border-l sm:border-slate-800">
            <div className="text-right hidden xl:block">
              <p className="text-sm font-bold text-white capitalize">{userName}</p>
              <p className="text-[10px] text-teal-400 font-semibold tracking-wider uppercase">{role}</p>
            </div>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-teal-500/20 to-indigo-500/20 border border-slate-700 flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px] text-teal-400">shield_person</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
