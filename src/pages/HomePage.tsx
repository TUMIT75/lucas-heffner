import React, { useState } from 'react';
import { PageRoute } from '../types';
import { CutTheCrapHorizontalLogo, CutTheCrapStackedLogo } from '../components/BrandLogos';
import { RealisticBookCover } from '../components/RealisticBookCover';
import { FoundersEditionCard } from '../components/FoundersEditionCard';
import { FlagshipCutTheCrapBanner, FoundersEditionBanner } from '../components/OfficialBrandBanners';
import { BrandAssetShowcaseModal } from '../components/BrandAssetShowcaseModal';
import { ARTICLES_DATA } from '../data/siteData';
import { IMAGE_ASSETS } from '../data/imageAssets';
import { useCart } from '../context/CartContext';
import {
  ArrowRight,
  BookOpen,
  Wrench,
  Users,
  CheckCircle2,
  Download,
  ShoppingBag,
  Sparkles,
  Shield,
  Clock,
  ChevronRight,
  Image as ImageIcon,
  QrCode,
} from 'lucide-react';

interface HomePageProps {
  navigate: (route: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  const { addToCart } = useCart();
  const [launchStatus, setLaunchStatus] = useState<'learn-more' | 'preorder' | 'order-now'>('preorder');
  const [showBrandModal, setShowBrandModal] = useState(false);

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

  const handleQuickAdd = (edition: 'hardcover' | 'paperback' | 'pdf') => {
    if (edition === 'hardcover') {
      addToCart({
        id: 'founders-hardcover',
        title: 'CUT THE CRAP',
        edition: "Founder's Edition Hardcover",
        price: 49.0,
        isFoundersEdition: true,
        isDigital: false,
      });
    } else if (edition === 'paperback') {
      addToCart({
        id: 'paperback-edition',
        title: 'CUT THE CRAP',
        edition: 'Paperback Edition',
        price: 24.99,
        isFoundersEdition: false,
        isDigital: false,
      });
    } else {
      addToCart({
        id: 'ebook-edition',
        title: 'CUT THE CRAP',
        edition: 'Digital PDF & ePub Edition',
        price: 14.99,
        isFoundersEdition: false,
        isDigital: true,
      });
    }
    navigate('/cart');
  };

  return (
    <div className="w-full bg-[#141414] text-[#F5F3EF]">
      {/* Hero Section with Realistic Book Cover & Author Credentials */}
      <section className="relative bg-[#141414] text-[#F5F3EF] pt-16 pb-24 lg:pt-24 lg:pb-32 px-6 sm:px-8 border-b border-[#222] overflow-hidden">
        {/* Subtle geometric background grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#F85800_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6">
            {/* Author Credential Eyebrow */}
            <div className="space-y-1">
              <span className="eyebrow-label text-[#C8B088] tracking-[0.16em] block">
                A NEW BOOK BY LUCAS HEFFNER
              </span>
              <p className="text-xs font-sans uppercase tracking-wider text-[#A3A3A3]">
                Author &bull; Certified Nutrition Coach &bull; U.S. Army Veteran &bull; Founder
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
            <p className="text-[18px] sm:text-[21px] text-[#D1CFC7] leading-relaxed max-w-xl font-normal">
              A practical approach to losing weight, building habits that last, and finally getting off the diet roller coaster.
            </p>

            {/* Action Buttons: Read Book, Buy Physical, Buy PDF */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center flex-wrap">
              <button
                onClick={() => {
                  navigate('/read-book');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-7 py-4 bg-[#F85800] hover:bg-[#E05000] text-[#141414] font-sans font-bold text-sm uppercase tracking-[0.08em] transition-colors flex items-center justify-center gap-2 shadow-xl"
              >
                <BookOpen className="w-4 h-4" />
                <span>Read Free Sample</span>
              </button>

              <button
                onClick={() => {
                  navigate(primaryCta.route);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-7 py-4 bg-[#1E1E1E] hover:bg-[#282828] text-[#F5F3EF] border border-[#3A3A3A] font-sans font-bold text-sm uppercase tracking-[0.08em] transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4 text-[#F85800]" />
                <span>{primaryCta.text}</span>
              </button>

              <button
                onClick={() => handleQuickAdd('pdf')}
                className="px-5 py-4 bg-transparent hover:bg-[#1E1E1E] text-[#C8B088] border border-[#C8B088]/40 font-sans font-semibold text-xs uppercase tracking-[0.08em] transition-colors flex items-center justify-center gap-1.5"
              >
                <Download className="w-4 h-4 text-[#C8B088]" />
                <span>Instant PDF ($14.99)</span>
              </button>
            </div>

            {/* Edition Badges & Publishing Standards */}
            <div className="pt-4 border-t border-[#222] flex flex-wrap items-center gap-4 text-xs text-[#8C8C8C]">
              <span className="flex items-center gap-1.5 text-[#C8B088]">
                <CheckCircle2 className="w-4 h-4 text-[#F85800]" />
                Available in Hardcover &bull; Paperback &bull; Digital PDF / EPUB
              </span>
              <span className="hidden sm:inline text-[#444]">&bull;</span>
              <span className="text-[#AAA]">First Edition Print Run</span>
            </div>
          </div>

          {/* Right Hero Visual: 3D Realistic Book Cover Presentation */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative flex flex-col items-center">
              <RealisticBookCover edition="hardcover" size="lg" />
              <div className="mt-5 text-center text-xs font-sans text-[#8C8C8C] tracking-wider uppercase">
                First Edition Hardcover &bull; Up Armor Publishing
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars Section with Authentic Imagery */}
      <section className="bg-[#181818] py-20 lg:py-28 px-6 sm:px-8 border-b border-[#262626]">
        <div className="max-w-[1280px] mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="eyebrow-label text-[#F85800]">CORE PILLARS</span>
            <h2 className="text-h2 text-[#F5F3EF]">The 4 Non-Negotiable Foundations</h2>
            <p className="text-[16px] text-[#A3A3A3] leading-relaxed">
              Sustainable fat loss is an engineering discipline anchored across physical training, metabolic nutrition, spiritual faith, and behavioral discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Training',
                sub: 'Physical Strength & Muscle Retention',
                desc: 'Mechanical resistance stimulus to protect metabolic rate and functional capability.',
                img: IMAGE_ASSETS.pillars.training,
              },
              {
                title: 'Nutrition',
                sub: 'Energy Balance & Protein Leverage',
                desc: 'Thermodynamics without gimmick diets, detoxes, or artificial food restrictions.',
                img: IMAGE_ASSETS.pillars.nutrition,
              },
              {
                title: 'Faith',
                sub: 'Higher Purpose & Inner Conviction',
                desc: 'Anchoring your physical transformation to something greater than superficial vanity.',
                img: IMAGE_ASSETS.pillars.faith,
              },
              {
                title: 'Discipline',
                sub: 'Habit Systems & Friction Control',
                desc: 'Replacing emotional motivation with ruthless architectural systems that survive bad days.',
                img: IMAGE_ASSETS.pillars.discipline,
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="relative bg-[#1C1C1C] border border-[#2B2B2B] hover:border-[#F85800]/60 transition-colors duration-300 overflow-hidden group flex flex-col justify-between"
              >
                <div className="h-48 w-full relative overflow-hidden bg-[#1C1C1C] -mb-px">
                  <img
                    src={pillar.img}
                    alt={pillar.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out opacity-80 group-hover:opacity-95 will-change-transform transform-gpu"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-[#1C1C1C]/30 to-transparent pointer-events-none" />
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 bg-[#141414]/90 border border-[#F85800] text-[#F85800] font-mono text-[11px] uppercase font-bold tracking-wider">
                      {pillar.title}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="font-display text-xl text-[#F5F3EF]">
                    {pillar.title}
                  </h3>
                  <p className="text-xs uppercase font-sans font-semibold text-[#C8B088]">
                    {pillar.sub}
                  </p>
                  <p className="text-xs text-[#A3A3A3] leading-relaxed pt-2">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Author Transformation Credibility Section with Authentic Photography */}
      <section className="bg-[#F5F3EF] text-[#141414] py-24 sm:py-32 px-6 sm:px-8 border-b border-[#E5E0D8]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Author Photos column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative border-2 border-[#141414] shadow-2xl overflow-hidden group">
              <img
                src={IMAGE_ASSETS.author.heroPortrait}
                alt="Lucas Heffner Transformation"
                referrerPolicy="no-referrer"
                className="w-full aspect-4/5 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6 text-white space-y-1">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#F85800]">
                  REAL PHYSICAL TRANSFORMATION
                </span>
                <p className="font-display text-xl text-white">
                  Over 140 Pounds Fat Lost &bull; 44% to ~13% Body Fat
                </p>
                <p className="text-xs text-[#DDD]">
                  Maintained sustainably for a decade while running companies and raising a family.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 bg-white border border-[#DDD] shadow-sm">
                <div className="font-display text-2xl text-[#F85800] font-black">140+</div>
                <div className="text-[10px] uppercase font-bold text-[#666]">Lbs Lost</div>
              </div>
              <div className="p-3 bg-white border border-[#DDD] shadow-sm">
                <div className="font-display text-2xl text-[#141414] font-black">13%</div>
                <div className="text-[10px] uppercase font-bold text-[#666]">Body Fat Scan</div>
              </div>
              <div className="p-3 bg-white border border-[#DDD] shadow-sm">
                <div className="font-display text-2xl text-[#141414] font-black">10+ Yrs</div>
                <div className="text-[10px] uppercase font-bold text-[#666]">Sustained</div>
              </div>
            </div>
          </div>

          {/* Story & Pullquote */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="eyebrow-label text-[#F85800]">THE AUTHOR'S JOURNEY</span>
              <h2 className="text-h2 text-[#141414] mt-1">
                I didn't write Cut the Crap because I've always had nutrition figured out. I wrote it because I didn't.
              </h2>
            </div>

            {/* Asymmetric Pull Quote */}
            <div className="editorial-pullquote p-6 sm:p-8 bg-white border-l-4 border-[#F85800] shadow-sm text-[#141414]">
              <p className="relative z-10 text-[20px] sm:text-[22px] leading-relaxed">
                I know what it's like to struggle with weight, lose it, gain it back, and wonder why doing everything 'right' still doesn't seem to work. Eventually, I stopped looking for another diet and started learning how nutrition actually works.
              </p>
            </div>

            <div className="space-y-4 text-[17px] leading-relaxed text-[#333]">
              <p>
                As a U.S. Army Engineer officer, I knew operational discipline. But nutrition remained a frustrating puzzle. I swung between rigid extreme diets (keto, starvation macros, 6-day gym exhaustion) and inevitable burnout.
              </p>
              <p>
                Real transformation happened only when I treated my body as an engineering system: balancing the thermodynamic energy equation, leveraging protein for natural hunger suppression, and removing friction from daily life.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => {
                  navigate('/about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3.5 bg-[#141414] hover:bg-[#252525] text-[#F5F3EF] font-sans font-bold text-xs uppercase tracking-[0.1em] transition-colors flex items-center gap-2"
              >
                <span>Read Lucas's Full Story</span>
                <ArrowRight className="w-4 h-4 text-[#F85800]" />
              </button>

              <button
                onClick={() => {
                  navigate('/read-book');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3.5 bg-[#F85800] hover:bg-[#E05000] text-[#141414] font-sans font-bold text-xs uppercase tracking-[0.1em] transition-colors flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                <span>Read Chapter 1 Free</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Book Showcase: Cut the Crap Flagship Overview */}
      <section className="bg-[#141414] py-24 sm:py-32 px-6 sm:px-8 border-b border-[#222]">
        <div className="max-w-[1280px] mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="eyebrow-label text-[#F85800]">FIRST BOOK RELEASE</span>
            <h2 className="text-h1 text-[#F5F3EF]">
              Cut the Crap: The Flagship Guide
            </h2>
            <p className="text-[18px] sm:text-[20px] text-[#D1CFC7] leading-relaxed">
              No detoxes, no forbidden-food lists, and no pretending you need to live on boiled chicken and broccoli.
            </p>
          </div>

          {/* Flagship Cut The Crap Presentation (IMG_4132) */}
          <div className="w-full">
            <FlagshipCutTheCrapBanner navigate={navigate} />
          </div>

          {/* Book Highlights & Table of Contents Excerpt */}
          <div className="bg-[#1A1A1A] border border-[#2B2B2B] p-8 sm:p-12">
            <div className="max-w-3xl space-y-2 mb-8">
              <span className="text-xs font-mono uppercase font-bold text-[#F85800] tracking-wider block">
                INSIDE THE BOOK
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-[#F5F3EF]">
                What You'll Master in 18 Chapters
              </h3>
              <p className="text-sm text-[#A3A3A3]">
                A rigorous, practical curriculum built from real client transformations, behavioral psychology, and metabolic science.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#A3A3A3]">
              <div className="flex items-start gap-3 bg-[#141414] p-4 border border-[#262626]">
                <CheckCircle2 className="w-5 h-5 text-[#F85800] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#F5F3EF] block font-sans">The First Law of Thermodynamics Demystified</strong>
                  How energy balance actually dictates weight change without obsessive counting forever.
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#141414] p-4 border border-[#262626]">
                <CheckCircle2 className="w-5 h-5 text-[#F85800] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#F5F3EF] block font-sans">The Protein Leverage Strategy</strong>
                  Using the thermic effect of food and peptide satiety hormones to kill uncontrollable cravings.
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#141414] p-4 border border-[#262626]">
                <CheckCircle2 className="w-5 h-5 text-[#F85800] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#F5F3EF] block font-sans">The Minimum Viable Day Protocol</strong>
                  A non-negotiable floor that protects your momentum during vacations, illnesses, and busy work weeks.
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#141414] p-4 border border-[#262626]">
                <CheckCircle2 className="w-5 h-5 text-[#F85800] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#F5F3EF] block font-sans">Social Autonomy Framework</strong>
                  Enjoying real dinners, pizza with your children, and holiday gatherings without blowing up your progress.
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#2A2A2A] flex flex-col sm:flex-row gap-4 items-center justify-between">
              <span className="text-xs text-[#888] font-sans">
                Full 312-page curriculum included in all print &amp; digital formats.
              </span>
              <button
                onClick={() => {
                  navigate('/read-book');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3 bg-[#1F1F1F] hover:bg-[#282828] border border-[#3A3A3A] text-xs font-sans font-bold uppercase tracking-wider text-[#F5F3EF] flex items-center gap-2 transition-colors"
              >
                <span>Read Free Excerpt Chapter</span>
                <ArrowRight className="w-4 h-4 text-[#F85800]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Real Toolbox Preview with Authentic Gear Photos */}
      <section className="bg-[#181818] py-20 lg:py-28 px-6 sm:px-8 border-b border-[#222]">
        <div className="max-w-[1280px] mx-auto space-y-12">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-xl">
              <span className="eyebrow-label text-[#F85800]">COMPANION RESOURCE</span>
              <h2 className="text-h2 text-[#F5F3EF]">Cut the Crap Toolbox</h2>
              <p className="text-sm text-[#A3A3A3] leading-relaxed">
                The battle-tested kitchen devices, nutrition trackers, training tools, and learning materials Lucas personally recommends.
              </p>
            </div>
            <button
              onClick={() => {
                navigate('/toolkit');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3 bg-[#252525] hover:bg-[#333] text-[#F5F3EF] hover:text-[#F85800] border border-[#3A3A3A] font-sans font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2"
            >
              <span>Explore All Tools</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Precision Digital Food Scale',
                cat: 'Kitchen Tools',
                img: IMAGE_ASSETS.toolbox.foodScale,
                quote: 'Weighing food for two weeks permanently recalibrates your eye for portion reality.',
              },
              {
                title: 'Dual-Zone Convection Air Fryer',
                cat: 'Kitchen Tools',
                img: IMAGE_ASSETS.toolbox.airFryer,
                quote: 'Cuts chicken and vegetable meal prep to 12 minutes. Removes cooking friction completely.',
              },
              {
                title: '100% Pure Whey Isolate',
                cat: 'Nutrition & Food',
                img: IMAGE_ASSETS.toolbox.proteinPowder,
                quote: 'Hitting 0.8g protein per pound is the cornerstone of satiety and muscle preservation.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#1C1C1C] border border-[#2B2B2B] card-hover p-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="h-40 w-full overflow-hidden border border-[#333]">
                    <img
                      src={item.img}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-[10px] uppercase font-bold text-[#F85800] tracking-wider block">
                    {item.cat}
                  </span>
                  <h4 className="font-display text-lg text-[#F5F3EF]">{item.title}</h4>
                  <p className="text-xs text-[#CCC] italic">"{item.quote}"</p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#2A2A2A]">
                  <button
                    onClick={() => navigate('/toolkit')}
                    className="text-xs uppercase font-bold text-[#C8B088] hover:text-[#F85800] flex items-center gap-1"
                  >
                    View in Toolbox &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles & Writings */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 border-b border-[#222]">
        <div className="max-w-[1280px] mx-auto space-y-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="eyebrow-label text-[#F85800]">FIELD NOTES</span>
              <h2 className="text-h2 text-[#F5F3EF]">Latest Articles &amp; Essays</h2>
            </div>
            <button
              onClick={() => {
                navigate('/articles');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-sans font-bold uppercase tracking-wider text-[#F85800] hover:text-[#E05000] flex items-center gap-1.5"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ARTICLES_DATA.slice(0, 2).map((art) => (
              <div
                key={art.id}
                onClick={() => {
                  navigate('/article-detail');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-[#1A1A1A] border border-[#2B2B2B] card-hover p-8 cursor-pointer group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#8C8C8C]">
                    <span className="text-[#F85800] uppercase font-bold tracking-wider text-[11px]">
                      {art.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {art.readTime}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl text-[#F5F3EF] group-hover:text-[#F85800] transition-colors">
                    {art.title}
                  </h3>
                  <p className="text-sm text-[#A3A3A3] leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#282828] flex items-center justify-between text-xs">
                  <span className="text-[#C8B088] uppercase font-semibold">
                    By {art.author}
                  </span>
                  <span className="text-[#F85800] font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Read Essay &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Brand Assets & QR Codes Modal */}
      <BrandAssetShowcaseModal
        isOpen={showBrandModal}
        onClose={() => setShowBrandModal(false)}
        navigate={navigate}
      />
    </div>
  );
};
