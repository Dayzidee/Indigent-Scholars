'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export function IncompleteView() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    school: '',
    stateOfOrigin: '',
    department: '',
    yearOfStudy: '',
    matNo: ''
  })
  
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
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(prev => prev + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1)
  }

  const stepTitles = [
    "Step 1 of 3: Details",
    "Step 2 of 3: Uploads",
    "Step 3 of 3: Review"
  ]

  const progressPercentage = Math.round((currentStep / 3) * 100)

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-6 md:py-8 space-y-6 md:space-y-8 pb-24">
      {/* Warning Banner */}
      <div className="bg-[#FFF1F1] border border-[#FFE4E4] rounded-2xl p-4 md:p-5 flex flex-col md:flex-row items-center md:justify-between gap-4 shadow-sm text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#E5484D] shadow-sm shrink-0">
            <span className="material-symbols-outlined text-2xl font-bold">warning</span>
          </div>
          <div>
            <h3 className="font-headline font-extrabold text-[#7E1618] text-sm md:text-base">Your profile is incomplete</h3>
            <p className="text-[10px] md:text-xs text-[#7E1618]/70 font-medium tracking-tight mt-1">Complete your registration reach out to sponsors.</p>
          </div>
        </div>
        <button className="text-[#E5484D] font-black text-[10px] md:text-xs uppercase tracking-widest hover:underline px-4 py-2 whitespace-nowrap">
          Complete Now
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
        {/* Main Application Area */}
        <div className="lg:col-span-8">
          <Card className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] border border-outline-variant/5 shadow-xl shadow-zinc-200/50 overflow-hidden min-h-[500px] md:min-h-[600px] flex flex-col">
            <div className="p-6 md:p-10 pb-6 flex-1">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 md:mb-10">
                <div>
                   <h2 className="font-headline text-2xl md:text-3xl font-black text-on-surface tracking-tight mb-1 leading-tight">Registration</h2>
                   <p className="text-[10px] md:text-sm font-bold text-outline uppercase tracking-widest">{stepTitles[currentStep - 1]}</p>
                </div>
                {/* Segmented Progress Bar */}
                <div className="flex gap-1.5 pt-2 sm:pt-4">
                   {[1, 2, 3].map((s) => (
                     <div 
                        key={s}
                        className={cn(
                          "w-6 md:w-8 h-1.5 rounded-full transition-all duration-500",
                          s <= currentStep ? "bg-primary" : "bg-zinc-100"
                        )} 
                     />
                   ))}
                </div>
              </div>

              <div className="relative overflow-hidden min-h-[350px] md:min-h-[400px]">
                <AnimatePresence mode="wait">
                  {currentStep === 1 && (
                    <motion.div 
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        {[
                          { label: 'Full Name', field: 'name', placeholder: 'e.g. Adebayo Chioma' },
                          { label: 'Age', field: 'age', placeholder: 'e.g. 21' },
                          { label: 'School', field: 'school', placeholder: 'e.g. UNILAG' },
                          { label: 'State of Origin', field: 'stateOfOrigin', placeholder: 'e.g. Lagos' },
                          { label: 'Department', field: 'department', placeholder: 'e.g. Engr' },
                          { label: 'Year of Study', field: 'yearOfStudy', placeholder: 'e.g. 300L' }
                        ].map((item, i) => (
                          <div key={i} className="space-y-2">
                            <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-outline ml-1">{item.label}</label>
                            <input 
                              value={formData[item.field as keyof typeof formData]}
                              onChange={(e) => handleInputChange(item.field, e.target.value)}
                              placeholder={item.placeholder}
                              className="w-full bg-[#F8F9FB] border border-outline-variant/10 rounded-xl p-3 md:p-4 text-xs md:text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                            />
                          </div>
                        ))}
                        <div className="space-y-2 md:col-span-2">
                          <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-outline ml-1">Matriculation Number</label>
                          <input 
                            value={formData.matNo}
                            onChange={(e) => handleInputChange('matNo', e.target.value)}
                            placeholder="e.g. UNILAG/2021/CS/102"
                            className="w-full bg-[#F8F9FB] border border-outline-variant/10 rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 2 && (
                    <motion.div 
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 h-full"
                    >
                      <div className="space-y-4 md:space-y-6 flex flex-col">
                        <div 
                          onClick={() => !isUploading && startMockUpload('National ID')}
                          className="flex-1 min-h-[140px] rounded-2xl md:rounded-3xl bg-[#F8F9FB] border border-dashed border-[#DEE3ED] p-4 md:p-6 flex flex-col items-center justify-center text-center group cursor-pointer hover:border-primary/40 transition-all relative overflow-hidden"
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
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#FFB000]/10 flex items-center justify-center text-[#FFB000] mb-3 md:mb-4 shrink-0">
                             <span className="material-symbols-outlined text-xl md:text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>cloud_upload</span>
                          </div>
                          <h4 className="font-headline font-black text-on-surface text-xs md:text-sm">National ID / NIN</h4>
                          <p className="text-[9px] md:text-[10px] text-outline font-bold uppercase tracking-wider mt-1">PDF or JPEG (Max 5MB)</p>
                        </div>

                        <div 
                          onClick={() => !isUploading && startMockUpload('Academic Transcript')}
                          className="flex-1 min-h-[140px] rounded-2xl md:rounded-3xl bg-[#F8F9FB] border border-dashed border-[#DEE3ED] p-4 md:p-6 flex flex-col items-center justify-center text-center group cursor-pointer hover:border-primary/40 transition-all relative overflow-hidden"
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
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#FFB000]/10 flex items-center justify-center text-[#FFB000] mb-3 md:mb-4 shrink-0">
                             <span className="material-symbols-outlined text-xl md:text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
                          </div>
                          <h4 className="font-headline font-black text-on-surface text-xs md:text-sm">Academic Transcript</h4>
                          <p className="text-[9px] md:text-[10px] text-outline font-bold uppercase tracking-wider mt-1">Official PDF only</p>
                        </div>
                      </div>

                      <div 
                        onClick={() => !isUploading && startMockUpload('General')}
                        className="rounded-2xl md:rounded-3xl bg-[#F8F9FB] border-2 border-dashed border-[#DEE3ED] p-6 md:p-10 flex flex-col items-center justify-center text-center group cursor-pointer hover:border-primary/40 transition-all relative overflow-hidden min-h-[200px]"
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
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-[#71552C]/10 flex items-center justify-center text-[#71552C] mb-4 md:mb-6 shrink-0">
                           <span className="material-symbols-outlined text-3xl md:text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>upload_file</span>
                        </div>
                        <h3 className="font-headline font-black text-lg md:text-xl mb-1 md:mb-2">Drag & Drop</h3>
                        <p className="text-outline font-medium text-[10px] md:text-sm mb-6 md:mb-8 font-headline">Or click to browse storage</p>
                        <button className="w-full sm:w-auto px-6 md:px-8 py-3 bg-white border border-outline-variant text-on-surface font-headline font-black text-[10px] md:text-xs rounded-xl shadow-sm group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all uppercase tracking-widest">
                          Select Files
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 3 && (
                    <motion.div 
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6 md:space-y-8"
                    >
                      <div className="bg-[#F8F9FB] rounded-2xl md:rounded-3xl p-6 md:p-8 border border-outline-variant/10">
                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 md:gap-y-6 gap-x-8 md:gap-x-12">
                            {[
                              { label: 'Full Name', value: formData.name },
                              { label: 'School', value: formData.school },
                              { label: 'Matric Number', value: formData.matNo },
                              { label: 'Department', value: formData.department },
                              { label: 'Year', value: formData.yearOfStudy }
                            ].map((item, i) => (
                              <div key={i} className="space-y-1">
                                <p className="text-[9px] md:text-[10px] font-bold text-outline uppercase tracking-widest">{item.label}</p>
                                <p className="font-headline font-black text-on-surface text-sm md:text-base truncate">{item.value || 'Not provided'}</p>
                              </div>
                            ))}
                         </div>
                         
                         <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-outline-variant/10">
                            <p className="text-[9px] md:text-[10px] font-bold text-outline uppercase tracking-widest mb-4">Uploaded Assets</p>
                            <div className="flex flex-wrap gap-2 md:gap-3">
                                {['National ID / NIN', 'Academic Transcript'].map((doc, i) => (
                                  <div key={i} className="flex items-center gap-2 px-3 md:px-4 py-2 bg-white rounded-full border border-outline-variant/10 shadow-sm">
                                     <span className="material-symbols-outlined text-green-500 text-xs md:text-sm">check_circle</span>
                                     <span className="text-[10px] md:text-xs font-bold text-on-surface">{doc}</span>
                                  </div>
                                ))}
                            </div>
                         </div>
                      </div>

                      <div className="flex items-start gap-3 p-4 rounded-xl md:rounded-2xl bg-primary/5 border border-primary/10">
                        <input type="checkbox" id="terms" className="mt-1 accent-primary shrink-0" />
                        <label htmlFor="terms" className="text-[10px] md:text-xs text-on-surface/70 font-medium leading-relaxed font-headline">
                          I verify that all information provided is accurate. Any false info will lead to immediate disqualification.
                        </label>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="p-6 md:p-10 pt-6 flex flex-col sm:flex-row items-center justify-between border-t border-zinc-50 gap-4">
              <button 
                onClick={prevStep}
                disabled={currentStep === 1}
                className={cn(
                  "flex items-center gap-2 text-outline hover:text-on-surface font-bold text-xs transition-colors py-2 md:py-0",
                  currentStep === 1 && "opacity-0 pointer-events-none"
                )}
              >
                <span className="material-symbols-outlined text-lg">arrow_back</span>
                Back
              </button>
              
              <button 
                onClick={currentStep < 3 ? nextStep : undefined}
                className={cn(
                  "w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 font-headline font-black rounded-xl md:rounded-2xl shadow-xl transition-all uppercase tracking-widest text-xs md:text-sm",
                  currentStep < 3 
                    ? "bg-primary text-white shadow-primary/20 hover:scale-[1.02]" 
                    : "bg-[#0052CC] text-white shadow-[#0052CC]/20 hover:scale-[1.02]"
                )}
              >
                {currentStep < 3 ? 'Next Step' : 'Submit Now'}
              </button>
            </div>
          </Card>
        </div>

        {/* Sidebar Space */}
        <div className="lg:col-span-4 space-y-6">
          {/* Status Tracker */}
          <Card className="p-6 md:p-8 bg-white rounded-[1.5rem] md:rounded-[2.5rem] border border-outline-variant/10 shadow-sm">
            <h4 className="font-headline font-black text-lg mb-6">Tracker</h4>
            <div className="flex items-center justify-between mb-8">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-4 border-zinc-50 border-t-primary flex items-center justify-center shrink-0">
                     <span className="font-headline font-black text-xs md:text-sm text-primary">{progressPercentage}%</span>
                  </div>
                  <div>
                    <p className="text-[9px] md:text-[10px] font-black text-outline uppercase tracking-wider">{progressPercentage}% COMPLETE</p>
                    <p className="text-[9px] md:text-[10px] font-black text-[#51B38D] uppercase tracking-wider">PROGRESSING</p>
                  </div>
               </div>
            </div>

            <div className="space-y-4 md:space-y-5">
               {[
                 { label: 'Basic Info', step: 1 },
                 { label: 'Uploads', step: 2 },
                 { label: 'Final Review', step: 3 }
               ].map((item, i) => {
                 const isCompleted = currentStep > item.step
                 const isActive = currentStep === item.step
                 return (
                   <div key={i} className={cn("flex items-center gap-3 transition-opacity", !isActive && !isCompleted && "opacity-30")}>
                      <span 
                        className={cn("material-symbols-outlined text-base md:text-lg", isCompleted ? "text-[#51B38D]" : isActive ? "text-primary" : "text-outline")}
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        {isCompleted ? 'check_circle' : isActive ? 'radio_button_checked' : 'radio_button_unchecked'}
                      </span>
                      <span className={cn("text-[11px] md:text-sm tracking-tight font-headline", isActive ? "font-black text-primary" : "font-bold text-on-surface")}>
                        {item.label}
                      </span>
                   </div>
                 )
               })}
            </div>
          </Card>

          {/* Scholar Tip Card */}
          <div className="rounded-[1.5rem] md:rounded-[2.5rem] bg-gradient-to-br from-[#003EB4] to-[#002875] p-6 md:p-8 text-white relative overflow-hidden shadow-xl">
             <div className="relative z-10 space-y-3 md:space-y-4">
                <h4 className="font-headline font-black text-lg md:text-xl">Scholar Tip</h4>
                <p className="text-white/80 text-xs md:text-sm leading-relaxed font-medium font-headline">Verified accounts match 3.5x faster with premium sponsors.</p>
             </div>
             <div className="absolute top-4 right-4 opacity-10">
                <span className="material-symbols-outlined text-5xl md:text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
             </div>
             <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#0052FF]/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </div>
  )
}
