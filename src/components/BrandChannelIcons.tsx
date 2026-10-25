import React from 'react';
import { ExternalLink, CheckCircle2, Star } from 'lucide-react';

/**
 * Official Multi-Color Instagram Gradient Logo SVG
 */
export const InstagramOriginalLogo: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => {
  const uid = React.useId().replace(/:/g, '');
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <radialGradient id={`ig_grad_a_${uid}`} cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FD5" />
          <stop offset=".328" stopColor="#FF543F" />
          <stop offset=".348" stopColor="#FC5245" />
          <stop offset=".504" stopColor="#E64771" />
          <stop offset=".643" stopColor="#D53E91" />
          <stop offset=".761" stopColor="#CC39A4" />
          <stop offset=".841" stopColor="#C837AB" />
        </radialGradient>
        <radialGradient id={`ig_grad_b_${uid}`} cx="11.786" cy="5.54" r="29.813" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#4168C9" />
          <stop offset=".999" stopColor="#4168C9" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="42" height="42" x="3" y="3" rx="11" fill={`url(#ig_grad_a_${uid})`} />
      <rect width="42" height="42" x="3" y="3" rx="11" fill={`url(#ig_grad_b_${uid})`} />
      <rect width="26" height="26" x="11" y="11" rx="7" stroke="#FFF" strokeWidth="3.2" />
      <circle cx="24" cy="24" r="6.2" stroke="#FFF" strokeWidth="3.2" />
      <circle cx="31.5" cy="16.5" r="1.8" fill="#FFF" />
    </svg>
  );
};

/**
 * Official 4-Color Google Play Store Triangle Logo SVG
 */
export const GooglePlayOriginalLogo: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Blue left wing */}
      <path
        d="M7.35 5.42C6.75 6.06 6.4 7.05 6.4 8.34V39.66C6.4 40.95 6.75 41.94 7.35 42.58L7.5 42.72L25.05 25.17V24.83L7.5 7.28L7.35 5.42Z"
        fill="#00D2FF"
      />
      {/* Green top triangle */}
      <path
        d="M31.6 18.62L25.05 25.17L7.35 5.42C8.12 4.6 9.35 4.5 10.75 5.29L31.6 18.62Z"
        fill="#00F076"
      />
      {/* Red bottom triangle */}
      <path
        d="M31.6 29.38L10.75 42.71C9.35 43.5 8.12 43.4 7.35 42.58L25.05 24.83L31.6 29.38Z"
        fill="#FF3A44"
      />
      {/* Yellow right nose */}
      <path
        d="M40.35 23.59L31.6 18.62L25.05 25.0L31.6 29.38L40.35 24.41C42.15 23.39 42.15 24.61 40.35 23.59Z"
        fill="#FFBC00"
      />
      <path
        d="M40.35 21.85L31.6 18.62L25.05 25L31.6 29.38L40.35 26.15C42.2 25.1 42.2 22.9 40.35 21.85Z"
        fill="#FFBC00"
      />
    </svg>
  );
};

interface InstagramSnapshotCardProps {
  handle: string;
  profileTitle: string;
  subtitle: string;
  href: string;
  avatarUrl: string;
  previewImages: string[];
  ctaLabel: string;
  accentColor?: 'emerald' | 'sky' | 'amber';
}

/**
 * Interactive Instagram Profile Snapshot Card with Feed Thumbnails & Official IG Gradient Logo
 */
export const InstagramSnapshotCard: React.FC<InstagramSnapshotCardProps> = ({
  handle,
  profileTitle,
  subtitle,
  href,
  avatarUrl,
  previewImages,
  ctaLabel,
  accentColor = 'emerald'
}) => {
  const borderHover =
    accentColor === 'emerald'
      ? 'hover:border-pink-500/50 hover:shadow-pink-500/10'
      : 'hover:border-pink-500/50 hover:shadow-pink-500/10';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block rounded-2xl bg-white border-2 border-slate-200/90 ${borderHover} p-3.5 shadow-xs hover:shadow-md transition-all`}
    >
      <div className="flex items-center justify-between gap-3">
        {/* Left: Avatar in Instagram Story Ring + Handle Info */}
        <div className="flex items-center space-x-3 min-w-0">
          <div className="relative shrink-0">
            <div className="w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 shadow-xs">
              <img
                src={avatarUrl}
                alt={handle}
                className="w-full h-full rounded-full object-cover border-2 border-white bg-slate-100"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-md bg-white p-0.5 shadow-sm flex items-center justify-center">
              <InstagramOriginalLogo className="w-4 h-4" />
            </div>
          </div>

          <div className="min-w-0">
            <div className="flex items-center space-x-1">
              <span className="text-xs sm:text-sm font-black text-corporate-navy truncate group-hover:text-pink-600 transition-colors">
                {handle}
              </span>
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 fill-sky-500/15 shrink-0" />
            </div>
            <div className="text-[11px] font-bold text-slate-700 truncate">{profileTitle}</div>
            <div className="text-[10px] text-slate-500 truncate">{subtitle}</div>
          </div>
        </div>

        {/* Center/Right: Mini 3-Photo IG Feed Snapshot Strip + Follow CTA */}
        <div className="flex items-center space-x-2.5 shrink-0">
          <div className="hidden sm:flex items-center -space-x-1.5">
            {previewImages.slice(0, 3).map((imgSrc, i) => (
              <img
                key={i}
                src={imgSrc}
                alt={`${handle} feed ${i + 1}`}
                className="w-9 h-9 rounded-lg object-cover border-2 border-white shadow-xs group-hover:scale-105 transition-transform"
              />
            ))}
          </div>

          <span className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white text-[11px] font-extrabold shadow-xs group-hover:brightness-110 transition-all whitespace-nowrap">
            <InstagramOriginalLogo className="w-3.5 h-3.5" />
            <span>{ctaLabel}</span>
            <ExternalLink className="w-3 h-3 opacity-90" />
          </span>
        </div>
      </div>
    </a>
  );
};

interface PlayStoreSnapshotCardProps {
  appName: string;
  packageId: string;
  subtitle: string;
  href: string;
  previewImages?: string[];
  ctaLabel: string;
}

/**
 * Interactive Google Play Store App Snapshot Card with Official 4-Color Play Store Logo & App Screen Previews
 */
export const PlayStoreSnapshotCard: React.FC<PlayStoreSnapshotCardProps> = ({
  appName,
  packageId,
  subtitle,
  href,
  previewImages = [],
  ctaLabel
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl bg-gradient-to-r from-[#060D1A] via-slate-900 to-[#0F172A] border-2 border-slate-800 hover:border-sky-500/60 p-3.5 text-white shadow-xs hover:shadow-md transition-all"
    >
      <div className="flex items-center justify-between gap-3">
        {/* Left: Google Play App Icon Box + App Meta */}
        <div className="flex items-center space-x-3 min-w-0">
          <div className="w-12 h-12 rounded-2xl bg-white p-2 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
            <GooglePlayOriginalLogo className="w-8 h-8" />
          </div>

          <div className="min-w-0">
            <div className="flex items-center space-x-1.5">
              <span className="text-xs sm:text-sm font-black text-white truncate group-hover:text-sky-300 transition-colors">
                {appName}
              </span>
              <span className="inline-flex items-center space-x-0.5 px-1.5 py-0.5 rounded bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-[9.5px] font-extrabold shrink-0">
                <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                <span>GOOGLE PLAY</span>
              </span>
            </div>
            <div className="text-[11px] font-bold text-slate-300 truncate">{subtitle}</div>
            <div className="text-[10px] font-mono text-sky-400 truncate">{packageId}</div>
          </div>
        </div>

        {/* Center/Right: App Screen Snapshots + Official Google Play Badge Button */}
        <div className="flex items-center space-x-2.5 shrink-0">
          {previewImages.length > 0 && (
            <div className="hidden sm:flex items-center -space-x-1.5">
              {previewImages.slice(0, 3).map((imgSrc, i) => (
                <img
                  key={i}
                  src={imgSrc}
                  alt={`${appName} screen ${i + 1}`}
                  className="w-9 h-9 rounded-lg object-cover border-2 border-slate-700 shadow-xs group-hover:scale-105 transition-transform"
                />
              ))}
            </div>
          )}

          <span className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-white text-slate-950 hover:bg-sky-50 text-[11px] font-extrabold shadow-xs transition-all whitespace-nowrap shrink-0">
            <GooglePlayOriginalLogo className="w-4 h-4" />
            <span>{ctaLabel}</span>
            <ExternalLink className="w-3 h-3 text-slate-600" />
          </span>
        </div>
      </div>
    </a>
  );
};
