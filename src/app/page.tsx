'use client'

import React, { useRef } from 'react';
import Link from 'next/link';
// import { FadeUpStagger } from "@/components/ui/FadeUpStagger"; // available for future use
// import { useCountUp } from "@/hooks/useCountUp"; // available for future use

export default function Home() {
  const carouselRef = useRef<HTMLDivElement>(null);

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
    <>
      <div className="pt-20">
        {/* Minimalist Power Hero */}
        <section
          id="hero"
          className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden"
        >
          {/* Animated Background Logo */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
            <img
              alt="EdAfrica Logo Watermark"
              className="w-[600px] h-auto animate-slow-pulse opacity-[0.05]"
              src="https://lh3.googleusercontent.com/aida/ADBb0uiQ8Sue3YcTbc1Gbi8NPcM59VY8BHYliMXdKfn1GdBhKmDMRKOWR6g2PDFjzs3EcsqqwZ3M0xRdDj0Azhn5X71mr2fXOfWfXu9-hjv_6G7y1472VYg3s9AYRfA0Xbue56fiim8DuJUr0ag8Hbz-RJPEdo687EMkCFeeIKBvd9142y4m6AlKnGtWc-G0qFMxwTY9PMaetlrVOY4vjUwaY8ainmrPYqhb5wZXfLZx0SzB48nqMQ9TlivHC4aikpzzMuWg9igQZEFTXw"
            />
          </div>
          <div className="max-w-4xl z-10">
            <div className="mb-6 flex justify-center">
              <span
                className="material-symbols-outlined text-secondary text-4xl animate-float"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                school
              </span>
            </div>
            <h1 className="serif-hero text-6xl md:text-8xl text-on-surface tracking-tight leading-[1.1] mb-8">
              Empowering the next <br />generation of Nigerian minds.
            </h1>
            <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              A prestigious digital pathway connecting brilliant scholars with
              global opportunities through institutional trust and architectural
              precision.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <button className="min-w-[200px] border-2 border-primary text-primary px-8 py-4 rounded-xl font-headline font-bold uppercase tracking-widest text-xs transition-all duration-300 hover:bg-primary hover:text-on-primary">
                For Students
              </button>
              <button className="min-w-[200px] border-2 border-secondary text-secondary px-8 py-4 rounded-xl font-headline font-bold uppercase tracking-widest text-xs transition-all duration-300 hover:bg-secondary hover:text-on-secondary">
                For Sponsors
              </button>
            </div>
          </div>
          {/* Asymmetric Aesthetic Elements */}
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
        </section>

        {/* Mini 'About Us' Section */}
        <section
          id="problem"
          className="bg-white/80 backdrop-blur-sm relative z-10 py-24 border-y border-outline-variant/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
        >
          <div className="max-w-5xl mx-auto px-8 text-center relative z-10">
            <span className="text-primary font-headline font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
              Our Mission
            </span>
            <h2 className="text-3xl md:text-4xl font-headline font-extrabold tracking-tighter mb-6 relative z-10">
              Democratizing Educational Excellence
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-10 max-w-3xl mx-auto relative z-10">
              Indigent-Sc is more than a platform; it&apos;s a movement dedicated to
              bridging the financial gap for Nigeria&apos;s most brilliant minds. By
              combining institutional verification with transparent philanthropy,
              we ensure that every contribution creates a lasting academic legacy.
            </p>
            <Link
              className="inline-flex items-center text-primary font-bold text-sm group relative z-10"
              href="/about"
            >
              Read our full story
              <span className="material-symbols-outlined ml-2 transition-transform group-hover:translate-x-1">
                arrow_right_alt
              </span>
            </Link>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-white/95 pointer-events-none -z-10"></div>
        </section>

        {/* Featured Scholars Bento Grid */}
        <section id="solution" className="max-w-7xl mx-auto px-8 py-24">
          <div className="flex justify-between items-end mb-16 relative z-10">
            <div>
              <span className="text-secondary font-headline font-bold text-xs uppercase tracking-[0.2em]">
                Excellence Showcased
              </span>
              <h2 className="text-4xl font-headline font-extrabold tracking-tighter mt-2 bg-gradient-to-r from-on-surface to-on-surface-variant bg-clip-text text-transparent">
                Verified Scholars
              </h2>
            </div>
            <Link
              className="text-sm font-semibold text-primary flex items-center group bg-primary/5 hover:bg-primary/10 px-4 py-2 rounded-lg transition-colors border border-primary/10"
              href="/registry"
            >
              View Registry
              <span className="material-symbols-outlined ml-2 transition-transform group-hover:translate-x-1 text-sm">
                arrow_forward
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10">
            {/* Large Feature Card */}
            <div className="md:col-span-8 group relative overflow-hidden rounded-2xl bg-surface-container-low p-8 h-[500px] flex flex-col justify-end shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
              <img
                alt="Medical Student"
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-80 scale-100 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvLPPJ9zP8Dz5zg6KqEBdFmmcZ-qRLnU3xJ5Z_a7pYbacg1K38I6bo3mwSCQi4ZnYhFwU5CwS_SvHCwJH1V76qOTz2zn5d9BTyABOWXNeI9D6cJ5D953knCRX_tlAOBukP5lokkiw1qjhD7A1cy02IdoLNrNHlKiSphBw17-lNbCsiqpIfHrliZxtwgZZXS6P956kGIKf0xyytm-4HS1fWtYMHbuls27hbxFuUYl6QLw_cu8IU8vdGlRS3EIMVxWRGE3RhVCNRyLnP"
              />
              <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block px-3 py-1 bg-secondary text-on-secondary text-[10px] font-bold rounded-full mb-4 uppercase tracking-widest shadow-md">
                  Medical Excellence
                </span>
                <h3 className="text-3xl font-headline font-bold text-white mb-2 drop-shadow-md">Chidubem Okafor</h3>
                <p className="text-white/90 max-w-md text-sm mb-6 drop-shadow">
                  Pursuing MBBS with a focus on neurosurgery at the University
                  of Ibadan. Currently seeking sponsorship for final year
                  research.
                </p>
                <button className="text-secondary bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 px-5 py-2 rounded-lg text-xs font-bold transition-colors shadow-sm">
                  See More Details
                </button>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-90"></div>
            </div>
            {/* Secondary Grid Side */}
            <div className="md:col-span-4 flex flex-col gap-8">
              <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-sm flex-1 relative overflow-hidden border border-outline-variant/20 hover:border-primary/20 transition-colors group/card">
                <div className="mb-12">
                  <span
                    className="material-symbols-outlined text-secondary text-3xl mb-4 p-3 bg-secondary/10 rounded-xl inline-block"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    auto_awesome
                  </span>
                  <h4 className="text-xl font-headline font-bold mb-2">
                    Architecture Lead
                  </h4>
                  <p className="text-on-surface-variant text-sm">
                    Supporting the creative builders of tomorrow&apos;s infrastructure.
                  </p>
                </div>
                <Link
                  className="text-xs font-bold text-primary flex items-center group-hover/card:text-primary-container transition-colors"
                  href="#"
                >
                  See More
                  <span className="material-symbols-outlined text-sm ml-1 group-hover/card:translate-x-1 transition-transform">
                    chevron_right
                  </span>
                </Link>
                {/* Decorative blob */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover/card:bg-primary/10 transition-colors"></div>
              </div>
              <div className="bg-surface-container/80 backdrop-blur-md p-8 rounded-2xl flex-1 flex flex-col justify-between border border-white max-h-[220px]">
                <div className="flex -space-x-4 hover:space-x-[-8px] transition-all duration-300">
                  <div className="w-12 h-12 rounded-full border-2 border-surface bg-neutral-200 overflow-hidden transform transition-transform hover:scale-110 hover:z-10 object-cover shadow-sm">
                    <img
                        className="w-full h-full object-cover"
                      alt="Student 1"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPadQTDXvdh_2W79fq73usheXqlPQulQbGbA0uGI_IGwLeFt4vX1FMKq3b99C68s6nNfYXQHTDs56EG_OREPBdxuEh4W5CJ3FHaMktb5yL3vhL5wFSpzwo8syIXE5p1jRV0c5vRYeUxaLGPVkAAvXk6XffwmVxH_D6N8Qsa4MRYnvVJHCSt3-DTpB4uw3ByXQixI-27JGYxnLc68syPZsAaoc5-oD6yJ_lm6GEQFXhPoFLfCR36bNEvCS4J_Pv3kpq5Hxr77kaug0I"
                    />
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-surface bg-neutral-300 overflow-hidden transform transition-transform hover:scale-110 hover:z-10 object-cover shadow-sm">
                    <img
                        className="w-full h-full object-cover"
                      alt="Student 2"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUkK5ptGuFrgBB7-_IG6Qpo_v7_JXZrU6CbfiitqypbuxivbfymkJtekX0YfUhLvv-FZCMpnGbjFD93vPtUdyTXr793Io3IXILVTI_FHB8JTTIF7nIaM7xaFuk9FOagP6aya7AjjdL36iPXviXE41Ylgl_et76ROCXq8oU3Jhv9Dc4FWy29VlqgU5zf24TkLDMymHRxnSPaETgYZBWfSoUclvS1eEiImWno1TUa9w817xR59fHittImScK0DyzgJGf2oQP5OjfcFjl"
                    />
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-surface bg-neutral-400 overflow-hidden transform transition-transform hover:scale-110 hover:z-10 object-cover shadow-sm">
                    <img
                        className="w-full h-full object-cover"
                      alt="Student 3"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYwzzeQJLjimrEQ08tOuRAvH6iJRmM0pAHbU1pkLcrmanErsc10JPQv1v7M9GU-F4m5xq4G9kSmbbfMWYBl3oGaR4Zau2HBBjn6SlDDm-IomJ-zdUPCAjrRxpTwKwrsJRsgC3lDby1xgozHPFGyKsYgyeidRJDV5DYJDoRWSa4BiclTz2XKu1pF2DbjzpyKTkMCh1kiiyQwl7oLiOSnrZoAnjh5DFnEt3dP6n6JyeWRPu3E2zrcJYVsZlvP08FjF4Rv2u_mI70JJqP"
                    />
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-surface bg-primary flex items-center justify-center text-on-primary text-[10px] font-bold z-10 shadow-sm cursor-pointer hover:bg-primary/90 transition-colors">
                    +120
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="text-lg font-headline font-bold">
                    New Registrations
                  </h4>
                  <p className="text-on-surface-variant text-xs mt-1">
                    Verified in the last 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 'How It Works' Section */}
        <section className="py-24 bg-surface/50 backdrop-blur-md relative z-10 selection:bg-primary/20">
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="text-center mb-16">
              <span className="text-primary font-headline font-bold text-xs uppercase tracking-[0.2em]">
                The Process
              </span>
              <h2 className="text-4xl font-headline font-extrabold tracking-tighter mt-2">
                How It Works
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center p-8 bg-white/80 backdrop-blur-xl rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-white transition-transform hover:-translate-y-2 duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-primary/10">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    verified
                  </span>
                </div>
                <h4 className="text-xl font-headline font-bold mb-4">
                  1. Verification
                </h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Rigorous academic and financial vetting ensures only the most
                  deserving and authentic scholars enter our registry.
                </p>
              </div>
              <div className="text-center p-8 bg-white/80 backdrop-blur-xl rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-white transition-transform hover:-translate-y-2 duration-300 delay-100">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-secondary/10">
                  <span className="material-symbols-outlined text-secondary text-3xl">
                    handshake
                  </span>
                </div>
                <h4 className="text-xl font-headline font-bold mb-4">
                  2. Matchmaking
                </h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Sponsors connect directly with students based on field of
                  study, location, or shared values through our secure portal.
                </p>
              </div>
              <div className="text-center p-8 bg-white/80 backdrop-blur-xl rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-white transition-transform hover:-translate-y-2 duration-300 delay-200">
                <div className="w-16 h-16 bg-tertiary-container/10 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-tertiary-container/10">
                  <span className="material-symbols-outlined text-tertiary text-3xl">
                    rocket_launch
                  </span>
                </div>
                <h4 className="text-xl font-headline font-bold mb-4">
                  3. Impact
                </h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Funds are managed transparently with regular progress updates,
                  ensuring a direct line from donation to graduation.
                </p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Link
                className="text-primary font-bold text-sm underline underline-offset-4 hover:text-primary-container transition-colors"
                href="/methodology"
              >
                Learn more about our methodology
              </Link>
            </div>
          </div>
        </section>

        {/* Impact Tracker */}
        <section className="bg-surface-container-low/80 backdrop-blur-md py-24 relative z-10 border-t border-outline-variant/10">
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl font-headline font-extrabold tracking-tighter mb-6">
                  Radical Transparency <br />
                  in Philanthropy.
                </h2>
                <p className="text-on-surface-variant mb-10 leading-relaxed">
                  We provide a direct window into the impact of your
                  contribution. Every Naira is tracked, every scholar is
                  verified, every dream is accounted for.
                </p>
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-bold uppercase tracking-widest text-on-surface">
                        Annual Funding Target
                      </span>
                      <span className="text-xs font-bold text-secondary">
                        ₦450M / ₦1B
                      </span>
                    </div>
                    <div className="w-full h-2 bg-secondary-container/20 rounded-full overflow-hidden shadow-inner">
                      <div className="h-full bg-gradient-to-r from-secondary-fixed-dim to-secondary w-[45%] rounded-full opacity-90 hover:opacity-100 transition-opacity"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-bold uppercase tracking-widest text-on-surface">
                        Graduation Success Rate
                      </span>
                      <span className="text-xs font-bold text-tertiary">
                        98.2%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-tertiary-container/20 rounded-full overflow-hidden shadow-inner">
                      <div className="h-full bg-gradient-to-r from-tertiary-fixed-dim to-tertiary w-[98.2%] rounded-full opacity-90 hover:opacity-100 transition-opacity"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-10 border-4 border-white/40">
                  <img
                    alt="Tracking Dashboard Preview"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaNWvza_o4siDQ7caCwyqedHTv4umJgfdcum-QFgBnv-YvH_Y-IJxD_eBBzQiKqeeqXjU02NRHLacSugxX9rZze5srRboPlACtGqjLlkrXRlGkkfEnLjjUidIiyIHfQLQmPA3k7Y_-1vmowDpf8H0iFmYn1d_Xxm-2PuuEfH1u5G-xlCSTRioWU_ju5_J_3j5IaTtQjt3fU_GFEWUKNkIBWozQ4Hi7yKZn_0EIgk3lJP8GLADWqBFzPmbaC-9oQ-HxZ15wboBSbKv1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none"></div>
                </div>
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-gradient-to-br from-secondary to-secondary-fixed-dim rounded-2xl -z-0 hidden md:block shadow-xl opacity-80 mix-blend-multiply"></div>
                <div className="absolute -top-6 -right-6 p-6 backdrop-blur-xl bg-white/90 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white z-20 hidden md:block transition-transform hover:-translate-y-2">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center border border-secondary/20 shadow-inner">
                      <span
                        className="material-symbols-outlined text-secondary"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        workspace_premium
                      </span>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase text-neutral-500 tracking-wider">
                        Certified Impact
                      </p>
                      <p className="text-sm font-headline font-bold text-on-surface">
                        Grade A Institution
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners & Schools Section */}
        <section className="py-24 bg-white/90 backdrop-blur-xl relative z-10">
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-md">
                <span className="text-primary font-headline font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
                  Ecosystem
                </span>
                <h2 className="text-3xl font-headline font-extrabold tracking-tighter mb-6 relative">
                  Partnering Institutions
                </h2>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                  We collaborate with top-tier Nigerian universities and
                  educational boards to ensure academic records are verified at
                  the source.
                </p>
                <button className="bg-primary/5 text-primary border border-primary/20 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-primary hover:text-white transition-all shadow-sm">
                  For Schools: Join Network
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 flex-1">
                {["UNILAG", "UI IBADAN", "ABU ZARIA", "UNN", "LASU", "OAU IFE"].map((school, i) => (
                    <div key={i} className="h-20 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-110 cursor-pointer">
                    <span className="font-bold text-xl text-neutral-500 hover:text-primary tracking-tight">{school}</span>
                    <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 absolute -right-2 top-0 text-secondary text-xs transition-opacity delay-75">verified</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="py-24 bg-surface-container-highest/50 backdrop-blur-2xl border-t border-outline-variant/10 relative z-10">
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <span className="text-primary font-headline font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
                  Get In Touch
                </span>
                <h2 className="text-4xl font-headline font-extrabold tracking-tighter mb-8">
                  Let&apos;s talk about the future.
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/40 transition-colors cursor-pointer border border-transparent hover:border-white/50">
                    <span className="material-symbols-outlined text-primary p-2 bg-primary/10 rounded-lg">
                      mail
                    </span>
                    <div>
                      <p className="font-bold text-sm text-on-surface">Email Us</p>
                      <p className="text-on-surface-variant text-sm">
                        partnership@indigent-sc.edu.ng
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/40 transition-colors cursor-pointer border border-transparent hover:border-white/50">
                    <span className="material-symbols-outlined text-primary p-2 bg-primary/10 rounded-lg">
                      location_on
                    </span>
                    <div>
                      <p className="font-bold text-sm text-on-surface">Visit Headquarters</p>
                      <p className="text-on-surface-variant text-sm">
                        Lumina House, Victoria Island, Lagos
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <form className="space-y-5 bg-white/90 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    className="bg-surface-container border border-outline-variant/20 rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary/40 focus:bg-white transition-all focus:outline-none"
                    placeholder="First Name"
                    type="text"
                  />
                  <input
                    className="bg-surface-container border border-outline-variant/20 rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary/40 focus:bg-white transition-all focus:outline-none"
                    placeholder="Last Name"
                    type="text"
                  />
                </div>
                <input
                  className="w-full bg-surface-container border border-outline-variant/20 rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary/40 focus:bg-white transition-all focus:outline-none"
                  placeholder="Email Address"
                  type="email"
                />
                <textarea
                  className="w-full bg-surface-container border border-outline-variant/20 rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary/40 focus:bg-white transition-all focus:outline-none resize-none"
                  placeholder="Your Message"
                  rows={4}
                ></textarea>
                <button className="w-full bg-primary text-on-primary font-bold py-4 rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] hover:bg-primary-container hover:text-white transition-all duration-300">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Quick Apply Carousel Section */}
        <section
          id="apply"
          className="max-w-7xl mx-auto px-8 py-32 overflow-hidden relative z-10"
        >
          <div className="text-center mb-16 relative z-10">
            <span className="text-secondary font-headline font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
              Empower Your Future
            </span>
            <h2 className="serif-hero text-5xl md:text-6xl mb-4 text-on-surface">
              Quick Apply
            </h2>
            <p className="text-on-surface-variant text-lg max-w-xl mx-auto font-light">
              Secure your academic journey in three simple steps.
            </p>
          </div>
          <div className="relative group max-w-4xl mx-auto z-10">
            {/* Carousel Navigation */}
            <div className="absolute -left-16 top-1/2 -translate-y-1/2 z-20 hidden lg:block">
              <button
                className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-secondary hover:text-secondary transition-all"
                onClick={scrollLeft}
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
            </div>
            <div className="absolute -right-16 top-1/2 -translate-y-1/2 z-20 hidden lg:block">
              <button
                className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-secondary hover:text-secondary transition-all"
                onClick={scrollRight}
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
            {/* Carousel Wrapper */}
            <div
              className="carousel-container flex overflow-x-auto snap-x snap-mandatory gap-8 pb-12 transition-all"
              id="apply-carousel"
              ref={carouselRef}
            >
              {/* Slide 1: Basic Details */}
              <div className="min-w-full snap-center bg-white/95 backdrop-blur-xl rounded-3xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 md:p-12">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/10 shadow-sm">
                    <span className="material-symbols-outlined text-primary">
                      person_outline
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-headline font-bold text-on-surface">1. Basic Details</h3>
                    <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mt-1">
                      Personal Information
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 ml-1">
                      Full Name
                    </label>
                    <input
                      className="w-full bg-surface-container-low border border-transparent rounded-xl p-4 text-sm focus:border-secondary/30 focus:ring-2 focus:ring-secondary/10 transition-all focus:bg-white outline-none"
                      placeholder="e.g. Adebayo Chioma"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 ml-1">
                      Email Address
                    </label>
                    <input
                      className="w-full bg-surface-container-low border border-transparent rounded-xl p-4 text-sm focus:border-secondary/30 focus:ring-2 focus:ring-secondary/10 transition-all focus:bg-white outline-none"
                      placeholder="name@university.edu.ng"
                      type="email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 ml-1">
                      University Name
                    </label>
                    <input
                      className="w-full bg-surface-container-low border border-transparent rounded-xl p-4 text-sm focus:border-secondary/30 focus:ring-2 focus:ring-secondary/10 transition-all focus:bg-white outline-none"
                      placeholder="e.g. University of Lagos"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 ml-1">
                      Student ID Number
                    </label>
                    <input
                      className="w-full bg-surface-container-low border border-transparent rounded-xl p-4 text-sm focus:border-secondary/30 focus:ring-2 focus:ring-secondary/10 transition-all focus:bg-white outline-none"
                      placeholder="e.g. 2024/001/ENG"
                      type="text"
                    />
                  </div>
                </div>
                <div className="mt-12 flex justify-end">
                  <button
                    className="bg-secondary text-on-secondary px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-secondary-container hover:text-on-secondary-container shadow-md hover:shadow-lg transition-all"
                    onClick={scrollRight}
                  >
                    Next Step
                  </button>
                </div>
              </div>
              {/* Slide 2: File Uploads */}
              <div className="min-w-full snap-center bg-white/95 backdrop-blur-xl rounded-3xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 md:p-12">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/10 shadow-sm">
                    <span className="material-symbols-outlined text-primary">
                      cloud_upload
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-headline font-bold text-on-surface">2. File Uploads</h3>
                    <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mt-1">
                      Verification Documents
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="border-2 border-dashed border-outline-variant/40 rounded-2xl p-10 text-center hover:border-secondary hover:bg-secondary/5 transition-all cursor-pointer group/upload bg-surface/30">
                    <span className="material-symbols-outlined text-5xl text-neutral-300 group-hover/upload:text-secondary mb-4 drop-shadow-sm transition-colors">
                      description
                    </span>
                    <h4 className="text-sm font-bold mb-2 text-on-surface">
                      University Admission Letter
                    </h4>
                    <p className="text-xs text-on-surface-variant font-medium">
                      Click to browse or drag & drop
                    </p>
                  </div>
                  <div className="border-2 border-dashed border-outline-variant/40 rounded-2xl p-10 text-center hover:border-secondary hover:bg-secondary/5 transition-all cursor-pointer group/upload bg-surface/30">
                    <span className="material-symbols-outlined text-5xl text-neutral-300 group-hover/upload:text-secondary mb-4 drop-shadow-sm transition-colors">
                      badge
                    </span>
                    <h4 className="text-sm font-bold mb-2 text-on-surface">
                      Government ID (Voter&apos;s/NIN)
                    </h4>
                    <p className="text-xs text-on-surface-variant font-medium">
                      Click to browse or drag & drop
                    </p>
                  </div>
                </div>
                <div className="mt-12 flex justify-between items-center">
                  <button
                    className="text-neutral-500 font-bold text-sm px-4 hover:text-primary transition-colors flex items-center gap-1"
                    onClick={scrollLeft}
                  >
                    <span className="material-symbols-outlined text-sm">arrow_back</span>
                    Previous
                  </button>
                  <button
                    className="bg-secondary text-on-secondary px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-secondary-container hover:text-on-secondary-container shadow-md hover:shadow-lg transition-all"
                    onClick={scrollRight}
                  >
                    Next Step
                  </button>
                </div>
              </div>
              {/* Slide 3: Review & Submit */}
              <div className="min-w-full snap-center bg-white/95 backdrop-blur-xl rounded-3xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 md:p-12">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/10 shadow-sm">
                    <span className="material-symbols-outlined text-primary">
                      verified_user
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-headline font-bold text-on-surface">3. Review & Submit</h3>
                    <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mt-1">
                      Final Step
                    </p>
                  </div>
                </div>
                <div className="bg-surface-container-low/50 border border-outline-variant/10 rounded-2xl p-8 mb-8">
                  <div className="grid grid-cols-2 gap-y-6 gap-x-8 text-sm">
                    <div>
                      <p className="text-[10px] font-bold uppercase text-neutral-400 tracking-wider mb-1">
                        Name
                      </p>
                      <p className="font-bold text-base text-on-surface">John Doe</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase text-neutral-400 tracking-wider mb-1">
                        ID Number
                      </p>
                      <p className="font-bold text-base text-on-surface">L-09231</p>
                    </div>
                    <div className="col-span-2 border-t border-outline-variant/10 pt-6 mt-2">
                      <p className="text-[10px] font-bold uppercase text-neutral-400 tracking-wider mb-3">
                        Files Attached
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <span className="px-4 py-2 bg-white border border-outline-variant/20 rounded-full text-xs font-semibold flex items-center gap-2 shadow-sm text-on-surface">
                          <span className="material-symbols-outlined text-sm text-secondary-fixed-dim">
                            check_circle
                          </span>{" "}
                          admission_letter.pdf
                        </span>
                        <span className="px-4 py-2 bg-white border border-outline-variant/20 rounded-full text-xs font-semibold flex items-center gap-2 shadow-sm text-on-surface">
                          <span className="material-symbols-outlined text-sm text-secondary-fixed-dim">
                            check_circle
                          </span>{" "}
                          nin_slip.png
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3 mb-10 bg-surface/50 p-4 rounded-xl border border-outline-variant/10">
                  <input
                    className="w-5 h-5 mt-0.5 rounded border-outline-variant/40 text-secondary focus:ring-secondary cursor-pointer"
                    type="checkbox"
                    id="terms"
                  />
                  <label className="text-xs text-on-surface-variant font-medium leading-relaxed cursor-pointer" htmlFor="terms">
                    I agree to the{" "}
                    <Link className="text-primary font-bold underline hover:text-primary-container transition-colors" href="#">
                      Terms & Conditions
                    </Link>{" "}
                    and verify that all provided information is accurate and authentic.
                  </label>
                </div>
                <div className="flex justify-between items-center">
                  <button
                    className="text-neutral-500 font-bold text-sm px-4 hover:text-primary transition-colors flex items-center gap-1"
                    onClick={scrollLeft}
                  >
                     <span className="material-symbols-outlined text-sm">arrow_back</span>
                    Previous
                  </button>
                  <button className="bg-primary text-white px-10 py-4 rounded-xl font-headline font-extrabold text-sm shadow-[0_8px_20px_rgba(0,82,204,0.3)] hover:shadow-[0_10px_25px_rgba(0,82,204,0.4)] hover:-translate-y-1 hover:bg-[#0042a3] transition-all duration-300">
                    Submit Application
                  </button>
                </div>
              </div>
            </div>
            {/* Pagination Dots */}
            <div className="flex justify-center gap-3 mt-8">
              <div className="w-2 h-2 rounded-full bg-primary cursor-pointer hover:scale-125 transition-transform"></div>
              <div className="w-2 h-2 rounded-full bg-neutral-300 cursor-pointer hover:scale-125 hover:bg-neutral-400 transition-all"></div>
              <div className="w-2 h-2 rounded-full bg-neutral-300 cursor-pointer hover:scale-125 hover:bg-neutral-400 transition-all"></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
