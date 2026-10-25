import React from 'react';
import { Target, CheckCircle2, ShieldCheck, Quote, ExternalLink, Award, FileCheck } from 'lucide-react';
import { CompanyProfile, LangType } from '../types';
import { officialAffiliations } from '../data/companyData';

interface AboutSectionProps {
  company: CompanyProfile;
  lang: LangType;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ company, lang }) => {
  const isEn = lang === 'en';
  const ceo = company.ceo;
  const missions = isEn && company.missionEn ? company.missionEn : company.mission;

  return (
    <section id="tentang" className="py-20 bg-slate-50 border-b border-corporate-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header (Exact Wording from Page 2 of v8.0) */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-slate-700 bg-white px-3.5 py-1 rounded-full border border-slate-200">
            <span>{isEn ? 'CORPORATE OVERVIEW · ESTABLISHED IN 2022' : 'PROFIL KORPORAT · BERDIRI SEJAK 2022'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-corporate-navy tracking-tight">
            {isEn
              ? 'Building a Trusted Indonesian Culinary & Catering Hospitality Enterprise'
              : 'Membangun Ekosistem Kuliner Nusantara & Layanan Jasa Boga yang Terpercaya'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {isEn && company.shortDescEn ? company.shortDescEn : company.shortDesc}
          </p>
        </div>

        {/* Executive Leadership: Founder & CEO Message (100% Matching Page 3 .ceo-full-spread & .ceo-portrait-card of v8.0) */}
        {ceo && (
          <div className="rounded-3xl bg-white border border-corporate-border shadow-md p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              
              {/* Left Column: Self-Contained Executive Portrait Card (Zero Empty Navy Gap, Proportional Portrait) */}
              <div className="lg:col-span-4 rounded-2xl overflow-hidden bg-corporate-navy text-white shadow-xl border border-slate-800">
                <div className="relative w-full h-80 sm:h-96 lg:h-80 bg-slate-900 overflow-hidden">
                  <img
                    src={ceo.photoUrl}
                    alt={`${ceo.name} — ${isEn ? ceo.roleEn : ceo.roleId}`}
                    className="w-full h-full object-cover object-top block"
                  />
                </div>

                {/* CEO Portrait Meta Box Directly Below Image (0px Gap — Matching Page 3 of v8.0) */}
                <div className="p-6 bg-gradient-to-br from-slate-950 via-corporate-navy to-emerald-950 border-t border-white/10">
                  <span className="inline-block px-2.5 py-0.5 rounded bg-sky-500/20 border border-sky-400/30 text-sky-300 text-[10px] font-extrabold uppercase tracking-widest mb-1.5">
                    {isEn ? 'EXECUTIVE LEADERSHIP' : 'KEPEMIMPINAN EKSEKUTIF'}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">{ceo.name}</h3>
                  <p className="text-xs font-bold text-sky-400 mt-1">
                    {isEn ? ceo.roleEn : ceo.roleId}
                  </p>
                  <p className="text-xs text-slate-300 mt-0.5">{company.name}</p>

                  <div className="mt-4 pt-4 border-t border-white/15 space-y-2">
                    <div className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                      {isEn ? 'OUR BRAND ECOSYSTEM' : 'EKOSISTEM BRAND KAMI'}
                    </div>
                    <div className="space-y-1.5 text-xs">
                      <a
                        href="https://www.instagram.com/pempek_kizy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between text-sky-300 hover:text-emerald-400 font-semibold transition-colors"
                      >
                        <span>• @pempek_kizy</span>
                        <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                      </a>
                      <a
                        href="https://www.instagram.com/pesensamasarah"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between text-sky-300 hover:text-sky-200 font-semibold transition-colors"
                      >
                        <span>• @pesensamasarah</span>
                        <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                      </a>
                      <a
                        href="https://play.google.com/store/apps/details?id=id.easycatering.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between text-sky-300 hover:text-amber-300 font-semibold transition-colors"
                      >
                        <span>• EasyCatering (Google Play)</span>
                        <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: CEO Pullquote & Message (Exact Text from Page 3 of v8.0) */}
              <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-extrabold uppercase tracking-widest text-sky-700 block">
                        {isEn ? 'EXECUTIVE LEADERSHIP' : 'KEPEMIMPINAN EKSEKUTIF'}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-corporate-navy mt-1">
                        {isEn ? 'Message from Our Founder & Chief Executive Officer' : 'Sambutan Founder & Chief Executive Officer'}
                      </h3>
                    </div>
                    <Quote className="w-8 h-8 text-sky-100 shrink-0" />
                  </div>

                  {/* Pullquote */}
                  <blockquote className="p-4 sm:p-5 rounded-xl bg-sky-50/80 border-l-4 border-sky-600 text-corporate-navy font-bold italic text-sm sm:text-base leading-relaxed">
                    “{isEn ? ceo.quoteEn : ceo.quoteId}”
                  </blockquote>

                  <div className="text-sm font-bold text-corporate-navy">
                    {isEn ? ceo.greetingEn : ceo.greetingId}
                  </div>

                  <div className="space-y-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
                    {(isEn ? ceo.paragraphsEn : ceo.paragraphsId).map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-xs text-slate-500">{isEn ? 'Sincerely,' : 'Hormat kami,'}</div>
                    <div className="text-base font-extrabold text-corporate-navy mt-0.5">{ceo.name}</div>
                    <div className="text-xs font-semibold text-sky-700">
                      {isEn ? ceo.roleEn : ceo.roleId}, {company.name}
                    </div>
                  </div>
                  <a
                    href={company.contacts.companyProfileUrl || '/company-profile-v8.html'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-corporate-navy font-bold text-xs transition-all"
                  >
                    <FileCheck className="w-4 h-4 text-emerald-700" />
                    <span>{isEn ? 'Read Full Bilingual Booklet (v8.0)' : 'Baca Booklet Lengkap Company Profile (v8.0)'}</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Vision & Mission Split (Exact Wording from Page 4 of v8.0) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Vision Box */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-corporate-navy text-white shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold tracking-tight">
                  {isEn ? 'Our Corporate Vision' : 'Visi Perusahaan Kami'}
                </h3>
              </div>
              <p className="text-slate-100 text-base sm:text-lg leading-relaxed font-semibold mb-8">
                “{isEn && company.visionEn ? company.visionEn : company.vision}”
              </p>
            </div>

            {/* Subtle Regulatory Compliance Seal */}
            <div className="pt-6 border-t border-slate-700/80 space-y-2">
              <div className="flex items-center space-x-2 text-xs font-bold tracking-wide text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span>{isEn ? 'VERIFIED NATIONAL LICENSING & HALAL ASSURANCE' : 'LANDASAN PERIZINAN & SERTIFIKASI HALAL RESMI'}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isEn
                  ? `Registered under the Ministry of Investment/BKPM RI OSS system (NIB ${company.legalities.nib}), Ministry of Industry RI Standard Certificate (30122200352040001 · KBLI 10750), and BPJPH RI Halal Certification (${company.legalities.halalBpjph}).`
                  : `Terdaftar resmi pada sistem OSS Kementerian Investasi/BKPM RI (NIB ${company.legalities.nib}), Sertifikat Standar Kementerian Perindustrian RI (30122200352040001 · KBLI 10750), serta Sertifikasi Halal BPJPH RI (${company.legalities.halalBpjph}).`}
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
                <h3 className="text-xl font-bold text-corporate-navy tracking-tight">
                  {isEn ? 'Our Four Core Missions' : 'Empat Misi Utama Perusahaan Kami'}
                </h3>
              </div>

              <div className="space-y-4">
                {missions.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3.5">
                    <div className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      0{idx + 1}
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
              <span>
                {isEn
                  ? 'Operations Hub: Kawasan Wisma Jaya, Kusuma Utara, East Bekasi'
                  : 'Pusat Operasional: Kawasan Wisma Jaya, Kusuma Utara, Bekasi Timur'}
              </span>
              <span className="font-bold text-emerald-700">
                {isEn ? 'Capacity: Up to 1,000 Portions / Day' : 'Kapasitas: Up to 1.000 Porsi / Hari'}
              </span>
            </div>
          </div>
        </div>

        {/* 4 Core Values (Exact Wording from Page 4 of v8.0) */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-corporate-navy">
              {isEn ? 'Corporate Core Values' : 'Nilai Dasar Budaya Kerja (Corporate Core Values)'}
            </h3>
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
                <h4 className="text-base font-bold text-corporate-navy mb-2">
                  {isEn && val.titleEn ? val.titleEn : val.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {isEn && val.descriptionEn ? val.descriptionEn : val.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 9-Card Official SME Empowerment, Entrepreneur Community & Regulatory Standards (100% Matching Page 9 of v8.0) */}
        <div className="rounded-2xl bg-white border border-corporate-border p-6 sm:p-8 shadow-xs">
          <div className="max-w-3xl mb-6 space-y-1.5">
            <div className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-700">
              {isEn
                ? 'OFFICIAL SME EMPOWERMENT, ENTREPRENEUR COMMUNITY & REGULATORY STANDARDS'
                : 'JEJARING EKOSISTEM PEMBINAAN UMKM, KOMUNITAS WIRAUSAHA & REGULASI NASIONAL'}
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {isEn ? (
                <>
                  Our company is an active member of Indonesia’s premier business incubation and entrepreneur networks:{' '}
                  <strong>UMKM Naik Kelas</strong>, <strong>Dekranasda (Regional National Crafts Council) of Bekasi City</strong>,{' '}
                  <strong>TDA (Tangan Di Atas) Entrepreneur Community</strong>, and <strong>LinkUMKM</strong>:
                </>
              ) : (
                <>
                  Perusahaan kami tergabung aktif dalam ekosistem kurasi dan pemberdayaan{' '}
                  <strong>UMKM Naik Kelas</strong>, <strong>Dekranasda (Dewan Kerajinan Nasional Daerah) Kota Bekasi</strong>,{' '}
                  <strong>Komunitas Wirausaha TDA (Tangan Di Atas)</strong>, serta <strong>LinkUMKM</strong>:
                </>
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {officialAffiliations.map((item) => (
              <div
                key={item.id}
                className="flex items-center space-x-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all"
              >
                <div className="w-14 h-11 rounded-lg bg-white border border-slate-200 p-1.5 flex items-center justify-center shrink-0">
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
                  <div className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                    {isEn ? item.descEn : item.descId}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Business Licensing & Halal Quality Assurance Banner (Page 9 of v8.0) */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-950 via-corporate-navy to-emerald-950 text-white p-8 shadow-md">
          <div className="flex items-center space-x-2 text-xs font-extrabold uppercase tracking-widest text-sky-400 mb-6 pb-3 border-b border-white/15">
            <Award className="w-4 h-4 text-emerald-400" />
            <span>
              {isEn
                ? 'VERIFIED BUSINESS LICENSING & HALAL QUALITY ASSURANCE'
                : 'LANDASAN PERIZINAN USAHA & SERTIFIKASI MUTU PANGAN RESMI'}
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-1.5">
              <div className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-300">
                NOMOR INDUK BERUSAHA (OSS RI)
              </div>
              <div className="text-lg font-extrabold text-white">NIB: {company.legalities.nib}</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isEn
                  ? 'Ministry of Investment/BKPM RI (30 Dec 2022), complete with API-P & Customs Access.'
                  : 'Kementerian Investasi/BKPM RI (30 Des 2022), mencakup API-P & Hak Akses Kepabeanan.'}
              </p>
            </div>

            <div className="md:border-l md:border-white/15 md:pl-6 space-y-1.5">
              <div className="text-[11px] font-extrabold uppercase tracking-wider text-sky-300">
                {isEn ? 'FOOD INDUSTRY STANDARD' : 'STANDAR INDUSTRI PANGAN'}
              </div>
              <div className="text-lg font-extrabold text-white">
                {isEn ? 'KBLI 10750 Verified' : 'KBLI 10750 Terverifikasi'}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isEn
                  ? 'Ministry of Industry RI Standard Cert. (30122200352040001) Processed Food Industry.'
                  : 'Sertifikat Standar Kemenperin RI (30122200352040001) Industri Makanan & Masakan Olahan.'}
              </p>
            </div>

            <div className="md:border-l md:border-white/15 md:pl-6 space-y-1.5">
              <div className="text-[11px] font-extrabold uppercase tracking-wider text-amber-300">
                {isEn ? 'HALAL CERTIFICATION' : 'SERTIFIKASI HALAL RESMI'}
              </div>
              <div className="text-lg font-extrabold text-white">{company.legalities.halalBpjph}</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isEn
                  ? 'Certified Halal by BPJPH RI (Decree KF-SD-202307081042 dated 13 July 2023).'
                  : 'Tersertifikasi Halal BPJPH RI (Ketetapan KF-SD-202307081042 tanggal 13 Juli 2023).'}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
