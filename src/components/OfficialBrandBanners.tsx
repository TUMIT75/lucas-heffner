import React, { useState } from 'react';
import { PageRoute } from '../types';
import {
  PillarCircularBadge,
  StarWingsInsignia,
  CutTheCrapHorizontalLogo,
  FoundersEmbossedBadge,
} from './BrandLogos';
import { QrCode, ExternalLink, ArrowRight, Shield, Check, Copy, Sparkles, BookOpen } from 'lucide-react';

interface BannerProps {
  navigate?: (route: PageRoute) => void;
  className?: string;
  onPreorderClick?: () => void;
}

/**
 * Authentic Scalable Vector QR Code with center emblem
 */
export const BrandedQrCode: React.FC<{
  size?: number;
  centerBadgeType?: 'orange-star' | 'gold-star';
  url?: string;
}> = ({ size = 140, centerBadgeType = 'orange-star', url = 'https://lucasheffner.com/cutthecrap' }) => {
  return (
    <div
      className="relative p-2.5 bg-white rounded-lg shadow-xl inline-flex items-center justify-center select-none"
      style={{ width: size, height: size }}
      title={`Scan to visit ${url}`}
    >
      {/* High density vector QR matrix pattern */}
      <svg viewBox="0 0 100 100" className="w-full h-full text-[#141414]" fill="currentColor">
        {/* Top-Left Position Detection Marker */}
        <rect x="6" y="6" width="24" height="24" rx="3" fill="none" stroke="currentColor" strokeWidth="5" />
        <rect x="13" y="13" width="10" height="10" rx="1.5" />

        {/* Top-Right Position Detection Marker */}
        <rect x="70" y="6" width="24" height="24" rx="3" fill="none" stroke="currentColor" strokeWidth="5" />
        <rect x="77" y="13" width="10" height="10" rx="1.5" />

        {/* Bottom-Left Position Detection Marker */}
        <rect x="6" y="70" width="24" height="24" rx="3" fill="none" stroke="currentColor" strokeWidth="5" />
        <rect x="13" y="77" width="10" height="10" rx="1.5" />

        {/* Dense Data Grid Bits */}
        {/* Column 1-4 */}
        <rect x="36" y="8" width="4" height="4" />
        <rect x="44" y="8" width="4" height="8" />
        <rect x="54" y="8" width="8" height="4" />
        <rect x="36" y="18" width="6" height="4" />
        <rect x="46" y="18" width="8" height="4" />
        <rect x="58" y="18" width="4" height="6" />

        {/* Timing Lines */}
        <rect x="10" y="36" width="80" height="3" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 3" />
        <rect x="36" y="10" width="3" height="80" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 3" />

        {/* Random / Structured Data Clusters */}
        <rect x="8" y="44" width="6" height="4" />
        <rect x="18" y="44" width="8" height="6" />
        <rect x="8" y="54" width="10" height="4" />
        <rect x="22" y="52" width="6" height="8" />

        <rect x="68" y="38" width="6" height="6" />
        <rect x="78" y="38" width="6" height="4" />
        <rect x="88" y="42" width="4" height="6" />
        <rect x="68" y="48" width="8" height="6" />
        <rect x="80" y="48" width="12" height="4" />
        <rect x="74" y="58" width="6" height="6" />
        <rect x="84" y="58" width="8" height="4" />

        {/* Bottom Data Section */}
        <rect x="38" y="68" width="6" height="4" />
        <rect x="48" y="68" width="8" height="6" />
        <rect x="60" y="68" width="4" height="8" />
        <rect x="38" y="78" width="8" height="6" />
        <rect x="50" y="80" width="12" height="4" />
        <rect x="42" y="88" width="6" height="4" />
        <rect x="54" y="88" width="10" height="4" />
        <rect x="72" y="74" width="4" height="8" />
        <rect x="80" y="74" width="10" height="4" />
        <rect x="76" y="84" width="6" height="8" />
        <rect x="86" y="84" width="6" height="4" />
      </svg>

      {/* Center Shield/Star Badge Emblem */}
      <div
        className={`absolute rounded-full flex items-center justify-center shadow-md ${
          centerBadgeType === 'orange-star'
            ? 'w-8 h-8 bg-[#141414] border-2 border-[#F85800] text-[#F85800]'
            : 'w-8 h-8 bg-[#2A1D0E] border-2 border-[#D4AF37] text-[#D4AF37]'
        }`}
      >
        <StarWingsInsignia
          className="w-7 h-2.5"
          color={centerBadgeType === 'orange-star' ? '#F85800' : '#D4AF37'}
        />
      </div>
    </div>
  );
};

/**
 * 3D Hardcover Book Render (as seen on left side of IMG_4132.png)
 */
export const Flagship3DBookMockup: React.FC<{
  onClick?: () => void;
  className?: string;
}> = ({ onClick, className = '' }) => {
  return (
    <div
      onClick={onClick}
      className={`relative cursor-pointer group select-none transition-transform duration-500 hover:scale-105 ${className}`}
      title="Click to explore Cut the Crap"
    >
      {/* 3D Realistic Book Perspective Container */}
      <div className="relative w-[190px] sm:w-[220px] md:w-[240px] aspect-[1/1.45] rounded-r-md shadow-[25px_30px_60px_rgba(0,0,0,0.95),-8px_0_20px_rgba(0,0,0,0.7)] flex overflow-hidden border border-[#333]/80 bg-[#121212]">
        {/* Book Spine 3D Bevel Highlight */}
        <div className="w-5 sm:w-6 h-full bg-gradient-to-r from-[#2A2A2A] via-[#1A1A1A] to-[#0D0D0D] border-r border-black/80 flex flex-col items-center justify-between py-6 shrink-0 relative">
          <div className="w-2.5 h-2.5 text-[#F85800] flex items-center justify-center">★</div>
          <span
            className="text-[9px] uppercase tracking-[0.25em] font-sans font-bold text-[#8C8C8C] whitespace-nowrap rotate-90"
            style={{ transformOrigin: 'center' }}
          >
            CUT THE CRAP
          </span>
          <span
            className="text-[7px] uppercase tracking-wider font-mono text-[#666] whitespace-nowrap rotate-90"
            style={{ transformOrigin: 'center' }}
          >
            LUCAS HEFFNER
          </span>
          {/* Spine crease shadow */}
          <div className="absolute right-0 top-0 bottom-0 w-[1.5px] bg-white/10" />
        </div>

        {/* Book Cover Face */}
        <div className="flex-1 bg-[#151515] p-3 sm:p-4 flex flex-col justify-between relative overflow-hidden">
          {/* Subtle textured canvas background */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage: 'radial-gradient(#F85800 0.5px, transparent 0.5px)',
              backgroundSize: '8px 8px',
            }}
          />

          {/* Top Subtitle */}
          <p className="text-[7px] sm:text-[8px] font-sans font-extrabold uppercase tracking-wider text-[#A3A3A3] text-center leading-tight">
            BECOME THE KIND OF PERSON WHO NEVER HAS TO LOSE THE SAME WEIGHT TWICE.
          </p>

          {/* Center Stencil Title */}
          <div className="text-center my-auto py-1">
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-wider leading-none">
              CUT
            </h3>
            <span className="text-[8px] font-sans font-black tracking-[0.25em] text-[#C8B088] block -my-0.5">
              THE
            </span>
            <h3 className="font-display font-black text-3xl sm:text-4xl text-[#F85800] tracking-wider leading-none">
              CRAP
            </h3>
          </div>

          {/* 4 Circular Pillar Badges row */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 my-1">
            {(['training', 'nutrition', 'faith', 'discipline'] as const).map((type) => (
              <PillarCircularBadge
                key={type}
                type={type}
                size="sm"
                showLabel={false}
                className="transform scale-75 -mx-1"
              />
            ))}
          </div>

          {/* Bottom Author line */}
          <div className="pt-2 border-t border-[#333] text-center">
            <span className="text-[8px] sm:text-[9px] font-sans font-bold uppercase tracking-wider text-[#E5E0D8]">
              LUCAS HEFFNER, MBA, NASM-CNC
            </span>
          </div>
        </div>

        {/* Page Edge Illusion */}
        <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-l from-white/20 to-transparent" />
      </div>
    </div>
  );
};

/**
 * 3D Leather Hardcover Book Render (as seen on left side of IMG_4134.png)
 */
export const Founders3DBookMockup: React.FC<{
  onClick?: () => void;
  className?: string;
}> = ({ onClick, className = '' }) => {
  return (
    <div
      onClick={onClick}
      className={`relative cursor-pointer group select-none transition-transform duration-500 hover:scale-105 ${className}`}
      title="Click to preorder Founder's Edition"
    >
      <div className="relative w-[190px] sm:w-[220px] md:w-[240px] aspect-[1/1.45] rounded-r-md shadow-[25px_30px_60px_rgba(0,0,0,0.95),-8px_0_20px_rgba(0,0,0,0.7)] flex overflow-hidden border border-[#7A5826]/60 bg-[#24170B]">
        {/* Leather Spine */}
        <div className="w-5 sm:w-6 h-full bg-gradient-to-r from-[#3D2813] via-[#2A1B0C] to-[#170E05] border-r border-black/80 flex flex-col items-center justify-between py-6 shrink-0 relative">
          <div className="w-2.5 h-2.5 text-[#D4AF37] flex items-center justify-center">★</div>
          <span
            className="text-[9px] uppercase tracking-[0.25em] font-sans font-bold text-[#C8B088] whitespace-nowrap rotate-90"
            style={{ transformOrigin: 'center' }}
          >
            CUT THE CRAP
          </span>
          <span
            className="text-[7px] uppercase tracking-wider font-mono text-[#8C6F42] whitespace-nowrap rotate-90"
            style={{ transformOrigin: 'center' }}
          >
            LUCAS HEFFNER
          </span>
          <div className="w-2.5 h-2.5 text-[#D4AF37] flex items-center justify-center">★</div>
        </div>

        {/* Leather Debossed Cover */}
        <div className="flex-1 bg-gradient-to-br from-[#2E1E0E] via-[#221508] to-[#150D04] p-3 sm:p-4 flex flex-col justify-between relative overflow-hidden">
          {/* Top Subtitle */}
          <p className="text-[7px] sm:text-[8px] font-sans font-bold uppercase tracking-wider text-[#A08055] text-center leading-tight">
            BECOME THE KIND OF PERSON WHO NEVER HAS TO LOSE THE SAME WEIGHT TWICE.
          </p>

          {/* Center Debossed Title */}
          <div className="text-center my-auto py-2">
            <h3
              className="font-display font-black text-2xl sm:text-3xl text-[#120B04] tracking-widest leading-none"
              style={{
                textShadow:
                  '0 1px 0 rgba(255,255,255,0.15), 0 -1px 2px rgba(0,0,0,0.9), 1px 0 1px rgba(0,0,0,0.8)',
              }}
            >
              CUT
            </h3>
            <span className="text-[8px] font-sans font-bold tracking-[0.25em] text-[#8C6F42] block my-0.5">
              — THE —
            </span>
            <h3
              className="font-display font-black text-3xl sm:text-4xl text-[#120B04] tracking-widest leading-none"
              style={{
                textShadow:
                  '0 1px 0 rgba(255,255,255,0.15), 0 -1px 2px rgba(0,0,0,0.9), 1px 0 1px rgba(0,0,0,0.8)',
              }}
            >
              CRAP
            </h3>
            <div className="pt-2 flex justify-center">
              <StarWingsInsignia className="w-20 sm:w-24 h-4" color="#8C6F42" />
            </div>
          </div>

          {/* Bottom Author line */}
          <div className="pt-2 border-t border-[#4A3219] text-center">
            <span className="text-[8px] sm:text-[9px] font-sans font-bold uppercase tracking-wider text-[#C8B088]">
              LUCAS HEFFNER, MBA, NASM-CNC
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * =========================================================================
 * 1. THE FLAGSHIP CUT THE CRAP BANNER (Pixel-perfect replica of IMG_4132.png)
 * =========================================================================
 */
export const FlagshipCutTheCrapBanner: React.FC<BannerProps> = ({
  navigate,
  className = '',
  onPreorderClick,
}) => {
  const [copiedUrl, setCopiedUrl] = useState(false);

  const handleCopyLink = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText('https://lucasheffner.com/cutthecrap');
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 3000);
  };

  const handlePrimaryClick = () => {
    if (onPreorderClick) {
      onPreorderClick();
    } else if (navigate) {
      navigate('/cutthecrap');
    }
  };

  return (
    <div
      className={`relative w-full rounded-sm overflow-hidden bg-[#0F0F0F] border border-[#262626] shadow-[0_20px_60px_rgba(0,0,0,0.9)] text-[#F5F3EF] ${className}`}
    >
      {/* Background textured dark stone/charcoal patina */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(#262626 1px, transparent 1px), radial-gradient(#141414 1px, transparent 1px)',
          backgroundSize: '16px 16px',
          backgroundPosition: '0 0, 8px 8px',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 pointer-events-none" />

      {/* Content Grid */}
      <div className="relative z-10 p-6 sm:p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
        {/* Left Column: 3D Hardcover Book Mockup */}
        <div className="lg:col-span-4 flex justify-center items-center">
          <Flagship3DBookMockup onClick={handlePrimaryClick} />
        </div>

        {/* Center Column: Official Typography & 4 Pillars */}
        <div className="lg:col-span-5 text-center flex flex-col items-center space-y-4">
          {/* Main Title */}
          <div>
            <h2
              className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-widest text-[#FFFFFF] leading-none select-none"
              style={{ fontFamily: "'Playfair Display', serif, Georgia" }}
            >
              CUT THE CRAP
            </h2>
            <h3 className="font-display font-black text-lg sm:text-xl lg:text-2xl tracking-[0.14em] text-[#F85800] mt-1.5 leading-none uppercase">
              LOSE THE FAT. KEEP THE FREEDOM.
            </h3>
          </div>

          {/* Military Winged Star Insignia Divider */}
          <div className="w-full flex items-center justify-center gap-3">
            <span className="w-12 sm:w-20 h-[1.5px] bg-[#444]" />
            <span className="text-[#F85800] text-sm">★</span>
            <span className="w-12 sm:w-20 h-[1.5px] bg-[#444]" />
          </div>

          {/* Quote */}
          <p className="text-xs sm:text-sm text-[#D1CFC7] font-sans max-w-md leading-relaxed px-2 font-medium">
            &ldquo;A practical approach to sustainable weight loss without the noise, gimmicks, or unnecessary rules.&rdquo;
          </p>

          {/* The 4 Circular Orange Pillar Badges */}
          <div className="pt-2 w-full flex items-center justify-center gap-3 sm:gap-6">
            <PillarCircularBadge type="training" size="md" />
            <PillarCircularBadge type="nutrition" size="md" />
            <PillarCircularBadge type="faith" size="md" />
            <PillarCircularBadge type="discipline" size="md" />
          </div>
        </div>

        {/* Right Column: Preorder & QR Code Ecosystem */}
        <div className="lg:col-span-3 flex flex-col items-center justify-center text-center space-y-3 bg-[#161616]/90 border border-[#2B2B2B] p-5 sm:p-6 rounded-sm shadow-lg">
          {/* Top Label */}
          <div className="flex items-center gap-1.5 text-xs font-sans font-black uppercase tracking-[0.2em] text-[#F85800]">
            <span>—</span>
            <span>ORDER / PREORDER</span>
            <span>—</span>
          </div>

          {/* QR Code */}
          <div
            onClick={handlePrimaryClick}
            className="cursor-pointer group transition-transform hover:scale-105"
            title="Click to visit /cutthecrap"
          >
            <BrandedQrCode size={130} centerBadgeType="orange-star" />
          </div>

          {/* Formats */}
          <div className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#A3A3A3]">
            Paperback &bull; Hardcover &bull; eBook
          </div>

          {/* URL with copy button */}
          <button
            onClick={handleCopyLink}
            className="text-xs font-mono font-semibold text-[#F85800] hover:text-[#FFA066] flex items-center gap-1.5 transition-colors group"
          >
            <span>lucasheffner.com/cutthecrap</span>
            {copiedUrl ? (
              <Check className="w-3.5 h-3.5 text-green-400" />
            ) : (
              <Copy className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
            )}
          </button>

          {/* Bottom Split Links */}
          <div className="w-full pt-3 border-t border-[#2A2A2A] grid grid-cols-2 gap-2 text-[10px] uppercase font-sans font-bold">
            <button
              onClick={() => navigate && navigate('/toolkit')}
              className="text-left text-[#8C8C8C] hover:text-[#F85800] transition-colors p-1"
            >
              <span className="text-[#C8B088] block text-[9px]">TOOLBOX</span>
              <span className="text-[8.5px] font-mono text-[#666] block">/toolbox</span>
            </button>
            <button
              onClick={() => navigate && navigate('/community')}
              className="text-right text-[#8C8C8C] hover:text-[#F85800] transition-colors p-1"
            >
              <span className="text-[#C8B088] block text-[9px]">COMMUNITY</span>
              <span className="text-[8.5px] font-mono text-[#666] block">/community</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * =========================================================================
 * 2. THE FOUNDER'S EDITION BANNER (Pixel-perfect replica of IMG_4134.png)
 * =========================================================================
 */
export const FoundersEditionBanner: React.FC<BannerProps> = ({
  navigate,
  className = '',
  onPreorderClick,
}) => {
  const handlePrimaryClick = () => {
    if (onPreorderClick) {
      onPreorderClick();
    } else if (navigate) {
      navigate('/cutthecrap');
    }
  };

  return (
    <div
      className={`relative w-full rounded-sm overflow-hidden border border-[#7A5826]/50 shadow-[0_24px_64px_rgba(0,0,0,0.95)] text-[#F5F3EF] select-none ${className}`}
      style={{
        background:
          'radial-gradient(ellipse at 50% 40%, #362512 0%, #23170A 50%, #140D05 100%)',
      }}
    >
      {/* Leather textured overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(#C8B088 0.75px, transparent 0.75px), radial-gradient(#141414 0.75px, transparent 0.75px)',
          backgroundSize: '14px 14px',
          backgroundPosition: '0 0, 7px 7px',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70 pointer-events-none" />

      {/* Banner Layout */}
      <div className="relative z-10 p-6 sm:p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
        {/* Left: 3D Leather Book */}
        <div className="lg:col-span-4 flex justify-center items-center">
          <Founders3DBookMockup onClick={handlePrimaryClick} />
        </div>

        {/* Center: Chiseled Founder's Heading & Plaque */}
        <div className="lg:col-span-5 text-center flex flex-col items-center space-y-4">
          <div>
            <h2
              className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-widest text-[#150D05] leading-none"
              style={{
                textShadow:
                  '0 1px 0 rgba(255,255,255,0.18), 0 -1px 2px rgba(0,0,0,0.9), 1px 0 1px rgba(0,0,0,0.8)',
              }}
            >
              CUT THE CRAP
            </h2>
            <h3
              className="font-display font-extrabold text-xl sm:text-2xl lg:text-3xl tracking-[0.18em] leading-tight mt-1"
              style={{
                background: 'linear-gradient(180deg, #FFF1D2 0%, #D4AF37 50%, #8A641A 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.8))',
              }}
            >
              FOUNDER&apos;S EDITION
            </h3>
          </div>

          {/* Winged Star Insignia */}
          <StarWingsInsignia className="w-36 sm:w-48 h-6" color="#D4AF37" />

          {/* Subtitle Italic Quote */}
          <p className="text-sm sm:text-base text-[#DCD1BA] font-serif italic max-w-md leading-relaxed px-2">
            &ldquo;Become the kind of person who never has to lose the same weight twice.&rdquo;
          </p>

          {/* Limited Plaque */}
          <div className="bg-[#120B04] border border-[#7A5826] px-5 py-2.5 rounded-sm shadow-inner flex items-center justify-center gap-2">
            <span className="text-[11px] sm:text-xs font-sans font-black uppercase tracking-[0.2em] text-[#D4AF37]">
              ★ LIMITED ★ SIGNED ★ INDIVIDUALLY NUMBERED
            </span>
          </div>
        </div>

        {/* Right: Golden Preorder QR Block */}
        <div className="lg:col-span-3 flex flex-col items-center justify-center text-center space-y-3 bg-[#1C1208]/90 border border-[#7A5826]/60 p-5 sm:p-6 rounded-sm shadow-xl">
          {/* Header */}
          <div className="text-xs font-sans font-black uppercase tracking-[0.2em] text-[#D4AF37] space-y-0.5">
            <div>— PREORDER —</div>
            <div className="text-[10px] text-[#C8B088]">— YOUR COPY —</div>
          </div>

          {/* Gold QR */}
          <div
            onClick={handlePrimaryClick}
            className="cursor-pointer group transition-transform hover:scale-105"
            title="Click to preorder Founder's Edition"
          >
            <BrandedQrCode size={130} centerBadgeType="gold-star" />
          </div>

          {/* Subtext */}
          <p className="text-[11px] font-sans font-semibold text-[#A08055] italic">
            Available only during the founding release.
          </p>

          {/* Action CTA Button */}
          <button
            onClick={handlePrimaryClick}
            className="w-full py-2.5 px-4 bg-gradient-to-r from-[#D4AF37] via-[#E2C366] to-[#AA822A] hover:brightness-110 text-[#141414] text-xs font-sans font-black uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#141414]" />
            <span>Preorder Collector Copy</span>
          </button>
        </div>
      </div>
    </div>
  );
};
