import { STUDENTS_DATA } from '@/lib/constants/mock-data'
import { useRecentlyViewed } from '@/hooks/useRecentlyViewed'
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'

export function SponsorDiscovery() {
  const { recentIds } = useRecentlyViewed()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])
  
  const recentStudents = recentIds
    .map(id => STUDENTS_DATA.find(s => s.id === id))
    .filter(Boolean)
    .slice(0, 5) as typeof STUDENTS_DATA

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-7xl mx-auto space-y-8 md:space-y-12 pb-20"
    >

      {/* Header Section */}
      <section className="space-y-4">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-[#0052CC] font-bold text-[10px] tracking-[0.2em] uppercase mb-1 block font-label">Student Matchmaker</span>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-100 font-headline leading-tight">Discover Future Leaders</h1>
            <p className="text-zinc-400 mt-2 max-w-2xl font-body text-xs md:text-sm leading-relaxed">
              Browse verified scholars whose academic potential outweighs their financial means. Every contribution builds a bridge to excellence.
            </p>
          </div>
          <div className="flex gap-2 w-full md:w-auto mt-4 md:mt-0">
            <Button variant="outline" iconLeft="filter_list" className="flex-1 md:flex-none font-black tracking-tight">
              Filters
            </Button>
            <Button variant="secondary" iconLeft="sort" className="flex-1 md:flex-none font-black tracking-tight">
              High Need First
            </Button>
          </div>
        </div>
      </section>

      {/* Recently Viewed Horizontal List */}
      {mounted && recentStudents.length > 0 && (
        <section className="space-y-6 overflow-hidden">
           <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-zinc-400">history</span>
              <h3 className="text-xl font-black font-headline tracking-tight text-zinc-100">Jump Back In</h3>
           </div>
           
           <div className="flex gap-4 overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide">
              {recentStudents.map((student) => (
                <Link key={student.id} href={`/students/${student.id}`} className="shrink-0 w-64">
                   <motion.div 
                    whileHover={{ y: -4 }}
                    className="bg-zinc-800/50 p-4 rounded-3xl border border-zinc-800 flex items-center gap-4 group hover:bg-zinc-900 hover:shadow-xl hover:border-[#0052CC]/10 transition-all"
                   >
                      <div className="w-12 h-12 rounded-2xl bg-zinc-700 overflow-hidden shrink-0 border border-zinc-800 relative">
                         <Image 
                          src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&auto=format&fit=crop&q=60" 
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500" 
                          alt={student.name} 
                        />
                      </div>
                      <div className="min-w-0">
                         <p className="font-headline font-black text-zinc-200 truncate leading-tight group-hover:text-[#0052CC] transition-colors">{student.name}</p>
                         <p className="text-[9px] font-medium text-zinc-400 truncate uppercase tracking-wider">{student.university}</p>
                      </div>
                   </motion.div>
                </Link>
              ))}
           </div>
        </section>
      )}

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {STUDENTS_DATA.map((scholar, idx) => (
          <motion.div 
            key={scholar.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-zinc-900 rounded-3xl lg:rounded-[40px] overflow-hidden group hover:shadow-2xl hover:shadow-blue-600/5 transition-all duration-500 border border-zinc-800 flex flex-col"
          >
            <div className="relative h-64 overflow-hidden">
              <Image 
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${scholar.name}`}
                alt={scholar.name}
                width={400}
                height={400}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute top-4 left-4 bg-zinc-900/90 backdrop-blur-md px-4 py-1.5 rounded-full flex items-center gap-2 border border-zinc-800/20">
                <span className="material-symbols-outlined text-sm text-[#0052CC]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                <span className="text-[9px] font-black uppercase tracking-widest text-zinc-100 font-label">Verified</span>
              </div>
            </div>
            
            <div className="p-6 md:p-8 lg:p-10 flex flex-1 flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-black text-zinc-100 leading-tight font-headline tracking-tight">{scholar.name}</h3>
                    <p className="text-xs font-bold text-zinc-400 font-label uppercase tracking-widest leading-none">{scholar.university}</p>
                  </div>
                  <span className="text-[9px] font-black px-3 py-1 rounded-lg border border-zinc-800 bg-zinc-800 text-zinc-400 uppercase tracking-widest font-label truncate max-w-[80px]">
                    {scholar.field}
                  </span>
                </div>
                
                <p className="text-sm text-zinc-400 font-body leading-relaxed mb-8 italic line-clamp-2">
                  &ldquo;{scholar.bio}&rdquo;
                </p>
              </div>
              
              <div className="space-y-5">
                <div className="space-y-2">
                  <div className="flex justify-between items-center bg-zinc-800/30 p-3 rounded-2xl border border-zinc-800/50">
                    <span className="text-[10px] font-black uppercase tracking-widest font-label text-zinc-400">Funding Required</span>
                    <span className="text-lg font-black font-headline text-primary-fixed-dim">₦{scholar.totalGoal.toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Link href={`/students/${scholar.id}/sponsor`} className="flex-1">
                    <Button 
                      className="w-full font-black tracking-tight shadow-xl shadow-blue-900/40"
                    >
                      Fund Scholar
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    className="px-5"
                    onClick={() => window.location.href = `/students/${scholar.id}`}
                  >
                    <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">visibility</span>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Impact Summary Card */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-zinc-900 rounded-3xl lg:rounded-[48px] p-8 lg:p-16 flex flex-col lg:flex-row items-center gap-10 md:gap-14 mt-8 overflow-hidden relative group shadow-2xl">
          <div className="absolute right-0 top-0 opacity-10 pointer-events-none transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-6">
            <span className="material-symbols-outlined text-[150px] md:text-[400px] text-white" style={{ fontVariationSettings: "'wght' 100" }}>auto_awesome</span>
          </div>
          
          <div className="flex-1 z-10 space-y-6 md:space-y-8 text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white leading-tight font-headline tracking-tight md:tracking-tighter">
              Become a Sole Benefactor today.
            </h2>
            <p className="text-white/60 text-sm md:text-base lg:text-xl font-body max-w-2xl leading-relaxed">
              Take complete responsibility for a scholar's education. Your bulk contribution ensures uninterrupted academic excellence.
            </p>
            <Button variant="primary" size="lg" className="w-full lg:w-auto">
              Discover Unsponsored Scholars
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6 w-full lg:w-80 z-10">
            <div className="bg-white/5 backdrop-blur-xl p-6 md:p-8 rounded-3xl lg:rounded-[32px] border border-zinc-800/10 shadow-2xl">
              <div className="text-[#0052CC] text-3xl sm:text-4xl md:text-5xl font-black mb-1 font-headline tracking-tighter">84%</div>
              <div className="text-white/40 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] font-label">Avg. Completion</div>
            </div>
            <div className="bg-white/5 backdrop-blur-xl p-6 md:p-8 rounded-3xl lg:rounded-[32px] border border-zinc-800/10 shadow-2xl">
              <div className="text-emerald-500 text-3xl sm:text-4xl md:text-5xl font-black mb-1 font-headline tracking-tighter">1,240</div>
              <div className="text-white/40 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] font-label">Lives Changed</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
