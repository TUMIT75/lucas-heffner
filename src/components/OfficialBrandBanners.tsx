import React from 'react';
import { PageRoute } from '../types';
import {
  StarWingsInsignia,
  FoundersEmbossedBadge,
} from './BrandLogos';
import { RealisticBookCover } from './RealisticBookCover';
import {
  ArrowRight,
  BookOpen,
  ShoppingBag,
  Sparkles,
  Shield,
  Check,
  Dumbbell,
  Utensils,
  Target,
  Flame,
  Award,
} from 'lucide-react';

interface BannerProps {
  navigate?: (route: PageRoute) => void;
  className?: string;
  onPreorderClick?: () => void;
}

/**
 * =========================================================================
 * 1. THE FLAGSHIP CUT THE CRAP SHOWCASE BANNER
 * Replaces cartoonish ImageMagick render with a world-class editorial presentation
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
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleReadSample = () => {
    if (navigate) {
      navigate('/read-book');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`relative w-full overflow-hidden bg-gradient-to-br from-[#181818] via-[#121212] to-[#0A0A0A] border border-[#2D2D2D] shadow-[0_25px_60px_rgba(0,0,0,0.9)] text-[#F5F3EF] ${className}`}
    >
      {/* Subtle background ambient glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#F85800]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Showcase */}
      <div className="relative z-10 p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left Column: 3D Realistic Book Presentation */}
        <div className="lg:col-span-4 flex justify-center items-center">
          <div
            onClick={handlePrimaryClick}
            className="cursor-pointer transition-transform duration-300 hover:scale-[1.02] flex flex-col items-center group"
            title="Click to explore Cut the Crap"
          >
            <RealisticBookCover edition="hardcover" size="md" />
            <span className="mt-3 text-[11px] font-mono uppercase tracking-widest text-[#8C8C8C] group-hover:text-[#F85800] transition-colors flex items-center gap-1">
              <span>Standard Hardcover &bull; Click to Explore</span>
              <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>

        {/* Center Column: The Core Methodology & 4 Pillars */}
        <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1E1E1E] border border-[#3A3A3A] text-[#F85800] text-[11px] font-sans font-bold uppercase tracking-[0.16em]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F85800] animate-pulse" />
            <span>THE COMPLETE METHODOLOGY &bull; 18 CHAPTERS</span>
          </div>

          <div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#F5F3EF] tracking-tight leading-tight">
              CUT THE <span className="text-[#F85800]">CRAP</span>
            </h2>
            <p className="font-display italic text-lg sm:text-xl text-[#C8B088] mt-1">
              Lose the Fat. Keep the Freedom.
            </p>
          </div>

          <p className="text-[14px] sm:text-[15px] text-[#B8B5AD] leading-relaxed font-normal">
            A practical approach to sustainable weight loss without extreme diets, food guilt, or restrictive rules. Built on thermodynamics, habit design, and daily discipline.
          </p>

          {/* 4 Real Pillars with crisp icons */}
          <div className="pt-2">
            <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#8C8C8C] block mb-2">
              The 4 Unbreakable Pillars
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <div className="p-2 bg-[#1A1A1A] border border-[#2B2B2B] text-left">
                <div className="flex items-center gap-1.5 text-[#F85800] mb-1">
                  <Dumbbell className="w-3.5 h-3.5" />
                  <span className="text-[11px] font-bold uppercase font-sans tracking-wider">Training</span>
                </div>
                <p className="text-[10px] text-[#8C8C8C] leading-snug">Metabolic strength &amp; muscle retention</p>
              </div>

              <div className="p-2 bg-[#1A1A1A] border border-[#2B2B2B] text-left">
                <div className="flex items-center gap-1.5 text-[#F85800] mb-1">
                  <Utensils className="w-3.5 h-3.5" />
                  <span className="text-[11px] font-bold uppercase font-sans tracking-wider">Nutrition</span>
                </div>
                <p className="text-[10px] text-[#8C8C8C] leading-snug">Calorie balance without food guilt</p>
              </div>

              <div className="p-2 bg-[#1A1A1A] border border-[#2B2B2B] text-left">
                <div className="flex items-center gap-1.5 text-[#C8B088] mb-1">
                  <Shield className="w-3.5 h-3.5" />
                  <span className="text-[11px] font-bold uppercase font-sans tracking-wider">Faith</span>
                </div>
                <p className="text-[10px] text-[#8C8C8C] leading-snug">Purpose greater than mirror reflection</p>
              </div>

              <div className="p-2 bg-[#1A1A1A] border border-[#2B2B2B] text-left">
                <div className="flex items-center gap-1.5 text-[#F85800] mb-1">
                  <Target className="w-3.5 h-3.5" />
                  <span className="text-[11px] font-bold uppercase font-sans tracking-wider">Discipline</span>
                </div>
                <p className="text-[10px] text-[#8C8C8C] leading-snug">Habit systems that survive hard days</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Launch Editions & Live Actions */}
        <div className="lg:col-span-3 bg-[#171717] border border-[#2E2E2E] p-5 sm:p-6 flex flex-col justify-between space-y-4">
          <div>
            <div className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#F85800] mb-1">
              Available Formats
            </div>
            <h3 className="font-display font-bold text-lg text-[#F5F3EF]">
              Official Book Release
            </h3>
            <div className="divide-y divide-[#262626] mt-3">
              <div className="py-2 flex items-center justify-between text-xs">
                <span className="text-[#D1CFC7]">Founder's Signed Hardcover</span>
                <span className="font-bold text-[#D4AF37]">$49.00</span>
              </div>
              <div className="py-2 flex items-center justify-between text-xs">
                <span className="text-[#D1CFC7]">Standard Paperback Print</span>
                <span className="font-bold text-[#F5F3EF]">$24.99</span>
              </div>
              <div className="py-2 flex items-center justify-between text-xs">
                <span className="text-[#D1CFC7]">Instant Digital (PDF/ePub)</span>
                <span className="font-bold text-[#60A5FA]">$14.99</span>
              </div>
            </div>
          </div>

          <div className="space-y-2 pt-2 border-t border-[#262626]">
            <button
              onClick={handlePrimaryClick}
              className="w-full py-3.5 bg-[#F85800] hover:bg-[#E05000] text-[#141414] font-sans font-bold text-xs uppercase tracking-[0.1em] transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Explore Book &amp; Order</span>
            </button>
            <button
              onClick={handleReadSample}
              className="w-full py-2.5 bg-[#222] hover:bg-[#2C2C2C] text-[#F5F3EF] border border-[#3A3A3A] font-sans font-bold text-[11px] uppercase tracking-[0.08em] transition-colors flex items-center justify-center gap-2"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#F85800]" />
              <span>Read Free Sample</span>
            </button>
          </div>

          <div className="text-[10px] text-[#777] text-center pt-1">
            &bull; Instant DRM-free digital downloads &bull;
          </div>
        </div>
      </div>

      {/* Interactive Web Control Bar */}
      <div className="bg-[#121212] border-t border-[#242424] px-6 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#8C8C8C]">
        <div className="flex items-center gap-2">
          <Award className="w-4 h-4 text-[#F85800]" />
          <span>Direct distribution by Up Armor Publishing &bull; Authored by Lucas Heffner, MBA, NASM-CNC</span>
        </div>
        <div className="flex items-center gap-4 text-[#C8B088]">
          <span>Includes 18 Chapters</span>
          <span>&bull;</span>
          <span>Full Field Frameworks</span>
          <span>&bull;</span>
          <span>Free Digital Worksheets</span>
        </div>
      </div>
    </div>
  );
};

/**
 * =========================================================================
 * 2. THE FOUNDER'S EDITION COLLECTOR SHOWCASE BANNER
 * Replaces cartoonish ImageMagick render with an authentic luxury collector volume
 * =========================================================================
 */
export const FoundersEditionBanner: React.FC<
  BannerProps & { onSelectHardcover?: () => void }
> = ({
  navigate,
  className = '',
  onPreorderClick,
  onSelectHardcover,
}) => {
  const handlePrimaryClick = () => {
    if (onSelectHardcover) {
      onSelectHardcover();
    } else if (onPreorderClick) {
      onPreorderClick();
    } else if (navigate) {
      navigate('/cutthecrap');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`relative w-full overflow-hidden bg-gradient-to-br from-[#1C150E] via-[#130E08] to-[#0A0704] border-2 border-[#8C6F42]/80 shadow-[0_25px_65px_rgba(0,0,0,0.95)] text-[#F5F3EF] ${className}`}
    >
      {/* Burnished brass corner accent frame */}
      <div className="absolute inset-1 border border-[#8C6F42]/20 pointer-events-none" />

      {/* Subtle luxury warm lighting */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#D4AF37]/8 rounded-full blur-3xl pointer-events-none" />

      {/* Main Grid Showcase */}
      <div className="relative z-10 p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left Column: 3D Realistic Founder's Hardcover */}
        <div className="lg:col-span-4 flex justify-center items-center">
          <div
            onClick={handlePrimaryClick}
            className="cursor-pointer transition-transform duration-300 hover:scale-[1.02] flex flex-col items-center group"
            title="Click to preorder Founder's Edition"
          >
            <RealisticBookCover edition="founders" size="md" />
            <span className="mt-3 text-[11px] font-mono uppercase tracking-widest text-[#D4AF37] group-hover:text-white transition-colors flex items-center gap-1">
              <span>Strict 500 Copy Run &bull; Signed</span>
              <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>

        {/* Center Column: Heritage, Inscription & Collector Details */}
        <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2A1D0B] border border-[#8C6F42] text-[#D4AF37] text-[11px] font-sans font-bold uppercase tracking-[0.18em]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>COLLECTOR'S EDITION &bull; 500 COPIES ONLY</span>
          </div>

          <div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#F5F3EF] tracking-tight leading-tight">
              Cut the Crap <span className="text-[#D4AF37]">Founder's Edition</span>
            </h2>
            <p className="font-display italic text-base sm:text-lg text-[#E3D5C0] mt-1">
              "Become the kind of person who never has to lose the same weight twice."
            </p>
          </div>

          <p className="text-[14px] text-[#C8B088] leading-relaxed font-normal">
            Manufactured with custom debossed leatherette casing, gold-foil stamping, archival interior paper, and a personal inscription and signature from author Lucas Heffner.
          </p>

          {/* Detailed Collector Specifications */}
          <div className="pt-2 border-t border-[#4A3219]/60">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#E3D5C0]">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Signed &amp; hand-numbered</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Strict 1-time run of 500</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Gold-foil debossed cover</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Includes instant eBook access</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Preorder Card */}
        <div className="lg:col-span-3 bg-[#24170D] border border-[#8C6F42]/60 p-5 sm:p-6 flex flex-col justify-between space-y-4">
          <div>
            <div className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#D4AF37] mb-1">
              Collector Tier
            </div>
            <h3 className="font-display font-bold text-xl text-[#F5F3EF]">
              Founder's Hardcover
            </h3>
            <div className="text-3xl font-display font-black text-[#D4AF37] my-2">
              $49.00
            </div>
            <p className="text-xs text-[#C8B088] leading-relaxed">
              Strict limit of 500 copies worldwide. Never reprinted once allocation closes.
            </p>
          </div>

          <div className="space-y-2 pt-2 border-t border-[#4A3219]/60">
            <button
              onClick={handlePrimaryClick}
              className="w-full py-3.5 bg-[#D4AF37] hover:bg-[#C09B2A] text-[#141414] font-sans font-bold text-xs uppercase tracking-[0.1em] shadow-lg transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Preorder Founder's &bull; $49</span>
            </button>
          </div>

          <div className="text-[10px] text-[#A08055] text-center pt-1">
            ★ Direct fulfillment &bull; Ships worldwide
          </div>
        </div>
      </div>

      {/* Bottom Authenticity Strip */}
      <div className="bg-[#170F08] border-t border-[#4A3219]/60 px-6 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#C8B088]">
        <div className="flex items-center gap-2">
          <StarWingsInsignia className="w-16 h-3 text-[#D4AF37]" color="#D4AF37" />
          <span>Official Up Armor Publishing Collector Certificate</span>
        </div>
        <div className="flex items-center gap-2 text-[#D4AF37] font-semibold">
          <span>Individually Hand-Numbered #001 to #500</span>
        </div>
      </div>
    </div>
  );
};

/**
 * =========================================================================
 * 3. THE FOUNDER'S EDITION BRONZE PLAQUE
 * Uses rich CSS & SVG vector plaque with metallic depth
 * =========================================================================
 */
export const FoundersPlaqueHeader: React.FC<{ className?: string }> = ({ className = '' }) => {
  return <FoundersEmbossedBadge size="lg" className={className} />;
};
