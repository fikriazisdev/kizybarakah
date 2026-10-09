import React, { useState, useMemo } from 'react';
import { Calculator, Utensils, CheckSquare, Square, MessageCircle, Info } from 'lucide-react';
import { CompanyProfile } from '../types';

interface EstimatorSectionProps {
  company: CompanyProfile;
}

interface MenuTier {
  id: string;
  name: string;
  pricePerPax: number;
  description: string;
  features: string[];
}

interface AddonItem {
  id: string;
  name: string;
  price: number;
  type: 'per_pax' | 'flat';
  description: string;
}

const MENU_TIERS: MenuTier[] = [
  {
    id: 'box',
    name: 'Nasi Kotak Eksekutif',
    pricePerPax: 45000,
    description: 'Cocok untuk rapat kantor, seminar, konsumsi panitia, dan gathering santai.',
    features: ['Bento box ramah lingkungan', 'Sendok & tisu steril', 'Buah segar & air mineral', 'Menu komplit 4 lauk']
  },
  {
    id: 'buffet_silver',
    name: 'Prasmanan Silver Banquet',
    pricePerPax: 85000,
    description: 'Paket prasmanan ideal untuk syukuran, arisan besar, dan perayaan keluarga.',
    features: ['Set meja buffet & pemanas roll-top', '6 Pilihan menu utama', 'Dessert buah potong', '2 Pramusaji standby']
  },
  {
    id: 'buffet_royal',
    name: 'Prasmanan Royal VIP',
    pricePerPax: 125000,
    description: 'Standar tertinggi jamuan resepsi pernikahan, gala dinner korporasi & kementerian.',
    features: ['Set buffet mewah & dekorasi bunga', '8 Pilihan menu premium', 'Dessert bar komplit', '4 Pramusaji berseragam formal']
  }
];

const ADDONS: AddonItem[] = [
  {
    id: 'pempek_stall',
    name: 'Gubukan Pempek Kizy Sultan',
    price: 25000,
    type: 'per_pax',
    description: 'Live stall pempek hangat (Kapal selam, lenjer, adaan) dengan cuko gula batok asli.'
  },
  {
    id: 'kue_tampah',
    name: 'Kue Tampah Keraton (Isi 60 Pcs)',
    price: 275000,
    type: 'flat',
    description: 'Jajan pasar basah cantik beralas daun pisang untuk meja VIP / registrasi.'
  },
  {
    id: 'chips_bar',
    name: 'Snack Box Artisan Potato Chips Truffle',
    price: 20000,
    type: 'per_pax',
    description: 'Camilan renyah premium pendamping coffee break atau seminar.'
  },
  {
    id: 'dimsum_mentai',
    name: 'Live Stall Dimsum Mentai Kukus',
    price: 20000,
    type: 'per_pax',
    description: 'Dimsum udang ayam kukus panas disiram saus mentai bakar gurih.'
  }
];

export const EstimatorSection: React.FC<EstimatorSectionProps> = ({ company }) => {
  const [guestCount, setGuestCount] = useState<number>(100);
  const [selectedTierId, setSelectedTierId] = useState<string>('buffet_silver');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['pempek_stall']);
  const [kueTampahQty, setKueTampahQty] = useState<number>(2);

  const selectedTier = MENU_TIERS.find(t => t.id === selectedTierId) || MENU_TIERS[1];

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter(a => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  // Calculations
  const calculations = useMemo(() => {
    const baseMenuTotal = guestCount * selectedTier.pricePerPax;

    let addonsTotal = 0;
    selectedAddons.forEach(addonId => {
      const addon = ADDONS.find(a => a.id === addonId);
      if (addon) {
        if (addon.type === 'per_pax') {
          addonsTotal += addon.price * guestCount;
        } else if (addon.id === 'kue_tampah') {
          addonsTotal += addon.price * kueTampahQty;
        }
      }
    });

    const subtotal = baseMenuTotal + addonsTotal;
    const estTaxAndService = 0; // Katering include service
    const grandTotal = subtotal + estTaxAndService;

    return {
      baseMenuTotal,
      addonsTotal,
      grandTotal,
      perPaxAverage: Math.round(grandTotal / (guestCount || 1))
    };
  }, [guestCount, selectedTier, selectedAddons, kueTampahQty]);

  // Format currency
  const formatIDR = (val: number) => {
    return 'Rp ' + val.toLocaleString('id-ID');
  };

  // Generate WhatsApp message
  const handleOpenWhatsApp = () => {
    const addonNames = selectedAddons
      .map(id => {
        const item = ADDONS.find(a => a.id === id);
        return item ? item.name : '';
      })
      .filter(Boolean)
      .join(', ');

    const text = `Halo Tim Katering PT Kizy Barakah Orbis,%0A%0ASaya ingin meminta penawaran resmi berdasarkan kalkulator website:%0A- Paket: ${selectedTier.name} (${formatIDR(selectedTier.pricePerPax)}/pax)%0A- Jumlah Tamu: ${guestCount} porsi%0A- Add-ons: ${addonNames || 'Tanpa Add-on'}${selectedAddons.includes('kue_tampah') ? ` (Kue Tampah: ${kueTampahQty} unit)` : ''}%0A- Estimasi Anggaran: ${formatIDR(calculations.grandTotal)}%0A%0AMohon info ketersediaan jadwal dan prosedur pengajuannya. Terima kasih!`;

    const phone = company.contacts.whatsapp.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  return (
    <div id="kalkulator" className="pt-4">
      {/* Estimator Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form Controls (7 cols) */}
          <div className="lg:col-span-7 space-y-8 bg-corporate-canvas p-6 sm:p-8 rounded-2xl border border-corporate-border">
            
            {/* Step 1: Guest Count Slider & Input */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-bold text-corporate-navy">
                  1. Jumlah Tamu / Porsi Katering
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    min="30"
                    max="3000"
                    value={guestCount}
                    onChange={(e) => setGuestCount(Math.max(30, parseInt(e.target.value) || 30))}
                    className="w-24 px-3 py-1.5 text-right font-bold text-sky-700 bg-white border border-corporate-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                  <span className="text-xs font-semibold text-slate-500">Pax</span>
                </div>
              </div>

              <input
                type="range"
                min="30"
                max="1000"
                step="10"
                value={guestCount}
                onChange={(e) => setGuestCount(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>30 Pax (Minimal)</span>
                <span>250 Pax</span>
                <span>500 Pax</span>
                <span>1.000+ Pax</span>
              </div>
            </div>

            {/* Step 2: Menu Tier Selector */}
            <div>
              <label className="block text-sm font-bold text-corporate-navy mb-3">
                2. Pilih Paket Menu Utama
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {MENU_TIERS.map(tier => {
                  const isSelected = selectedTierId === tier.id;
                  return (
                    <div
                      key={tier.id}
                      onClick={() => setSelectedTierId(tier.id)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-sky-50/80 border-sky-500 ring-2 ring-sky-500/20 shadow-xs'
                          : 'bg-white border-corporate-border hover:border-slate-300'
                      }`}
                    >
                      <div className="text-xs font-bold text-corporate-navy mb-1">{tier.name}</div>
                      <div className="text-sm font-extrabold text-sky-600 mb-2">
                        {formatIDR(tier.pricePerPax)}
                        <span className="text-[10px] text-slate-400 font-normal"> /pax</span>
                      </div>
                      <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                        {tier.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Add-ons & Snack Stalls */}
            <div>
              <label className="block text-sm font-bold text-corporate-navy mb-3">
                3. Tambahan Gubukan Snack &amp; Kue Tampah Kizy
              </label>
              <div className="space-y-3">
                {ADDONS.map(addon => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start justify-between ${
                        isChecked
                          ? 'bg-barakah-50/60 border-barakah-500 shadow-xs'
                          : 'bg-white border-corporate-border hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="mt-0.5 text-barakah-600">
                          {isChecked ? <CheckSquare className="w-5 h-5" /> : <Square className="w-5 h-5 text-slate-300" />}
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-bold text-corporate-navy">{addon.name}</div>
                          <div className="text-xs text-slate-500">{addon.description}</div>
                          
                          {/* Special Qty input for Kue Tampah */}
                          {addon.id === 'kue_tampah' && isChecked && (
                            <div className="mt-2 flex items-center space-x-2" onClick={(e) => e.stopPropagation()}>
                              <span className="text-xs font-semibold text-slate-600">Jumlah Tampah:</span>
                              <input
                                type="number"
                                min="1"
                                max="20"
                                value={kueTampahQty}
                                onChange={(e) => setKueTampahQty(Math.max(1, parseInt(e.target.value) || 1))}
                                className="w-16 px-2 py-1 text-xs border rounded bg-white font-bold text-center"
                              />
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="text-right shrink-0 ml-2">
                        <div className="text-xs sm:text-sm font-bold text-barakah-700">
                          +{formatIDR(addon.price)}
                        </div>
                        <div className="text-[10px] text-slate-400 font-medium">
                          {addon.type === 'per_pax' ? 'per porsi tamu' : 'per unit tampah'}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Live Summary & WhatsApp CTA (5 cols) */}
          <div className="lg:col-span-5 sticky top-28 bg-white p-6 sm:p-8 rounded-2xl border-2 border-sky-500/30 shadow-xl space-y-6">
            
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <h3 className="text-lg font-bold text-corporate-navy">Rincian Estimasi</h3>
                <p className="text-xs text-slate-500">Simulasi harga resmi PT Kizy Barakah Orbis</p>
              </div>
              <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-barakah-100 text-barakah-800">
                Resmi Termasuk Pramusaji
              </span>
            </div>

            {/* Breakdown List */}
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between items-center text-slate-600">
                <span>Menu Pokok ({selectedTier.name} x {guestCount} pax)</span>
                <span className="font-semibold text-corporate-navy">{formatIDR(calculations.baseMenuTotal)}</span>
              </div>

              {selectedAddons.length > 0 && (
                <div className="flex justify-between items-center text-slate-600">
                  <span>Total Tambahan Snack / Gubukan</span>
                  <span className="font-semibold text-barakah-700">+{formatIDR(calculations.addonsTotal)}</span>
                </div>
              )}

              <div className="flex justify-between items-center text-slate-600">
                <span>Biaya Setup Meja &amp; Peralatan Makan</span>
                <span className="font-semibold text-barakah-600">GRATIS (Included)</span>
              </div>

              <div className="pt-4 border-t border-slate-200 flex justify-between items-end">
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Total Anggaran</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-corporate-navy">
                    {formatIDR(calculations.grandTotal)}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] text-slate-400">Rata-rata per Tamu</div>
                  <div className="text-sm font-bold text-sky-600">{formatIDR(calculations.perPaxAverage)} / pax</div>
                </div>
              </div>
            </div>

            {/* Info Box */}
            <div className="p-3.5 rounded-xl bg-sky-50 border border-sky-100 flex items-start space-x-2 text-xs text-sky-800 leading-relaxed">
              <Info className="w-4 h-4 shrink-0 text-sky-600 mt-0.5" />
              <span>
                Harga di atas merupakan estimasi transparan. Untuk menu kustom, sesi test food gratis (min. 300 pax), dan surat penawaran resmi berstempel PT, silakan klik tombol di bawah.
              </span>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleOpenWhatsApp}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-barakah-600 to-emerald-600 hover:from-barakah-500 hover:to-emerald-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-barakah-600/25 transition-all flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Kirim Rincian ke WhatsApp Resmi</span>
            </button>

          </div>
        </div>
      </div>
  );
};
