'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export function IncompleteView() {
  const [currentSlide, setCurrentSlide] = useState(2) // Default to Step 2 for this task
  const [uploadProgress, setUploadProgress] = useState<{ [key: string]: number }>({
    'National ID': 0,
    'Academic Transcript': 0,
    'General': 0
  })
  const [isUploading, setIsUploading] = useState(false)

  // Mock Upload Logic
  const startMockUpload = (id: string) => {
    setIsUploading(true)
    let progress = 0
    const interval = setInterval(() => {
      progress += Math.random() * 30
      if (progress >= 100) {
        progress = 100
        clearInterval(interval)
        setIsUploading(false)
      }
      setUploadProgress(prev => ({ ...prev, [id]: progress }))
    }, 400)

    // Ensure interval is cleared even if component somehow loses track
    return () => clearInterval(interval)
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 space-y-8 pb-24">
      {/* Warning Banner - Matched exactly to Image 1 */}
      <div className="bg-[#FFF1F1] border border-[#FFE4E4] rounded-2xl p-5 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#E5484D] shadow-sm">
            <span className="material-symbols-outlined text-2xl font-bold">warning</span>
          </div>
          <div>
            <h3 className="font-headline font-extrabold text-[#7E1618]">Your profile is incomplete.</h3>
            <p className="text-xs text-[#7E1618]/70 font-medium tracking-tight">You cannot be matched with sponsors until you upload your required IDs and academic transcripts.</p>
          </div>
        </div>
        <button className="text-[#E5484D] font-black text-xs uppercase tracking-widest hover:underline px-4 py-2">
          Complete Profile
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main Application Area */}
        <div className="lg:col-span-8">
          <Card className="bg-white rounded-[2.5rem] border border-outline-variant/5 shadow-xl shadow-zinc-200/50 overflow-hidden">
            <div className="p-10 pb-6">
              <div className="flex justify-between items-start mb-10">
                <div>
                   <h2 className="font-headline text-3xl font-black text-on-surface tracking-tight mb-1">Complete Your Application</h2>
                   <p className="text-sm font-bold text-outline uppercase tracking-widest">Step {currentSlide} of 3: Document Uploads</p>
                </div>
                {/* Segmented Progress Bar */}
                <div className="flex gap-1.5 pt-4">
                   <div className="w-8 h-1.5 rounded-full bg-primary" />
                   <div className="w-8 h-1.5 rounded-full bg-primary" />
                   <div className="w-8 h-1.5 rounded-full bg-zinc-100" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[400px]">
                {/* Left Column Uploads */}
                <div className="space-y-6 flex flex-col">
                   {/* National ID Box */}
                   <div 
                     onClick={() => !isUploading && startMockUpload('National ID')}
                     className="flex-1 rounded-3xl bg-[#F8F9FB] border border-dashed border-[#DEE3ED] p-6 flex flex-col items-center justify-center text-center group cursor-pointer hover:border-primary/40 transition-all relative overflow-hidden"
                   >
                     {uploadProgress['National ID'] > 0 && (
                        <div className="absolute bottom-0 left-0 h-1.5 bg-primary/20 w-full">
                           <motion.div 
                             className="h-full bg-primary" 
                             initial={{ width: 0 }}
                             animate={{ width: `${uploadProgress['National ID']}%` }}
                           />
                        </div>
                     )}
                     <div className="w-12 h-12 rounded-full bg-[#FFB000]/10 flex items-center justify-center text-[#FFB000] mb-4">
                        <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>cloud_upload</span>
                     </div>
                     <h4 className="font-headline font-black text-on-surface text-sm">National ID / NIN</h4>
                     <p className="text-[10px] text-outline font-bold uppercase tracking-wider mt-1">PDF or JPEG (Max 5MB)</p>
                   </div>

                   {/* Academic Transcript Box */}
                   <div 
                     onClick={() => !isUploading && startMockUpload('Academic Transcript')}
                     className="flex-1 rounded-3xl bg-[#F8F9FB] border border-dashed border-[#DEE3ED] p-6 flex flex-col items-center justify-center text-center group cursor-pointer hover:border-primary/40 transition-all relative overflow-hidden"
                   >
                      {uploadProgress['Academic Transcript'] > 0 && (
                        <div className="absolute bottom-0 left-0 h-1.5 bg-primary/20 w-full">
                           <motion.div 
                             className="h-full bg-primary" 
                             initial={{ width: 0 }}
                             animate={{ width: `${uploadProgress['Academic Transcript']}%` }}
                           />
                        </div>
                     )}
                     <div className="w-12 h-12 rounded-full bg-[#FFB000]/10 flex items-center justify-center text-[#FFB000] mb-4">
                        <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
                     </div>
                     <h4 className="font-headline font-black text-on-surface text-sm">Academic Transcript</h4>
                     <p className="text-[10px] text-outline font-bold uppercase tracking-wider mt-1">Official University PDF only</p>
                   </div>
                </div>

                {/* Right Column Dropzone */}
                <div 
                  onClick={() => !isUploading && startMockUpload('General')}
                  className="rounded-3xl bg-[#F8F9FB] border-2 border-dashed border-[#DEE3ED] p-10 flex flex-col items-center justify-center text-center group cursor-pointer hover:border-primary/40 transition-all relative overflow-hidden"
                >
                  {uploadProgress['General'] > 0 && (
                        <div className="absolute bottom-0 left-0 h-2 bg-primary/10 w-full">
                           <motion.div 
                             className="h-full bg-primary" 
                             initial={{ width: 0 }}
                             animate={{ width: `${uploadProgress['General']}%` }}
                           />
                        </div>
                     )}
                  <div className="w-16 h-16 rounded-2xl bg-[#71552C]/10 flex items-center justify-center text-[#71552C] mb-6">
                     <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>upload_file</span>
                  </div>
                  <h3 className="font-headline font-black text-xl mb-2">Drag & Drop Files Here</h3>
                  <p className="text-outline font-medium text-sm mb-8">Or click to browse from your computer</p>
                  <button className="px-8 py-3 bg-white border border-outline-variant text-on-surface font-headline font-black text-xs rounded-xl shadow-sm group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                    Select Files
                  </button>
                </div>
              </div>
            </div>

            <div className="p-10 pt-6 flex items-center justify-between border-t border-zinc-50">
              <button 
                onClick={() => setCurrentSlide(1)}
                className="flex items-center gap-2 text-outline hover:text-on-surface font-bold text-xs transition-colors"
              >
                <span className="material-symbols-outlined text-lg">arrow_back</span>
                Back
              </button>
              <button className="px-10 py-5 bg-primary text-white font-headline font-black rounded-2xl shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all">
                Review Application
              </button>
            </div>
          </Card>
        </div>

        {/* Sidebar Space */}
        <div className="lg:col-span-4 space-y-6">
          {/* Status Tracker */}
          <Card className="p-8 bg-white rounded-[2.5rem] border border-outline-variant/10 shadow-sm">
            <h4 className="font-headline font-black text-lg mb-6">Application Status</h4>
            <div className="flex items-center justify-between mb-8">
               <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full border-4 border-zinc-50 border-t-primary flex items-center justify-center">
                     <span className="font-headline font-black text-sm text-primary">85%</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-outline uppercase tracking-wider">85% COMPLETE</p>
                    <p className="text-xs font-black text-[#51B38D] uppercase tracking-wider">PROGRESSING</p>
                  </div>
               </div>
            </div>

            <div className="space-y-5">
               <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#51B38D] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="text-sm font-bold text-on-surface tracking-tight">Basic Information</span>
               </div>
               <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#51B38D] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="text-sm font-bold text-on-surface tracking-tight">Academic History</span>
               </div>
               <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>radio_button_checked</span>
                  <span className="text-sm font-black text-primary tracking-tight">Document Uploads</span>
               </div>
               <div className="flex items-center gap-3 opacity-30">
                  <span className="material-symbols-outlined text-outline text-lg">radio_button_unchecked</span>
                  <span className="text-sm font-bold text-outline tracking-tight">Final Review</span>
               </div>
            </div>
          </Card>

          {/* Scholar Tip Card */}
          <div className="rounded-[2.5rem] bg-gradient-to-br from-[#003EB4] to-[#002875] p-8 text-white relative overflow-hidden shadow-xl">
             <div className="relative z-10 space-y-4">
                <h4 className="font-headline font-black text-xl">Scholar Tip</h4>
                <p className="text-white/80 text-sm leading-relaxed font-medium">Students with verified IDs and high-quality transcripts are 3.5x more likely to be matched with premium sponsors within 48 hours.</p>
             </div>
             <div className="absolute top-4 right-4 opacity-10">
                <span className="material-symbols-outlined text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
             </div>
             <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#0052FF]/20 rounded-full blur-2xl" />
          </div>
        </div>

        {/* Available Sponsor Matches (Locked) */}
        <div className="col-span-12 mt-12 bg-zinc-50/50 rounded-[3rem] p-10 relative border border-white">
          <div className="flex justify-between items-center mb-10">
             <div className="flex items-center gap-4">
                <h3 className="font-headline font-black text-2xl text-on-surface/80">Available Sponsor Matches</h3>
                <span className="px-3 py-1 bg-[#FFD700]/20 text-[#71552C] font-black text-[10px] uppercase tracking-widest rounded-lg">PREMIUM</span>
             </div>
             <button className="text-outline font-bold text-xs hover:text-on-surface transition-colors italic">View All matches --&gt;</button>
          </div>

          <div className="relative">
            {/* Blurred Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-40 blur-md pointer-events-none select-none">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-white rounded-[2rem] p-8 shadow-sm space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-zinc-100" />
                    <div className="space-y-2">
                       <div className="h-4 w-32 bg-zinc-200 rounded-full" />
                       <div className="h-3 w-20 bg-zinc-100 rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-3">
                     <div className="h-3 w-full bg-zinc-100 rounded-full" />
                     <div className="h-3 w-3/4 bg-zinc-100 rounded-full" />
                  </div>
                  <div className="h-12 w-full bg-zinc-50 rounded-xl" />
                </div>
              ))}
            </div>

            {/* Lock Overlay Content */}
            <div className="absolute inset-0 z-20 flex items-center justify-center">
               <div className="bg-white/90 backdrop-blur-xl border border-outline-variant/10 rounded-[3rem] p-10 shadow-2xl flex flex-col items-center text-center max-w-sm space-y-6 animate-fade-in-up">
                  <div className="w-20 h-20 rounded-full bg-primary/5 flex items-center justify-center text-primary relative">
                     <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 0" }}>lock</span>
                     <div className="absolute inset-0 rounded-full border-4 border-dotted border-primary/20 animate-spin-slow" />
                  </div>
                  <div>
                    <h3 className="font-headline font-black text-2xl text-on-surface mb-2 tracking-tight">Feature Locked</h3>
                    <p className="text-sm text-outline font-medium px-4">Complete your document upload to unlock personalized sponsor matches and start receiving funding offers.</p>
                  </div>
                  <button className="w-full py-4 bg-primary text-white font-headline font-black rounded-2xl shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all">
                    Unlock Now
                  </button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
