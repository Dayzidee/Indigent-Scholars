'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { useState } from 'react'

interface TeamMember {
  name: string
  email: string
  role: string
  roleColor: string
  initial?: string
  image?: string
}

const teamMembers: TeamMember[] = [
  { name: 'Adebola Williams', email: 'adebola.w@globalscholars.org', initial: 'AW', role: 'Admin', roleColor: 'bg-primary/10 text-primary' },
  { 
    name: 'Chioma Okeke', 
    email: 'c.okeke@globalscholars.org', 
    role: 'Viewer', 
    roleColor: 'bg-surface-container-high text-outline',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_4R5gXlHxJSGZyCQ9M5FLJEomZToYGXNlOoTptN0p6DwIZEJjJF312aijOeunK0l6JHhero7gnhTyYk4qFZwyaniiRDAokpj9T7OpeY1S7vgAi2tbzkGe4acIaVSqS5U3GnfIXyZa8FqrgoBM0c2kdfOW3mL3ip7bPWhZ1liiez-mqmRNYjv0MUt4SkSRdNBpHhY6FG4oCSMwAKVu7DU-RrxN-oVs2JH8DSkupT7_xeWJOzArMygby3Nh3s-gq4iJ8DUIF2ih4gW1'
  },
]

export function SponsorSettings() {
  const [twoFA, setTwoFA] = useState(true)

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-6xl mx-auto space-y-8 md:space-y-12"
    >
      {/* Page Header */}
      <section className="space-y-3">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-primary font-headline">Organization Settings</h1>
        <p className="text-on-surface-variant font-medium font-body max-w-2xl leading-relaxed text-sm">
          Manage your institution's profile, verification status, and security protocols.
        </p>
      </section>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-12 gap-8">
        {/* Section 1: Organization Profile */}
        <section className="col-span-12 lg:col-span-8 bg-surface-container-lowest rounded-3xl lg:rounded-[2rem] p-6 sm:p-8 lg:p-10 border border-outline-variant/10 shadow-xl shadow-primary/[0.02]">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-8 md:mb-10">
            <div>
              <h2 className="text-xl md:text-2xl font-bold font-headline text-on-surface mb-1">Organization Profile</h2>
              <p className="text-xs md:text-sm text-on-surface-variant font-body font-medium">Update your institutional identity & scholarship focus.</p>
            </div>
            <button className="w-full sm:w-auto px-6 md:px-8 py-3 bg-primary text-on-primary rounded-xl md:rounded-2xl font-bold text-sm shadow-xl shadow-primary/20 hover:brightness-110 active:scale-95 transition-all font-headline">
              Save Changes
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-12">
            {/* Logo Upload */}
            <div className="flex flex-col items-center gap-4">
              <div className="relative group">
                <div className="w-40 h-40 rounded-3xl lg:rounded-[2.5rem] bg-surface-container-low flex items-center justify-center overflow-hidden border-2 border-dashed border-outline-variant/30 group-hover:border-primary/50 transition-colors">
                  <Image 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpRnMHTc9E2XzfmlqtwQyOaH49Lh7084ipR1-y-s7dOD5qNZnoU4dSGePcO8UjHvLfsiJugIXl3B0UPxjzWWUeu1AAd-WBCaU3W2RC7ZawbEMkO9VIf16AXKhV0uj7lj7aGblGShFsTck-Vycho7qns11L08BXFFbnYfenEQ5ZirLyxk-dTl7il6qYadY4mjqyJR0OQoPS377kFHDqVX0r1NZOrZZKaemqLZT21Md_eKkKFI6ws3fxE09HXy_ekT-MoqiRaquZHsx7"
                    alt="Organization Logo"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                    <span className="material-symbols-outlined text-white text-4xl" style={{ fontVariationSettings: "'wght' 700" }}>cloud_upload</span>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-secondary text-on-secondary w-10 h-10 rounded-2xl flex items-center justify-center border-4 border-surface-container-lowest shadow-lg">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'wght' 900" }}>edit</span>
                </div>
              </div>
              <span className="text-[10px] font-black text-outline uppercase tracking-[0.2em] font-label">Institutional Logo</span>
            </div>

            {/* Form Fields */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="col-span-full space-y-2">
                <label className="text-[10px] font-black text-outline uppercase tracking-[0.2em] font-label">Organization Name</label>
                <input className="w-full bg-surface-container-low/50 border border-outline-variant/10 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-primary/10 text-sm font-bold font-body transition-all" type="text" defaultValue="Global Scholars Initiative" />
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-black text-outline uppercase tracking-[0.2em] font-label">Sector</label>
                <select className="flex w-full bg-surface-container-low/50 border border-outline-variant/10 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-primary/10 text-sm font-bold font-body transition-all appearance-none cursor-pointer">
                  <option>Philanthropy & NGO</option>
                  <option>Corporate CSR</option>
                  <option>Governmental</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-outline uppercase tracking-[0.2em] font-label">Contact Email</label>
                <input className="w-full bg-surface-container-low/50 border border-outline-variant/10 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-primary/10 text-sm font-bold font-body transition-all" type="email" defaultValue="ops@globalscholars.org" />
              </div>

              <div className="col-span-full space-y-2">
                <label className="text-[10px] font-black text-outline uppercase tracking-[0.2em] font-label">Website</label>
                <input className="w-full bg-surface-container-low/50 border border-outline-variant/10 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-primary/10 text-sm font-bold font-body transition-all" type="url" defaultValue="https://globalscholars.org" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Verification Status */}
        <section className="col-span-12 lg:col-span-4 bg-[#FCF9F8] rounded-3xl lg:rounded-[2rem] p-6 sm:p-8 lg:p-10 border border-outline-variant/10 relative overflow-hidden shadow-xl shadow-primary/[0.01]">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
          <h2 className="text-xl md:text-2xl font-bold font-headline text-on-surface mb-6 md:mb-8">Verification</h2>
          
          <div className="flex items-center gap-4 md:gap-6 p-5 md:p-6 rounded-2xl md:rounded-3xl bg-secondary-container/10 border border-secondary/20 mb-8 md:mb-10 shadow-inner group">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-secondary flex items-center justify-center shadow-xl shadow-secondary/20 transition-transform group-hover:scale-110 duration-500">
              <span className="material-symbols-outlined text-white text-2xl md:text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            </div>
            <div className="space-y-1">
              <p className="text-secondary font-bold text-lg md:text-xl leading-none font-headline tracking-tight uppercase">Verified</p>
              <p className="text-[10px] text-secondary font-bold uppercase tracking-[0.2em] mt-1 font-label opacity-70">Prestige Partner</p>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-[10px] font-black text-outline uppercase tracking-[0.2em] font-label">Audit Logs</p>
            <div className="space-y-3">
              {[
                { label: 'Certificate of Incorporation', icon: 'check_circle' },
                { label: 'Tax ID (TIN)', icon: 'check_circle' }
              ].map((doc, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-surface-container-low/50 rounded-2xl hover:bg-surface-container-low transition-all border border-transparent hover:border-outline-variant/20">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-tertiary-container text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>{doc.icon}</span>
                    <span className="text-sm font-bold font-body text-on-surface">{doc.label}</span>
                  </div>
                  <button className="material-symbols-outlined text-outline hover:text-primary transition-colors text-xl">visibility</button>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 text-primary text-[11px] font-black flex items-center justify-center gap-3 py-4 rounded-2xl hover:bg-primary/5 border border-primary/10 transition-all font-label uppercase tracking-widest">
              <span className="material-symbols-outlined text-lg">add_circle</span>
              Upload Credentials
            </button>
          </div>
        </section>

        {/* Section 3: Security & 4: Team Management */}
        <section className="col-span-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Security Card */}
          <div className="bg-surface-container-lowest rounded-3xl lg:rounded-[2rem] p-6 sm:p-10 border border-outline-variant/10 shadow-xl shadow-primary/[0.02]">
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <span className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
              </span>
              <h2 className="text-xl md:text-2xl font-bold font-headline">Security Protocols</h2>
            </div>
            
            <div className="space-y-10">
              <div className="flex items-center justify-between group cursor-pointer" onClick={() => setTwoFA(!twoFA)}>
                <div className="space-y-1">
                  <p className="font-black text-sm font-headline">Two-Factor Authentication</p>
                  <p className="text-xs text-on-surface-variant font-body">Biometric or App-based verification for disbursements.</p>
                </div>
                <div className={cn(
                  "relative inline-flex h-7 w-12 items-center rounded-full transition-colors duration-300 shadow-inner",
                  twoFA ? "bg-primary" : "bg-outline-variant/40"
                )}>
                  <div className={cn(
                    "inline-block h-5 w-5 transform rounded-full bg-zinc-900 transition-transform duration-300 shadow-lg",
                    twoFA ? "translate-x-6" : "translate-x-1"
                  )} />
                </div>
              </div>

              <div className="h-[1px] bg-outline-variant/10 shadow-[0_0.5px_0_rgba(255,255,255,0.8)]" />

              <div className="space-y-6">
                <p className="font-black text-sm font-headline">Credential Authority</p>
                <div className="space-y-4">
                  <input className="w-full bg-surface-container-low/50 border border-outline-variant/10 rounded-2xl px-6 py-4 text-sm font-bold font-body transition-all focus:ring-4 focus:ring-primary/10" placeholder="Current Password" type="password" />
                  <input className="w-full bg-surface-container-low/50 border border-outline-variant/10 rounded-2xl px-6 py-4 text-sm font-bold font-body transition-all focus:ring-4 focus:ring-primary/10" placeholder="New Password" type="password" />
                  <button className="text-primary font-black text-[11px] uppercase tracking-[0.2em] border border-primary/20 px-8 py-3.5 rounded-2xl hover:bg-primary/5 transition-all font-label w-fit shadow-lg shadow-primary/[0.05]">
                    Rotate Keys
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Team Management Card */}
          <div className="bg-surface-container-lowest rounded-3xl lg:rounded-[2rem] p-6 sm:p-10 border border-outline-variant/10 shadow-xl shadow-primary/[0.02]">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 md:mb-10">
              <div className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>group</span>
                </span>
                <h2 className="text-xl md:text-2xl font-bold font-headline text-on-surface">Team Hierarchy</h2>
              </div>
              <button className="w-full sm:w-auto text-[10px] font-bold text-primary flex items-center justify-center gap-2 hover:bg-primary/5 px-4 py-2.5 rounded-xl transition-all uppercase tracking-widest font-label border border-primary/10">
                <span className="material-symbols-outlined text-sm">person_add</span>
                Invite User
              </button>
            </div>

            <div className="space-y-4">
              {teamMembers.map((member, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 md:p-5 bg-surface-container-low/30 rounded-2xl md:rounded-3xl hover:bg-surface-container-low/60 transition-all border border-transparent hover:border-outline-variant/10 group gap-4">
                  <div className="flex items-center gap-4 md:gap-5 w-full sm:w-auto overflow-hidden">
                    <div className={cn("w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center font-bold text-xs md:text-sm shadow-inner transition-transform group-hover:scale-105 duration-500 overflow-hidden shrink-0", member.roleColor)}>
                      {member.image ? (
                        <Image src={member.image} alt={member.name} width={48} height={48} className="w-full h-full object-cover" />
                      ) : member.initial}
                    </div>
                    <div className="min-w-0 pr-2">
                      <p className="text-sm font-bold text-on-surface font-headline truncate">{member.name}</p>
                      <p className="text-[10px] text-outline font-bold font-label tracking-wide truncate">{member.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-outline-variant/5">
                    <span className={cn("px-4 py-1.5 text-[9px] font-bold rounded-full uppercase tracking-[0.2em] font-label border border-current/10 shadow-sm", member.roleColor)}>
                      {member.role}
                    </span>
                    <button className="p-2 text-zinc-400 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-xl">more_vert</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Floating Impact Note: Architecture of Change */}
        <section className="col-span-12 bg-inverse-surface rounded-3xl lg:rounded-[2.5rem] p-8 lg:p-16 text-inverse-on-surface relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 group">
          <div className="absolute -right-20 -bottom-20 opacity-10 pointer-events-none transition-transform duration-1000 group-hover:scale-110 group-hover:-rotate-12">
            <span className="material-symbols-outlined text-[300px]" style={{ fontVariationSettings: "'wght' 100" }}>architecture</span>
          </div>
          
          <div className="relative z-10 max-w-2xl space-y-6">
            <h3 className="text-3xl lg:text-4xl font-black tracking-tight leading-[1.1] font-headline">Architecture of Change</h3>
            <p className="text-lg lg:text-xl opacity-70 leading-relaxed font-body font-medium italic">
              "As an organization, you are not just funding education; you are designing the future leadership of Nigeria. Your institutional settings ensure that every naira is tracked with the precision it deserves."
            </p>
          </div>
          
          <div className="relative z-10 flex flex-col items-center gap-3 bg-white/5 backdrop-blur-3xl px-8 py-6 sm:px-12 sm:py-10 rounded-3xl lg:rounded-[2.5rem] border border-zinc-800/10 shadow-2xl">
            <p className="text-secondary-fixed text-6xl font-black tracking-tighter font-headline">142</p>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60 font-label whitespace-nowrap">Scholars Enabled</p>
          </div>
        </section>
      </div>
    </motion.div>
  )
}
