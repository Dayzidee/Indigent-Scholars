'use client';

import { useEffect, useState } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Building, 
  Mail, 
  Phone, 
  Globe, 
  Save, 
  FileText,
  BadgeCheck,
  ShieldAlert
} from 'lucide-react';

export default function SponsorSettings() {
  const [profile, setProfile] = useState<any>(null);
  const [sponsorDetails, setSponsorDetails] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  useEffect(() => {
    async function fetchData() {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data: prof } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();
        setProfile(prof);

        const { data: spon } = await supabase
          .from('sponsors')
          .select('*')
          .eq('id', user.id)
          .single();
        setSponsorDetails(spon);
      }
      setLoading(false);
    }
    fetchData();
  }, [supabase]);

  if (loading) return null;

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Verification Status Banner */}
        <div className={`p-6 rounded-3xl border flex items-center justify-between ${
          sponsorDetails?.is_verified 
            ? 'bg-teal-500/10 border-teal-500/20 text-teal-400' 
            : 'bg-amber-500/10 border-amber-500/20 text-amber-400'
        }`}>
          <div className="flex items-center space-x-4">
            {sponsorDetails?.is_verified ? (
              <BadgeCheck className="w-8 h-8" />
            ) : (
              <ShieldAlert className="w-8 h-8" />
            )}
            <div>
              <h4 className="font-bold text-lg leading-tight">
                {sponsorDetails?.is_verified ? 'Verified Organization' : 'Pending Verification'}
              </h4>
              <p className="text-sm opacity-80 mt-0.5 font-medium">
                {sponsorDetails?.is_verified 
                  ? 'Your institutional identity is active on the platform.' 
                  : 'Submit organizational documents to enable matchmaking.'}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Organization Details */}
          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center mb-6">
              <Building className="w-5 h-5 mr-3 text-indigo-400" />
              Organization Profile
            </h3>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Org Name</label>
                <div className="relative group">
                  <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
                  <input 
                    type="text" 
                    defaultValue={sponsorDetails?.org_name || 'Organization Name'}
                    className="w-full pl-12 pr-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white font-medium focus:border-indigo-500/50 outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Institutional Website</label>
                <div className="relative group">
                  <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
                  <input 
                    type="url" 
                    placeholder="https://example.org"
                    className="w-full pl-12 pr-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white font-medium focus:border-indigo-500/50 outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Contact Person */}
          <div className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center mb-6">
              <FileText className="w-5 h-5 mr-3 text-teal-400" />
              Point of Contact
            </h3>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Primary Rep</label>
                <input 
                  type="text" 
                  defaultValue={profile?.full_name}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white font-medium focus:border-teal-500/50 outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Phone Number</label>
                <div className="relative group">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-teal-400 transition-colors" />
                  <input 
                    type="tel" 
                    defaultValue={sponsorDetails?.phone}
                    className="w-full pl-12 pr-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white font-medium focus:border-teal-500/50 outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Save Changes */}
        <div className="flex justify-end pt-4 pb-12">
          <button className="flex items-center space-x-3 px-8 py-4 bg-indigo-500 hover:bg-indigo-400 text-white font-bold rounded-2xl transition-all shadow-xl shadow-indigo-500/20 active:scale-95">
            <Save className="w-5 h-5" />
            <span>Update Organization</span>
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
