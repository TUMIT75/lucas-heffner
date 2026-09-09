import React, { useState } from 'react';
import { PageRoute, ToolboxCategory } from '../types';
import { TOOLBOX_ITEMS } from '../data/siteData';
import { ExternalLink, ShieldAlert, CheckCircle2, Wrench } from 'lucide-react';

interface ToolboxPageProps {
  navigate: (route: PageRoute) => void;
}

export const ToolboxPage: React.FC<ToolboxPageProps> = ({ navigate }) => {
  const [activeCategory, setActiveCategory] = useState<'All' | ToolboxCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: ('All' | ToolboxCategory)[] = [
    'All',
    'Nutrition & Food',
    'Kitchen Tools',
    'Tracking',
    'Fitness',
    'Books & Learning',
    'Products I Use',
  ];

  const filteredItems = TOOLBOX_ITEMS.filter((item) => {
    const matchesCat = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.explanation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.whyLucasRecommends.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="w-full bg-[#141414] text-[#F5F3EF]">
      {/* Header */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 border-b border-[#222]">
        <div className="max-w-[1280px] mx-auto space-y-6">
          <span className="eyebrow-label text-[#F85800]">COMPANION RESOURCE HUB</span>
          <h1 className="text-h1 text-[#F5F3EF]">
            Cut the Crap Toolbox
          </h1>
          <p className="text-[18px] sm:text-[22px] text-[#D1CFC7] max-w-3xl leading-relaxed font-medium">
            "The tools, products, resources, and recommendations referenced throughout Cut the Crap. Everything here is something Lucas has used personally, recommends to clients, or vetted as a practical aid to sustainable weight loss."
          </p>

          {/* Transparent Affiliate Disclosure Notice */}
          <div className="p-4 sm:p-5 bg-[#1C1C1C] border-l-4 border-[#C8B088] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 max-w-3xl text-xs text-[#A3A3A3]">
            <div className="flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-[#C8B088] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong className="text-[#F5F3EF]">Transparency Guarantee:</strong> Some links in the Toolbox are affiliate links. If you purchase through them, Up Armor Publishing may earn a small commission at no extra cost to you. We only recommend products Lucas has personally used or rigorously evaluated.
              </p>
            </div>
            <button
              onClick={() => navigate('/affiliate-disclosure')}
              className="text-[#C8B088] hover:text-[#F85800] uppercase font-bold tracking-wider underline whitespace-nowrap text-[11px]"
            >
              Full Disclosure Policy &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="bg-[#1A1A1A] border-b border-[#262626] px-6 sm:px-8 py-6 sticky top-20 z-20">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex overflow-x-auto gap-2 pb-2 md:pb-0 scrollbar-thin">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-2 text-xs font-sans font-bold uppercase tracking-wider transition-colors whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-[#F85800] text-[#141414]'
                    : 'bg-[#141414] text-[#888] hover:text-[#CCC] border border-[#2B2B2B]'
                }`}
              >
                {cat} {cat === 'All' ? `(${TOOLBOX_ITEMS.length})` : ''}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="w-full md:w-64">
            <input
              type="text"
              placeholder="Search tools & gear..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3.5 py-2 bg-[#141414] border border-[#333] text-[#F5F3EF] placeholder-[#777] text-xs focus:outline-none focus:border-[#F85800]"
            />
          </div>
        </div>
      </section>

      {/* Toolbox Grid */}
      <section className="py-16 sm:py-24 px-6 sm:px-8">
        <div className="max-w-[1280px] mx-auto">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#1E1E1E] border border-[#2B2B2B] card-hover p-6 sm:p-8 flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Category & Price pill */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-[#F85800]">
                        {item.category}
                      </span>
                      {item.priceEstimate && (
                        <span className="text-[10px] uppercase font-mono px-2 py-0.5 bg-[#2A2A2A] text-[#C8B088] border border-[#3A3A3A]">
                          {item.priceEstimate}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl text-[#F5F3EF] mb-3">
                      {item.name}
                    </h3>

                    {/* Explanation */}
                    <p className="text-sm text-[#A3A3A3] leading-relaxed mb-6">
                      {item.explanation}
                    </p>

                    {/* Why Lucas Recommends It Callout */}
                    <div className="p-4 bg-[#151515] border-l-2 border-[#F85800] text-xs space-y-1 mb-6">
                      <div className="flex items-center gap-1.5 text-[#C8B088] font-bold uppercase tracking-wider text-[10px]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#F85800]" />
                        Why Lucas Recommends It
                      </div>
                      <p className="text-[#CCC] italic leading-relaxed">
                        "{item.whyLucasRecommends}"
                      </p>
                    </div>
                  </div>

                  {/* External Action Button */}
                  <div className="pt-4 border-t border-[#2A2A2A]">
                    <a
                      href={item.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 bg-[#262626] hover:bg-[#333] text-[#F5F3EF] hover:text-[#F85800] border border-[#3A3A3A] font-sans font-bold text-xs uppercase tracking-[0.1em] flex items-center justify-center gap-2 transition-colors"
                    >
                      <span>View Recommended Resource</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center bg-[#181818] border border-dashed border-[#333] space-y-3">
              <Wrench className="w-8 h-8 text-[#555] mx-auto" />
              <h3 className="font-display text-lg text-[#F5F3EF]">No tools matched your criteria</h3>
              <p className="text-xs text-[#888]">
                Try clearing your search query or selecting a different category filter.
              </p>
              <button
                onClick={() => {
                  setActiveCategory('All');
                  setSearchQuery('');
                }}
                className="px-4 py-2 bg-[#F85800] text-[#141414] font-bold text-xs uppercase tracking-wider mt-2"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
