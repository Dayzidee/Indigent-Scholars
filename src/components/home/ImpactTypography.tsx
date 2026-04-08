'use client'

import { motion } from 'framer-motion'

export function ImpactTypography() {
  return (
    <section className="px-6 lg:px-12 py-16 max-w-7xl mx-auto">
      <div className="flex flex-col gap-10">
        <div className="space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black font-headline text-primary leading-[1.1] tracking-tight"
          >
            Talent is evenly distributed. <br />
            Opportunities are not.
          </motion.h2>
        </div>

        <div className="flex flex-col gap-8 max-w-4xl">
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-xl md:text-2xl font-body font-medium text-primary/80 leading-relaxed italic"
          >
            There are millions of incredibly knowledgeable people that are eager to do more with their lives. Africa would benefit from realizing the potential energy of these ambitious people who lack the resources.
          </motion.p>
          
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.4 }}
             className="p-8 rounded-[2rem] bg-primary/5 border border-primary/10 relative overflow-hidden group shadow-sm"
          >
            <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="material-symbols-outlined text-[10rem] text-primary" style={{ fontVariationSettings: "'wght' 100" }}>campaign</span>
            </div>
            <p className="text-lg md:text-xl font-body font-bold text-primary leading-relaxed relative z-10">
              The major barrier is <span className="underline underline-offset-8 decoration-2 decoration-secondary/40">Financial Access</span>. Dreams come with a price tag and if you lack the money needed to access the right opportunity, you will eventually kill the dream.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
