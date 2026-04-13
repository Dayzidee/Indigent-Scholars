'use client'

import React from 'react'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface ProfileSectionProps {
  title: string
  subtitle: string
  icon: string
  children: React.ReactNode
  colorClass?: string
}

function Section({ title, subtitle, icon, children, colorClass }: ProfileSectionProps) {
  return (
    <Card className="bg-zinc-900 rounded-[40px] border border-zinc-800 p-8 flex flex-col h-full overflow-hidden relative group">
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-8">
           <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110", colorClass || "bg-blue-950/30 text-blue-400")}>
             <span className="material-symbols-outlined text-2xl">{icon}</span>
           </div>
           <div>
             <h4 className="text-xl font-headline font-black text-zinc-100 leading-none mb-1">{title}</h4>
             <p className="text-zinc-400 text-[10px] font-black uppercase tracking-[0.2em]">{subtitle}</p>
           </div>
        </div>
        <div className="space-y-6">
          {children}
        </div>
      </div>
    </Card>
  )
}

function DataItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-1">
      <p className="text-zinc-400 text-[9px] font-black uppercase tracking-widest">{label}</p>
      <p className="text-sm font-headline font-black text-zinc-200 tracking-tight">{value}</p>
    </div>
  )
}

export function CategorizedProfile() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* 1. General Information */}
      <Section title="General" subtitle="Basic Identity" icon="person">
        <div className="grid grid-cols-2 gap-4">
          <DataItem label="Full Name" value="Adebayo Chioma" />
          <DataItem label="Nationality" value="Nigerian" />
          <DataItem label="State of Origin" value="Anambra" />
          <DataItem label="Gender" value="Female" />
          <DataItem label="Date of Birth" value="12 May 2002" />
          <DataItem label="Phone" value="+234 812 345 6789" />
        </div>
      </Section>

      {/* 2. Educational History */}
      <Section title="Education" subtitle="Institutional Timeline" icon="school" colorClass="bg-emerald-950/30 text-emerald-600">
        <div className="space-y-6 relative ml-2">
           {/* Timeline line */}
           <div className="absolute left-[7px] top-2 bottom-2 w-px bg-emerald-950/20" />
           
           {[
             { year: "2021 - Present", school: "University of Lagos", degree: "B.Sc Chemical Engineering" },
             { year: "2015 - 2021", school: "Federal Govt College, Lagos", degree: "WASSCE Certification" },
             { year: "2009 - 2015", school: "Grace Primary School", degree: "Primary Leaving Cert" }
           ].map((edu, i) => (
             <div key={i} className="relative pl-6">
               <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-4 border-emerald-50" />
               <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest leading-none mb-1">{edu.year}</p>
               <p className="text-sm font-headline font-black text-zinc-200">{edu.school}</p>
               <p className="text-[11px] text-zinc-500 font-medium">{edu.degree}</p>
             </div>
           ))}
        </div>
      </Section>

      {/* 3. Test Scores */}
       <Section title="Test Scores" subtitle="Academic Performance" icon="assessment" colorClass="bg-amber-950/30 text-amber-600">
        <div className="space-y-4">
           {/* CGPA Card */}
           <div className="bg-amber-950/20 p-4 rounded-2xl border border-amber-950/50 flex items-center justify-between">
              <div>
                <p className="text-[9px] font-black text-amber-700 uppercase tracking-widest mb-1">Current CGPA</p>
                <p className="text-2xl font-headline font-black text-amber-600 leading-none">4.72 / 5.0</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center text-amber-600">
                 <span className="material-symbols-outlined text-xl">trending_up</span>
              </div>
           </div>
           
           <div className="grid grid-cols-2 gap-4 pt-2">
             <DataItem label="JAMB Score" value="312" />
             <DataItem label="WAEC Result" value="8 Distinctions" />
             <DataItem label="Post-UTME" value="288" />
             <DataItem label="Scholarship Rank" value="Top 5%" />
           </div>
        </div>
      </Section>

    </div>
  )
}
