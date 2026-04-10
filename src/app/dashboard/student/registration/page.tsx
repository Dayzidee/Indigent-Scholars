'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { OutlinedInput } from '@/components/ui/OutlinedInput'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const STEPS = [
  { id: 1, title: 'Scholar Identity', icon: 'person' },
  { id: 2, title: 'Institutional Profile', icon: 'school' },
  { id: 3, title: 'Document Vault', icon: 'cloud_upload' }
]

export default function RegistrationPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    nin: '',
    votersCard: '',
    university: '',
    level: '',
    course: '',
    matric: ''
  })

  const handleNext = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1)
  }

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20">
      <div className="max-w-4xl mx-auto px-6 pt-12">
        
        {/* Header & Stepper */}
        <div className="mb-12">
          <h1 className="text-4xl font-headline font-black text-zinc-900 tracking-tight mb-8">
            Complete Your Registration
          </h1>
          
          <div className="flex items-center justify-between relative px-2">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-zinc-200 -z-10 rounded-full" />
            <motion.div 
               className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-[#0052CC] -z-10 rounded-full"
               animate={{ width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%` }}
               transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            />
            
            {STEPS.map((step) => (
              <div key={step.id} className="relative group">
                <motion.div 
                  initial={false}
                  animate={{ 
                    scale: currentStep === step.id ? 1.2 : 1,
                    backgroundColor: currentStep >= step.id ? '#0052CC' : '#fff',
                    borderColor: currentStep >= step.id ? '#0052CC' : '#e4e4e7'
                  }}
                  className={cn(
                    "w-12 h-12 rounded-2xl border-2 flex items-center justify-center shadow-sm relative z-10 transition-colors duration-300",
                    currentStep >= step.id ? "text-white" : "text-zinc-400"
                  )}
                >
                  <span className="material-symbols-outlined text-xl">{step.icon}</span>
                </motion.div>
                <div className="absolute top-14 left-1/2 -translate-x-1/2 whitespace-nowrap hidden md:block">
                  <span className={cn(
                    "text-[10px] font-black uppercase tracking-[0.2em]",
                    currentStep === step.id ? "text-[#0052CC]" : "text-zinc-400"
                  )}>
                    {step.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form Carousel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="p-8 md:p-12 rounded-[40px] border-none shadow-2xl shadow-blue-900/5 bg-white overflow-hidden relative">
              {/* Subtle accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-bl-[100px] -z-0 pointer-events-none" />

              <div className="relative z-10">
                <StepContent 
                  step={currentStep} 
                  formData={formData} 
                  setFormData={setFormData}
                />
              </div>

              <div className="mt-12 pt-10 border-t border-zinc-100 flex justify-between items-center relative z-10">
                <button 
                  onClick={handlePrev}
                  disabled={currentStep === 1}
                  className="flex items-center gap-2 text-zinc-400 font-bold uppercase tracking-widest text-[10px] disabled:opacity-0 transition-all hover:text-zinc-700"
                >
                  <span className="material-symbols-outlined text-lg">arrow_back</span>
                  Back
                </button>
                
                <Button 
                  onClick={currentStep === 3 ? () => window.location.href = '/dashboard/student' : handleNext}
                  variant="primary" 
                  size="lg"
                  iconRight={currentStep === 3 ? "verified" : "arrow_forward"}
                >
                  {currentStep === 3 ? "Complete Registration" : "Continue"}
                </Button>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

function StepContent({ step, formData, setFormData }: { step: number; formData: any; setFormData: any }) {
  switch (step) {
    case 1:
      return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div>
            <h3 className="text-2xl font-headline font-black text-zinc-900 mb-2">Legal Identity</h3>
            <p className="text-zinc-400 text-sm">Please provide your official information as it appears on your government documents.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <OutlinedInput 
              label="First Name" 
              icon="person"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            />
            <OutlinedInput 
              label="Last Name" 
              icon="person"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            />
            <OutlinedInput 
              label="NIN Number" 
              icon="badge"
              value={formData.nin}
              onChange={(e) => setFormData({ ...formData, nin: e.target.value })}
            />
            <OutlinedInput 
              label="Voter's Card No." 
              icon="how_to_reg"
              value={formData.votersCard}
              onChange={(e) => setFormData({ ...formData, votersCard: e.target.value })}
            />
          </div>
        </div>
      )
    case 2:
      return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div>
            <h3 className="text-2xl font-headline font-black text-zinc-900 mb-2">Academic Profile</h3>
            <p className="text-zinc-400 text-sm">Select your current institution and program details.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <OutlinedInput 
              label="University / Institution" 
              icon="school"
              value={formData.university}
              onChange={(e) => setFormData({ ...formData, university: e.target.value })}
            />
            <OutlinedInput 
              label="Course of Study" 
              icon="menu_book"
              value={formData.course}
              onChange={(e) => setFormData({ ...formData, course: e.target.value })}
            />
             <OutlinedInput 
              label="Current Level" 
              icon="layers"
              value={formData.level}
              onChange={(e) => setFormData({ ...formData, level: e.target.value })}
            />
            <OutlinedInput 
              label="Matriculation Number" 
              icon="tag"
              value={formData.matric}
              onChange={(e) => setFormData({ ...formData, matric: e.target.value })}
            />
          </div>
        </div>
      )
    case 3:
      return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div>
            <h3 className="text-2xl font-headline font-black text-zinc-900 mb-2">Document Vault</h3>
            <p className="text-zinc-400 text-sm">Upload high-resolution images or PDFs of your credentials. All documents are encrypted.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <ImageUploadCard label="National ID Card" icon="badge" />
             <ImageUploadCard label="Voter's Card" icon="how_to_reg" />
             <ImageUploadCard label="Latest Transcript" icon="description" />
             <ImageUploadCard label="Admission Letter" icon="verified" />
          </div>
        </div>
      )
    default:
      return null
  }
}

function ImageUploadCard({ label, icon }: { label: string; icon: string }) {
  const [isUploaded, setIsUploaded] = useState(false)

  return (
    <div 
      onClick={() => setIsUploaded(!isUploaded)}
      className={cn(
        "p-6 rounded-3xl border-2 border-dashed transition-all cursor-pointer group flex flex-col items-center text-center",
        isUploaded 
          ? "border-emerald-500 bg-emerald-50/30" 
          : "border-zinc-200 bg-zinc-50/50 hover:border-[#0052CC] hover:bg-blue-50/20"
      )}
    >
      <div className={cn(
        "w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110",
        isUploaded ? "bg-emerald-500 text-white" : "bg-white text-zinc-400 shadow-sm"
      )}>
        <span className="material-symbols-outlined text-2xl">{isUploaded ? 'check' : icon}</span>
      </div>
      <p className={cn("text-xs font-black uppercase tracking-widest", isUploaded ? "text-emerald-700" : "text-zinc-500")}>
        {label}
      </p>
      <p className="text-[10px] text-zinc-400 mt-1">{isUploaded ? 'Ready for verification' : 'Tap to upload'}</p>
    </div>
  )
}
