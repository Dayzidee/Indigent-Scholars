'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  {
    label: 'Dashboard Overview',
    href: '/dashboard/student',
    icon: 'dashboard',
  },
  {
    label: 'Registration',
    href: '/dashboard/student/registration',
    icon: 'app_registration',
  },
  {
    label: 'My Application',
    href: '/dashboard/student/application',
    icon: 'description',
  },
  {
    label: 'Sponsor Matches',
    href: '/dashboard/student/matches',
    icon: 'handshake',
  },
  {
    label: 'Settings',
    href: '/dashboard/student/settings',
    icon: 'settings',
  },
]

interface SideNavBarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function SideNavBar({ isOpen, onClose }: SideNavBarProps) {
  const pathname = usePathname()

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
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] md:hidden"
          />
        )}
      </AnimatePresence>

      <aside 
        className={cn(
          "fixed left-0 top-0 h-full w-64 bg-slate-50 flex flex-col z-[70] border-r border-zinc-100 transition-transform duration-300 md:translate-x-0 overflow-y-auto",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="px-6 py-10 flex justify-between items-center border-b border-zinc-50">
          <div>
            <h1 className="text-xl font-black text-[#0052CC] tracking-tighter font-headline mb-0.5">INDIGENT-SC</h1>
            <p className="text-[9px] text-zinc-400 font-extrabold font-headline uppercase tracking-[0.2em] leading-none">Architecture of Hope</p>
          </div>
          <button onClick={onClose} className="md:hidden p-2 hover:bg-zinc-200 rounded-lg transition-colors">
            <span className="material-symbols-outlined text-zinc-600">close</span>
          </button>
        </div>

        <nav className="flex-1 px-2 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 transition-colors rounded-lg",
                  isActive
                    ? "text-blue-700 font-bold border-r-4 border-blue-700 bg-blue-50/50"
                    : "text-zinc-500 hover:bg-zinc-100"
                )}
              >
                <span className={cn("material-symbols-outlined", isActive && "fill-current")} data-icon={item.icon}>
                  {item.icon}
                </span>
                <span className="font-headline tracking-tight font-semibold">{item.label}</span>
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-zinc-100">
          <button className="w-full py-3 px-4 bg-[#003d9b] text-white font-semibold rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 font-headline tracking-tight">
            Apply for Funding
          </button>
        </div>

        <div className="px-2 pb-6 space-y-2">
          <Link
            href="/dashboard/student/help"
            onClick={onClose}
            className={cn(
              "flex items-center gap-3 px-4 py-3 transition-colors rounded-lg mb-2",
              pathname === '/dashboard/student/help' ? "text-blue-700 bg-blue-50/50 font-bold" : "text-zinc-500 hover:bg-zinc-100"
            )}
          >
            <span className="material-symbols-outlined font-headline" data-icon="help_outline">
              help_outline
            </span>
            <span className="font-headline tracking-tight font-semibold">Help Center</span>
          </Link>
          
          <button
            onClick={async () => {
              const { createClient } = await import('@/lib/supabase/client')
              const supabase = createClient()
              await supabase.auth.signOut()
              window.location.href = '/'
            }}
            className="w-full flex items-center gap-3 px-4 py-3 text-error hover:bg-error/5 transition-colors rounded-lg mb-4 cursor-pointer font-headline"
          >
            <span className="material-symbols-outlined" data-icon="logout">
              logout
            </span>
            <span className="font-headline tracking-tight font-semibold">Logout</span>
          </button>

          <div className="flex items-center gap-3 px-4 py-2 bg-white/50 border border-zinc-100 transition-colors rounded-xl group overflow-hidden">
            <div className="w-10 h-10 rounded-full bg-zinc-200 overflow-hidden border-2 border-white shadow-sm transition-all shrink-0">
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
        </div>
      </aside>
    </>
  )
}
