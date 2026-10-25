import React, { useState } from 'react';
import { Menu, X, MessageCircle, FileText, Globe, ShieldCheck, Sparkles, ShoppingBag } from 'lucide-react';
import { CorporateLogo } from './CorporateLogo';
import { CompanyProfile, LangType } from '../types';

interface NavbarProps {
  company: CompanyProfile;
  lang: LangType;
  setLang: (lang: LangType) => void;
  activeView: 'home' | 'products';
  setActiveView: (view: 'home' | 'products') => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  company,
  lang,
  setLang,
  activeView,
  setActiveView,
  onNavigateSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isEn = lang === 'en';

  const handleNavClick = (sectionId?: string) => {
    setMobileMenuOpen(false);
    if (!sectionId) {
      setActiveView('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (activeView !== 'home') {
        setActiveView('home');
        setTimeout(() => onNavigateSection(sectionId), 150);
      } else {
        onNavigateSection(sectionId);
      }
    }
  };

  const handleProductsClick = () => {
    setMobileMenuOpen(false);
    setActiveView('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const companyProfileHref = company.contacts.companyProfileUrl || '/company-profile-v8.html';

  return (
    <header className="sticky top-0 z-50 shadow-sm">
      {/* Tier 1: Executive Credential & Utility Top Bar (Eliminates Main Navbar Crowding) */}
      <div className="bg-[#060D1A] text-slate-300 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between text-[11px]">
          {/* Left: Official Licensing & Export Status */}
          <div className="flex items-center space-x-4 overflow-x-auto no-scrollbar whitespace-nowrap">
            <span className="inline-flex items-center space-x-1.5 text-emerald-400 font-bold">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              <span>HALAL BPJPH RI: {company.legalities.halalBpjph}</span>
            </span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="hidden sm:inline-flex items-center space-x-1.5 text-sky-300 font-semibold">
              <span>NIB OSS: {company.legalities.nib}</span>
            </span>
            <span className="text-slate-600 hidden lg:inline">|</span>
            <span className="hidden lg:inline-flex items-center space-x-1.5 text-amber-300 font-semibold">
              <Sparkles className="w-3 h-3 shrink-0" />
              <span>
                {isEn
                  ? 'Pempek Kizy: Routinely Exported to Singapore 🇸🇬'
                  : 'Pempek Kizy: Rutin Diekspor ke Singapura 🇸🇬'}
              </span>
            </span>
          </div>

          {/* Right: Booklet PDF Download & Instant Bilingual Switcher */}
          <div className="flex items-center space-x-3 shrink-0">
            <a
              href={companyProfileHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 font-bold transition-all whitespace-nowrap"
              title={isEn ? 'Open / Download Official Bilingual Company Profile v8.0 (PDF)' : 'Buka / Unduh Company Profile Resmi v8.0 (PDF)'}
            >
              <FileText className="w-3 h-3 text-emerald-400" />
              <span>{isEn ? 'Company Profile v8.0 (PDF)' : 'Company Profile v8.0 (PDF)'}</span>
            </a>

            {/* Bilingual Toggle */}
            <div
              className="inline-flex items-center rounded-lg bg-slate-900 p-0.5 border border-slate-700"
              role="group"
              aria-label="Language Switcher"
            >
              <button
                type="button"
                onClick={() => setLang('id')}
                className={`px-2 py-0.5 rounded-md text-[10px] font-extrabold transition-all flex items-center space-x-1 whitespace-nowrap ${
                  lang === 'id'
                    ? 'bg-sky-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>🇮🇩</span>
                <span>ID</span>
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2 py-0.5 rounded-md text-[10px] font-extrabold transition-all flex items-center space-x-1 whitespace-nowrap ${
                  lang === 'en'
                    ? 'bg-sky-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Globe className="w-2.5 h-2.5" />
                <span>EN</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tier 2: Spacious Single-Line Main Navigation Bar */}
      <div className="bg-white/95 backdrop-blur-md border-b border-slate-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            
            {/* Corporate Logo */}
            <div 
              onClick={() => handleNavClick()} 
              className="cursor-pointer shrink-0"
            >
              <CorporateLogo />
            </div>

            {/* Desktop Navigation Links — Strictly Single-Line (whitespace-nowrap) */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm font-bold text-slate-700">
              <button 
                onClick={() => handleNavClick()}
                className={`px-3.5 py-2 rounded-xl transition-all whitespace-nowrap ${
                  activeView === 'home'
                    ? 'text-sky-700 bg-sky-50/80 font-extrabold'
                    : 'hover:text-corporate-navy hover:bg-slate-50'
                }`}
              >
                {isEn ? 'Home' : 'Beranda'}
              </button>
              <button 
                onClick={() => handleNavClick('tentang')}
                className="px-3.5 py-2 rounded-xl hover:text-corporate-navy hover:bg-slate-50 transition-all whitespace-nowrap"
              >
                {isEn ? 'About & CEO' : 'Tentang & CEO'}
              </button>
              <button 
                onClick={() => handleNavClick('lini-bisnis')}
                className="px-3.5 py-2 rounded-xl hover:text-corporate-navy hover:bg-slate-50 transition-all whitespace-nowrap"
              >
                {isEn ? 'Business Units' : 'Lini Bisnis'}
              </button>
              <button 
                onClick={() => handleNavClick('kontak')}
                className="px-3.5 py-2 rounded-xl hover:text-corporate-navy hover:bg-slate-50 transition-all whitespace-nowrap"
              >
                {isEn ? 'Contact' : 'Hubungi Kami'}
              </button>
            </nav>

            {/* Right Action CTAs — Spacious & Non-Wrapping */}
            <div className="hidden md:flex items-center space-x-3 shrink-0">
              <button
                onClick={handleProductsClick}
                className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all flex items-center space-x-2 whitespace-nowrap border ${
                  activeView === 'products'
                    ? 'bg-sky-700 text-white border-sky-700 shadow-md shadow-sky-700/20'
                    : 'bg-sky-50 hover:bg-sky-100 text-sky-900 border-sky-200'
                }`}
              >
                <ShoppingBag className="w-4 h-4 text-sky-600 shrink-0" />
                <span>{isEn ? 'Product Catalog & Simulator' : 'Katalog & Simulasi'}</span>
              </button>

              <a
                href={`https://wa.me/${company.contacts.whatsapp.replace(/[^0-9]/g, '')}?text=${
                  isEn
                    ? 'Hello%20PT%20Kizy%20Barakah%20Orbis,%20I%20would%20like%20to%20consult%20regarding%20your%20corporate%20services.'
                    : 'Halo%20PT%20Kizy%20Barakah%20Orbis,%20saya%20ingin%20berkonsultasi%20mengenai%20layanan%20perusahaan.'
                }`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider rounded-xl bg-gradient-to-r from-[#060D1A] via-corporate-navy to-emerald-900 hover:from-slate-900 hover:to-emerald-800 text-white shadow-md shadow-slate-900/15 transition-all flex items-center space-x-2 whitespace-nowrap border border-emerald-500/30"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{isEn ? 'Business Inquiry' : 'Konsultasi Bisnis'}</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 border border-slate-200"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-corporate-border px-4 pt-3 pb-6 space-y-2.5 shadow-xl">
          <button 
            onClick={() => handleNavClick()}
            className="block w-full text-left py-2.5 px-3 rounded-lg font-bold text-slate-800 hover:bg-slate-50"
          >
            {isEn ? 'Home' : 'Beranda'}
          </button>
          <button 
            onClick={() => handleNavClick('tentang')}
            className="block w-full text-left py-2.5 px-3 rounded-lg font-bold text-slate-800 hover:bg-slate-50"
          >
            {isEn ? 'About & CEO Message' : 'Tentang Kami & Sambutan CEO'}
          </button>
          <button 
            onClick={() => handleNavClick('lini-bisnis')}
            className="block w-full text-left py-2.5 px-3 rounded-lg font-bold text-slate-800 hover:bg-slate-50"
          >
            {isEn ? 'Business Units & Ecosystem' : 'Lini Bisnis & Ekosistem'}
          </button>
          <button 
            onClick={handleProductsClick}
            className="block w-full text-left py-3 px-3 bg-sky-50 border border-sky-200 rounded-xl font-extrabold text-sky-900"
          >
            {isEn ? 'Product Catalog & Budget Simulator' : 'Buka Katalog & Simulasi Produk'}
          </button>
          <button 
            onClick={() => handleNavClick('kontak')}
            className="block w-full text-left py-2.5 px-3 rounded-lg font-bold text-slate-800 hover:bg-slate-50"
          >
            {isEn ? 'Contact Us' : 'Hubungi Kami'}
          </button>
          <div className="pt-3 border-t border-slate-100 space-y-2.5">
            <a
              href={companyProfileHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 w-full text-center py-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 font-extrabold text-xs uppercase tracking-wider"
            >
              <FileText className="w-4 h-4 text-emerald-700" />
              <span>{isEn ? 'Company Profile v8.0 (PDF)' : 'Company Profile v8.0 (PDF)'}</span>
            </a>
            <a
              href={`https://wa.me/${company.contacts.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 w-full text-center py-3 rounded-xl bg-corporate-navy text-white font-extrabold text-xs uppercase tracking-wider"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>{isEn ? 'WhatsApp Business Desk' : 'Konsultasi Bisnis via WhatsApp'}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
