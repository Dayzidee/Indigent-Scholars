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
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ]

  return (
    <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-8 md:gap-x-12 lg:gap-x-16 gap-y-4 font-headline">
      {units.map((unit) => (
        <div key={unit.label} className="flex flex-col items-center">
          <AnimatePresence mode="popLayout">
            <motion.span
              key={unit.value}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter"
            >
              {unit.label === 'Days' ? unit.value : (unit.value < 10 ? `0${unit.value}` : unit.value)}
            </motion.span>
          </AnimatePresence>
          
          <span className="text-[11px] md:text-sm font-bold tracking-widest text-primary-fixed-dim mt-[-8px] md:mt-[-15px]">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  )
}
