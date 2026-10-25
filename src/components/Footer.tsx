import React from 'react';
import { Mail, Phone, MapPin, ShieldCheck, ExternalLink, FileText, Globe } from 'lucide-react';
import { CorporateLogo } from './CorporateLogo';
import { CompanyProfile, LangType } from '../types';
import { officialAffiliations } from '../data/companyData';
import { InstagramOriginalLogo, GooglePlayOriginalLogo } from './BrandChannelIcons';

interface FooterProps {
  company: CompanyProfile;
  lang: LangType;
  setLang: (lang: LangType) => void;
  onOpenAdmin: () => void;
  onOpenProducts: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  company, 
  lang,
  setLang,
  onOpenAdmin,
  onOpenProducts
}) => {
  const isEn = lang === 'en';
  const companyProfileHref = company.contacts.companyProfileUrl || '/company-profile.html';
  const stripLogos = officialAffiliations.filter((a) => a.showInStrip !== false);

  return (
    <footer className="bg-corporate-navy text-slate-400 text-xs sm:text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand Info & Verified Legalities (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <CorporateLogo variant="dark" />

            <p className="text-slate-300 text-xs leading-relaxed max-w-md">
              {isEn && company.shortDescEn ? company.shortDescEn : company.shortDesc}
            </p>

            <div className="pt-2 space-y-1.5 text-xs text-slate-300">
              <div className="flex items-start space-x-2">
                <Globe className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  {isEn ? (
                    <>
                      Pempek Kizy: <strong className="text-white">Routinely Exported to Singapore 🇸🇬</strong> (Prior shipping experience: Australia, Dubai &amp; Saudi Arabia)
                    </>
                  ) : (
                    <>
                      Pempek Kizy: <strong className="text-white">Rutin Diekspor ke Singapura 🇸🇬</strong> (Pernah dikirim ke: Australia, Dubai &amp; Arab Saudi)
                    </>
                  )}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>NIB OSS BKPM RI: <strong className="text-white font-mono">{company.legalities.nib}</strong> (API-P)</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{isEn ? 'Standard Cert (KBLI 10750):' : 'Sertifikat Standar (KBLI 10750):'} <strong className="text-white font-mono">30122200352040001</strong></span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Halal BPJPH RI: <strong className="text-white font-mono">{company.legalities.halalBpjph}</strong> (KF-SD-202307081042)</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={companyProfileHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 font-bold text-xs transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>
                  {isEn
                    ? 'Open / Download Company Profile (PDF)'
                    : 'Buka / Unduh Company Profile (PDF)'}
                </span>
              </a>
            </div>
          </div>

          {/* Lini Usaha & Ekosistem Digital (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-white font-bold text-xs tracking-wider uppercase">
              {isEn ? 'Business Units & Digital Ecosystem' : 'Lini Bisnis & Ekosistem Digital'}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="https://www.instagram.com/pempek_kizy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center space-x-2"
                >
                  <InstagramOriginalLogo className="w-4 h-4 shrink-0" />
                  <span>
                    {isEn
                      ? '01. Pempek Kizy (@pempek_kizy) — 100% Authentic Tenggiri Fish'
                      : '01. Pempek Kizy (@pempek_kizy) — 100% Ikan Tenggiri Asli'}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/pesensamasarah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center space-x-2"
                >
                  <InstagramOriginalLogo className="w-4 h-4 shrink-0" />
                  <span>
                    {isEn
                      ? '02. PesenSamaSarah Catering & Snack (Up to 1,000 Portions/Day)'
                      : '02. PesenSamaSarah Catering & Snack (Up to 1.000 Porsi/Hari)'}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=id.easycatering.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center space-x-2"
                >
                  <GooglePlayOriginalLogo className="w-4 h-4 shrink-0" />
                  <span>
                    {isEn
                      ? 'EasyCatering Mobile App (Google Play: id.easycatering.app)'
                      : 'Aplikasi Mobile EasyCatering (Google Play: id.easycatering.app)'}
                  </span>
                </a>
              </li>
              <li>
                <button onClick={onOpenProducts} className="hover:text-white transition-colors text-left flex items-center space-x-2">
                  <Globe className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>
                    {isEn
                      ? '03. PesenSamaSarah Curated Retail & VIP Hampers'
                      : '03. PesenSamaSarah Curated Retail & Hampers VIP'}
                  </span>
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Office (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs tracking-wider uppercase">
              {isEn ? 'Headquarters & Contact' : 'Kantor Pusat & Kontak'}
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-semibold">{company.contacts.address}</div>
                  <div className="text-slate-400">{company.contacts.city}</div>
                </div>
              </div>

              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${company.contacts.email}`} className="text-slate-300 hover:text-white">
                  {company.contacts.email}
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <a
                  href={`https://wa.me/${company.contacts.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-200 font-semibold hover:text-white"
                >
                  {company.contacts.phone}
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <Globe className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="https://kizybarakah.id" className="text-sky-400 font-bold hover:underline">
                  kizybarakah.id
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Backcover 8-Logo Official Affiliations Bar (100% Matching Page 10 of v8.0) */}
        <div className="mb-10 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
          <div className="text-[9.5px] font-extrabold uppercase tracking-[0.14em] text-slate-400 text-center">
            {isEn
              ? 'OFFICIAL LICENSING, NATIONAL MINISTRIES & ENTREPRENEUR ECOSYSTEM AFFILIATIONS'
              : 'MITRA EKOSISTEM, KOMUNITAS WIRAUSAHA & LISENSI RESMI PERUSAHAAN KAMI'}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 items-center">
            {stripLogos.map((item) => (
              <div
                key={item.id}
                className="h-11 px-2.5 py-1.5 rounded-xl bg-white border border-slate-200 flex items-center justify-center"
                title={isEn ? `${item.titleEn} — ${item.descEn}` : `${item.titleId} — ${item.descId}`}
              >
                <img
                  src={item.logoUrl}
                  alt={isEn ? item.titleEn : item.titleId}
                  className="max-h-7 max-w-full w-auto h-auto object-contain block"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar with Language Switcher & Discreet Admin Access */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500">
            &copy; {company.legalEntity} · NIB {company.legalities.nib} · Halal BPJPH RI {company.legalities.halalBpjph}
          </p>

          <div className="flex items-center space-x-4 text-slate-500">
            <button
              onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
              className="text-slate-400 hover:text-white font-semibold transition-colors"
            >
              {lang === 'id' ? '🌐 Switch to English' : '🇮🇩 Ganti ke Bahasa Indonesia'}
            </button>
            <span>•</span>
            <button
              onClick={onOpenAdmin}
              className="text-slate-500 hover:text-slate-300 transition-colors flex items-center space-x-1"
            >
              <span>Admin Console</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
