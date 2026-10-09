import React from 'react';
import { UtensilsCrossed, Cookie, ShoppingBag, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { ProductItem } from '../types';

interface DivisionsSectionProps {
  products: ProductItem[];
  onOpenProductsView: () => void;
}

export const DivisionsSection: React.FC<DivisionsSectionProps> = ({
  products,
  onOpenProductsView
}) => {
  // Highlight products (1 from each division)
  const highlightedCatering = products.find(p => p.pillarId === 'culinary');
  const highlightedSnack = products.find(p => p.pillarId === 'snacks');
  const highlightedLuxury = products.find(p => p.pillarId === 'luxury');

  return (
    <section id="lini-bisnis" className="py-20 bg-white border-b border-corporate-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-100 px-3.5 py-1 rounded-full border border-slate-200">
            <span>PORTOFOLIO USAHA KORPORAT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-corporate-navy tracking-tight">
            Lini Bisnis &amp; Unit Layanan Terpadu
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Struktur portofolio usaha PT Kizy Barakah Orbis terbagi atas <strong>Divisi Utama Pangan &amp; Jasa Boga</strong> serta <strong>Portofolio Niaga Retail Terkurasi</strong> untuk diversifikasi strategis.
          </p>
        </div>

        {/* 2 Main Business Units (Core) + 1 Other Services Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* DIVISION 1: CATERING (CORE) */}
          <div className="lg:col-span-6 rounded-2xl border-2 border-slate-200 bg-slate-50 p-8 flex flex-col justify-between hover:border-slate-300 transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-corporate-navy text-white flex items-center justify-center">
                  <UtensilsCrossed className="w-6 h-6 text-sky-400" />
                </div>
                <span className="px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-sky-100 text-sky-900 border border-sky-200">
                  Divisi Utama • Food Service
                </span>
              </div>

              <h3 className="text-2xl font-bold text-corporate-navy mb-2">
                Jasa Boga &amp; Katering Acara Besar
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Penyediaan konsumsi jamuan makan berskala besar untuk gala dinner korporasi, rapat direksi/kementerian, resepsi pernikahan, serta kontrak katering harian kantin institusi dengan standar sanitasi higienis bersertifikat.
              </p>

              <div className="space-y-2 mb-8">
                <div className="flex items-center text-xs font-semibold text-slate-700 space-x-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Prasmanan VIP Nusantara, Oriental, &amp; Western</span>
                </div>
                <div className="flex items-center text-xs font-semibold text-slate-700 space-x-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Nasi Kotak Eksekutif Rapat &amp; Seminar</span>
                </div>
                <div className="flex items-center text-xs font-semibold text-slate-700 space-x-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Kapasitas produksi dapur hingga 5.000 porsi per hari</span>
                </div>
              </div>
            </div>

            {highlightedCatering && (
              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img src={highlightedCatering.imageUrl} alt="" className="w-12 h-12 rounded-lg object-cover" />
                  <div>
                    <div className="text-xs font-bold text-corporate-navy">{highlightedCatering.name}</div>
                    <div className="text-[11px] text-slate-500">{highlightedCatering.priceFormatted}</div>
                  </div>
                </div>
                <button
                  onClick={onOpenProductsView}
                  className="text-xs font-bold text-sky-700 hover:text-sky-800 flex items-center space-x-1"
                >
                  <span>Rincian</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>

          {/* DIVISION 2: FOOD MFG & SNACKS (CORE) */}
          <div className="lg:col-span-6 rounded-2xl border-2 border-slate-200 bg-slate-50 p-8 flex flex-col justify-between hover:border-slate-300 transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-corporate-navy text-white flex items-center justify-center">
                  <Cookie className="w-6 h-6 text-emerald-400" />
                </div>
                <span className="px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900 border border-emerald-200">
                  Divisi Utama • Manufaktur Pangan
                </span>
              </div>

              <h3 className="text-2xl font-bold text-corporate-navy mb-2">
                Industri Pempek Kizy &amp; Kudapan Ringan
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Manufaktur olahan makanan khas nusantara berbasis resep autentik. Memproduksi Pempek Kizy asli Palembang berbahan baku murni 100% ikan tenggiri segar, artisan potato chips Dieng, kue tampah tradisional, dan dimsum beku.
              </p>

              <div className="space-y-2 mb-8">
                <div className="flex items-center text-xs font-semibold text-slate-700 space-x-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Pempek Kizy kemasan vacuum food-grade &amp; cuko kental asli</span>
                </div>
                <div className="flex items-center text-xs font-semibold text-slate-700 space-x-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Keripik kentang artisan Dieng non-trans fat</span>
                </div>
                <div className="flex items-center text-xs font-semibold text-slate-700 space-x-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Layanan pesanan hampers hari raya, parsel, &amp; kemitraan reseller</span>
                </div>
              </div>
            </div>

            {highlightedSnack && (
              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img src={highlightedSnack.imageUrl} alt="" className="w-12 h-12 rounded-lg object-cover" />
                  <div>
                    <div className="text-xs font-bold text-corporate-navy">{highlightedSnack.name}</div>
                    <div className="text-[11px] text-slate-500">{highlightedSnack.priceFormatted}</div>
                  </div>
                </div>
                <button
                  onClick={onOpenProductsView}
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center space-x-1"
                >
                  <span>Rincian</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>

          {/* DIVISION 3: OTHER SERVICES & CURATED RETAIL (STRATEGIC VENTURE) */}
          <div className="lg:col-span-12 rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-900 via-corporate-navy to-slate-900 text-white p-8 sm:p-10 shadow-md">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="max-w-2xl space-y-3">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-white/10 text-sky-300 border border-white/15">
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Portofolio Niaga Lainnya • Other Strategic Services</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  Perdagangan Retail &amp; Gaya Hidup Terkurasi
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Sebagai langkah diversifikasi usaha korporat, divisi perdagangan retail melayani kurasi dan pengadaan pakaian desainer, tas kulit bermerek, serta arloji mewah (timepieces) dengan jaminan keaslian 100% dan sertifikasi verifikasi independen.
                </p>
                <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-300">
                  <span className="flex items-center space-x-1.5">
                    <ShieldCheck className="w-4 h-4 text-sky-400" />
                    <span>Lifetime Money-Back Guarantee</span>
                  </span>
                  <span className="flex items-center space-x-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Entrupy AI &amp; Certified Appraisers</span>
                  </span>
                  <span className="flex items-center space-x-1.5">
                    <ShieldCheck className="w-4 h-4 text-amber-400" />
                    <span>Layanan Private Viewing Eksklusif</span>
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="shrink-0">
                <button
                  onClick={onOpenProductsView}
                  className="px-6 py-3.5 rounded-xl bg-white text-corporate-navy hover:bg-slate-100 font-bold text-xs sm:text-sm shadow-md transition-all flex items-center space-x-2"
                >
                  <span>Lihat Katalog Koleksi Retail</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Global CTA Bar to Products Page */}
        <div className="text-center">
          <button
            onClick={onOpenProductsView}
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-all"
          >
            <span>Buka Seluruh Katalog Produk &amp; Simulasi Layanan</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

