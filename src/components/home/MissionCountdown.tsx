'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function MissionCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null)

  useEffect(() => {
    const targetDate = new Date('2050-01-01T00:00:00Z').getTime()

    const calculateTimeLeft = () => {
      const difference = targetDate - new Date().getTime()
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!timeLeft) return (
    <div className="h-20 flex items-center justify-center">
      <div className="w-64 h-12 bg-surface-container rounded-2xl animate-pulse" />
    </div>
  )

  const units = [
    { label: 'days', value: timeLeft.days, prefix: 'd' },
    { label: 'hours', value: timeLeft.hours, prefix: 'h' },
    { label: 'minutes', value: timeLeft.minutes, prefix: 'm' },
    { label: 'seconds', value: timeLeft.seconds, prefix: 's' }
  ]

  return (
    <div className="flex flex-wrap items-baseline justify-center gap-x-4 md:gap-x-10 gap-y-2 font-headline">
      {units.map((unit, i) => (
        <div key={unit.label} className="flex items-baseline gap-1 group">
          <AnimatePresence mode="popLayout">
            <motion.span
              key={unit.value}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-6xl md:text-8xl font-black text-on-surface tracking-tighter"
            >
              {unit.value}
            </motion.span>
          </AnimatePresence>
          <span className="text-2xl md:text-3xl font-black text-on-surface/30 group-hover:text-primary transition-colors duration-500">
            {unit.prefix}
          </span>
        </div>
      ))}
    </div>
  )
}
