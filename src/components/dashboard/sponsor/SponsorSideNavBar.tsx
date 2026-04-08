'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/sponsor', icon: 'dashboard', label: 'Impact Overview' },
  { href: '/sponsor/discover', icon: 'person_search', label: 'Discover Students' },
  { href: '/sponsor/ledger', icon: 'account_balance_wallet', label: 'Funding Ledger' },
  { href: '/sponsor/settings', icon: 'settings', label: 'Org Settings' },
]

export function SponsorSideNavBar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-stone-50 dark:bg-neutral-900 border-r-0 z-50 py-8 px-4 flex flex-col hidden lg:flex">
      {/* Brand & Badge */}
      <div className="mb-10 px-4">
        <h1 className="text-xl font-black tracking-tight text-primary dark:text-blue-200">Indigent-Sc</h1>
        <p className="text-xs font-medium text-neutral-500 mt-1 uppercase tracking-widest font-label">Prestige Sponsor</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1">
        {navLinks.map((link) => {
          const isActive = pathname === link.href
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 transition-colors rounded-lg",
                isActive 
                  ? "text-primary dark:text-blue-400 font-bold border-r-4 border-primary bg-stone-100 dark:bg-neutral-800" 
                  : "text-neutral-500 dark:text-neutral-400 hover:text-primary hover:bg-stone-100 dark:hover:bg-neutral-800"
              )}
            >
              <span className="material-symbols-outlined text-xl">{link.icon}</span>
              <span className="text-sm font-medium">{link.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* Footer Actions */}
      <div className="mt-auto space-y-1">
        <button className="w-full mb-6 py-3 px-4 asymmetric-gradient text-white font-bold rounded-xl text-sm scale-98 active:scale-95 hover:opacity-90 transition-all shadow-md font-headline">
          Fund Scholarship
        </button>
        
        <Link href="/sponsor/help" className="flex items-center gap-3 px-4 py-3 text-neutral-500 dark:text-neutral-400 hover:text-primary hover:bg-stone-100 transition-colors rounded-lg">
          <span className="material-symbols-outlined text-xl">help</span>
          <span className="text-sm font-medium">Help Center</span>
        </Link>
        
        <button className="w-full flex items-center gap-3 px-4 py-3 text-neutral-500 dark:text-neutral-400 hover:text-error hover:bg-error/5 transition-colors rounded-lg">
          <span className="material-symbols-outlined text-xl">logout</span>
          <span className="text-sm font-medium text-left">Sign Out</span>
        </button>
      </div>
    </aside>
  )
}
