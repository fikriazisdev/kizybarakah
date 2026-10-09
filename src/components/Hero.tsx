import React from 'react';
import { ArrowRight, ChevronRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CompanyProfile } from '../types';

interface HeroProps {
  company: CompanyProfile;
  onExploreDivisions: () => void;
  onOpenProducts: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  company,
  onExploreDivisions,
  onOpenProducts
}) => {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28 bg-white border-b border-corporate-border">
      {/* Subtle Corporate Grid Ambient */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0F172A08_1px,transparent_1px),linear-gradient(to_bottom,#0F172A08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          {/* Institutional Trust Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold tracking-wide">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>ENTITAS BISNIS RESMI TERDAFTAR</span>
            <span className="text-slate-300">•</span>
            <span className="text-sky-800">KEMENKUMHAM &amp; HALAL VERIFIED</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-corporate-navy tracking-tight leading-[1.12]">
            Integritas Usaha, Cita Rasa Nusantara, &amp;{' '}
            <span className="text-sky-700">Kemitraan Berkelanjutan</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-normal max-w-3xl mx-auto">
            {company.name} adalah perusahaan nasional yang menaungi keunggulan operasional 
            penyediaan <strong>Jasa Boga (Food Service &amp; Event Catering)</strong>, industri 
            manufaktur <strong>Pempek Kizy &amp; Aneka Kudapan Olahan</strong>, serta portofolio 
            strategis <strong>Perdagangan Retail Gaya Hidup Terkurasi</strong>.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenProducts}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-sky-700 hover:bg-sky-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center space-x-2"
            >
              <span>Buka Katalog &amp; Rincian Produk</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExploreDivisions}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-corporate-navy font-bold text-sm border-2 border-slate-200 hover:bg-slate-50 transition-all flex items-center justify-center space-x-2"
            >
              <span>Sekilas Lini Usaha</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
          </div>

          {/* Helicopter View Trust Counters */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 border-t border-slate-200/80 mt-12 text-left">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Fokus Utama</div>
              <div className="text-lg font-extrabold text-corporate-navy mt-0.5">Jasa Boga &amp; Pangan</div>
              <div className="text-xs text-slate-500 mt-1">Catering &amp; Pempek Kizy</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Kapasitas Produksi</div>
              <div className="text-lg font-extrabold text-emerald-800 mt-0.5">Hingga 5.000 Porsi</div>
              <div className="text-xs text-slate-500 mt-1">Dapur terstandarisasi HACCP</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Portofolio Niaga</div>
              <div className="text-lg font-extrabold text-sky-800 mt-0.5">100% Authentic</div>
              <div className="text-xs text-slate-500 mt-1">Retail gaya hidup terkurasi</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Kepatuhan Hukum</div>
              <div className="text-lg font-extrabold text-corporate-navy mt-0.5">Kemenkumham AHU</div>
              <div className="text-xs text-slate-500 mt-1">NIB OSS &amp; Halal Terdaftar</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
