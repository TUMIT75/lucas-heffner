import React from 'react';
import { PageRoute } from '../types';
import { IMAGE_ASSETS } from '../data/imageAssets';
import { Shield, Award, Building, BookOpen, Compass, Dumbbell, ArrowRight, CheckCircle2 } from 'lucide-react';

interface AboutPageProps {
  navigate: (route: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ navigate }) => {
  const credibilityItems = [
    {
      icon: <Shield className="w-6 h-6 text-[#F85800]" />,
      title: 'U.S. Army Engineer Veteran',
      detail: 'Operational discipline & mission execution',
    },
    {
      icon: <Building className="w-6 h-6 text-[#F85800]" />,
      title: 'Entrepreneur',
      detail: 'Commercial enterprise leadership',
    },
    {
      icon: <Award className="w-6 h-6 text-[#F85800]" />,
      title: 'Owner of Up Armor Roofing',
      detail: 'Industrial operations & craftsmanship',
    },
    {
      icon: <BookOpen className="w-6 h-6 text-[#F85800]" />,
      title: 'Founder of Up Armor Publishing',
      detail: 'Practical nonfiction publishing house',
    },
    {
      icon: <Dumbbell className="w-6 h-6 text-[#F85800]" />,
      title: 'Certified Nutrition Coach',
      detail: 'NASM-CNC credentialed practitioner',
    },
    {
      icon: <Compass className="w-6 h-6 text-[#F85800]" />,
      title: 'Author',
      detail: 'Author of Cut the Crap & upcoming works',
    },
  ];

  return (
    <div className="w-full bg-[#141414] text-[#F5F3EF]">
      {/* Header Banner */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 border-b border-[#222]">
        <div className="max-w-[1280px] mx-auto max-w-4xl space-y-6">
          <span className="eyebrow-label text-[#F85800]">BACKGROUND &bull; ETHOS</span>
          <h1 className="text-h1 text-[#F5F3EF]">
            About Lucas Heffner
          </h1>
          <p className="text-[20px] sm:text-[24px] text-[#D1CFC7] font-medium leading-relaxed">
            "I'm Lucas Heffner. I'm an author, Certified Nutrition Coach, veteran, entrepreneur, and someone who spent years learning the hard way that knowing what to do and actually building a life around doing it are two very different things."
          </p>
        </div>
      </section>

      {/* Horizontal Credibility Strip per Brief Section 11 */}
      <section className="bg-[#1C1C1C] border-b border-[#262626] py-10 px-6 sm:px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-xs uppercase tracking-widest text-[#8C8C8C] mb-6 font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F85800]" />
            Background &amp; Professional Qualifications
          </div>

          {/* Horizontal scrollable on mobile, grid on desktop */}
          <div className="flex overflow-x-auto pb-4 gap-4 md:grid md:grid-cols-3 lg:grid-cols-6 md:pb-0 scrollbar-thin">
            {credibilityItems.map((item, idx) => (
              <div
                key={idx}
                className="min-w-[200px] md:min-w-0 bg-[#141414] border border-[#2B2B2B] p-5 flex flex-col justify-between shrink-0"
              >
                <div className="mb-3">{item.icon}</div>
                <div>
                  <h4 className="font-display text-sm text-[#F5F3EF] leading-tight mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#8C8C8C] leading-snug">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Transformation Narrative */}
      <section className="bg-[#F5F3EF] text-[#141414] py-24 sm:py-32 px-6 sm:px-8 border-b border-[#E5E0D8]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 space-y-4">
            <div className="relative border-2 border-[#141414] shadow-xl overflow-hidden">
              <img
                src={IMAGE_ASSETS.author.heroPortrait}
                alt="Lucas Heffner - Author and Veteran"
                referrerPolicy="no-referrer"
                className="w-full aspect-4/5 object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-5 text-white">
                <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#F85800] block">
                  VERIFIED TRANSFORMATION
                </span>
                <p className="font-display text-lg text-white">Over 140 lbs Fat Lost Sustained</p>
                <p className="text-xs text-white/80">From ~44% body fat down to 13% DEXA scanned</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-2.5 bg-white border border-[#DDD]">
                <div className="font-display text-lg text-[#F85800]">140+</div>
                <div className="text-[9px] uppercase font-bold text-[#666]">Lbs Lost</div>
              </div>
              <div className="p-2.5 bg-white border border-[#DDD]">
                <div className="font-display text-lg text-[#141414]">13%</div>
                <div className="text-[9px] uppercase font-bold text-[#666]">DEXA Scan</div>
              </div>
              <div className="p-2.5 bg-white border border-[#DDD]">
                <div className="font-display text-lg text-[#141414]">10 Yrs</div>
                <div className="text-[9px] uppercase font-bold text-[#666]">Maintained</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="eyebrow-label text-[#F85800]">THE REAL ARGUMENT</span>
            <h2 className="text-h2 text-[#141414]">
              "I finally learned why my previous attempts didn't last."
            </h2>

            <div className="editorial-pullquote p-6 bg-white border-l-4 border-[#F85800] text-[#141414] shadow-sm">
              <p className="relative z-10">
                The focus is never just 'look how much weight I lost.' Anyone can suffer for 8 weeks and lose water and muscle. The real transformation was learning why every prior diet collapsed the moment life intervened.
              </p>
            </div>

            <div className="space-y-4 text-[17px] text-[#333] leading-relaxed">
              <p>
                Like millions of men and women, I lived on the diet rollercoaster. I swung between rigid extreme protocols (keto, extreme calorie restriction, 6-day split routines) and complete burnout. I went from approximately 44% body fat to roughly 13%, losing more than 140 pounds.
              </p>
              <p className="font-semibold text-[#141414]">
                More importantly: I learned how to maintain the change year after year while running companies, raising a family, and living a full life.
              </p>
              <p>
                When you understand energy balance, protein leverage, and habit psychology, you no longer need miracle teas, detoxes, or arbitrary rules. You regain autonomy over your own life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Author Life & Ethos Photography Strip */}
      <section className="bg-[#181818] border-b border-[#262626] py-16 px-6 sm:px-8">
        <div className="max-w-[1280px] mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <span className="eyebrow-label text-[#F85800]">LIFE &bull; WORK &bull; ETHOS</span>
              <h3 className="font-display text-2xl text-[#F5F3EF]">Behind the Pages</h3>
            </div>
            <p className="text-xs text-[#8C8C8C] max-w-md">
              From Army operational engineering to building companies and authoring Cut the Crap.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3 bg-[#141414] border border-[#2B2B2B] p-4">
              <div className="h-56 overflow-hidden">
                <img
                  src={IMAGE_ASSETS.author.writingDesk}
                  alt="Writing desk and manuscript preparation"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-display text-base text-[#F5F3EF]">The Writing Process</h4>
              <p className="text-xs text-[#8C8C8C]">
                Drafting manuscripts with rigorous citations, removing jargon, and refining actionable habit checklists.
              </p>
            </div>

            <div className="space-y-3 bg-[#141414] border border-[#2B2B2B] p-4">
              <div className="h-56 overflow-hidden">
                <img
                  src={IMAGE_ASSETS.author.veteranEngineer}
                  alt="Lucas Heffner military engineering discipline"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-display text-base text-[#F5F3EF]">Military Engineering</h4>
              <p className="text-xs text-[#8C8C8C]">
                Operational planning in high-friction environments where discipline must replace motivation.
              </p>
            </div>

            <div className="space-y-3 bg-[#141414] border border-[#2B2B2B] p-4">
              <div className="h-56 overflow-hidden">
                <img
                  src={IMAGE_ASSETS.author.speakingEvent}
                  alt="Lucas Heffner keynote speech"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-display text-base text-[#F5F3EF]">Speaking &amp; Mentorship</h4>
              <p className="text-xs text-[#8C8C8C]">
                Delivering candid keynotes to business leaders and veterans on sustainable high-performance habits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why I Write & Up Armor Publishing Mission */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 border-b border-[#222]">
        <div className="max-w-[1280px] mx-auto max-w-3xl text-center space-y-8">
          <span className="eyebrow-label text-[#F85800]">PUBLISHING MANIFESTO</span>
          <h2 className="text-h2 text-[#F5F3EF]">
            Why I Write
          </h2>
          <div className="p-8 sm:p-10 bg-[#1E1E1E] border border-[#333] text-[20px] sm:text-[22px] leading-relaxed text-[#F5F3EF] italic">
            "Up Armor Publishing exists to create practical books that help people cut through noise, understand what actually matters, and put that knowledge to work in their lives."
          </div>
          <p className="text-[17px] text-[#A3A3A3] leading-relaxed">
            The modern publishing landscape is choked with 300-page books that could have been a blog post, padded with corporate jargon or unverifiable guru theories. Our commitment is direct, battle-tested knowledge engineered for real people who work, lead, and live in the real world.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => {
                navigate('/read-book');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-[#F85800] hover:bg-[#E05000] text-[#141414] font-sans font-bold text-xs uppercase tracking-[0.1em] transition-colors flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              <span>Read Free Book Sample</span>
            </button>
            <button
              onClick={() => {
                navigate('/books');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-[#1E1E1E] hover:bg-[#2A2A2A] text-[#F5F3EF] border border-[#333] font-sans font-semibold text-xs uppercase tracking-[0.1em] transition-colors flex items-center gap-2"
            >
              <span>Explore All Books</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
