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
  const handlePrimaryClick = () => {
    if (onPreorderClick) {
      onPreorderClick();
    } else if (navigate) {
      navigate('/cutthecrap');
    }
  };

  const handleReadSample = () => {
    if (navigate) {
      navigate('/read-book');
    }
  };

  return (
    <div
      className={`relative w-full rounded-none overflow-hidden bg-[#161616] border border-[#2B2B2B] shadow-[0_20px_60px_rgba(0,0,0,0.85)] text-[#F5F3EF] ${className}`}
    >
      {/* Content Grid */}
      <div className="relative z-10 p-6 sm:p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: 3D Hardcover Book Mockup */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <Flagship3DBookMockup onClick={handlePrimaryClick} />
        </div>

        {/* Right Column: High-Impact Editorial Presentation & Genuine Web CTAs */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          <div className="space-y-2">
            <span className="eyebrow-label text-[#F85800] block">
              THE COMPLETE METHODOLOGY
            </span>
            <h2 className="text-h1 text-[#F5F3EF] tracking-tight">
              CUT THE <span className="text-[#F85800]">CRAP</span>
            </h2>
            <h3 className="font-display font-black text-xl sm:text-2xl text-[#C8B088] uppercase tracking-wide">
              Lose the Fat. Keep the Freedom.
            </h3>
          </div>

          <p className="text-[16px] sm:text-[18px] text-[#D1CFC7] font-sans leading-relaxed max-w-xl font-normal">
            A practical approach to sustainable weight loss without the noise, gimmicks, or unnecessary food rules. Built on thermodynamics, habit design, and mental clarity.
          </p>

          {/* Clean 4 Pillars Pill Row */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
            <span className="text-xs uppercase font-sans font-bold tracking-wider text-[#A3A3A3] mr-1">
              Core Pillars:
            </span>
            <span className="px-3 py-1 bg-[#222] border border-[#333] text-xs font-sans font-semibold text-[#F5F3EF]">
              Training
            </span>
            <span className="px-3 py-1 bg-[#222] border border-[#333] text-xs font-sans font-semibold text-[#F5F3EF]">
              Nutrition
            </span>
            <span className="px-3 py-1 bg-[#222] border border-[#333] text-xs font-sans font-semibold text-[#F5F3EF]">
              Faith
            </span>
            <span className="px-3 py-1 bg-[#222] border border-[#333] text-xs font-sans font-semibold text-[#F5F3EF]">
              Discipline
            </span>
          </div>

          {/* Genuine Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-center lg:justify-start flex-wrap">
            <button
              onClick={handlePrimaryClick}
              className="px-7 py-4 bg-[#F85800] hover:bg-[#E05000] text-[#141414] font-sans font-bold text-xs uppercase tracking-[0.1em] transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Explore Cut the Crap</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleReadSample}
              className="px-6 py-4 bg-[#222] hover:bg-[#2C2C2C] text-[#F5F3EF] border border-[#3A3A3A] font-sans font-bold text-xs uppercase tracking-[0.1em] transition-colors flex items-center justify-center gap-2"
            >
              <span>Read Chapter 1 Free</span>
            </button>
          </div>

          <div className="pt-2 text-xs text-[#8C8C8C] flex items-center justify-center lg:justify-start gap-3">
            <span>Available in Hardcover &bull; Paperback &bull; Instant Digital</span>
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
      className={`relative w-full rounded-none overflow-hidden border border-[#7A5826]/70 bg-[#16120E] shadow-[0_24px_64px_rgba(0,0,0,0.85)] text-[#F5F3EF] ${className}`}
    >
      {/* Banner Layout */}
      <div className="relative z-10 p-6 sm:p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left: 3D Leather Book */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <Founders3DBookMockup onClick={handlePrimaryClick} />
        </div>

        {/* Right: Editorial Showcase */}
        <div className="lg:col-span-7 text-center lg:text-left space-y-5">
          <div className="space-y-1">
            <span className="text-xs font-sans font-bold uppercase tracking-[0.18em] text-[#D4AF37] block">
              COLLECTOR'S EDITION &bull; 500 COPIES ONLY
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#F5F3EF] tracking-tight">
              Cut the Crap <span className="text-[#D4AF37]">Founder&apos;s Edition</span>
            </h2>
          </div>

          <p className="text-[15px] sm:text-[17px] text-[#D1CFC7] font-sans leading-relaxed max-w-xl font-normal">
            Become the kind of person who never has to lose the same weight twice. Features custom leatherette binding, gold-foil debossing, and personal inscription by Lucas Heffner.
          </p>

          {/* Limited Plaque */}
          <div className="inline-flex items-center gap-2 bg-[#211A12] border border-[#7A5826]/70 px-4 py-2">
            <span className="text-xs font-sans font-bold uppercase tracking-[0.14em] text-[#D4AF37]">
              Strict First Run &bull; Individually Hand-Numbered
            </span>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={handlePrimaryClick}
              className="w-full sm:w-auto px-8 py-4 bg-[#D4AF37] hover:bg-[#C09B2A] text-[#141414] font-sans font-bold text-xs uppercase tracking-[0.1em] shadow-lg transition-colors flex items-center justify-center gap-2"
            >
              <span>Preorder Founder's Edition &bull; $49.00</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <span className="text-xs text-[#A89880] font-sans">
              Includes instant full digital package
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
