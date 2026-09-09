import React, { useState } from 'react';
import { PageRoute } from '../types';
import {
  CutTheCrapHorizontalLogo,
  CutTheCrapStackedLogo,
  StarWingsInsignia,
  PhotoPlaceholder,
  PillarTrainingIcon,
  PillarNutritionIcon,
  PillarFaithIcon,
  PillarDisciplineIcon,
} from '../components/BrandLogos';
import { PillarRow } from '../components/PillarRow';
import { FoundersEditionCard } from '../components/FoundersEditionCard';
import { StatusBadge } from '../components/BookCard';
import { FaqAccordion } from '../components/FaqAccordion';
import { ArrowRight, Check, Loader2, Sparkles } from 'lucide-react';

interface StyleGuidePageProps {
  navigate: (route: PageRoute) => void;
}

export const StyleGuidePage: React.FC<StyleGuidePageProps> = ({ navigate }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'colors' | 'type' | 'buttons' | 'badges' | 'icons' | 'founders'>('all');

  const colorTokens = [
    { name: '--color-black', hex: '#141414', desc: 'Primary dark canvas background', textCol: '#F5F3EF' },
    { name: '--color-charcoal', hex: '#1E1E1E', desc: 'Card & elevated container surface', textCol: '#F5F3EF' },
    { name: '--color-white', hex: '#FFFFFF', desc: 'Pure white contrast elements', textCol: '#141414' },
    { name: '--color-offwhite', hex: '#F5F3EF', desc: 'Primary body text & light section bg', textCol: '#141414' },
    { name: '--color-orange', hex: '#F85800', desc: 'Primary brand accent & active CTAs', textCol: '#141414' },
    { name: '--color-gold', hex: '#C8B088', desc: 'Accent, star badge & secondary foil', textCol: '#141414' },
    { name: '--color-bronze-dark', hex: '#4A3A22', desc: "Founder's Edition scoped canvas", textCol: '#F5F3EF' },
    { name: '--color-bronze-light', hex: '#D0B890', desc: "Founder's Edition secondary copy", textCol: '#141414' },
  ];

  const typeScale = [
    { label: 'Display', size: '64px / 4rem', lh: '1.05', wt: '900', class: 'text-display', sample: 'CUT THE CRAP' },
    { label: 'H1', size: '44px / 2.75rem', lh: '1.1', wt: '900', class: 'text-h1', sample: 'Lose the Fat. Keep the Freedom.' },
    { label: 'H2', size: '32px / 2rem', lh: '1.15', wt: '900', class: 'text-h2', sample: 'The 4 Non-Negotiable Pillars' },
    { label: 'H3', size: '24px / 1.5rem', lh: '1.2', wt: '900', class: 'text-h3', sample: 'Chapter 2: The Reality of Energy Balance' },
    { label: 'H4', size: '18px / 1.125rem', lh: '1.25', wt: '900', class: 'text-h4', sample: 'Minimum Viable Execution Baseline' },
    { label: 'Body', size: '16px / 1rem', lh: '1.6', wt: '400', class: 'text-base', sample: 'A practical approach to losing weight, building habits that last, and finally getting off the diet roller coaster.' },
    { label: 'Small', size: '13px / 0.8125rem', lh: '1.5', wt: '400', class: 'text-sm text-[#A3A3A3]', sample: 'Signed and numbered by author Lucas Heffner during the debut print run.' },
    { label: 'Caption', size: '11px / 0.6875rem', lh: '1.4', wt: '500', class: 'text-xs text-[#777] uppercase tracking-wider', sample: 'FIRST PRINTING &bull; INGRAM CAT #89410' },
    { label: 'Eyebrow', size: '12px / 0.75rem', lh: '1.2', wt: '700', class: 'eyebrow-label text-[#F85800]', sample: 'UP ARMOR PUBLISHING STANDARD' },
  ];

  return (
    <div className="w-full bg-[#141414] text-[#F5F3EF]">
      {/* Header */}
      <section className="py-20 lg:py-24 px-6 sm:px-8 border-b border-[#222]">
        <div className="max-w-[1280px] mx-auto space-y-4">
          <span className="eyebrow-label text-[#F85800]">INTERNAL DESIGN SYSTEM</span>
          <h1 className="text-h1 text-[#F5F3EF]">
            Brand Style Guide &amp; Tokens
          </h1>
          <p className="text-[18px] sm:text-[20px] text-[#D1CFC7] max-w-3xl leading-relaxed">
            All brand design tokens, typography scales, interactive component states, icons, and scoped Founder's Edition patterns extracted directly from the developer brief and asset kit.
          </p>

          {/* Quick Section Filter */}
          <div className="pt-4 flex flex-wrap gap-2">
            {(['all', 'colors', 'type', 'buttons', 'badges', 'icons', 'founders'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 text-xs font-sans font-bold uppercase tracking-wider transition-colors ${
                  activeTab === tab
                    ? 'bg-[#F85800] text-[#141414]'
                    : 'bg-[#1E1E1E] text-[#888] hover:text-[#CCC] border border-[#333]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 py-16 space-y-24">
        {/* 1. Colors & Swatches */}
        {(activeTab === 'all' || activeTab === 'colors') && (
          <section className="space-y-6">
            <div className="border-b border-[#2A2A2A] pb-3">
              <span className="eyebrow-label text-[#F85800]">SECTION 01</span>
              <h2 className="text-h2 text-[#F5F3EF]">Color Tokens &amp; Palette</h2>
              <p className="text-xs text-[#8C8C8C] mt-1">
                Extracted verbatim hex values. Scoped bronze/gold palette applies exclusively to the Founder's Edition.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {colorTokens.map((c) => (
                <div key={c.name} className="bg-[#1C1C1C] border border-[#2B2B2B] p-4 space-y-3">
                  <div
                    className="w-full h-24 border border-black/30 flex items-end p-3 rounded-none shadow-inner"
                    style={{ backgroundColor: c.hex }}
                  >
                    <span
                      className="font-mono font-bold text-xs uppercase px-2 py-0.5"
                      style={{
                        backgroundColor: c.textCol === '#141414' ? 'rgba(255,255,255,0.85)' : 'rgba(0,0,0,0.85)',
                        color: c.textCol,
                      }}
                    >
                      {c.hex}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-mono font-bold text-xs text-[#F85800]">{c.name}</h4>
                    <p className="text-xs text-[#8C8C8C] mt-1">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 2. Typography Scale */}
        {(activeTab === 'all' || activeTab === 'type') && (
          <section className="space-y-6">
            <div className="border-b border-[#2A2A2A] pb-3">
              <span className="eyebrow-label text-[#F85800]">SECTION 02</span>
              <h2 className="text-h2 text-[#F5F3EF]">Typography Scale (8px Grid)</h2>
              <p className="text-xs text-[#8C8C8C] mt-1">
                Display &amp; Headings: Archivo Black (900). Body &amp; Accents: Public Sans.
              </p>
            </div>

            <div className="bg-[#181818] border border-[#2B2B2B] divide-y divide-[#282828]">
              {typeScale.map((t) => (
                <div key={t.label} className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-3 space-y-1">
                    <span className="text-xs uppercase font-bold text-[#F85800] tracking-wider block">
                      {t.label}
                    </span>
                    <div className="text-[11px] font-mono text-[#777]">
                      {t.size} &bull; lh {t.lh} &bull; w{t.wt}
                    </div>
                  </div>
                  <div className="lg:col-span-9">
                    <div className={t.class}>{t.sample}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 3. Buttons & Interactive States */}
        {(activeTab === 'all' || activeTab === 'buttons') && (
          <section className="space-y-6">
            <div className="border-b border-[#2A2A2A] pb-3">
              <span className="eyebrow-label text-[#F85800]">SECTION 03</span>
              <h2 className="text-h2 text-[#F5F3EF]">Button Hierarchy &amp; States</h2>
              <p className="text-xs text-[#8C8C8C] mt-1">
                Rectangular geometry (no rounded pill buttons for standard actions).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Primary Buttons */}
              <div className="bg-[#1C1C1C] border border-[#2B2B2B] p-6 space-y-4">
                <span className="text-xs uppercase font-bold text-[#F85800] tracking-wider block">
                  Primary Brand CTA
                </span>
                <button className="w-full py-3.5 bg-[#F85800] text-[#141414] font-sans font-bold text-xs uppercase tracking-[0.1em]">
                  Default State
                </button>
                <button className="w-full py-3.5 bg-[#E05000] text-[#141414] font-sans font-bold text-xs uppercase tracking-[0.1em] shadow-lg">
                  Hover / Active State
                </button>
                <button disabled className="w-full py-3.5 bg-[#F85800]/40 text-[#141414]/50 cursor-not-allowed font-sans font-bold text-xs uppercase tracking-[0.1em]">
                  Disabled State
                </button>
                <button className="w-full py-3.5 bg-[#F85800] text-[#141414] font-sans font-bold text-xs uppercase tracking-[0.1em] flex items-center justify-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Loading State</span>
                </button>
              </div>

              {/* Secondary Buttons */}
              <div className="bg-[#1C1C1C] border border-[#2B2B2B] p-6 space-y-4">
                <span className="text-xs uppercase font-bold text-[#C8B088] tracking-wider block">
                  Secondary Action
                </span>
                <button className="w-full py-3.5 bg-[#1E1E1E] text-[#F5F3EF] border border-[#3A3A3A] font-sans font-bold text-xs uppercase tracking-[0.1em]">
                  Default State
                </button>
                <button className="w-full py-3.5 bg-[#2A2A2A] text-[#FFF] border border-[#555] font-sans font-bold text-xs uppercase tracking-[0.1em]">
                  Hover / Active State
                </button>
                <button disabled className="w-full py-3.5 bg-[#1E1E1E]/50 text-[#666] border border-[#2A2A2A] cursor-not-allowed font-sans font-bold text-xs uppercase tracking-[0.1em]">
                  Disabled State
                </button>
              </div>

              {/* Ghost / Text Buttons */}
              <div className="bg-[#1C1C1C] border border-[#2B2B2B] p-6 space-y-4">
                <span className="text-xs uppercase font-bold text-[#8C8C8C] tracking-wider block">
                  Ghost / Text Action
                </span>
                <button className="w-full py-3.5 text-[#F85800] font-sans font-bold text-xs uppercase tracking-[0.1em] flex items-center justify-center gap-1.5 hover:underline">
                  <span>Explore Toolbox</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="w-full py-3.5 text-[#C8B088] font-sans font-semibold text-xs uppercase tracking-[0.1em] flex items-center justify-center gap-1.5 hover:underline">
                  <span>Read Full Manifesto</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </section>
        )}

        {/* 4. Badges & Lifecycle Status */}
        {(activeTab === 'all' || activeTab === 'badges') && (
          <section className="space-y-6">
            <div className="border-b border-[#2A2A2A] pb-3">
              <span className="eyebrow-label text-[#F85800]">SECTION 04</span>
              <h2 className="text-h2 text-[#F5F3EF]">Book Status Badges &amp; Eyebrows</h2>
              <p className="text-xs text-[#8C8C8C] mt-1">
                Visual status tags for the multi-title lifecycle system.
              </p>
            </div>

            <div className="bg-[#1C1C1C] border border-[#2B2B2B] p-6 sm:p-8 space-y-6">
              <div className="flex flex-wrap gap-4 items-center">
                <StatusBadge status="available" label="Available Now" />
                <StatusBadge status="preorder" label="Preorder" />
                <StatusBadge status="coming-soon" label="Coming Soon" />
                <StatusBadge status="in-development" label="In Development" />
                <StatusBadge status="sold-out" label="Sold Out" />
              </div>

              <div className="border-t border-[#2A2A2A] pt-6 flex flex-wrap gap-6 items-center">
                <span className="eyebrow-label text-[#F85800]">
                  ORANGE EYEBROW LABEL
                </span>
                <span className="eyebrow-label text-[#C8B088]">
                  GOLD ACCENT EYEBROW
                </span>
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest px-2.5 py-0.5 bg-[#2A1D0B] text-[#C8B088] border border-[#C8B088]">
                  LIMITED EDITION PILL
                </span>
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest px-2 py-0.5 bg-[#2A2A2A] text-[#C8B088] border border-[#444]">
                  [PLACEHOLDER]
                </span>
              </div>
            </div>
          </section>
        )}

        {/* 5. Icons & Insignia */}
        {(activeTab === 'all' || activeTab === 'icons') && (
          <section className="space-y-6">
            <div className="border-b border-[#2A2A2A] pb-3">
              <span className="eyebrow-label text-[#F85800]">SECTION 05</span>
              <h2 className="text-h2 text-[#F5F3EF]">Iconography &amp; Insignia System</h2>
              <p className="text-xs text-[#8C8C8C] mt-1">
                Vector reproductions of brand assets (4 Pillars, Star Wings, Wordmarks).
              </p>
            </div>

            <div className="space-y-8">
              {/* Wordmarks */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#181818] border border-[#2B2B2B] p-8 flex flex-col items-center justify-center text-center">
                  <span className="text-xs uppercase font-bold text-[#888] mb-4">Horizontal Wordmark (Dark)</span>
                  <CutTheCrapHorizontalLogo size="lg" theme="dark" />
                </div>
                <div className="bg-[#F5F3EF] border border-[#E5E0D8] p-8 flex flex-col items-center justify-center text-center">
                  <span className="text-xs uppercase font-bold text-[#666] mb-4">Horizontal Wordmark (Light)</span>
                  <CutTheCrapHorizontalLogo size="lg" theme="light" />
                </div>
              </div>

              {/* Star Wings Insignia */}
              <div className="bg-[#181818] border border-[#2B2B2B] p-8 text-center space-y-4">
                <span className="text-xs uppercase font-bold text-[#888] block">Star Wings Foil Insignia</span>
                <div className="flex justify-center">
                  <StarWingsInsignia className="w-48 h-10" color="#C8B088" />
                </div>
              </div>

              {/* 4 Pillars Strip */}
              <div className="space-y-2">
                <span className="text-xs uppercase font-bold text-[#888] block">The 4 Pillars (Training, Nutrition, Faith, Discipline)</span>
                <PillarRow theme="dark" showSubtitles={true} />
              </div>

              {/* Mandatory Photo Placeholder Demo */}
              <div className="space-y-2">
                <span className="text-xs uppercase font-bold text-[#888] block">Mandatory Neutral Photo Placeholder Component</span>
                <PhotoPlaceholder
                  description="Lucas Heffner — Transformation Credibility Specimen (44% to 13%)"
                  aspectRatio="aspect-21/9"
                />
              </div>
            </div>
          </section>
        )}

        {/* 6. Scoped Founder's Edition */}
        {(activeTab === 'all' || activeTab === 'founders') && (
          <section className="space-y-6">
            <div className="border-b border-[#2A2A2A] pb-3">
              <span className="eyebrow-label text-[#F85800]">SECTION 06</span>
              <h2 className="text-h2 text-[#F5F3EF]">Scoped Founder's Edition Card Component</h2>
              <p className="text-xs text-[#8C8C8C] mt-1">
                Scoped strictly to .founders-edition class. Includes interactive toggle for Active Preorder vs. Sold Out stamp state.
              </p>
            </div>

            <FoundersEditionCard />
          </section>
        )}
      </div>
    </div>
  );
};
