import React from 'react';
import { UtensilsCrossed, Cookie, ShoppingBag, ArrowRight, ShieldCheck, Check, Instagram, Smartphone, ExternalLink } from 'lucide-react';
import { ProductItem, LangType } from '../types';

interface DivisionsSectionProps {
  products: ProductItem[];
  lang: LangType;
  onOpenProductsView: () => void;
}

export const DivisionsSection: React.FC<DivisionsSectionProps> = ({
  products,
  lang,
  onOpenProductsView
}) => {
  const isEn = lang === 'en';
  const highlightedSnack = products.find(p => p.pillarId === 'snacks');
  const highlightedCatering = products.find(p => p.pillarId === 'culinary');

  return (
    <section id="lini-bisnis" className="py-20 bg-white border-b border-corporate-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Exact Wording from Page 5 of v8.0) */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-100 px-3.5 py-1 rounded-full border border-slate-200">
            <span>{isEn ? 'OUR ENTERPRISE PORTFOLIO ARCHITECTURE' : 'ARSITEKTUR PORTOFOLIO PERUSAHAAN KAMI'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-corporate-navy tracking-tight">
            {isEn
              ? 'Two Core F&B Business Units & Complementary Retail Line'
              : 'Dua Lini Bisnis Utama (F&B) & Lini Usaha Pendukung'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {isEn ? (
              <>
                The primary operational focus of <strong>PT Kizy Barakah Orbis</strong> centers on Indonesian culinary manufacturing and event catering &amp; snack services, complemented by our curated lifestyle retail division as an additional business line:
              </>
            ) : (
              <>
                Fokus utama operasional <strong>PT Kizy Barakah Orbis</strong> berada pada sektor pengolahan kuliner Nusantara dan layanan katering &amp; kudapan acara, yang diperkuat oleh divisi perdagangan ritel gaya hidup sebagai lini usaha pendukung:
              </>
            )}
          </p>
        </div>

        {/* Section A Label */}
        <div className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 pb-2 mb-6 border-b-2 border-emerald-600">
          {isEn
            ? 'A. OUR TWO CORE F&B BUSINESS UNITS (MAIN BUSINESSES)'
            : 'A. DUA LINI BISNIS UTAMA PERUSAHAAN KAMI (CORE F&B BUSINESSES)'}
        </div>

        {/* 2 Main Business Units (Core) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          
          {/* CORE BUSINESS 01: PEMPEK KIZY (@pempek_kizy) */}
          <div className="lg:col-span-6 rounded-2xl border-2 border-slate-200 border-t-4 border-t-emerald-600 bg-slate-50 p-8 flex flex-col justify-between hover:border-slate-300 transition-all">
            <div>
              <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
                <div className="w-12 h-12 rounded-xl bg-corporate-navy text-white flex items-center justify-center shrink-0">
                  <Cookie className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="flex items-center space-x-2">
                  <img src="/assets/logos/halal_indonesia.svg" alt="Halal Indonesia" className="h-7 w-auto object-contain" />
                  <img src="/assets/logos/cinta_indonesia.svg" alt="100% Cinta Indonesia" className="h-7 w-auto object-contain" />
                  <span className="px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900 border border-emerald-200">
                    {isEn ? 'Core Business 01 • Culinary Mfg' : 'Bisnis Utama 01 • Manufaktur Kuliner'}
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-corporate-navy mb-2">
                Pempek Kizy — Authentic Palembang Delicacy
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-5">
                {isEn ? (
                  <>
                    Authentic Palembang culinary manufacturing using <strong>100% authentic fresh Tenggiri fish</strong> without preservatives and rich Linggau palm sugar Cuko. <strong>BPJPH RI Halal-certified</strong> in <em>Vacuum-Sealed Frozen</em> packs, our products are <strong>routinely exported to Singapore</strong>, with prior international shipping experience to <strong>Australia, Dubai (UAE), and Saudi Arabia</strong>.
                  </>
                ) : (
                  <>
                    Unit manufaktur kuliner khas Palembang berbahan <strong>100% Ikan Tenggiri segar</strong> tanpa bahan pengawet dan Cuko Gula Batok Linggau asli. Bersertifikat <strong>Halal BPJPH RI</strong> dalam kemasan <em>Vacuum-Sealed Frozen</em>, produk kami telah <strong>rutin diekspor ke Singapura</strong>, serta pernah berpengalaman dikirim ke berbagai negara seperti <strong>Australia, Dubai (UEA), dan Arab Saudi</strong>.
                  </>
                )}
              </p>

              {/* Export Track Record Banner (100% Matching Page 6 .export-banner-p6 of v8.0) */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#062822] via-corporate-navy to-sky-900 text-white mb-5 border border-sky-400/30 grid grid-cols-1 sm:grid-cols-12 gap-3.5 items-center">
                <div className="sm:col-span-5 space-y-1.5">
                  <div className="text-[9.5px] font-extrabold uppercase tracking-wider text-emerald-400">
                    {isEn ? 'ROUTINE EXPORT MARKET' : 'PASAR EKSPOR RUTIN (ROUTINE EXPORT MARKET)'}
                  </div>
                  <div>
                    <span className="inline-block px-2.5 py-1 rounded bg-emerald-500/30 border border-emerald-400 text-white text-xs font-bold">
                      {isEn ? '🇸🇬 Singapore (Routine B2B & Retail Export)' : '🇸🇬 Singapura (Routine B2B & Retail Export)'}
                    </span>
                  </div>
                </div>
                <div className="sm:col-span-7 sm:border-l sm:border-white/15 sm:pl-3.5 space-y-1.5">
                  <div className="text-[9.5px] font-extrabold uppercase tracking-wider text-sky-300">
                    {isEn
                      ? 'PRIOR OVERSEAS SHIPPING EXPERIENCE (PERNAH DIKIRIM KE)'
                      : 'PENGALAMAN PENGIRIMAN LUAR NEGERI (OVERSEAS SHIPPING EXPERIENCE)'}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 rounded bg-white/15 border border-white/25 text-white text-xs font-bold">
                      🇦🇺 Australia
                    </span>
                    <span className="px-2.5 py-1 rounded bg-white/15 border border-white/25 text-white text-xs font-bold">
                      {isEn ? '🇦🇪 Dubai (UAE)' : '🇦🇪 Dubai (UEA)'}
                    </span>
                    <span className="px-2.5 py-1 rounded bg-white/15 border border-white/25 text-white text-xs font-bold">
                      {isEn ? '🇸🇦 Saudi Arabia' : '🇸🇦 Arab Saudi'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex items-center text-xs font-semibold text-slate-700 space-x-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    {isEn
                      ? '100% Authentic Fresh Tenggiri Fish & Linggau Palm Sugar Cuko'
                      : '100% Ikan Tenggiri Segar Pilihan & Cuko Gula Batok Linggau Asli'}
                  </span>
                </div>
                <div className="flex items-center text-xs font-semibold text-slate-700 space-x-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    {isEn
                      ? 'Vacuum-Sealed Frozen Pack (Up to 6 Months Frozen Shelf Life)'
                      : 'Kemasan Vacuum-Sealed Frozen (Daya Simpan Beku 6 Bulan)'}
                  </span>
                </div>
                <div className="flex items-center text-xs font-semibold text-slate-700 space-x-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    {isEn
                      ? 'Halal BPJPH RI Certified (ID32110005461900623) · B2B Horeca & Reseller'
                      : 'Tersertifikasi Halal BPJPH RI (ID32110005461900623) · Kemitraan Horeca & Reseller'}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <a
                  href="https://www.instagram.com/pempek_kizy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-all"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Instagram @pempek_kizy</span>
                  <ExternalLink className="w-3 h-3 opacity-80" />
                </a>
              </div>
            </div>

            {highlightedSnack && (
              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img src={highlightedSnack.imageUrl} alt={highlightedSnack.name} className="w-14 h-14 rounded-lg object-cover" />
                  <div>
                    <div className="text-xs font-bold text-corporate-navy">
                      {isEn && highlightedSnack.nameEn ? highlightedSnack.nameEn : highlightedSnack.name}
                    </div>
                    <div className="text-[11px] text-slate-500">{highlightedSnack.priceFormatted}</div>
                  </div>
                </div>
                <button
                  onClick={onOpenProductsView}
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center space-x-1 shrink-0 ml-2"
                >
                  <span>{isEn ? 'Details' : 'Rincian'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>

          {/* CORE BUSINESS 02: PESENSAMASARAH CATERING & SNACK (@pesensamasarah + EasyCatering) */}
          <div className="lg:col-span-6 rounded-2xl border-2 border-slate-200 border-t-4 border-t-sky-600 bg-slate-50 p-8 flex flex-col justify-between hover:border-slate-300 transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-corporate-navy text-white flex items-center justify-center">
                  <UtensilsCrossed className="w-6 h-6 text-sky-400" />
                </div>
                <span className="px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-sky-100 text-sky-900 border border-sky-200">
                  {isEn ? 'Core Business 02 • Catering & Snack' : 'Bisnis Utama 02 • Jasa Boga & Kudapan'}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-corporate-navy mb-2">
                PesenSamaSarah Catering &amp; Snack
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {isEn
                  ? 'Full-service buffet catering, executive meal boxes, and event snacks (Chicken & Shrimp Dimsum, traditional Kue Tampah platters, and artisan snack boxes) with a capacity of up to 1,000 portions per day, supported by our high-tech EasyCatering mobile app on Google Play Store.'
                  : 'Unit layanan katering prasmanan, nasi kotak eksekutif, serta penyediaan kudapan pendamping acara (Dimsum Ayam & Udang, Kue Tampah Jajanan Pasar, dan Artisan Snack Box) berkapasitas up to 1.000 porsi per hari. Operasional layanan ini didukung oleh inovasi teknologi aplikasi mobile EasyCatering di Google Play Store.'}
              </p>

              <div className="space-y-2 mb-6">
                <div className="flex items-center text-xs font-semibold text-slate-700 space-x-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    {isEn
                      ? 'Kitchen production capacity: Up to 1,000 portions per day'
                      : 'Kapasitas produksi dapur: Up to 1.000 porsi per hari'}
                  </span>
                </div>
                <div className="flex items-center text-xs font-semibold text-slate-700 space-x-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    {isEn
                      ? 'VIP Buffet Catering, Executive Meal Boxes, Dimsum & Kue Tampah'
                      : 'Prasmanan VIP, Nasi Kotak Eksekutif, Dimsum Ayam/Udang & Kue Tampah'}
                  </span>
                </div>
                <div className="flex items-center text-xs font-semibold text-slate-700 space-x-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    {isEn
                      ? 'Supported by EasyCatering Mobile App (Google Play: id.easycatering.app)'
                      : 'Didukung Aplikasi Mobile EasyCatering (Google Play: id.easycatering.app)'}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <a
                  href="https://www.instagram.com/pesensamasarah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-lg bg-sky-700 hover:bg-sky-800 text-white text-xs font-bold transition-all"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>@pesensamasarah</span>
                  <ExternalLink className="w-3 h-3 opacity-80" />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=id.easycatering.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-lg bg-corporate-navy hover:bg-slate-800 text-white text-xs font-bold transition-all"
                >
                  <Smartphone className="w-3.5 h-3.5 text-sky-400" />
                  <span>EasyCatering (Google Play)</span>
                  <ExternalLink className="w-3 h-3 opacity-80" />
                </a>
              </div>
            </div>

            {highlightedCatering && (
              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img src={highlightedCatering.imageUrl} alt={highlightedCatering.name} className="w-14 h-14 rounded-lg object-cover" />
                  <div>
                    <div className="text-xs font-bold text-corporate-navy">
                      {isEn && highlightedCatering.nameEn ? highlightedCatering.nameEn : highlightedCatering.name}
                    </div>
                    <div className="text-[11px] text-slate-500">{highlightedCatering.priceFormatted}</div>
                  </div>
                </div>
                <button
                  onClick={onOpenProductsView}
                  className="text-xs font-bold text-sky-700 hover:text-sky-800 flex items-center space-x-1 shrink-0 ml-2"
                >
                  <span>{isEn ? 'Details' : 'Rincian'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>

        </div>

        {/* Section B Label */}
        <div className="text-xs font-extrabold uppercase tracking-widest text-slate-500 pb-2 mb-6 border-b border-slate-200">
          {isEn
            ? 'B. OTHER BUSINESS LINE (COMPLEMENTARY RETAIL DIVISION)'
            : 'B. LINI BISNIS LAINNYA / PENDUKUNG (OTHER BUSINESS LINE)'}
        </div>

        {/* COMPLEMENTARY LINE: PESENSAMASARAH CURATED RETAIL (@pesensamasarah) */}
        <div className="rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-900 via-corporate-navy to-slate-900 text-white p-6 sm:p-10 shadow-md mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <div className="rounded-xl overflow-hidden border border-white/15 shadow-lg">
                <img
                  src="/assets/curated_retail_trio_gradient.jpg"
                  alt="PesenSamaSarah Curated Retail — Bags, Watches & Apparel"
                  className="w-full h-56 object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-400/30">
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>
                  {isEn
                    ? 'Complementary Retail Line • @pesensamasarah'
                    : 'Lini Usaha Ritel & Hampers · @pesensamasarah'}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                PesenSamaSarah Curated Retail &amp; Lifestyle
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {isEn
                  ? 'As a complementary business line outside our core F&B operations, our company manages curated lifestyle retail via @pesensamasarah—offering authentic branded leather bags, contemporary apparel, men’s & women’s branded wristwatches, and executive hampers.'
                  : 'Sebagai unit usaha pelengkap di luar sektor kuliner, perusahaan kami mengelola perdagangan ritel terkurasi melalui @pesensamasarah yang menyediakan koleksi tas kulit bermerek, busana modern, jam tangan bermerek pria & wanita, serta pengadaan paket bingkisan korporat (Executive Hampers) dengan jaminan keaslian produk 100%.'}
              </p>

              <div className="flex flex-wrap gap-4 pt-1 text-xs text-slate-300">
                <span className="flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>{isEn ? '100% Authentic Selection' : 'Jaminan Keaslian Produk 100%'}</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-sky-400" />
                  <span>{isEn ? 'Branded Bags, Watches & Apparel' : 'Tas Kulit, Jam Tangan & Busana Bermerek'}</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>{isEn ? 'Executive Corporate Hampers' : 'Paket Bingkisan & Hampers Korporat'}</span>
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onOpenProductsView}
                  className="px-6 py-3 rounded-xl bg-white text-corporate-navy hover:bg-slate-100 font-bold text-xs sm:text-sm shadow-md transition-all flex items-center space-x-2"
                >
                  <span>{isEn ? 'View Curated Retail Catalog' : 'Lihat Katalog Koleksi Ritel'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="https://www.instagram.com/pesensamasarah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs sm:text-sm transition-all flex items-center space-x-2"
                >
                  <Instagram className="w-4 h-4 text-amber-400" />
                  <span>@pesensamasarah</span>
                </a>
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
            <span>
              {isEn
                ? 'Open Complete Product Catalog & Catering Budget Simulator'
                : 'Buka Seluruh Katalog Produk & Simulasi Anggaran Katering'}
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
