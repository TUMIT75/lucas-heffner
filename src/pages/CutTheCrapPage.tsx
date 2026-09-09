import React, { useState } from 'react';
import { PageRoute } from '../types';
import { CutTheCrapHorizontalLogo, CutTheCrapStackedLogo, PhotoPlaceholder, StarWingsInsignia } from '../components/BrandLogos';
import { PillarRow } from '../components/PillarRow';
import { FoundersEditionCard } from '../components/FoundersEditionCard';
import { FaqAccordion } from '../components/FaqAccordion';
import { useCart } from '../context/CartContext';
import {
  Check,
  X,
  CheckCircle2,
  ArrowRight,
  ShoppingBag,
  VolumeX,
  BookOpen,
  Smartphone,
  Wrench,
  Users,
} from 'lucide-react';

interface CutTheCrapPageProps {
  navigate: (route: PageRoute) => void;
}

export const CutTheCrapPage: React.FC<CutTheCrapPageProps> = ({ navigate }) => {
  const { addToCart } = useCart();
  const [selectedEdition, setSelectedEdition] = useState<'founders' | 'paperback' | 'ebook'>('founders');

  const handleAddToCart = (id: string, title: string, edition: string, price: number, isDigital = false) => {
    addToCart({
      id,
      title,
      edition,
      price,
      isDigital,
    });
  };

  const whatIsAbout = [
    'Energy balance',
    'Protein',
    'Food choices',
    'Hunger',
    'Tracking',
    'Exercise',
    'Habits',
    'Mindset',
    'Maintenance',
    'How to evaluate nutrition claims',
    'How to build a sustainable lifestyle',
  ];

  const whatIsNot = [
    'A crash diet',
    'A detox',
    'A meal plan readers must follow forever',
    'A forbidden-food list',
    'A promise of effortless weight loss',
    'Another temporary challenge',
  ];

  const whoItsFor = [
    'Readers who have lost weight and regained it',
    'Readers overwhelmed by conflicting nutrition advice',
    'Readers who think they need more motivation',
    'Readers who have tried restrictive diets',
    'Readers who want to understand why weight loss works',
    'Readers who want to enjoy food while maintaining a healthy body',
    'Readers who want a system they can actually live with',
  ];

  return (
    <div className="w-full bg-[#141414] text-[#F5F3EF]">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 border-b border-[#222]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#C8B088] uppercase tracking-[0.2em]">
              <span className="w-2 h-2 rounded-full bg-[#F85800]" />
              UP ARMOR PUBLISHING DEBUT TITLE
            </div>

            <div>
              <h1 className="text-h1 text-[#F5F3EF] leading-none">
                CUT THE <span className="text-[#F85800]">CRAP</span>
              </h1>
              <h2 className="text-h2 text-[#F5F3EF] mt-2">
                Lose the Fat. Keep the Freedom.
              </h2>
            </div>

            <p className="text-[19px] sm:text-[22px] text-[#D1CFC7] leading-relaxed max-w-xl font-medium">
              A practical approach to sustainable weight loss without the noise, gimmicks, or unnecessary rules.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  const el = document.getElementById('choose-edition');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-[#F85800] hover:bg-[#E05000] text-[#141414] font-sans font-bold text-[15px] uppercase tracking-[0.08em] transition-colors flex items-center justify-center gap-2 shadow-xl"
              >
                <span>Preorder Cut the Crap</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => navigate('/toolkit')}
                className="px-6 py-4 bg-[#1E1E1E] hover:bg-[#282828] text-[#F5F3EF] border border-[#333] font-sans font-semibold text-[15px] uppercase tracking-[0.08em] transition-colors flex items-center justify-center gap-2"
              >
                <span>View Companion Toolbox</span>
                <Wrench className="w-4 h-4 text-[#F85800]" />
              </button>
            </div>

            <div className="flex items-center gap-6 pt-4 text-xs text-[#8C8C8C]">
              <span>★ Limited Founder's Hardcover</span>
              <span>&bull;</span>
              <span>Paperback Edition</span>
              <span>&bull;</span>
              <span>DRM-Free eBook</span>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <PhotoPlaceholder
              description="Cut the Crap — Official Hardcover and Paperback Print Proof Mockup"
              aspectRatio="aspect-4/5"
            />
          </div>
        </div>
      </section>

      {/* 4 Pillars Strip */}
      <section className="bg-[#181818] py-12 px-6 sm:px-8 border-b border-[#262626]">
        <div className="max-w-[1280px] mx-auto">
          <PillarRow theme="dark" showSubtitles={false} />
        </div>
      </section>

      {/* Opening Manifesto per Brief Section 5 */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 border-b border-[#222] bg-[#141414]">
        <div className="max-w-[1280px] mx-auto max-w-3xl text-center space-y-8">
          <span className="eyebrow-label text-[#F85800]">THE PROBLEM</span>
          <h2 className="text-h2 text-[#F5F3EF]">
            "Losing weight isn't complicated because your body is mysterious."
          </h2>

          <div className="space-y-6 text-[20px] sm:text-[22px] leading-relaxed text-[#D1CFC7] font-sans">
            <p>
              It's complicated because you've spent your entire life surrounded by conflicting advice, marketing, diet rules, miracle products, and people telling you that the answer is something new.
            </p>
            <p className="font-display text-2xl sm:text-3xl text-[#F85800] tracking-wide pt-2">
              Cut the Crap strips that away.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Opposition Columns per Brief Section 11 */}
      <section className="py-20 sm:py-28 px-6 sm:px-8 border-b border-[#222]">
        <div className="max-w-[1280px] mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow-label text-[#F85800]">THE DISTINCTION</span>
            <h2 className="text-h2 text-[#F5F3EF] mt-1">What This Is &bull; What This Is NOT</h2>
            <p className="text-sm text-[#A3A3A3] mt-2">
              A real visual opposition between actionable physiological principles and the noise of modern fitness marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Left Column: What This Book Is About (Orange checkmarks on Off-White) */}
            <div className="bg-[#F5F3EF] text-[#141414] p-8 sm:p-12 border-t-4 border-[#F85800] shadow-xl flex flex-col justify-between">
              <div>
                <span className="eyebrow-label text-[#F85800] font-bold">THE BLUEPRINT</span>
                <h3 className="font-display text-2xl sm:text-3xl text-[#141414] mt-1 mb-8">
                  What This Book Is About
                </h3>
                <ul className="space-y-4">
                  {whatIsAbout.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3.5">
                      <span className="w-6 h-6 rounded-full bg-[#F85800] text-white flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                      <span className="text-[17px] font-sans font-medium text-[#141414] leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 pt-6 border-t border-[#DDD7CD] text-xs font-sans text-[#666]">
                &bull; Built on non-negotiable principles of human physiology and behavioral habit architecture.
              </div>
            </div>

            {/* Right Column: What This Book Is NOT (Muted strikethrough list on Charcoal) */}
            <div className="bg-[#1C1C1C] text-[#F5F3EF] p-8 sm:p-12 border border-[#2B2B2B] flex flex-col justify-between">
              <div>
                <span className="eyebrow-label text-[#8C8C8C] font-semibold">THE JUNK WE REJECT</span>
                <h3 className="font-display text-2xl sm:text-3xl text-[#F5F3EF] mt-1 mb-8">
                  What This Book Is NOT
                </h3>
                <ul className="space-y-6">
                  {whatIsNot.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3.5 group">
                      <span className="w-6 h-6 rounded-full bg-[#2A2A2A] border border-[#444] text-[#8C8C8C] flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-3.5 h-3.5 stroke-[2.5]" />
                      </span>
                      <span className="text-[17px] font-sans text-[#8C8C8C] line-through decoration-[#C24A1E]/80 decoration-2 leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 pt-6 border-t border-[#262626] text-xs font-sans text-[#777]">
                &bull; Zero fake enemies, zero proprietary supplements, zero unsustainable extreme restrictions.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For per Brief Section 5 */}
      <section className="bg-[#181818] py-24 sm:py-32 px-6 sm:px-8 border-b border-[#262626]">
        <div className="max-w-[1280px] mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="eyebrow-label text-[#F85800]">TARGET AUDIENCE</span>
            <h2 className="text-h2 text-[#F5F3EF]">Who It's For</h2>
            <p className="text-[17px] text-[#A3A3A3]">
              Written for real people operating in demanding environments who cannot afford to waste mental bandwidth on dogmatic diets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whoItsFor.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#141414] border border-[#2B2B2B] flex items-start gap-4"
              >
                <span className="font-display text-xl text-[#F85800] leading-none shrink-0">
                  {(idx + 1).toString().padStart(2, '0')}
                </span>
                <p className="text-[16px] text-[#D1CFC7] font-sans leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lucas's Transformation credibility module */}
      <section className="py-24 px-6 sm:px-8 border-b border-[#222] bg-[#141414]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="eyebrow-label text-[#F85800]">LIVED EXPERIENCE</span>
            <h2 className="text-h2 text-[#F5F3EF]">
              Lucas's Transformation
            </h2>
            <div className="p-6 bg-[#1E1E1E] border-l-4 border-[#F85800] space-y-3 text-[#D1CFC7]">
              <p className="text-[17px] font-semibold text-[#F5F3EF]">
                "Do not turn this into an infomercial-style before/after page. The photos support credibility; they are not the entire argument."
              </p>
              <p className="text-sm text-[#A3A3A3] leading-relaxed">
                Lucas went from ~44% body fat to roughly 13%, losing over 140 pounds. But the victory wasn't the loss; it was the sustainable system that allowed him to remain lean and energetic across years of rigorous business and family life.
              </p>
            </div>
            <p className="text-sm text-[#8C8C8C] leading-relaxed">
              When someone has experienced the emotional toll of gaining back lost weight, their advice changes. Cut the Crap is that empathetic, mathematically grounded playbook.
            </p>
          </div>

          <div className="lg:col-span-6">
            <PhotoPlaceholder
              description="Lucas Heffner Before/After Photos — Verifying 140+ lb Sustained Transformation"
              aspectRatio="aspect-16/10"
            />
          </div>
        </div>
      </section>

      {/* Choose Your Edition per Brief Section 5 & 11 */}
      <section id="choose-edition" className="py-24 sm:py-32 px-6 sm:px-8 border-b border-[#222] bg-[#101010]">
        <div className="max-w-[1280px] mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="eyebrow-label text-[#F85800]">PREORDER CATALOGUE</span>
            <h2 className="text-h2 text-[#F5F3EF]">Choose Your Edition</h2>
            <p className="text-[17px] text-[#A3A3A3]">
              Available directly through Up Armor Publishing. Select your preferred format below.
            </p>
          </div>

          {/* 3-Card Row + Disabled Audiobook Slot per Spec Section 11 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {/* Card 1: Founder's Edition Hardcover */}
            <div className="founders-edition border-2 p-6 flex flex-col justify-between shadow-xl relative">
              <div className="absolute top-3 right-3 bg-[#2A1D0B] border border-[#C8B088] px-2 py-0.5 text-[10px] font-sans font-bold text-[#C8B088] uppercase tracking-wider">
                Limited &bull; Signed
              </div>
              <div>
                <div className="text-xs uppercase font-sans font-bold text-[#C8B088] tracking-widest mb-1">
                  Collector's Release
                </div>
                <h3 className="font-display text-2xl text-[#C8B088] mb-1">
                  Founder's Edition
                </h3>
                <p className="text-xs text-[#D0B890] mb-4">Hardcover Volume</p>
                <div className="text-3xl font-display font-bold text-[#F5F3EF] mb-4">
                  $49.00
                </div>
                <ul className="text-xs text-[#C8B088]/90 space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#F85800] shrink-0" />
                    <span>Signed and numbered by Lucas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#F85800] shrink-0" />
                    <span>Limited founding release run</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#F85800] shrink-0" />
                    <span>Once gone: SOLD OUT forever</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#F85800] shrink-0" />
                    <span>Includes instant eBook access</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() =>
                  handleAddToCart(
                    'founders-hardcover',
                    'CUT THE CRAP',
                    "Founder's Edition Hardcover (Signed & Numbered)",
                    49.0
                  )
                }
                className="w-full py-3.5 bg-[#F85800] hover:bg-[#E05000] text-[#141414] font-sans font-bold text-xs uppercase tracking-[0.1em] transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Preorder Founder's</span>
              </button>
            </div>

            {/* Card 2: Paperback Standard Print Edition */}
            <div className="bg-[#1C1C1C] border border-[#2B2B2B] p-6 flex flex-col justify-between card-hover">
              <div>
                <div className="text-xs uppercase font-sans font-bold text-[#8C8C8C] tracking-widest mb-1">
                  Standard Print
                </div>
                <h3 className="font-display text-2xl text-[#F5F3EF] mb-1">
                  Paperback
                </h3>
                <p className="text-xs text-[#8C8C8C] mb-4">Standard print edition</p>
                <div className="text-3xl font-display font-bold text-[#F5F3EF] mb-4">
                  $24.99
                </div>
                <ul className="text-xs text-[#A3A3A3] space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#F85800] shrink-0" />
                    <span>High quality trade paperback</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#F85800] shrink-0" />
                    <span>Full diagrams and habit worksheets</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#F85800] shrink-0" />
                    <span>Ingram production standard</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() =>
                  handleAddToCart('paperback-edition', 'CUT THE CRAP', 'Paperback Edition', 24.99)
                }
                className="w-full py-3.5 bg-[#141414] hover:bg-[#252525] text-[#F5F3EF] border border-[#333] font-sans font-bold text-xs uppercase tracking-[0.1em] transition-colors flex items-center justify-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-[#F85800]" />
                <span>Preorder Paperback</span>
              </button>
            </div>

            {/* Card 3: eBook Digital Edition */}
            <div className="bg-[#1C1C1C] border border-[#2B2B2B] p-6 flex flex-col justify-between card-hover">
              <div>
                <div className="text-xs uppercase font-sans font-bold text-[#8C8C8C] tracking-widest mb-1">
                  Instant Digital
                </div>
                <h3 className="font-display text-2xl text-[#F5F3EF] mb-1">
                  eBook
                </h3>
                <p className="text-xs text-[#8C8C8C] mb-4">Digital edition</p>
                <div className="text-3xl font-display font-bold text-[#F5F3EF] mb-4">
                  $14.99
                </div>
                <ul className="text-xs text-[#A3A3A3] space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#F85800] shrink-0" />
                    <span>DRM-free EPUB &amp; Kindle files</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#F85800] shrink-0" />
                    <span>Instant download upon delivery</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#F85800] shrink-0" />
                    <span>Full hyperlinks to Toolbox items</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() =>
                  handleAddToCart('ebook-edition', 'CUT THE CRAP', 'eBook Digital Edition', 14.99, true)
                }
                className="w-full py-3.5 bg-[#141414] hover:bg-[#252525] text-[#F5F3EF] border border-[#333] font-sans font-bold text-xs uppercase tracking-[0.1em] transition-colors flex items-center justify-center gap-2"
              >
                <Smartphone className="w-4 h-4 text-[#F85800]" />
                <span>Preorder eBook</span>
              </button>
            </div>

            {/* Card 4: Audiobook Slot (Strictly Visually Disabled per Spec Section 11) */}
            <div
              className="bg-[#161616] border border-[#252525] p-6 flex flex-col justify-between opacity-40 cursor-not-allowed select-none"
              aria-disabled="true"
            >
              <div>
                <div className="text-xs uppercase font-sans font-bold text-[#666] tracking-widest mb-1">
                  Unreleased Format
                </div>
                <h3 className="font-display text-2xl text-[#666] mb-1">
                  Audiobook
                </h3>
                <p className="text-xs text-[#555] mb-4">Unannounced production</p>
                <div className="text-2xl font-mono text-[#555] mb-4">
                  &mdash;&mdash;
                </div>
                <p className="text-xs text-[#666] leading-relaxed">
                  Audio format rights are reserved under Up Armor Publishing. Not available for preorder.
                </p>
              </div>
              <div className="w-full py-3.5 bg-[#222] text-[#666] font-sans font-bold text-xs uppercase tracking-[0.1em] text-center">
                Format Reserved
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Toolbox Banner Section */}
      <section className="py-20 px-6 sm:px-8 border-b border-[#222] bg-[#1E1E1E]">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <span className="eyebrow-label text-[#F85800]">COMPANION SUITE</span>
            <h3 className="text-h3 text-[#F5F3EF]">"The book doesn't end on the last page."</h3>
            <p className="text-sm text-[#A3A3A3] max-w-xl">
              Access the exact digital scales, apps, kitchen gear, and tracking protocols referenced throughout the chapters.
            </p>
          </div>
          <button
            onClick={() => {
              navigate('/toolkit');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-[#F85800] hover:bg-[#E05000] text-[#141414] font-sans font-bold text-xs uppercase tracking-[0.1em] transition-colors whitespace-nowrap flex items-center gap-2"
          >
            <span>Open the Cut the Crap Toolbox</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Community Banner Section */}
      <section className="py-20 px-6 sm:px-8 border-b border-[#222] bg-[#141414]">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <span className="eyebrow-label text-[#F85800]">READER SOLIDARITY</span>
            <h3 className="text-h3 text-[#F5F3EF]">Connect with the Community</h3>
            <p className="text-sm text-[#A3A3A3] max-w-xl">
              Find your battle buddy, share your click moment, and celebrate sustainable habit wins with fellow readers.
            </p>
          </div>
          <button
            onClick={() => {
              navigate('/community');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-[#1E1E1E] hover:bg-[#252525] text-[#F5F3EF] border border-[#333] font-sans font-bold text-xs uppercase tracking-[0.1em] transition-colors whitespace-nowrap flex items-center gap-2"
          >
            <span>Join the Cut the Crap Community</span>
            <Users className="w-4 h-4 text-[#F85800]" />
          </button>
        </div>
      </section>

      {/* FAQ Accordion Section per Brief Section 5 */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 border-b border-[#222] bg-[#141414]">
        <div className="max-w-[1280px] mx-auto max-w-4xl space-y-12">
          <div className="text-center space-y-3">
            <span className="eyebrow-label text-[#F85800]">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="text-h2 text-[#F5F3EF]">Frequently Asked Questions</h2>
            <p className="text-sm text-[#A3A3A3]">
              Direct answers to common inquiries regarding the book, editions, and fulfillment.
            </p>
          </div>

          <FaqAccordion theme="dark" />
        </div>
      </section>
    </div>
  );
};
