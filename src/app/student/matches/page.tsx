'use client';

import { useEffect, useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { getSponsorMatches } from '@/lib/actions/sponsorships';
import { 
  Users, 
  Handshake, 
  Award, 
  ArrowRight,
  Verified,
  Lock,
  Wallet
} from 'lucide-react';
import Link from 'next/link';

export default function StudentMatches() {
  const [matches, setMatches] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMatches() {
      try {
        const data = await getSponsorMatches();
        setMatches(data || []);
      } catch (e) {
        console.error(e);
      }
      setLoading(false);
    }
    loadMatches();
  }, []);

  return (
    <DashboardLayout>
      <div className="space-y-10">
        {/* Verification Alert (Locked State logic from Stitch) */}
        <section className="p-1 rounded-3xl bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-transparent border border-amber-500/30">
          <div className="p-6 rounded-[calc(1.5rem-1px)] bg-slate-950/80 backdrop-blur-xl flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center">
                <Lock className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Sponsor Matches are Locked</h3>
                <p className="text-slate-500 text-sm">Your application must be verified by an admin before you can connect with sponsors.</p>
              </div>
            </div>
            <Link 
              href="/student/application" 
              className="px-5 py-2.5 bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 font-bold rounded-xl transition-all border border-amber-500/20 text-sm"
            >
              Verify Now
            </Link>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Active Matches / Potential */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center">
              <Handshake className="w-5 h-5 mr-3 text-teal-400" />
              Sponsorship Connections
            </h3>

            {matches.length === 0 ? (
              <div className="rounded-3xl border border-slate-800 bg-slate-900/20 p-20 flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 rounded-full bg-slate-800/50 flex items-center justify-center mb-6">
                  <Users className="w-10 h-10 text-slate-600" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">No Active Matches Yet</h4>
                <p className="text-slate-500 max-w-sm">
                  Once your application is verified, global sponsors will be able to discover you and pledge funding.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {matches.map((match, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                        <Award className="w-7 h-7 text-indigo-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg">{match.sponsor_id}</h4>
                        <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Status: {match.status}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-white">₦{Number(match.amount).toLocaleString()}</p>
                      <p className="text-xs text-slate-500 mt-1 uppercase font-bold tracking-widest">Pledged Amount</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Impact Stats */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center">
              <Wallet className="w-5 h-5 mr-3 text-indigo-400" />
              Funding Goal
            </h3>
            <div className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Progress</p>
                  <p className="text-2xl font-black text-teal-400">0%</p>
                </div>
                <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-teal-500 to-indigo-500 w-0"></div>
                </div>
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                  <span className="text-slate-600">₦0 Raided</span>
                  <span className="text-slate-400">₦2.5M Goal</span>
                </div>
              </div>
              
              <div className="pt-6 border-t border-slate-800 space-y-4">
                <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex flex-col items-center text-center">
                  <Verified className="w-8 h-8 text-indigo-400 mb-3" />
                  <p className="text-sm font-bold text-white mb-2">Verified Profile Advantage</p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Verified profiles attract 8x more sponsor interest on average.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
