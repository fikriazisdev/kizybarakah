import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, 
  Search, 
  UtensilsCrossed, 
  Cookie, 
  ShoppingBag, 
  Check, 
  MessageCircle,
  Calculator,
  ExternalLink
} from 'lucide-react';
import { ProductItem, CompanyProfile, LangType } from '../types';
import { EstimatorSection } from './EstimatorSection';

interface ProductsViewProps {
  company: CompanyProfile;
  products: ProductItem[];
  lang: LangType;
  onBackToHome: () => void;
  onSelectProductForInquiry: (product: ProductItem) => void;
}

export const ProductsView: React.FC<ProductsViewProps> = ({
  company,
  products,
  lang,
  onBackToHome,
  onSelectProductForInquiry
}) => {
  const isEn = lang === 'en';
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'culinary' | 'snacks' | 'luxury'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchPillar = selectedFilter === 'all' || p.pillarId === selectedFilter;
      const q = searchQuery.toLowerCase();
      const matchSearch = q.trim() === '' || 
        p.name.toLowerCase().includes(q) ||
        (p.nameEn && p.nameEn.toLowerCase().includes(q)) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        (p.descriptionEn && p.descriptionEn.toLowerCase().includes(q));
      return matchPillar && matchSearch;
    });
  }, [products, selectedFilter, searchQuery]);

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Bar Back */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center space-x-2 text-xs font-bold text-slate-600 hover:text-corporate-navy bg-white px-4 py-2 rounded-xl border border-corporate-border shadow-xs transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{isEn ? 'Back to Corporate Profile' : 'Kembali ke Beranda Profil'}</span>
          </button>

          <span className="text-xs font-medium text-slate-500">
            {isEn ? 'Total Products & Services:' : 'Total Produk & Layanan:'} <strong>{products.length}</strong>
          </span>
        </div>

        {/* Header Title */}
        <div className="max-w-3xl mb-10 space-y-2">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-sky-800 bg-sky-100 px-3 py-1 rounded-full border border-sky-200">
            <span>{isEn ? 'PRODUCT & SERVICE CATALOG' : 'KATALOG LENGKAP PRODUK & LAYANAN'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-corporate-navy tracking-tight">
            {isEn
              ? 'PT Kizy Barakah Orbis Product & Service Portfolio'
              : 'Katalog Layanan & Produk Resmi PT Kizy Barakah Orbis'}
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {isEn
              ? 'Explore our two core F&B lines—Pempek Kizy (100% Fresh Tenggiri Fish) and PesenSamaSarah Catering & Snack (Up to 1,000 Portions/Day)—alongside our PesenSamaSarah Curated Retail collection.'
              : 'Eksplorasi portofolio lengkap dua bisnis utama F&B kami—Pempek Kizy (100% Ikan Tenggiri Segar Pilihan) dan PesenSamaSarah Catering & Snack (Up to 1.000 Porsi/Hari)—serta lini pendukung PesenSamaSarah Curated Retail.'}
          </p>
        </div>

        {/* Data Manipulation Toolbar: Filter Buttons + Search Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-corporate-border mb-10 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedFilter === 'all'
                  ? 'bg-corporate-navy text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {isEn ? `All Units (${products.length})` : `Semua Layanan (${products.length})`}
            </button>

            <button
              onClick={() => setSelectedFilter('snacks')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
                selectedFilter === 'snacks'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
              }`}
            >
              <Cookie className="w-3.5 h-3.5" />
              <span>{isEn ? '01. Pempek Kizy (@pempek_kizy)' : '01. Pempek Kizy (@pempek_kizy)'}</span>
            </button>

            <button
              onClick={() => setSelectedFilter('culinary')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
                selectedFilter === 'culinary'
                  ? 'bg-sky-700 text-white shadow-xs'
                  : 'bg-sky-50 text-sky-800 hover:bg-sky-100'
              }`}
            >
              <UtensilsCrossed className="w-3.5 h-3.5" />
              <span>{isEn ? '02. Catering & Snack (@pesensamasarah)' : '02. Katering & Snack (@pesensamasarah)'}</span>
            </button>

            <button
              onClick={() => setSelectedFilter('luxury')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
                selectedFilter === 'luxury'
                  ? 'bg-slate-800 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>{isEn ? '03. Curated Retail (Other Line)' : '03. Curated Retail (Lini Pendukung)'}</span>
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isEn ? 'Search product or package...' : 'Cari produk / paket...'}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-corporate-border rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
            />
          </div>

        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white p-12 text-center rounded-2xl border border-corporate-border">
            <p className="text-slate-500 text-sm">
              {isEn ? 'No products matched your filter criteria.' : 'Tidak ditemukan produk yang sesuai dengan kriteria filter.'}
            </p>
            <button
              onClick={() => { setSelectedFilter('all'); setSearchQuery(''); }}
              className="mt-3 text-xs font-bold text-sky-700 hover:underline"
            >
              {isEn ? 'Reset Filter' : 'Reset Filter'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredProducts.map((product) => {
              const title = isEn && product.nameEn ? product.nameEn : product.name;
              const tagline = isEn && product.taglineEn ? product.taglineEn : product.tagline;
              const desc = isEn && product.descriptionEn ? product.descriptionEn : product.description;
              const unit = isEn && product.unitEn ? product.unitEn : product.unit;
              const badges = isEn && product.badgesEn ? product.badgesEn : product.badges;
              const specs = isEn && product.specificationsEn ? product.specificationsEn : product.specifications;

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl border border-corporate-border overflow-hidden hover:border-slate-300 hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Image Container */}
                    <div className="relative h-56 overflow-hidden bg-slate-100">
                      <img
                        src={product.imageUrl}
                        alt={title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                        {badges.map((b, bi) => (
                          <span key={bi} className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-white/95 text-slate-800 shadow-xs">
                            {b}
                          </span>
                        ))}
                        {product.halalCertified && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-700 text-white shadow-xs">
                            Halal BPJPH
                          </span>
                        )}
                        {product.authenticityGuaranteed && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-900 text-white shadow-xs">
                            100% Authentic
                          </span>
                        )}
                      </div>

                      <div className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded bg-black/70 backdrop-blur-xs text-white text-[10px] font-semibold">
                        {isEn && product.categoryEn ? product.categoryEn : product.category}
                      </div>
                    </div>

                    {/* Body Info */}
                    <div className="p-6 space-y-3">
                      <div>
                        <h3 className="text-base font-bold text-corporate-navy leading-snug">
                          {title}
                        </h3>
                        <p className="text-xs text-sky-700 font-semibold mt-0.5">
                          {tagline}
                        </p>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed">
                        {desc}
                      </p>

                      {/* Specs List */}
                      {specs && (
                        <div className="pt-2 space-y-1.5">
                          {specs.map((spec, si) => (
                            <div key={si} className="flex items-center text-[11px] text-slate-600 space-x-1.5">
                              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                              <span>{spec}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Pricing & Order CTA */}
                  <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between gap-2">
                    <div className="pt-4">
                      <div className="text-[10px] uppercase font-bold text-slate-400">
                        {isEn ? 'Reference Price' : 'Harga Referensi'}
                      </div>
                      <div className="text-base font-extrabold text-corporate-navy">{product.priceFormatted}</div>
                      <div className="text-[10px] text-slate-500">{unit}</div>
                    </div>

                    <div className="pt-4 flex items-center space-x-2">
                      {product.externalUrl && (
                        <a
                          href={product.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl border border-slate-200 text-slate-600 hover:text-corporate-navy hover:bg-slate-50 transition-all"
                          title={isEn ? 'Open Official Channel' : 'Buka Kanal Resmi'}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      <button
                        onClick={() => onSelectProductForInquiry(product)}
                        className="px-4 py-2 rounded-xl text-xs font-bold bg-corporate-navy hover:bg-slate-800 text-white transition-all flex items-center space-x-1.5 shadow-xs"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{isEn ? 'Inquire / Order' : 'Pesan / Inquiry'}</span>
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* CATERING BUDGET ESTIMATOR */}
        <div className="border-t-2 border-slate-200 pt-16">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-slate-700 bg-white px-3.5 py-1 rounded-full border border-slate-200 mb-2">
              <Calculator className="w-3.5 h-3.5 text-sky-700" />
              <span>{isEn ? 'CATERING & SNACK BUDGET SIMULATOR' : 'SIMULASI LAYANAN JASA BOGA (UP TO 1.000 PORSI/HARI)'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-corporate-navy">
              {isEn
                ? 'Catering & Event Hospitality Budget Estimator'
                : 'Kalkulator Estimasi Anggaran Katering & Jamuan'}
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              {isEn
                ? 'Simulate your portion count (up to 1,000 portions/day) and menu combination before submitting a formal quotation request via WhatsApp.'
                : 'Gunakan simulator di bawah untuk menghitung perkiraan kebutuhan porsi (kapasitas up to 1.000 porsi/hari) dan anggaran jamuan acara Anda secara transparan.'}
            </p>
          </div>

          <EstimatorSection company={company} lang={lang} />
        </div>

      </div>
    </div>
  );
};
