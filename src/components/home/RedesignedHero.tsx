'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { MissionCountdown } from './MissionCountdown'
import { ActionCard } from './ActionCard'

export function RedesignedHero() {
  return (
    <section className="relative pt-12 md:pt-20 pb-8 px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Ambient Rotating Background (The Oracle) */}
      <div className="absolute inset-0 -z-20 flex items-center justify-center pointer-events-none opacity-60">
        <motion.div
           animate={{ rotate: 360 }}
           transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
           className="relative w-[600px] h-[600px] md:w-[800px] md:h-[800px]"
        >
          <div className="absolute inset-0 border-[1.5px] border-primary/10 rounded-full scale-100" />
          <div className="absolute inset-0 border-[1px] border-primary/20 rounded-full scale-[0.8] rotate-45" />
          <div className="absolute inset-0 border-[1px] border-secondary/10 rounded-full scale-[0.6] -rotate-12" />
        </motion.div>
      </div>

      <div className="flex flex-col gap-8 md:gap-10 relative z-10">
        {/* Top Section: Centralized Countdown & Goal */}
        <div className="space-y-4 text-center max-w-4xl mx-auto">
          <MissionCountdown />
          <motion.p 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl font-body font-semibold text-on-surface leading-relaxed max-w-2xl mx-auto"
          >
            By <span className="text-secondary font-black font-headline">2050</span>, our goal is to provide funding support for <span className="text-primary font-black font-headline">50,000+</span> students to successfully obtain a university degree.
          </motion.p>
        </div>

        {/* Middle Section: Cards & Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-center">
          {/* Left: Action Cards Stack */}
          <div className="lg:col-span-12 xl:col-span-5 flex flex-col sm:flex-row xl:flex-col gap-4 justify-center">
            <ActionCard 
              title="I am a student.."
              description="Apply for funding and take the first step toward your university education. Verifiable & Transparent platforms."
              buttonText="Register as Scholar"
              href="/register"
              variant="primary"
            />
            <ActionCard 
              title="I am a sponsor.."
              description="Fund the next generation of leaders and track impact through audit trails."
              buttonText="Register as Sponsor"
              href="/register"
              variant="secondary"
            />
          </div>

          {/* Right: The Professional Image */}
          <div className="lg:col-span-12 xl:col-span-7 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/[0.01] border border-outline-variant/5 aspect-video xl:aspect-auto max-h-[350px] md:max-h-[450px]"
            >
              <Image 
                src="/future_leaders.png"
                alt="Future Leaders of Nigeria"
                width={700}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none" />
            </motion.div>
            
            {/* Decorative Blurs */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-secondary/5 rounded-full blur-[100px]" />
            <div className="absolute -z-10 -top-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />
          </div>
        </div>
      </div>
    </section>
  )
}
