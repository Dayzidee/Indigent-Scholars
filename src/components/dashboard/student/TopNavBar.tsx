'use client'

import { usePathname } from 'next/navigation'
import { Bell } from 'lucide-react'

const getTitle = (pathname: string) => {
  if (pathname.includes('/application')) return 'My Application'
  if (pathname.includes('/settings')) return 'Settings'
  if (pathname.includes('/matches')) return 'Sponsor Matches'
  return 'Dashboard'
}

export function TopNavBar() {
  const pathname = usePathname()
  const title = getTitle(pathname)

  return (
    <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-[72px] bg-white/80 backdrop-blur-xl flex justify-between items-center px-8 z-40 border-b border-zinc-100 dark:border-zinc-800">
      <div className="flex items-center gap-4">
        <span className="text-xl font-black bg-gradient-to-b from-[#0052CC] to-[#003D9B] bg-clip-text text-transparent font-headline tracking-tight">Indigent-Sc</span>
        <span className="h-4 w-px bg-zinc-200"></span>
        <h1 className="font-headline tracking-tight text-xl font-bold text-on-surface">{title}</h1>
      </div>
      <div className="flex items-center gap-6">
        <div className="hidden md:flex gap-6 mr-6 items-center">
          <span className="text-[#0052CC] font-bold font-headline text-sm tracking-wide cursor-pointer transition-colors hover:opacity-80">DASHBOARD</span>
          <span className="text-zinc-500 font-headline text-sm tracking-wide cursor-pointer transition-colors hover:text-[#0052CC]">RESOURCES</span>
        </div>
        <button className="relative text-zinc-500 hover:bg-zinc-50 p-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-primary/20 group">
          <span className="material-symbols-outlined text-zinc-500 group-hover:text-primary transition-colors" data-icon="notifications">
            notifications
          </span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border-2 border-white"></span>
        </button>
        <div className="w-10 h-10 rounded-full overflow-hidden border border-zinc-200 shadow-sm transition-transform hover:scale-105">
          <img
            alt="User avatar"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQz6E9p6v8S6r9r9r9r9r9r9r9"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3jaqrJMFWo42oRuzKYGkuN9dPF0AY3kyzThw7GzUxKaiqiYkqcoNdo-qRbDhysrr-WIrQEm9pQYZvMMkGlr6AHdrRSnOi1-pxPzQNoNwD3ifkM9alcUezU7YOtCXy2jzWfOUQ0bRauW_Cf8ExfQyLC0dfLdwBb-Ae0WdxPNn9N1ngYW5g6Hi3nZ4clPlskjcbWdaHYMJlnbaBzcDWJpLY9xGjAx9rIM3wnXWKzqNAWnypC7K7bRyBvOzqM8ySwQ4-qJhJQxJ-vZdn'
            }}
          />
        </div>
      </div>
    </header>
  )
}
