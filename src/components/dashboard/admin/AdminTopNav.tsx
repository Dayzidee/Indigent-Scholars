'use client'

import { useState, useRef, useEffect } from 'react'
import { 
  Search, 
  Bell, 
  HelpCircle, 
  Menu,
  ChevronDown,
  User,
  Settings,
  LogOut
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

interface AdminTopNavProps {
  onMenuClick?: () => void
}

export function AdminTopNav({ onMenuClick }: AdminTopNavProps) {
  const pathname = usePathname()
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

  const getPageTitle = () => {
    if (pathname.includes('/verification')) return 'Verification Center'
    if (pathname.includes('/users')) return 'User CRM'
    if (pathname.includes('/ledger')) return 'Financial Command'
    if (pathname.includes('/settings')) return 'Platform Settings'
    return 'Scholarship Admin'
  }

  return (
    <header className="fixed top-0 right-0 w-full md:w-[calc(100%-16rem)] z-40 bg-[#FCF9F8]/80 backdrop-blur-md flex justify-between items-center px-4 md:px-8 h-[72px] border-b border-outline-variant/10 shadow-sm transition-all duration-300">
      <div className="flex items-center gap-4 md:gap-8 flex-1">
        {/* Mobile Menu Toggle */}
        <button 
          onClick={onMenuClick}
          className="p-2 md:hidden hover:bg-surface-container-high rounded-lg transition-colors"
        >
          <Menu className="w-6 h-6 text-[#313030]" />
        </button>

        <h2 className="hidden sm:block text-lg font-black text-[#313030] tracking-tight whitespace-nowrap">
          {getPageTitle()}
        </h2>

        <div className="relative w-full max-w-md group hidden lg:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-outline w-4 h-4 transition-colors group-focus-within:text-primary" />
          <input 
            type="text" 
            placeholder="Search students, transactions, or logs..." 
            className="w-full bg-surface-container-low border-none rounded-xl pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline/50"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-6">
        <div className="flex items-center gap-2 md:gap-4 border-r border-outline-variant/30 pr-2 md:pr-6">
          <div className="relative" ref={notificationRef}>
            <button 
              onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
              className={cn(
                "w-10 h-10 flex items-center justify-center rounded-full transition-colors relative group",
                isNotificationsOpen ? "bg-primary/10 text-primary" : "text-on-surface-variant hover:bg-surface-container-high"
              )}
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-error rounded-full border-2 border-white"></span>
            </button>

            <AnimatePresence>
              {isNotificationsOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 mt-3 w-80 bg-white rounded-2xl shadow-2xl border border-outline-variant/20 overflow-hidden z-50"
                >
                  <div className="p-4 border-b border-outline-variant/10 flex justify-between items-center">
                    <h3 className="font-bold text-sm">Notifications</h3>
                    <span className="text-[10px] font-black text-primary uppercase tracking-widest cursor-pointer">Mark all as read</span>
                  </div>
                  <div className="max-h-[300px] overflow-y-auto">
                    {[1, 2, 3].map((_, i) => (
                      <div key={i} className="p-4 hover:bg-surface-container-lowest transition-colors border-b border-outline-variant/5 last:border-0 cursor-pointer">
                        <p className="text-xs font-bold text-[#313030]">New Verification Request</p>
                        <p className="text-[11px] text-on-surface-variant mt-1">Adeola Johnson submitted academic transcripts for review.</p>
                        <p className="text-[10px] text-outline mt-2">2 mins ago</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button className="w-10 h-10 hidden sm:flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors">
            <HelpCircle className="w-5 h-5" />
          </button>
        </div>

        <div className="relative" ref={profileRef}>
          <button 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-3 pl-2 group focus:outline-none"
          >
            <div className="text-right hidden xl:block">
              <p className="text-xs font-bold text-on-surface group-hover:text-primary transition-colors">Admin User</p>
              <p className="text-[10px] text-outline uppercase tracking-tighter">Super Admin</p>
            </div>
            <div className="relative">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEQp6n-48oAsbrIg2QNzjReWX9T-yBmY0vlSmDr9iHO0wlxHIfiwUudxiBvesrHWO1VZAY6iY1BlOHksM59IiBF96rmfe0Se1pAFCuGbgDo2ob-2B0p3zzAdBLjG7J1c9WbPYDpgwUGsHTJD2RSNeQfBMhgRvpqV-ne3_m_wjyVz1ySOhQJzgnHBck_U0HtwOLPpt620MQZhlIGWPlLiXHNz7f3aFrr-Ymmj4b2ARzMb4WxEC1myiYvHp1IGzDvDf3yW7U2FNXQPu6"
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover border-2 border-surface-container-high transition-transform group-hover:scale-105"
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white"></div>
            </div>
            <ChevronDown className={cn(
              "w-4 h-4 text-outline transition-transform duration-300",
              isProfileOpen && "rotate-180"
            )} />
          </button>

          <AnimatePresence>
            {isProfileOpen && (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-2xl border border-outline-variant/20 overflow-hidden z-50"
              >
                <div className="p-2">
                  <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-on-surface hover:bg-surface-container-low rounded-xl transition-colors">
                    <User className="w-4 h-4" />
                    My Profile
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-on-surface hover:bg-surface-container-low rounded-xl transition-colors">
                    <Settings className="w-4 h-4" />
                    Account Settings
                  </button>
                  <div className="h-px bg-outline-variant/10 my-1 mx-2"></div>
                  <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-rose-500 hover:bg-rose-500/5 rounded-xl transition-colors">
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}
