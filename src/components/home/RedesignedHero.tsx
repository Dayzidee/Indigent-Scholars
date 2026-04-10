'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { MissionCountdown } from './MissionCountdown'
import { ActionCard } from './ActionCard'

export function RedesignedHero() {
  return (
    <section className="relative pt-12 md:pt-20 pb-8 px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden">

      <div className="flex flex-col gap-8 md:gap-10 relative z-10">
        {/* Top Section: Centralized Countdown & Goal */}
        <div className="space-y-4 text-center max-w-4xl mx-auto p-8 lg:p-12 rounded-[3rem] bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl shadow-zinc-200/50">
          <div className="flex flex-col items-center mb-10 gap-2">
             <h2 className="text-sm font-black text-[#0052CC] uppercase tracking-[0.4em] mb-2">INDIGENT-SC</h2>
             <h1 className="text-4xl lg:text-5xl font-headline font-black text-zinc-900 tracking-tighter leading-none">Architecture of Hope</h1>
          </div>
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
