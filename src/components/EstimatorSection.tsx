import React, { useState, useMemo } from 'react';
import { CheckSquare, Square, MessageCircle, Info } from 'lucide-react';
import { CompanyProfile, LangType } from '../types';

interface EstimatorSectionProps {
  company: CompanyProfile;
  lang?: LangType;
}

interface MenuTier {
  id: string;
  name: string;
  nameEn: string;
  pricePerPax: number;
  description: string;
  descriptionEn: string;
}

interface AddonItem {
  id: string;
  name: string;
  nameEn: string;
  price: number;
  type: 'per_pax' | 'flat';
  description: string;
  descriptionEn: string;
}

const MENU_TIERS: MenuTier[] = [
  {
    id: 'box',
    name: 'Nasi Kotak Eksekutif',
    nameEn: 'Executive Meal Box',
    pricePerPax: 45000,
    description: 'Cocok untuk rapat direksi, seminar, pelatihan karyawan, dan katering harian kantor.',
    descriptionEn: 'Ideal for boardroom meetings, seminars, staff trainings, and daily office meal contracts.'
  },
  {
    id: 'buffet_silver',
    name: 'Prasmanan Silver Banquet',
    nameEn: 'Silver Corporate Buffet',
    pricePerPax: 85000,
    description: 'Paket prasmanan ideal untuk acara kantor, syukuran, dan jamuan instansi.',
    descriptionEn: 'Full-service buffet spread ideal for corporate gatherings and institutional events.'
  },
  {
    id: 'buffet_royal',
    name: 'Prasmanan Royal VIP',
    nameEn: 'Royal VIP Banquet',
    pricePerPax: 125000,
    description: 'Standar tertinggi jamuan resepsi, gala dinner korporasi & kementerian.',
    descriptionEn: 'Premier banquet hospitality for gala dinners, VIP receptions, and ministerial events.'
  }
];

const ADDONS: AddonItem[] = [
  {
    id: 'pempek_stall',
    name: 'Gubukan Pempek Kizy (100% Ikan Tenggiri Segar)',
    nameEn: 'Pempek Kizy Live Stall (100% Fresh Tenggiri Fish)',
    price: 25000,
    type: 'per_pax',
    description: 'Live stall pempek hangat (Kapal selam, lenjer, adaan) dengan Cuko Gula Batok Linggau asli.',
    descriptionEn: 'Warm live stall serving authentic Palembang Pempek with rich Linggau palm sugar Cuko.'
  },
  {
    id: 'kue_tampah',
    name: 'Kue Tampah Tradisional VIP (Isi 60 Pcs)',
    nameEn: 'Traditional VIP Kue Tampah Platter (60 Pcs)',
    price: 275000,
    type: 'flat',
    description: 'Jajanan pasar segar beralas daun pisang untuk meja VIP / ruang rapat.',
    descriptionEn: 'Freshly prepared traditional Indonesian delicacy platter for VIP tables and boardrooms.'
  },
  {
    id: 'snack_box',
    name: 'Artisan Snack Box Coffee Break',
    nameEn: 'Artisan Coffee-Break Snack Box',
    price: 22000,
    type: 'per_pax',
    description: 'Paket kudapan pendamping seminar & rapat (risoles, kue tradisional & air mineral).',
    descriptionEn: 'Curated savory & sweet pastry box for corporate coffee breaks and seminars.'
  },
  {
    id: 'dimsum_stall',
    name: 'Dimsum Ayam & Udang Premium',
    nameEn: 'Handcrafted Chicken & Shrimp Dimsum',
    price: 22000,
    type: 'per_pax',
    description: 'Dimsum ayam & udang kukus hangat lengkap dengan saus spesial.',
    descriptionEn: 'Steamed handcrafted chicken & shrimp dimsum served warm with signature dipping sauce.'
  }
];

export const EstimatorSection: React.FC<EstimatorSectionProps> = ({ company, lang = 'id' }) => {
  const isEn = lang === 'en';
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

    const grandTotal = baseMenuTotal + addonsTotal;

    return {
      baseMenuTotal,
      addonsTotal,
      grandTotal,
      perPaxAverage: Math.round(grandTotal / (guestCount || 1))
    };
  }, [guestCount, selectedTier, selectedAddons, kueTampahQty]);

  const formatIDR = (val: number) => {
    return 'Rp ' + val.toLocaleString('id-ID');
  };

  const handleOpenWhatsApp = () => {
    const addonNames = selectedAddons
      .map(id => {
        const item = ADDONS.find(a => a.id === id);
        return item ? (isEn ? item.nameEn : item.name) : '';
      })
      .filter(Boolean)
      .join(', ');

    const text = isEn
      ? `Hello PT Kizy Barakah Orbis Catering Team,%0A%0AI would like to request an official quotation based on the website simulator:%0A- Package: ${selectedTier.nameEn} (${formatIDR(selectedTier.pricePerPax)}/pax)%0A- Portions: ${guestCount} portions%0A- Add-ons: ${addonNames || 'None'}${selectedAddons.includes('kue_tampah') ? ` (Kue Tampah: ${kueTampahQty} platters)` : ''}%0A- Estimated Budget: ${formatIDR(calculations.grandTotal)}%0A%0APlease advise schedule availability. Thank you!`
      : `Halo Tim Katering PT Kizy Barakah Orbis,%0A%0ASaya ingin meminta penawaran resmi berdasarkan kalkulator website:%0A- Paket: ${selectedTier.name} (${formatIDR(selectedTier.pricePerPax)}/pax)%0A- Jumlah Tamu: ${guestCount} porsi%0A- Add-ons: ${addonNames || 'Tanpa Add-on'}${selectedAddons.includes('kue_tampah') ? ` (Kue Tampah: ${kueTampahQty} unit)` : ''}%0A- Estimasi Anggaran: ${formatIDR(calculations.grandTotal)}%0A%0AMohon info ketersediaan jadwal dan prosedur pengajuannya. Terima kasih!`;

    const phone = company.contacts.whatsapp.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  return (
    <div id="kalkulator" className="pt-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form Controls (7 cols) */}
          <div className="lg:col-span-7 space-y-8 bg-corporate-canvas p-6 sm:p-8 rounded-2xl border border-corporate-border">
            
            {/* Step 1: Guest Count Slider & Input (Capped at 1,000 portions/day per v7.0) */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-bold text-corporate-navy">
                  {isEn ? '1. Number of Portions (Up to 1,000 Portions / Day)' : '1. Jumlah Porsi Katering (Up to 1.000 Porsi / Hari)'}
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    min="30"
                    max="1000"
                    value={guestCount}
                    onChange={(e) => setGuestCount(Math.min(1000, Math.max(30, parseInt(e.target.value) || 30)))}
                    className="w-24 px-3 py-1.5 text-right font-bold text-sky-700 bg-white border border-corporate-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                  <span className="text-xs font-semibold text-slate-500">{isEn ? 'Portions' : 'Porsi'}</span>
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
                <span>30 {isEn ? 'Portions (Min)' : 'Porsi (Minimal)'}</span>
                <span>250 {isEn ? 'Portions' : 'Porsi'}</span>
                <span>500 {isEn ? 'Portions' : 'Porsi'}</span>
                <span>Up to 1.000 {isEn ? 'Portions / Day' : 'Porsi / Hari'}</span>
              </div>
            </div>

            {/* Step 2: Menu Tier Selector */}
            <div>
              <label className="block text-sm font-bold text-corporate-navy mb-3">
                {isEn ? '2. Select Primary Catering Package' : '2. Pilih Paket Menu Utama'}
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
                      <div className="text-xs font-bold text-corporate-navy mb-1">
                        {isEn ? tier.nameEn : tier.name}
                      </div>
                      <div className="text-sm font-extrabold text-sky-600 mb-2">
                        {formatIDR(tier.pricePerPax)}
                        <span className="text-[10px] text-slate-400 font-normal"> /pax</span>
                      </div>
                      <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                        {isEn ? tier.descriptionEn : tier.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Add-ons & Snack Stalls */}
            <div>
              <label className="block text-sm font-bold text-corporate-navy mb-3">
                {isEn ? '3. Add Pempek Kizy Stall, Dimsum & Kue Tampah' : '3. Tambahan Gubukan Pempek Kizy, Dimsum & Kue Tampah'}
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
                          <div className="text-xs sm:text-sm font-bold text-corporate-navy">
                            {isEn ? addon.nameEn : addon.name}
                          </div>
                          <div className="text-xs text-slate-500">
                            {isEn ? addon.descriptionEn : addon.description}
                          </div>
                          
                          {addon.id === 'kue_tampah' && isChecked && (
                            <div className="mt-2 flex items-center space-x-2" onClick={(e) => e.stopPropagation()}>
                              <span className="text-xs font-semibold text-slate-600">
                                {isEn ? 'Number of Platters:' : 'Jumlah Tampah:'}
                              </span>
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
                          {addon.type === 'per_pax'
                            ? (isEn ? 'per portion' : 'per porsi tamu')
                            : (isEn ? 'per platter' : 'per unit tampah')}
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
                <h3 className="text-lg font-bold text-corporate-navy">
                  {isEn ? 'Estimated Summary' : 'Rincian Estimasi'}
                </h3>
                <p className="text-xs text-slate-500">
                  {isEn ? 'PT Kizy Barakah Orbis Official Simulator' : 'Simulasi harga resmi PT Kizy Barakah Orbis'}
                </p>
              </div>
              <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-barakah-100 text-barakah-800">
                {isEn ? 'Up to 1,000 Pax/Day' : 'Up to 1.000 Porsi/Hari'}
              </span>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between items-center text-slate-600">
                <span>
                  {isEn ? selectedTier.nameEn : selectedTier.name} ({guestCount} pax)
                </span>
                <span className="font-semibold text-corporate-navy">{formatIDR(calculations.baseMenuTotal)}</span>
              </div>

              {selectedAddons.length > 0 && (
                <div className="flex justify-between items-center text-slate-600">
                  <span>{isEn ? 'Add-on Stalls & Snacks' : 'Total Tambahan Snack / Gubukan'}</span>
                  <span className="font-semibold text-barakah-700">+{formatIDR(calculations.addonsTotal)}</span>
                </div>
              )}

              <div className="flex justify-between items-center text-slate-600">
                <span>{isEn ? 'Standard Setup & Utensils' : 'Biaya Setup Meja & Peralatan Makan'}</span>
                <span className="font-semibold text-barakah-600">{isEn ? 'INCLUDED' : 'GRATIS (Included)'}</span>
              </div>

              <div className="pt-4 border-t border-slate-200 flex justify-between items-end">
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                    {isEn ? 'Estimated Total' : 'Total Anggaran'}
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-corporate-navy">
                    {formatIDR(calculations.grandTotal)}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] text-slate-400">{isEn ? 'Average per Guest' : 'Rata-rata per Tamu'}</div>
                  <div className="text-sm font-bold text-sky-600">{formatIDR(calculations.perPaxAverage)} / pax</div>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-sky-50 border border-sky-100 flex items-start space-x-2 text-xs text-sky-800 leading-relaxed">
              <Info className="w-4 h-4 shrink-0 text-sky-600 mt-0.5" />
              <span>
                {isEn
                  ? 'For custom menus, B2B corporate contracts, or ordering via our EasyCatering app, click below to connect with our corporate desk.'
                  : 'Untuk kustomisasi menu, kontrak katering korporat, atau pemesanan melalui aplikasi EasyCatering, silakan klik tombol di bawah.'}
              </span>
            </div>

            <button
              onClick={handleOpenWhatsApp}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-barakah-600 to-emerald-600 hover:from-barakah-500 hover:to-emerald-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-barakah-600/25 transition-all flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{isEn ? 'Send Estimate to Official WhatsApp' : 'Kirim Rincian ke WhatsApp Resmi'}</span>
            </button>

          </div>
        </div>
      </div>
  );
};
