import React from 'react';

/**
 * SVG Filter Defs for authentic distressed woodblock and leather textures
 */
export const DistressedSvgFilters: React.FC = () => (
  <svg className="absolute w-0 h-0 overflow-hidden pointer-events-none" aria-hidden="true">
    <defs>
      {/* Woodblock stencil crackle filter */}
      <filter id="crap-distress-filter" x="-10%" y="-10%" width="120%" height="120%">
        <feTurbulence type="fractalNoise" baseFrequency="0.08" numOctaves="3" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="3.5" xChannelSelector="R" yChannelSelector="G" result="displaced" />
        <feComposite in="displaced" in2="noise" operator="in" />
      </filter>

      {/* Leather deboss inner shadow filter */}
      <filter id="leather-deboss" x="-20%" y="-20%" width="140%" height="140%">
        <feOffset dx="1" dy="2" />
        <feGaussianBlur stdDeviation="1.5" result="offset-blur" />
        <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
        <feFlood floodColor="black" floodOpacity="0.8" result="color" />
        <feComposite operator="in" in="color" in2="inverse" result="shadow" />
        <feComposite operator="over" in="shadow" in2="SourceGraphic" />
      </filter>
    </defs>
  </svg>
);

/**
 * 4 Pillar single-weight line icons (1.5px stroke)
 * Representing Training (Dumbbell), Nutrition (Fork & Knife), Faith (Cross), Discipline (Helmet)
 */
export const PillarTrainingIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Dumbbell with knurled bar and dual weight plates */}
    <line x1="8" y1="16" x2="24" y2="16" strokeWidth="2.5" />
    <rect x="7" y="10" width="3" height="12" rx="1" fill="currentColor" />
    <rect x="3" y="12" width="3" height="8" rx="0.5" fill="currentColor" />
    <rect x="22" y="10" width="3" height="12" rx="1" fill="currentColor" />
    <rect x="26" y="12" width="3" height="8" rx="0.5" fill="currentColor" />
  </svg>
);

export const PillarNutritionIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Fork (left) and Knife (right) */}
    <path d="M10 6v7a3 3 0 0 0 3 3v10" />
    <path d="M7 6v4a2 2 0 0 0 2 2" />
    <path d="M13 6v4a2 2 0 0 1-2 2" />
    <path d="M22 6c0 4-1 7-3 8v12" />
    <path d="M22 6a3 3 0 0 1 3 3v5h-6" />
  </svg>
);

export const PillarFaithIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Clean Latin Cross */}
    <line x1="16" y1="5" x2="16" y2="27" strokeWidth="3" />
    <line x1="8" y1="12" x2="24" y2="12" strokeWidth="3" />
  </svg>
);

export const PillarDisciplineIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Spartan / Corinthian Helmet from IMG_4132 */}
    <path d="M7 16c0-6 4.2-10 9-10s9 4 9 10v4c0 3-2 5-5 5h-2l-2-4-2 4h-2c-3 0-5-2-5-5v-4z" />
    <path d="M16 6v10" />
    <path d="M11 18h10" />
    <path d="M13 8h6" />
    <path d="M11 25v3" />
    <path d="M21 25v3" />
  </svg>
);

/**
 * Exact Circular Orange Pillar Badge as seen on book cover and IMG_4132.png
 */
export const PillarCircularBadge: React.FC<{
  type: 'training' | 'nutrition' | 'faith' | 'discipline';
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  className?: string;
}> = ({ type, size = 'md', showLabel = true, className = '' }) => {
  const sizeMap = {
    sm: { circle: 'w-10 h-10', icon: 'w-5 h-5', label: 'text-[10px]' },
    md: { circle: 'w-14 h-14 sm:w-16 sm:h-16', icon: 'w-7 h-7 sm:w-8 sm:h-8', label: 'text-xs tracking-widest' },
    lg: { circle: 'w-20 h-20', icon: 'w-10 h-10', label: 'text-sm tracking-widest' },
  }[size];

  const labels = {
    training: 'TRAINING',
    nutrition: 'NUTRITION',
    faith: 'FAITH',
    discipline: 'DISCIPLINE',
  };

  const renderIcon = () => {
    switch (type) {
      case 'training':
        return <PillarTrainingIcon className={`${sizeMap.icon} text-white`} />;
      case 'nutrition':
        return <PillarNutritionIcon className={`${sizeMap.icon} text-white`} />;
      case 'faith':
        return <PillarFaithIcon className={`${sizeMap.icon} text-white`} />;
      case 'discipline':
        return <PillarDisciplineIcon className={`${sizeMap.icon} text-white`} />;
    }
  };

  return (
    <div className={`flex flex-col items-center gap-2 select-none group ${className}`}>
      {/* Outer double-ringed orange circle */}
      <div
        className={`${sizeMap.circle} rounded-full bg-[#F85800] border-2 border-white/20 shadow-[0_4px_14px_rgba(248,88,0,0.4)] flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:border-white/50`}
        style={{
          boxShadow: '0 0 0 2px rgba(248,88,0,0.35), inset 0 2px 4px rgba(255,255,255,0.3)',
        }}
      >
        {renderIcon()}
      </div>
      {showLabel && (
        <span className={`font-display font-bold uppercase ${sizeMap.label} text-[#F5F3EF] group-hover:text-[#F85800] transition-colors`}>
          {labels[type]}
        </span>
      )}
    </div>
  );
};

/**
 * Military Winged Star Insignia motif from brand assets (IMG_4132, IMG_4133, IMG_4134)
 */
export const StarWingsInsignia: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-28 h-6',
  color = '#C8B088',
}) => (
  <svg viewBox="0 0 160 32" fill="none" className={className}>
    {/* Center Star with metallic shading */}
    <polygon
      points="80,4 84.5,13.5 95,13.5 86.5,19.5 90,29 80,22.5 70,29 73.5,19.5 65,13.5 75.5,13.5"
      fill={color}
    />
    {/* Center Star inner accent */}
    <polygon
      points="80,8 83,14 89,14 84,18 86,24 80,20 74,24 76,18 71,14 77,14"
      fill="#141414"
      opacity="0.35"
    />
    {/* Left Horizontal Wing Bars (3 tiered) */}
    <line x1="8" y1="17" x2="62" y2="17" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    <line x1="18" y1="21" x2="60" y2="21" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <line x1="30" y1="25" x2="58" y2="25" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    {/* Right Horizontal Wing Bars (3 tiered) */}
    <line x1="98" y1="17" x2="152" y2="17" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    <line x1="100" y1="21" x2="142" y2="21" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <line x1="102" y1="25" x2="130" y2="25" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

/**
 * Horizontal Wordmark Logo (IMG_4131 reproduction)
 * "CUT" in stencil distressed white, "THE" in small middle caps, "CRAP" in bold distressed orange (#F85800)
 */
export const CutTheCrapHorizontalLogo: React.FC<{
  className?: string;
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}> = ({ className = '', theme = 'dark', size = 'md' }) => {
  const [imgError, setImgError] = React.useState(false);
  const isLight = theme === 'light';

  const heightClasses = {
    sm: 'h-6 sm:h-7',
    md: 'h-8 sm:h-9',
    lg: 'h-12 sm:h-14',
    xl: 'h-16 sm:h-20',
  }[size];

  const sizeClasses = {
    sm: 'text-xl tracking-wider',
    md: 'text-2xl lg:text-3xl tracking-wider',
    lg: 'text-4xl lg:text-5xl tracking-widest',
    xl: 'text-5xl lg:text-6xl tracking-widest',
  }[size];

  if (!imgError) {
    return (
      <img
        src="/assets/IMG_4131.png"
        alt="Cut The Crap"
        onError={() => setImgError(true)}
        className={`w-auto object-contain select-none ${heightClasses} ${className}`}
        referrerPolicy="no-referrer"
      />
    );
  }

  return (
    <div className={`inline-flex items-center gap-2 sm:gap-2.5 font-display select-none ${className}`}>
      {/* "CUT" in distressed woodblock style */}
      <span
        className={`font-black ${isLight ? 'text-[#141414]' : 'text-[#FFFFFF]'} ${sizeClasses}`}
        style={{
          fontFamily: "'Playfair Display', serif, Georgia",
          letterSpacing: '0.05em',
          textShadow: isLight ? 'none' : '0 2px 4px rgba(0,0,0,0.6)',
        }}
      >
        CUT
      </span>

      {/* Middle "THE" vertical badge */}
      <div className="flex flex-col items-center justify-center leading-none px-0.5">
        <span
          className={`text-[9px] sm:text-[10px] font-sans font-black tracking-[0.25em] ${
            isLight ? 'text-[#141414]' : 'text-[#E5E0D8]'
          }`}
        >
          THE
        </span>
        <span className="w-3 h-[2px] bg-[#F85800] my-0.5" />
      </div>

      {/* "CRAP" in distressed vibrant orange */}
      <span
        className={`font-black text-[#F85800] ${sizeClasses}`}
        style={{
          fontFamily: "'Playfair Display', serif, Georgia",
          letterSpacing: '0.05em',
          textShadow: '0 2px 8px rgba(248,88,0,0.3)',
        }}
      >
        CRAP
      </span>
    </div>
  );
};

/**
 * Stacked Stencil Wordmark Logo (IMG_4130 reproduction)
 * "CUT" on top (distressed white), "THE" in middle, "CRAP" on bottom (distressed orange)
 */
export const CutTheCrapStackedLogo: React.FC<{
  className?: string;
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
}> = ({ className = '', theme = 'dark', size = 'md' }) => {
  const [imgError, setImgError] = React.useState(false);
  const isLight = theme === 'light';

  const widthClasses = {
    sm: 'w-24 sm:w-28',
    md: 'w-36 sm:w-44',
    lg: 'w-52 sm:w-64',
  }[size];

  const scale = {
    sm: { cut: 'text-2xl', the: 'text-[9px]', crap: 'text-4xl' },
    md: { cut: 'text-4xl sm:text-5xl', the: 'text-[11px] sm:text-xs', crap: 'text-6xl sm:text-7xl' },
    lg: { cut: 'text-5xl sm:text-6xl', the: 'text-xs sm:text-sm', crap: 'text-7xl sm:text-8xl' },
  }[size];

  if (!imgError) {
    return (
      <img
        src="/assets/IMG_4130.png"
        alt="Cut The Crap"
        onError={() => setImgError(true)}
        className={`h-auto object-contain select-none ${widthClasses} ${className}`}
        referrerPolicy="no-referrer"
      />
    );
  }

  return (
    <div className={`flex flex-col items-center text-center font-display select-none ${className}`}>
      {/* Top: CUT */}
      <span
        className={`font-black tracking-wider leading-none ${scale.cut} ${
          isLight ? 'text-[#141414]' : 'text-[#FFFFFF]'
        }`}
        style={{
          fontFamily: "'Playfair Display', serif, Georgia",
          letterSpacing: '0.08em',
        }}
      >
        CUT
      </span>

      {/* Middle: THE with subtle horizontal ticks */}
      <div className="flex items-center gap-2 my-1">
        <span className="w-4 sm:w-6 h-[1px] bg-[#F85800]" />
        <span
          className={`font-sans font-black uppercase tracking-[0.3em] ${scale.the} ${
            isLight ? 'text-[#503818]' : 'text-[#C8B088]'
          }`}
        >
          THE
        </span>
        <span className="w-4 sm:w-6 h-[1px] bg-[#F85800]" />
      </div>

      {/* Bottom: CRAP in distressed orange */}
      <span
        className={`font-black text-[#F85800] tracking-wide leading-none ${scale.crap}`}
        style={{
          fontFamily: "'Playfair Display', serif, Georgia",
          letterSpacing: '0.04em',
          textShadow: '0 4px 12px rgba(248,88,0,0.35)',
        }}
      >
        CRAP
      </span>

      <div className="flex items-center gap-2 mt-3">
        <span className="h-[1px] w-6 bg-[#444]" />
        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-sans font-bold text-[#8C8C8C]">
          LUCAS HEFFNER
        </span>
        <span className="h-[1px] w-6 bg-[#444]" />
      </div>
    </div>
  );
};

/**
 * Founder's Edition Debossed Leather & Embossed Gold Badge (IMG_4133 reproduction)
 */
export const FoundersEmbossedBadge: React.FC<{
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}> = ({ className = '', size = 'md' }) => {
  const dimensions = {
    sm: 'p-4 max-w-sm',
    md: 'p-6 sm:p-8 max-w-xl',
    lg: 'p-8 sm:p-10 max-w-2xl',
  }[size];

  return (
    <div
      className={`relative rounded-sm overflow-hidden select-none border border-[#7A5826]/40 shadow-[0_12px_32px_rgba(0,0,0,0.85)] ${dimensions} ${className}`}
      style={{
        background:
          'radial-gradient(ellipse at 50% 30%, #3D2B16 0%, #2A1D0E 45%, #191107 100%)',
        boxShadow:
          'inset 0 1px 1px rgba(255,255,255,0.15), inset 0 -2px 6px rgba(0,0,0,0.8), 0 8px 24px rgba(0,0,0,0.7)',
      }}
    >
      {/* Leather grain subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            'radial-gradient(#C8B088 0.75px, transparent 0.75px), radial-gradient(#141414 0.75px, transparent 0.75px)',
          backgroundSize: '12px 12px',
          backgroundPosition: '0 0, 6px 6px',
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center space-y-2">
        {/* CUT THE CRAP debossed text */}
        <h2
          className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[#120B04] tracking-[0.12em] leading-none"
          style={{
            textShadow:
              '0 1px 0 rgba(255,255,255,0.15), 0 -1px 2px rgba(0,0,0,0.9), 1px 0 1px rgba(0,0,0,0.8)',
          }}
        >
          CUT THE CRAP
        </h2>

        {/* FOUNDER'S EDITION embossed text in rich gold */}
        <h3
          className="font-display font-extrabold text-lg sm:text-2xl md:text-3xl tracking-[0.16em] leading-tight"
          style={{
            background: 'linear-gradient(180deg, #FFF1D2 0%, #D4AF37 40%, #AA822A 80%, #765617 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.9)) drop-shadow(0 -1px 0 rgba(255,255,255,0.4))',
          }}
        >
          FOUNDER&apos;S EDITION
        </h3>

        {/* Winged Star Insignia & underline */}
        <div className="pt-2 w-full flex flex-col items-center">
          <StarWingsInsignia className="w-36 sm:w-48 h-6 text-[#C8B088]" color="#D4AF37" />
          <span className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C8B088]/60 to-transparent mt-1" />
        </div>
      </div>
    </div>
  );
};

/**
 * Standard Descriptive Photo Placeholder according to brief:
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
        Authentic photography from Lucas Heffner archives
      </span>
    </div>
  );
};

