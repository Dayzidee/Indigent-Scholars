'use client'

/**
 * DashboardSidebar — Unified sidebar for Admin, Sponsor, and Student dashboards.
 *
 * Each dashboard passes its own `navItems`, `brandLabel`, `ctaLabel`, and `ctaHref`.
 * The shared logic (mobile backdrop, active indicator, sign-out with transition) 
 * lives here exactly once, ending the three-sidebar "Clone War".
 */

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTransition } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { signOutAction } from '@/lib/actions/auth'
import { cn } from '@/lib/utils'

// ─── Types ───────────────────────────────────────────────────────────────────

export interface SidebarNavItem {
  /** Display label */
  label: string
  /** Absolute href */
  href: string
  /**
   * Icon — either a Lucide component or a Material Symbol name string.
   * When a string is passed, it renders as <span className="material-symbols-outlined">
   */
  icon: React.ElementType | string
}

export interface DashboardSidebarProps {
  /** Nav links to render */
  navItems: SidebarNavItem[]
  /** Short brand / portal name shown in the header */
  brandLabel: string
  /** Sub-label below brand */
  portalLabel: string
  /** Label for the primary CTA button */
  ctaLabel: string
  /** Href the CTA button links to */
  ctaHref: string
  /** Controlled mobile-open state (managed by parent layout) */
  isOpen?: boolean
  onClose?: () => void
  /** Optional footer profile card content */
  profileCard?: React.ReactNode
}

// ─── Component ───────────────────────────────────────────────────────────────

export function DashboardSidebar({
  navItems,
  brandLabel,
  portalLabel,
  ctaLabel,
  ctaHref,
  isOpen,
  onClose,
  profileCard,
}: DashboardSidebarProps) {
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const handleSignOut = () => {
    startTransition(async () => {
      await signOutAction()
    })
  }

  return (
    <>
      {/* ── Mobile Backdrop ─────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="sidebar-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* ── Sidebar Panel ───────────────────────────────────────── */}
      <aside
        className={cn(
          "fixed left-0 top-0 h-screen w-64 bg-zinc-900 border-r border-zinc-800",
          "z-[70] flex flex-col py-8 px-4 transition-transform duration-300 lg:translate-x-0 overflow-y-auto",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Brand Header */}
        <div className="mb-10 px-2 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-black tracking-tighter text-primary font-headline">
              {brandLabel}
            </h1>
            <p className="text-[10px] font-bold text-zinc-400 mt-0.5 uppercase tracking-widest font-label leading-none">
              {portalLabel}
            </p>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden p-2 hover:bg-zinc-800 rounded-lg transition-colors"
            aria-label="Close sidebar"
          >
            <span className="material-symbols-outlined text-zinc-400">close</span>
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "flex items-center gap-3 px-4 py-3.5 transition-all rounded-lg relative group",
                  isActive
                    ? "text-primary font-bold"
                    : "text-zinc-400 hover:text-primary hover:bg-zinc-800/50"
                )}
              >
                {/* Icon — Lucide component or Material Symbol string */}
                {typeof item.icon === 'string' ? (
                  <span className={cn(
                    "material-symbols-outlined text-xl transition-colors",
                    isActive ? "text-primary" : "text-zinc-400 group-hover:text-primary"
                  )}>
                    {item.icon}
                  </span>
                ) : (
                  <item.icon className={cn(
                    "w-5 h-5 transition-colors",
                    isActive ? "text-primary" : "text-zinc-400 group-hover:text-primary"
                  )} />
                )}

                <span className="text-sm tracking-tight font-headline">{item.label}</span>

                {/* Animated active indicator */}
                {isActive && (
                  <motion.div
                    layoutId="sidebar-active-indicator"
                    className="absolute right-0 top-2 bottom-2 w-1 bg-primary rounded-l-full shadow-[0_0_8px_rgba(0,82,204,0.3)]"
                  />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="mt-auto pt-6 space-y-2">
          {/* Primary CTA */}
          <Link href={ctaHref} onClick={onClose} className="block">
            <button
              id="sidebar-cta"
              className="w-full mb-4 py-3.5 px-4 bg-primary text-on-primary font-bold rounded-xl text-sm hover:opacity-90 active:scale-95 transition-all shadow-md shadow-blue-600/10 font-headline uppercase tracking-wide"
            >
              {ctaLabel}
            </button>
          </Link>


          {/* Sign Out */}
          <button
            onClick={handleSignOut}
            disabled={isPending}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 text-zinc-400 hover:text-red-400 hover:bg-red-950/30 transition-colors rounded-lg group mb-4",
              isPending && "opacity-50 cursor-not-allowed"
            )}
          >
            <span className={cn(
              "material-symbols-outlined text-xl text-zinc-400 group-hover:text-red-400",
              isPending && "animate-spin"
            )}>
              {isPending ? 'refresh' : 'logout'}
            </span>
            <span className="text-sm font-medium text-left">
              {isPending ? 'Signing Out...' : 'Sign Out'}
            </span>
          </button>

          {/* Optional profile card slot */}
          {profileCard}
        </div>
      </aside>
    </>
  )
}
