'use client'

import { motion } from 'framer-motion';

const steps = [
  { icon: 'verified', title: '1. Verification', desc: 'Rigorous academic and financial vetting ensures only the most deserving and authentic scholars enter our registry.', color: 'primary' },
  { icon: 'handshake', title: '2. Matchmaking', desc: 'Sponsors connect directly with students based on field of study, location, or shared values through our secure portal.', color: 'secondary' },
  { icon: 'rocket_launch', title: '3. Impact', desc: 'Funds are managed transparently with regular progress updates, ensuring a direct line from donation to graduation.', color: 'tertiary' }
];

export function ProcessSection() {
  return (
    <section className="py-32 bg-transparent relative z-[1]">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-primary-fixed-dim font-headline font-black text-xs uppercase tracking-[0.2em]">
            The Process
          </span>
          <h2 className="text-4xl md:text-5xl font-headline font-black tracking-tighter mt-4 text-on-surface">
            How It Works
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <motion.div 
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center p-10 bg-white/5 backdrop-blur-xl rounded-[2.5rem] shadow-xl shadow-black/[0.02] border border-zinc-800/10 transition-all hover:-translate-y-2 duration-500 group"
            >
              <div className={`w-20 h-20 bg-${step.color}/10 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500`}>
                <span className={`material-symbols-outlined text-${step.color} text-4xl`}>
                  {step.icon}
                </span>
              </div>
              <h4 className="text-2xl font-headline font-black mb-4 text-on-surface">
                {step.title}
              </h4>
              <p className="text-on-surface-variant text-base leading-relaxed font-body font-medium">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
