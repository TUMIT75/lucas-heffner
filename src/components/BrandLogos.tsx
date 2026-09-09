import React from 'react';

/**
 * 4 Pillar single-weight line icons (1.5px stroke, orange)
 * Exactly representing Training (Dumbbell), Nutrition (Fork & Knife), Faith (Cross), Discipline (Helmet)
 */
export const PillarTrainingIcon: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Dumbbell */}
    <line x1="10" y1="16" x2="22" y2="16" strokeWidth="2.5" />
    <rect x="7" y="11" width="3" height="10" rx="1" />
    <rect x="4" y="13" width="3" height="6" rx="0.5" />
    <rect x="22" y="11" width="3" height="10" rx="1" />
    <rect x="25" y="13" width="3" height="6" rx="0.5" />
  </svg>
);

export const PillarNutritionIcon: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Fork & Knife */}
    <path d="M10 6v7a3 3 0 0 0 3 3v10" />
    <path d="M7 6v4a2 2 0 0 0 2 2" />
    <path d="M13 6v4a2 2 0 0 1-2 2" />
    <path d="M22 6c0 4-1 7-3 8v12" />
    <path d="M22 6a3 3 0 0 1 3 3v5h-6" />
  </svg>
);

export const PillarFaithIcon: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Classic Latin Cross */}
    <line x1="16" y1="5" x2="16" y2="27" strokeWidth="2" />
    <line x1="9" y1="12" x2="23" y2="12" strokeWidth="2" />
  </svg>
);

export const PillarDisciplineIcon: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Spartan / Corinthian Helmet */}
    <path d="M7 16c0-6 4-10 9-10s9 4 9 10v4c0 3-2 5-5 5h-2l-2-4-2 4h-2c-3 0-5-2-5-5v-4z" />
    <path d="M16 6v10" />
    <path d="M11 18h10" />
    <path d="M13 8h6" />
    <path d="M12 25v3" />
    <path d="M20 25v3" />
  </svg>
);

/**
 * Military Winged Star Insignia motif from brand assets
 */
export const StarWingsInsignia: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-24 h-6',
  color = '#C8B088',
}) => (
  <svg viewBox="0 0 120 28" fill="none" className={className}>
    {/* Center Star */}
    <polygon
      points="60,3 63.5,11.5 72,11.5 65,16.5 68,25 60,19.5 52,25 55,16.5 48,11.5 56.5,11.5"
      fill={color}
    />
    {/* Left Wings */}
    <line x1="10" y1="14" x2="44" y2="14" stroke={color} strokeWidth="2" />
    <line x1="18" y1="18" x2="42" y2="18" stroke={color} strokeWidth="1.5" />
    <line x1="26" y1="22" x2="40" y2="22" stroke={color} strokeWidth="1" />
    {/* Right Wings */}
    <line x1="76" y1="14" x2="110" y2="14" stroke={color} strokeWidth="2" />
    <line x1="78" y1="18" x2="102" y2="18" stroke={color} strokeWidth="1.5" />
    <line x1="80" y1="22" x2="94" y2="22" stroke={color} strokeWidth="1" />
  </svg>
);

/**
 * Horizontal Wordmark Logo (IMG_4131 reproduction)
 * "CUT" in stencil off-white, "THE" in small stacked caps, "CRAP" in bold distressed orange
 */
export const CutTheCrapHorizontalLogo: React.FC<{
  className?: string;
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
}> = ({ className = '', theme = 'dark', size = 'md' }) => {
  const isLight = theme === 'light';
  const textColor = isLight ? 'text-[#141414]' : 'text-[#F5F3EF]';

  const sizeClasses = {
    sm: 'text-xl tracking-wider',
    md: 'text-2xl lg:text-3xl tracking-wider',
    lg: 'text-4xl lg:text-5xl tracking-widest',
  }[size];

  return (
    <div className={`inline-flex items-center gap-2 font-display select-none ${className}`}>
      <span className={`font-black ${textColor} ${sizeClasses}`}>CUT</span>
      <div className="flex flex-col items-center justify-center leading-none px-0.5">
        <span className={`text-[9px] uppercase font-bold tracking-widest ${isLight ? 'text-[#503818]' : 'text-[#C8B088]'}`}>
          THE
        </span>
        <span className="w-2.5 h-[1.5px] bg-[#F85800] my-0.5" />
      </div>
      <span className={`font-black text-[#F85800] ${sizeClasses}`}>CRAP</span>
    </div>
  );
};

/**
 * Stacked Stencil Wordmark Logo (IMG_4130 reproduction)
 */
export const CutTheCrapStackedLogo: React.FC<{ className?: string; theme?: 'dark' | 'light' }> = ({
  className = '',
  theme = 'light',
}) => {
  const isLight = theme === 'light';
  return (
    <div className={`flex flex-col items-center text-center font-display select-none ${className}`}>
      <div className="flex items-center gap-2">
        <span className={`text-3xl sm:text-4xl lg:text-5xl font-black ${isLight ? 'text-[#141414]' : 'text-[#F5F3EF]'}`}>
          CUT
        </span>
        <span className="text-xs uppercase tracking-widest font-semibold px-2 py-0.5 bg-[#1E1E1E] text-[#C8B088] border border-[#503818]">
          THE
        </span>
      </div>
      <span className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#F85800] tracking-wider leading-none mt-1">
        CRAP
      </span>
      <div className="flex items-center gap-2 mt-2">
        <span className="h-[1px] w-8 bg-[#F85800]" />
        <span className="text-[11px] uppercase tracking-[0.2em] font-sans font-semibold text-[#8C8C8C]">
          LUCAS HEFFNER
        </span>
        <span className="h-[1px] w-8 bg-[#F85800]" />
      </div>
    </div>
  );
};

/**
 * Descriptive Photo Placeholder according to strict Section 2 & 5 mandates:
 * "--color-charcoal background, dashed 1px border in --color-orange at 40% opacity, centered caption in Public Sans 13px uppercase."
 */
export const PhotoPlaceholder: React.FC<{
  description: string;
  className?: string;
  aspectRatio?: string;
}> = ({ description, className = '', aspectRatio = 'aspect-4/3' }) => {
  return (
    <div
      className={`w-full bg-[#1E1E1E] border border-dashed border-[#F85800]/40 flex flex-col items-center justify-center p-6 text-center select-none ${aspectRatio} ${className}`}
    >
      <div className="w-8 h-8 rounded-full border border-[#F85800]/40 flex items-center justify-center text-[#F85800] mb-3">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      </div>
      <span className="text-[13px] font-sans font-semibold uppercase tracking-wider text-[#F5F3EF]/90 max-w-sm">
        [PHOTO: {description}]
      </span>
      <span className="text-[11px] font-sans text-[#8C8C8C] mt-1 tracking-normal">
        Real authentic photography from Lucas Heffner archives
      </span>
    </div>
  );
};
