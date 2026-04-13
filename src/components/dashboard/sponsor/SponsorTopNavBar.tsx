'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { signOutAction } from '@/lib/actions/auth'
import { cn } from '@/lib/utils'

const getTitle = (pathname: string) => {
  if (pathname.includes('/discover')) return 'Discover Scholars'
  if (pathname.includes('/ledger')) return 'Funding Ledger'
  if (pathname.includes('/settings')) return 'Organization Settings'
  if (pathname.includes('/help')) return 'Help Center'
  return 'Sponsor Dashboard'
}

interface SponsorTopNavBarProps {
  onMenuClick?: () => void
}

export function SponsorTopNavBar({ onMenuClick }: SponsorTopNavBarProps) {
  const pathname = usePathname()
  const title = getTitle(pathname)
  const [searchValue, setSearchValue] = useState('')
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  
  const notificationRef = useRef<HTMLDivElement>(null)
  const profileRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setIsNotificationsOpen(false)
      }
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className="fixed top-0 right-0 z-40 flex items-center justify-between h-16 w-full lg:w-[calc(100%-16rem)] px-4 lg:px-10 bg-zinc-900/95 backdrop-blur-md border-b border-zinc-800">
      {/* Mobile Menu Trigger & Title */}
      <div className="flex items-center gap-2 lg:gap-4 truncate min-w-0">
        <button 
          id="mobile-menu-trigger"
          onClick={onMenuClick}
          className="lg:hidden p-2 -ml-2 hover:bg-zinc-800 rounded-lg transition-colors shrink-0"
        >
          <span className="material-symbols-outlined text-zinc-400">menu</span>
        </button>
        <Link href="/dashboard/sponsor" className="text-base font-bold text-[#0052CC] lg:hidden truncate shrink-0">Indigent-Sc</Link>
        <span className="hidden lg:block font-headline font-bold text-lg text-zinc-100 truncate">{title}</span>
      </div>

      {/* Search Bar - Clean Pill Style */}
      <div className="hidden md:flex flex-1 items-center max-w-md mx-8">
        <div className="relative w-full group">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 text-lg group-focus-within:text-[#0052CC] transition-colors">
            search
          </span>
          <input 
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search scholars, transactions..."
            className="w-full bg-zinc-800 border-transparent rounded-full py-2.5 pl-12 pr-4 text-xs font-medium text-zinc-200 focus:bg-zinc-800 focus:ring-2 focus:ring-[#0052CC]/10 focus:border-[#0052CC]/20 transition-all font-body placeholder:text-zinc-500"
          />
        </div>
      </div>

      {/* Actions & Profile */}
      <div className="flex items-center gap-2 lg:gap-4">
        <Link 
          href="/dashboard/sponsor/help"
          className="hidden sm:flex items-center gap-2 px-4 py-2 text-xs font-bold text-zinc-500 hover:text-[#0052CC] transition-colors font-headline uppercase tracking-wider"
        >
          <span className="material-symbols-outlined text-lg">contact_support</span>
          <span className="hidden xl:inline">Support</span>
        </Link>
        
        {/* Notifications */}
        <div className="relative" ref={notificationRef}>
          <button 
            onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
            className={cn(
              "p-2 rounded-full transition-all relative",
              isNotificationsOpen ? "bg-[#0052CC]/10 text-[#0052CC]" : "text-zinc-400 hover:bg-zinc-800"
            )}
          >
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2.5 w-1.5 h-1.5 bg-red-500 rounded-full border-2 border-zinc-900"></span>
          </button>

          <AnimatePresence>
            {isNotificationsOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute right-[-8px] sm:right-0 mt-3 w-[280px] sm:w-80 bg-zinc-900 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-zinc-700 overflow-hidden z-50 origin-top-right"
              >
                <div className="p-4 border-b border-zinc-800 flex justify-between items-center">
                  <span className="font-bold text-sm font-headline">Notifications</span>
                  <span className="text-[10px] font-bold text-[#0052CC] uppercase cursor-pointer">Mark all as read</span>
                </div>
                <div className="max-h-96 overflow-y-auto p-2">
                  {[
                    { title: 'New Scholar Interest', time: '10m ago', icon: 'person_add' },
                    { title: 'Funding Confirmation', time: '2h ago', icon: 'check_circle' }
                  ].map((n, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 hover:bg-zinc-800 rounded-xl transition-colors cursor-pointer">
                      <div className="w-8 h-8 rounded-lg bg-[#0052CC]/5 flex items-center justify-center shrink-0 border border-[#0052CC]/10">
                        <span className="material-symbols-outlined text-[#0052CC] text-sm">{n.icon}</span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold font-headline">{n.title}</p>
                        <p className="text-[10px] text-zinc-400 font-medium">{n.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Profile Dropdown */}
        <div className="relative" ref={profileRef}>
          <button 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-3 p-1 lg:pl-5 border-l border-zinc-800 ml-2 group"
          >
            <div className="w-9 h-9 rounded-xl bg-zinc-800 flex items-center justify-center border border-zinc-700 transition-all group-hover:bg-[#0052CC] group-hover:border-[#0052CC] group-hover:text-white overflow-hidden">
              <span className="material-symbols-outlined text-lg">account_balance</span>
            </div>
            <span className="material-symbols-outlined text-zinc-400 text-sm hidden lg:block group-hover:text-[#0052CC] transition-colors">expand_more</span>
          </button>

          <AnimatePresence>
            {isProfileOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute right-0 mt-3 w-64 bg-zinc-900 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-zinc-700 overflow-hidden z-50 p-2"
              >
                <div className="p-4 mb-2 bg-zinc-800 rounded-xl">
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-0.5 leading-none">Organization</p>
                  <p className="font-bold text-sm font-headline truncate text-zinc-100">Global Scholars Inc.</p>
                </div>
                
                <Link 
                  href="/dashboard/sponsor/settings"
                  onClick={() => setIsProfileOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-zinc-800 rounded-xl transition-colors group"
                >
                  <span className="material-symbols-outlined text-zinc-400 group-hover:text-[#0052CC] transition-colors text-lg">settings</span>
                  <span className="text-sm font-bold font-headline text-zinc-300">Org Settings</span>
                </Link>

                <div className="h-px bg-zinc-800 my-1 mx-2"></div>
                
                <button 
                  onClick={() => {
                    setIsProfileOpen(false)
                    signOutAction()
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-950/30 rounded-xl transition-colors group text-left"
                >
                  <span className="material-symbols-outlined text-lg">logout</span>
                  <span className="text-sm font-bold font-headline">Logout</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}
