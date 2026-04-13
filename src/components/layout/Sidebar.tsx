'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { createBrowserClient } from '@supabase/ssr'
import { useEffect, useState, useTransition } from 'react'
import { cn } from '@/lib/utils'


// Define the shape of our navigation items
type NavItem = {
  name: string
  href: string
  icon: string

}

interface SidebarProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const pathname = usePathname()
  const [role, setRole] = useState<'student' | 'sponsor' | 'admin' | null>(null)
  const [isPending, startTransition] = useTransition()

  // Initialize Supabase client
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  useEffect(() => {
    async function fetchRole() {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        const { data } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', user.id)
          .single()

        if (data?.role) {
          setRole(data.role as 'student' | 'sponsor' | 'admin')
        }
      }
    }
    fetchRole()
  }, [supabase])

  // Navigation configurations for each role
  const getNavItems = (): NavItem[] => {
    switch (role) {
      case 'student':
        return [
          { name: 'Dashboard', href: '/dashboard/student', icon: 'dashboard' },
          { name: 'My Application', href: '/dashboard/student/application', icon: 'article' },
          { name: 'Sponsor Matches', href: '/dashboard/student/matches', icon: 'group' },
          { name: 'Profile', href: '/dashboard/student/settings', icon: 'account_circle' },
        ]
      case 'sponsor':
        return [
          { name: 'Overview', href: '/sponsor', icon: 'dashboard' },
          { name: 'Discover Students', href: '/sponsor/discover', icon: 'group' },
          { name: 'Funding Ledger', href: '/sponsor/ledger', icon: 'account_balance_wallet' },
          { name: 'Org Settings', href: '/sponsor/settings', icon: 'settings' },
        ]
      case 'admin':
        return [
          { name: 'Global Overview', href: '/admin', icon: 'dashboard' },
          { name: 'Verification Center', href: '/admin/verification', icon: 'verified_user' },
          { name: 'User CRM', href: '/admin/users', icon: 'group' },
          { name: 'Platform Settings', href: '/admin/settings', icon: 'settings' },
        ]

      default:
        return []
    }
  }

  const handleSignOut = () => {
    startTransition(async () => {
      await supabase.auth.signOut()
      window.location.href = '/login'
    })
  }

  const navItems = getNavItems()

  return (
    <>
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 border-r border-slate-800 flex flex-col pt-8 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="px-6 mb-10 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              {"Indigent-Sc".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.1 + index * 0.03,
                    type: "spring",
                    stiffness: 200
                  }}
                  className="text-xl font-black bg-gradient-to-r from-teal-400 via-indigo-400 to-teal-400 bg-[length:200%_auto] text-transparent bg-clip-text inline-block hover:animate-shimmer"
                >
                  {char}
                </motion.span>
              ))}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6 }}
                className="w-1.5 h-1.5 rounded-full bg-teal-400 ml-0.5 mt-2 shadow-[0_0_8px_rgba(45,212,191,0.6)]"
              />
            </motion.div>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden p-1 text-slate-400 hover:text-white"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>

          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname?.startsWith(`${item.href}/`)
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 group",
                  isActive 
                    ? "bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 shadow-lg shadow-indigo-950/20" 
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                )}
              >
                <span className={cn(
                  "material-symbols-outlined text-[20px] transition-transform duration-300",
                  isActive ? "scale-110" : "group-hover:scale-110"
                )}>
                  {item.icon}
                </span>
                <span className="font-medium">{item.name}</span>
              </Link>
            )
          })}
        </nav>

        {/* User Actions */}
        <div className="p-4 border-t border-slate-800">
          <button
            onClick={handleSignOut}
            disabled={isPending}
            className={cn(
              "flex items-center space-x-3 w-full px-4 py-3 text-slate-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors text-left",
              isPending && "opacity-50 cursor-not-allowed"
            )}
          >
            {isPending ? (
              <span className="material-symbols-outlined w-5 h-5 text-red-400 animate-spin">refresh</span>
            ) : (
              <span className="material-symbols-outlined text-[20px]">logout</span>

            )}
            <span className="font-medium">
              {isPending ? 'Signing Out...' : 'Sign Out'}
            </span>
          </button>
        </div>
      </div>
    </>
  )
}
