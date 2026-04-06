'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { createBrowserClient } from '@supabase/ssr'
import { useEffect, useState } from 'react'
import {
  LayoutDashboard,
  FileText,
  Users,
  Settings,
  LogOut,
  Wallet,
  ShieldCheck,
  UserCircle,
  X
} from 'lucide-react'

// Define the shape of our navigation items
type NavItem = {
  name: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

interface SidebarProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const pathname = usePathname()
  const [role, setRole] = useState<'student' | 'sponsor' | 'admin' | null>(null)

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
          setRole(data.role as any)
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
          { name: 'Dashboard', href: '/student', icon: LayoutDashboard },
          { name: 'My Application', href: '/student/application', icon: FileText },
          { name: 'Sponsor Matches', href: '/student/matches', icon: Users },
          { name: 'Profile', href: '/student/profile', icon: UserCircle },
        ]
      case 'sponsor':
        return [
          { name: 'Overview', href: '/sponsor', icon: LayoutDashboard },
          { name: 'Discover Students', href: '/sponsor/discover', icon: Users },
          { name: 'Funding Ledger', href: '/sponsor/ledger', icon: Wallet },
          { name: 'Org Settings', href: '/sponsor/settings', icon: Settings },
        ]
      case 'admin':
        return [
          { name: 'Global Overview', href: '/admin', icon: LayoutDashboard },
          { name: 'Verification Center', href: '/admin/verification', icon: ShieldCheck },
          { name: 'User CRM', href: '/admin/users', icon: Users },
          { name: 'Platform Settings', href: '/admin/settings', icon: Settings },
        ]
      default:
        return []
    }
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    window.location.href = '/login'
  }

  const navItems = getNavItems()

  return (
    <>
      <div 
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 border-r border-slate-800 flex flex-col pt-8 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Branding */}
        <div className="px-6 mb-10 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold bg-gradient-to-r from-teal-400 to-indigo-400 text-transparent bg-clip-text">
              EdAfrica.
            </span>
          </Link>
          <button 
            onClick={() => setIsOpen(false)}
            className="lg:hidden p-1 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname?.startsWith(`${item.href}/`)
            const Icon = item.icon

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => {
                  if (window.innerWidth < 1024) setIsOpen(false)
                }}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-indigo-500/10 text-indigo-400' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </Link>
            )
          })}
        </nav>

        {/* User Actions */}
        <div className="p-4 border-t border-slate-800">
          <button
            onClick={handleSignOut}
            className="flex items-center space-x-3 w-full px-4 py-3 text-slate-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors text-left"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Sign Out</span>
          </button>
        </div>
      </div>
    </>
  )
}
