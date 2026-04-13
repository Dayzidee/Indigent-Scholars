'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { StudentProfile } from '@/lib/constants/mock-data'
import { useRecentlyViewed } from '@/hooks/useRecentlyViewed'
import Link from 'next/link'

interface ScholarProfileDetailProps {
  student: StudentProfile;
  accessLevel: 'public' | 'sponsor' | 'admin';
}

export function ScholarProfileDetail({ student, accessLevel }: ScholarProfileDetailProps) {
  const { addView } = useRecentlyViewed()
  const isTeaser = accessLevel === 'public'
  const percentage = (student.raisedAmount / student.totalGoal) * 100

  // Track view on mount
  React.useEffect(() => {
    if (student.id) {
      addView(student.id)
    }
  }, [student.id, addView])

  const handleSponsorSuccess = (amount: number) => {
    console.log(`Successfully sponsored ${amount}`)
    // In a real app, refresh data or update local state
  }

  return (
    <div className="min-h-screen bg-transparent pb-32">

      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Profile Header */}
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12 lg:mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 relative"
          >
          <div className="aspect-[4/5] rounded-3xl lg:rounded-[40px] overflow-hidden relative z-10 border border-zinc-800/10 hover:border-blue-500/20 transition-colors">
              <img 
                className={cn("w-full h-full object-cover", isTeaser && "blur-md grayscale opacity-50")}
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${student.name}`} 
                alt={student.name}
              />
              {isTeaser && (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-black/20 backdrop-blur-sm">
                   <span className="material-symbols-outlined text-white text-5xl mb-4">lock</span>
                   <p className="text-white font-headline font-black text-xl leading-tight">Join Indigent Scholars to unlock full profile</p>
                </div>
              )}
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 lg:w-48 lg:h-48 bg-blue-100 rounded-3xl lg:rounded-[40px] -z-0" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-100 rounded-full blur-3xl opacity-50 -z-0" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 pb-4"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-[#0052CC] text-white px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.2em] flex items-center gap-2 shadow-lg shadow-blue-500/20">
                <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                VERIFIED SCHOLAR
              </span>
              <span className="text-zinc-400 font-headline font-black text-[10px] tracking-[0.2em] uppercase">ID: {student.matric.split('/').pop()?.toUpperCase() || 'ED-2024-8921'}</span>
            </div>
            
            <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl font-black text-zinc-100 mb-6 tracking-tight leading-[0.9]">
              {student.name}
            </h1>
            
            <p className="font-headline text-2xl text-zinc-500 mb-10 leading-snug max-w-2xl font-medium">
              {student.bio}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-zinc-700 pt-10">
              <div>
                <p className="text-zinc-400 text-[10px] font-black uppercase tracking-widest mb-2">Institution</p>
                <p className="font-headline font-black text-lg text-zinc-200">{student.university}</p>
              </div>
              <div>
                <p className="text-zinc-400 text-[10px] font-black uppercase tracking-widest mb-2">Funding Goal</p>
                <p className="font-headline font-black text-lg text-[#0052CC]">₦{student.totalGoal.toLocaleString()}</p>
              </div>
              <div className="col-span-2 md:col-span-1">
                <p className="text-zinc-400 text-[10px] font-black uppercase tracking-widest mb-2">Academic Rank</p>
                <p className="font-headline font-black text-lg text-amber-600">Top 1% Tier</p>
              </div>
            </div>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* The Story */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="font-headline text-3xl font-black text-zinc-100 tracking-tight">The Narrative</h2>
                <div className="h-[2px] flex-grow bg-zinc-800" />
              </div>
              
              <div className={cn("prose prose-lg text-zinc-400 leading-relaxed font-medium space-y-6 relative", isTeaser && "max-h-[200px] overflow-hidden")}>
                <p>{student.story}</p>
                <blockquote className="border-l-8 border-[#0052CC] pl-8 py-6 italic text-zinc-100 font-headline text-2xl font-black tracking-tight bg-blue-950/30 rounded-r-3xl">
                  &ldquo;Education is the engine of national progress, and my goal is to be a key piston in that engine.&rdquo;
                </blockquote>
                {isTeaser && (
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-50 to-transparent flex items-end justify-center pb-4">
                     <Button variant="ghost" className="text-[#0052CC] font-black uppercase">LOGIN TO READ MORE</Button>
                  </div>
                )}
              </div>
            </section>

            {/* Academic Bento */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="font-headline text-3xl font-black text-zinc-100 tracking-tight">Academic Merit</h2>
                <div className="h-[2px] flex-grow bg-zinc-800" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="p-6 sm:p-10 rounded-3xl lg:rounded-[40px] border border-zinc-800/10 bg-zinc-900 shadow-none flex flex-col group hover:border-[#0052CC]/30 transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-blue-950/30 text-[#0052CC] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">school</span>
                  </div>
                  <h3 className="font-headline font-black text-xl text-zinc-100 mb-2">Degree Program</h3>
                  <p className="text-zinc-500 font-medium mb-4">{student.field}</p>
                  <div className="mt-auto pt-4 border-t border-zinc-800">
                    <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">Current Standing</p>
                    <p className="text-2xl font-headline font-black text-[#0052CC]">GPA {student.gpa} / 5.00</p>
                  </div>
                </Card>

                <Card className="p-6 sm:p-10 rounded-3xl lg:rounded-[40px] border border-zinc-800/10 bg-zinc-900 shadow-none flex flex-col group hover:border-amber-500/30 transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-amber-950/30 text-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">emoji_events</span>
                  </div>
                  <h3 className="font-headline font-black text-xl text-zinc-100 mb-4">Scholastic Honors</h3>
                  <ul className="space-y-3">
                    {student.honors.map((honor, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                        <span className="text-sm font-bold text-zinc-300">{honor.title} ({honor.date})</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                <Card className="md:col-span-2 p-6 sm:p-10 rounded-3xl lg:rounded-[40px] border border-zinc-800/10 bg-zinc-900 text-white relative overflow-hidden group">
                  <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 lg:gap-10">
                    <div className="flex-1">
                      <h3 className="font-headline font-black text-2xl text-blue-400 mb-4">Future Aspirations</h3>
                      <p className="text-zinc-400 font-medium leading-relaxed">
                        {student.bio} After graduation, {student.name.split(' ')[0]} plans to contribute to the Nigerian tech and engineering landscape, focusing on solving critical infrastructure challenges.
                      </p>
                    </div>
                    <div className="w-32 h-32 rounded-[32px] bg-white/5 flex items-center justify-center shrink-0 border border-zinc-800/10 group-hover:rotate-12 transition-transform duration-500">
                      <span className="material-symbols-outlined text-6xl text-blue-400 opacity-50">architecture</span>
                    </div>
                  </div>
                  <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />
                </Card>
              </div>
            </section>

            {/* Verification Section */}
            {!isTeaser && (
              <section className="space-y-12">
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <h2 className="font-headline text-2xl font-black text-zinc-100 tracking-tight">Trust & Transparency</h2>
                    <div className="h-[2px] flex-grow bg-zinc-800" />
                  </div>
                  
                  <Card className="bg-zinc-900 rounded-3xl lg:rounded-[40px] border border-zinc-800/10 shadow-none overflow-hidden">
                     <div className="divide-y divide-zinc-50">
                        {[
                          { label: "Academic transcripts (Official)", key: 'transcript' },
                          { label: "Government Issued identity (NIN)", key: 'nin' },
                          { label: "University Enrollment Letter", key: 'admission' }
                        ].map((doc, i) => (
                          <div key={i} className="p-8 flex items-center justify-between hover:bg-zinc-800/50 transition-colors">
                             <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-blue-950/30 text-[#0052CC] flex items-center justify-center">
                                   <span className="material-symbols-outlined text-xl">verified_user</span>
                                </div>
                                <span className="font-bold text-zinc-200">{doc.label}</span>
                             </div>
                             <span className="text-[10px] font-black text-emerald-600 bg-emerald-950/30 px-4 py-1.5 rounded-full uppercase tracking-widest border border-emerald-100">VERIFIED</span>
                          </div>
                        ))}
                     </div>
                  </Card>
                </div>

                {/* Full Data Dump Explorer */}
                <div>
                   <div className="flex items-center gap-4 mb-8">
                      <h2 className="font-headline text-2xl font-black text-zinc-100 tracking-tight">Full Verified Dossier</h2>
                      <div className="h-[2px] flex-grow bg-zinc-800" />
                   </div>

                   <Card className="bg-zinc-800 rounded-3xl lg:rounded-[40px] border-none p-6 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 sm:gap-y-8">
                      {[
                        { label: "Full Name", value: student.name },
                        { label: "Matriculation Number", value: student.matric },
                        { label: "Academic Level", value: student.level },
                        { label: "Faculty / Department", value: `${student.faculty} / ${student.field}` },
                        { label: "Current CGPA", value: `${student.gpa} / 5.00` },
                        { label: "Verified Email", value: student.email },
                        { label: "Place of Origin", value: student.origin },
                        { label: "Verification Status", value: student.status.toUpperCase() },
                        { label: "Total Fund Requirement", value: `₦${student.totalGoal.toLocaleString()}` },
                        { label: "Total Received", value: `₦${student.raisedAmount.toLocaleString()}` }
                      ].map((item, i) => (
                        <div key={i} className="space-y-1">
                          <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">{item.label}</p>
                          <p className="font-headline font-black text-zinc-100 tracking-tight">{item.value}</p>
                        </div>
                      ))}
                      
                      {student.verifiedDocs && student.verifiedDocs.length > 0 && (
                        <div className="md:col-span-2 pt-8 border-t border-zinc-700 mt-4">
                           <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-6">Archive Attachments</p>
                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {student.verifiedDocs.map((doc, i) => (
                                <a key={i} href={doc.url} className="flex items-center gap-4 p-4 bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-blue-400 transition-colors group">
                                   <div className="w-10 h-10 rounded-xl bg-red-950/30 text-red-500 flex items-center justify-center group-hover:bg-red-950/300 group-hover:text-white transition-colors">
                                      <span className="material-symbols-outlined text-xl">picture_as_pdf</span>
                                   </div>
                                   <div className="min-w-0">
                                      <p className="text-xs font-black text-zinc-100 truncate">{doc.type}</p>
                                      <p className="text-[9px] font-bold text-zinc-400 truncate">{doc.name}</p>
                                   </div>
                                </a>
                              ))}
                           </div>
                        </div>
                      )}
                   </Card>
                </div>
              </section>
            )}

            {/* Why Sponsor Callout */}
            <section className="bg-[#0052CC] rounded-3xl lg:rounded-[40px] p-8 lg:p-14 text-white relative overflow-hidden group">
               <div className="relative z-10">
                  <h3 className="font-headline font-black text-3xl mb-4 tracking-tight">Why direct sponsorship?</h3>
                  <p className="text-blue-100 font-medium leading-relaxed max-w-2xl mb-8">
                     Investing in {student.name.split(' ')[0]} means investing in a verified high-potential leader. 100% of your contribution goes directly to tuition and research materials, monitored by the EdAfrica transparency protocol.
                  </p>
                  <div className="flex flex-wrap gap-4">
                     {["Impact Proofed", "Zero Fee Transfer", "Direct Reporting"].map((tag, i) => (
                       <div key={i} className="flex items-center gap-2 px-5 py-2.5 bg-white/10 rounded-full text-xs font-black uppercase tracking-widest border border-zinc-800/10 group-hover:bg-zinc-800/20 transition-all">
                          <span className="material-symbols-outlined text-sm text-blue-300" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span> {tag}
                       </div>
                     ))}
                  </div>
               </div>
               <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl group-hover:scale-110 transition-transform duration-700" />
            </section>

          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-32 space-y-8">
              {/* Funding Widget Placeholder */}
              <Card className="p-6 sm:p-10 rounded-3xl lg:rounded-[40px] border border-[#0052CC]/10 bg-zinc-900 shadow-none relative overflow-hidden">
                <h3 className="font-headline font-black text-xl text-zinc-100 mb-8 tracking-tight">Contribution Status</h3>
                
                <div className="mb-10">
                  <div className="flex justify-between items-end mb-4">
                    <span className="text-4xl font-headline font-black text-[#0052CC] tracking-tighter">₦{student.raisedAmount.toLocaleString()}</span>
                    <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">{Math.round(percentage)}% Raised</span>
                  </div>
                  <div className="w-full h-4 bg-zinc-800 rounded-full overflow-hidden p-1">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-[#0052CC] rounded-full shadow-[0_0_15px_rgba(0,82,204,0.3)]"
                    />
                  </div>
                  <p className="mt-4 text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">₦{(student.totalGoal - student.raisedAmount).toLocaleString()} TO TARGET</p>
                </div>

                <div className="space-y-4">
                  <Link href={`/students/${student.id}/sponsor`} className="block">
                    <Button 
                      variant="primary" 
                      size="lg" 
                      className="w-full py-8 text-lg font-black tracking-tight"
                    >
                      Sponsor This Scholar
                    </Button>
                  </Link>
                  <Button variant="secondary" size="lg" className="w-full py-8 text-lg font-black tracking-tight" iconRight="mail">
                    Send a Message
                  </Button>
                </div>

                <div className="mt-10 pt-8 border-t border-zinc-800">
                   <h4 className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] mb-6">Recent Backers</h4>
                   <div className="space-y-6">
                      {student.sponsors.map((spo, i) => (
                        <div key={i} className="flex items-center gap-4">
                           <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-xs font-black text-zinc-400">
                             {spo.name.charAt(0)}
                           </div>
                           <div className="flex-1 min-w-0">
                              <p className="text-sm font-black text-zinc-100 truncate">{spo.name}</p>
                              <p className="text-[10px] font-bold text-[#0052CC] uppercase tracking-widest">Sponsored ₦{spo.amount.toLocaleString()}</p>
                           </div>
                        </div>
                      ))}
                   </div>
                   <button className="w-full mt-8 text-[10px] font-black text-[#0052CC] uppercase tracking-widest hover:underline">View All Financial Supporters</button>
                </div>
              </Card>

              {/* Prestige Info Card */}
              <Card className="p-8 rounded-[32px] border border-amber-500/20 bg-amber-600/10 text-white shadow-none">
                 <div className="w-12 h-12 rounded-2xl bg-zinc-800/20 flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                 </div>
                 <h3 className="font-headline font-black text-xl mb-3 tracking-tight">Prestigous Backer</h3>
                 <p className="text-amber-100 text-sm font-medium leading-relaxed mb-6">
                   Single contributions over ₦500,000 grant access to the Prestige Council, including direct mentor-scholar calls and bi-annual academic roadmaps.
                 </p>
                 <button className="text-[10px] font-black uppercase tracking-widest underline decoration-white/40 underline-offset-4">Learn about Prestige Circle</button>
              </Card>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
