'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { SponsorSideNavBar } from '@/components/dashboard/sponsor/SponsorSideNavBar'
import { SponsorTopNavBar } from '@/components/dashboard/sponsor/SponsorTopNavBar'
import { motion, AnimatePresence } from 'framer-motion'

interface SponsorLayoutProps {
  children: React.ReactNode
}

import { FloatingCustomerCare } from '@/components/ui/FloatingCustomerCare'

export default function SponsorLayout({ children }: SponsorLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-body antialiased selection:bg-primary/10 overflow-x-hidden flex max-w-full">
      <SponsorSideNavBar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <div className="flex-1 lg:ml-64 transition-all duration-300 min-h-screen flex flex-col relative min-w-0 max-w-full overflow-x-hidden">
        <SponsorTopNavBar onMenuClick={() => setIsSidebarOpen(true)} />
        
        <main className="pt-24 md:pt-32 flex-1 relative p-4 md:p-8 lg:p-10 min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={usePathname()}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
        
        <FloatingCustomerCare />
      </div>
    </div>
  )
}
