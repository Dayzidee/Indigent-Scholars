'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navItems = [
  {
    label: 'Dashboard Overview',
    href: '/dashboard/student',
    icon: 'dashboard',
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

export function SideNavBar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-slate-50 flex flex-col z-50 border-r border-zinc-100">
      <div className="px-6 py-8">
        <h1 className="text-xl font-black text-blue-800 tracking-tight font-headline">Indigent-Sc</h1>
        <p className="text-xs text-zinc-500 font-medium">Scholar Portal</p>
      </div>

      <nav className="flex-1 px-2 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
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
        <button className="w-full py-3 px-4 bg-[#003d9b] text-white font-semibold rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2">
          Apply for Funding
        </button>
      </div>

      <div className="px-2 pb-6">
        <Link
          href="/dashboard/student/help"
          className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:bg-zinc-100 transition-colors rounded-lg"
        >
          <span className="material-symbols-outlined" data-icon="help_outline">
            help_outline
          </span>
          <span className="font-headline tracking-tight font-semibold">Help Center</span>
        </Link>
        <div className="mt-4 px-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-zinc-200 overflow-hidden border-2 border-white shadow-sm">
            <img
              alt="Student Profile"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3jaqrJMFWo42oRuzKYGkuN9dPF0AY3kyzThw7GzUxKaiqiYkqcoNdo-qRbDhysrr-WIrQEm9pQYZvMMkGlr6AHdrRSnOi1-pxPzQNoNwD3ifkM9alcUezU7YOtCXy2jzWfOUQ0bRauW_Cf8ExfQyLC0dfLdwBb-Ae0WdxPNn9N1ngYW5g6Hi3nZ4clPlskjcbWdaHYMJlnbaBzcDWJpLY9xGjAx9rIM3wnXWKzqNAWnypC7K7bRyBvOzqM8ySwQ4-qJhJQxJ-vZdn"
            />
          </div>
          <div>
            <p className="text-sm font-bold text-on-surface">Amara Okafor</p>
            <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider">Verified Scholar</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
