import React, { useState, useMemo } from 'react';
import { 
  UtensilsCrossed, 
  Cookie, 
  Gem, 
  Search, 
  Check, 
  ShieldCheck, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { BusinessPillar, ProductItem, PillarType } from '../types';

interface PillarsSectionProps {
  pillars: BusinessPillar[];
  products: ProductItem[];
  onSelectProductForInquiry: (product: ProductItem) => void;
}

export const PillarsSection: React.FC<PillarsSectionProps> = ({
  pillars,
  products,
  onSelectProductForInquiry
}) => {
  const [selectedPillar, setSelectedPillar] = useState<PillarType>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Extract available categories based on current pillar selection
  const availableCategories = useMemo(() => {
    if (selectedPillar === 'all') {
      const allCats = Array.from(new Set(products.map(p => p.category)));
      return ['all', ...allCats];
    }
    const filteredCats = Array.from(
      new Set(products.filter(p => p.pillarId === selectedPillar).map(p => p.category))
    );
    return ['all', ...filteredCats];
  }, [selectedPillar, products]);

  // Reset category filter if not in available
  const handlePillarChange = (pillarId: PillarType) => {
    setSelectedPillar(pillarId);
    setSelectedCategory('all');
  };

  // Filtered products list based on search, pillar, and category
  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchesPillar = selectedPillar === 'all' || p.pillarId === selectedPillar;
      const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
      const matchesSearch = searchQuery.trim() === '' || 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.badges.some(b => b.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesPillar && matchesCategory && matchesSearch;
    });
  }, [products, selectedPillar, selectedCategory, searchQuery]);

  return (
    <section id="pilar-bisnis" className="py-20 bg-corporate-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-barakah-700 bg-barakah-100 px-3 py-1 rounded-full border border-barakah-300">
            <Sparkles className="w-3.5 h-3.5 text-barakah-600" />
            <span>PORTOFOLIO STRATEGIS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-corporate-navy tracking-tight">
            3 Pilar Bisnis PT Kizy Barakah Orbis
          </h2>
          <p className="text-corporate-slate text-base sm:text-lg">
            Sinergi harmonis antara jasa boga berskala besar, manufaktur pangan khas nusantara berstandar halal, dan kurasi gaya hidup mewah terpercaya.
          </p>
        </div>

        {/* 3 Pillar Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {pillars.map((pillar) => {
            const isSelected = selectedPillar === pillar.id;
            return (
              <div
                key={pillar.id}
                onClick={() => handlePillarChange(pillar.id)}
                className={`cursor-pointer rounded-2xl p-6 transition-all border text-left relative overflow-hidden ${
                  isSelected
                    ? 'bg-white border-sky-500 shadow-lg shadow-sky-500/10 ring-2 ring-sky-500/20'
                    : 'bg-white/80 border-corporate-border hover:border-slate-300 hover:shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    pillar.id === 'culinary' 
                      ? 'bg-sky-100 text-sky-600'
                      : pillar.id === 'snacks'
                      ? 'bg-barakah-100 text-barakah-700'
                      : 'bg-purple-100 text-purple-700'
                  }`}>
                    {pillar.id === 'culinary' && <UtensilsCrossed className="w-6 h-6" />}
                    {pillar.id === 'snacks' && <Cookie className="w-6 h-6" />}
                    {pillar.id === 'luxury' && <Gem className="w-6 h-6" />}
                  </div>

                  <span className="text-[11px] font-mono px-2 py-1 bg-slate-100 text-slate-600 rounded font-semibold">
                    KBLI {pillar.kbliCodes[0]}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-corporate-navy mb-1">{pillar.name}</h3>
                <p className="text-xs text-sky-700 font-semibold mb-2">{pillar.subtitle}</p>
                <p className="text-xs text-corporate-slate leading-relaxed mb-4 line-clamp-2">
                  {pillar.description}
                </p>

                <div className="flex items-center text-xs font-semibold text-sky-600">
                  <span>{isSelected ? 'Sedang Ditampilkan' : 'Klik untuk Filter Portofolio'}</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Data Manipulation Toolbar: Tabs & Search Filter */}
        <div className="glass-panel p-4 sm:p-6 rounded-2xl border border-corporate-border mb-8 space-y-4">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Pillar Selector Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => handlePillarChange('all')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedPillar === 'all'
                    ? 'bg-corporate-navy text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Semua Pilar
              </button>
              <button
                onClick={() => handlePillarChange('culinary')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center space-x-1.5 ${
                  selectedPillar === 'culinary'
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'bg-sky-50 text-sky-700 hover:bg-sky-100'
                }`}
              >
                <UtensilsCrossed className="w-4 h-4" />
                <span>Catering Makan Besar</span>
              </button>
              <button
                onClick={() => handlePillarChange('snacks')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center space-x-1.5 ${
                  selectedPillar === 'snacks'
                    ? 'bg-barakah-600 text-white shadow-sm'
                    : 'bg-barakah-50 text-barakah-700 hover:bg-barakah-100'
                }`}
              >
                <Cookie className="w-4 h-4" />
                <span>Pempek Kizy &amp; Snacks</span>
              </button>
              <button
                onClick={() => handlePillarChange('luxury')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center space-x-1.5 ${
                  selectedPillar === 'luxury'
                    ? 'bg-purple-700 text-white shadow-sm'
                    : 'bg-purple-50 text-purple-700 hover:bg-purple-100'
                }`}
              >
                <Gem className="w-4 h-4" />
                <span>Luxury Branded Retail</span>
              </button>
            </div>

            {/* Live Search Input */}
            <div className="relative w-full lg:w-72">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari menu, snack, arloji..."
                className="w-full pl-10 pr-4 py-2 text-sm bg-white rounded-xl border border-corporate-border focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Sub-Category Pills */}
          {availableCategories.length > 2 && (
            <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-slate-400 mr-2">Filter Kategori:</span>
              {availableCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-sky-100 text-sky-800 font-semibold border border-sky-300'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {cat === 'all' ? 'Semua Kategori' : cat}
                </button>
              ))}
            </div>
          )}

        </div>

        {/* Products & Services Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-corporate-border">
            <p className="text-slate-500 text-base">Tidak ada produk atau layanan yang cocok dengan filter pencarian.</p>
            <button
              onClick={() => {
                setSelectedPillar('all');
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-sky-600 hover:underline"
            >
              Reset Semua Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-corporate-border overflow-hidden hover:shadow-xl hover:border-slate-300 transition-all flex flex-col group"
              >
                {/* Product Image & Badges */}
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {product.badges.map((badge, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-slate-800 shadow-xs border border-white/50"
                      >
                        {badge}
                      </span>
                    ))}
                    {product.halalCertified && (
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-barakah-600 text-white shadow-xs">
                        Halal
                      </span>
                    )}
                    {product.authenticityGuaranteed && (
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-sky-600 text-white shadow-xs">
                        100% Authentic
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-white text-[11px] font-medium">
                    {product.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h4 className="text-lg font-bold text-corporate-navy group-hover:text-sky-600 transition-colors leading-snug">
                      {product.name}
                    </h4>
                    <p className="text-xs text-sky-700 font-medium mt-1 mb-2">
                      {product.tagline}
                    </p>
                    <p className="text-xs text-corporate-slate leading-relaxed line-clamp-3">
                      {product.description}
                    </p>
                  </div>

                  {/* Specifications */}
                  {product.specifications && (
                    <div className="pt-3 border-t border-slate-100 space-y-1">
                      {product.specifications.slice(0, 3).map((spec, sidx) => (
                        <div key={sidx} className="flex items-center text-[11px] text-slate-600 space-x-1.5">
                          <Check className="w-3.5 h-3.5 text-barakah-600 shrink-0" />
                          <span className="truncate">{spec}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Pricing & CTA */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">Harga Resmi</div>
                      <div className="text-base font-extrabold text-corporate-navy">
                        {product.priceFormatted}
                      </div>
                      <div className="text-[10px] text-slate-500">{product.unit}</div>
                    </div>

                    <button
                      onClick={() => onSelectProductForInquiry(product)}
                      className="px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-sky-600 to-sky-700 text-white hover:from-sky-500 hover:to-sky-600 shadow-sm shadow-sky-600/20 transition-all flex items-center space-x-1"
                    >
                      <span>Inquiry / Pesan</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
