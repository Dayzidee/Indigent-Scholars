'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';

export function TransparencySection() {
  return (
    <section className="py-32 relative z-[1] border-y border-zinc-800/10">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-primary-fixed-dim font-headline font-black text-xs uppercase tracking-[0.2em] mb-4 block">Transparency First</span>
            <h2 className="text-4xl md:text-5xl font-headline font-black tracking-tighter mb-8 leading-tight text-on-surface">
              Radical Transparency <br />
              in Philanthropy.
            </h2>
            <p className="text-on-surface-variant text-lg mb-12 leading-relaxed font-body font-medium">
              We provide a direct window into the impact of your
              contribution. Every Naira is tracked, every scholar is
              verified, every dream is accounted for.
            </p>
            <div className="space-y-10">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[11px] font-black uppercase tracking-widest text-on-surface font-label">
                    Annual Funding Target
                  </span>
                  <span className="text-sm font-black text-secondary-fixed-dim font-headline">
                    ₦450M / ₦1B
                  </span>
                </div>
                <div className="w-full h-3 bg-secondary-container/10 rounded-full overflow-hidden shadow-inner p-1">
                  <div className="h-full bg-secondary rounded-full w-[45%] shadow-[0_0_15px_rgba(255,215,0,0.3)]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[11px] font-black uppercase tracking-widest text-on-surface font-label">
                    Graduation Success Rate
                  </span>
                  <span className="text-sm font-black text-primary-fixed-dim font-headline">
                    98.2%
                  </span>
                </div>
                <div className="w-full h-3 bg-primary-container/10 rounded-full overflow-hidden shadow-inner p-1">
                  <div className="h-full bg-primary rounded-full w-[98.2%] shadow-[0_0_15px_rgba(0,102,204,0.3)]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border-[12px] border-zinc-800/10 backdrop-blur-3xl ring-1 ring-zinc-800/10">
              <Image
                alt="Tracking Dashboard Preview"
                width={800}
                height={800}
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaNWvza_o4siDQ7caCwyqedHTv4umJgfdcum-QFgBnv-YvH_Y-IJxD_eBBzQiKqeeqXjU02NRHLacSugxX9rZze5srRboPlACtGqjLlkrXRlGkkfEnLjjUidIiyIHfQLQmPA3k7Y_-1vmowDpf8H0iFmYn1d_Xxm-2PuuEfH1u5G-xlCSTRioWU_ju5_J_3j5IaTtQjt3fU_GFEWUKNkIBWozQ4Hi7yKZn_0EIgk3lJP8GLADWqBFzPmbaC-9oQ-HxZ15wboBSbKv1"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent pointer-events-none"></div>
            </div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-secondary/10 rounded-[3rem] -z-0 blur-3xl opacity-60"></div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="absolute -top-10 -right-6 p-8 backdrop-blur-2xl bg-zinc-900/90 rounded-[2rem] shadow-2xl border border-zinc-800 z-20 hidden md:block"
            >
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center border border-secondary/20 shadow-inner">
                  <span
                    className="material-symbols-outlined text-secondary-fixed-dim text-2xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    workspace_premium
                  </span>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-zinc-400 tracking-wider font-label">
                    Certified Impact
                  </p>
                  <p className="text-lg font-headline font-black text-on-surface">
                    Grade A Institution
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
