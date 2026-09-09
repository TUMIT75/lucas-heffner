import React, { useState } from 'react';
import { StarWingsInsignia, FoundersEmbossedBadge } from './BrandLogos';
import { BrandedQrCode } from './OfficialBrandBanners';
import { ShoppingBag, Check, Sparkles, Shield, Award } from 'lucide-react';

interface FoundersEditionCardProps {
  onAddToCart?: () => void;
  initiallySoldOut?: boolean;
  className?: string;
}

export const FoundersEditionCard: React.FC<FoundersEditionCardProps> = ({
  onAddToCart,
  initiallySoldOut = false,
  className = '',
}) => {
  const [isSoldOut] = useState(initiallySoldOut);
  const [isAdded, setIsAdded] = useState(false);

  const handlePreorder = () => {
    if (isSoldOut) return;
    setIsAdded(true);
    if (onAddToCart) {
      onAddToCart();
    }
    setTimeout(() => setIsAdded(false), 2200);
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Main Card Container strictly replicating IMG_4134 */}
      <div
        className={`relative w-full rounded-sm overflow-hidden border-2 border-[#7A5826] shadow-[0_20px_50px_rgba(0,0,0,0.95)] text-[#F5F3EF] p-5 sm:p-7 lg:p-8 transition-all ${
          isSoldOut ? 'opacity-90' : ''
        }`}
        style={{
          background:
            'radial-gradient(ellipse at 50% 30%, #342210 0%, #201408 55%, #120B04 100%)',
        }}
      >
        {/* Subtle leather texture grid overlay */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(#D4AF37 0.75px, transparent 0.75px), radial-gradient(#141414 0.75px, transparent 0.75px)',
            backgroundSize: '14px 14px',
            backgroundPosition: '0 0, 7px 7px',
          }}
        />

        {/* Sold Out Stamp Overlay */}
        {isSoldOut && (
          <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/60 backdrop-blur-[2px] pointer-events-none">
            <div className="border-4 border-[#D4AF37] bg-[#140D05]/95 px-8 py-4 rotate-[-6deg] shadow-2xl text-center">
              <span className="block text-3xl sm:text-5xl font-display font-black text-[#D4AF37] tracking-[0.25em]">
                SOLD OUT
              </span>
              <span className="block text-xs font-sans font-bold tracking-[0.2em] text-[#E5D2A0] mt-1 uppercase">
                STRICT ONE-TIME PRINTING &bull; NO REPRINTS
              </span>
            </div>
          </div>
        )}

        {/* Responsive 3-Part Layout: Left Book, Center Info, Right Preorder */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          {/* 1. Left Column: 3D Leather Hardcover Mockup */}
          <div className="w-full lg:w-[200px] xl:w-[220px] shrink-0 flex justify-center">
            <div
              className="w-[170px] sm:w-[190px] aspect-[1/1.45] rounded-r-sm shadow-[16px_20px_40px_rgba(0,0,0,0.95)] flex overflow-hidden border border-[#8C6F42]/80 bg-[#1A1005] select-none transition-transform duration-300 hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(135deg, #36220E 0%, #201306 60%, #120A03 100%)',
              }}
            >
              {/* Spine */}
              <div className="w-5 h-full bg-gradient-to-r from-[#442B12] via-[#2A1A0A] to-[#140D05] border-r border-black/80 flex flex-col items-center justify-between py-4 shrink-0">
                <span className="text-[9px] text-[#D4AF37]">★</span>
                <span
                  className="text-[8px] uppercase tracking-[0.2em] font-sans font-bold text-[#C8B088] whitespace-nowrap rotate-90"
                  style={{ transformOrigin: 'center' }}
                >
                  CUT THE CRAP
                </span>
                <span className="text-[9px] text-[#D4AF37]">★</span>
              </div>

              {/* Cover Face */}
              <div className="flex-1 p-3 flex flex-col justify-between text-center relative">
                <div className="pt-1">
                  <p className="text-[7.5px] font-sans font-bold uppercase tracking-wider text-[#A08055] leading-tight">
                    BECOME THE KIND OF PERSON WHO NEVER HAS TO LOSE THE SAME WEIGHT TWICE.
                  </p>
                </div>

                <div className="my-auto py-1">
                  <h4
                    className="font-display font-black text-2xl text-[#120B04] tracking-widest leading-none"
                    style={{
                      textShadow:
                        '0 1px 0 rgba(255,255,255,0.18), 0 -1px 2px rgba(0,0,0,0.9), 1px 0 1px rgba(0,0,0,0.8)',
                    }}
                  >
                    CUT
                  </h4>
                  <div className="flex items-center justify-center gap-1.5 my-0.5">
                    <span className="w-3 h-[1px] bg-[#8C6F42]/60" />
                    <span className="text-[8px] font-sans font-bold tracking-[0.2em] text-[#8C6F42]">THE</span>
                    <span className="w-3 h-[1px] bg-[#8C6F42]/60" />
                  </div>
                  <h4
                    className="font-display font-black text-2xl text-[#120B04] tracking-widest leading-none"
                    style={{
                      textShadow:
                        '0 1px 0 rgba(255,255,255,0.18), 0 -1px 2px rgba(0,0,0,0.9), 1px 0 1px rgba(0,0,0,0.8)',
                    }}
                  >
                    CRAP
                  </h4>
                  <div className="pt-1.5 flex justify-center">
                    <StarWingsInsignia className="w-16 h-3.5" color="#8C6F42" />
                  </div>
                </div>

                <div className="pt-1 border-t border-[#4A3219]">
                  <span className="text-[7.5px] font-sans font-bold uppercase tracking-wider text-[#C8B088]">
                    LUCAS HEFFNER
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Center Column: Heading, Quote, Plaque & Bullet Points */}
          <div className="flex-1 min-w-0 text-center lg:text-left space-y-3">
            <div>
              <h3
                className="font-display font-black text-2xl sm:text-3xl xl:text-4xl text-[#120B04] tracking-widest leading-none"
                style={{
                  textShadow:
                    '0 1px 0 rgba(255,255,255,0.2), 0 -1px 2px rgba(0,0,0,0.9), 1px 0 1px rgba(0,0,0,0.8)',
                }}
              >
                CUT THE CRAP
              </h3>
              <h4 className="font-display font-extrabold text-lg sm:text-xl xl:text-2xl text-[#D4AF37] tracking-[0.14em] leading-tight mt-1 drop-shadow-md">
                FOUNDER&apos;S EDITION
              </h4>
            </div>

            {/* Winged Star Insignia */}
            <div className="flex justify-center lg:justify-start">
              <StarWingsInsignia className="w-32 sm:w-40 h-5" color="#D4AF37" />
            </div>

            {/* Italic Subtitle Quote */}
            <p className="text-sm sm:text-base italic font-serif text-[#E0D5C1] leading-relaxed max-w-lg">
              &ldquo;Become the kind of person who never has to lose the same weight twice.&rdquo;
            </p>

            {/* Gold Limited Plaque */}
            <div className="inline-block bg-[#160E06] border border-[#8C6F42] px-3.5 py-1.5 shadow-inner">
              <span className="text-[10px] sm:text-[11px] font-sans font-black uppercase tracking-[0.18em] text-[#D4AF37] block">
                ★ LIMITED ★ SIGNED ★ INDIVIDUALLY NUMBERED
              </span>
            </div>

            {/* Core Value Bullets */}
            <div className="text-xs text-[#C8B088] space-y-1 pt-1 font-sans">
              <p className="flex items-center gap-2 justify-center lg:justify-start">
                <span className="text-[#D4AF37] text-xs">&bull;</span>
                <span>Custom gold &amp; leather texture hardcover binding</span>
              </p>
              <p className="flex items-center gap-2 justify-center lg:justify-start">
                <span className="text-[#D4AF37] text-xs">&bull;</span>
                <span>Strict one-time printing (Never replaced with a standard hardcover)</span>
              </p>
              <p className="flex items-center gap-2 justify-center lg:justify-start">
                <span className="text-[#D4AF37] text-xs">&bull;</span>
                <span>Exclusive founding reader acknowledgment</span>
              </p>
            </div>
          </div>

          {/* 3. Right Column: Dedicated Preorder Box (Fixed Width, Never Squeezed) */}
          <div className="w-full sm:w-[240px] lg:w-[250px] xl:w-[260px] shrink-0 bg-[#160E05]/95 border border-[#8C6F42]/80 p-4 sm:p-5 text-center flex flex-col items-center justify-between rounded-sm shadow-xl space-y-3">
            {/* Header */}
            <div className="text-[11px] font-sans font-black uppercase tracking-[0.2em] text-[#D4AF37]">
              — PREORDER YOUR COPY —
            </div>

            {/* Branded Gold QR Code */}
            <div className="w-28 h-28 sm:w-32 sm:h-32 aspect-square flex items-center justify-center relative">
              <BrandedQrCode size={120} centerBadgeType="gold-star" />
            </div>

            {/* Subtext */}
            <p className="text-[11px] italic text-[#C8B088] leading-tight">
              Available only during the founding release.
            </p>

            {/* Price Tag */}
            <div className="w-full pt-2 border-t border-[#8C6F42]/30">
              <div className="text-2xl sm:text-3xl font-display font-black text-[#F5F3EF] mb-2 tracking-wide">
                $49.00
              </div>

              {/* Action Button: High contrast, full-width, clean typography */}
              <button
                type="button"
                disabled={isSoldOut}
                onClick={handlePreorder}
                className={`w-full py-3 px-3 font-sans font-black text-[11px] sm:text-xs uppercase tracking-[0.1em] transition-all flex items-center justify-center gap-1.5 shadow-md ${
                  isSoldOut
                    ? 'bg-[#382614] text-[#8C6F42] cursor-not-allowed opacity-60'
                    : isAdded
                    ? 'bg-[#2E7D32] text-white'
                    : 'bg-[#F85800] hover:bg-[#E05000] text-[#141414] active:scale-[0.98]'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4 shrink-0" />
                    <span className="whitespace-nowrap">Added to Cart</span>
                  </>
                ) : isSoldOut ? (
                  <span className="whitespace-nowrap">Sold Out</span>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 shrink-0" />
                    <span className="whitespace-nowrap">Preorder Founder's Edition</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
