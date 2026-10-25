import React from 'react';
import { ArrowRight, ChevronRight, ShieldCheck, FileText, Smartphone, Instagram } from 'lucide-react';
import { CompanyProfile, LangType } from '../types';
import { officialAffiliations } from '../data/companyData';

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
  const companyProfileHref = company.contacts.companyProfileUrl || '/company-profile-v8.html';
  const stripLogos = officialAffiliations.filter((a) => a.showInStrip !== false);

  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-20 bg-white border-b border-corporate-border">
      {/* Subtle Corporate Grid Ambient */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0F172A08_1px,transparent_1px),linear-gradient(to_bottom,#0F172A08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          {/* Institutional Trust Badge (Matching Cover of v8.0) */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold tracking-wide">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>{isEn ? 'ESTABLISHED 2022 · BEKASI, INDONESIA' : 'BERDIRI SEJAK 2022 · BEKASI, INDONESIA'}</span>
            <span className="text-slate-300">•</span>
            <span className="text-sky-800">NIB {company.legalities.nib}</span>
            <span className="text-slate-300">•</span>
            <span className="text-emerald-800">HALAL BPJPH RI {company.legalities.halalBpjph}</span>
          </div>

          {/* Main Title (Exact Tagline from Cover of v8.0) */}
          {isEn ? (
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-corporate-navy tracking-tight leading-[1.12]">
              Business Integrity, Authentic Culinary Heritage, &amp;{' '}
              <span className="text-sky-700">Sustainable Partnership.</span>
            </h1>
          ) : (
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-corporate-navy tracking-tight leading-[1.12]">
              Integritas Usaha, Cita Rasa Nusantara, &amp;{' '}
              <span className="text-sky-700">Kemitraan Berkelanjutan.</span>
            </h1>
          )}

          {/* Subtitle (Exact Wording from Page 2 of v8.0 — Zero Over-claim) */}
          {isEn ? (
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-3xl mx-auto">
              Founded in <strong>2022</strong> in Bekasi, West Java, <strong>{company.name}</strong> is an enterprise primarily focused on Indonesian culinary manufacturing and event catering &amp; snack services, complemented by a curated lifestyle retail division. Our core business is anchored by{' '}
              <a href="https://www.instagram.com/pempek_kizy" target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-bold hover:underline">
                Pempek Kizy
              </a>
              —which is <strong>routinely exported to Singapore</strong> with prior international shipping experience to countries such as <strong>Australia, Dubai (UAE), and Saudi Arabia</strong>—and{' '}
              <a href="https://www.instagram.com/pesensamasarah" target="_blank" rel="noopener noreferrer" className="text-sky-700 font-bold hover:underline">
                PesenSamaSarah Catering &amp; Snack
              </a>{' '}
              (<strong>up to 1,000 portions/day</strong>) supported by our{' '}
              <a href="https://play.google.com/store/apps/details?id=id.easycatering.app" target="_blank" rel="noopener noreferrer" className="text-sky-700 font-bold hover:underline">
                EasyCatering
              </a>{' '}
              mobile app, alongside our secondary retail line, <strong>PesenSamaSarah Curated Retail</strong>.
            </p>
          ) : (
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-3xl mx-auto">
              Berdiri sejak tahun <strong>2022</strong> di Kota Bekasi, Jawa Barat, <strong>{company.name}</strong> adalah perusahaan yang berfokus utama pada industri pengolahan pangan Nusantara serta layanan katering dan kudapan acara, yang dilengkapi oleh lini usaha perdagangan ritel gaya hidup terkurasi. Bisnis utama kami bertumpu pada manufaktur{' '}
              <a href="https://www.instagram.com/pempek_kizy" target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-bold hover:underline">
                Pempek Kizy
              </a>
              —yang kini telah <strong>rutin diekspor ke Singapura</strong> serta pernah berpengalaman dikirim ke berbagai negara seperti <strong>Australia, Dubai (UEA), dan Arab Saudi</strong>—serta layanan boga{' '}
              <a href="https://www.instagram.com/pesensamasarah" target="_blank" rel="noopener noreferrer" className="text-sky-700 font-bold hover:underline">
                PesenSamaSarah Catering &amp; Snack
              </a>{' '}
              berkapasitas <strong>up to 1.000 porsi/hari</strong> yang didukung aplikasi{' '}
              <a href="https://play.google.com/store/apps/details?id=id.easycatering.app" target="_blank" rel="noopener noreferrer" className="text-sky-700 font-bold hover:underline">
                EasyCatering
              </a>
              , dilengkapi lini pendukung <strong>PesenSamaSarah Curated Retail</strong>.
            </p>
          )}

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3.5 pt-2">
            <button
              onClick={onOpenProducts}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-sky-700 hover:bg-sky-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center space-x-2"
            >
              <span>{isEn ? 'Explore Product Catalog & Simulator' : 'Buka Katalog & Simulasi Produk'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={companyProfileHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center space-x-2"
            >
              <FileText className="w-4 h-4" />
              <span>{isEn ? 'Official Company Profile v8.0 (Bilingual PDF)' : 'Buka / Unduh Company Profile v8.0 (PDF)'}</span>
            </a>

            <button
              onClick={onExploreDivisions}
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white text-corporate-navy font-bold text-sm border-2 border-slate-200 hover:bg-slate-50 transition-all flex items-center justify-center space-x-2"
            >
              <span>{isEn ? 'Our Business Units' : 'Sekilas Lini Bisnis'}</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
          </div>

          {/* Visual 3-Unit Showcase Grid Matching Company Profile v8.0 Cover */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-6 text-left">
            <a
              href="https://www.instagram.com/pempek_kizy"
              target="_blank"
              rel="noopener noreferrer"
              className="md:col-span-5 group relative h-64 md:h-72 rounded-2xl overflow-hidden border border-slate-200 shadow-md"
            >
              <img
                src="/assets/pempek_kizy_hero.jpg"
                alt="Pempek Kizy — 100% Ikan Tenggiri Asli"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400">
                  AUTHENTIC CULINARY MANUFACTURING
                </div>
                <div className="text-lg font-extrabold mt-0.5">
                  {isEn ? 'Pempek Kizy · 100% Authentic Tenggiri Fish' : 'Pempek Kizy · 100% Ikan Tenggiri Asli'}
                </div>
                <div className="text-xs text-slate-300 mt-1 flex items-center space-x-1.5">
                  <Instagram className="w-3.5 h-3.5 text-emerald-400" />
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
              className="md:col-span-4 group relative h-64 md:h-72 rounded-2xl overflow-hidden border border-slate-200 shadow-md"
            >
              <img
                src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=85"
                alt="PesenSamaSarah Catering & Snack"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-[10px] font-extrabold uppercase tracking-widest text-sky-400">
                  EVENT HOSPITALITY
                </div>
                <div className="text-lg font-extrabold mt-0.5">
                  PesenSamaSarah Catering &amp; Snack
                </div>
                <div className="text-xs text-slate-300 mt-1 flex items-center space-x-1.5">
                  <Smartphone className="w-3.5 h-3.5 text-sky-400" />
                  <span>{isEn ? 'Up to 1,000 Portions/Day · EasyCatering App' : 'Up to 1.000 Porsi/Hari · EasyCatering App'}</span>
                </div>
              </div>
            </a>

            <a
              href="https://www.instagram.com/pesensamasarah"
              target="_blank"
              rel="noopener noreferrer"
              className="md:col-span-3 group relative h-64 md:h-72 rounded-2xl overflow-hidden border border-slate-200 shadow-md"
            >
              <img
                src="/assets/curated_retail_trio_gradient.jpg"
                alt="PesenSamaSarah Curated Retail"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400">
                  LIFESTYLE COMMERCE
                </div>
                <div className="text-base font-extrabold mt-0.5 leading-snug">
                  PesenSamaSarah Curated Retail
                </div>
                <div className="text-xs text-slate-300 mt-1">
                  {isEn ? 'Bags, Watches, Apparel & Hampers' : 'Tas, Jam, Busana & Hampers'}
                </div>
              </div>
            </a>
          </div>

          {/* 4 Architectural Key Facts Row (100% Aligned with Page 2 of v8.0) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-slate-200/80 mt-8 text-left">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 border-l-4 border-l-sky-600">
              <div className="text-xl font-extrabold text-corporate-navy">2022</div>
              <div className="text-xs font-bold text-slate-700 mt-1">
                {isEn ? 'Year Established' : 'Tahun Pendirian'}
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                {isEn ? 'Bekasi, West Java' : 'Bekasi, Jawa Barat'}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 border-l-4 border-l-emerald-600">
              <div className="text-xl font-extrabold text-corporate-navy">
                {isEn ? 'Up to 1,000' : 'Up to 1.000'}
              </div>
              <div className="text-xs font-bold text-slate-700 mt-1">
                {isEn ? 'Portions / Day Capacity' : 'Porsi Kapasitas / Hari'}
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                {isEn ? 'Catering & event snacks' : 'Katering & kudapan acara'}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 border-l-4 border-l-amber-500">
              <div className="text-xl font-extrabold text-corporate-navy">100% Halal</div>
              <div className="text-xs font-bold text-slate-700 mt-1">
                {isEn ? 'BPJPH RI Certified' : 'Tersertifikasi BPJPH RI'}
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                {company.legalities.halalBpjph}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 border-l-4 border-l-corporate-navy">
              <div className="text-xl font-extrabold text-corporate-navy">Google Play</div>
              <div className="text-xs font-bold text-slate-700 mt-1">
                {isEn ? 'Supporting Tech App' : 'Dukungan Aplikasi Tech'}
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                id.easycatering.app
              </div>
            </div>
          </div>

          {/* Official 8-Logo Strip (100% Matching Page 2 .trust-strip-box of v8.0) */}
          <div className="pt-4">
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-slate-500 text-center mb-3.5">
                {isEn
                  ? 'OFFICIALLY LICENSED, CERTIFIED & AFFILIATED WITH NATIONAL MINISTRIES & ENTREPRENEUR ECOSYSTEMS'
                  : 'TERDAFTAR, TERSERTIFIKASI & TERGABUNG DALAM EKOSISTEM RESMI PEMERINTAH & KOMUNITAS WIRAUSAHA'}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 items-center">
                {stripLogos.map((item) => (
                  <div
                    key={item.id}
                    className="h-12 px-2.5 py-1.5 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-2xs"
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
