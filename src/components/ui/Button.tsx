'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  isLoading?: boolean
  children: React.ReactNode
  iconRight?: string
  iconLeft?: string
}

export function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  children,
  className,
  iconRight,
  iconLeft,
  disabled,
  ...props
}: ButtonProps) {
  
  const variantStyles = {
    primary: "bg-[#0052CC] text-white hover:bg-[#2563eb] shadow-md shadow-blue-600/10",
    secondary: "bg-zinc-900 text-white hover:bg-zinc-800 shadow-md",
    outline: "bg-zinc-900 border border-zinc-700 text-zinc-300 hover:bg-zinc-800",
    ghost: "bg-transparent text-zinc-300 hover:bg-zinc-800",
    glass: "bg-white/10 backdrop-blur-md border border-zinc-800/20 text-white hover:bg-zinc-800/20"
  }

  const sizes = {
    sm: "px-4 py-2 text-[10px]",
    md: "px-6 py-2.5 text-xs",
    lg: "px-8 py-3.5 text-sm",
    xl: "px-10 py-5 text-base"
  }

  return (
    <motion.button
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      disabled={disabled || isLoading}
      className={cn(
        "relative rounded-2xl font-black font-headline uppercase tracking-widest transition-all duration-200 flex items-center justify-center gap-2",
        variantStyles[variant],
        sizes[size],
        disabled && "opacity-50 cursor-not-allowed grayscale",
        isLoading && "text-transparent cursor-wait",
        className
      )}
      {...props}
    >
      {/* Loading Spinner */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="material-symbols-outlined text-[1.5em] animate-spin">refresh</span>
        </div>
      )}

      {/* Button Content */}
      <span className={cn("flex items-center gap-2 transition-opacity", isLoading ? "opacity-0" : "opacity-100")}>
        {iconLeft && <span className="material-symbols-outlined text-[1.25em]">{iconLeft}</span>}
        {children}
        {iconRight && <span className="material-symbols-outlined text-[1.25em]">{iconRight}</span>}
      </span>
    </motion.button>
  )
}
