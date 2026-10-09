import React from 'react';
import { ShieldCheck, Sparkles, CheckCircle2, Lock, Eye, RefreshCw } from 'lucide-react';

export const RetailTrustSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-corporate-navy to-slate-950 text-white relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-barakah-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950/80 px-3 py-1 rounded-full border border-sky-800">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>STANDAR INTEGRITAS MEWAH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            100% Authentic Guarantee &amp; Curated Verification
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Setiap tas desainer dan arloji mewah di Kizy Luxury Retail melalui proses kurasi berlapis untuk menjamin keaslian mutlak dan ketenangan pikiran kolektor.
          </p>
        </div>

        {/* 4 Pillars of Trust Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-sky-500/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold mb-2">Lifetime Money-Back</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Jaminan uang kembali 100% tanpa batas waktu apabila barang terbukti tidak otentik berdasarkan pemeriksaan lembaga resmi independen.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-barakah-500/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-barakah-500/20 text-barakah-400 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold mb-2">Entrupy AI &amp; Curators</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Pemeriksaan material kulit, jahitan micro-stitch, dan nomor seri arloji oleh tim appraisal bersertifikat serta teknologi AI scanner Entrupy.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-4">
              <Eye className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold mb-2">Private VIP Viewing</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Layanan inspeksi barang langsung secara eksklusif dan privat di corporate showroom kami di kawasan Mega Kuningan, Jakarta Selatan.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
              <RefreshCw className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold mb-2">Buy-Back &amp; Consignment</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Fasilitas titip jual (konsinyasi) yang transparan dan jaminan buy-back terencana untuk portofolio arloji mewah Anda.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
