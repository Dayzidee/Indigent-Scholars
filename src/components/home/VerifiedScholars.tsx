'use client'

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function VerifiedScholars() {
  const scholars = [
    {
      name: 'Chidubem Okafor',
      type: 'Medical Excellence',
      amount: '₦2,450,000',
      purpose: 'Final Year MBBS Research & Residency Prep',
      time: 'Verified Scholar',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvLPPJ9zP8Dz5zg6KqEBdFmmcZ-qRLnU3xJ5Z_a7pYbacg1K38I6bo3mwSCQi4ZnYhFwU5CwS_SvHCwJH1V76qOTz2zn5d9BTyABOWXNeI9D6cJ5D953knCRX_tlAOBukP5lokkiw1qjhD7A1cy02IdoLNrNHlKiSphBw17-lNbCsiqpIfHrliZxtwgZZXS6P956kGIKf0xyytm-4HS1fWtYMHbuls27hbxFuUYl6QLw_cu8IU8vdGlRS3EIMVxWRGE3RhVCNRyLnP',
      quote: 'Pursuing neurosurgery was a distant dream until I was matched with a sponsor. This support has allowed me to focus 100% on my clinical rotations.'
    }
  ];

  return (
    <section id="solution" className="max-w-7xl mx-auto px-6 lg:px-12 py-32 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -z-10" />

      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 relative z-10">
        <div className="max-w-2xl">
          <span className="text-white font-headline font-black text-xs uppercase tracking-[0.3em] bg-white/10 px-4 py-2 rounded-full backdrop-blur-md inline-block mb-6">
            Real Impact • Real Scholars
          </span>
          <h2 className="text-4xl md:text-6xl font-headline font-black tracking-tight text-white leading-[1.1]">
            Verified <span className="text-primary-fixed-dim">Impact</span> Stories
          </h2>
          <p className="text-zinc-400 mt-6 text-lg font-medium leading-relaxed max-w-xl">
            See how your sponsorship transforms lives. We track every Naira from deposit to graduation.
          </p>
        </div>
        <Link
          className="text-[11px] font-black text-white flex items-center group bg-white/5 hover:bg-white/10 px-8 py-4 rounded-[2rem] transition-all border border-white/10 uppercase tracking-widest font-label backdrop-blur-xl shadow-2xl"
          href="/registry"
        >
          View Full Registry
          <span className="material-symbols-outlined ml-3 transition-transform group-hover:translate-x-1 text-lg">
            arrow_forward
          </span>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-12 relative z-10">
        {scholars.map((scholar, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -5 }}
            className="group relative bg-zinc-950/40 backdrop-blur-3xl p-6 sm:p-10 rounded-[3.5rem] border border-white/5 hover:border-primary-fixed-dim/30 transition-all duration-500 flex flex-col lg:flex-row gap-10 lg:gap-14 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)]"
          >
            {/* Image Section */}
            <div className="w-full lg:w-[320px] h-[400px] lg:h-[450px] relative rounded-[2.5rem] overflow-hidden shadow-2xl flex-shrink-0 grayscale group-hover:grayscale-0 transition-all duration-700 border border-white/10">
              <Image
                src={scholar.img}
                alt={scholar.name}
                fill
                className="object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md text-white text-[10px] font-black rounded-full uppercase tracking-widest border border-white/20">
                  {scholar.type}
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 flex flex-col justify-center py-4">
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em]">
                  {scholar.time}
                </span>
                <div className="h-px w-12 bg-white/10" />
              </div>

              <h3 className="text-4xl md:text-5xl font-headline font-black text-white mb-6 tracking-tight group-hover:text-primary-fixed-dim transition-colors">
                {scholar.name}
              </h3>

              <div className="relative mb-10 pl-8 border-l-2 border-primary-fixed-dim/30">
                <span className="absolute -left-[9px] top-0 text-primary-fixed-dim text-xl font-serif">&ldquo;</span>
                <p className="text-xl text-zinc-300 font-medium italic leading-relaxed">
                  {scholar.quote}
                </p>
              </div>

              {/* Impact Card Footer */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-t border-white/5">
                <div className="space-y-3">
                  <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Sponsored Amount</p>
                  <div className="flex items-end gap-3">
                    <span className="text-3xl md:text-4xl font-headline font-black text-white tracking-tighter">
                      {scholar.amount}
                    </span>
                    <span className="text-emerald-500 text-xs font-black uppercase tracking-widest mb-1 pb-1">
                      Full Year Coverage
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Impact Targeted</p>
                  <div className="flex items-center gap-3 text-zinc-400 font-bold text-sm">
                    <span className="material-symbols-outlined text-primary-fixed-dim">verified</span>
                    {scholar.purpose}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Corner Icon */}
            <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-100 transition-opacity duration-700">
               <span className="material-symbols-outlined text-4xl text-primary-fixed-dim">school</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-24 text-center">
        <Link 
          href="/apply"
          className="inline-flex items-center gap-4 text-zinc-400 hover:text-white transition-all text-xs font-black uppercase tracking-[0.4em] group"
        >
          Want to become a verified scholar? 
          <span className="text-primary-fixed-dim group-hover:translate-x-2 transition-transform">Apply Now</span>
        </Link>
      </div>
    </section>
  );
}
