'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SearchableSelectProps {
  label: string
  options: string[]
  value: string
  onChange: (value: string) => void
  icon?: string
  placeholder?: string
  error?: string
  className?: string
  disabled?: boolean
}

export function SearchableSelect({
  label,
  options,
  value,
  onChange,
  icon,
  placeholder,
  error,
  className,
  disabled
}: SearchableSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const containerRef = useRef<HTMLDivElement>(null)
  
  const hasValue = !!value
  const filteredOptions = options.filter(opt => 
    opt.toLowerCase().includes(search.toLowerCase())
  )

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className={cn("relative w-full group", isOpen ? "z-[100]" : "z-10", className)} ref={containerRef}>
      <div 
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={cn(
          "relative flex items-center min-h-[56px] rounded-xl border-2 transition-all duration-200 cursor-pointer",
          isOpen ? "border-[#0052CC] ring-4 ring-blue-600/5 bg-zinc-900 shadow-sm" : "border-zinc-700 bg-zinc-800/30",
          error ? "border-red-500 bg-red-50/30" : "group-hover:border-zinc-600",
          hasValue && !isOpen && "bg-zinc-900 border-zinc-700",
          disabled && "opacity-50 cursor-not-allowed bg-zinc-800"
        )}
      >
        {/* Icon */}
        {icon && (
          <span className={cn(
            "material-symbols-outlined ml-4 text-xl transition-colors duration-200",
            isOpen ? "text-[#0052CC]" : "text-zinc-400"
          )}>
            {icon}
          </span>
        )}

        {/* Display Value */}
        <div className={cn(
          "flex-1 px-4 py-4 text-sm font-medium transition-colors",
          hasValue ? "text-zinc-100" : "text-zinc-400",
          icon && "pl-2"
        )}>
          {(isOpen || hasValue) ? (value || placeholder || "Select...") : ""}
        </div>

        {/* Dropdown Arrow */}
        <span className={cn(
          "material-symbols-outlined mr-4 text-xl text-zinc-400 transition-transform duration-300",
          isOpen && "rotate-180 text-[#0052CC]"
        )}>
          expand_more
        </span>

        {/* Floating Label */}
        <motion.label
          initial={false}
          animate={{
            y: (isOpen || hasValue) ? -24 : 0,
            x: (isOpen || hasValue) ? (icon ? -32 : 0) : 0,
            scale: (isOpen || hasValue) ? 0.85 : 1,
            color: error ? "#ef4444" : (isOpen ? "#0052CC" : "#71717a")
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={cn(
            "absolute left-4 pointer-events-none font-bold uppercase tracking-wider text-[10px] select-none",
            icon && !isOpen && !hasValue && "left-12",
            (isOpen || hasValue) && "bg-zinc-900 px-2 py-0.5 rounded-sm z-10"
          )}
        >
          {label}
        </motion.label>
      </div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 4, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute left-0 right-0 z-50 mt-1 overflow-hidden bg-zinc-900 border border-zinc-700 rounded-2xl shadow-2xl shadow-blue-900/10 flex flex-col max-h-80"
          >
            {/* Search Box */}
            <div className="p-3 border-b border-zinc-800 sticky top-0 bg-zinc-900 z-10">
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-3 text-lg text-zinc-400">search</span>
                <input
                  autoFocus
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 text-sm bg-zinc-800 border-none rounded-xl focus:ring-2 focus:ring-[#0052CC]/10 text-zinc-100 placeholder:text-zinc-400 font-medium"
                />
              </div>
            </div>

            {/* Options List */}
            <div className="overflow-y-auto no-scrollbar py-2">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => {
                      onChange(opt)
                      setIsOpen(false)
                      setSearch('')
                    }}
                    className={cn(
                      "w-full text-left px-5 py-3 text-sm font-medium transition-colors",
                      value === opt ? "bg-blue-950/30 text-[#0052CC]" : "text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100"
                    )}
                  >
                    <div className="flex items-center justify-between">
                      {opt}
                      {value === opt && (
                        <span className="material-symbols-outlined text-[#0052CC] text-lg font-bold">check</span>
                      )}
                    </div>
                  </button>
                ))
              ) : (
                <div className="px-5 py-8 text-center">
                  <span className="material-symbols-outlined text-3xl text-zinc-200 mb-2">search_off</span>
                  <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest">No results found</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error Message */}
      {error && (
        <p className="mt-1.5 ml-1 text-[10px] font-bold uppercase tracking-widest text-red-500">
          {error}
        </p>
      )}
    </div>
  )
}
