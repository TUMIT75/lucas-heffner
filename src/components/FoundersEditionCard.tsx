import React, { useState } from 'react';
import { StarWingsInsignia } from './BrandLogos';
import { ShoppingBag, Check, Shield, Award, CheckCircle2 } from 'lucide-react';

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
      {/* Main Card Container */}
      <div
        className={`relative w-full rounded-none overflow-hidden border border-[#7A5826]/70 shadow-[0_20px_60px_rgba(0,0,0,0.85)] text-[#F5F3EF] p-6 sm:p-8 lg:p-10 bg-[#16120E] transition-all ${
          isSoldOut ? 'opacity-90' : ''
        }`}
      >
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

        {/* Responsive 3-Column Layout: Left Book, Center Details, Right Purchase Box */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
          {/* 1. Left Column: Leather Hardcover Book Presentation */}
          <div className="w-full lg:w-[210px] shrink-0 flex justify-center">
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

          {/* 2. Center Column: Cohesive Typography & Specifications */}
          <div className="flex-1 min-w-0 text-center lg:text-left space-y-4">
            <div className="space-y-1">
              <span className="text-xs font-sans font-bold uppercase tracking-[0.18em] text-[#D4AF37] block">
                LIMITED COLLECTOR'S RELEASE
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl xl:text-4xl text-[#F5F3EF] tracking-tight">
                Cut the Crap <span className="text-[#D4AF37]">Founder&apos;s Edition</span>
              </h3>
            </div>

            {/* Clear, readable subtitle */}
            <p className="text-[15px] sm:text-[16px] text-[#D1CFC7] leading-relaxed max-w-lg font-normal">
              Become the kind of person who never has to lose the same weight twice.
            </p>

            {/* Limited Plaque Badge */}
            <div className="inline-flex items-center gap-2 bg-[#211A12] border border-[#7A5826]/70 px-3.5 py-1.5">
              <Shield className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <span className="text-[11px] font-sans font-bold uppercase tracking-[0.14em] text-[#D4AF37]">
                Strict First Run &bull; Signed &amp; Individually Numbered
              </span>
            </div>

            {/* Specifications */}
            <div className="text-[13px] sm:text-[14px] text-[#C8B088] space-y-2 pt-1 font-sans">
              <div className="flex items-start gap-2.5 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="text-[#D1CFC7]">Bonded leatherette hardcover with authentic gold-foil debossing</span>
              </div>
              <div className="flex items-start gap-2.5 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="text-[#D1CFC7]">Personally hand-signed &amp; numbered by Lucas Heffner (500 copies)</span>
              </div>
              <div className="flex items-start gap-2.5 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="text-[#D1CFC7]">Includes complete instant digital suite (ePub + PDF) &amp; worksheets</span>
              </div>
            </div>
          </div>

          {/* 3. Right Column: Dedicated Preorder Box (Clear, spacious, authentic) */}
          <div className="w-full sm:w-[280px] lg:w-[300px] shrink-0 bg-[#1F1912] border border-[#7A5826]/80 p-6 text-center flex flex-col items-center justify-between rounded-none shadow-xl space-y-4">
            {/* Header */}
            <div className="space-y-1">
              <div className="text-[11px] font-sans font-bold uppercase tracking-[0.18em] text-[#D4AF37]">
                FIRST RUN PREORDER
              </div>
              <div className="text-xs text-[#A89880]">
                Strict run of 500 copies
              </div>
            </div>

            {/* Price Tag */}
            <div className="py-2 w-full border-y border-[#7A5826]/40 text-center">
              <div className="text-3xl sm:text-4xl font-display font-black text-[#F5F3EF] tracking-wide">
                $49.00
              </div>
              <div className="text-[11px] text-[#C8B088] font-sans uppercase tracking-wider mt-1">
                Free Domestic Shipping
              </div>
            </div>

            {/* Availability status */}
            <div className="text-xs text-[#E5D2A0] font-sans flex items-center justify-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              <span>Available for immediate reservation</span>
            </div>

            {/* Action Button: Full-width, never cut off, clear contrast */}
            <button
              type="button"
              disabled={isSoldOut}
              onClick={handlePreorder}
              className={`w-full py-4 px-4 font-sans font-bold text-xs uppercase tracking-[0.1em] transition-all flex items-center justify-center gap-2 shadow-lg ${
                isSoldOut
                  ? 'bg-[#382614] text-[#8C6F42] cursor-not-allowed opacity-60'
                  : isAdded
                  ? 'bg-[#2E7D32] text-white'
                  : 'bg-[#D4AF37] hover:bg-[#C09B2A] text-[#141414] active:scale-[0.99]'
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-4 h-4 shrink-0" />
                  <span>Added to Cart</span>
                </>
              ) : isSoldOut ? (
                <span>Sold Out</span>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4 shrink-0" />
                  <span>Preorder Founder's Edition</span>
                </>
              )}
            </button>

            <p className="text-[11px] text-[#8C7A64] leading-tight">
              Ships upon print completion. Includes digital edition immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
