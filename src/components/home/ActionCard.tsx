'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ActionCardProps {
  title: string
  description: string
  href: string
  buttonText: string
  variant?: 'primary' | 'secondary'
}

export function ActionCard({ title, description, href, buttonText, variant = 'primary' }: ActionCardProps) {
  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.01 }}
      className="group relative bg-white/5 backdrop-blur-xl p-7 rounded-[1.5rem] border border-white/10 shadow-xl shadow-primary/[0.01] flex flex-col gap-5 overflow-hidden max-w-sm"
    >
      {/* Accent Glow */}
      <div className={cn(
        "absolute -right-16 -top-16 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-40 transition-opacity duration-700",
        variant === 'primary' ? "bg-primary/20" : "bg-secondary/20"
      )} />

      <div className="relative z-10 space-y-3">
        <h3 className="text-xl font-black font-headline text-on-surface leading-tight">
          {title}
        </h3>
        <p className="text-xs text-on-surface-variant font-medium font-body leading-relaxed">
          {description}
        </p>
      </div>

      <div className="relative z-10 mt-auto">
        <Link href={href} className="inline-block w-full">
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={cn(
              "px-7 py-3.5 rounded-xl font-black text-xs uppercase tracking-[0.2em] font-label text-center shadow-md transition-all",
              variant === 'primary' 
                ? "bg-primary text-on-primary shadow-primary/10" 
                : "bg-inverse-surface text-inverse-on-surface shadow-black/10"
            )}
          >
            {buttonText}
          </motion.div>
        </Link>
      </div>
    </motion.div>
  )
}
