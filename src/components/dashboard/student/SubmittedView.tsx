'use client'

import { ApplicationStepper } from './ApplicationStepper'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const steps = [
  { label: 'Personal', icon: 'person', status: 'completed' as const },
  { label: 'Academic', icon: 'school', status: 'completed' as const },
  { label: 'Financial', icon: 'payments', status: 'completed' as const },
  { label: 'Documents', icon: 'description', status: 'current' as const },
]

const documents = [
  { name: 'Admission Letter', type: 'PDF', size: '1.2 MB', date: 'Oct 12', status: 'verified' },
  { name: 'Official Transcript', type: 'PDF', size: '2.4 MB', date: 'Oct 15', status: 'verified' },
]

export function SubmittedView() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8 space-y-12 pb-24">
      {/* Header & Status */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h2 className="text-3xl font-extrabold font-headline text-on-surface tracking-tight mb-2">Scholarship Application 2024</h2>
          <p className="text-on-surface-variant flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">event</span>
            Last updated on October 24, 2023
          </p>
        </div>
        <div className="bg-white/80 backdrop-blur-md px-6 py-3 rounded-2xl border-2 border-primary/10 flex items-center gap-4">
          <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Application Status</span>
          <div className="flex items-center gap-2 px-4 py-1.5 bg-secondary-container/30 text-secondary font-bold rounded-full text-sm">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            Under Review
          </div>
        </div>
      </div>

      {/* Journey Stepper */}
      <ApplicationStepper steps={steps} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Snapshot & Value */}
        <div className="lg:col-span-4 space-y-8">
          <Card className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-sm">
            <h3 className="font-headline text-lg font-bold mb-6">Profile Snapshot</h3>
            <div className="space-y-6">
              {[
                { label: 'Institution', value: 'University of Lagos', icon: 'school' },
                { label: 'Course of Study', value: 'Mechanical Engineering', icon: 'menu_book' },
                { label: 'CGPA', value: '4.85 / 5.0', icon: 'military_tech' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-container/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <div>
                    <p className="text-xs text-on-surface-variant font-medium">{item.label}</p>
                    <p className="text-sm font-bold">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-3 rounded-xl border-2 border-primary/10 text-primary font-bold text-sm hover:bg-primary-container/5 transition-colors">
              Edit Personal Info
            </button>
          </Card>

          {/* Impact Metric (Scholarship Value) */}
          <div className="bg-gradient-to-b from-[#0052CC] to-[#003D9B] rounded-3xl p-8 text-white relative overflow-hidden group shadow-xl shadow-primary/20">
            <div className="flex justify-between items-start mb-4">
              <span className="material-symbols-outlined text-secondary-fixed text-2xl group-hover:rotate-12 transition-transform">workspace_premium</span>
              <span className="text-[10px] font-bold tracking-widest uppercase opacity-70">Scholarship Value</span>
            </div>
            <h4 className="text-3xl font-extrabold font-headline mb-2 tracking-tight">₦2,500,000</h4>
            <p className="text-sm opacity-80 mb-6 font-medium">Estimated annual coverage including tuition and stipends.</p>
            <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
              <div className="w-2/3 h-full bg-secondary-fixed" />
            </div>
            {/* Subtle decorative circle */}
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/5 rounded-full blur-2xl" />
          </div>
        </div>

        {/* Right Column: Documents & Additional Info */}
        <div className="lg:col-span-8 space-y-8">
          <Card className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-headline text-xl font-bold">Required Documents</h3>
              <span className="px-3 py-1 bg-tertiary-container/10 text-tertiary font-bold text-xs rounded-lg">3 OF 4 COMPLETED</span>
            </div>
            <div className="space-y-4">
              {documents.map((doc, idx) => (
                <div key={idx} className="group flex items-center justify-between p-4 bg-surface-container-low rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                      <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>
                        check_circle
                      </span>
                    </div>
                    <div>
                      <h5 className="font-bold text-sm">{doc.name}</h5>
                      <p className="text-xs text-on-surface-variant font-medium">{doc.type} • {doc.size} • Uploaded {doc.date}</p>
                    </div>
                  </div>
                  <button className="material-symbols-outlined text-on-surface-variant hover:text-primary p-2 transition-colors">more_vert</button>
                </div>
              ))}

              {/* Upload Box: Financial Need Statement */}
              <div className="p-6 border-2 border-dashed border-secondary/30 bg-secondary-container/5 rounded-3xl flex flex-col items-center text-center group hover:border-secondary transition-all">
                <div className="w-16 h-16 rounded-full bg-secondary-container/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-secondary text-3xl">upload_file</span>
                </div>
                <h5 className="font-bold text-base mb-1 text-on-surface">Financial Need Statement</h5>
                <p className="text-xs text-on-surface-variant max-w-xs mb-6 font-medium">Please provide a 500-word statement explaining your financial situation and how this scholarship will impact your education.</p>
                <div className="w-full max-w-md relative">
                  <input 
                    className="w-full pl-4 pr-12 py-3 bg-white border-outline-variant/30 rounded-xl text-sm focus:ring-2 focus:ring-secondary-fixed transition-shadow placeholder:text-zinc-300 font-medium" 
                    placeholder="Paste link or type filename..." 
                    type="text"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-b from-[#0052CC] to-[#003D9B] text-white px-4 py-1.5 rounded-lg text-xs font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                    Upload
                  </button>
                </div>
              </div>
            </div>
          </Card>

          {/* Additional Information Section */}
          <Card className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 transform group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-6xl text-primary/5 select-none" style={{ fontVariationSettings: "'wght' 700" }}>edit_note</span>
            </div>
            <h3 className="font-headline text-xl font-bold mb-8">Additional Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Secondary Contact</label>
                <input 
                  className="w-full p-4 bg-surface-container-low border-none rounded-2xl text-sm focus:ring-2 focus:ring-secondary-fixed transition-all font-medium" 
                  type="text" 
                  defaultValue="+234 812 345 6789"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">LGA of Origin</label>
                <input 
                  className="w-full p-4 bg-surface-container-low border-none rounded-2xl text-sm focus:ring-2 focus:ring-secondary-fixed transition-all font-medium" 
                  type="text" 
                  defaultValue="Ikeja"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Community Involvement (Optional)</label>
                <textarea 
                  className="w-full p-4 bg-surface-container-low border-none rounded-2xl text-sm focus:ring-2 focus:ring-secondary-fixed transition-all font-medium resize-none" 
                  rows={4}
                  placeholder="List any volunteer work or leadership roles..."
                  defaultValue="I'm also a member of the renewable energy club on campus where I lead projects that aim to provide sustainable energy solutions for rural communities..."
                />
              </div>
            </div>
            <div className="mt-10 flex justify-end gap-1.5 relative z-10">
              <button className="px-6 py-3 text-sm font-bold text-on-surface-variant hover:text-primary transition-colors">Discard Changes</button>
              <button className="px-10 py-3 bg-gradient-to-b from-[#0052CC] to-[#003D9B] text-white rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                Save Changes
              </button>
            </div>
          </Card>
        </div>
      </div>

      {/* Success Decoration (Asymmetric) */}
      <div className="fixed bottom-12 right-12 hidden xl:block pointer-events-none opacity-20 hover:opacity-40 transition-opacity duration-700">
        <div className="relative w-64 h-80 rotate-12 overflow-hidden rounded-[3rem] shadow-2xl">
          <Image 
            src="/graduation-diploma.png" // We would typically upload the generated asset here
            alt="Graduation Diploma" 
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}
