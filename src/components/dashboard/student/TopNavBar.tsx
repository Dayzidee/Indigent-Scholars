'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@/components/ui/card'

const getTitle = (pathname: string) => {
  if (pathname.includes('/application')) return 'My Application'
  if (pathname.includes('/settings')) return 'Settings'
  if (pathname.includes('/matches')) return 'Sponsor Matches'
  if (pathname.includes('/help')) return 'Help Center'
  if (pathname.includes('/resources')) return 'Resources'
  return 'Dashboard'
}

interface TopNavBarProps {
  onMenuClick?: () => void;
}

export function TopNavBar({ onMenuClick }: TopNavBarProps) {
  const pathname = usePathname()
  const title = getTitle(pathname)
  
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
    <header className="fixed top-0 right-0 w-full md:w-[calc(100%-16rem)] h-[72px] bg-white/80 backdrop-blur-xl flex justify-between items-center px-4 md:px-8 z-50 border-b border-zinc-100 dark:border-zinc-800 transition-all duration-300">
      <div className="flex items-center gap-2 md:gap-4 truncate">
        {/* Mobile Menu Toggle */}
        <button 
          onClick={onMenuClick}
          className="p-2 md:hidden hover:bg-zinc-100 rounded-lg transition-colors shrink-0"
        >
          <span className="material-symbols-outlined text-zinc-600">menu</span>
        </button>

        <Link href="/dashboard/student" className="text-lg md:text-xl font-black bg-gradient-to-b from-[#0052CC] to-[#003D9B] bg-clip-text text-transparent font-headline tracking-tight hover:opacity-80 transition-opacity whitespace-nowrap">
          Indigent-Sc
        </Link>
        <span className="hidden sm:block h-4 w-px bg-zinc-200"></span>
        <h1 className="hidden sm:block font-headline tracking-tight text-lg md:text-xl font-bold text-on-surface truncate">{title}</h1>
      </div>
      
      <div className="flex items-center gap-2 md:gap-6 shrink-0">
        <div className="hidden lg:flex gap-6 mr-6 items-center">
          <Link 
            href="/dashboard/student" 
            className={cn(
              "font-bold font-headline text-sm tracking-wide transition-colors whitespace-nowrap",
              pathname === '/dashboard/student' ? "text-[#0052CC]" : "text-zinc-500 hover:text-[#0052CC]"
            )}
          >
            DASHBOARD
          </Link>
          <Link 
            href="/dashboard/student/resources" 
            className={cn(
              "font-headline text-sm tracking-wide transition-colors font-bold whitespace-nowrap",
              pathname === '/dashboard/student/resources' ? "text-[#0052CC]" : "text-zinc-500 hover:text-[#0052CC]"
            )}
          >
            RESOURCES
          </Link>
        </div>
        
        {/* Notifications Dropdown */}
        <div className="relative" ref={notificationRef}>
          <button 
            onClick={() => {
              setIsNotificationsOpen(!isNotificationsOpen)
              setIsProfileOpen(false)
            }}
            className={cn(
              "relative p-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-primary/20 group",
              isNotificationsOpen ? "bg-primary/10 text-primary" : "text-zinc-500 hover:bg-zinc-50"
            )}
          >
            <span className="material-symbols-outlined text-zinc-500 group-hover:text-primary transition-colors" data-icon="notifications">
              notifications
            </span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border-2 border-white animate-pulse"></span>
          </button>
          
          <AnimatePresence>
            {isNotificationsOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute right-0 mt-3 w-72 sm:w-80 z-50 overflow-hidden"
              >
                <Card className="p-4 shadow-2xl border border-zinc-100 overflow-hidden rounded-2xl bg-white">
                  <div className="flex justify-between items-center mb-4 pb-2 border-b border-zinc-50 font-headline">
                    <h3 className="font-bold text-sm">Notifications</h3>
                    <button className="text-[10px] font-black text-primary uppercase tracking-widest">Clear all</button>
                  </div>
                  <div className="space-y-3">
                    {[
                      { title: 'New Sponsor Match', desc: 'Global STEM Initiative reviewed your profile.', time: '2h ago', icon: 'handshake', color: 'blue' },
                      { title: 'Document Verified', desc: 'Your transcript was approved.', time: 'Yesterday', icon: 'verified', color: 'green' },
                    ].map((n, i) => (
                      <div key={i} className="flex gap-3 hover:bg-zinc-50 p-2 rounded-xl transition-colors cursor-pointer group">
                        <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center shrink-0", n.color === 'blue' ? "bg-blue-50 text-blue-600" : "bg-green-50 text-green-600")}>
                          <span className="material-symbols-outlined text-xl">{n.icon}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                           <p className="text-xs font-bold text-on-surface group-hover:text-primary transition-colors truncate font-headline">{n.title}</p>
                           <p className="text-[10px] text-zinc-500 line-clamp-1 font-headline">{n.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Profile Dropdown */}
        <div className="relative" ref={profileRef}>
          <button 
            onClick={() => {
              setIsProfileOpen(!isProfileOpen)
              setIsNotificationsOpen(false)
            }}
            className="w-10 h-10 rounded-full overflow-hidden border border-zinc-200 shadow-sm transition-all hover:scale-105 ring-2 ring-transparent hover:ring-primary/10"
          >
            <img
              alt="User avatar"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3jaqrJMFWo42oRuzKYGkuN9dPF0AY3kyzThw7GzUxKaiqiYkqcoNdo-qRbDhysrr-WIrQEm9pQYZvMMkGlr6AHdrRSnOi1-pxPzQNoNwD3ifkM9alcUezU7YOtCXy2jzWfOUQ0bRauW_Cf8ExfQyLC0dfLdwBb-Ae0WdxPNn9N1ngYW5g6Hi3nZ4clPlskjcbWdaHYMJlnbaBzcDWJpLY9xGjAx9rIM3wnXWKzqNAWnypC7K7bRyBvOzqM8ySwQ4-qJhJQxJ-vZdn"
            />
          </button>
          
          <AnimatePresence>
            {isProfileOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute right-0 mt-3 w-64 z-50"
              >
                <Card className="p-0 shadow-2xl border border-zinc-100 overflow-hidden rounded-2xl bg-white">
                  <div className="bg-primary scholar-gradient p-6 text-white">
                    <p className="text-xs font-bold opacity-70 uppercase tracking-widest mb-1 font-headline">Signed in as</p>
                    <p className="font-headline font-black text-lg truncate">Amara Okafor</p>
                    <div className="flex items-center gap-1 mt-2">
                       <span className="px-2 py-0.5 bg-white/20 rounded-full text-[8px] font-black uppercase tracking-tighter font-headline">Verified Scholar</span>
                    </div>
                  </div>
                  <div className="p-2">
                    {[
                      { label: 'Account Settings', icon: 'settings', href: '/dashboard/student/settings' },
                    ].map((link, i) => (
                      <Link key={i} href={link.href} className="flex items-center gap-3 px-4 py-3 hover:bg-zinc-50 rounded-xl transition-colors group">
                        <span className="material-symbols-outlined text-zinc-400 group-hover:text-primary transition-colors text-xl font-headline tracking-tighter font-bold">{link.icon}</span>
                        <span className="text-sm font-bold text-zinc-600 group-hover:text-on-surface transition-colors font-headline">{link.label}</span>
                      </Link>
                    ))}
                    <div className="h-px bg-zinc-50 my-1"></div>
                    <button 
                      onClick={async () => {
                        const { createClient } = await import('@/lib/supabase/client')
                        const supabase = createClient()
                        await supabase.auth.signOut()
                        window.location.href = '/'
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 text-error hover:bg-error/5 rounded-xl transition-colors group font-headline"
                    >
                      <span className="material-symbols-outlined text-xl transition-colors text-error font-headline tracking-tighter font-bold">logout</span>
                      <span className="text-sm font-bold">Logout</span>
                    </button>
                  </div>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}
