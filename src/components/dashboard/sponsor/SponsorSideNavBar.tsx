'use client'

/**
 * SponsorSideNavBar — thin wrapper around DashboardSidebar.
 * All shared logic (backdrop, active indicator, sign-out) lives in DashboardSidebar.
 */

import { DashboardSidebar, type DashboardSidebarProps } from '@/components/dashboard/shared/DashboardSidebar'

const navItems = [
  { href: '/dashboard/sponsor',            icon: 'dashboard',               label: 'Impact Overview' },
  { href: '/dashboard/sponsor/discovery',  icon: 'person_search',           label: 'Discover Students' },
  { href: '/dashboard/sponsor/education',  icon: 'school',                  label: 'Education Portfolio' },
  { href: '/dashboard/sponsor/ledger',     icon: 'account_balance_wallet',  label: 'Funding Ledger' },
  { href: '/dashboard/sponsor/settings',   icon: 'settings',                label: 'Org Settings' },
  { href: '/dashboard/sponsor/help',       icon: 'help',                    label: 'Help Center' },
]

const profileCard = (
  <div className="flex items-center gap-3 px-3 py-3 bg-zinc-800/80 border border-zinc-700 transition-colors rounded-2xl group overflow-hidden">
    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0 border border-primary/10">
      <span className="material-symbols-outlined text-primary text-xl">account_balance</span>
    </div>
    <div className="min-w-0">
      <p className="text-sm font-bold text-zinc-100 truncate font-headline leading-tight">Global Scholars Inc.</p>
      <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest truncate">Platinum Partner</p>
    </div>
  </div>
)

type SponsorSideNavBarProps = Pick<DashboardSidebarProps, 'isOpen' | 'onClose'>

export function SponsorSideNavBar({ isOpen, onClose }: SponsorSideNavBarProps) {
  return (
    <DashboardSidebar
      navItems={navItems}
      brandLabel="Indigent-Sc"
      portalLabel="Prestige Sponsor"
      ctaLabel="Fund Scholarship"
      ctaHref="/dashboard/sponsor/fund"
      isOpen={isOpen}
      onClose={onClose}
      profileCard={profileCard}
    />
  )
}
