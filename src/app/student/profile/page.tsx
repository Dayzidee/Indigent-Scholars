'use client';

import { useEffect, useState } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  User, 
  Mail, 
  Phone, 
  GraduationCap, 
  School, 
  Calendar,
  Save,
  Camera
} from 'lucide-react';

export default function StudentProfile() {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  useEffect(() => {
    async function fetchProfile() {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();
        setProfile(data);
      }
      setLoading(false);
    }
    fetchProfile();
  }, [supabase]);

  if (loading) return null;

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Profile Header */}
        <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 flex items-center space-x-8">
          <div className="relative">
            <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-teal-500/20 to-indigo-500/20 border border-slate-700 flex items-center justify-center">
              <User className="w-16 h-16 text-teal-400" />
            </div>
            <button className="absolute -bottom-2 -right-2 p-2 bg-slate-800 border border-slate-700 rounded-xl text-teal-400 hover:text-white transition-colors shadow-xl">
              <Camera className="w-4 h-4" />
            </button>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">{profile?.full_name || 'Scholar Name'}</h2>
            <p className="text-slate-500 font-medium">Undergraduate Student • University of Lagos</p>
            <div className="flex items-center space-x-4 mt-4">
              <span className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-xs font-bold border border-teal-500/20">Verified Identity</span>
              <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold border border-indigo-500/20">Active Scholar</span>
            </div>
          </div>
        </div>

        {/* Profile Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* General Information */}
          <div className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center mb-6">
              <User className="w-5 h-5 mr-3 text-teal-400" />
              General Information
            </h3>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Full Name</label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-teal-400 transition-colors" />
                  <input 
                    type="text" 
                    defaultValue={profile?.full_name}
                    className="w-full pl-12 pr-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/10 transition-all font-medium"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Email Address</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 transition-colors opacity-50" />
                  <input 
                    type="email" 
                    value={profile?.email}
                    disabled
                    className="w-full pl-12 pr-4 py-3 bg-slate-950/50 border border-slate-800 rounded-xl text-slate-500 cursor-not-allowed font-medium"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Academic Information */}
          <div className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center mb-6">
              <GraduationCap className="w-5 h-5 mr-3 text-indigo-400" />
              Academic Info
            </h3>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Institution</label>
                <div className="relative group">
                  <School className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 transition-colors" />
                  <input 
                    type="text" 
                    defaultValue="University of Lagos"
                    className="w-full pl-12 pr-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white font-medium focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/10 transition-all outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Current Year</label>
                <div className="relative group">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 transition-colors" />
                  <select className="w-full pl-12 pr-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white font-medium focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/10 transition-all outline-none">
                    <option>1st Year</option>
                    <option>2nd Year</option>
                    <option selected>3rd Year</option>
                    <option>4th Year</option>
                    <option>5th Year</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Save Changes */}
        <div className="flex justify-end pt-4 pb-12">
          <button className="flex items-center space-x-3 px-8 py-4 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold rounded-2xl transition-all shadow-xl shadow-teal-500/20 active:scale-95">
            <Save className="w-5 h-5" />
            <span>Save All Changes</span>
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
