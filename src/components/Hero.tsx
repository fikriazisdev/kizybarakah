import React from 'react';
import {
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  FileText,
  Smartphone,
  Instagram,
  Building2,
  UtensilsCrossed,
  Globe,
  ShoppingBag,
  Award
} from 'lucide-react';
import { CompanyProfile, LangType } from '../types';
import { officialAffiliations } from '../data/companyData';
import { InstagramOriginalLogo, GooglePlayOriginalLogo } from './BrandChannelIcons';

interface HeroProps {
  company: CompanyProfile;
  lang: LangType;
  onExploreDivisions: () => void;
  onOpenProducts: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  company,
  lang,
  onExploreDivisions,
  onOpenProducts
}) => {
  const isEn = lang === 'en';
  const companyProfileHref = company.contacts.companyProfileUrl || '/company-profile.html';
  const stripLogos = officialAffiliations.filter((a) => a.showInStrip !== false);

  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-14 lg:pb-20 bg-gradient-to-b from-slate-50 via-white to-slate-50/70 border-b border-corporate-border">
      {/* Architectural Grid & Subtle Brand Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0F172A07_1px,transparent_1px),linear-gradient(to_bottom,#0F172A07_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[320px] bg-gradient-to-r from-sky-500/10 via-emerald-500/10 to-amber-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          
          {/* Top Institutional Credential Pill */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-[#060D1A] text-white text-[11px] font-extrabold tracking-wide shadow-sm border border-slate-800">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-slate-200">
              {isEn ? 'ESTABLISHED 2022 · BEKASI, INDONESIA' : 'BERDIRI SEJAK 2022 · BEKASI, INDONESIA'}
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-sky-300">NIB {company.legalities.nib}</span>
            <span className="text-slate-600">•</span>
            <span className="text-emerald-300">HALAL BPJPH RI {company.legalities.halalBpjph}</span>
          </div>

          {/* Main Executive Headline */}
          {isEn ? (
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-corporate-navy tracking-tight leading-[1.12]">
              Business Integrity, Authentic Culinary Heritage, &amp;{' '}
              <span className="bg-gradient-to-r from-sky-700 via-emerald-700 to-sky-800 bg-clip-text text-transparent">
                Sustainable Partnership.
              </span>
            </h1>
          ) : (
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-corporate-navy tracking-tight leading-[1.12]">
              Integritas Usaha, Cita Rasa Nusantara, &amp;{' '}
              <span className="bg-gradient-to-r from-sky-700 via-emerald-700 to-sky-800 bg-clip-text text-transparent">
                Kemitraan Berkelanjutan.
              </span>
            </h1>
          )}

          {/* Concise, Low-Fatigue 2-Line Executive Summary (Replaces 5-Line Wall of Text) */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium">
            {isEn ? (
              <>
                <strong>{company.name}</strong> integrates halal-certified Indonesian culinary manufacturing, high-capacity event catering &amp; snack hospitality, and curated lifestyle retail under one trusted corporate ecosystem.
              </>
            ) : (
              <>
                <strong>{company.name}</strong> mengintegrasikan manufaktur kuliner Nusantara bersertifikat Halal, layanan katering &amp; kudapan acara berkapasitas tinggi, serta ritel gaya hidup terkurasi dalam satu ekosistem korporat terpercaya.
              </>
            )}
          </p>

          {/* 3 Scannable Brand & Export Highlight Pills (Instant Visual Clarity) */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1">
            <a
              href="https://www.instagram.com/pempek_kizy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-emerald-950 text-white border border-emerald-700/60 shadow-xs hover:bg-emerald-900 transition-all text-xs font-bold"
            >
              <Globe className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>
                {isEn
                  ? 'Pempek Kizy: Routinely Exported to Singapore 🇸🇬 (Exp: 🇦🇺 🇦🇪 🇸🇦)'
                  : 'Pempek Kizy: Rutin Diekspor ke Singapura 🇸🇬 (Pengalaman Kirim: 🇦🇺 🇦🇪 🇸🇦)'}
              </span>
            </a>

            <a
              href="https://www.instagram.com/pesensamasarah"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-sky-950 text-white border border-sky-700/60 shadow-xs hover:bg-sky-900 transition-all text-xs font-bold"
            >
              <UtensilsCrossed className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>
                {isEn
                  ? 'PesenSamaSarah Catering & Snack · Up to 1,000 Portions/Day'
                  : 'PesenSamaSarah Catering & Snack · Up to 1.000 Porsi/Hari'}
              </span>
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=id.easycatering.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-slate-900 text-white border border-slate-700 shadow-xs hover:bg-slate-800 transition-all text-xs font-bold"
            >
              <GooglePlayOriginalLogo className="w-4 h-4 shrink-0" />
              <span>
                {isEn
                  ? 'EasyCatering App (Google Play) & Curated Retail'
                  : 'Aplikasi EasyCatering (Google Play) & Curated Retail'}
              </span>
            </a>
          </div>

          {/* Primary Action CTAs */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3.5 pt-2">
            <button
              onClick={onOpenProducts}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-sky-700 to-sky-800 hover:from-sky-800 hover:to-sky-900 text-white font-extrabold text-sm shadow-lg shadow-sky-900/15 transition-all flex items-center justify-center space-x-2"
            >
              <span>{isEn ? 'Explore Product Catalog & Simulator' : 'Buka Katalog & Simulasi Produk'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={companyProfileHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-[#062822] via-emerald-800 to-emerald-700 hover:from-emerald-900 hover:to-emerald-800 text-white font-extrabold text-sm shadow-lg shadow-emerald-900/15 transition-all flex items-center justify-center space-x-2 border border-emerald-500/30"
            >
              <FileText className="w-4 h-4 text-emerald-300" />
              <span>{isEn ? 'Download Company Profile (PDF)' : 'Buka / Unduh Company Profile (PDF)'}</span>
            </a>

            <button
              onClick={onExploreDivisions}
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white text-corporate-navy font-extrabold text-sm border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center justify-center space-x-2"
            >
              <span>{isEn ? 'View Business Units' : 'Lihat Lini Bisnis'}</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>
          </div>

          {/* Visual 3-Unit Showcase Grid Matching Company Profile v8.0 Cover */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-4 text-left">
            <a
              href="https://www.instagram.com/pempek_kizy"
              target="_blank"
              rel="noopener noreferrer"
              className="md:col-span-5 group relative h-64 md:h-72 rounded-2xl overflow-hidden border-2 border-emerald-900/20 shadow-lg"
            >
              <img
                src="/assets/pempek_kizy_hero.jpg"
                alt="Pempek Kizy — 100% Ikan Tenggiri Asli"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060D1A] via-[#060D1A]/40 to-transparent" />
              <div className="absolute top-3.5 left-3.5">
                <span className="px-2.5 py-1 rounded-md bg-emerald-600/95 text-white text-[10px] font-extrabold uppercase tracking-wider shadow-xs">
                  {isEn ? 'Core Unit 01 · Export Quality' : 'Bisnis Utama 01 · Kualitas Ekspor'}
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400">
                  AUTHENTIC CULINARY MANUFACTURING
                </div>
                <div className="text-lg font-extrabold mt-0.5">
                  {isEn ? 'Pempek Kizy · 100% Authentic Tenggiri' : 'Pempek Kizy · 100% Ikan Tenggiri Asli'}
                </div>
                <div className="text-xs text-slate-200 mt-1 flex items-center space-x-1.5 font-medium">
                  <InstagramOriginalLogo className="w-4 h-4 shrink-0" />
                  <span>
                    {isEn
                      ? '@pempek_kizy · Routinely Exported to Singapore 🇸🇬'
                      : '@pempek_kizy · Rutin Diekspor ke Singapura 🇸🇬'}
                  </span>
                </div>
              </div>
            </a>

            <a
              href="https://www.instagram.com/pesensamasarah"
              target="_blank"
              rel="noopener noreferrer"
              className="md:col-span-4 group relative h-64 md:h-72 rounded-2xl overflow-hidden border-2 border-sky-900/20 shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=85"
                alt="PesenSamaSarah Catering & Snack"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060D1A] via-[#060D1A]/40 to-transparent" />
              <div className="absolute top-3.5 left-3.5">
                <span className="px-2.5 py-1 rounded-md bg-sky-600/95 text-white text-[10px] font-extrabold uppercase tracking-wider shadow-xs">
                  {isEn ? 'Core Unit 02 · Catering & Snack' : 'Bisnis Utama 02 · Katering & Snack'}
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-[10px] font-extrabold uppercase tracking-widest text-sky-400">
                  EVENT HOSPITALITY
                </div>
                <div className="text-lg font-extrabold mt-0.5">
                  PesenSamaSarah Catering &amp; Snack
                </div>
                <div className="text-xs text-slate-200 mt-1 flex items-center space-x-1.5 font-medium">
                  <GooglePlayOriginalLogo className="w-4 h-4 shrink-0" />
                  <span>{isEn ? 'Up to 1,000 Portions/Day · EasyCatering App' : 'Up to 1.000 Porsi/Hari · EasyCatering App'}</span>
                </div>
              </div>
            </a>

            <a
              href="https://www.instagram.com/pesensamasarah"
              target="_blank"
              rel="noopener noreferrer"
              className="md:col-span-3 group relative h-64 md:h-72 rounded-2xl overflow-hidden border-2 border-amber-900/20 shadow-lg"
            >
              <img
                src="/assets/curated_retail_trio_gradient.jpg"
                alt="PesenSamaSarah Curated Retail"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060D1A] via-[#060D1A]/40 to-transparent" />
              <div className="absolute top-3.5 left-3.5">
                <span className="px-2.5 py-1 rounded-md bg-amber-600/95 text-white text-[10px] font-extrabold uppercase tracking-wider shadow-xs">
                  {isEn ? 'Supporting Line' : 'Lini Pendukung'}
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400">
                  LIFESTYLE COMMERCE
                </div>
                <div className="text-base font-extrabold mt-0.5 leading-snug">
                  PesenSamaSarah Curated Retail
                </div>
                <div className="text-xs text-slate-200 mt-1 flex items-center space-x-1.5 font-medium">
                  <ShoppingBag className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{isEn ? 'Bags, Watches, Apparel & Hampers' : 'Tas, Jam, Busana & Hampers'}</span>
                </div>
              </div>
            </a>
          </div>

          {/* 4 High-Contrast Executive Metric Cards with Distinctive Icons (Critique 2 Resolved) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 text-left">
            
            {/* Card 1: 2022 */}
            <div className="relative overflow-hidden p-5 rounded-2xl bg-white border-2 border-sky-100 hover:border-sky-300 shadow-sm hover:shadow-md transition-all group">
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-sky-600 to-sky-400" />
              <div className="flex items-center justify-between mb-3.5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sky-600 to-sky-800 text-white flex items-center justify-center shadow-md shadow-sky-700/20 group-hover:scale-105 transition-transform">
                  <Building2 className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-sky-50 text-sky-800 border border-sky-200">
                  {isEn ? 'CORPORATE MILESTONE' : 'REKAM JEJAK'}
                </span>
              </div>
              <div className="text-2xl font-black text-corporate-navy tracking-tight">2022</div>
              <div className="text-xs font-extrabold text-slate-800 mt-1">
                {isEn ? 'Year Established' : 'Tahun Pendirian'}
              </div>
              <div className="text-[11px] font-medium text-slate-500 mt-0.5">
                {isEn ? 'Bekasi City, West Java' : 'Kota Bekasi, Jawa Barat'}
              </div>
            </div>

            {/* Card 2: Up to 1.000 */}
            <div className="relative overflow-hidden p-5 rounded-2xl bg-white border-2 border-emerald-100 hover:border-emerald-300 shadow-sm hover:shadow-md transition-all group">
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-emerald-600 to-teal-400" />
              <div className="flex items-center justify-between mb-3.5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-800 text-white flex items-center justify-center shadow-md shadow-emerald-700/20 group-hover:scale-105 transition-transform">
                  <UtensilsCrossed className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200">
                  {isEn ? 'KITCHEN SCALE' : 'KAPASITAS DAPUR'}
                </span>
              </div>
              <div className="text-2xl font-black text-corporate-navy tracking-tight">
                {isEn ? 'Up to 1,000' : 'Up to 1.000'}
              </div>
              <div className="text-xs font-extrabold text-slate-800 mt-1">
                {isEn ? 'Portions / Day Capacity' : 'Porsi Kapasitas / Hari'}
              </div>
              <div className="text-[11px] font-medium text-slate-500 mt-0.5">
                {isEn ? 'Buffet, meal boxes & event snacks' : 'Katering & kudapan acara'}
              </div>
            </div>

            {/* Card 3: 100% Halal */}
            <div className="relative overflow-hidden p-5 rounded-2xl bg-white border-2 border-amber-100 hover:border-amber-300 shadow-sm hover:shadow-md transition-all group">
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-amber-500 to-yellow-400" />
              <div className="flex items-center justify-between mb-3.5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 text-white flex items-center justify-center shadow-md shadow-amber-600/20 group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-amber-50 text-amber-900 border border-amber-200">
                  {isEn ? 'QUALITY ASSURANCE' : 'JAMINAN MUTU'}
                </span>
              </div>
              <div className="text-2xl font-black text-corporate-navy tracking-tight">100% Halal</div>
              <div className="text-xs font-extrabold text-slate-800 mt-1">
                {isEn ? 'BPJPH RI Certified' : 'Tersertifikasi BPJPH RI'}
              </div>
              <div className="text-[11px] font-mono font-semibold text-amber-800 mt-0.5">
                {company.legalities.halalBpjph}
              </div>
            </div>

            {/* Card 4: Google Play */}
            <a
              href="https://play.google.com/store/apps/details?id=id.easycatering.app"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden p-5 rounded-2xl bg-white border-2 border-slate-200 hover:border-sky-400 shadow-sm hover:shadow-md transition-all group block"
            >
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#060D1A] via-corporate-navy to-sky-700" />
              <div className="flex items-center justify-between mb-3.5">
                <div className="w-11 h-11 rounded-xl bg-slate-900 p-2 flex items-center justify-center shadow-md shadow-slate-900/20 group-hover:scale-105 transition-transform">
                  <GooglePlayOriginalLogo className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-slate-100 text-slate-800 border border-slate-300">
                  {isEn ? 'DIGITAL INNOVATION' : 'INOVASI DIGITAL'}
                </span>
              </div>
              <div className="text-2xl font-black text-corporate-navy tracking-tight">Google Play</div>
              <div className="text-xs font-extrabold text-slate-800 mt-1">
                {isEn ? 'EasyCatering Mobile App' : 'Aplikasi Tech EasyCatering'}
              </div>
              <div className="text-[11px] font-mono font-semibold text-sky-700 mt-0.5">
                id.easycatering.app
              </div>
            </a>

          </div>

          {/* Official 8-Logo Strip (100% Matching Page 2 .trust-strip-box of v8.0) */}
          <div className="pt-4">
            <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-[#0F172A] to-slate-900 border border-slate-800 shadow-md">
              <div className="flex items-center justify-center space-x-2 text-[10px] font-extrabold uppercase tracking-[0.14em] text-emerald-400 text-center mb-3.5">
                <Award className="w-3.5 h-3.5 shrink-0" />
                <span>
                  {isEn
                    ? 'OFFICIALLY LICENSED, CERTIFIED & AFFILIATED WITH NATIONAL MINISTRIES & ENTREPRENEUR ECOSYSTEMS'
                    : 'TERDAFTAR, TERSERTIFIKASI & TERGABUNG DALAM EKOSISTEM RESMI PEMERINTAH & KOMUNITAS WIRAUSAHA'}
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 items-center">
                {stripLogos.map((item) => (
                  <div
                    key={item.id}
                    className="h-12 px-2.5 py-1.5 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-xs hover:scale-[1.03] transition-transform"
                    title={isEn ? `${item.titleEn} — ${item.descEn}` : `${item.titleId} — ${item.descId}`}
                  >
                    <img
                      src={item.logoUrl}
                      alt={isEn ? item.titleEn : item.titleId}
                      className="max-h-8 max-w-full w-auto h-auto object-contain block"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
