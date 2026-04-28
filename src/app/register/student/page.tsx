'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense, useState, useMemo } from 'react';
import { OutlinedInput } from '@/components/ui/OutlinedInput';
import { SearchableSelect } from '@/components/ui/SearchableSelect';
import { DocumentUpload } from '@/components/ui/DocumentUpload';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { NIGERIAN_STATES, LGAS_BY_STATE, NATIONALITIES } from '@/lib/constants/geography';

const MARITAL_STATUS_OPTIONS = ["Single", "Married", "Divorced", "Widowed"];
const GENDER_OPTIONS = ["Male", "Female", "Other", "Prefer not to say"];
const LEVEL_OPTIONS = ["100 Level", "200 Level", "300 Level", "400 Level", "500 Level", "600 Level", "Finalist", "Spill Over"];
const ACADEMIC_LEVELS = ["WASCE/GCE", "OND/HND", "Bachelor's Degree", "Master's Degree", "PhD"];


function StudentRegisterContent() {
  const searchParams = useSearchParams();
  const errorParam = searchParams.get('error');

  // Form State
  const [formData, setFormData] = useState({
    // 01: Identity
    full_name: '',
    email: '',
    password: '',
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

    // 05: Education History (Dynamic Array)
    education_history: [
      { school: '', period: '', certificate: '' }
    ],

    // 06: Verification
    jamb_reg_number: '',
    matric_number: '',
    waec_pin: '',
    waec_serial: '',

    // 07: Results & Emergency
    last_level_completed: '',
    last_gpa: '',
    emergency_contact_name: '',
    emergency_contact_phone: '',

    // 08: Document Vault
    nin_file: null as File | null,
    voters_card_file: null as File | null,
    student_id_file: null as File | null,
    results_files: [
      { label: '100L Semester 1', file: null as File | null }
    ],

    // Extra: Bio & Skills
    brief_bio: '',
    skills: ''
  });


  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => {
      const newData = { ...prev, [name]: value };
      // Reset LGA if State changes
      if (name === 'state_origin') {
        newData.lga_origin = '';
      }
      return newData;
    });
  };
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


  const lgaOptions = useMemo(() => {
    if (!formData.state_origin) return [];
    return LGAS_BY_STATE[formData.state_origin] || [];
  }, [formData.state_origin]);

  // Strictly Frontend Submit Placeholder
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API Delay
    console.log('Strictly Frontend - Captured Data:', formData);
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <main className="min-h-screen bg-zinc-900 flex items-center justify-center p-6">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="w-20 h-20 bg-emerald-950/30 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
          </div>
          <h2 className="text-3xl font-headline font-black text-zinc-100 tracking-tight">Account Initialized!</h2>
          <p className="text-zinc-400 font-body leading-relaxed">
            Your high-granularity scholar profile has been established on the frontend. In a production environment, you would now verify your email.
          </p>
          <div className="pt-8">
            <Link href="/login">
              <Button size="lg" className="w-full">Proceed to Login</Button>
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="pt-32 pb-20 px-6 min-h-screen bg-zinc-900 relative z-[2]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

        {/* Left Side: Benefit List (Sticky) */}
        <div className="lg:col-span-5 space-y-12 text-on-surface lg:sticky lg:top-32">
          <div className="space-y-4">
            <span className="text-[#0052CC] font-bold tracking-[0.2em] text-[10px] uppercase font-label">Institutional Excellence</span>
            <h1 className="text-5xl font-headline font-black text-primary-fixed-dim leading-[0.95] tracking-tighter">
              Empowering the <br /><span className="text-zinc-400">Nigerian Scholar.</span>
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-md font-body">
              Join a prestigious network dedicated to bridging the gap between talent and opportunity.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              { title: "Global Scholarships", desc: "Access curated financial aid and merit-based grants.", icon: "school", color: "text-blue-400 bg-blue-50" },
              { title: "Direct Mentorship", desc: "Connect with academic leaders and industry professionals.", icon: "workspace_premium", color: "text-amber-600 bg-amber-50" },
              { title: "Verified Identity", desc: "Securely manage your academic and institutional records.", icon: "verified_user", color: "text-emerald-600 bg-emerald-50" }
            ].map((benefit, i) => (
              <div key={i} className="group flex gap-6 items-start p-6 rounded-[24px] transition-all duration-300 hover:bg-zinc-800 border border-transparent hover:border-zinc-800">
                <div className={cn("flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110", benefit.color)}>
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>{benefit.icon}</span>
                </div>
                <div>
                  <h3 className="font-headline font-black text-lg text-zinc-100 leading-tight mb-1">{benefit.title}</h3>
                  <p className="text-sm text-zinc-400 font-body leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Registration Form */}
        <div className="lg:col-span-7 bg-zinc-900 rounded-[40px] p-8 lg:p-14 shadow-2xl shadow-blue-900/5 border border-zinc-800">
          <div className="mb-12">
            <h2 className="text-3xl font-headline font-black text-zinc-100 tracking-tighter leading-none mb-3">Student Registration</h2>
            <p className="text-zinc-400 text-sm font-body">Complete all sections to establish your high-granularity academic profile.</p>
          </div>

          {(errorParam) && (
            <div className="mb-8 p-5 bg-red-950/30 text-red-400 rounded-2xl text-[11px] font-black uppercase tracking-widest border border-red-100 flex items-center gap-4">
              <span className="material-symbols-outlined text-xl">error</span>
              {errorParam}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-12">
            <input type="hidden" name="role" value="student" />

            {/* Section 1: Expanded Identity */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center text-[10px] font-black">01</span>
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#0052CC] font-label">General Information</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <OutlinedInput label="Full Legal Name" name="full_name" value={formData.full_name} onChange={handleInputChange} required placeholder="As it appears on ID" icon="person" />
                <OutlinedInput label="Email Address" name="email" type="email" value={formData.email} onChange={handleInputChange} required placeholder="university@email.edu" icon="alternate_email" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <OutlinedInput label="Phone Number" name="phone" value={formData.phone} onChange={handleInputChange} required placeholder="+234..." icon="call" />
                <SearchableSelect label="Gender" options={GENDER_OPTIONS} value={formData.gender} onChange={(v) => handleSelectChange('gender', v)} icon="person_4" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <OutlinedInput label="Date of Birth" name="date_of_birth" type="date" value={formData.date_of_birth} onChange={handleInputChange} required icon="calendar_today" />
                <SearchableSelect label="Marital Status" options={MARITAL_STATUS_OPTIONS} value={formData.marital_status} onChange={(v) => handleSelectChange('marital_status', v)} icon="favorite" />
                <SearchableSelect label="Nationality" options={NATIONALITIES} value={formData.nationality} onChange={(v) => handleSelectChange('nationality', v)} icon="public" />
              </div>

              <OutlinedInput label="Create Password" name="password" type="password" value={formData.password} onChange={handleInputChange} required minLength={8} placeholder="Min. 8 characters" icon="lock" />
            </div>

            {/* Section 2: Residential Data */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center text-[10px] font-black">02</span>
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#0052CC] font-label">Residential Address</h3>
              </div>
              
              <OutlinedInput label="Street Address" name="residential_street" value={formData.residential_street} onChange={handleInputChange} required placeholder="123, Scholars Crescent" icon="home" />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <OutlinedInput label="City" name="residential_city" value={formData.residential_city} onChange={handleInputChange} required placeholder="City" icon="location_city" />
                <SearchableSelect label="State" options={NIGERIAN_STATES} value={formData.residential_state} onChange={(v) => handleSelectChange('residential_state', v)} icon="map" />
                <OutlinedInput label="Zip/Postal Code" name="residential_zip" value={formData.residential_zip} onChange={handleInputChange} placeholder="Zip Code" icon="local_post_office" />
              </div>
            </div>


            {/* Section 3: Origin Information */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center text-[10px] font-black">03</span>
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#0052CC] font-label">Origins Information</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SearchableSelect label="State of Origin" options={NIGERIAN_STATES} value={formData.state_origin} onChange={(v) => handleSelectChange('state_origin', v)} icon="map" />
                <SearchableSelect label="LGA of Origin" options={lgaOptions} value={formData.lga_origin} onChange={(v) => handleSelectChange('lga_origin', v)} disabled={!formData.state_origin} placeholder={formData.state_origin ? "Select LGA" : "Choose State First"} icon="location_on" />
              </div>
            </div>

            {/* Section 4: Institutional Profile */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center text-[10px] font-black">04</span>
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#0052CC] font-label">Institutional Profile</h3>
              </div>

              <OutlinedInput label="University Name" name="university" value={formData.university} onChange={handleInputChange} required icon="account_balance" placeholder="Search Institution..." />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <OutlinedInput label="Field of Study" name="field_of_study" value={formData.field_of_study} onChange={handleInputChange} required icon="category" placeholder="e.g. Engineering" />
                <OutlinedInput label="Program of Study" name="program_of_study" value={formData.program_of_study} onChange={handleInputChange} required icon="menu_book" placeholder="e.g. Civil Engineering" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SearchableSelect label="Current Level" options={ACADEMIC_LEVELS} value={formData.level} onChange={(v) => handleSelectChange('level', v)} icon="layers" />
                <SearchableSelect label="Year of Study" options={LEVEL_OPTIONS} value={formData.year} onChange={(v) => handleSelectChange('year', v)} icon="event_note" />
              </div>
            </div>


            {/* Section 5: Education History */}
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center text-[10px] font-black">05</span>
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#0052CC] font-label">Education History</h3>
                </div>
                <Button type="button" variant="outline" size="sm" onClick={addEducation} iconLeft="add">Add Institution</Button>
              </div>

              <div className="space-y-6">
                {formData.education_history.map((edu, index) => (
                  <div key={index} className="p-6 rounded-3xl bg-zinc-800/50 border border-zinc-800 grid grid-cols-1 md:grid-cols-3 gap-6 relative group">
                    <OutlinedInput label="Institution Name" value={edu.school} onChange={(e) => updateEducation(index, 'school', e.target.value)} placeholder="University/College" icon="school" />
                    <OutlinedInput label="Duration" value={edu.period} onChange={(e) => updateEducation(index, 'period', e.target.value)} placeholder="2018 - 2022" icon="schedule" />
                    <OutlinedInput label="Certificate" value={edu.certificate} onChange={(e) => updateEducation(index, 'certificate', e.target.value)} placeholder="B.Sc / Diploma" icon="history_edu" />
                  </div>
                ))}
              </div>
            </div>

            {/* Section 6: Verification Identifiers */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center text-[10px] font-black">06</span>
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#0052CC] font-label">Academic Identifiers</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <OutlinedInput label="JAMB Reg Number" name="jamb_reg_number" value={formData.jamb_reg_number} onChange={handleInputChange} icon="input" placeholder="e.g. 12345678AB" />
                <OutlinedInput label="Matriculation Number" name="matric_number" value={formData.matric_number} onChange={handleInputChange} icon="tag" placeholder="e.g. U2019/5570..." />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <OutlinedInput label="WAEC Scratch PIN" name="waec_pin" value={formData.waec_pin} onChange={handleInputChange} icon="pin" placeholder="12 digits" />
                <OutlinedInput label="WAEC Serial Number" name="waec_serial" value={formData.waec_serial} onChange={handleInputChange} icon="receipt_long" placeholder="e.g. WRC123456..." />
              </div>
            </div>

            {/* Section 7: Results & Emergency Contacts */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center text-[10px] font-black">07</span>
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#0052CC] font-label">Performance & Emergency</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SearchableSelect label="Last Level Completed" options={LEVEL_OPTIONS} value={formData.last_level_completed} onChange={(v) => handleSelectChange('last_level_completed', v)} icon="history" />
                <OutlinedInput label="Recent GPA" name="last_gpa" value={formData.last_gpa} onChange={handleInputChange} placeholder="e.g. 4.50" icon="grade" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <OutlinedInput label="Emergency Contact Name" name="emergency_contact_name" value={formData.emergency_contact_name} onChange={handleInputChange} placeholder="Full Name" icon="contact_emergency" />
                <OutlinedInput label="Emergency Contact Phone" name="emergency_contact_phone" value={formData.emergency_contact_phone} onChange={handleInputChange} placeholder="+234..." icon="phone_in_talk" />
              </div>
            </div>

            {/* Section 08: Document Vault */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center text-[10px] font-black">08</span>
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#0052CC] font-label">Document Vault</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <DocumentUpload label="National Identity (NIN)" icon="badge" onUpload={(f) => setFormData(p => ({ ...p, nin_file: f }))} />
                <DocumentUpload label="Voter's Card" icon="how_to_reg" onUpload={(f) => setFormData(p => ({ ...p, voters_card_file: f }))} />
                <DocumentUpload label="Student ID Card" icon="badge" onUpload={(f) => setFormData(p => ({ ...p, student_id_file: f }))} />
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Academic Results</h4>
                  <Button type="button" variant="outline" size="sm" onClick={addResult} iconLeft="add">Add Result</Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {formData.results_files.map((result, idx) => (
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

            {/* Bio & Skills Footer */}
            <div className="space-y-8 pt-8 border-t border-zinc-800">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-950/30 text-blue-400 flex items-center justify-center text-[10px] font-black">★</span>
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#0052CC] font-label">Personal Summary</h3>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Brief Scholar Bio</label>
                  <textarea 
                    name="brief_bio" 
                    value={formData.brief_bio} 
                    onChange={handleInputChange} 
                    placeholder="Tell us about your academic journey and aspirations..." 
                    className="w-full min-h-[120px] p-6 rounded-[24px] bg-zinc-800 border-2 border-transparent focus:border-[#0052CC] focus:bg-zinc-900 transition-all outline-none font-body text-sm resize-none"
                  />
                </div>
                <OutlinedInput label="Core Skills (Comma separated)" name="skills" value={formData.skills} onChange={handleInputChange} placeholder="e.g. Research, Python, Statistics" icon="terminal" />
              </div>
            </div>


            {/* Action Area */}
            <div className="pt-10 border-t border-zinc-800">
              <div className="flex items-start gap-4 mb-10 group cursor-pointer">
                <div className="relative flex items-center">
                  <input required className="peer appearance-none w-6 h-6 border-2 border-zinc-700 rounded-lg checked:border-[#0052CC] checked:bg-[#0052CC] transition-all cursor-pointer" type="checkbox" />
                  <span className="material-symbols-outlined absolute inset-0 text-white text-lg scale-0 peer-checked:scale-100 transition-transform pointer-events-none flex items-center justify-center font-bold">check</span>
                </div>
                <p className="text-[11px] text-zinc-400 font-bold uppercase tracking-widest leading-relaxed">
                  I certify that all records provided match my official institutional data and I agree to the <Link className="text-[#0052CC] hover:underline" href="#">Global Terms</Link>.
                </p>
              </div>
              
              <Button type="submit" size="xl" className="w-full py-7" iconRight="arrow_forward" isLoading={isLoading}>
                Establish Scholar Account
              </Button>

              <div className="mt-10 p-6 rounded-3xl bg-zinc-800 border border-zinc-800 flex flex-col items-center gap-3">
                 <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest leading-none">Already have a profile?</p>
                 <Link className="text-[#0052CC] font-black font-headline text-lg hover:underline transition-all" href="/login">
                   Log in to Dashboard
                 </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default function StudentRegistrationPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-zinc-900 flex items-center justify-center"><div className="w-12 h-12 border-4 border-zinc-800 border-t-[#0052CC] rounded-full animate-spin" /></div>}>
      <StudentRegisterContent />
    </Suspense>
  );
}
