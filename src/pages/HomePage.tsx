import React, { useState } from 'react';
import { PageRoute } from '../types';
import { CutTheCrapHorizontalLogo, CutTheCrapStackedLogo, PhotoPlaceholder } from '../components/BrandLogos';
import { PillarRow } from '../components/PillarRow';
import { FoundersEditionCard } from '../components/FoundersEditionCard';
import { ARTICLES_DATA } from '../data/siteData';
import { useCart } from '../context/CartContext';
import { ArrowRight, BookOpen, Wrench, Users, CheckCircle2, ChevronRight } from 'lucide-react';

interface HomePageProps {
  navigate: (route: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  const { addToCart } = useCart();
  // Launch status test toggle per brief Section 2: "Primary CTA changes by launch status: Learn More -> Preorder -> Order Now."
  const [launchStatus, setLaunchStatus] = useState<'learn-more' | 'preorder' | 'order-now'>('preorder');

  const getPrimaryCta = () => {
    switch (launchStatus) {
      case 'learn-more':
        return { text: 'Learn More', route: '/cutthecrap' as PageRoute };
      case 'preorder':
        return { text: 'Preorder Cut the Crap', route: '/cutthecrap' as PageRoute };
      case 'order-now':
        return { text: 'Order Now', route: '/store' as PageRoute };
    }
  };

  const primaryCta = getPrimaryCta();

  return (
    <div className="w-full">
      {/* Launch Status Simulation Bar (For client testing per brief) */}
      <div className="bg-[#181818] border-b border-[#2A2A2A] px-4 py-2 text-xs flex flex-wrap items-center justify-between gap-2">
        <span className="text-[#8C8C8C] font-mono">
          Interactive State Switcher (Brief Section 2):
        </span>
        <div className="flex items-center gap-2">
          <span className="text-[#A3A3A3] text-[11px] uppercase tracking-wider">CTA Lifecycle State:</span>
          {(['learn-more', 'preorder', 'order-now'] as const).map((st) => (
            <button
              key={st}
              onClick={() => setLaunchStatus(st)}
              className={`px-2.5 py-1 text-[11px] font-sans font-bold uppercase tracking-wider transition-colors ${
                launchStatus === st
                  ? 'bg-[#F85800] text-[#141414]'
                  : 'bg-[#222] text-[#888] hover:text-[#CCC]'
              }`}
            >
              {st.replace('-', ' ')}
            </button>
          ))}
        </div>
      </div>

      {/* Hero Section — Full-Bleed Dark per spec */}
      <section className="relative bg-[#141414] text-[#F5F3EF] pt-16 pb-24 lg:pt-24 lg:pb-32 px-6 sm:px-8 border-b border-[#222] overflow-hidden">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            {/* Author Credential Eyebrow */}
            <div className="space-y-1">
              <span className="eyebrow-label text-[#C8B088] tracking-[0.16em]">
                LUCAS HEFFNER
              </span>
              <p className="text-xs sm:text-sm font-sans uppercase tracking-wider text-[#A3A3A3]">
                Author &bull; Certified Nutrition Coach &bull; Veteran &bull; Entrepreneur
              </p>
            </div>

            {/* CUT THE CRAP Headline */}
            <div>
              <h1 className="text-h1 text-[#F5F3EF] tracking-tight">
                CUT THE <span className="text-[#F85800]">CRAP</span>
              </h1>
              <h2 className="text-h2 text-[#F5F3EF] mt-1">
                Lose the Fat. Keep the Freedom.
              </h2>
            </div>

            {/* Verbatim Subheadline */}
            <p className="text-[18px] sm:text-[20px] text-[#D1CFC7] leading-relaxed max-w-xl font-medium">
              "A practical approach to losing weight, building habits that last, and finally getting off the diet roller coaster."
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <button
                onClick={() => {
                  navigate(primaryCta.route);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-[#F85800] hover:bg-[#E05000] text-[#141414] font-sans font-bold text-[15px] uppercase tracking-[0.08em] transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <span>{primaryCta.text}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  navigate('/toolkit');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-[#1E1E1E] hover:bg-[#282828] text-[#F5F3EF] border border-[#3A3A3A] font-sans font-semibold text-[15px] uppercase tracking-[0.08em] transition-colors flex items-center justify-center gap-2"
              >
                <span>Explore the Toolbox</span>
                <Wrench className="w-4 h-4 text-[#F85800]" />
              </button>
            </div>

            <div className="pt-4 border-t border-[#222] flex items-center gap-4 text-xs text-[#8C8C8C]">
              <span className="flex items-center gap-1.5 text-[#C8B088]">
                <CheckCircle2 className="w-4 h-4 text-[#F85800]" />
                Ingram &amp; Up Armor Publishing Standard
              </span>
              <span className="hidden sm:inline text-[#444]">&bull;</span>
              <span className="hidden sm:inline">Signed Founder's Edition Allocated</span>
            </div>
          </div>

          {/* Right Hero Visual: Book Representation */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-[#1E1E1E] border border-[#2F2F2F] p-6 sm:p-8 relative">
              <div className="absolute top-4 right-4 bg-[#F85800] text-[#141414] text-[11px] font-sans font-bold uppercase tracking-widest px-2.5 py-0.5">
                First Book Release
              </div>
              <div className="w-full aspect-3/4 bg-[#111] border border-[#333] flex flex-col justify-between p-6 text-center relative overflow-hidden shadow-2xl">
                <div className="text-[11px] font-sans uppercase font-bold tracking-[0.2em] text-[#C8B088]">
                  UP ARMOR PUBLISHING
                </div>
                <div className="my-auto py-6">
                  <CutTheCrapHorizontalLogo size="md" theme="dark" />
                  <p className="text-xs text-[#F85800] font-sans font-semibold uppercase tracking-wider mt-3">
                    Lose the Fat. Keep the Freedom.
                  </p>
                </div>
                <div className="border-t border-[#2A2A2A] pt-4">
                  <span className="text-[12px] font-sans text-[#A3A3A3] uppercase tracking-wider">
                    LUCAS HEFFNER, MBA, NASM-CNC
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars Strip (IMG_4132 reproduction) */}
      <section className="bg-[#1A1A1A] py-16 px-6 sm:px-8 border-b border-[#262626]">
        <div className="max-w-[1280px] mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow-label text-[#F85800]">CORE PILLARS</span>
            <h2 className="text-h3 text-[#F5F3EF] mt-1">The 4 Non-Negotiable Foundations</h2>
            <p className="text-sm text-[#A3A3A3] mt-2">
              Sustainable fat loss is an engineering discipline anchored across physical, behavioral, and spiritual resilience.
            </p>
          </div>
          <PillarRow theme="dark" showSubtitles={true} />
        </div>
      </section>

      {/* Transformation / Author Story — Off-White Background per Spec Section 11 */}
      <section className="bg-[#F5F3EF] text-[#141414] py-24 sm:py-32 px-6 sm:px-8 border-b border-[#E5E0D8]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Photos column */}
          <div className="lg:col-span-5 space-y-6">
            <PhotoPlaceholder
              description="Lucas Heffner — 140+ lb Transformation (~44% body fat down to ~13%)"
              aspectRatio="aspect-4/5"
            />
            <div className="p-4 bg-white border border-[#E0DBD0] text-xs text-[#555] space-y-1">
              <p className="font-semibold text-[#141414] uppercase tracking-wider">
                Transformation Credibility Note
              </p>
              <p>
                Photos support credibility—they are not an infomercial sales pitch. Every principle in the book stems from living the failure first.
              </p>
            </div>
          </div>

          {/* Story & Pullquote */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="eyebrow-label text-[#F85800]">THE AUTHOR'S JOURNEY</span>
              <h2 className="text-h2 text-[#141414] mt-1">
                "I didn't write Cut the Crap because I've always had nutrition figured out. I wrote it because I didn't."
              </h2>
            </div>

            {/* Asymmetric Pull Quote breaking grid on desktop */}
            <div className="editorial-pullquote p-6 sm:p-8 bg-white border-l-4 border-[#F85800] shadow-sm text-[#141414]">
              <p className="relative z-10">
                I know what it's like to struggle with weight, lose it, gain it back, and wonder why doing everything 'right' still doesn't seem to work.
              </p>
            </div>

            <div className="space-y-4 text-[17px] leading-relaxed text-[#333]">
              <p>
                Eventually, I stopped looking for another diet and started learning how nutrition actually works.
              </p>
              <p className="font-semibold text-[#141414] text-[18px]">
                I lost more than 140 pounds and learned how to keep it off without giving up the foods and life I enjoy.
              </p>
              <p className="text-[19px] text-[#141414] font-medium pt-2">
                "Cut the Crap is the book I wish someone had handed me years ago."
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => {
                  navigate('/about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3.5 bg-[#141414] hover:bg-[#2A2A2A] text-[#F5F3EF] font-sans font-bold text-xs uppercase tracking-[0.1em] transition-colors flex items-center gap-2"
              >
                <span>Read Lucas's Full Story</span>
                <ArrowRight className="w-4 h-4 text-[#F85800]" />
              </button>

              <button
                onClick={() => {
                  navigate('/cutthecrap');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3.5 bg-[#F85800] hover:bg-[#E05000] text-[#141414] font-sans font-bold text-xs uppercase tracking-[0.1em] transition-colors"
              >
                Explore Cut the Crap
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Book Section: Cut the Crap & Founder's Edition */}
      <section className="bg-[#141414] text-[#F5F3EF] py-24 sm:py-32 px-6 sm:px-8 border-b border-[#222]">
        <div className="max-w-[1280px] mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-3">
              <span className="eyebrow-label text-[#F85800]">FEATURED WORK &bull; DEBUT RELEASE</span>
              <h2 className="text-h2 text-[#F5F3EF]">
                CUT THE CRAP &mdash; Lose the Fat. Keep the Freedom.
              </h2>
              <p className="text-[18px] text-[#A3A3A3] leading-relaxed max-w-3xl">
                "No detoxes. No forbidden-food lists. No pretending you need to live on chicken and broccoli for the rest of your life. Cut the Crap teaches the fundamentals that actually matter and shows you how to build them into a life you can keep living."
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <button
                onClick={() => {
                  navigate('/cutthecrap');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3.5 bg-[#F85800] hover:bg-[#E05000] text-[#141414] font-sans font-bold text-xs uppercase tracking-[0.1em] transition-colors flex items-center gap-2"
              >
                <span>Explore Cut the Crap</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Full Founder's Edition Interactive Module */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#C8B088] uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#F85800]" />
              Signature Preorder Spotlight (IMG_4134 Composition)
            </div>
            <FoundersEditionCard
              onAddToCart={() => {
                addToCart({
                  id: 'founders-hardcover',
                  title: 'CUT THE CRAP',
                  edition: "Founder's Edition Hardcover (Signed & Numbered)",
                  price: 49.0,
                  isFoundersEdition: true,
                  isDigital: false,
                });
              }}
            />
          </div>
        </div>
      </section>

      {/* Toolbox Section per Brief Section 2 */}
      <section className="bg-[#1E1E1E] text-[#F5F3EF] py-24 px-6 sm:px-8 border-b border-[#2A2A2A]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="eyebrow-label text-[#F85800]">PRACTICAL IMPLEMENTATION</span>
            <h2 className="text-h2 text-[#F5F3EF]">
              Don't Just Read the Book. Use It.
            </h2>
            <p className="text-[18px] text-[#A3A3A3] leading-relaxed max-w-xl">
              "The Cut the Crap Toolbox brings together the tools, products, resources, and recommendations referenced throughout the book."
            </p>
            <p className="text-sm text-[#8C8C8C]">
              From digital scales and dynamic energy burn calculators to kitchen tools and zero-fluff hydration protocols, every item has been vetted in the field.
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  navigate('/toolkit');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-[#F85800] hover:bg-[#E05000] text-[#141414] font-sans font-bold text-xs uppercase tracking-[0.1em] transition-colors flex items-center gap-2"
              >
                <span>Open the Toolbox</span>
                <Wrench className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="p-5 bg-[#141414] border border-[#2B2B2B]">
              <span className="text-xs text-[#F85800] font-bold uppercase tracking-wider block mb-1">01 &bull; Nutrition</span>
              <h4 className="font-display text-base text-[#F5F3EF]">Precision Tools</h4>
              <p className="text-xs text-[#888] mt-1">Calibrated digital scales &amp; high-protein essentials.</p>
            </div>
            <div className="p-5 bg-[#141414] border border-[#2B2B2B]">
              <span className="text-xs text-[#F85800] font-bold uppercase tracking-wider block mb-1">02 &bull; Kitchen</span>
              <h4 className="font-display text-base text-[#F5F3EF]">Friction Cutters</h4>
              <p className="text-xs text-[#888] mt-1">Air fryers &amp; speed-prep accessories.</p>
            </div>
            <div className="p-5 bg-[#141414] border border-[#2B2B2B]">
              <span className="text-xs text-[#F85800] font-bold uppercase tracking-wider block mb-1">03 &bull; Tracking</span>
              <h4 className="font-display text-base text-[#F5F3EF]">Data Engines</h4>
              <p className="text-xs text-[#888] mt-1">Trend smoothing &amp; adaptive calorie tracking.</p>
            </div>
            <div className="p-5 bg-[#141414] border border-[#2B2B2B]">
              <span className="text-xs text-[#F85800] font-bold uppercase tracking-wider block mb-1">04 &bull; Training</span>
              <h4 className="font-display text-base text-[#F5F3EF]">Readiness Gear</h4>
              <p className="text-xs text-[#888] mt-1">Travel resistance packs &amp; recovery protocols.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section per Brief Section 2 */}
      <section className="bg-[#141414] text-[#F5F3EF] py-24 px-6 sm:px-8 border-b border-[#222]">
        <div className="max-w-[1280px] mx-auto text-center space-y-6 max-w-3xl">
          <span className="eyebrow-label text-[#F85800]">ACCOUNTABILITY ECOSYSTEM</span>
          <h2 className="text-h2 text-[#F5F3EF]">
            Find Your Battle Buddy.
          </h2>
          <p className="text-[18px] sm:text-[20px] text-[#A3A3A3] leading-relaxed">
            "Change is easier when you aren't doing it alone. Join the Cut the Crap Community to share your progress, your Click Moment, your wins, your setbacks, and what you're learning along the way."
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => {
                navigate('/community');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-[#F85800] hover:bg-[#E05000] text-[#141414] font-sans font-bold text-xs uppercase tracking-[0.1em] transition-colors flex items-center gap-2"
            >
              <span>Join the Community</span>
              <Users className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                navigate('/shareyourclickmoment');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-4 bg-[#1E1E1E] hover:bg-[#252525] text-[#C8B088] border border-[#333] font-sans font-semibold text-xs uppercase tracking-[0.1em] transition-colors"
            >
              Share Your Click Moment
            </button>
          </div>
        </div>
      </section>

      {/* Latest Articles Hub per Brief Section 2 */}
      <section className="bg-[#181818] text-[#F5F3EF] py-24 px-6 sm:px-8 border-b border-[#262626]">
        <div className="max-w-[1280px] mx-auto space-y-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <span className="eyebrow-label text-[#F85800]">FIELD NOTES &bull; PERSPECTIVES</span>
              <h2 className="text-h2 text-[#F5F3EF] mt-1">Latest Articles</h2>
            </div>
            <button
              onClick={() => {
                navigate('/articles');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs uppercase font-sans font-bold tracking-wider text-[#F85800] hover:text-[#E05000] flex items-center gap-1"
            >
              <span>View All Articles</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ARTICLES_DATA.slice(0, 3).map((article) => (
              <article
                key={article.id}
                onClick={() => {
                  navigate('/article-detail');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-[#1E1E1E] border border-[#2B2B2B] card-hover p-6 sm:p-8 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#777] mb-3">
                    <span className="text-[#F85800] uppercase font-bold tracking-wider">
                      {article.category}
                    </span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="font-display text-xl text-[#F5F3EF] group-hover:text-[#F85800] transition-colors mb-3">
                    {article.title}
                  </h3>
                  <p className="text-sm text-[#A3A3A3] leading-relaxed line-clamp-3 mb-6">
                    {article.excerpt}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#2A2A2A] flex items-center justify-between text-xs text-[#8C8C8C]">
                  <span>{article.date}</span>
                  <span className="text-[#F85800] font-semibold group-hover:translate-x-1 transition-transform">
                    Read Article &rarr;
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
