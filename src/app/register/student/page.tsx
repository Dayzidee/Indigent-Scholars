'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense, useState, useMemo } from 'react';
import { OutlinedInput } from '@/components/ui/OutlinedInput';
import { SearchableSelect } from '@/components/ui/SearchableSelect';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { NIGERIAN_STATES, LGAS_BY_STATE, NATIONALITIES } from '@/lib/constants/geography';

function StudentRegisterContent() {
  const searchParams = useSearchParams();
  const errorParam = searchParams.get('error');

  // Form State
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    password: '',
    nationality: 'Nigerian',
    state_origin: '',
    lga_origin: '',
    university: '',
    field_of_study: '',
    program_of_study: '',
    level: '',
    year: '',
    jamb_reg_number: '',
    matric_number: '',
    waec_pin: '',
    waec_serial: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      <main className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
          </div>
          <h2 className="text-3xl font-headline font-black text-zinc-900 tracking-tight">Account Initialized!</h2>
          <p className="text-zinc-500 font-body leading-relaxed">
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
    <main className="pt-32 pb-20 px-6 min-h-screen bg-white relative z-[2]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

        {/* Left Side: Benefit List (Sticky) */}
        <div className="lg:col-span-5 space-y-12 text-on-surface lg:sticky lg:top-32">
          <div className="space-y-4">
            <span className="text-[#0052CC] font-bold tracking-[0.2em] text-[10px] uppercase font-label">Institutional Excellence</span>
            <h1 className="text-5xl font-headline font-black text-primary leading-[0.95] tracking-tighter">
              Empowering the <br /><span className="text-zinc-400">Nigerian Scholar.</span>
            </h1>
            <p className="text-zinc-500 text-lg leading-relaxed max-w-md font-body">
              Join a prestigious network dedicated to bridging the gap between talent and opportunity.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              { title: "Global Scholarships", desc: "Access curated financial aid and merit-based grants.", icon: "school", color: "text-blue-600 bg-blue-50" },
              { title: "Direct Mentorship", desc: "Connect with academic leaders and industry professionals.", icon: "workspace_premium", color: "text-amber-600 bg-amber-50" },
              { title: "Verified Identity", desc: "Securely manage your academic and institutional records.", icon: "verified_user", color: "text-emerald-600 bg-emerald-50" }
            ].map((benefit, i) => (
              <div key={i} className="group flex gap-6 items-start p-6 rounded-[24px] transition-all duration-300 hover:bg-zinc-50 border border-transparent hover:border-zinc-100">
                <div className={cn("flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110", benefit.color)}>
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>{benefit.icon}</span>
                </div>
                <div>
                  <h3 className="font-headline font-black text-lg text-zinc-900 leading-tight mb-1">{benefit.title}</h3>
                  <p className="text-sm text-zinc-500 font-body leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Registration Form */}
        <div className="lg:col-span-7 bg-white rounded-[40px] p-8 lg:p-14 shadow-2xl shadow-blue-900/5 border border-zinc-100">
          <div className="mb-12">
            <h2 className="text-3xl font-headline font-black text-zinc-900 tracking-tighter leading-none mb-3">Student Registration</h2>
            <p className="text-zinc-400 text-sm font-body">Complete all sections to establish your high-granularity academic profile.</p>
          </div>

          {(errorParam) && (
            <div className="mb-8 p-5 bg-red-50 text-red-700 rounded-2xl text-[11px] font-black uppercase tracking-widest border border-red-100 flex items-center gap-4">
              <span className="material-symbols-outlined text-xl">error</span>
              {errorParam}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-12">
            <input type="hidden" name="role" value="student" />

            {/* Section 1: General Identity */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center text-[10px] font-black">01</span>
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#0052CC] font-label">General Information</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <OutlinedInput
                  label="Full Legal Name"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleInputChange}
                  required
                  placeholder="As it appears on ID"
                  icon="person"
                />
                <OutlinedInput
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="university@email.edu"
                  icon="alternate_email"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <OutlinedInput
                  label="Create Password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  minLength={8}
                  placeholder="Min. 8 characters"
                  icon="lock"
                />
                <SearchableSelect
                  label="Nationality"
                  options={NATIONALITIES}
                  value={formData.nationality}
                  onChange={(v) => handleSelectChange('nationality', v)}
                  icon="public"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SearchableSelect
                  label="State of Origin"
                  options={NIGERIAN_STATES}
                  value={formData.state_origin}
                  onChange={(v) => handleSelectChange('state_origin', v)}
                  icon="map"
                />
                <SearchableSelect
                  label="LGA of Origin"
                  options={lgaOptions}
                  value={formData.lga_origin}
                  onChange={(v) => handleSelectChange('lga_origin', v)}
                  disabled={!formData.state_origin}
                  placeholder={formData.state_origin ? "Select LGA" : "Choose State First"}
                  icon="location_on"
                />
              </div>
            </div>

            {/* Section 2: Academic Details */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center text-[10px] font-black">02</span>
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#0052CC] font-label">Institutional Profile</h3>
              </div>

              <OutlinedInput
                label="University Name"
                name="university"
                value={formData.university}
                onChange={handleInputChange}
                required
                icon="account_balance"
                placeholder="Search Institution..."
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <OutlinedInput
                  label="Field of Study"
                  name="field_of_study"
                  value={formData.field_of_study}
                  onChange={handleInputChange}
                  required
                  icon="category"
                  placeholder="e.g. Engineering"
                />
                <OutlinedInput
                  label="Program of Study"
                  name="program_of_study"
                  value={formData.program_of_study}
                  onChange={handleInputChange}
                  required
                  icon="menu_book"
                  placeholder="e.g. Civil Engineering"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SearchableSelect
                  label="Current Level"
                  options={["A-Levels", "Undergraduate", "Post-Graduate", "Masters", "PhD"]}
                  value={formData.level}
                  onChange={(v) => handleSelectChange('level', v)}
                  icon="layers"
                />
                <SearchableSelect
                  label="Year of Study"
                  options={["100 Level", "200 Level", "300 Level", "400 Level", "500 Level", "Finalist"]}
                  value={formData.year}
                  onChange={(v) => handleSelectChange('year', v)}
                  icon="event_note"
                />
              </div>
            </div>

            {/* Section 3: Verification Credentials */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center text-[10px] font-black">03</span>
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#0052CC] font-label">Academic Identifiers</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <OutlinedInput
                  label="JAMB Reg Number"
                  name="jamb_reg_number"
                  value={formData.jamb_reg_number}
                  onChange={handleInputChange}
                  icon="input"
                  placeholder="e.g. 12345678AB"
                />
                <OutlinedInput
                  label="Matriculation Number"
                  name="matric_number"
                  value={formData.matric_number}
                  onChange={handleInputChange}
                  icon="tag"
                  placeholder="e.g. U2019/5570..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <OutlinedInput
                  label="WAEC Scratch PIN"
                  name="waec_pin"
                  value={formData.waec_pin}
                  onChange={handleInputChange}
                  icon="pin"
                  placeholder="12 digits"
                />
                <OutlinedInput
                  label="WAEC Serial Number"
                  name="waec_serial"
                  value={formData.waec_serial}
                  onChange={handleInputChange}
                  icon="receipt_long"
                  placeholder="e.g. WRC123456..."
                />
              </div>
            </div>

            {/* Action Area */}
            <div className="pt-10 border-t border-zinc-100">
              <div className="flex items-start gap-4 mb-10 group cursor-pointer">
                <div className="relative flex items-center">
                  <input required className="peer appearance-none w-6 h-6 border-2 border-zinc-200 rounded-lg checked:border-[#0052CC] checked:bg-[#0052CC] transition-all cursor-pointer" type="checkbox" />
                  <span className="material-symbols-outlined absolute inset-0 text-white text-lg scale-0 peer-checked:scale-100 transition-transform pointer-events-none flex items-center justify-center font-bold">check</span>
                </div>
                <p className="text-[11px] text-zinc-400 font-bold uppercase tracking-widest leading-relaxed">
                  I certify that all records provided match my official institutional data and I agree to the <Link className="text-[#0052CC] hover:underline" href="#">Global Terms</Link>.
                </p>
              </div>
              
              <Button type="submit" size="xl" className="w-full py-7" iconRight="arrow_forward" isLoading={isLoading}>
                Establish Scholar Account
              </Button>

              <div className="mt-10 p-6 rounded-3xl bg-zinc-50 border border-zinc-100 flex flex-col items-center gap-3">
                 <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest leading-none">Already have a profile?</p>
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
    <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center"><div className="w-12 h-12 border-4 border-zinc-100 border-t-[#0052CC] rounded-full animate-spin" /></div>}>
      <StudentRegisterContent />
    </Suspense>
  );
}
