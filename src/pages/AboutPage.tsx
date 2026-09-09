import React from 'react';
import { PageRoute } from '../types';
import { PhotoPlaceholder } from '../components/BrandLogos';
import { Shield, Award, Building, BookOpen, Compass, Dumbbell, ArrowRight } from 'lucide-react';

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
            <PhotoPlaceholder
              description="Lucas Heffner — 44% body fat to 13% body fat transformation"
              aspectRatio="aspect-4/5"
            />
            <p className="text-xs text-[#666] italic text-center">
              Real body fat scan verification &bull; Over 140 pounds sustained fat loss
            </p>
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
          <div className="pt-4 flex justify-center gap-4">
            <button
              onClick={() => {
                navigate('/books');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-[#F85800] hover:bg-[#E05000] text-[#141414] font-sans font-bold text-xs uppercase tracking-[0.1em] transition-colors flex items-center gap-2"
            >
              <span>Explore the Books</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                navigate('/contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-[#1E1E1E] hover:bg-[#2A2A2A] text-[#F5F3EF] border border-[#333] font-sans font-semibold text-xs uppercase tracking-[0.1em] transition-colors"
            >
              Contact Lucas
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
