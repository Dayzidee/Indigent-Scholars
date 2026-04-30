'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { MissionCountdown } from './MissionCountdown'
import { ActionCard } from './ActionCard'

export function RedesignedHero() {
  return (
    <div className="w-full">
      {/* Top Section: Centralized Countdown & Goal - FULL WIDTH with Glassmorphism */}
      <section className="w-full bg-white/5 backdrop-blur-3xl pt-28 pb-8 px-[15px] relative overflow-hidden border-b border-white/10 shadow-2xl">
        <div className="relative z-10 space-y-6 text-center">
          <MissionCountdown />

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="w-full overflow-hidden"
          >
            <p className="text-sm md:text-base font-body font-bold text-white whitespace-nowrap tracking-tight">
              By <span className="text-white font-black font-headline px-1">2050</span>, our goal is to provide funding support for <span className="text-white font-black font-headline px-1">50,000+</span> students to successfully obtain a university degree.
            </p>
          </motion.div>
        </div>

        {/* Decorative Blurs */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#0052CC]/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] -z-10" />
      </section>

      {/* Middle Section: Cards & Image Grid - CONSTRAINED WIDTH */}
      <section className="relative pt-20 pb-20 px-5 lg:px-12 max-w-7xl mx-auto overflow-hidden">
        <div className="flex flex-col gap-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-center">
            {/* Left: Action Cards Stack */}
            <div className="md:col-span-5 flex flex-col gap-6 justify-center">
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
            <div className="md:col-span-7 relative flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="rounded-[3rem] overflow-hidden shadow-2xl shadow-black/40 border border-zinc-800/10 aspect-video lg:aspect-[4/3] xl:aspect-auto max-h-[450px]"
              >
                <Image 
                  src="/future_leaders.png"
                  alt="Future Leaders of Nigeria"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0052CC]/10 to-transparent pointer-events-none" />
              </motion.div>
              
              {/* Decorative Blurs */}
              <div className="absolute -z-10 -bottom-20 -right-20 w-80 h-80 bg-[#0052CC]/5 rounded-full blur-[100px]" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
