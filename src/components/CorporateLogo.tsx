import React from 'react';

interface CorporateLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const CorporateLogo: React.FC<CorporateLogoProps> = ({ 
  className = '', 
  variant = 'light' 
}) => {
  const isDark = variant === 'dark';

  return (
    <div className={`flex items-center space-x-3.5 select-none ${className}`}>
      {/* Official PT Kizy Barakah Orbis Corporate Emblem (from Company Profile v8.0) */}
      <div
        className={`relative h-11 px-2.5 rounded-xl shrink-0 flex items-center justify-center transition-all ${
          isDark
            ? 'bg-slate-900/90 border border-sky-400/35 shadow-md shadow-black/30'
            : 'bg-slate-50 border border-slate-200/90 shadow-sm'
        }`}
      >
        <img
          src={isDark ? '/assets/logos/kizy_cover_logo.png' : '/assets/logos/kizy_header_logo.png'}
          alt="PT Kizy Barakah Orbis Official Logo"
          className="h-7 w-auto object-contain"
        />
      </div>

      {/* Typography matching Company Profile v8.0 Cover & Running Header */}
      <div className="flex flex-col">
        <div className="flex items-center space-x-1.5">
          <span
            className={`text-base sm:text-lg font-black tracking-tight leading-none ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            PT KIZY BARAKAH ORBIS
          </span>
        </div>
        <div className="flex items-center space-x-1.5 mt-1">
          <span
            className={`text-[9.5px] font-extrabold tracking-[0.14em] uppercase leading-none ${
              isDark ? 'text-sky-400' : 'text-sky-800'
            }`}
          >
            BERDIRI SEJAK 2022 · BEKASI, INDONESIA
          </span>
        </div>
      </div>
    </div>
  );
};
