'use client'

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { RedesignedHero } from '@/components/home/RedesignedHero';
import { ImpactTypography } from '@/components/home/ImpactTypography';
import { GoldenAfricaGlobe } from '@/components/ui/GoldenAfricaGlobe';

export default function Home() {
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = React.useState({
    fullName: '',
    email: '',
    phone: '',
    gender: '',
    dateOfBirth: '',
    maritalStatus: '',
    university: '',
    programOfStudy: '',
    yearOfStudy: '',
    studentId: '',
    stateOfOrigin: '',
    lga: '',
    jambRegNumber: '',
    matricNumber: '',
    waecPin: '',
    waecSerial: '',
    lastGpa: '',
    admissionLetterDesc: '',
    govIdDesc: ''
  });


  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -carouselRef.current.offsetWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: carouselRef.current.offsetWidth, behavior: 'smooth' });
    }
  };
  return (
    <div className="min-h-screen relative">
      {/* 0. Absolute Background (The Oracle) */}
      <GoldenAfricaGlobe />
      {/* 1. Redesigned Hero Section */}
      <RedesignedHero />

      {/* 2. Impact Typography Block */}
      <ImpactTypography />

      {/* 3. About Us Section (Restored) */}
      <section
        id="problem"
        className="bg-white/5 backdrop-blur-2xl relative z-10 py-24 border-y border-zinc-800/10 shadow-[0_8px_30px_rgb(0,0,0,0.02)]"
      >
        <div className="max-w-5xl mx-auto px-8 text-center relative z-10">
          <span className="text-primary font-headline font-black text-xs uppercase tracking-[0.2em] mb-4 block">
            Our Mission
          </span>
          <h2 className="text-4xl md:text-5xl font-headline font-black tracking-tighter mb-8 relative z-10 text-on-surface">
            Democratizing Educational Excellence
          </h2>
          <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto relative z-10 font-body font-medium">
            Indigent-Sc is more than a platform; it&apos;s a movement dedicated to
            bridging the financial gap for Nigeria&apos;s most brilliant minds. By
            combining institutional verification with transparent philanthropy,
            we ensure that every contribution creates a lasting academic legacy.
          </p>
          <Link
            className="inline-flex items-center text-primary font-black text-sm group relative z-10 uppercase tracking-widest font-label"
            href="/about"
          >
            Read our full story
            <span className="material-symbols-outlined ml-3 transition-transform group-hover:translate-x-1">
              arrow_right_alt
            </span>
          </Link>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/2 to-white/5 pointer-events-none -z-10"></div>
      </section>

      {/* 4. Verified Scholars Bento Grid (Restored & Refined) */}
      <section id="solution" className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 relative z-10">
          <div>
            <span className="text-secondary font-headline font-black text-xs uppercase tracking-[0.2em]">
              Excellence Showcased
            </span>
            <h2 className="text-4xl md:text-5xl font-headline font-black tracking-tight mt-2 bg-gradient-to-r from-on-surface to-on-surface-variant bg-clip-text text-transparent">
              Verified Scholars
            </h2>
          </div>
          <Link
            className="text-sm font-black text-primary flex items-center group bg-primary/5 hover:bg-primary/10 px-6 py-3 rounded-2xl transition-all border border-primary/10 uppercase tracking-widest font-label"
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
                  className="material-symbols-outlined text-secondary text-4xl mb-6 p-4 bg-secondary/10 rounded-[1.5rem] inline-block shadow-inner"
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
                <span className="text-primary font-black text-xs uppercase tracking-widest font-label">24 Active Scholars</span>
                <span className="material-symbols-outlined text-primary group-hover/card:translate-x-2 transition-transform">east</span>
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

      <section className="py-32 bg-transparent relative z-[1]">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="text-primary font-headline font-black text-xs uppercase tracking-[0.2em]">
              The Process
            </span>
            <h2 className="text-4xl md:text-5xl font-headline font-black tracking-tighter mt-4 text-on-surface">
              How It Works
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: 'verified', title: '1. Verification', desc: 'Rigorous academic and financial vetting ensures only the most deserving and authentic scholars enter our registry.', color: 'primary' },
              { icon: 'handshake', title: '2. Matchmaking', desc: 'Sponsors connect directly with students based on field of study, location, or shared values through our secure portal.', color: 'secondary' },
              { icon: 'rocket_launch', title: '3. Impact', desc: 'Funds are managed transparently with regular progress updates, ensuring a direct line from donation to graduation.', color: 'tertiary' }
            ].map((step, idx) => (
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

      {/* 6. Impact Tracker Section (Restored) */}
      <section className="py-32 relative z-[1] border-y border-zinc-800/10">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-primary font-headline font-black text-xs uppercase tracking-[0.2em] mb-4 block">Transparency First</span>
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
                    <span className="text-sm font-black text-secondary font-headline">
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
                    <span className="text-sm font-black text-primary font-headline">
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
                <img
                  alt="Tracking Dashboard Preview"
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
                      className="material-symbols-outlined text-secondary text-2xl"
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

      {/* 7. Partners Section (Restored) */}
      <section className="py-32 bg-transparent relative z-[1]">
        <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
          <span className="text-primary font-headline font-black text-xs uppercase tracking-[0.2em] mb-8 block">
            Ecosystem
          </span>
          <h2 className="text-4xl font-headline font-black tracking-tighter mb-20 text-on-surface">
            Partnering Institutions
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-12 items-center opacity-40 hover:opacity-100 transition-opacity duration-700">
            {["UNILAG", "UI IBADAN", "ABU ZARIA", "UNN", "LASU", "OAU IFE"].map((school, i) => (
              <div key={i} className="h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 transform hover:scale-125 cursor-pointer group relative">
                <span className="font-headline font-black text-2xl text-on-surface/40 group-hover:text-primary tracking-tighter transition-colors">{school}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-transparent relative z-[1]">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            <div>
              <span className="text-primary font-headline font-black text-xs uppercase tracking-[0.2em] mb-6 block">
                Get In Touch
              </span>
              <h2 className="text-4xl md:text-5xl font-headline font-black tracking-tighter mb-10 text-on-surface">
                Let&apos;s talk about the future.
              </h2>
              <div className="space-y-8">
                {[
                  { icon: 'mail', label: 'Email Us', value: 'partnership@indigent-sc.edu.ng' },
                  { icon: 'location_on', label: 'Visit Headquarters', value: 'Lumina House, Victoria Island, Lagos' }
                ].map(item => (
                  <div key={item.label} className="flex items-start gap-6 p-6 rounded-3xl hover:bg-surface-container-low/50 transition-all cursor-pointer border border-transparent hover:border-outline-variant/10 group">
                    <span className="material-symbols-outlined text-primary p-4 bg-primary/5 rounded-2xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </span>
                    <div>
                      <p className="font-black text-sm text-on-surface uppercase tracking-widest font-label mb-1">{item.label}</p>
                      <p className="text-on-surface-variant text-base font-medium font-body">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <motion.form 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="space-y-6 bg-white/5 backdrop-blur-2xl p-10 md:p-12 rounded-[3rem] shadow-2xl border border-zinc-800/10"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-5 text-sm font-medium font-body focus:ring-2 focus:ring-primary/20 focus:bg-zinc-900 transition-all outline-none"
                  placeholder="First Name"
                  type="text"
                />
                <input
                  className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-5 text-sm font-medium font-body focus:ring-2 focus:ring-primary/20 focus:bg-zinc-900 transition-all outline-none"
                  placeholder="Last Name"
                  type="text"
                />
              </div>
              <input
                className="w-full bg-surface-container-low border border-outline-variant/10 rounded-2xl p-5 text-sm font-medium font-body focus:ring-2 focus:ring-primary/20 focus:bg-zinc-900 transition-all outline-none"
                placeholder="Email Address"
                type="email"
              />
              <textarea
                className="w-full bg-surface-container-low border border-outline-variant/10 rounded-2xl p-5 text-sm font-medium font-body focus:ring-2 focus:ring-primary/20 focus:bg-zinc-900 transition-all outline-none resize-none"
                placeholder="Your Message"
                rows={4}
              ></textarea>
              <button className="w-full bg-primary text-on-primary font-black py-5 rounded-2xl shadow-xl shadow-primary/20 hover:scale-[1.02] hover:bg-primary-container transition-all duration-500 uppercase tracking-[0.2em] font-label text-xs">
                Send Inquiry
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* 9. Quick Apply Section (Restored) */}
      <section
        id="apply"
        className="max-w-7xl mx-auto px-8 py-32 overflow-hidden relative z-10 bg-transparent"
      >
        <div className="text-center mb-20 relative z-10">
          <span className="text-secondary font-headline font-black text-xs uppercase tracking-[0.2em] mb-6 block">
            Empower Your Future
          </span>
          <h2 className="text-5xl md:text-6xl font-headline font-black mb-6 text-on-surface tracking-tighter">
            Quick Apply
          </h2>
          <p className="text-on-surface-variant text-xl max-w-xl mx-auto font-body font-medium">
            Secure your academic journey in three simple steps.
          </p>
        </div>
        <div className="relative group max-w-5xl mx-auto z-10">
          {/* Carousel Navigation */}
          <div className="absolute -left-12 top-1/2 -translate-y-1/2 z-20 hidden xl:block">
            <button
              className="w-14 h-14 rounded-full border border-outline-variant/30 flex items-center justify-center bg-zinc-900/90 backdrop-blur-xl shadow-2xl hover:border-secondary hover:text-secondary group/btn transition-all"
              onClick={scrollLeft}
            >
              <span className="material-symbols-outlined group-hover/btn:-translate-x-1 transition-transform">chevron_left</span>
            </button>
          </div>
          <div className="absolute -right-12 top-1/2 -translate-y-1/2 z-20 hidden xl:block">
            <button
              className="w-14 h-14 rounded-full border border-outline-variant/30 flex items-center justify-center bg-zinc-900/90 backdrop-blur-xl shadow-2xl hover:border-secondary hover:text-secondary group/btn transition-all"
              onClick={scrollRight}
            >
              <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">chevron_right</span>
            </button>
          </div>
          
          {/* Carousel Wrapper */}
          <div
            className="carousel-container flex overflow-x-auto snap-x snap-mandatory gap-8 pb-12 transition-all scrollbar-hide no-scrollbar"
            id="apply-carousel"
            ref={carouselRef}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Slide 1: Comprehensive Data Input */}
            <div className="min-w-full snap-center bg-white/10 backdrop-blur-2xl rounded-[3rem] border border-zinc-800/10 shadow-2xl p-10 md:p-14">
              <div className="flex items-center gap-6 mb-10">
                <div className="w-16 h-16 rounded-[1.5rem] bg-white/5 flex items-center justify-center border border-zinc-800/10 shadow-inner">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    edit_note
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-headline font-black text-on-surface tracking-tight">1. Scholar Credentials</h3>
                  <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mt-1 font-label leading-none">
                    Complete your high-granularity profile
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-6 max-h-[450px] overflow-y-auto pr-4 custom-scrollbar">
                {/* Section A: Personal */}
                <div className="space-y-6">
                  <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-4">A. Identity</p>
                  <div className="space-y-4">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase text-zinc-400 ml-1">Full Legal Name</label>
                       <input value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} className="w-full bg-white/5 border border-zinc-800/10 rounded-xl p-4 text-xs font-medium focus:border-primary outline-none transition-all" placeholder="As on ID" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase text-zinc-400 ml-1">Email Address</label>
                       <input value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-white/5 border border-zinc-800/10 rounded-xl p-4 text-xs font-medium focus:border-primary outline-none transition-all" placeholder="name@university.edu" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                         <label className="text-[10px] font-black uppercase text-zinc-400 ml-1">Phone</label>
                         <input value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-white/5 border border-zinc-800/10 rounded-xl p-4 text-xs font-medium focus:border-primary outline-none transition-all" placeholder="+234..." />
                      </div>
                      <div className="space-y-2">
                         <label className="text-[10px] font-black uppercase text-zinc-400 ml-1">Gender</label>
                         <select value={formData.gender} onChange={(e) => setFormData({...formData, gender: e.target.value})} className="w-full bg-white/5 border border-zinc-800/10 rounded-xl p-4 text-xs font-medium focus:border-primary outline-none transition-all appearance-none cursor-pointer">
                           <option value="" disabled className="bg-zinc-900">Select</option>
                           <option value="male" className="bg-zinc-900">Male</option>
                           <option value="female" className="bg-zinc-900">Female</option>
                         </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                         <label className="text-[10px] font-black uppercase text-zinc-400 ml-1">Date of Birth</label>
                         <input type="date" value={formData.dateOfBirth} onChange={(e) => setFormData({...formData, dateOfBirth: e.target.value})} className="w-full bg-white/5 border border-zinc-800/10 rounded-xl p-4 text-xs font-medium focus:border-primary outline-none transition-all" />
                      </div>
                      <div className="space-y-2">
                         <label className="text-[10px] font-black uppercase text-zinc-400 ml-1">Marital Status</label>
                         <select value={formData.maritalStatus} onChange={(e) => setFormData({...formData, maritalStatus: e.target.value})} className="w-full bg-white/5 border border-zinc-800/10 rounded-xl p-4 text-xs font-medium focus:border-primary outline-none transition-all appearance-none cursor-pointer">
                           <option value="" disabled className="bg-zinc-900">Select</option>
                           <option value="single" className="bg-zinc-900">Single</option>
                           <option value="married" className="bg-zinc-900">Married</option>
                         </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section B: Geographic */}
                <div className="space-y-6">
                  <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-4">B. Origins & Institution</p>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                         <label className="text-[10px] font-black uppercase text-zinc-400 ml-1">State</label>
                         <input value={formData.stateOfOrigin} onChange={(e) => setFormData({...formData, stateOfOrigin: e.target.value})} className="w-full bg-white/5 border border-zinc-800/10 rounded-xl p-4 text-xs font-medium focus:border-primary outline-none transition-all" placeholder="State" />
                      </div>
                      <div className="space-y-2">
                         <label className="text-[10px] font-black uppercase text-zinc-400 ml-1">LGA</label>
                         <input value={formData.lga} onChange={(e) => setFormData({...formData, lga: e.target.value})} className="w-full bg-white/5 border border-zinc-800/10 rounded-xl p-4 text-xs font-medium focus:border-primary outline-none transition-all" placeholder="LGA" />
                      </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase text-zinc-400 ml-1">University Name</label>
                       <input value={formData.university} onChange={(e) => setFormData({...formData, university: e.target.value})} className="w-full bg-white/5 border border-zinc-800/10 rounded-xl p-4 text-xs font-medium focus:border-primary outline-none transition-all" placeholder="University" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase text-zinc-400 ml-1">Course of Study</label>
                       <input value={formData.programOfStudy} onChange={(e) => setFormData({...formData, programOfStudy: e.target.value})} className="w-full bg-white/5 border border-zinc-800/10 rounded-xl p-4 text-xs font-medium focus:border-primary outline-none transition-all" placeholder="e.g. Computer Science" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase text-zinc-400 ml-1">Year of Study</label>
                       <input value={formData.yearOfStudy} onChange={(e) => setFormData({...formData, yearOfStudy: e.target.value})} className="w-full bg-white/5 border border-zinc-800/10 rounded-xl p-4 text-xs font-medium focus:border-primary outline-none transition-all" placeholder="e.g. 3rd Year" />
                    </div>
                  </div>
                </div>

                {/* Section C: Academic IDs */}
                <div className="space-y-6">
                  <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-4">C. Verification</p>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                         <label className="text-[10px] font-black uppercase text-zinc-400 ml-1">JAMB Reg</label>
                         <input value={formData.jambRegNumber} onChange={(e) => setFormData({...formData, jambRegNumber: e.target.value})} className="w-full bg-white/5 border border-zinc-800/10 rounded-xl p-4 text-xs font-medium focus:border-primary outline-none transition-all" placeholder="JAMB No." />
                      </div>
                      <div className="space-y-2">
                         <label className="text-[10px] font-black uppercase text-zinc-400 ml-1">Matric No.</label>
                         <input value={formData.matricNumber} onChange={(e) => setFormData({...formData, matricNumber: e.target.value})} className="w-full bg-white/5 border border-zinc-800/10 rounded-xl p-4 text-xs font-medium focus:border-primary outline-none transition-all" placeholder="Matric No." />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                         <label className="text-[10px] font-black uppercase text-zinc-400 ml-1">WAEC PIN</label>
                         <input value={formData.waecPin} onChange={(e) => setFormData({...formData, waecPin: e.target.value})} className="w-full bg-white/5 border border-zinc-800/10 rounded-xl p-4 text-xs font-medium focus:border-primary outline-none transition-all" placeholder="PIN" />
                      </div>
                      <div className="space-y-2">
                         <label className="text-[10px] font-black uppercase text-zinc-400 ml-1">WAEC Serial</label>
                         <input value={formData.waecSerial} onChange={(e) => setFormData({...formData, waecSerial: e.target.value})} className="w-full bg-white/5 border border-zinc-800/10 rounded-xl p-4 text-xs font-medium focus:border-primary outline-none transition-all" placeholder="Serial" />
                      </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase text-zinc-400 ml-1">Recent CGPA</label>
                       <input value={formData.lastGpa} onChange={(e) => setFormData({...formData, lastGpa: e.target.value})} className="w-full bg-white/5 border border-zinc-800/10 rounded-xl p-4 text-xs font-medium focus:border-primary outline-none transition-all" placeholder="e.g. 4.50 / 5.0" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex justify-end">
                <button
                  className="bg-secondary text-on-secondary px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-secondary-container transition-all shadow-xl shadow-secondary/20 flex items-center gap-3"
                  onClick={scrollRight}
                >
                  Next Step
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Slide 2: Contextual Document Uploads */}
            <div className="min-w-full snap-center bg-white/10 backdrop-blur-2xl rounded-[3rem] border border-zinc-800/10 shadow-2xl p-10 md:p-16">
              <div className="flex items-center gap-6 mb-12">
                <div className="w-16 h-16 rounded-[1.5rem] bg-white/5 flex items-center justify-center border border-zinc-800/10 shadow-inner">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    cloud_upload
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-headline font-black text-on-surface">2. Verification Vault</h3>
                  <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mt-1 font-label">
                    Upload & Describe your documents
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {[
                  { icon: 'description', title: 'Admission Letter', key: 'admissionLetterDesc' },
                  { icon: 'badge', title: 'National Identity (NIN)', key: 'govIdDesc' }
                ].map(upload => (
                  <div key={upload.title} className="space-y-6">
                    <div className="border-[3px] border-dashed border-zinc-800/10 rounded-[2.5rem] p-10 text-center hover:border-secondary hover:bg-white/5 transition-all cursor-pointer group/upload bg-black/20">
                      <span className="material-symbols-outlined text-5xl text-zinc-400 group-hover/upload:text-secondary mb-4 transition-colors">
                        {upload.icon}
                      </span>
                      <h4 className="text-sm font-black text-on-surface uppercase tracking-widest mb-2 font-label">
                        {upload.title}
                      </h4>
                      <p className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest">
                        Click to Browse
                      </p>
                    </div>
                    <div className="space-y-2 px-2">
                       <label className="text-[9px] font-black uppercase text-primary tracking-widest">Document Description</label>
                       <input 
                         value={formData[upload.key as keyof typeof formData]} 
                         onChange={(e) => setFormData({...formData, [upload.key]: e.target.value})}
                         className="w-full bg-white/5 border border-zinc-800/10 rounded-xl p-3 text-[11px] font-medium focus:border-secondary outline-none transition-all" 
                         placeholder="e.g. Official letter from UNILAG Registrar" 
                       />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 flex justify-between items-center">
                <button
                  className="text-zinc-400 font-black text-xs uppercase tracking-widest hover:text-primary transition-colors flex items-center gap-3 font-label"
                  onClick={scrollLeft}
                >
                  <span className="material-symbols-outlined text-lg">arrow_back</span>
                  Previous
                </button>
                <button
                  className="bg-secondary text-on-secondary px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-secondary-container transition-all shadow-xl shadow-secondary/20 flex items-center gap-3"
                  onClick={scrollRight}
                >
                  Next Step
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Slide 3: The Impact Advertisement */}
            <div className="min-w-full snap-center bg-zinc-900 overflow-hidden rounded-[3rem] border border-zinc-800/10 shadow-2xl relative group">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2070" 
                className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:scale-110 transition-transform duration-1000"
                alt="Advancement"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent"></div>
              
              <div className="relative z-10 p-12 md:p-20 h-full flex flex-col justify-between">
                <div>
                   <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary border border-primary/30 text-[10px] font-black rounded-full mb-8 uppercase tracking-[0.3em]">
                     Your Future Starts Now
                   </span>
                   <h3 className="text-4xl md:text-5xl font-headline font-black text-white tracking-tighter mb-6 leading-[0.9]">
                     Join the Elite Registry of <span className="text-secondary">Verified scholars.</span>
                   </h3>
                   <p className="text-zinc-400 text-lg max-w-xl font-body font-medium leading-relaxed">
                     By submitting this quick apply, you enter our direct-impact pipeline. 
                     Get verified, get seen by worldwide corporate sponsors, and secure 
                     the funding your talent deserves.
                   </p>
                </div>

                <div className="space-y-8">
                   <div className="flex flex-wrap gap-8">
                      {[
                        { label: 'Network', value: '500+ Schools' },
                        { label: 'Funding', value: '₦2B+ Target' },
                        { label: 'Success', value: '98% Graduation' }
                      ].map(stat => (
                        <div key={stat.label}>
                          <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">{stat.label}</p>
                          <p className="text-xl font-headline font-black text-white">{stat.value}</p>
                        </div>
                      ))}
                   </div>
                   
                   <div className="flex items-center justify-between pt-8 border-t border-zinc-800/10">
                      <button
                        className="text-zinc-400 font-black text-xs uppercase tracking-widest hover:text-white transition-colors flex items-center gap-3 font-label"
                        onClick={scrollLeft}
                      >
                        <span className="material-symbols-outlined text-lg">arrow_back</span>
                        Back
                      </button>
                      <button className="bg-primary text-white px-14 py-6 rounded-[2rem] font-black text-sm uppercase tracking-[0.2em] shadow-2xl shadow-primary/40 hover:scale-[1.05] hover:bg-primary-container transition-all flex items-center gap-4 group/btn">
                        Complete Submission
                        <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">rocket_launch</span>
                      </button>
                   </div>
                </div>
              </div>
            </div>
          </div>


          {/* Pagination */}
          <div className="flex justify-center gap-4 mt-12">
            {[0, 1, 2].map(i => (
              <div key={i} className={`w-3 h-3 rounded-full transition-all duration-500 ${i === 0 ? 'bg-primary w-10' : 'bg-neutral-300'}`}></div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
