'use client';

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  FileText, 
  Upload, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  FileBadge
} from 'lucide-react';

export default function StudentApplication() {
  const documents = [
    { name: 'Admission Letter', status: 'Verified', size: '1.2 MB', date: 'Oct 12', icon: CheckCircle2, color: 'text-teal-400' },
    { name: 'Official Transcript', status: 'Processing', size: '2.4 MB', date: 'Oct 15', icon: Clock, color: 'text-amber-400' },
    { name: 'Financial Statement', status: 'Pending Upload', size: '-', date: '-', icon: AlertCircle, color: 'text-slate-500' },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Application Header Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-3 p-8 rounded-3xl bg-slate-900/40 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="flex items-start space-x-5">
              <div className="w-16 h-16 rounded-2xl bg-teal-500/10 flex items-center justify-center border border-teal-500/20">
                <FileBadge className="w-8 h-8 text-teal-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Scholarship Application 2024</h2>
                <p className="text-slate-500 text-sm flex items-center">
                  <Clock className="w-3.5 h-3.5 mr-1.5" />
                  Last updated on October 24, 2023
                </p>
              </div>
            </div>
            
            <div className="text-right">
              <p className="text-3xl font-bold text-white mb-1">₦2,500,000</p>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-widest">Est. Annual Coverage</p>
            </div>
          </div>
          
          <div className="p-8 rounded-3xl bg-indigo-500/10 border border-indigo-500/20 flex flex-col justify-center items-center text-center">
            <p className="text-sm font-bold text-indigo-400 uppercase tracking-widest mb-2">Completion</p>
            <p className="text-4xl font-black text-white">65%</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Document List */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">Required Documents</h3>
              <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-bold rounded-lg transition-colors flex items-center">
                <Upload className="w-4 h-4 mr-2" />
                Upload New
              </button>
            </div>
            
            <div className="space-y-4">
              {documents.map((doc, i) => (
                <div key={i} className="group p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/50 flex items-center justify-center transition-colors group-hover:bg-teal-500/10">
                      <FileText className="w-6 h-6 text-slate-400 group-hover:text-teal-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{doc.name}</h4>
                      <p className="text-xs text-slate-500 mt-1 uppercase font-semibold">
                        {doc.size} • {doc.date}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <span className={`text-sm font-bold ${doc.color}`}>{doc.status}</span>
                    <doc.icon className={`w-5 h-5 ${doc.color}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Verification Progress / Profile Snapshot */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Profile Snapshot</h3>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 space-y-6">
              {[
                { label: 'Institution', val: 'University of Lagos' },
                { label: 'Course', val: 'Mech. Engineering' },
                { label: 'Current CGPA', val: '4.85 / 5.0' },
              ].map((item, i) => (
                <div key={i} className="border-b border-slate-800/50 pb-4 last:border-0 last:pb-0">
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1.5">{item.label}</p>
                  <p className="text-white font-semibold">{item.val}</p>
                </div>
              ))}
              
              <div className="pt-4">
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                  <p className="text-xs text-amber-400 font-bold mb-1">Action Required</p>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Please provide a 500-word statement explaining your financial situation.
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
