import React, { useState } from 'react';
import { Menu, X, MessageCircle, ChevronRight, FileText, Globe } from 'lucide-react';
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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-corporate-border transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Corporate Logo */}
          <div 
            onClick={() => handleNavClick()} 
            className="cursor-pointer shrink-0"
          >
            <CorporateLogo />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-6 text-sm font-semibold text-corporate-slate">
            <button 
              onClick={() => handleNavClick()}
              className={`hover:text-sky-700 transition-colors ${activeView === 'home' ? 'text-sky-700' : ''}`}
            >
              {isEn ? 'Home' : 'Beranda'}
            </button>
            <button 
              onClick={() => handleNavClick('tentang')}
              className="hover:text-sky-700 transition-colors"
            >
              {isEn ? 'About & Leadership' : 'Tentang & CEO'}
            </button>
            <button 
              onClick={() => handleNavClick('lini-bisnis')}
              className="hover:text-sky-700 transition-colors"
            >
              {isEn ? 'Business Units' : 'Lini Bisnis'}
            </button>
            <button 
              onClick={handleProductsClick}
              className={`px-3 py-1.5 rounded-lg border transition-all flex items-center space-x-1.5 ${
                activeView === 'products'
                  ? 'bg-sky-50 text-sky-800 border-sky-300 font-bold'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <span>{isEn ? 'Product Catalog & Estimator' : 'Katalog & Layanan Produk'}</span>
              <ChevronRight className="w-3.5 h-3.5 text-sky-600" />
            </button>
            <button 
              onClick={() => handleNavClick('kontak')}
              className="hover:text-sky-700 transition-colors"
            >
              {isEn ? 'Contact Us' : 'Hubungi Kami'}
            </button>
          </nav>

          {/* Language Switcher + Company Profile Booklet + WhatsApp CTA */}
          <div className="hidden md:flex items-center space-x-2.5">
            {/* Instant Bilingual Toggle (ID | EN) */}
            <div
              className="inline-flex items-center rounded-xl bg-slate-100 p-1 border border-slate-200"
              role="group"
              aria-label="Language Switcher"
            >
              <button
                type="button"
                onClick={() => setLang('id')}
                className={`px-2.5 py-1 rounded-lg text-xs font-extrabold transition-all flex items-center space-x-1 ${
                  lang === 'id'
                    ? 'bg-corporate-navy text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>🇮🇩</span>
                <span>ID</span>
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-lg text-xs font-extrabold transition-all flex items-center space-x-1 ${
                  lang === 'en'
                    ? 'bg-sky-700 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Globe className="w-3 h-3" />
                <span>EN</span>
              </button>
            </div>

            {/* Official Company Profile v7.0 Booklet Button */}
            <a
              href={companyProfileHref}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 text-xs font-bold rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 transition-all flex items-center space-x-1.5"
              title={isEn ? 'Open / Download Official Bilingual Company Profile (A4 PDF Booklet)' : 'Buka / Unduh Company Profile Resmi Bilingual (A4 PDF Booklet)'}
            >
              <FileText className="w-3.5 h-3.5 text-emerald-700" />
              <span>{isEn ? 'Company Profile (PDF)' : 'Company Profile (PDF)'}</span>
            </a>

            {/* Business WhatsApp CTA */}
            <a
              href={`https://wa.me/${company.contacts.whatsapp.replace(/[^0-9]/g, '')}?text=${
                isEn
                  ? 'Hello%20PT%20Kizy%20Barakah%20Orbis,%20I%20would%20like%20to%20consult%20regarding%20your%20corporate%20services.'
                  : 'Halo%20PT%20Kizy%20Barakah%20Orbis,%20saya%20ingin%20berkonsultasi%20mengenai%20layanan%20perusahaan.'
              }`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl bg-corporate-navy hover:bg-slate-800 text-white shadow-sm transition-all flex items-center space-x-1.5"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>{isEn ? 'Business Inquiry' : 'Konsultasi Bisnis'}</span>
            </a>
          </div>

          {/* Mobile Language Toggle & Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <div className="inline-flex items-center rounded-lg bg-slate-100 p-0.5 border border-slate-200">
              <button
                type="button"
                onClick={() => setLang('id')}
                className={`px-2 py-1 rounded-md text-[11px] font-extrabold ${
                  lang === 'id' ? 'bg-corporate-navy text-white' : 'text-slate-600'
                }`}
              >
                🇮🇩 ID
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2 py-1 rounded-md text-[11px] font-extrabold ${
                  lang === 'en' ? 'bg-sky-700 text-white' : 'text-slate-600'
                }`}
              >
                🌐 EN
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-corporate-border px-4 pt-3 pb-6 space-y-3">
          <button 
            onClick={() => handleNavClick()}
            className="block w-full text-left py-2 font-semibold text-slate-800"
          >
            {isEn ? 'Home' : 'Beranda'}
          </button>
          <button 
            onClick={() => handleNavClick('tentang')}
            className="block w-full text-left py-2 font-semibold text-slate-800"
          >
            {isEn ? 'About & CEO Message' : 'Tentang Kami & Sambutan CEO'}
          </button>
          <button 
            onClick={() => handleNavClick('lini-bisnis')}
            className="block w-full text-left py-2 font-semibold text-slate-800"
          >
            {isEn ? 'Business Units & Ecosystem' : 'Lini Bisnis & Ekosistem'}
          </button>
          <button 
            onClick={handleProductsClick}
            className="block w-full text-left py-2.5 px-3 bg-sky-50 rounded-lg font-bold text-sky-800"
          >
            {isEn ? 'Full Product Catalog & Budget Simulator' : 'Katalog & Layanan Produk (Lengkap)'}
          </button>
          <button 
            onClick={() => handleNavClick('kontak')}
            className="block w-full text-left py-2 font-semibold text-slate-800"
          >
            {isEn ? 'Contact Us' : 'Hubungi Kami'}
          </button>
          <div className="pt-2 border-t border-slate-100 space-y-2">
            <a
              href={companyProfileHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 w-full text-center py-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 font-bold text-xs uppercase tracking-wider"
            >
              <FileText className="w-4 h-4 text-emerald-700" />
              <span>{isEn ? 'Download Company Profile v8.0 (ID/EN)' : 'Buka / Unduh Company Profile v8.0'}</span>
            </a>
            <a
              href={`https://wa.me/${company.contacts.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-2.5 rounded-xl bg-corporate-navy text-white font-bold text-xs uppercase tracking-wider"
            >
              {isEn ? 'WhatsApp Business Desk' : 'WhatsApp Konsultasi'}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
