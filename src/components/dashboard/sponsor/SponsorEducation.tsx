'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { usePathname } from 'next/navigation'

const scholarsList = [
  { 
    name: 'Chinonso Okafor', 
    school: 'University of Lagos', 
    program: 'Structural Engineering', 
    status: 'Active', 
    lastPaid: 'Aug 12, 2024',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDLg0vDIncm33LONea9Ngf0BgygU1R0PlhgXBk2zJ7DwoHbujAl7rQsb6gZT6zT7HFCzMvxLSELvQ6DWXhlbAJCx9qdNDk0_GnOGR9U9LlRp05xqR-Egw3nx8v7Eo00X6bebWdF9Vw6qdtr5LQ7sJMbvCumSNVQVYdTFfl9J_nQNAnQs-BBhU-oMjTjKXjf6WE4HxKw4VS4fVJSr42IKMF08qUnTmH0YZ17BVKwHoc-3qw8zuiKlC2zU0pJqG3fBJy16j_U4keFBaU'
  },
  { 
    name: 'Amina Yusuf', 
    school: 'ABU Zaria', 
    program: 'Medicine & Surgery', 
    status: 'Active', 
    lastPaid: 'Sep 01, 2024',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGCXVJ8WjVLaEWs0yGQ_KsKDh1sqW8x2gjXPHysSGu7Kq68OFB1lD2G79Mbo8ziClNoYBd3Ubro-HwQ3lGGcxN9-SOTaxU3JuW_6u1vBcA4WklCDxOlqDz_ldJhyirfZjANRlX8XrBMl9OUhmqpmpg8VhFb9OAalCugw91a21ejf062jkNZ7iHlJv4J7UtB9DWDgzU6_0Dnon2rgSiHlCp-8gA7uARNDjQRBdkWEr99A08DAX09rcQfqjgXTE0rbmRD2GWNFFjPLKm'
  },
  { 
    name: 'Adeola Adebayo', 
    school: 'University of Ibadan', 
    program: 'Computer Science', 
    status: 'Graduating', 
    lastPaid: 'Jul 28, 2024',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBx_MvXF9pEn1U8H7k0M_G6N5oMvQ37RjU0V_xJbF1H-M-6n1vBcA4WklCDxOlqDz_ldJhyirfZjANRlX8XrBMl9OUhmqpmpg8VhFb9OAalCugw91a21ejf062jkNZ7iHlJv4J7UtB9DWDgzU6_0Dnon2rgSiHlCp-8gA7uARNDjQRBdkWEr99A08DAX09rcQfqjgXTE0rbmRD2GWNFFjPLKm'
  },
  { 
    name: 'Tunde Bakare', 
    school: 'Covenant University', 
    program: 'Architecture', 
    status: 'Active', 
    lastPaid: 'Aug 30, 2024',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdRWo557z1Qbih3NKBzTE-ODxroBO8lejO8DCyP6jPlSQl4HIhUmc8U4IlGVJ4Eea5RPus68FExWGrAYhelgkEGDGyFnc-IffEGj1o_meiB8AO-Yw5HbZBmo3AloKudmsICS-EopxV7SvIQmpqqp7lHwEJ6npHWXfTicJ0ljSippKTxA0bPJzkaovJNTq1A-BU9sT4I0n0C9a8zpWtTvV8TJDUgg-tdq0S-wan5f3I1s6xo1Gu_wMylQ48KtJnLVT4Awxfsj9tt_JI'
  }
]

export function SponsorEducation() {
  const [activeFilter, setActiveFilter] = useState('All')

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-7xl mx-auto space-y-8 pb-20"
    >
      {/* Breadcrumb & Header */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 font-label">
          <span>Dashboard</span>
          <span className="material-symbols-outlined text-[10px]">chevron_right</span>
          <span>Sponsor</span>
          <span className="material-symbols-outlined text-[10px]">chevron_right</span>
          <span className="text-[#0052CC]">Education</span>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-1">
            <h1 className="text-4xl font-black font-headline tracking-tighter text-zinc-900 leading-none">Education Portfolio</h1>
            <p className="text-zinc-500 font-body text-sm max-w-lg">Manage your sponsored students, track academic progress, and oversee upcoming disbursements across multiple institutions.</p>
          </div>
          <Button 
            iconLeft="add"
            className="md:w-64"
          >
            Add New Scholar
          </Button>
        </div>
      </section>

      {/* Metric Cards (IMAGE_2 Alignment) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Total Students Sponsored', value: '142', color: 'text-zinc-900', icon: 'groups' },
          { label: 'Active Scholarships', value: '128', color: 'text-[#0052CC]', icon: 'school' },
          { label: 'Upcoming Payments', value: '₦1.2M', color: 'text-zinc-900', icon: 'payments' }
        ].map((metric, i) => (
          <div key={i} className="bg-white p-6 sm:p-8 rounded-3xl lg:rounded-[32px] border border-zinc-100 shadow-sm flex items-center justify-between group">
            <div className="space-y-2">
              <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 font-label">{metric.label}</p>
              <p className={cn("text-3xl font-black font-headline", metric.color)}>{metric.value}</p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center border border-zinc-100 group-hover:bg-[#0052CC]/5 group-hover:border-[#0052CC]/10 transition-all">
              <span className="material-symbols-outlined text-zinc-400 group-hover:text-[#0052CC] transition-colors">{metric.icon}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Table Interface (IMAGE_2 Alignment) */}
      <section className="bg-white rounded-3xl lg:rounded-[32px] border border-zinc-100 shadow-sm overflow-hidden min-h-[500px] flex flex-col">
        {/* Table Toolbar */}
        <div className="p-6 border-b border-zinc-50 flex flex-col md:flex-row justify-between gap-6 items-center">
          <div className="flex bg-zinc-100 p-1.5 rounded-2xl w-full md:w-auto overflow-x-auto scrollbar-hide">
            {['All', 'Active', 'Pending', 'Graduated'].map((f) => (activeFilter === f ? 
              <button key={f} className="px-6 py-2 bg-white rounded-xl text-xs font-black shadow-sm text-[#0052CC] transition-all whitespace-nowrap">{f}</button> :
              <button key={f} onClick={() => setActiveFilter(f)} className="px-6 py-2 rounded-xl text-xs font-bold text-zinc-500 hover:text-zinc-800 transition-all whitespace-nowrap">{f}</button>
            ))}
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 text-lg">search</span>
              <input type="text" placeholder="Search portfolio..." className="w-full bg-zinc-100 border-none rounded-2xl py-2.5 pl-12 pr-4 text-xs font-medium focus:ring-2 focus:ring-[#0052CC]/10 transition-all font-body"/>
            </div>
            <button className="p-2.5 bg-zinc-100 rounded-xl hover:bg-zinc-200 transition-colors">
              <span className="material-symbols-outlined text-zinc-600 text-xl font-bold">tune</span>
            </button>
          </div>
        </div>

        {/* Table Data */}
        <div className="overflow-x-auto flex-1">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-50">
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400 font-label whitespace-nowrap">Scholar Name</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400 font-label whitespace-nowrap">Institution</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400 font-label whitespace-nowrap">Program</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400 font-label whitespace-nowrap">Status</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400 font-label whitespace-nowrap">Last Paid</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400 font-label text-right whitespace-nowrap">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-50/50">
              {scholarsList.map((scholar, idx) => (
                <tr key={idx} className="group hover:bg-zinc-50/50 transition-colors cursor-pointer">
                  <td className="px-8 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full overflow-hidden border border-zinc-100 shadow-sm shrink-0">
                        <Image src={scholar.img} alt={scholar.name} width={40} height={40} className="w-full h-full object-cover"/>
                      </div>
                      <div>
                        <p className="text-sm font-extrabold text-zinc-900 font-headline leading-tight">{scholar.name}</p>
                        <p className="text-[10px] text-zinc-400 font-black uppercase tracking-widest font-label">Verified</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-4 whitespace-nowrap">
                    <p className="text-[11px] font-black text-zinc-600 font-label uppercase tracking-wider">{scholar.school}</p>
                  </td>
                  <td className="px-8 py-4">
                    <p className="text-sm font-medium text-zinc-500 font-body">{scholar.program}</p>
                  </td>
                  <td className="px-8 py-4">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest font-label",
                      scholar.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                    )}>
                      {scholar.status}
                    </span>
                  </td>
                  <td className="px-8 py-4 whitespace-nowrap">
                    <p className="text-[11px] font-bold text-zinc-400 font-label">{scholar.lastPaid}</p>
                  </td>
                  <td className="px-8 py-4 text-right">
                    <button className="p-2 hover:bg-zinc-100 rounded-lg transition-colors group/btn">
                      <span className="material-symbols-outlined text-zinc-400 group-hover/btn:text-[#0052CC] transition-colors">more_vert</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table Pagination Placeholder */}
        <div className="p-6 border-t border-zinc-50 flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-zinc-400 font-label">
          <span>Showing 4 of 142 scholars</span>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-zinc-100 rounded-xl hover:bg-zinc-200 transition-all font-bold text-zinc-600">Previous</button>
            <button className="px-4 py-2 bg-[#0052CC] text-white rounded-xl shadow-lg shadow-blue-600/10 hover:bg-[#0047b3] transition-all font-bold">1</button>
            <button className="px-4 py-2 bg-zinc-100 rounded-xl hover:bg-zinc-200 transition-all font-bold text-zinc-600">2</button>
            <button className="px-4 py-2 bg-zinc-100 rounded-xl hover:bg-zinc-200 transition-all font-bold text-zinc-600">Next</button>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
