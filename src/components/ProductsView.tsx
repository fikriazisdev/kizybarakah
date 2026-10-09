import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, 
  Search, 
  UtensilsCrossed, 
  Cookie, 
  ShoppingBag, 
  Check, 
  MessageCircle,
  Calculator
} from 'lucide-react';
import { ProductItem, CompanyProfile, PillarType } from '../types';
import { EstimatorSection } from './EstimatorSection';

interface ProductsViewProps {
  company: CompanyProfile;
  products: ProductItem[];
  onBackToHome: () => void;
  onSelectProductForInquiry: (product: ProductItem) => void;
}

export const ProductsView: React.FC<ProductsViewProps> = ({
  company,
  products,
  onBackToHome,
  onSelectProductForInquiry
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'culinary' | 'snacks' | 'luxury'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchPillar = selectedFilter === 'all' || p.pillarId === selectedFilter;
      const matchSearch = searchQuery.trim() === '' || 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase());
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
            <span>Kembali ke Beranda Profil</span>
          </button>

          <span className="text-xs font-medium text-slate-500">
            Total Produk &amp; Layanan: <strong>{products.length}</strong>
          </span>
        </div>

        {/* Header Title */}
        <div className="max-w-3xl mb-10 space-y-2">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-sky-800 bg-sky-100 px-3 py-1 rounded-full border border-sky-200">
            <span>KATALOG LENGKAP PRODUK &amp; LAYANAN</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-corporate-navy tracking-tight">
            Katalog Layanan &amp; Penawaran PT Kizy Barakah Orbis
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Eksplorasi portofolio lengkap paket katering makan besar, produk pangan olahan Pempek Kizy, serta kurasi produk gaya hidup terkurasi.
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
              Semua Layanan ({products.length})
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
              <span>Jasa Boga &amp; Katering</span>
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
              <span>Pempek Kizy &amp; Snacks</span>
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
              <span>Portofolio Retail (Other)</span>
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari produk / paket..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-corporate-border rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
            />
          </div>

        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white p-12 text-center rounded-2xl border border-corporate-border">
            <p className="text-slate-500 text-sm">Tidak ditemukan produk yang sesuai dengan kriteria filter.</p>
            <button
              onClick={() => { setSelectedFilter('all'); setSearchQuery(''); }}
              className="mt-3 text-xs font-bold text-sky-700 hover:underline"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-corporate-border overflow-hidden hover:border-slate-300 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-52 overflow-hidden bg-slate-100">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                      {product.badges.map((b, bi) => (
                        <span key={bi} className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-white/95 text-slate-800 shadow-xs">
                          {b}
                        </span>
                      ))}
                      {product.halalCertified && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-700 text-white shadow-xs">
                          Halal
                        </span>
                      )}
                      {product.authenticityGuaranteed && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-900 text-white shadow-xs">
                          100% Authentic
                        </span>
                      )}
                    </div>

                    <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs text-white text-[10px] font-medium">
                      {product.category}
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 space-y-3">
                    <div>
                      <h3 className="text-base font-bold text-corporate-navy leading-snug">
                        {product.name}
                      </h3>
                      <p className="text-xs text-sky-700 font-semibold mt-0.5">
                        {product.tagline}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {product.description}
                    </p>

                    {/* Specs List */}
                    {product.specifications && (
                      <div className="pt-2 space-y-1">
                        {product.specifications.slice(0, 3).map((spec, si) => (
                          <div key={si} className="flex items-center text-[11px] text-slate-600 space-x-1.5">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span className="truncate">{spec}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Pricing & Order CTA */}
                <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between">
                  <div className="pt-4">
                    <div className="text-[10px] uppercase font-bold text-slate-400">Harga Resmi</div>
                    <div className="text-base font-extrabold text-corporate-navy">{product.priceFormatted}</div>
                    <div className="text-[10px] text-slate-500">{product.unit}</div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => onSelectProductForInquiry(product)}
                      className="px-4 py-2 rounded-xl text-xs font-bold bg-corporate-navy hover:bg-slate-800 text-white transition-all flex items-center space-x-1.5 shadow-xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Inquiry / Order</span>
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* CATERING BUDGET ESTIMATOR (MOVED TO THIS PRODUCTS PAGE) */}
        <div className="border-t-2 border-slate-200 pt-16">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-slate-700 bg-white px-3.5 py-1 rounded-full border border-slate-200 mb-2">
              <Calculator className="w-3.5 h-3.5 text-sky-700" />
              <span>SIMULASI LAYANAN JASA BOGA</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-corporate-navy">
              Kalkulator Estimasi Anggaran Katering &amp; Jamuan
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Gunakan simulator di bawah untuk menghitung perkiraan kebutuhan porsi dan anggaran jamuan acara Anda secara transparan.
            </p>
          </div>

          <EstimatorSection company={company} />
        </div>

      </div>
    </div>
  );
};
