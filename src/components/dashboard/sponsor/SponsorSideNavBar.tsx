'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

import { useTransition } from 'react'
import { signOutAction } from '@/lib/actions/auth'

const navLinks = [
  { href: '/dashboard/sponsor', icon: 'dashboard', label: 'Impact Overview' },
  { href: '/dashboard/sponsor/discovery', icon: 'person_search', label: 'Discover Students' },
  { href: '/dashboard/sponsor/education', icon: 'school', label: 'Education Portfolio' },
  { href: '/dashboard/sponsor/ledger', icon: 'account_balance_wallet', label: 'Funding Ledger' },
  { href: '/dashboard/sponsor/settings', icon: 'settings', label: 'Org Settings' },
  { href: '/dashboard/sponsor/help', icon: 'help', label: 'Help Center' },
]

import { motion, AnimatePresence } from 'framer-motion'
import { useRecentlyViewed } from '@/hooks/useRecentlyViewed'
import { STUDENTS_DATA } from '@/lib/constants/mock-data'

interface SponsorSideNavBarProps {
  isOpen?: boolean
  onClose?: () => void
}

export function SponsorSideNavBar({ isOpen, onClose }: SponsorSideNavBarProps) {
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()
  const { recentIds } = useRecentlyViewed()
  
  const recentStudents = recentIds
    .map(id => STUDENTS_DATA.find(s => s.id === id))
    .filter(Boolean)
    .slice(0, 3)

  const handleSignOut = () => {
    startTransition(async () => {
      await signOutAction()
    })
  }

  return (
    <>
      {/* Mobile Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] lg:hidden"
          />
        )}
      </AnimatePresence>

      <aside 
        className={cn(
          "fixed left-0 top-0 h-screen w-64 bg-white border-r border-zinc-100 z-[70] py-8 px-4 flex flex-col transition-transform duration-300 lg:translate-x-0 overflow-y-auto shadow-sm",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Brand & Badge */}
        <div className="mb-12 px-2 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold tracking-tighter text-[#0052CC]">Indigent-Sc</h1>
            <p className="text-[10px] font-bold text-zinc-400 mt-0.5 uppercase tracking-widest font-label leading-none">Prestige Sponsor</p>
          </div>
          <button onClick={onClose} className="lg:hidden p-2 hover:bg-zinc-100 rounded-lg transition-colors">
            <span className="material-symbols-outlined text-zinc-600">close</span>
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={cn(
                  "flex items-center gap-3 px-4 py-3.5 transition-all rounded-lg relative group",
                  isActive 
                    ? "text-[#0052CC] font-bold" 
                    : "text-zinc-500 hover:text-[#0052CC] hover:bg-zinc-50/50"
                )}
              >
                <span className={cn(
                  "material-symbols-outlined text-xl transition-colors",
                  isActive ? "text-[#0052CC]" : "text-zinc-400 group-hover:text-[#0052CC]"
                )}>{link.icon}</span>
                <span className="text-sm tracking-tight">{link.label}</span>
                
                {/* Active Indicator on the Right */}
                {isActive && (
                  <motion.div 
                    layoutId="sidebar-active"
                    className="absolute right-0 top-2 bottom-2 w-1 bg-[#0052CC] rounded-l-full shadow-[0_0_8px_rgba(0,82,204,0.3)]"
                  />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Footer Actions */}
        <div className="mt-auto space-y-2 pt-6">
          <Link href="/dashboard/sponsor/fund" className="block w-full" onClick={onClose}>
            <button 
              id="fund-scholarship-sidebar"
              className="w-full mb-6 py-3.5 px-4 bg-[#0052CC] text-white font-bold rounded-xl text-sm scale-98 active:scale-95 hover:bg-[#0047b3] transition-all shadow-md shadow-blue-600/10 font-headline uppercase tracking-wide"
            >
              Fund Scholarship
            </button>
          </Link>
          
          <button 
            onClick={handleSignOut}
            disabled={isPending}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-red-600 hover:bg-red-50/50 transition-colors rounded-lg group mb-6",
              isPending && "opacity-50 cursor-not-allowed"
            )}
          >
            <span className={cn(
              "material-symbols-outlined text-xl text-zinc-400 group-hover:text-red-600",
              isPending && "animate-spin"
            )}>
              {isPending ? 'refresh' : 'logout'}
            </span>
            <span className="text-sm font-medium text-left">
              {isPending ? 'Signing Out...' : 'Sign Out'}
            </span>
          </button>

          {/* Profile Card Overlay (Light Theme Match) */}
          <div className="flex items-center gap-3 px-3 py-3 bg-zinc-50/80 border border-zinc-100 transition-colors rounded-2xl group overflow-hidden">
            <div className="w-10 h-10 rounded-xl bg-[#0052CC]/5 flex items-center justify-center shrink-0 border border-[#0052CC]/10">
              <span className="material-symbols-outlined text-[#0052CC] text-xl">account_balance</span>
            </div>
            <div className="min-w-0">
              <p className="text-sm font-bold text-[#111827] truncate font-headline leading-tight">Global Scholars Inc.</p>
              <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest truncate">Platinum Partner</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
