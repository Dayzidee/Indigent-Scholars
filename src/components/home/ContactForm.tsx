'use client'

import { motion } from 'framer-motion';

export function ContactForm() {
  return (
    <motion.form 
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="space-y-6 bg-white/5 backdrop-blur-2xl p-10 md:p-12 rounded-[3rem] shadow-2xl border border-zinc-800/10"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-1">
          <label htmlFor="contact-first-name" className="sr-only">First Name</label>
          <input
            id="contact-first-name"
            className="w-full bg-surface-container-low border border-outline-variant/10 rounded-2xl p-5 text-sm font-medium font-body focus:ring-2 focus:ring-primary/20 focus:bg-zinc-900 transition-all outline-none"
            placeholder="First Name"
            type="text"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="contact-last-name" className="sr-only">Last Name</label>
          <input
            id="contact-last-name"
            className="w-full bg-surface-container-low border border-outline-variant/10 rounded-2xl p-5 text-sm font-medium font-body focus:ring-2 focus:ring-primary/20 focus:bg-zinc-900 transition-all outline-none"
            placeholder="Last Name"
            type="text"
          />
        </div>
      </div>
      <div className="space-y-1">
        <label htmlFor="contact-email" className="sr-only">Email Address</label>
        <input
          id="contact-email"
          className="w-full bg-surface-container-low border border-outline-variant/10 rounded-2xl p-5 text-sm font-medium font-body focus:ring-2 focus:ring-primary/20 focus:bg-zinc-900 transition-all outline-none"
          placeholder="Email Address"
          type="email"
        />
      </div>
      <div className="space-y-1">
        <label htmlFor="contact-message" className="sr-only">Your Message</label>
        <textarea
          id="contact-message"
          className="w-full bg-surface-container-low border border-outline-variant/10 rounded-2xl p-5 text-sm font-medium font-body focus:ring-2 focus:ring-primary/20 focus:bg-zinc-900 transition-all outline-none resize-none"
          placeholder="Your Message"
          rows={4}
        ></textarea>
      </div>
      <button className="w-full bg-primary text-on-primary font-black py-5 rounded-2xl shadow-xl shadow-primary/20 hover:scale-[1.02] hover:bg-primary-container transition-all duration-500 uppercase tracking-[0.2em] font-label text-xs">
        Send Inquiry
      </button>
    </motion.form>
  );
}
