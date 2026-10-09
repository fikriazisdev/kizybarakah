import React from 'react';
import { Mail, Phone, MapPin, ShieldCheck, ExternalLink } from 'lucide-react';
import { CorporateLogo } from './CorporateLogo';
import { CompanyProfile } from '../types';

interface FooterProps {
  company: CompanyProfile;
  onOpenAdmin: () => void;
  onOpenProducts: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  company, 
  onOpenAdmin,
  onOpenProducts,
  onNavigateSection
}) => {
  return (
    <footer className="bg-corporate-navy text-slate-400 text-xs sm:text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <CorporateLogo variant="dark" />

            <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
              {company.shortDesc}
            </p>

            <div className="pt-2 space-y-1.5 text-xs text-slate-400">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>NIB OSS: <strong className="text-white font-mono">{company.legalities.nib}</strong></span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                <span>SK Kemenkumham: <strong className="text-white font-mono">{company.legalities.skKemenkumham}</strong></span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Halal BPJPH &amp; Dinkes P-IRT Terdaftar</span>
              </div>
            </div>
          </div>

          {/* Lini Usaha Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs tracking-wider uppercase">Lini Bisnis &amp; Layanan</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={onOpenProducts} className="hover:text-white transition-colors text-left">
                  Jasa Boga &amp; Katering Jamuan Acara
                </button>
              </li>
              <li>
                <button onClick={onOpenProducts} className="hover:text-white transition-colors text-left">
                  Produksi Pempek Kizy Asli Palembang
                </button>
              </li>
              <li>
                <button onClick={onOpenProducts} className="hover:text-white transition-colors text-left">
                  Artisan Potato Chips &amp; Kue Tradisional
                </button>
              </li>
              <li>
                <button onClick={onOpenProducts} className="hover:text-white transition-colors text-left">
                  Portofolio Perdagangan Retail Terkurasi
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Office (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-white font-bold text-xs tracking-wider uppercase">Kantor Operasional</h4>
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
                <span className="text-slate-300 font-semibold">{company.contacts.phone}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Discreet Admin Access */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500">
            &copy; 2026 {company.legalEntity}. Seluruh hak cipta dilindungi undang-undang.
          </p>

          <div className="flex items-center space-x-4 text-slate-500">
            <span>Bekasi, Jawa Barat</span>
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
