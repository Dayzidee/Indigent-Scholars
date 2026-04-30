'use client'

import React, { useRef } from 'react';
import Image from 'next/image';

export function QuickApplySection() {
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
    <section
      id="apply"
      className="max-w-7xl mx-auto px-8 py-32 overflow-hidden relative z-10 bg-transparent"
    >
      <div className="text-center mb-20 relative z-10">
        <span className="text-secondary-fixed-dim font-headline font-black text-xs uppercase tracking-[0.2em] mb-6 block">
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
            className="w-14 h-14 rounded-full border border-outline-variant/30 flex items-center justify-center bg-zinc-900/90 backdrop-blur-xl shadow-2xl hover:border-secondary hover:text-secondary-fixed-dim group/btn transition-all"
            onClick={scrollLeft}
          >
            <span className="material-symbols-outlined group-hover/btn:-translate-x-1 transition-transform">chevron_left</span>
          </button>
        </div>
        <div className="absolute -right-12 top-1/2 -translate-y-1/2 z-20 hidden xl:block">
          <button
            className="w-14 h-14 rounded-full border border-outline-variant/30 flex items-center justify-center bg-zinc-900/90 backdrop-blur-xl shadow-2xl hover:border-secondary hover:text-secondary-fixed-dim group/btn transition-all"
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
          {/* Slide 1: Scholar Credentials */}
          <div className="min-w-full snap-center bg-white/10 backdrop-blur-2xl rounded-[3rem] border border-zinc-800/10 shadow-2xl p-10 md:p-14">
            <div className="flex items-center gap-6 mb-10">
              <div className="w-16 h-16 rounded-[1.5rem] bg-white/5 flex items-center justify-center border border-zinc-800/10 shadow-inner">
                <span className="material-symbols-outlined text-primary-fixed-dim text-3xl">
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
              {/* Section A: Identity */}
              <div className="space-y-6">
                <p className="text-[10px] font-black text-primary-fixed-dim uppercase tracking-[0.2em] mb-4">A. Identity</p>
                <div className="space-y-4">
                  <div className="space-y-2">
                     <label htmlFor="qa-full-name" className="text-[10px] font-black uppercase text-zinc-400 ml-1">Full Legal Name</label>
                     <input id="qa-full-name" value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} className="w-full bg-white/5 border border-zinc-800/10 rounded-xl p-4 text-xs font-medium focus:border-primary outline-none transition-all" placeholder="As on ID" />
                  </div>
                  <div className="space-y-2">
                     <label htmlFor="qa-email" className="text-[10px] font-black uppercase text-zinc-400 ml-1">Email Address</label>
                     <input id="qa-email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-white/5 border border-zinc-800/10 rounded-xl p-4 text-xs font-medium focus:border-primary outline-none transition-all" placeholder="name@university.edu" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                       <label htmlFor="qa-phone" className="text-[10px] font-black uppercase text-zinc-400 ml-1">Phone</label>
                       <input id="qa-phone" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-white/5 border border-zinc-800/10 rounded-xl p-4 text-xs font-medium focus:border-primary outline-none transition-all" placeholder="+234..." />
                    </div>
                    <div className="space-y-2">
                       <label htmlFor="qa-gender" className="text-[10px] font-black uppercase text-zinc-400 ml-1">Gender</label>
                       <select id="qa-gender" value={formData.gender} onChange={(e) => setFormData({...formData, gender: e.target.value})} className="w-full bg-white/5 border border-zinc-800/10 rounded-xl p-4 text-xs font-medium focus:border-primary outline-none transition-all appearance-none cursor-pointer">
                         <option value="" disabled className="bg-zinc-900">Select</option>
                         <option value="male" className="bg-zinc-900">Male</option>
                         <option value="female" className="bg-zinc-900">Female</option>
                       </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                       <label htmlFor="qa-dob" className="text-[10px] font-black uppercase text-zinc-400 ml-1">Date of Birth</label>
                       <input id="qa-dob" type="date" value={formData.dateOfBirth} onChange={(e) => setFormData({...formData, dateOfBirth: e.target.value})} className="w-full bg-white/5 border border-zinc-800/10 rounded-xl p-4 text-xs font-medium focus:border-primary outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                       <label htmlFor="qa-marital-status" className="text-[10px] font-black uppercase text-zinc-400 ml-1">Marital Status</label>
                       <select id="qa-marital-status" value={formData.maritalStatus} onChange={(e) => setFormData({...formData, maritalStatus: e.target.value})} className="w-full bg-white/5 border border-zinc-800/10 rounded-xl p-4 text-xs font-medium focus:border-primary outline-none transition-all appearance-none cursor-pointer">
                         <option value="" disabled className="bg-zinc-900">Select</option>
                         <option value="single" className="bg-zinc-900">Single</option>
                         <option value="married" className="bg-zinc-900">Married</option>
                       </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section B: Origins & Institution */}
              <div className="space-y-6">
                <p className="text-[10px] font-black text-primary-fixed-dim uppercase tracking-[0.2em] mb-4">B. Origins & Institution</p>
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

              {/* Section C: Verification */}
              <div className="space-y-6">
                <p className="text-[10px] font-black text-primary-fixed-dim uppercase tracking-[0.2em] mb-4">C. Verification</p>
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

          {/* Slide 2: Verification Vault */}
          <div className="min-w-full snap-center bg-white/10 backdrop-blur-2xl rounded-[3rem] border border-zinc-800/10 shadow-2xl p-10 md:p-16">
            <div className="flex items-center gap-6 mb-12">
              <div className="w-16 h-16 rounded-[1.5rem] bg-white/5 flex items-center justify-center border border-zinc-800/10 shadow-inner">
                <span className="material-symbols-outlined text-primary-fixed-dim text-3xl">
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
                    <span className="material-symbols-outlined text-5xl text-zinc-400 group-hover/upload:text-secondary-fixed-dim mb-4 transition-colors">
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
                     <label htmlFor={`qa-upload-${upload.key}`} className="text-[9px] font-black uppercase text-primary-fixed-dim tracking-widest">Document Description</label>
                     <input 
                       id={`qa-upload-${upload.key}`}
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
                className="text-zinc-400 font-black text-xs uppercase tracking-widest hover:text-primary-fixed-dim transition-colors flex items-center gap-3 font-label"
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

          {/* Slide 3: Future Starts Now */}
          <div className="min-w-full snap-center bg-zinc-900 overflow-hidden rounded-[3rem] border border-zinc-800/10 shadow-2xl relative group">
            <Image 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2070" 
              className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:scale-110 transition-transform duration-1000"
              alt="Advancement"
              fill
              sizes="(max-width: 1024px) 100vw, 80vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent"></div>
            
            <div className="relative z-10 p-12 md:p-20 h-full flex flex-col justify-between">
              <div>
                 <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary-fixed-dim border border-primary/30 text-[10px] font-black rounded-full mb-8 uppercase tracking-[0.3em]">
                   Your Future Starts Now
                 </span>
                 <h3 className="text-4xl md:text-5xl font-headline font-black text-white tracking-tighter mb-6 leading-[0.9]">
                   Join the Elite Registry of <span className="text-secondary-fixed-dim">Verified scholars.</span>
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
                        <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">{stat.label}</p>
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
  );
}
