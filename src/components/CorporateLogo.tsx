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
      {/* Prestigious Geometric Monogram Emblem (KBO) */}
      <div className="relative w-11 h-11 shrink-0 flex items-center justify-center">
        {/* Hexagonal Shield Background */}
        <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
          <defs>
            <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0F172A" />
              <stop offset="60%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#0369A1" />
            </linearGradient>
            <linearGradient id="goldAccent" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
          </defs>
          
          {/* Outer Shield Hexagon */}
          <path 
            d="M22 2L40 10.5V25.5C40 34.5 32 39.8 22 42C12 39.8 4 34.5 4 25.5V10.5L22 2Z" 
            fill="url(#shieldGrad)" 
            stroke="url(#goldAccent)" 
            strokeWidth="1.5"
          />

          {/* Inner Geometric Monogram Emblem 'K' and 'O' */}
          <path 
            d="M15 14V30M15 22L24 14M17 20L25 30" 
            stroke="#FFFFFF" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          <circle cx="28" cy="22" r="3.5" stroke="#38BDF8" strokeWidth="2" fill="none" />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <div className="flex items-center space-x-1.5">
          <span className={`text-lg font-black tracking-tight leading-none ${isDark ? 'text-white' : 'text-slate-900'}`}>
            KIZY BARAKAH
          </span>
        </div>
        <div className="flex items-center space-x-1.5 mt-1">
          <span className="text-[10px] font-extrabold tracking-[0.25em] text-sky-700 uppercase leading-none">
            ORBIS
          </span>
          <span className="w-1 h-1 rounded-full bg-emerald-600" />
          <span className={`text-[9px] font-semibold tracking-wider uppercase ${isDark ? 'text-slate-400' : 'text-slate-500'} leading-none`}>
            HOLDING GROUP
          </span>
        </div>
      </div>
    </div>
  );
};
