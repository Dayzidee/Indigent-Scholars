'use client'

import { Bell, Search, User, ChevronDown, Menu } from 'lucide-react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { createBrowserClient } from '@supabase/ssr'

interface DashboardHeaderProps {
  onMenuClick?: () => void
}

export function DashboardHeader({ onMenuClick }: DashboardHeaderProps) {
  const pathname = usePathname()
  const [userName, setUserName] = useState<string>('User')
  const [role, setRole] = useState<string>('')

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  useEffect(() => {
    async function getUserInfo() {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('full_name, role')
          .eq('id', user.id)
          .single()

        if (profile) {
          setUserName(profile.full_name || user.email?.split('@')[0] || 'User')
          setRole(profile.role || '')
        }
      }
    }
    getUserInfo()
  }, [supabase])

  // Derive page title from pathname
  const getPageTitle = () => {
    const segments = pathname?.split('/').filter(Boolean) || []
    if (segments.length === 0) return 'Dashboard'

    // Last segment usually represents the page
    const lastSegment = segments[segments.length - 1]

    // Mapping for better titles
    const titleMap: Record<string, string> = {
      'student': 'Scholar Dashboard',
      'sponsor': 'Sponsor Overview',
      'admin': 'Global Command Center',
      'application': 'My Scholarship Application',
      'matches': 'Sponsor Matchmaking',
      'profile': 'My Academic Profile',
      'discover': 'Discover Scholars',
      'ledger': 'Funding Ledger',
      'verification': 'Verification Center',
      'users': 'User Management',
      'settings': 'Platform Settings'
    }

    return titleMap[lastSegment] || lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1)
  }

  return (
    <header className="h-20 border-b border-slate-800 bg-slate-900/50 backdrop-blur-md px-4 sm:px-8 flex items-center justify-between sticky top-0 z-30">
      <div className="flex flex-col">
        <div className="flex items-center space-x-3">
          <button
            id="mobile-menu-trigger"
            onClick={onMenuClick}
            className="lg:hidden p-2 -ml-2 text-slate-400 hover:text-white transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold text-white tracking-tight">
            {getPageTitle()}
          </h1>
        </div>
        <div className="flex items-center text-xs text-slate-500 mt-0.5">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            {"Indigent-Sc".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 + index * 0.02 }}
                className="font-bold tracking-widest text-[#2DD4BF] uppercase bg-clip-text"
              >
                {char}
              </motion.span>
            ))}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ delay: 1.2, duration: 2, repeat: Infinity }}
              className="w-1 h-1 rounded-full bg-[#2DD4BF] ml-0.5 shadow-[0_0_8px_rgba(45,212,191,0.6)]"
            />
          </motion.div>
          <span className="mx-1.5 opacity-50">•</span>
          <span className="capitalize">{role || 'Portal'}</span>
        </div>
      </div>

      <div className="flex items-center space-x-6">
        {/* Search Placeholder */}
        <div className="hidden md:flex items-center bg-slate-800/50 border border-slate-700/50 rounded-full px-4 py-1.5 focus-within:border-teal-500/50 transition-all">
          <Search className="w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search platform..."
            className="bg-transparent border-none focus:ring-0 text-sm text-slate-300 w-48 ml-2"
          />
        </div>

        {/* Action Icons */}
        <div className="flex items-center space-x-3 border-r border-slate-800 pr-6">
          <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-teal-500 rounded-full border-2 border-slate-900"></span>
          </button>
        </div>

        {/* User Profile */}
        <div className="flex items-center space-x-3 group cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500/20 to-indigo-500/20 border border-slate-700 flex items-center justify-center group-hover:border-teal-500/50 transition-all">
            <User className="w-5 h-5 text-teal-400" />
          </div>
          <div className="hidden lg:block text-left">
            <p className="text-sm font-semibold text-white leading-none capitalize">{userName}</p>
            <p className="text-xs text-slate-500 mt-1 capitalize">{role}</p>
          </div>
          <ChevronDown className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
        </div>
      </div>
    </header>
  )
}
