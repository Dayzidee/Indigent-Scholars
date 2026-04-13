'use client'

import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { OutlinedInput } from '@/components/ui/OutlinedInput'
import { SearchableSelect } from '@/components/ui/SearchableSelect'
import { DocumentUpload } from '@/components/ui/DocumentUpload'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { NIGERIAN_STATES, LGAS_BY_STATE, NATIONALITIES } from '@/lib/constants/geography'
import { CategorizedProfile } from '@/components/dashboard/student/CategorizedProfile'

const STEPS = [
  { id: 1, title: 'Identity', icon: 'person' },
  { id: 2, title: 'Residential', icon: 'home' },
  { id: 3, title: 'Origins', icon: 'public' },
  { id: 4, title: 'Academic', icon: 'school' },
  { id: 5, title: 'History', icon: 'history_edu' },
  { id: 6, title: 'Verification', icon: 'verified' },
  { id: 7, title: 'Vault', icon: 'cloud_upload' }
]

const MARITAL_STATUS_OPTIONS = ["Single", "Married", "Divorced", "Widowed"];
const GENDER_OPTIONS = ["Male", "Female", "Other", "Prefer not to say"];
const LEVEL_OPTIONS = ["100 Level", "200 Level", "300 Level", "400 Level", "500 Level", "600 Level", "Finalist", "Spill Over"];
const ACADEMIC_LEVELS = ["WASCE/GCE", "OND/HND", "Bachelor's Degree", "Master's Degree", "PhD"];

export default function RegistrationPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isComplete, setIsComplete] = useState(false)
  const [formData, setFormData] = useState({
    // ... same as before
    full_name: '',
    email: 'inuoluwadunsimis@gmail.com', // Pre-filled placeholder
    phone: '',
    gender: '',
    date_of_birth: '',
    marital_status: '',
    nationality: 'Nigerian',

    // 02: Residential
    residential_street: '',
    residential_city: '',
    residential_state: '',
    residential_zip: '',

    // 03: Origin
    state_origin: '',
    lga_origin: '',

    // 04: Institutional
    university: '',
    field_of_study: '',
    program_of_study: '',
    level: '',
    year: '',

    // 05: Education History
    education_history: [
      { school: '', period: '', certificate: '' }
    ],

    // 06: Verification & Secondary
    jamb_reg_number: '',
    matric_number: '',
    waec_pin: '',
    waec_serial: '',
    last_level_completed: '',
    last_gpa: '',
    emergency_contact_name: '',
    emergency_contact_phone: '',

    // 07: Document Vault
    nin_file: null as File | null,
    voters_card_file: null as File | null,
    student_id_file: null as File | null,
    results_files: [
      { label: '100L Semester 1', file: null as File | null }
    ]
  })

  const handleNext = () => {
    if (currentStep < STEPS.length) setCurrentStep(currentStep + 1)
  }

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => {
      const newData = { ...prev, [field]: value };
      if (field === 'state_origin') newData.lga_origin = '';
      return newData;
    });
  }

  const addEducation = () => {
    setFormData(prev => ({
      ...prev,
      education_history: [...prev.education_history, { school: '', period: '', certificate: '' }]
    }));
  };

  const updateEducation = (index: number, field: string, value: string) => {
    setFormData(prev => {
      const newHistory = [...prev.education_history];
      newHistory[index] = { ...newHistory[index], [field]: value };
      return { ...prev, education_history: newHistory };
    });
  };

  const addResult = () => {
    setFormData(prev => ({
      ...prev,
      results_files: [...prev.results_files, { label: `Result Slot ${prev.results_files.length + 1}`, file: null }]
    }));
  };

  const updateResult = (index: number, file: File) => {
    setFormData(prev => {
      const newResults = [...prev.results_files];
      newResults[index] = { ...newResults[index], file };
      return { ...prev, results_files: newResults };
    });
  };

  return (
    <div className="min-h-screen bg-transparent pb-20">
      <div className="max-w-5xl mx-auto px-6 pt-12">
        
        {/* Header Section */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
           <div>
             <div className="flex items-center gap-4 mb-3">
                <span className={cn(
                  "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
                   isComplete ? "bg-emerald-950/30 text-emerald-600" : "bg-[#0052CC]/10 text-[#0052CC]"
                )}>
                  {isComplete ? "Verified Profile" : "Verification Flow"}
                </span>
                <h1 className="text-4xl font-headline font-black text-zinc-100 tracking-tight">
                  {isComplete ? "Scholar Credentials" : "Institutional Registry"}
                </h1>
             </div>
             <p className="text-zinc-500 text-sm font-medium max-w-xl leading-relaxed">
               {isComplete 
                 ? "Review your synchronized academic profile. These credentials will be used for all scholarship match-making." 
                 : "Complete the 7 pillars of your scholar profile to unlock full funding opportunities and academic verification."}
             </p>
           </div>
           
           {isComplete && (
             <Button variant="outline" size="lg" iconLeft="edit_note" onClick={() => setIsComplete(false)}>
               Edit Credentials
             </Button>
           )}
        </div>

        {/* Conditional View: Profile or Wizard */}
        <AnimatePresence mode="wait">
          {isComplete ? (
            <motion.div
              key="profile"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
            >
               <CategorizedProfile />
               <div className="mt-12 p-8 rounded-[40px] bg-[#0052CC] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-blue-900/10 overflow-hidden relative">
                  <div className="relative z-10">
                    <h3 className="text-xl font-headline font-black tracking-tight mb-1">Your profile is synchronized</h3>
                    <p className="text-white/70 text-sm">Last verified sync: 2 hours ago via UNILAG Registry API</p>
                  </div>
                  <Button variant="outline" className="text-white border-zinc-800/20 hover:bg-zinc-900 hover:text-zinc-100" onClick={() => window.location.href = '/dashboard'}>Return to Dashboard</Button>
                  <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
               </div>
            </motion.div>
          ) : (
            <motion.div
              key="wizard"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="flex items-center justify-between relative px-2 mb-20 overflow-x-auto pb-8 md:pb-0 scrollbar-hide">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-zinc-700 -z-10 rounded-full" />
                <motion.div 
                   className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-[#0052CC] -z-10 rounded-full"
                   animate={{ width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%` }}
                   transition={{ type: 'spring', stiffness: 50, damping: 20 }}
                />
                
                {STEPS.map((step) => (
                  <div key={step.id} className="relative group shrink-0 mx-2">
                    <motion.div 
                      initial={false}
                      animate={{ 
                        scale: currentStep === step.id ? 1.1 : 1,
                        backgroundColor: currentStep >= step.id ? '#0052CC' : '#fff',
                        borderColor: currentStep >= step.id ? '#0052CC' : '#e4e4e7'
                      }}
                      className={cn(
                        "w-10 h-10 rounded-xl border-2 flex items-center justify-center shadow-sm relative z-10 transition-all duration-500",
                        currentStep >= step.id ? "text-white shadow-blue-200 shadow-lg" : "text-zinc-400"
                      )}
                    >
                      <span className="material-symbols-outlined text-[18px]">{step.icon}</span>
                    </motion.div>
                    <div className="absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap hidden lg:block">
                      <span className={cn(
                        "text-[9px] font-black uppercase tracking-[0.2em] transition-colors duration-500",
                        currentStep === step.id ? "text-[#0052CC]" : "text-zinc-400"
                      )}>
                        {step.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <Card className="p-8 md:p-14 rounded-[48px] border-none shadow-2xl shadow-blue-900/5 bg-zinc-900 relative border border-zinc-800/40">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#0052CC]/[0.02] rounded-bl-[100px] -z-0 pointer-events-none border-l border-b border-[#0052CC]/5" />

                <div className="relative z-50">
                  <StepContent 
                    step={currentStep} 
                    formData={formData} 
                    handleInputChange={handleInputChange}
                    addEducation={addEducation}
                    updateEducation={updateEducation}
                    addResult={addResult}
                    updateResult={updateResult}
                  />
                </div>

                <div className="mt-16 pt-10 border-t border-zinc-800 flex justify-between items-center relative z-10">
                  <button 
                    onClick={handlePrev}
                    disabled={currentStep === 1}
                    className="flex items-center gap-3 text-zinc-400 font-black uppercase tracking-[0.15em] text-[10px] disabled:opacity-0 transition-all hover:text-[#0052CC] group"
                  >
                    <span className="material-symbols-outlined text-lg transition-transform group-hover:-translate-x-1">arrow_back</span>
                    Previous Pillar
                  </button>
                  
                  <Button 
                    onClick={currentStep === 7 ? () => setIsComplete(true) : handleNext}
                    variant="primary" 
                    size="xl"
                    iconRight={currentStep === 7 ? "verified" : "arrow_forward"}
                  >
                    {currentStep === 7 ? "Complete Registry" : "Continue to Next"}
                  </Button>
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

function StepContent({ 
  step, 
  formData, 
  handleInputChange,
  addEducation,
  updateEducation,
  addResult,
  updateResult
}: any) {
  const lgaOptions = useMemo(() => {
    if (!formData.state_origin) return [];
    return LGAS_BY_STATE[formData.state_origin] || [];
  }, [formData.state_origin]);

  switch (step) {
    case 1:
      return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-700">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <h3 className="text-3xl font-headline font-black text-zinc-100 tracking-tighter">General Information</h3>
              <p className="text-zinc-400 text-sm font-medium">Capture your primary identity and contact credentials.</p>
            </div>
            <span className="text-6xl font-black text-zinc-100/50 -mt-4">01</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <OutlinedInput label="Full Legal Name" icon="person" value={formData.full_name} onChange={(e) => handleInputChange('full_name', e.target.value)} />
            <OutlinedInput label="Email Address" icon="alternate_email" value={formData.email} disabled className="bg-zinc-800 opacity-60" />
            <OutlinedInput label="Phone Number" icon="call" value={formData.phone} onChange={(e) => handleInputChange('phone', e.target.value)} />
            <SearchableSelect label="Gender" icon="person_4" options={GENDER_OPTIONS} value={formData.gender} onChange={(v) => handleInputChange('gender', v)} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <OutlinedInput label="Date of Birth" type="date" icon="calendar_today" value={formData.date_of_birth} onChange={(e) => handleInputChange('date_of_birth', e.target.value)} />
            <SearchableSelect label="Marital Status" icon="favorite" options={MARITAL_STATUS_OPTIONS} value={formData.marital_status} onChange={(v) => handleInputChange('marital_status', v)} />
            <SearchableSelect label="Nationality" icon="public" options={NATIONALITIES} value={formData.nationality} onChange={(v) => handleInputChange('nationality', v)} />
          </div>
        </div>
      )
    case 2:
      return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-700">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <h3 className="text-3xl font-headline font-black text-zinc-100 tracking-tighter">Residential Details</h3>
              <p className="text-zinc-400 text-sm font-medium">Verify your current primary physical address.</p>
            </div>
            <span className="text-6xl font-black text-zinc-100/50 -mt-4">02</span>
          </div>
          <OutlinedInput label="Street Address" icon="home" value={formData.residential_street} onChange={(e) => handleInputChange('residential_street', e.target.value)} placeholder="e.g. 15, Heritage Road" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <OutlinedInput label="City" icon="location_city" value={formData.residential_city} onChange={(e) => handleInputChange('residential_city', e.target.value)} />
            <SearchableSelect label="State" icon="map" options={NIGERIAN_STATES} value={formData.residential_state} onChange={(v) => handleInputChange('residential_state', v)} />
            <OutlinedInput label="Postal Code" icon="local_post_office" value={formData.residential_zip} onChange={(e) => handleInputChange('residential_zip', e.target.value)} />
          </div>
        </div>
      )
    case 3:
      return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-700">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <h3 className="text-3xl font-headline font-black text-zinc-100 tracking-tighter">Origins Information</h3>
              <p className="text-zinc-400 text-sm font-medium">Critical for regional scholarship eligibility.</p>
            </div>
            <span className="text-6xl font-black text-zinc-100/50 -mt-4">03</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SearchableSelect label="State of Origin" icon="map" options={NIGERIAN_STATES} value={formData.state_origin} onChange={(v) => handleInputChange('state_origin', v)} />
            <SearchableSelect label="LGA of Origin" icon="location_on" options={lgaOptions} value={formData.lga_origin} onChange={(v) => handleInputChange('lga_origin', v)} disabled={!formData.state_origin} placeholder={formData.state_origin ? "Select LGA" : "Choose State First"} />
          </div>
        </div>
      )
    case 4:
      return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-700">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <h3 className="text-3xl font-headline font-black text-zinc-100 tracking-tighter">Institutional Profile</h3>
              <p className="text-zinc-400 text-sm font-medium">Your current academic affiliation and status.</p>
            </div>
            <span className="text-6xl font-black text-zinc-100/50 -mt-4">04</span>
          </div>
          <OutlinedInput label="University / Poly / College" icon="account_balance" value={formData.university} onChange={(e) => handleInputChange('university', e.target.value)} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <OutlinedInput label="Field of Study" icon="category" value={formData.field_of_study} onChange={(e) => handleInputChange('field_of_study', e.target.value)} />
            <OutlinedInput label="Program Name" icon="menu_book" value={formData.program_of_study} onChange={(e) => handleInputChange('program_of_study', e.target.value)} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SearchableSelect label="Current Academic Level" icon="layers" options={ACADEMIC_LEVELS} value={formData.level} onChange={(v) => handleInputChange('level', v)} />
            <SearchableSelect label="Year in Program" icon="event_note" options={LEVEL_OPTIONS} value={formData.year} onChange={(v) => handleInputChange('year', v)} />
          </div>
        </div>
      )
    case 5:
      return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-700">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <h3 className="text-3xl font-headline font-black text-zinc-100 tracking-tighter">Education History</h3>
              <p className="text-zinc-400 text-sm font-medium">Trace your academic journey prior to your current program.</p>
            </div>
            <div className="flex flex-col items-end gap-2">
               <span className="text-6xl font-black text-zinc-100/50 -mt-4">05</span>
               <Button type="button" variant="outline" size="sm" onClick={addEducation} iconLeft="add">Add School</Button>
            </div>
          </div>
          <div className="space-y-6">
            {formData.education_history.map((edu: any, index: number) => (
              <div key={index} className="p-8 rounded-[32px] bg-zinc-800/50 border border-zinc-800 grid grid-cols-1 md:grid-cols-3 gap-6 relative group border-2 border-dashed hover:border-[#0052CC]/10 transition-colors">
                <OutlinedInput label="Institution" value={edu.school} onChange={(e) => updateEducation(index, 'school', e.target.value)} icon="school" />
                <OutlinedInput label="Period (Years)" value={edu.period} onChange={(e) => updateEducation(index, 'period', e.target.value)} icon="schedule" placeholder="2015-2021" />
                <OutlinedInput label="Qualification" value={edu.certificate} onChange={(e) => updateEducation(index, 'certificate', e.target.value)} icon="history_edu" />
              </div>
            ))}
          </div>
        </div>
      )
    case 6:
      return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-700">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <h3 className="text-3xl font-headline font-black text-zinc-100 tracking-tighter">Verification Identifiers</h3>
              <p className="text-zinc-400 text-sm font-medium">Rigorous academic and performance keys.</p>
            </div>
            <span className="text-6xl font-black text-zinc-100/50 -mt-4">06</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <OutlinedInput label="JAMB Registration No." icon="input" value={formData.jamb_reg_number} onChange={(e) => handleInputChange('jamb_reg_number', e.target.value)} />
            <OutlinedInput label="Matriculation No." icon="tag" value={formData.matric_number} onChange={(e) => handleInputChange('matric_number', e.target.value)} />
            <OutlinedInput label="WAEC Scratch PIN" icon="pin" value={formData.waec_pin} onChange={(e) => handleInputChange('waec_pin', e.target.value)} />
            <OutlinedInput label="WAEC Serial No." icon="receipt_long" value={formData.waec_serial} onChange={(e) => handleInputChange('waec_serial', e.target.value)} />
          </div>
          <div className="pt-6 border-t border-zinc-800 grid grid-cols-1 md:grid-cols-2 gap-8">
            <OutlinedInput label="Recent GPA / Average" icon="grade" value={formData.last_gpa} onChange={(e) => handleInputChange('last_gpa', e.target.value)} />
            <OutlinedInput label="Next of Kin Phone" icon="contact_emergency" value={formData.emergency_contact_phone} onChange={(e) => handleInputChange('emergency_contact_phone', e.target.value)} />
          </div>
        </div>
      )
    case 7:
      return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-700">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <h3 className="text-3xl font-headline font-black text-zinc-100 tracking-tighter">Document Vault</h3>
              <p className="text-zinc-400 text-sm font-medium">Premium encrypted document storage (PDF/JPG/PNG).</p>
            </div>
            <span className="text-6xl font-black text-zinc-100/50 -mt-4">07</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <DocumentUpload label="National Identity (NIN)" icon="badge" onUpload={(f) => handleInputChange('nin_file', f)} />
            <DocumentUpload label="Voter's Card" icon="how_to_reg" onUpload={(f) => handleInputChange('voters_card_file', f)} />
            <DocumentUpload label="Student ID Card" icon="badge" onUpload={(f) => handleInputChange('student_id_file', f)} />
          </div>

          <div className="space-y-6 pt-6 border-t border-zinc-800">
            <div className="flex items-center justify-between">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Academic Results</h4>
              <Button type="button" variant="outline" size="sm" onClick={addResult} iconLeft="add">Add Result</Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {formData.results_files.map((result: any, idx: number) => (
                <DocumentUpload 
                  key={idx}
                  label={result.label} 
                  icon="description" 
                  onUpload={(f) => updateResult(idx, f)} 
                />
              ))}
            </div>
          </div>
        </div>
      )
    default:
      return null
  }
}
