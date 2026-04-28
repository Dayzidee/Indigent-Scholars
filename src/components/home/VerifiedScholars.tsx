'use client'

import Link from 'next/link';
import { motion } from 'framer-motion';

export function VerifiedScholars() {
  return (
    <section id="solution" className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 relative z-10">
        <div>
          <span className="text-secondary-fixed-dim font-headline font-black text-xs uppercase tracking-[0.2em]">
            Excellence Showcased
          </span>
          <h2 className="text-4xl md:text-5xl font-headline font-black tracking-tight mt-2 bg-gradient-to-r from-on-surface to-on-surface-variant bg-clip-text text-transparent">
            Verified Scholars
          </h2>
        </div>
        <Link
          className="text-sm font-black text-primary-fixed-dim flex items-center group bg-primary/5 hover:bg-primary/10 px-6 py-3 rounded-2xl transition-all border border-primary/10 uppercase tracking-widest font-label"
          href="/registry"
        >
          View Full Registry
          <span className="material-symbols-outlined ml-3 transition-transform group-hover:translate-x-1 text-lg">
            arrow_forward
          </span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10">
        {/* Large Feature Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-8 group relative overflow-hidden rounded-[3rem] bg-transparent p-8 h-[600px] flex flex-col justify-end shadow-2xl transition-all duration-500 hover:-translate-y-1"
        >
          <img
            alt="Medical Student"
            className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-80 scale-100 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvLPPJ9zP8Dz5zg6KqEBdFmmcZ-qRLnU3xJ5Z_a7pYbacg1K38I6bo3mwSCQi4ZnYhFwU5CwS_SvHCwJH1V76qOTz2zn5d9BTyABOWXNeI9D6cJ5D953knCRX_tlAOBukP5lokkiw1qjhD7A1cy02IdoLNrNHlKiSphBw17-lNbCsiqpIfHrliZxtwgZZXS6P956kGIKf0xyytm-4HS1fWtYMHbuls27hbxFuUYl6QLw_cu8IU8vdGlRS3EIMVxWRGE3RhVCNRyLnP"
          />
          <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 p-4">
            <span className="inline-block px-4 py-1.5 bg-secondary text-on-secondary text-[10px] font-black rounded-full mb-6 uppercase tracking-[0.2em] shadow-xl shadow-secondary/20">
              Medical Excellence
            </span>
            <h3 className="text-4xl font-headline font-black text-white mb-3 drop-shadow-2xl">Chidubem Okafor</h3>
            <p className="text-white/90 max-w-lg text-lg mb-8 drop-shadow font-body font-medium leading-relaxed">
              Pursuing MBBS with a focus on neurosurgery at the University
              of Ibadan. Currently seeking sponsorship for final year
              research.
            </p>
            <button className="text-on-primary bg-primary hover:bg-primary-container/90 px-8 py-3.5 rounded-2xl text-[11px] font-black transition-all shadow-xl shadow-primary/20 uppercase tracking-[0.2em] font-label backdrop-blur-md bg-opacity-90">
              See Professional Portfolio
            </button>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-90"></div>
        </motion.div>

        {/* Secondary Grid Side */}
        <div className="md:col-span-4 flex flex-col gap-8">
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-white/5 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-xl flex-1 relative overflow-hidden border border-zinc-800/10 hover:border-primary/30 transition-all group/card shadow-primary/[0.02]"
          >
            <div className="relative z-10 mb-12">
              <span
                className="material-symbols-outlined text-secondary-fixed-dim text-4xl mb-6 p-4 bg-secondary/10 rounded-[1.5rem] inline-block shadow-inner"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                auto_awesome
              </span>
              <h4 className="text-2xl font-headline font-black mb-3 text-on-surface">
                Architecture Lead
              </h4>
              <p className="text-on-surface-variant text-sm font-medium leading-relaxed font-body">
                Supporting brilliant architectural minds who are designing
                the sustainable cities of tomorrow.
              </p>
            </div>
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-primary-fixed-dim font-black text-xs uppercase tracking-widest font-label">24 Active Scholars</span>
              <span className="material-symbols-outlined text-primary-fixed-dim group-hover/card:translate-x-2 transition-transform">east</span>
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="bg-inverse-surface p-10 rounded-[2.5rem] shadow-2xl flex-1 relative overflow-hidden group/dark shadow-black/10"
          >
            <div className="relative z-10 mb-12">
              <span
                className="material-symbols-outlined text-tertiary-fixed text-4xl mb-6 p-4 bg-tertiary-fixed/10 rounded-[1.5rem] inline-block shadow-inner"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified_user
              </span>
              <h4 className="text-2xl font-headline font-black text-inverse-on-surface mb-3">
                Institutional Trust
              </h4>
              <p className="text-inverse-on-surface/70 text-sm font-medium leading-relaxed font-body">
                Connecting corporations with a vetted pipeline of future STEM leaders.
              </p>
            </div>
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-tertiary-fixed font-black text-xs uppercase tracking-widest font-label">Verified Network</span>
              <span className="material-symbols-outlined text-tertiary-fixed group-hover/dark:translate-x-2 transition-transform">east</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
