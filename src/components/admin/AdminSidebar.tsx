'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTransition } from 'react'
import { cn } from '@/lib/utils'
import { signOutAction } from '@/lib/actions/auth'

interface AdminSidebarProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export function AdminSidebar({ isOpen, setIsOpen }: AdminSidebarProps) {
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const handleSignOut = () => {
    startTransition(async () => {
      await signOutAction()
    })
  }

  const navItems = [
    { name: 'Overview', href: '/admin', icon: 'dashboard' },
    { name: 'Verification', href: '/admin/verification', icon: 'verified_user' },
    { name: 'CRM', href: '/admin/users', icon: 'groups' },
    { name: 'Financials', href: '/admin/financials', icon: 'payments' },
    { name: 'Settings', href: '/admin/settings', icon: 'settings' },
  ]

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-slate-950 border-r border-slate-800 flex flex-col py-6 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 shadow-xl",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="px-6 mb-10 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-teal-400">Indigent-Sc</span> Admin
            </h1>
            <p className="text-xs text-slate-500 font-medium mt-1">Management Portal</p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden p-1 text-slate-400 hover:text-white"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/admin' && pathname?.startsWith(item.href))
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center px-4 py-3 gap-3 rounded-lg transition-all duration-200 group",
                  isActive 
                    ? "bg-teal-500/10 text-teal-400 border border-teal-500/20 shadow-sm" 
                    : "text-slate-400 hover:text-white hover:bg-slate-900"
                )}
              >
                <span className={cn(
                  "material-symbols-outlined transition-transform duration-200",
                  isActive ? "scale-110" : "group-hover:scale-110"
                )}>
                  {item.icon}
                </span>
                <span className="font-medium text-sm">{item.name}</span>
              </Link>
            )
          })}
        </nav>

        <div className="px-6 mt-auto flex flex-col gap-4">
          <button className="w-full bg-teal-600 hover:bg-teal-500 text-white py-3 rounded-xl font-bold text-sm shadow-lg shadow-teal-900/20 flex items-center justify-center gap-2 transition-colors">
            <span className="material-symbols-outlined text-sm">add</span>
            New Scholarship
          </button>

          <button
            onClick={handleSignOut}
            disabled={isPending}
            className="flex items-center gap-3 w-full px-4 py-3 text-slate-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors text-left"
          >
            {isPending ? (
              <span className="material-symbols-outlined w-5 h-5 text-red-400 animate-spin">refresh</span>
            ) : (
              <span className="material-symbols-outlined text-[20px]">logout</span>
            )}
            <span className="font-medium text-sm">
              {isPending ? 'Signing Out...' : 'Sign Out'}
            </span>
          </button>
        </div>
      </aside>
    </>
  )
}
