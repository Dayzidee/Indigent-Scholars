'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTransition } from 'react'
import { signOutAction } from '@/lib/actions/auth'
import { 
  LayoutDashboard, 
  ShieldCheck, 
  Users, 
  Wallet, 
  Settings, 
  PlusCircle,
  LogOut
} from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Overview',    href: '/dashboard/admin',              icon: LayoutDashboard },
  { name: 'Verification',href: '/dashboard/admin/verification', icon: ShieldCheck },
  { name: 'User CRM',    href: '/dashboard/admin/users',        icon: Users },
  { name: 'Financials',  href: '/dashboard/admin/financials',   icon: Wallet },
  { name: 'Settings',    href: '/dashboard/admin/settings',     icon: Settings },
]

interface AdminSidebarProps {
  isOpen?: boolean
  onClose?: () => void
}

export function AdminSidebar({ isOpen, onClose }: AdminSidebarProps) {
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const handleSignOut = () => {
    startTransition(async () => {
      await signOutAction()
    })
  }

  return (
    <>
      {/* Mobile Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside className={cn(
        "fixed left-0 top-0 h-screen w-64 bg-[#313030] text-white flex flex-col py-6 z-50 shadow-2xl transition-transform duration-300 transform md:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="px-6 mb-10">
          <h1 className="text-xl font-bold tracking-tight">EdAfrica Admin</h1>
          <p className="text-[10px] text-gray-400 font-medium uppercase tracking-[0.2em] mt-1">Management Portal</p>
        </div>

        <nav className="flex-1 px-3 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                  isActive 
                    ? "bg-[#0052CC] text-white shadow-lg shadow-blue-900/20 scale-[0.98]" 
                    : "text-gray-400 hover:text-white hover:bg-[#3d3c3c]"
                )}
                onClick={onClose}
              >
                <item.icon className={cn(
                  "w-5 h-5",
                  isActive ? "text-white" : "text-gray-400 group-hover:text-white"
                )} />
                <span className="font-medium text-sm">{item.name}</span>
              </Link>
            )
          })}
        </nav>

        <div className="px-4 mt-auto space-y-4">
          <button className="w-full bg-[#0052CC] hover:bg-[#0047b3] text-white py-3 rounded-xl font-bold text-xs shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]">
            <PlusCircle className="w-4 h-4" />
            New Scholarship
          </button>
          
          <button 
            onClick={handleSignOut}
            disabled={isPending}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-rose-400 hover:bg-rose-400/10 rounded-xl transition-all duration-200",
              isPending && "opacity-50 cursor-not-allowed"
            )}
          >
            <LogOut className={cn("w-5 h-5", isPending && "animate-spin")} />
            <span className="font-medium text-sm">
              {isPending ? 'Signing Out...' : 'Sign Out'}
            </span>
          </button>
        </div>
      </aside>
    </>
  )
}
