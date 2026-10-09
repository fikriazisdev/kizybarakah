import React, { useState } from 'react';
import { ShieldCheck, FileCheck, CheckCircle2, ChevronDown, ChevronUp, Search, Building } from 'lucide-react';
import { KbliItem } from '../types';

interface KbliGovernanceSectionProps {
  kbliList: KbliItem[];
}

export const KbliGovernanceSection: React.FC<KbliGovernanceSectionProps> = ({ kbliList }) => {
  const [expandedCode, setExpandedCode] = useState<string | null>(kbliList[0]?.code || null);
  const [filterQuery, setFilterQuery] = useState<string>('');

  const toggleExpand = (code: string) => {
    setExpandedCode(expandedCode === code ? null : code);
  };

  const filteredKbli = kbliList.filter(k => 
    k.code.includes(filterQuery) ||
    k.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
    k.scope.toLowerCase().includes(filterQuery.toLowerCase()) ||
    k.division.toLowerCase().includes(filterQuery.toLowerCase())
  );

  return (
    <section id="legalitas-kbli" className="py-20 bg-corporate-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-100 px-3 py-1 rounded-full border border-sky-300">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
            <span>STANDARISASI NASIONAL RI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-corporate-navy tracking-tight">
            Klasifikasi Baku Lapangan Usaha Indonesia (KBLI 2020)
          </h2>
          <p className="text-corporate-slate text-base sm:text-lg">
            PT Kizy Barakah Orbis beroperasi secara legal sesuai regulasi Kementerian Hukum dan HAM RI (AHU) serta Perizinan Berusaha Berbasis Risiko (OSS RBA).
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="max-w-xl mx-auto mb-8 relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            placeholder="Cari kode KBLI (misal: 56210, catering, pempek, jam tangan)..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-corporate-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 shadow-xs"
          />
        </div>

        {/* KBLI Accordion List */}
        <div className="max-w-4xl mx-auto space-y-3">
          {filteredKbli.map((item) => {
            const isExpanded = expandedCode === item.code;
            return (
              <div
                key={item.code}
                className={`bg-white rounded-xl border transition-all overflow-hidden ${
                  isExpanded 
                    ? 'border-sky-400 shadow-md ring-1 ring-sky-400/20' 
                    : 'border-corporate-border hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleExpand(item.code)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center space-x-3.5">
                    <span className="w-16 sm:w-20 text-center py-1 px-2 rounded-lg bg-sky-50 text-sky-700 font-mono text-sm font-bold border border-sky-200 shrink-0">
                      {item.code}
                    </span>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-corporate-navy">{item.title}</h4>
                      <p className="text-xs text-slate-400">{item.division}</p>
                    </div>
                  </div>

                  <div className="text-slate-400 shrink-0">
                    {isExpanded ? <ChevronUp className="w-5 h-5 text-sky-600" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-5 pb-5 pt-2 border-t border-slate-100 bg-slate-50/50 space-y-3 text-xs sm:text-sm">
                    <div>
                      <span className="font-bold text-corporate-navy">Ruang Lingkup Usaha Resmi:</span>
                      <p className="text-corporate-slate mt-1 leading-relaxed">{item.scope}</p>
                    </div>
                    <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-200/60">
                      <span className="text-slate-500 font-medium">Instansi Pembina / Regulator:</span>
                      <span className="font-semibold text-sky-700 bg-sky-100/60 px-2 py-0.5 rounded">
                        {item.regulator}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Notice Card */}
        <div className="max-w-4xl mx-auto mt-10 p-5 rounded-2xl bg-white border border-corporate-border flex items-start space-x-4 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-barakah-100 text-barakah-700 flex items-center justify-center shrink-0">
            <FileCheck className="w-5 h-5" />
          </div>
          <div className="text-xs sm:text-sm text-corporate-slate leading-relaxed">
            <div className="font-bold text-corporate-navy mb-0.5">Kepatuhan Terhadap Regulasi Nasional</div>
            Seluruh pilar operasional katering, pengolahan pangan, dan retail busana di bawah PT Kizy Barakah Orbis telah sinkron dengan database perizinan berusaha kementerian teknis dan instansi pembina terkait di Republik Indonesia.
          </div>
        </div>

      </div>
    </section>
  );
};
