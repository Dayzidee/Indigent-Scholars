'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export function FloatingCustomerCare() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-3 pointer-events-none">
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            className="bg-primary text-white px-4 py-2 rounded-xl text-xs font-bold shadow-xl border border-white/10 pointer-events-auto"
          >
            Need help? Chat with an advisor
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-14 h-14 rounded-full bg-primary text-white shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all pointer-events-auto group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        <span className="material-symbols-outlined text-3xl relative z-10 transition-transform group-hover:rotate-12">support_agent</span>
      </button>
    </div>
  )
}

import { AnimatePresence } from 'framer-motion'
