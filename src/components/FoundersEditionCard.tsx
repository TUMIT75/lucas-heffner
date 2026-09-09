import React, { useState } from 'react';
import { StarWingsInsignia } from './BrandLogos';
import { ShoppingBag, Check, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';

interface FoundersEditionCardProps {
  onAddToCart?: () => void;
  initiallySoldOut?: boolean;
}

export const FoundersEditionCard: React.FC<FoundersEditionCardProps> = ({
  onAddToCart,
  initiallySoldOut = false,
}) => {
  const [isSoldOut, setIsSoldOut] = useState(initiallySoldOut);
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
    <div className="space-y-4">
      {/* Interactive Toggle for Mockup Reviewers */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#1A1A1A] border border-[#333] text-xs">
        <span className="text-[#C8B088] font-mono font-medium flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#F85800]" />
          Founder's Edition Display State:
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsSoldOut(false)}
            className={`px-3 py-1 font-sans text-xs uppercase tracking-wider font-bold transition-colors ${
              !isSoldOut ? 'bg-[#F85800] text-[#141414]' : 'bg-[#262626] text-[#888] hover:text-[#CCC]'
            }`}
          >
            Preorder (Active)
          </button>
          <button
            type="button"
            onClick={() => setIsSoldOut(true)}
            className={`px-3 py-1 font-sans text-xs uppercase tracking-wider font-bold transition-colors ${
              isSoldOut ? 'bg-[#503818] text-[#C8B088] border border-[#C8B088]' : 'bg-[#262626] text-[#888] hover:text-[#CCC]'
            }`}
          >
            Sold Out Stamp (Preview)
          </button>
        </div>
      </div>

      {/* Main Card Container with Scoped .founders-edition class */}
      <div className={`founders-edition border-2 relative overflow-hidden transition-all duration-300 p-6 sm:p-10 ${
        isSoldOut ? 'sold-out-card' : 'shadow-2xl'
      }`}>
        {/* Sold Out Stamp per Spec Section 7 */}
        {isSoldOut && (
          <div className="sold-out-stamp select-none pointer-events-none text-center">
            <span className="block text-2xl sm:text-4xl font-display font-black text-[#F5F3EF] tracking-widest">
              SOLD OUT
            </span>
            <span className="block text-[11px] font-sans font-semibold tracking-wider text-[#C8B088] mt-0.5">
              NO REPRINTS &bull; VAULT CLOSED
            </span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Book Mockup */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="w-56 sm:w-64 aspect-5/7 bg-[#3D2912] border-2 border-[#C8B088]/60 shadow-[12px_16px_30px_rgba(0,0,0,0.8)] rounded-r-md p-5 flex flex-col justify-between text-center relative overflow-hidden transform lg:-rotate-1 hover:rotate-0 transition-transform">
              {/* Spine shadow simulation */}
              <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/60 to-transparent" />
              {/* Embossed header */}
              <div className="pt-2">
                <span className="text-[9px] font-sans font-bold uppercase tracking-[0.2em] text-[#C8B088]/90 block mb-1">
                  BECOME THE KIND OF PERSON WHO NEVER
                </span>
                <span className="text-[9px] font-sans font-bold uppercase tracking-[0.2em] text-[#C8B088]/90 block">
                  HAS TO LOSE THE SAME WEIGHT TWICE.
                </span>
              </div>

              {/* Embossed Cut The Crap Center */}
              <div className="my-4 py-3 border-y border-[#C8B088]/30">
                <span className="text-3xl sm:text-4xl font-display font-black text-[#C8B088] tracking-widest block drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)]">
                  CUT
                </span>
                <div className="flex items-center justify-center gap-2 my-1">
                  <span className="w-4 h-[1px] bg-[#C8B088]/50" />
                  <span className="text-[10px] font-display text-[#C8B088]">THE</span>
                  <span className="w-4 h-[1px] bg-[#C8B088]/50" />
                </div>
                <span className="text-3xl sm:text-4xl font-display font-black text-[#C8B088] tracking-widest block drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)]">
                  CRAP
                </span>
              </div>

              {/* Spine and Credentials */}
              <div className="pb-2">
                <div className="flex justify-center my-1.5">
                  <StarWingsInsignia className="w-16 h-4" color="#C8B088" />
                </div>
                <span className="text-[10px] font-sans uppercase font-bold tracking-wider text-[#D0B890]">
                  LUCAS HEFFNER, MBA, NASM-CNC
                </span>
              </div>
            </div>
          </div>

          {/* Center: Title, Wing Motif, Quote, Badge */}
          <div className="lg:col-span-5 text-center lg:text-left space-y-4">
            <div>
              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#C8B088] tracking-wider leading-none drop-shadow-md">
                CUT THE CRAP
              </h3>
              <h4 className="font-display text-2xl sm:text-3xl text-[#D0B890] tracking-wide mt-1">
                FOUNDER'S EDITION
              </h4>
            </div>

            <div className="flex items-center justify-center lg:justify-start my-2">
              <StarWingsInsignia className="w-28 h-6" color="#C8B088" />
            </div>

            <p className="text-[16px] sm:text-[18px] italic font-sans text-[#F5F3EF] leading-relaxed max-w-md">
              "Become the kind of person who never has to lose the same weight twice."
            </p>

            {/* Foil Insignia Pill */}
            <div className="inline-block bg-[#2A1D0B] border border-[#C8B088] px-4 py-2.5 shadow-inner">
              <span className="text-[12px] sm:text-[13px] font-display text-[#C8B088] uppercase tracking-[0.14em] block">
                ★ LIMITED ★ SIGNED ★ INDIVIDUALLY NUMBERED
              </span>
            </div>

            <div className="text-xs text-[#C8B088]/80 space-y-1 pt-1">
              <p>&bull; Custom gold &amp; leather texture hardcover binding</p>
              <p>&bull; Strict one-time printing (Never replaced with a standard hardcover)</p>
              <p>&bull; Exclusive founding reader acknowledgment</p>
            </div>
          </div>

          {/* Right: QR / Preorder Block */}
          <div className="lg:col-span-3 bg-[#1A1208]/90 border border-[#C8B088]/50 p-6 text-center space-y-4">
            <div className="text-[11px] font-display uppercase tracking-widest text-[#C8B088]">
              — PREORDER YOUR COPY —
            </div>

            {/* QR Mockup with Star Logo Center */}
            <div className="w-36 h-36 mx-auto bg-white p-2.5 rounded shadow-md flex items-center justify-center relative">
              <svg className="w-full h-full text-black" viewBox="0 0 100 100" fill="currentColor">
                {/* 3 Corner Finder Patterns */}
                <rect x="0" y="0" width="28" height="28" fill="none" stroke="black" strokeWidth="4" />
                <rect x="7" y="7" width="14" height="14" fill="black" />
                <rect x="72" y="0" width="28" height="28" fill="none" stroke="black" strokeWidth="4" />
                <rect x="79" y="7" width="14" height="14" fill="black" />
                <rect x="0" y="72" width="28" height="28" fill="none" stroke="black" strokeWidth="4" />
                <rect x="7" y="79" width="14" height="14" fill="black" />
                {/* Grid Modules */}
                <rect x="36" y="8" width="6" height="6" />
                <rect x="48" y="8" width="6" height="6" />
                <rect x="58" y="14" width="6" height="6" />
                <rect x="36" y="24" width="6" height="6" />
                <rect x="14" y="42" width="6" height="6" />
                <rect x="28" y="42" width="6" height="6" />
                <rect x="42" y="38" width="6" height="6" />
                <rect x="52" y="44" width="6" height="6" />
                <rect x="68" y="36" width="6" height="6" />
                <rect x="80" y="42" width="6" height="6" />
                <rect x="36" y="68" width="6" height="6" />
                <rect x="52" y="68" width="6" height="6" />
                <rect x="74" y="74" width="6" height="6" />
                <rect x="86" y="74" width="6" height="6" />
                <rect x="74" y="86" width="6" height="6" />
              </svg>
              {/* Star emblem in center */}
              <div className="absolute inset-0 m-auto w-8 h-8 bg-[#141414] border border-[#F85800] rounded-full flex items-center justify-center">
                <span className="text-[#F85800] text-xs font-bold">★</span>
              </div>
            </div>

            <p className="text-xs italic text-[#C8B088] leading-tight">
              Available only during the founding release.
            </p>

            <div className="pt-2 border-t border-[#C8B088]/30">
              <div className="text-2xl font-display font-bold text-[#F5F3EF] mb-2">
                $49.00
              </div>
              <button
                type="button"
                disabled={isSoldOut}
                onClick={handlePreorder}
                className={`w-full py-3.5 font-sans font-bold text-xs uppercase tracking-[0.1em] transition-all flex items-center justify-center gap-2 ${
                  isSoldOut
                    ? 'bg-[#4A3A22] text-[#888] cursor-not-allowed opacity-50'
                    : isAdded
                    ? 'bg-[#2E7D32] text-white'
                    : 'bg-[#F85800] hover:bg-[#E05000] text-[#141414]'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Cart</span>
                  </>
                ) : isSoldOut ? (
                  <span>Sold Out</span>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Preorder Founder's Edition</span>
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
