import React from 'react';
import {
  UtensilsCrossed,
  Cookie,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Check,
  Instagram,
  Smartphone,
  ExternalLink,
  Globe,
  Sparkles
} from 'lucide-react';
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
        
        {/* Section Header — Crisp & Scannable */}
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-extrabold uppercase tracking-wider text-emerald-900 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>{isEn ? 'OUR ENTERPRISE PORTFOLIO ARCHITECTURE' : 'ARSITEKTUR PORTOFOLIO PERUSAHAAN KAMI'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-corporate-navy tracking-tight">
            {isEn
              ? 'Two Core F&B Business Units & Complementary Retail Line'
              : 'Dua Lini Bisnis Utama (F&B) & Lini Usaha Pendukung'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            {isEn
              ? 'Anchored by halal culinary manufacturing and high-capacity event catering, complemented by curated lifestyle commerce.'
              : 'Bertumpu pada manufaktur kuliner Halal berstandar ekspor dan jasa boga berkapasitas tinggi, dilengkapi ritel gaya hidup terkurasi.'}
          </p>
        </div>

        {/* Section A Label */}
        <div className="flex items-center justify-between pb-3 mb-7 border-b-2 border-emerald-600">
          <div className="text-xs font-extrabold uppercase tracking-widest text-emerald-800">
            {isEn
              ? 'A. OUR TWO CORE F&B BUSINESS UNITS (MAIN BUSINESSES)'
              : 'A. DUA LINI BISNIS UTAMA PERUSAHAAN KAMI (CORE F&B BUSINESSES)'}
          </div>
          <span className="hidden sm:inline-block text-xs font-bold text-slate-500">
            {isEn ? 'Halal BPJPH RI Certified · KBLI 10750' : 'Tersertifikasi Halal BPJPH RI · KBLI 10750'}
          </span>
        </div>

        {/* 2 Main Business Units (Core) — Balanced Visual Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 items-stretch">
          
          {/* CORE BUSINESS 01: PEMPEK KIZY (@pempek_kizy) */}
          <div className="lg:col-span-6 rounded-3xl border-2 border-slate-200/90 hover:border-emerald-500/60 bg-slate-50/70 overflow-hidden shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
            <div>
              {/* Visual Culinary Header Banner */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                <img
                  src="/assets/pempek_kizy_hero.jpg"
                  alt="Pempek Kizy — 100% Ikan Tenggiri Asli"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060D1A] via-[#060D1A]/45 to-transparent" />
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-lg text-[11px] font-extrabold uppercase tracking-wider bg-emerald-600 text-white shadow-sm">
                    {isEn ? 'Core Business 01 • Culinary Mfg' : 'Bisnis Utama 01 • Manufaktur Kuliner'}
                  </span>
                  <div className="flex items-center space-x-1.5 bg-white/95 px-2.5 py-1 rounded-lg shadow-xs">
                    <img src="/assets/logos/halal_indonesia.svg" alt="Halal Indonesia" className="h-5 w-auto object-contain" />
                    <img src="/assets/logos/cinta_indonesia.svg" alt="100% Cinta Indonesia" className="h-5 w-auto object-contain" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between text-white">
                  <div>
                    <div className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400">
                      @pempek_kizy · HALAL BPJPH RI
                    </div>
                    <h3 className="text-2xl font-black tracking-tight">
                      Pempek Kizy — Palembang Delicacy
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 backdrop-blur-xs flex items-center justify-center shrink-0">
                    <Cookie className="w-5 h-5 text-emerald-300" />
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 space-y-5">
                {/* Concise 2-Line Summary */}
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium">
                  {isEn ? (
                    <>
                      Crafted from <strong>100% authentic fresh Tenggiri fish</strong> with Linggau palm sugar Cuko in hygienic <em>Vacuum-Sealed Frozen</em> packaging (up to 6 months frozen shelf life).
                    </>
                  ) : (
                    <>
                      Diolah dari <strong>100% Ikan Tenggiri segar pilihan</strong> dan Cuko Gula Batok Linggau asli dalam kemasan higienis <em>Vacuum-Sealed Frozen</em> (daya simpan beku hingga 6 bulan).
                    </>
                  )}
                </p>

                {/* Export Track Record Dark Box (100% Matching Page 6 of v8.0 — Zero Over-Claim) */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-[#062822] via-corporate-navy to-sky-950 text-white border border-emerald-500/30 grid grid-cols-1 sm:grid-cols-12 gap-3.5 items-center shadow-sm">
                  <div className="sm:col-span-5 space-y-1">
                    <div className="flex items-center space-x-1 text-[9.5px] font-extrabold uppercase tracking-wider text-emerald-400">
                      <Globe className="w-3 h-3 shrink-0" />
                      <span>{isEn ? 'ROUTINE EXPORT MARKET' : 'PASAR EKSPOR RUTIN'}</span>
                    </div>
                    <div>
                      <span className="inline-block px-2.5 py-1 rounded-md bg-emerald-500/30 border border-emerald-400 text-white text-xs font-extrabold">
                        {isEn ? '🇸🇬 Singapore (Routine Export)' : '🇸🇬 Singapura (Ekspor Rutin)'}
                      </span>
                    </div>
                  </div>
                  <div className="sm:col-span-7 sm:border-l sm:border-white/15 sm:pl-3.5 space-y-1">
                    <div className="text-[9.5px] font-extrabold uppercase tracking-wider text-sky-300">
                      {isEn
                        ? 'PRIOR OVERSEAS SHIPPING EXPERIENCE'
                        : 'PERNAH BERPENGALAMAN DIKIRIM KE'}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2 py-0.5 rounded bg-white/15 border border-white/25 text-white text-[11px] font-bold">
                        🇦🇺 Australia
                      </span>
                      <span className="px-2 py-0.5 rounded bg-white/15 border border-white/25 text-white text-[11px] font-bold">
                        {isEn ? '🇦🇪 Dubai (UAE)' : '🇦🇪 Dubai (UEA)'}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-white/15 border border-white/25 text-white text-[11px] font-bold">
                        {isEn ? '🇸🇦 Saudi Arabia' : '🇸🇦 Arab Saudi'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Scannable 2x2 Feature Chips */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 flex items-center space-x-2 text-xs font-bold text-slate-800">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{isEn ? '100% Fresh Tenggiri Fish' : '100% Ikan Tenggiri Segar'}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 flex items-center space-x-2 text-xs font-bold text-slate-800">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{isEn ? 'Linggau Palm Sugar Cuko' : 'Cuko Gula Batok Linggau'}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 flex items-center space-x-2 text-xs font-bold text-slate-800">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{isEn ? 'Vacuum-Sealed (6 Months)' : 'Kemasan Vakum (6 Bulan)'}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 flex items-center space-x-2 text-xs font-bold text-slate-800">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{isEn ? 'B2B Horeca & Reseller Ready' : 'Kemitraan Horeca & Reseller'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Footer */}
            <div className="px-6 sm:px-7 pb-6 pt-2 space-y-3">
              {highlightedSnack && (
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 flex items-center justify-between shadow-2xs">
                  <div className="flex items-center space-x-3">
                    <img src={highlightedSnack.imageUrl} alt={highlightedSnack.name} className="w-12 h-12 rounded-xl object-cover" />
                    <div>
                      <div className="text-xs font-extrabold text-corporate-navy">
                        {isEn && highlightedSnack.nameEn ? highlightedSnack.nameEn : highlightedSnack.name}
                      </div>
                      <div className="text-[11px] font-bold text-emerald-700">{highlightedSnack.priceFormatted}</div>
                    </div>
                  </div>
                  <button
                    onClick={onOpenProductsView}
                    className="px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-xs font-extrabold text-emerald-800 flex items-center space-x-1 shrink-0 ml-2 transition-colors"
                  >
                    <span>{isEn ? 'Catalog' : 'Katalog'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              <div className="flex items-center justify-between pt-1">
                <a
                  href="https://www.instagram.com/pempek_kizy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-extrabold transition-all shadow-xs"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Instagram @pempek_kizy</span>
                  <ExternalLink className="w-3 h-3 opacity-80" />
                </a>
                <span className="text-[11px] font-mono font-bold text-slate-500">
                  Halal: ID32110005461900623
                </span>
              </div>
            </div>
          </div>

          {/* CORE BUSINESS 02: PESENSAMASARAH CATERING & SNACK (@pesensamasarah + EasyCatering) */}
          <div className="lg:col-span-6 rounded-3xl border-2 border-slate-200/90 hover:border-sky-500/60 bg-slate-50/70 overflow-hidden shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
            <div>
              {/* Visual Catering Header Banner */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=900&q=85"
                  alt="PesenSamaSarah Catering & Snack"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060D1A] via-[#060D1A]/45 to-transparent" />
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-lg text-[11px] font-extrabold uppercase tracking-wider bg-sky-600 text-white shadow-sm">
                    {isEn ? 'Core Business 02 • Catering & Snack' : 'Bisnis Utama 02 • Jasa Boga & Kudapan'}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#060D1A]/90 border border-sky-400/40 text-sky-300 text-[10px] font-extrabold uppercase tracking-wider">
                    {isEn ? 'Up to 1,000 Portions/Day' : 'Up to 1.000 Porsi/Hari'}
                  </span>
                </div>
                <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between text-white">
                  <div>
                    <div className="text-[10px] font-extrabold uppercase tracking-widest text-sky-400">
                      @pesensamasarah · EASYCATERING APP
                    </div>
                    <h3 className="text-2xl font-black tracking-tight">
                      PesenSamaSarah Catering &amp; Snack
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/40 backdrop-blur-xs flex items-center justify-center shrink-0">
                    <UtensilsCrossed className="w-5 h-5 text-sky-300" />
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 space-y-5">
                {/* Concise 2-Line Summary */}
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium">
                  {isEn ? (
                    <>
                      End-to-end VIP buffet catering, executive meal boxes, Chicken &amp; Shrimp Dimsum, and traditional Kue Tampah platters for corporate, institutional, and family events.
                    </>
                  ) : (
                    <>
                      Layanan terpadu katering prasmanan VIP, nasi kotak eksekutif, Dimsum Ayam &amp; Udang, serta Kue Tampah jajanan pasar untuk kebutuhan instansi, korporasi, dan keluarga.
                    </>
                  )}
                </p>

                {/* Kitchen Scale & EasyCatering Tech Dark Box (Balances Card 01 Export Box) */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-[#060D1A] via-corporate-navy to-sky-900 text-white border border-sky-500/30 grid grid-cols-1 sm:grid-cols-12 gap-3.5 items-center shadow-sm">
                  <div className="sm:col-span-5 space-y-1">
                    <div className="text-[9.5px] font-extrabold uppercase tracking-wider text-sky-300">
                      {isEn ? 'DAILY KITCHEN CAPACITY' : 'KAPASITAS PRODUKSI DAPUR'}
                    </div>
                    <div>
                      <span className="inline-block px-2.5 py-1 rounded-md bg-sky-500/30 border border-sky-400 text-white text-xs font-extrabold">
                        {isEn ? 'Up to 1,000 Portions / Day' : 'Up to 1.000 Porsi / Hari'}
                      </span>
                    </div>
                  </div>
                  <div className="sm:col-span-7 sm:border-l sm:border-white/15 sm:pl-3.5 space-y-1">
                    <div className="text-[9.5px] font-extrabold uppercase tracking-wider text-amber-300">
                      {isEn ? 'DIGITAL ORDERING INNOVATION' : 'DUKUNGAN INOVASI TEKNOLOGI'}
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="px-2.5 py-0.5 rounded bg-white/15 border border-white/25 text-white text-[11px] font-bold">
                        📱 EasyCatering (Google Play)
                      </span>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/25 border border-emerald-400/40 text-emerald-200 text-[11px] font-mono font-bold">
                        id.easycatering.app
                      </span>
                    </div>
                  </div>
                </div>

                {/* Scannable 2x2 Feature Chips */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 flex items-center space-x-2 text-xs font-bold text-slate-800">
                    <Check className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>{isEn ? 'VIP Buffet & Live Stall' : 'Prasmanan VIP & Gubukan'}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 flex items-center space-x-2 text-xs font-bold text-slate-800">
                    <Check className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>{isEn ? 'Executive Meal Boxes' : 'Nasi Kotak Eksekutif'}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 flex items-center space-x-2 text-xs font-bold text-slate-800">
                    <Check className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>{isEn ? 'Artisan Dimsum & Snack Box' : 'Dimsum & Artisan Snack Box'}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 flex items-center space-x-2 text-xs font-bold text-slate-800">
                    <Check className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>{isEn ? 'Traditional Kue Tampah' : 'Kue Tampah Jajanan Pasar'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Footer */}
            <div className="px-6 sm:px-7 pb-6 pt-2 space-y-3">
              {highlightedCatering && (
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 flex items-center justify-between shadow-2xs">
                  <div className="flex items-center space-x-3">
                    <img src={highlightedCatering.imageUrl} alt={highlightedCatering.name} className="w-12 h-12 rounded-xl object-cover" />
                    <div>
                      <div className="text-xs font-extrabold text-corporate-navy">
                        {isEn && highlightedCatering.nameEn ? highlightedCatering.nameEn : highlightedCatering.name}
                      </div>
                      <div className="text-[11px] font-bold text-sky-700">{highlightedCatering.priceFormatted}</div>
                    </div>
                  </div>
                  <button
                    onClick={onOpenProductsView}
                    className="px-3 py-1.5 rounded-lg bg-sky-50 hover:bg-sky-100 text-xs font-extrabold text-sky-800 flex items-center space-x-1 shrink-0 ml-2 transition-colors"
                  >
                    <span>{isEn ? 'Simulator' : 'Simulasi'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://www.instagram.com/pesensamasarah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-sky-700 hover:bg-sky-800 text-white text-xs font-extrabold transition-all shadow-xs"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>@pesensamasarah</span>
                    <ExternalLink className="w-3 h-3 opacity-80" />
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=id.easycatering.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-corporate-navy hover:bg-slate-800 text-white text-xs font-extrabold transition-all shadow-xs"
                  >
                    <Smartphone className="w-3.5 h-3.5 text-sky-400" />
                    <span>EasyCatering App</span>
                    <ExternalLink className="w-3 h-3 opacity-80" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Section B Label */}
        <div className="flex items-center justify-between pb-3 mb-6 border-b-2 border-amber-500/70">
          <div className="text-xs font-extrabold uppercase tracking-widest text-amber-800">
            {isEn
              ? 'B. OTHER BUSINESS LINE (COMPLEMENTARY RETAIL DIVISION)'
              : 'B. LINI BISNIS LAINNYA / PENDUKUNG (COMPLEMENTARY RETAIL LINE)'}
          </div>
          <span className="hidden sm:inline-block text-xs font-bold text-slate-500">
            @pesensamasarah · 100% Authentic Selection
          </span>
        </div>

        {/* COMPLEMENTARY LINE: PESENSAMASARAH CURATED RETAIL (@pesensamasarah) */}
        <div className="rounded-3xl border border-slate-800 bg-gradient-to-r from-[#060D1A] via-corporate-navy to-[#062822] text-white p-6 sm:p-10 shadow-xl mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <div className="rounded-2xl overflow-hidden border-2 border-amber-400/30 shadow-lg">
                <img
                  src="/assets/curated_retail_trio_gradient.jpg"
                  alt="PesenSamaSarah Curated Retail — Bags, Watches & Apparel"
                  className="w-full h-56 object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-lg text-[11px] font-extrabold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-400/30">
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>
                  {isEn
                    ? 'Supporting Business Line 03 • @pesensamasarah'
                    : 'Lini Usaha Pendukung 03 · @pesensamasarah'}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                PesenSamaSarah Curated Retail &amp; Executive Hampers
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
                {isEn
                  ? 'Complementing our core F&B operations, @pesensamasarah curates 100% authentic branded leather handbags, contemporary apparel, men’s & women’s wristwatches, and custom VIP corporate hampers.'
                  : 'Melengkapi dua bisnis utama F&B kami, @pesensamasarah menghadirkan koleksi terkurasi tas kulit bermerek, busana modern, jam tangan pria & wanita, serta paket bingkisan korporat (Executive Hampers) dengan jaminan keaslian 100%.'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 text-xs">
                <div className="p-2.5 rounded-xl bg-white/[0.06] border border-white/10 flex items-center space-x-2 text-slate-200 font-bold">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{isEn ? '100% Authentic Guaranteed' : 'Jaminan Keaslian 100%'}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.06] border border-white/10 flex items-center space-x-2 text-slate-200 font-bold">
                  <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>{isEn ? 'Bags, Watches & Apparel' : 'Tas, Jam Tangan & Busana'}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.06] border border-white/10 flex items-center space-x-2 text-slate-200 font-bold">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{isEn ? 'VIP Corporate Hampers' : 'Hampers Eksekutif Korporat'}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onOpenProductsView}
                  className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center space-x-2"
                >
                  <span>{isEn ? 'View Curated Retail Catalog' : 'Lihat Katalog Koleksi Ritel'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="https://www.instagram.com/pesensamasarah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-extrabold text-xs sm:text-sm transition-all flex items-center space-x-2"
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
            className="inline-flex items-center space-x-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#060D1A] via-corporate-navy to-sky-900 hover:from-slate-900 hover:to-sky-800 text-white font-extrabold text-sm shadow-lg transition-all border border-sky-500/30"
          >
            <span>
              {isEn
                ? 'Open Complete Product Catalog & Catering Budget Simulator'
                : 'Buka Seluruh Katalog Produk & Simulasi Anggaran Katering'}
            </span>
            <ArrowRight className="w-4 h-4 text-sky-400" />
          </button>
        </div>

      </div>
    </section>
  );
};
