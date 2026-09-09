import React, { useState } from 'react';
import { PageRoute, Article } from '../types';
import { ARTICLES_DATA } from '../data/siteData';
import { ArrowRight, Clock, Calendar, Filter } from 'lucide-react';

interface ArticlesPageProps {
  navigate: (route: PageRoute) => void;
  onSelectArticle?: (article: Article) => void;
}

export const ArticlesPage: React.FC<ArticlesPageProps> = ({ navigate, onSelectArticle }) => {
  const [selectedCat, setSelectedCat] = useState<string>('All');

  const categories = ['All', 'Psychology', 'Physiology', 'Nutrition', 'Habits & Systems'];

  const filteredArticles =
    selectedCat === 'All'
      ? ARTICLES_DATA
      : ARTICLES_DATA.filter((a) => a.category.toLowerCase() === selectedCat.toLowerCase());

  const handleArticleClick = (article: Article) => {
    if (onSelectArticle) {
      onSelectArticle(article);
    }
    navigate('/article-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-[#141414] text-[#F5F3EF]">
      {/* Header */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 border-b border-[#222]">
        <div className="max-w-[1280px] mx-auto space-y-6">
          <span className="eyebrow-label text-[#F85800]">FIELD NOTES &bull; WRITINGS</span>
          <h1 className="text-h1 text-[#F5F3EF]">
            Articles &amp; Essays
          </h1>
          <p className="text-[19px] sm:text-[23px] text-[#D1CFC7] max-w-3xl leading-relaxed font-medium">
            Rigorous breakdowns on metabolic reality, habit psychology, nutrition literacy, and long-term discipline by Lucas Heffner.
          </p>

          {/* Filter Bar */}
          <div className="pt-6 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-3.5 py-1.5 text-xs font-sans font-bold uppercase tracking-wider transition-colors ${
                  selectedCat === cat
                    ? 'bg-[#F85800] text-[#141414]'
                    : 'bg-[#1E1E1E] text-[#888] hover:text-[#CCC] border border-[#333]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 sm:py-24 px-6 sm:px-8">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => handleArticleClick(article)}
              className="bg-[#1C1C1C] border border-[#2B2B2B] card-hover p-8 sm:p-10 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#8C8C8C] mb-4">
                  <span className="text-[#F85800] uppercase font-bold tracking-wider text-[11px]">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-3">
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
                </div>

                <h2 className="font-display text-2xl sm:text-3xl text-[#F5F3EF] group-hover:text-[#F85800] transition-colors mb-4">
                  {article.title}
                </h2>

                <p className="text-[15px] text-[#A3A3A3] leading-relaxed mb-6">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-6 border-t border-[#2A2A2A] flex items-center justify-between text-xs text-[#8C8C8C]">
                <span className="uppercase font-semibold tracking-wider text-[#C8B088]">
                  By {article.author}
                </span>
                <span className="text-[#F85800] font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Read Article &rarr;
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
