import React, { useState } from 'react';
import { PageRoute, Article } from '../types';
import { ARTICLES_DATA } from '../data/siteData';
import { PhotoPlaceholder } from '../components/BrandLogos';
import { ArrowLeft, Clock, Calendar, ArrowRight, Share2, Bookmark, Check } from 'lucide-react';

interface ArticleDetailPageProps {
  navigate: (route: PageRoute) => void;
  article?: Article;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({
  navigate,
  article = ARTICLES_DATA[0],
}) => {
  const [copied, setCopied] = useState(false);
  const relatedArticles = ARTICLES_DATA.filter((a) => a.id !== article.id).slice(0, 2);

  const handleCopyLink = () => {
    try {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <div className="w-full bg-[#141414] text-[#F5F3EF]">
      {/* Article Header */}
      <header className="py-20 lg:py-28 px-6 sm:px-8 border-b border-[#222]">
        <div className="max-w-[840px] mx-auto space-y-6">
          <button
            onClick={() => navigate('/articles')}
            className="text-xs uppercase tracking-wider font-sans font-bold text-[#8C8C8C] hover:text-[#F85800] flex items-center gap-1.5 mb-4"
          >
            <ArrowLeft className="w-4 h-4" /> All Articles
          </button>

          <div className="flex items-center gap-4 text-xs text-[#8C8C8C]">
            <span className="text-[#F85800] uppercase font-bold tracking-widest text-[11px] bg-[#1E1E1E] border border-[#333] px-2.5 py-1">
              {article.category}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {article.date}
            </span>
          </div>

          <h1 className="text-h1 text-[#F5F3EF]">
            {article.title}
          </h1>

          <p className="text-[20px] sm:text-[22px] text-[#D1CFC7] font-medium leading-relaxed">
            {article.excerpt}
          </p>

          <div className="pt-4 border-t border-[#2A2A2A] flex items-center justify-between text-xs text-[#A3A3A3]">
            <span className="font-semibold uppercase tracking-wider text-[#C8B088]">
              By {article.author} &bull; Up Armor Publishing
            </span>
            <div className="flex items-center gap-4">
              <button
                onClick={handleCopyLink}
                className="hover:text-[#F85800] transition-colors flex items-center gap-1.5 px-2.5 py-1 bg-[#1E1E1E] border border-[#333] text-xs"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#4CAF50]" />
                    <span className="text-[#4CAF50] font-bold">Link Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Share Article</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Article Body (Crafted Typographic Column per Brief Section 11) */}
      <main className="py-16 sm:py-24 px-6 sm:px-8">
        <article className="max-w-[800px] mx-auto space-y-8 text-[18px] leading-[1.7] text-[#D1CFC7] font-sans">
          <p className="text-[21px] text-[#F5F3EF] leading-relaxed font-normal">
            Every January, fitness centers fill with people overflowing with emotional fervor. They have bought new shoes, downloaded three calorie trackers, and vowed that this year, their willpower will not break. By February 15th, eighty percent of them have vanished.
          </p>

          <p>
            The conventional explanation is always the same: "They lacked dedication." Or worse, "They didn't want it badly enough." This explanation is not just wrong—it is destructive. It treats a failure of system architecture as a failure of moral fiber.
          </p>

          {/* Asymmetric Pullquote Breaking Grid per Section 11 */}
          <div className="editorial-pullquote p-8 my-10 bg-[#1E1E1E] border-l-4 border-[#F85800] text-[#F5F3EF] text-[22px] sm:text-[24px]">
            <p className="relative z-10">
              "Motivation is an emotional state. Relying on an emotion to manage a physical, metabolic system is like relying on the weather to steer a ship."
            </p>
          </div>

          <h2 className="text-h3 text-[#F5F3EF] pt-6">
            The Neurochemistry of Diminishing Returns
          </h2>

          <p>
            When you decide to make a radical life change, your brain experiences a dopamine surge. You envision the leaner version of yourself, the accolades from peers, the clothes fitting effortlessly. This dopamine spike feels like power, but it is fleeting by evolutionary design.
          </p>

          <p>
            Within two weeks, novelty decays. The stress of your job, family obligations, and poor sleep reassert themselves. If your fat loss strategy requires high emotional energy to execute, it will disintegrate the moment your life demands that energy elsewhere.
          </p>

          <div className="p-6 bg-[#181818] border border-[#2B2B2B] my-8 space-y-2">
            <span className="text-xs uppercase font-bold text-[#F85800] tracking-wider block">
              The Engineering Replacement
            </span>
            <p className="text-sm text-[#A3A3A3] leading-relaxed">
              Discipline is not white-knuckled suffering. Discipline is the deliberate removal of friction so that the correct action requires less cognitive effort than the incorrect one.
            </p>
          </div>

          <h2 className="text-h3 text-[#F5F3EF] pt-6">
            Building Systems That Survive Your Worst Days
          </h2>

          <p>
            In Chapter 4 of <em>Cut the Crap</em>, we outline the concept of the Minimum Viable Day. When you are traveling, sick, or working an 80-hour week, you do not abandon the framework—you throttle back to your non-negotiable floor:
          </p>

          <ul className="list-disc pl-6 space-y-3 text-[17px] text-[#A3A3A3]">
            <li>Hit your protein floor (0.8g per pound of target body weight).</li>
            <li>Maintain non-exercise activity (e.g. 7,000 steps minimum).</li>
            <li>Hydrate before reaching for snacks.</li>
          </ul>

          <p>
            When you anchor yourself to physiological floors rather than idealistic perfection, motivation becomes irrelevant. You simply execute the baseline, week after week.
          </p>
        </article>

        {/* Author Bio Box per Spec */}
        <section className="max-w-[800px] mx-auto mt-16 pt-12 border-t border-[#2A2A2A]">
          <div className="p-6 sm:p-8 bg-[#181818] border border-[#2B2B2B] flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="w-24 h-24 shrink-0">
              <PhotoPlaceholder
                description="Lucas Heffner Headshot"
                aspectRatio="aspect-square"
              />
            </div>
            <div className="space-y-2 text-center sm:text-left">
              <span className="text-xs uppercase font-bold text-[#F85800] tracking-widest block">
                ABOUT THE AUTHOR
              </span>
              <h3 className="font-display text-xl text-[#F5F3EF]">
                Lucas Heffner, MBA, NASM-CNC
              </h3>
              <p className="text-sm text-[#A3A3A3] leading-relaxed">
                Lucas is an author, Certified Nutrition Coach, U.S. Army Engineer veteran, and founder of Up Armor Publishing. Having lost over 140 pounds himself, he focuses on practical human performance and sustainable habit architecture.
              </p>
            </div>
          </div>
        </section>

        {/* Related Articles Strip */}
        <section className="max-w-[800px] mx-auto mt-16 pt-12 border-t border-[#222]">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-h3 text-[#F5F3EF]">Continue Reading</h3>
            <button
              onClick={() => navigate('/articles')}
              className="text-xs uppercase font-sans font-bold text-[#F85800] hover:text-[#E05000]"
            >
              All Articles &rarr;
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedArticles.map((rel) => (
              <div
                key={rel.id}
                onClick={() => {
                  navigate('/article-detail');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="p-6 bg-[#1A1A1A] border border-[#2B2B2B] card-hover cursor-pointer group"
              >
                <span className="text-[10px] uppercase font-bold text-[#F85800] tracking-wider block mb-2">
                  {rel.category}
                </span>
                <h4 className="font-display text-lg text-[#F5F3EF] group-hover:text-[#F85800] transition-colors mb-2">
                  {rel.title}
                </h4>
                <p className="text-xs text-[#8C8C8C] line-clamp-2">
                  {rel.excerpt}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
