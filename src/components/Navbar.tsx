import React, { useState } from 'react';
import { Menu, X, MessageCircle, ChevronRight } from 'lucide-react';
import { CorporateLogo } from './CorporateLogo';
import { CompanyProfile } from '../types';

interface NavbarProps {
  company: CompanyProfile;
  activeView: 'home' | 'products';
  setActiveView: (view: 'home' | 'products') => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  company,
  activeView,
  setActiveView,
  onNavigateSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-corporate-border transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Corporate Logo */}
          <div 
            onClick={() => handleNavClick()} 
            className="cursor-pointer"
          >
            <CorporateLogo />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-semibold text-corporate-slate">
            <button 
              onClick={() => handleNavClick()}
              className={`hover:text-sky-700 transition-colors ${activeView === 'home' ? 'text-sky-700' : ''}`}
            >
              Beranda
            </button>
            <button 
              onClick={() => handleNavClick('tentang')}
              className="hover:text-sky-700 transition-colors"
            >
              Tentang Kami
            </button>
            <button 
              onClick={() => handleNavClick('lini-bisnis')}
              className="hover:text-sky-700 transition-colors"
            >
              Lini Bisnis
            </button>
            <button 
              onClick={handleProductsClick}
              className={`px-3 py-1.5 rounded-lg border transition-all flex items-center space-x-1.5 ${
                activeView === 'products'
                  ? 'bg-sky-50 text-sky-800 border-sky-300 font-bold'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <span>Katalog &amp; Layanan Produk</span>
              <ChevronRight className="w-3.5 h-3.5 text-sky-600" />
            </button>
            <button 
              onClick={() => handleNavClick('kontak')}
              className="hover:text-sky-700 transition-colors"
            >
              Hubungi Kami
            </button>
          </nav>

          {/* Business WhatsApp CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href={`https://wa.me/${company.contacts.whatsapp.replace(/[^0-9]/g, '')}?text=Halo%20PT%20Kizy%20Barakah%20Orbis,%20saya%20ingin%20berkonsultasi%20mengenai%20layanan%20perusahaan.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl bg-corporate-navy hover:bg-slate-800 text-white shadow-sm transition-all flex items-center space-x-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Konsultasi Bisnis</span>
            </a>
          </div>

          {/* Mobile menu toggle button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
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
            Beranda
          </button>
          <button 
            onClick={() => handleNavClick('tentang')}
            className="block w-full text-left py-2 font-semibold text-slate-800"
          >
            Tentang Kami
          </button>
          <button 
            onClick={() => handleNavClick('lini-bisnis')}
            className="block w-full text-left py-2 font-semibold text-slate-800"
          >
            Lini Bisnis &amp; Layanan
          </button>
          <button 
            onClick={handleProductsClick}
            className="block w-full text-left py-2.5 px-3 bg-sky-50 rounded-lg font-bold text-sky-800"
          >
            Katalog &amp; Layanan Produk (Lengkap)
          </button>
          <button 
            onClick={() => handleNavClick('kontak')}
            className="block w-full text-left py-2 font-semibold text-slate-800"
          >
            Hubungi Kami
          </button>
          <div className="pt-2 border-t border-slate-100">
            <a
              href={`https://wa.me/${company.contacts.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-2.5 rounded-xl bg-corporate-navy text-white font-bold text-xs uppercase tracking-wider"
            >
              WhatsApp Konsultasi
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
