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
 * Horizontal Wordmark Logo (Client's IMG_4131.png distressed stencil logo)
 * "CUT" in distressed white, "THE" centered, "CRAP" in distressed orange #F85800 with transparent background
 */
export const CutTheCrapHorizontalLogo: React.FC<{
  className?: string;
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}> = ({ className = '', size = 'md' }) => {
  const heightClasses = {
    sm: 'h-6 sm:h-7',
    md: 'h-8 sm:h-9 md:h-10',
    lg: 'h-11 sm:h-12 md:h-14',
    xl: 'h-16 sm:h-20',
  }[size];

  return (
    <img
      src="/assets/IMG_4131_transparent.png?v=6"
      alt="Cut The Crap"
      className={`w-auto object-contain select-none transition-opacity ${heightClasses} ${className}`}
      referrerPolicy="no-referrer"
    />
  );
};

/**
 * Stacked Stencil Wordmark Logo (Client's IMG_4130.png)
 * "CUT" on top, "THE" in middle, "CRAP" on bottom with transparent background
 */
export const CutTheCrapStackedLogo: React.FC<{
  className?: string;
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
}> = ({ className = '', size = 'md' }) => {
  const widthClasses = {
    sm: 'w-24 sm:w-28',
    md: 'w-36 sm:w-44',
    lg: 'w-52 sm:w-64',
  }[size];

  return (
    <img
      src="/assets/IMG_4130_trimmed.png?v=6"
      alt="Cut The Crap - Lucas Heffner"
      className={`h-auto object-contain select-none ${widthClasses} ${className}`}
      referrerPolicy="no-referrer"
    />
  );
};

/**
 * Official Circular Seal Badge (Extracted from Client's IMG_4132 / IMG_4134)
 */
export const BrandSealBadge: React.FC<{
  className?: string;
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
}> = ({ className = '', theme = 'dark', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20 sm:w-24 sm:h-24',
    lg: 'w-28 h-28 sm:w-36 sm:h-36',
  }[size];

  const src = theme === 'light' ? '/assets/seal_badge_light.png?v=6' : '/assets/seal_badge_dark.png?v=6';

  return (
    <img
      src={src}
      alt="Cut The Crap Official Seal"
      className={`object-contain select-none ${sizeClasses} ${className}`}
      referrerPolicy="no-referrer"
    />
  );
};

/**
 * Founder's Edition Debossed Kraft/Leather Brand Banner (Client's IMG_4133.png)
 */
export const FoundersEmbossedBadge: React.FC<{
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}> = ({ className = '', size = 'md' }) => {
  const maxClasses = {
    sm: 'max-w-xs',
    md: 'max-w-xl',
    lg: 'max-w-3xl',
  }[size];

  return (
    <div className={`relative rounded-sm overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.85)] border border-[#7A5826]/40 ${maxClasses} ${className}`}>
      <img
        src="/assets/IMG_4133.png?v=6"
        alt="Cut The Crap - Lucas Heffner Official Founder's Banner"
        className="w-full h-auto object-cover select-none block"
        referrerPolicy="no-referrer"
      />
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

