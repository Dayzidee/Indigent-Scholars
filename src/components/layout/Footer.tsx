'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export function Footer() {
  const pathname = usePathname();

  // Hide Footer on dashboard routes
  if (pathname?.startsWith('/dashboard')) return null;
  return (
    <footer className="bg-[#1C1B1B] w-full mt-20 relative z-10" id="footer">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-12 py-16 w-full max-w-7xl mx-auto">
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="group block mb-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center"
            >
              {"Indigent-Sc".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.05,
                    duration: 0.4,
                    ease: "easeOut"
                  }}
                  className="text-lg font-black text-white uppercase tracking-widest inline-block group-hover:text-teal-400 transition-colors"
                >
                  {char}
                </motion.span>
              ))}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="w-1.5 h-1.5 rounded-full bg-teal-400 ml-1 mb-1 shadow-[0_0_8px_rgba(45,212,191,0.6)]"
              />
            </motion.div>
          </Link>
          <p className="text-neutral-400 text-xs leading-relaxed max-w-xs">
            A high-end editorial EdTech platform dedicated to empowering
            Nigerian scholars through transparent philanthropy.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="font-inter text-xs uppercase tracking-widest text-white font-bold">
            Resources
          </h5>
          <Link
            className="font-inter text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-all"
            href="/news"
          >
            News
          </Link>
          <Link
            className="font-inter text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-all"
            href="/events"
          >
            Events
          </Link>
          <Link
            className="font-inter text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-all"
            href="/faq"
          >
            FAQ
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="font-inter text-xs uppercase tracking-widest text-white font-bold">
            Company
          </h5>
          <Link
            className="font-inter text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-all"
            href="/careers"
          >
            Careers
          </Link>
          <Link
            className="font-inter text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-all"
            href="/team"
          >
            Team
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="font-inter text-xs uppercase tracking-widest text-white font-bold">
            Legal
          </h5>
          <Link
            className="font-inter text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-all"
            href="/privacy"
          >
            Privacy
          </Link>
          <Link
            className="font-inter text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-all"
            href="/terms"
          >
            Terms
          </Link>
        </div>
      </div>
      <div className="px-12 py-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        <p className="font-inter text-xs uppercase tracking-widest text-neutral-400">
          © {new Date().getFullYear()} Indigent-Sc. All rights reserved.
        </p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span
            className="material-symbols-outlined text-neutral-400 hover:text-white cursor-pointer"
            data-icon="public"
          >
            public
          </span>
          <span
            className="material-symbols-outlined text-neutral-400 hover:text-white cursor-pointer"
            data-icon="share"
          >
            share
          </span>
        </div>
      </div>
    </footer>
  );
}
