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
    { label: 'days', value: timeLeft.days },
    { label: 'hours', value: timeLeft.hours },
    { label: 'minutes', value: timeLeft.minutes },
    { label: 'seconds', value: timeLeft.seconds }
  ]

  return (
    <div className="w-full grid grid-cols-4 items-baseline font-headline px-0">
      {units.map((unit, i) => (
        <div key={unit.label} className="flex flex-col items-center justify-center">
          <div className="flex items-baseline gap-1 md:gap-2">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={unit.value}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter"
              >
                {unit.label === 'days' ? unit.value : (unit.value < 10 ? `0${unit.value}` : unit.value)}
              </motion.span>
            </AnimatePresence>
            
            <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-[#0052CC] mb-1 md:mb-3 opacity-90">
              {unit.label.charAt(0)}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
