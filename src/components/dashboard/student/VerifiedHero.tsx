'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { StudentProfile } from '@/lib/constants/mock-data'

interface VerifiedHeroProps {
  student: StudentProfile
}

export function VerifiedHero({ student }: VerifiedHeroProps) {
  // Use a professional placeholder if no avatar is provided
  const avatarUrl = student.avatar || 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=800&auto=format&fit=crop&q=80'

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full bg-zinc-900 rounded-[40px] border border-zinc-800 p-8 md:p-12 relative overflow-hidden"
    >
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        
        {/* Left Side: Student Details */}
        <div className="md:col-span-7 flex flex-col space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Fully Verified Scholar</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black font-headline text-white tracking-tight leading-tight mb-2">
              {student.name}
            </h1>
            <p className="text-lg text-[#0052CC] font-bold font-headline">{student.level} • {student.faculty}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 py-6 border-y border-zinc-800">
            <div>
              <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-1">Institution</p>
              <p className="text-sm font-bold text-zinc-200">{student.university}</p>
            </div>
            <div>
              <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-1">Field of Study</p>
              <p className="text-sm font-bold text-zinc-200">{student.field}</p>
            </div>
            <div>
              <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-1">Matriculation</p>
              <p className="text-sm font-bold text-zinc-200">{student.matric}</p>
            </div>
            <div>
              <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-1">Current GPA</p>
              <p className="text-sm font-bold text-emerald-400">{student.gpa}</p>
            </div>
          </div>

          <p className="text-sm text-zinc-400 leading-relaxed italic">
            "{student.bio}"
          </p>
        </div>

        {/* Right Side: Professional Image */}
        <div className="md:col-span-5 relative flex justify-center md:justify-end">
          <div className="relative w-full max-w-[350px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-black/50 border border-zinc-700/50 group">
            <Image 
              src={avatarUrl}
              alt={`${student.name} Profile`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, 350px"
              priority
            />
            {/* Glass Overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
              <p className="text-[9px] text-white/70 font-bold uppercase tracking-widest mb-1">Funding Goal</p>
              <div className="flex items-end justify-between">
                <span className="text-lg font-black text-white font-headline">₦{student.totalGoal.toLocaleString()}</span>
                <span className="text-xs font-bold text-emerald-400">{Math.round((student.raisedAmount / student.totalGoal) * 100)}% Funded</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Blurs */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#0052CC]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
    </motion.div>
  )
}
