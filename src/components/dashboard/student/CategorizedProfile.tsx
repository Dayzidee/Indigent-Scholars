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
  compact?: boolean
}

function Section({ title, subtitle, icon, children, colorClass, compact }: ProfileSectionProps) {
  return (
    <Card className={cn(
      "bg-zinc-900 rounded-[40px] border border-zinc-800 flex flex-col h-full overflow-hidden relative group",
      compact ? "p-5" : "p-8"
    )}>
      <div className="relative z-10">
        <div className={cn("flex items-center gap-4", compact ? "mb-4" : "mb-8")}>
           <div className={cn(
             "rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 shrink-0", 
             colorClass || "bg-blue-950/30 text-blue-400",
             compact ? "w-10 h-10" : "w-12 h-12"
           )}>
             <span className={cn("material-symbols-outlined", compact ? "text-xl" : "text-2xl")}>{icon}</span>
           </div>
           <div>
             <h4 className={cn("font-headline font-black text-zinc-100 leading-none mb-1", compact ? "text-lg" : "text-xl")}>{title}</h4>
             <p className="text-zinc-400 text-[10px] font-black uppercase tracking-[0.2em]">{subtitle}</p>
           </div>
        </div>
        <div className={cn("space-y-6", compact && "space-y-4")}>
          {children}
        </div>
      </div>
    </Card>
  )
}

function DataItem({ label, value, compact }: { label: string; value: string; compact?: boolean }) {
  return (
    <div className="space-y-1">
      <p className="text-zinc-400 text-[9px] font-black uppercase tracking-widest">{label}</p>
      <p className={cn("font-headline font-black text-zinc-200 tracking-tight", compact ? "text-xs" : "text-sm")}>{value}</p>
    </div>
  )
}

export function CategorizedProfile({ compact = false }: { compact?: boolean }) {
  return (
    <div className={cn(
      "grid grid-cols-1 gap-8",
      compact ? "md:grid-cols-2 xl:grid-cols-3 gap-4" : "md:grid-cols-2 lg:grid-cols-3"
    )}>
      
      {/* 1. General Information */}
      <Section title="General" subtitle="Basic Identity" icon="person" compact={compact}>
        <div className="grid grid-cols-2 gap-4">
          <DataItem label="Full Name" value="Adebayo Chioma" compact={compact} />
          <DataItem label="Nationality" value="Nigerian" compact={compact} />
          <DataItem label="State of Origin" value="Anambra" compact={compact} />
          <DataItem label="Gender" value="Female" compact={compact} />
          <DataItem label="Date of Birth" value="12 May 2002" compact={compact} />
          <DataItem label="Phone" value="+234 812 345 6789" compact={compact} />
        </div>
      </Section>

      {/* 2. Educational History */}
      <Section title="Education" subtitle="Institutional Timeline" icon="school" colorClass="bg-emerald-950/30 text-emerald-600" compact={compact}>
        <div className={cn("space-y-6 relative ml-2", compact && "space-y-4")}>
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
               <p className={cn("font-headline font-black text-zinc-200", compact ? "text-xs" : "text-sm")}>{edu.school}</p>
               <p className="text-[11px] text-zinc-500 font-medium">{edu.degree}</p>
             </div>
           ))}
        </div>
      </Section>

      {/* 3. Test Scores */}
       <Section title="Test Scores" subtitle="Academic Performance" icon="assessment" colorClass="bg-amber-950/30 text-amber-600" compact={compact}>
        <div className={cn("space-y-4", compact && "space-y-3")}>
           {/* CGPA Card */}
           <div className={cn("bg-amber-950/20 rounded-2xl border border-amber-950/50 flex items-center justify-between", compact ? "p-3" : "p-4")}>
              <div>
                <p className="text-[9px] font-black text-amber-700 uppercase tracking-widest mb-1">Current CGPA</p>
                <p className={cn("font-headline font-black text-amber-600 leading-none", compact ? "text-xl" : "text-2xl")}>4.72 / 5.0</p>
              </div>
              <div className={cn("rounded-xl bg-zinc-900 flex items-center justify-center text-amber-600 shrink-0", compact ? "w-8 h-8" : "w-10 h-10")}>
                 <span className={cn("material-symbols-outlined", compact ? "text-lg" : "text-xl")}>trending_up</span>
              </div>
           </div>
           
           <div className="grid grid-cols-2 gap-4 pt-2">
             <DataItem label="JAMB Score" value="312" compact={compact} />
             <DataItem label="WAEC Result" value="8 Distinctions" compact={compact} />
             <DataItem label="Post-UTME" value="288" compact={compact} />
             <DataItem label="Scholarship Rank" value="Top 5%" compact={compact} />
           </div>
        </div>
      </Section>

    </div>
  )
}
