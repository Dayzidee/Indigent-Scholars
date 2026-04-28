'use client'

/**
 * SideNavBar (Student) — thin wrapper around DashboardSidebar.
 * All shared logic (backdrop, active indicator, sign-out) lives in DashboardSidebar.
 */

import { DashboardSidebar, type DashboardSidebarProps } from '@/components/dashboard/shared/DashboardSidebar'

const navItems = [
  { href: '/dashboard/student',              icon: 'dashboard',        label: 'Dashboard Overview' },
  { href: '/dashboard/student/registration', icon: 'app_registration', label: 'Registration' },
  { href: '/dashboard/student/application',  icon: 'description',      label: 'My Application' },
  { href: '/dashboard/student/matches',      icon: 'handshake',        label: 'Sponsor Matches' },
  { href: '/dashboard/student/help',         icon: 'help_outline',     label: 'Help Center' },
  { href: '/dashboard/student/settings',     icon: 'settings',         label: 'Settings' },
]

const profileCard = (
  <div className="flex items-center gap-3 px-4 py-2 bg-zinc-800/50 border border-zinc-700 transition-colors rounded-xl group overflow-hidden">
    <div className="w-10 h-10 rounded-full bg-zinc-700 overflow-hidden border-2 border-zinc-600 transition-all shrink-0">
      <img
        alt="Student Profile"
        className="w-full h-full object-cover"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3jaqrJMFWo42oRuzKYGkuN9dPF0AY3kyzThw7GzUxKaiqiYkqcoNdo-qRbDhysrr-WIrQEm9pQYZvMMkGlr6AHdrRSnOi1-pxPzQNoNwD3ifkM9alcUezU7YOtCXy2jzWfOUQ0bRauW_Cf8ExfQyLC0dfLdwBb-Ae0WdxPNn9N1ngYW5g6Hi3nZ4clPlskjcbWdaHYMJlnbaBzcDWJpLY9xGjAx9rIM3wnXWKzqNAWnypC7K7bRyBvOzqM8ySwQ4-qJhJQxJ-vZdn"
      />
    </div>
    <div className="min-w-0">
      <p className="text-sm font-bold text-on-surface truncate font-headline">Amara Okafor</p>
      <p className="text-[10px] text-zinc-500 uppercase font-black font-headline tracking-wider truncate">Verified Scholar</p>
    </div>
  </div>
)

type SideNavBarProps = Pick<DashboardSidebarProps, 'isOpen' | 'onClose'>

export function SideNavBar({ isOpen, onClose }: SideNavBarProps) {
  return (
    <DashboardSidebar
      navItems={navItems}
      brandLabel="INDIGENT-SC"
      portalLabel="Scholar Portal"
      ctaLabel="Apply for Funding"
      ctaHref="/dashboard/student/application"
      isOpen={isOpen}
      onClose={onClose}
      profileCard={profileCard}
    />
  )
}
