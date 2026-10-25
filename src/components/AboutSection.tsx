import React, { useState } from 'react';
import {
  Target,
  CheckCircle2,
  ShieldCheck,
  Quote,
  ExternalLink,
  Award,
  FileCheck,
  Sparkles,
  Handshake,
  Globe,
  UtensilsCrossed,
  ShoppingBag,
  Smartphone,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { CompanyProfile, LangType } from '../types';
import { officialAffiliations } from '../data/companyData';

interface AboutSectionProps {
  company: CompanyProfile;
  lang: LangType;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ company, lang }) => {
  const isEn = lang === 'en';
  const ceo = company.ceo;
  const [showFullLetter, setShowFullLetter] = useState(false);

  const missionCards = isEn
    ? [
        {
          num: '01',
          icon: ShieldCheck,
          accent: 'border-t-emerald-600 bg-emerald-50/50',
          iconBg: 'bg-emerald-700 text-white',
          badge: 'HALAL & EXPORT QUALITY',
          title: 'Hygienic & Halal Food Manufacturing',
          desc: 'Delivering 100% fresh Tenggiri fish delicacies and authentic Nusantara cuisine under strict BPJPH RI Halal standards.'
        },
        {
          num: '02',
          icon: Smartphone,
          accent: 'border-t-sky-600 bg-sky-50/50',
          iconBg: 'bg-sky-700 text-white',
          badge: 'UP TO 1,000 PORTIONS/DAY',
          title: 'Tech-Enabled Catering & Event Hospitality',
          desc: 'Providing reliable buffet catering, meal boxes, and snacks supported by the EasyCatering mobile app on Google Play.'
        },
        {
          num: '03',
          icon: ShoppingBag,
          accent: 'border-t-amber-500 bg-amber-50/50',
          iconBg: 'bg-amber-600 text-white',
          badge: '100% AUTHENTIC SELECTION',
          title: 'Trusted Curated Lifestyle Retail',
          desc: 'Presenting authentic branded bags, watches, contemporary apparel, and VIP corporate hampers via @pesensamasarah.'
        },
        {
          num: '04',
          icon: Handshake,
          accent: 'border-t-slate-800 bg-slate-50',
          iconBg: 'bg-corporate-navy text-white',
          badge: 'B2B & GLOBAL NETWORK',
          title: 'Sustainable B2B & Export Partnerships',
          desc: 'Expanding domestic Horeca/reseller distribution and international export reach through SME & entrepreneur ecosystems.'
        }
      ]
    : [
        {
          num: '01',
          icon: ShieldCheck,
          accent: 'border-t-emerald-600 bg-emerald-50/50',
          iconBg: 'bg-emerald-700 text-white',
          badge: 'MUTU HALAL & EKSPOR',
          title: 'Manufaktur Pangan Higienis & Halal',
          desc: 'Menghadirkan olahan 100% Ikan Tenggiri segar pilihan dan sajian Nusantara berstandar Halal BPJPH RI yang konsisten.'
        },
        {
          num: '02',
          icon: Smartphone,
          accent: 'border-t-sky-600 bg-sky-50/50',
          iconBg: 'bg-sky-700 text-white',
          badge: 'UP TO 1.000 PORSI/HARI',
          title: 'Layanan Boga Berbasis Teknologi',
          desc: 'Melayani katering prasmanan, nasi kotak, dan snack acara tepat waktu dengan dukungan aplikasi mobile EasyCatering.'
        },
        {
          num: '03',
          icon: ShoppingBag,
          accent: 'border-t-amber-500 bg-amber-50/50',
          iconBg: 'bg-amber-600 text-white',
          badge: 'JAMINAN 100% ORISINAL',
          title: 'Ritel Gaya Hidup & Hampers Terkurasi',
          desc: 'Menyediakan koleksi tas kulit, jam tangan, busana bermerek, dan hampers eksekutif orisinal melalui @pesensamasarah.'
        },
        {
          num: '04',
          icon: Handshake,
          accent: 'border-t-slate-800 bg-slate-50',
          iconBg: 'bg-corporate-navy text-white',
          badge: 'KEMITRAAN B2B & GLOBAL',
          title: 'Kemitraan B2B & Ekspansi Berkelanjutan',
          desc: 'Memperluas jaringan reseller, korporasi, dan pasar ekspor bersama ekosistem UMKM Naik Kelas, Dekranasda, TDA & LinkUMKM.'
        }
      ];

  const coreValueStyles = [
    {
      Icon: ShieldCheck,
      topBar: 'from-emerald-400 to-teal-500',
      iconBox: 'from-emerald-500 to-emerald-700 shadow-emerald-500/25',
      pillText: isEn ? 'HALAL & LEGALITY' : 'KEPATUHAN & AMANAH',
      pillClass: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30'
    },
    {
      Icon: Award,
      topBar: 'from-sky-400 to-blue-500',
      iconBox: 'from-sky-500 to-sky-700 shadow-sky-500/25',
      pillText: isEn ? '100% AUTHENTIC QUALITY' : '100% BAHAN PILIHAN',
      pillClass: 'bg-sky-500/20 text-sky-300 border-sky-400/30'
    },
    {
      Icon: Sparkles,
      topBar: 'from-amber-400 to-yellow-500',
      iconBox: 'from-amber-500 to-amber-700 shadow-amber-500/25',
      pillText: isEn ? 'TECH & PRECISION' : 'INOVASI & PRESISI',
      pillClass: 'bg-amber-500/20 text-amber-300 border-amber-400/30'
    },
    {
      Icon: Handshake,
      topBar: 'from-teal-400 to-sky-400',
      iconBox: 'from-teal-500 to-sky-700 shadow-teal-500/25',
      pillText: isEn ? 'MUTUAL GROWTH' : 'TUMBUH BERSAMA',
      pillClass: 'bg-teal-500/20 text-teal-300 border-teal-400/30'
    }
  ];

  return (
    <section id="tentang" className="py-20 bg-slate-100/80 border-b border-corporate-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header — Concise & Non-Repetitive (Eliminates Duplicate 5-Line Intro Paragraph) */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-extrabold uppercase tracking-wider text-sky-900 bg-sky-100/80 px-4 py-1.5 rounded-full border border-sky-200">
            <Award className="w-3.5 h-3.5 text-sky-700" />
            <span>{isEn ? 'CORPORATE OVERVIEW & EXECUTIVE LEADERSHIP' : 'PROFIL KORPORAT & KEPEMIMPINAN EKSEKUTIF'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-corporate-navy tracking-tight">
            {isEn
              ? 'Building a Trusted Indonesian Culinary & Catering Hospitality Enterprise'
              : 'Membangun Ekosistem Kuliner Nusantara & Layanan Jasa Boga yang Terpercaya'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            {isEn
              ? 'Headquartered in Bekasi, West Java, backed by official national licensing, BPJPH RI Halal assurance, and an active international export footprint.'
              : 'Berpusat di Kota Bekasi, Jawa Barat, dengan landasan perizinan nasional lengkap, jaminan Halal BPJPH RI, serta rekam jejak ekspor internasional.'}
          </p>
        </div>

        {/* Executive Leadership: Founder & CEO Message (Scannable Visual Pillars + Expandable Full Letter) */}
        {ceo && (
          <div className="rounded-3xl bg-white border-2 border-slate-200/90 shadow-lg p-6 sm:p-10 relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#060D1A] via-sky-700 to-emerald-600" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              
              {/* Left Column: Self-Contained Executive Portrait Card (0px Gap) */}
              <div className="lg:col-span-4 rounded-2xl overflow-hidden bg-corporate-navy text-white shadow-xl border border-slate-800">
                <div className="relative w-full h-80 sm:h-96 lg:h-80 bg-slate-900 overflow-hidden">
                  <img
                    src={ceo.photoUrl}
                    alt={`${ceo.name} — ${isEn ? ceo.roleEn : ceo.roleId}`}
                    className="w-full h-full object-cover object-top block"
                  />
                </div>

                {/* CEO Portrait Meta Box Directly Below Image (0px Gap) */}
                <div className="p-6 bg-gradient-to-br from-[#060D1A] via-corporate-navy to-[#062822] border-t border-white/10">
                  <span className="inline-block px-2.5 py-0.5 rounded bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-[10px] font-extrabold uppercase tracking-widest mb-1.5">
                    {isEn ? 'FOUNDER & CEO' : 'FOUNDER & CEO'}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">{ceo.name}</h3>
                  <p className="text-xs font-bold text-sky-300 mt-1">
                    {isEn ? ceo.roleEn : ceo.roleId}
                  </p>
                  <p className="text-xs text-slate-300 mt-0.5">{company.name}</p>

                  <div className="mt-4 pt-4 border-t border-white/15 space-y-2">
                    <div className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                      {isEn ? 'OFFICIAL BRAND CHANNELS' : 'KANAL BRAND RESMI'}
                    </div>
                    <div className="space-y-1.5 text-xs">
                      <a
                        href="https://www.instagram.com/pempek_kizy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between text-emerald-300 hover:text-white font-semibold transition-colors"
                      >
                        <span>• @pempek_kizy</span>
                        <ExternalLink className="w-3.5 h-3.5 opacity-75" />
                      </a>
                      <a
                        href="https://www.instagram.com/pesensamasarah"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between text-sky-300 hover:text-white font-semibold transition-colors"
                      >
                        <span>• @pesensamasarah</span>
                        <ExternalLink className="w-3.5 h-3.5 opacity-75" />
                      </a>
                      <a
                        href="https://play.google.com/store/apps/details?id=id.easycatering.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between text-amber-300 hover:text-white font-semibold transition-colors"
                      >
                        <span>• EasyCatering (Google Play)</span>
                        <ExternalLink className="w-3.5 h-3.5 opacity-75" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: High-Impact Pullquote + Scannable 3-Pillar Visual Highlights */}
              <div className="lg:col-span-8 flex flex-col justify-between space-y-5">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 block">
                        {isEn ? 'EXECUTIVE LEADERSHIP MESSAGE' : 'SAMBUTAN PIMPINAN EKSEKUTIF'}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-corporate-navy mt-0.5">
                        {isEn ? 'Message from Our Founder & Chief Executive Officer' : 'Sambutan Founder & Chief Executive Officer'}
                      </h3>
                    </div>
                    <div className="w-11 h-11 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center shrink-0">
                      <Quote className="w-5 h-5 text-sky-700" />
                    </div>
                  </div>

                  {/* Pullquote Banner */}
                  <blockquote className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#060D1A] via-corporate-navy to-[#062822] text-white font-bold italic text-sm sm:text-base leading-relaxed shadow-sm border-l-4 border-l-emerald-400">
                    “{isEn ? ceo.quoteEn : ceo.quoteId}”
                  </blockquote>

                  {/* Greeting & Concise Core Opening */}
                  <div className="text-sm font-extrabold text-corporate-navy">
                    {isEn ? ceo.greetingEn : ceo.greetingId}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {(isEn ? ceo.paragraphsEn : ceo.paragraphsId)[0]}
                  </p>

                  {/* 3 Scannable Visual Highlight Cards (Replaces Dense Wall of Text) */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-1">
                    {/* Highlight 1: Pempek Kizy & Export */}
                    <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-1.5">
                      <div className="flex items-center space-x-2 text-emerald-800 font-extrabold text-xs">
                        <Globe className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{isEn ? '01. Pempek Kizy Export' : '01. Ekspor Pempek Kizy'}</span>
                      </div>
                      <p className="text-[11.5px] text-slate-700 leading-snug">
                        {isEn ? (
                          <>
                            <strong>100% fresh Tenggiri fish</strong>, Halal BPJPH RI certified, <strong>routinely exported to Singapore 🇸🇬</strong> with prior shipping experience to <strong>Australia, Dubai &amp; Saudi Arabia</strong>.
                          </>
                        ) : (
                          <>
                            Berbahan <strong>100% Ikan Tenggiri segar</strong> bersertifikat Halal BPJPH RI, <strong>rutin diekspor ke Singapura 🇸🇬</strong> &amp; pernah dikirim ke <strong>Australia, Dubai &amp; Arab Saudi</strong>.
                          </>
                        )}
                      </p>
                    </div>

                    {/* Highlight 2: PesenSamaSarah Catering & EasyCatering */}
                    <div className="p-4 rounded-xl bg-sky-50/70 border border-sky-200 space-y-1.5">
                      <div className="flex items-center space-x-2 text-sky-900 font-extrabold text-xs">
                        <UtensilsCrossed className="w-4 h-4 text-sky-600 shrink-0" />
                        <span>{isEn ? '02. Catering & Tech App' : '02. Katering & Aplikasi'}</span>
                      </div>
                      <p className="text-[11.5px] text-slate-700 leading-snug">
                        {isEn ? (
                          <>
                            <strong>PesenSamaSarah Catering &amp; Snack</strong> serves <strong>up to 1,000 portions/day</strong> (Buffet, Meal Box, Dimsum &amp; Kue Tampah), powered by <strong>EasyCatering</strong> on Google Play.
                          </>
                        ) : (
                          <>
                            <strong>PesenSamaSarah Catering &amp; Snack</strong> berkapasitas <strong>up to 1.000 porsi/hari</strong>, didukung aplikasi <strong>EasyCatering</strong> di Google Play Store.
                          </>
                        )}
                      </p>
                    </div>

                    {/* Highlight 3: Curated Retail & National Ecosystem */}
                    <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 space-y-1.5">
                      <div className="flex items-center space-x-2 text-amber-900 font-extrabold text-xs">
                        <ShoppingBag className="w-4 h-4 text-amber-600 shrink-0" />
                        <span>{isEn ? '03. Retail & Ecosystem' : '03. Ritel & Jejaring'}</span>
                      </div>
                      <p className="text-[11.5px] text-slate-700 leading-snug">
                        {isEn ? (
                          <>
                            Complemented by <strong>Curated Retail</strong> (bags, watches, apparel) and active in <strong>UMKM Naik Kelas, Dekranasda Bekasi, TDA &amp; LinkUMKM</strong>.
                          </>
                        ) : (
                          <>
                            Dilengkapi lini <strong>Curated Retail</strong> serta aktif di jejaring <strong>UMKM Naik Kelas, Dekranasda Bekasi, Komunitas TDA &amp; LinkUMKM</strong>.
                          </>
                        )}
                      </p>
                    </div>
                  </div>

                  {/* Expandable Full Verbatim Letter Toggle (Preserves 100% of v8.0 Text Without Eye Fatigue) */}
                  {showFullLetter && (
                    <div className="space-y-3 pt-2 border-t border-slate-200/80 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {(isEn ? ceo.paragraphsEn : ceo.paragraphsId).slice(1).map((para, idx) => (
                        <p key={idx}>{para}</p>
                      ))}
                    </div>
                  )}

                  <div>
                    <button
                      type="button"
                      onClick={() => setShowFullLetter(!showFullLetter)}
                      className="inline-flex items-center space-x-1.5 text-xs font-extrabold text-sky-700 hover:text-sky-900 transition-colors"
                    >
                      <span>
                        {showFullLetter
                          ? isEn
                            ? 'Hide Full Verbatim CEO Letter'
                            : 'Ringkas Tampilan Sambutan CEO'
                          : isEn
                          ? 'Read Complete Verbatim CEO Letter (v8.0 Text)'
                          : 'Baca Teks Lengkap Sambutan CEO (Versi Utuh v8.0)'}
                      </span>
                      {showFullLetter ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Signature & Booklet CTA Footer */}
                <div className="pt-5 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-xs text-slate-500">{isEn ? 'Sincerely,' : 'Hormat kami,'}</div>
                    <div className="text-base font-extrabold text-corporate-navy mt-0.5">{ceo.name}</div>
                    <div className="text-xs font-bold text-sky-700">
                      {isEn ? ceo.roleEn : ceo.roleId}, {company.name}
                    </div>
                  </div>
                  <a
                    href={company.contacts.companyProfileUrl || '/company-profile-v8.html'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-emerald-950 hover:bg-emerald-900 text-white font-bold text-xs transition-all shadow-xs"
                  >
                    <FileCheck className="w-4 h-4 text-emerald-400" />
                    <span>{isEn ? 'Open Bilingual Booklet (v8.0 PDF)' : 'Buka Booklet Company Profile (v8.0 PDF)'}</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Vision & 2x2 Scannable Mission Cards Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Vision Box (Deep Navy & Emerald Gradient) */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-gradient-to-br from-[#060D1A] via-corporate-navy to-[#062822] text-white shadow-xl flex flex-col justify-between border border-slate-800">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-11 h-11 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-300 shadow-inner">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400 block">
                      {isEn ? 'STRATEGIC DIRECTION' : 'ARAH STRATEGIS KORPORAT'}
                    </span>
                    <h3 className="text-xl font-black tracking-tight text-white">
                      {isEn ? 'Our Corporate Vision' : 'Visi Perusahaan Kami'}
                    </h3>
                  </div>
                </div>
              </div>

              <p className="text-slate-100 text-base sm:text-lg leading-relaxed font-semibold mb-8 p-5 rounded-2xl bg-white/[0.06] border border-white/10">
                “{isEn && company.visionEn ? company.visionEn : company.vision}”
              </p>
            </div>

            {/* Verified Regulatory Compliance Pills */}
            <div className="pt-5 border-t border-white/15 space-y-3">
              <div className="flex items-center space-x-2 text-xs font-extrabold tracking-wide text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span>{isEn ? 'VERIFIED NATIONAL LICENSING & HALAL ASSURANCE' : 'LANDASAN PERIZINAN & SERTIFIKASI HALAL RESMI'}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px]">
                <div className="p-2.5 rounded-xl bg-white/[0.06] border border-white/10">
                  <div className="text-slate-400 font-bold">NIB OSS RI</div>
                  <div className="text-white font-mono font-extrabold mt-0.5">{company.legalities.nib}</div>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.06] border border-white/10">
                  <div className="text-slate-400 font-bold">KEMENPERIN</div>
                  <div className="text-sky-300 font-extrabold mt-0.5">KBLI 10750</div>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.06] border border-white/10">
                  <div className="text-slate-400 font-bold">HALAL BPJPH</div>
                  <div className="text-emerald-300 font-mono font-extrabold mt-0.5">ID32110005...</div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Core Missions — Redesigned into a Scannable 2x2 Visual Icon Grid */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-white border-2 border-slate-200/90 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
                <div className="flex items-center space-x-3">
                  <div className="w-11 h-11 rounded-xl bg-emerald-700 text-white flex items-center justify-center shadow-md shadow-emerald-700/20">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-700 block">
                      {isEn ? '4 OPERATIONAL PILLARS' : '4 PILAR MISI OPERASIONAL'}
                    </span>
                    <h3 className="text-xl font-black text-corporate-navy tracking-tight">
                      {isEn ? 'Our Four Core Missions' : 'Empat Misi Utama Perusahaan Kami'}
                    </h3>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-extrabold">
                  {isEn ? 'Capacity: Up to 1,000 Portions/Day' : 'Kapasitas: Up to 1.000 Porsi/Hari'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {missionCards.map((m) => {
                  const IconComponent = m.icon;
                  return (
                    <div
                      key={m.num}
                      className={`p-4 rounded-2xl border border-slate-200 border-t-4 ${m.accent} hover:shadow-sm transition-all flex flex-col justify-between`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2.5">
                          <div className={`w-9 h-9 rounded-xl ${m.iconBg} flex items-center justify-center shadow-xs`}>
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">
                            {m.badge}
                          </span>
                        </div>
                        <h4 className="text-sm font-extrabold text-corporate-navy mb-1">
                          {m.num}. {m.title}
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {m.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600 font-medium">
              <span>
                {isEn
                  ? 'Operations Hub: Kawasan Wisma Jaya, Kusuma Utara, East Bekasi'
                  : 'Pusat Operasional: Kawasan Wisma Jaya, Kusuma Utara, Bekasi Timur'}
              </span>
              <span className="font-extrabold text-sky-800">
                {isEn ? '100% Aligned with Company Profile v8.0' : '100% Selaras Standar Company Profile v8.0'}
              </span>
            </div>
          </div>
        </div>

        {/* 4 Core Values — Compelling High-Contrast Architectural Showcase Band (Critique 3 Resolved) */}
        <div className="rounded-3xl bg-gradient-to-br from-[#060D1A] via-[#0F172A] to-[#062822] p-8 sm:p-10 text-white shadow-xl border border-slate-800 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div>
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-[11px] font-extrabold uppercase tracking-widest mb-2.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{isEn ? 'CORPORATE CULTURE & WORK ETHOS' : '4 PILAR BUDAYA KERJA & ETOS KORPORAT'}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  {isEn ? 'Corporate Core Values' : 'Nilai Dasar Budaya Kerja (Corporate Core Values)'}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md">
                {isEn
                  ? 'Four non-negotiable principles guiding every batch of food manufacturing, event catering service, and curated retail product we deliver.'
                  : 'Empat prinsip utama yang menjaga standar kualitas manufaktur pangan, ketepatan layanan katering, dan keaslian ritel PT Kizy Barakah Orbis.'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {company.values.map((val, idx) => {
                const style = coreValueStyles[idx % coreValueStyles.length];
                const ValueIcon = style.Icon;
                return (
                  <div
                    key={idx}
                    className="relative overflow-hidden rounded-2xl bg-white/[0.06] hover:bg-white/[0.10] border border-white/15 p-6 transition-all group flex flex-col justify-between"
                  >
                    {/* Vibrant Top Color Bar */}
                    <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${style.topBar}`} />

                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div
                          className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${style.iconBox} text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform`}
                        >
                          <ValueIcon className="w-6 h-6" />
                        </div>
                        <span className="text-3xl font-black text-white/15 tracking-tighter select-none">
                          0{idx + 1}
                        </span>
                      </div>

                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-md text-[10px] font-extrabold uppercase tracking-wider border mb-2.5 ${style.pillClass}`}
                      >
                        {style.pillText}
                      </span>

                      <h4 className="text-base font-extrabold text-white mb-2 leading-snug">
                        {isEn && val.titleEn ? val.titleEn : val.title}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {isEn && val.descriptionEn ? val.descriptionEn : val.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 9-Card Official SME Empowerment, Entrepreneur Community & Regulatory Standards (Page 9 of v8.0) */}
        <div className="rounded-3xl bg-white border-2 border-slate-200/90 p-6 sm:p-8 shadow-md">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
            <div className="space-y-1">
              <div className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-700">
                {isEn
                  ? 'OFFICIAL SME EMPOWERMENT, ENTREPRENEUR COMMUNITY & REGULATORY STANDARDS'
                  : 'JEJARING EKOSISTEM PEMBINAAN UMKM, KOMUNITAS WIRAUSAHA & REGULASI NASIONAL'}
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-corporate-navy">
                {isEn
                  ? '9 Verified Institutional & Entrepreneur Ecosystem Affiliations'
                  : '9 Afiliasi Resmi Kementerian, Sertifikasi Mutu & Komunitas Wirausaha'}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-extrabold">
              <span className="px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200">
                UMKM Naik Kelas
              </span>
              <span className="px-3 py-1 rounded-lg bg-sky-50 text-sky-800 border border-sky-200">
                Dekranasda Kota Bekasi
              </span>
              <span className="px-3 py-1 rounded-lg bg-amber-50 text-amber-900 border border-amber-200">
                Komunitas TDA
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-800 border border-slate-300">
                LinkUMKM
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {officialAffiliations.map((item) => (
              <div
                key={item.id}
                className="flex items-center space-x-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-sky-300 hover:bg-white transition-all shadow-2xs"
              >
                <div className="w-14 h-12 rounded-xl bg-white border border-slate-200 p-1.5 flex items-center justify-center shrink-0 shadow-2xs">
                  <img
                    src={item.logoUrl}
                    alt={isEn ? item.titleEn : item.titleId}
                    className="max-h-full max-w-full w-auto h-auto object-contain block"
                  />
                </div>
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm font-extrabold text-corporate-navy leading-snug truncate">
                    {isEn ? item.titleEn : item.titleId}
                  </div>
                  <div className="text-[11px] text-slate-600 mt-0.5 leading-snug line-clamp-2">
                    {isEn ? item.descEn : item.descId}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
