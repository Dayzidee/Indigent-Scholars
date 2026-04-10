'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface OutlinedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  icon?: string
  error?: string
  helperText?: string
}

export function OutlinedInput({
  label,
  icon,
  error,
  helperText,
  className,
  onFocus,
  onBlur,
  value,
  ...props
}: OutlinedInputProps) {
  const [isFocused, setIsFocused] = useState(false)
  const isDate = props.type === 'date'
  const hasValue = (value !== undefined && value !== null && value !== '') || isDate

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true)
    onFocus?.(e)
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false)
    onBlur?.(e)
  }

  return (
    <div className={cn("relative w-full group", className)}>
      <div 
        className={cn(
          "relative flex items-center min-h-[56px] rounded-xl border-2 transition-all duration-200",
          isFocused ? "border-[#0052CC] ring-4 ring-blue-600/5 bg-white shadow-sm" : "border-zinc-200 bg-zinc-50/30",
          error ? "border-red-500 bg-red-50/30" : "group-hover:border-zinc-300",
          hasValue && !isFocused && "bg-white border-zinc-200"
        )}
      >
        {/* Icon */}
        {icon && (
          <span className={cn(
            "material-symbols-outlined ml-4 text-xl transition-colors duration-200",
            isFocused ? "text-[#0052CC]" : "text-zinc-400"
          )}>
            {icon}
          </span>
        )}

        {/* Input */}
        <input
          {...props}
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={cn(
            "flex-1 w-full bg-transparent px-4 py-4 text-sm font-medium text-zinc-900 focus:outline-none",
            icon && "pl-2"
          )}
          placeholder={ (!isFocused && !hasValue) ? "" : props.placeholder }
        />

        {/* Floating Label */}
        <motion.label
          initial={false}
          animate={{
            y: (isFocused || hasValue) ? -24 : 0,
            x: (isFocused || hasValue) ? (icon ? -32 : 0) : 0,
            scale: (isFocused || hasValue) ? 0.85 : 1,
            color: error ? "#ef4444" : (isFocused ? "#0052CC" : "#71717a")
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={cn(
            "absolute left-4 pointer-events-none font-bold uppercase tracking-wider text-[10px] select-none",
            icon && !isFocused && !hasValue && "left-12",
            (isFocused || hasValue) && "bg-white px-2 py-0.5 rounded-sm z-10"
          )}
        >
          {label}
        </motion.label>
      </div>

      {/* Message Area */}
      <AnimatePresence>
        {(error || helperText) && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={cn(
              "mt-1.5 ml-1 text-[10px] font-bold uppercase tracking-widest",
              error ? "text-red-500" : "text-zinc-400"
            )}
          >
            {error || helperText}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}
