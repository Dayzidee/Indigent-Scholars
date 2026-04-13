'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { toast } from 'sonner'

export default function StudentSettingsPage() {
  const [loading, setLoading] = useState(false)

  const handleSave = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      toast.success('Settings updated successfully!')
    }, 1500)
  }

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto space-y-12 pb-24">
      {/* Page Header is handled by the layout, but we ensure spacing */}
      
      {/* Personal Info Section (Asymmetric Layout) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-4">
          <h3 className="font-headline text-xl font-bold text-on-surface">Personal Profile</h3>
          <p className="text-on-surface-variant text-sm mt-2 leading-relaxed">Update your public information and educational details to help sponsors find you.</p>
        </div>
        <div className="lg:col-span-8 bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-outline-variant/10">
          <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
            <div className="relative group">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-surface-container-low">
                <Image 
                  alt="Avatar" 
                  className="w-full h-full object-cover transition-transform group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdk7hHgKbZiQQAqszgmnNAk4G5AVTtLxNrxYxn1ukMazAYA8ViV7dpTzjqzbvdkynpaOEKFtBYgUUaauBovkn8JdOXhIWmPIzXk0IQdt5HH8qJtqC6aXBNlPRkvP9slN5u9Hc1hgwJe6TDZ9XZCWRO4J6ANu71giNaxW87XxoayVaBRUCZd6bSiUgSbjyFcKOkjWqk-7xSNCssQB46oKvHGyT1BD3GFh7OGCWG8bV3WlApqRBm1ETgJPTnGoDmxBrr3mZ3WpD8w-eH"
                  width={96}
                  height={96}
                />
              </div>
              <button className="absolute bottom-0 right-0 bg-[#0052CC] text-white p-2 rounded-full shadow-lg hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-sm">edit</span>
              </button>
            </div>
            <div className="flex-1 space-y-4 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-outline tracking-wider uppercase font-label">Full Name</label>
                  <input 
                    className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/40 focus:bg-surface-container-lowest transition-all font-headline font-medium" 
                    type="text" 
                    defaultValue="Adesuwa Omoregie"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-outline tracking-wider uppercase font-label">Email Address</label>
                  <input 
                    className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/40 focus:bg-surface-container-lowest transition-all font-headline font-medium" 
                    type="email" 
                    defaultValue="a.omoregie@student.edu.ng"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-outline tracking-wider uppercase font-label">Institution</label>
              <input 
                className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/40 focus:bg-surface-container-lowest transition-all font-headline font-medium" 
                type="text" 
                defaultValue="University of Lagos, Akoka"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-outline tracking-wider uppercase font-label">Field of Study</label>
                <input 
                  className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/40 focus:bg-surface-container-lowest transition-all font-headline font-medium" 
                  type="text" 
                  defaultValue="Computer Engineering"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-outline tracking-wider uppercase font-label">Matric No.</label>
                <input 
                  className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/40 focus:bg-surface-container-lowest transition-all font-headline font-medium" 
                  type="text" 
                  defaultValue="UL/20/4491"
                />
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-end">
            <button 
              onClick={handleSave}
              disabled={loading}
              className="bg-[#0052CC] text-white px-6 py-2.5 rounded-xl font-bold hover:shadow-lg hover:bg-primary transition-all active:scale-95 disabled:opacity-50"
            >
              {loading ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </div>
      </section>

      {/* Tonal Section Separator (No borders) */}
      <div className="h-px w-full bg-surface-container-high opacity-50"></div>

      {/* Security Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-4">
          <h3 className="font-headline text-xl font-bold text-on-surface">Security</h3>
          <p className="text-on-surface-variant text-sm mt-2 leading-relaxed">Manage your password and account protection methods.</p>
        </div>
        <div className="lg:col-span-8 bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-outline-variant/10 space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-outline tracking-wider uppercase font-label">Current Password</label>
              <input 
                className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/40 focus:bg-surface-container-lowest transition-all font-headline" 
                placeholder="••••••••" 
                type="password"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-outline tracking-wider uppercase font-label">New Password</label>
                <input 
                  className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/40 focus:bg-surface-container-lowest transition-all font-headline" 
                  placeholder="Min. 8 characters" 
                  type="password"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-outline tracking-wider uppercase font-label">Confirm Password</label>
                <input 
                  className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/40 focus:bg-surface-container-lowest transition-all font-headline" 
                  placeholder="••••••••" 
                  type="password"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 bg-primary/5 rounded-xl border border-primary/10">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#0052CC]">verified_user</span>
              <div className="text-sm">
                <p className="font-bold text-primary font-headline">Two-Factor Authentication</p>
                <p className="text-zinc-500 font-body">Currently disabled. Enable for better security.</p>
              </div>
            </div>
            <button className="text-[#0052CC] font-bold text-sm px-4 py-2 hover:bg-[#0052CC]/10 rounded-lg transition-colors font-headline">Enable</button>
          </div>
          <div className="pt-4 border-t border-zinc-800 flex justify-end items-center gap-4">
            <button className="text-primary font-bold hover:underline transition-all px-4 py-2 text-sm font-headline">Reset All Sessions</button>
            <button className="bg-primary text-white px-6 py-2.5 rounded-xl font-bold font-headline transition-all hover:shadow-lg active:scale-95">Update Password</button>
          </div>
        </div>
      </section>

      {/* Notification Settings */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-4">
          <h3 className="font-headline text-xl font-bold text-on-surface">Notification Settings</h3>
          <p className="text-on-surface-variant text-sm mt-2 leading-relaxed">Choose how you want to be alerted about scholarship updates and application status.</p>
        </div>
        <div className="lg:col-span-8 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10 overflow-hidden">
          <div className="divide-y divide-zinc-50">
            {[
              { id: 'status', title: 'Application Status Alerts', desc: 'Get notified when your application progresses to a new stage.', active: true },
              { id: 'matches', title: 'Sponsor Match Recommendations', desc: 'Receive alerts when new scholarship sponsors match your profile.', active: true },
              { id: 'funding', title: 'Funding Disbursement Notices', desc: 'Immediate alerts for payment releases and transaction history.', active: false },
            ].map((item) => (
              <div key={item.id} className="p-6 flex items-center justify-between hover:bg-zinc-800/50 transition-colors group">
                <div>
                  <p className="font-headline font-bold text-on-surface">{item.title}</p>
                  <p className="text-xs text-on-surface-variant mt-1 font-body">{item.desc}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input defaultChecked={item.active} className="sr-only peer" type="checkbox" />
                  <div className="w-11 h-6 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-zinc-800 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-zinc-900 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0052CC]" />
                </label>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Danger Zone */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-4">
          <h3 className="font-headline text-xl font-bold text-error">Danger Zone</h3>
          <p className="text-on-surface-variant text-sm mt-2 leading-relaxed">Permanently delete your account and all associated data. This action is irreversible.</p>
        </div>
        <div className="lg:col-span-8 bg-error-container/10 border-2 border-dashed border-error/20 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm">
            <p className="font-bold text-on-background font-headline">Deactivate Account</p>
            <p className="text-zinc-500 font-body">Your profile will be hidden and applications paused.</p>
          </div>
          <button className="bg-error text-white px-6 py-2.5 rounded-xl font-bold hover:shadow-lg transition-all active:scale-95 font-headline">Deactivate Now</button>
        </div>
      </section>
    </div>
  )
}
