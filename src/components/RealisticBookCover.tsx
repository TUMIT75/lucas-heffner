import React from 'react';
import { StarWingsInsignia } from './BrandLogos';
import { Sparkles, BookOpen } from 'lucide-react';

interface RealisticBookCoverProps {
  edition?: 'hardcover' | 'paperback' | 'founders' | 'digital';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const RealisticBookCover: React.FC<RealisticBookCoverProps> = ({
  edition = 'hardcover',
  size = 'md',
  className = '',
}) => {
  const isFounders = edition === 'founders';
  const isDigital = edition === 'digital';

  const sizeClasses = {
    sm: 'w-[180px] h-[260px]',
    md: 'w-[240px] h-[350px] sm:w-[280px] sm:h-[400px]',
    lg: 'w-[280px] h-[410px] sm:w-[320px] sm:h-[470px]',
  };

  return (
    <div className={`relative inline-block select-none group perspective-[1000px] ${className}`}>
      {/* 3D Realistic Book Shadow & Bevel */}
      <div
        className={`relative ${sizeClasses[size]} transition-transform duration-500 transform group-hover:rotate-y-[-6deg] group-hover:rotate-x-[3deg] group-hover:scale-[1.02] shadow-[20px_25px_50px_rgba(0,0,0,0.8),-5px_5px_15px_rgba(0,0,0,0.5)] border ${
          isFounders
            ? 'bg-gradient-to-br from-[#2E2314] via-[#1E160D] to-[#120D08] border-[#C8B088]'
            : isDigital
            ? 'bg-gradient-to-br from-[#1F2937] via-[#111827] to-[#0B0F19] border-[#3B82F6]/60'
            : 'bg-gradient-to-br from-[#1C1C1C] via-[#141414] to-[#0A0A0A] border-[#333]'
        } flex flex-col justify-between p-6 sm:p-8 overflow-hidden`}
      >
        {/* Book Spine Highlight Bar */}
        <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-white/15 via-white/5 to-transparent pointer-events-none" />
        <div className="absolute left-3 top-0 bottom-0 w-[1px] bg-black/50 pointer-events-none" />

        {/* Top Header & Insignia */}
        <div className="space-y-3 z-10">
          <div className="flex items-center justify-between">
            <span
              className={`text-[9px] sm:text-[10px] font-sans font-bold uppercase tracking-[0.2em] ${
                isFounders ? 'text-[#C8B088]' : isDigital ? 'text-[#60A5FA]' : 'text-[#F85800]'
              }`}
            >
              UP ARMOR PUBLISHING
            </span>
            {isFounders && (
              <span className="text-[9px] font-mono px-1.5 py-0.5 bg-[#C8B088]/20 text-[#C8B088] border border-[#C8B088]/40">
                LIMITED
              </span>
            )}
            {isDigital && (
              <span className="text-[9px] font-mono px-1.5 py-0.5 bg-[#3B82F6]/20 text-[#60A5FA] border border-[#3B82F6]/40">
                PDF / EPUB
              </span>
            )}
          </div>

          <div className="pt-2">
            <StarWingsInsignia
              className="w-24 sm:w-28 h-5 sm:h-6"
              color={isFounders ? '#C8B088' : '#F85800'}
            />
          </div>
        </div>

        {/* Center Title Display */}
        <div className="space-y-3 z-10 my-auto py-4">
          <h2
            className={`font-display font-black leading-[0.95] tracking-tight ${
              size === 'sm' ? 'text-2xl' : size === 'md' ? 'text-3xl sm:text-4xl' : 'text-4xl sm:text-5xl'
            } ${
              isFounders
                ? 'text-[#F0E6D2] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'
                : 'text-[#FFFFFF] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]'
            }`}
          >
            CUT THE
            <br />
            <span className={isFounders ? 'text-[#C8B088]' : 'text-[#F85800]'}>CRAP</span>
          </h2>

          <div
            className={`w-12 h-[2px] ${
              isFounders ? 'bg-[#C8B088]' : 'bg-[#F85800]'
            }`}
          />

          <p className="text-[11px] sm:text-[12px] text-[#C5C3BC] font-sans font-medium leading-snug line-clamp-3">
            Lose the Fat. Keep the Freedom. The 4 Pillars to Sustainable Body Composition.
          </p>
        </div>

        {/* Bottom Author Byline */}
        <div className="pt-4 border-t border-white/10 z-10 flex items-center justify-between">
          <div>
            <span className="block text-[9px] text-[#8C8C8C] uppercase tracking-wider font-semibold">
              Author
            </span>
            <span
              className={`font-display text-sm sm:text-base tracking-wide ${
                isFounders ? 'text-[#F5F3EF]' : 'text-[#FFFFFF]'
              }`}
            >
              LUCAS HEFFNER
            </span>
          </div>
          <span className="text-[9px] font-mono text-[#888] uppercase">
            {isFounders ? 'Founder’s Ed.' : isDigital ? 'Digital Ed.' : '1st Edition'}
          </span>
        </div>

        {/* Book Page Edge effect on right side */}
        <div className="absolute right-0 top-0 bottom-0 w-[3px] bg-gradient-to-l from-white/20 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};
