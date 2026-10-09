import React from 'react';
import { Target, CheckCircle2, ShieldCheck, Award, Building, Sparkles } from 'lucide-react';
import { CompanyProfile } from '../types';

interface AboutSectionProps {
  company: CompanyProfile;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ company }) => {
  return (
    <section id="tentang" className="py-20 bg-slate-50 border-b border-corporate-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-slate-700 bg-white px-3.5 py-1 rounded-full border border-slate-200">
            <span>PROFIL PERUSAHAAN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-corporate-navy tracking-tight">
            Fondasi Keberkahan, Kualitas, &amp; Integritas Usaha
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {company.legalEntity} adalah perseroan berbadan hukum resmi yang beroperasi dengan dedikasi 
            menghadirkan mutu layanan terbaik, transparansi etika berusaha, dan standar tata kelola profesional.
          </p>
        </div>

        {/* Vision & Mission Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Vision Box */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-corporate-navy text-white shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold tracking-tight">Visi Perusahaan</h3>
              </div>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-light mb-8">
                "{company.vision}"
              </p>
            </div>

            {/* Subtle Regulatory Compliance Seal */}
            <div className="pt-6 border-t border-slate-700/80 space-y-2">
              <div className="flex items-center space-x-2 text-xs font-bold tracking-wide text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span>KEPATUHAN REGULASI NASIONAL</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Tersertifikasi resmi oleh Kementerian Hukum &amp; HAM RI, sistem Perizinan Berusaha Nasional (OSS), 
                serta sertifikasi halal resmi dari BPJPH Kementerian Agama Republik Indonesia.
              </p>
            </div>
          </div>

          {/* Mission Box */}
          <div className="lg:col-span-7 p-8 rounded-2xl bg-white border border-corporate-border shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-corporate-navy tracking-tight">Misi Strategis</h3>
              </div>

              <div className="space-y-4">
                {company.mission.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3.5">
                    <div className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Fokus Operasional: Jabodetabek, Palembang, &amp; Distribusi Nasional</span>
              <span className="font-semibold text-slate-700">ISO &amp; HACCP Compliant Kitchen</span>
            </div>
          </div>
        </div>

        {/* 4 Core Values */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-corporate-navy">4 Nilai Dasar Perusahaan</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {company.values.map((val, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-corporate-border shadow-xs hover:border-slate-400 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center mb-4 font-bold text-sm">
                  0{idx + 1}
                </div>
                <h4 className="text-base font-bold text-corporate-navy mb-2">{val.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
