import React, { useState } from 'react';
import { Book, BookStatus, PageRoute } from '../types';
import { BOOKS_DATA } from '../data/siteData';
import { BookCard } from '../components/BookCard';
import { BookOpen, Sparkles, Filter } from 'lucide-react';

interface BooksPageProps {
  navigate: (route: PageRoute) => void;
}

export const BooksPage: React.FC<BooksPageProps> = ({ navigate }) => {
  const books = BOOKS_DATA;
  const [activeFilter, setActiveFilter] = useState<'all' | BookStatus>('all');

  const sections: { key: BookStatus; title: string; desc: string }[] = [
    {
      key: 'available',
      title: 'Available Now',
      desc: 'Immediate fulfillment and instant digital access.',
    },
    {
      key: 'preorder',
      title: 'Preorder',
      desc: 'Active printing queues and exclusive founding collector allocations.',
    },
    {
      key: 'coming-soon',
      title: 'Coming Soon',
      desc: 'Manuscripts finalized; cover proofs and production schedules in flight.',
    },
    {
      key: 'in-development',
      title: 'In Development',
      desc: 'Active drafting and research phases under Up Armor Publishing.',
    },
  ];

  const filteredBooks = activeFilter === 'all' ? books : books.filter((b) => b.status === activeFilter);

  return (
    <div className="w-full bg-[#141414] text-[#F5F3EF]">
      {/* Header */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 border-b border-[#222]">
        <div className="max-w-[1280px] mx-auto space-y-4">
          <span className="eyebrow-label text-[#F85800]">UP ARMOR PUBLISHING LIBRARY</span>
          <h1 className="text-h1 text-[#F5F3EF]">
            Books by Lucas Heffner.
          </h1>
          <p className="text-[18px] sm:text-[20px] text-[#A3A3A3] max-w-2xl leading-relaxed">
            The permanent home for all books published by Up Armor Publishing. Built to grow across titles and disciplines with reusable lifecycle architectures.
          </p>

          {/* Filter Bar */}
          <div className="pt-6 flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase font-sans font-semibold text-[#777] flex items-center gap-1.5 mr-2">
              <Filter className="w-3.5 h-3.5 text-[#F85800]" />
              Filter by State:
            </span>
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 text-xs font-sans font-bold uppercase tracking-wider transition-colors ${
                activeFilter === 'all'
                  ? 'bg-[#F85800] text-[#141414]'
                  : 'bg-[#1E1E1E] text-[#888] hover:text-[#CCC] border border-[#333]'
              }`}
            >
              All States ({books.length})
            </button>
            {sections.map((sec) => {
              const count = books.filter((b) => b.status === sec.key).length;
              return (
                <button
                  key={sec.key}
                  onClick={() => setActiveFilter(sec.key)}
                  className={`px-3 py-1.5 text-xs font-sans font-bold uppercase tracking-wider transition-colors ${
                    activeFilter === sec.key
                      ? 'bg-[#F85800] text-[#141414]'
                      : 'bg-[#1E1E1E] text-[#888] hover:text-[#CCC] border border-[#333]'
                  }`}
                >
                  {sec.title} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stacked Lifecycle Grid per Brief Section 4 */}
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 py-20 space-y-24">
        {activeFilter === 'all' ? (
          // Render all 4 stacked sections
          sections.map((section) => {
            const sectionBooks = books.filter((b) => b.status === section.key);
            return (
              <section key={section.key} className="space-y-8">
                <div className="border-b border-[#2A2A2A] pb-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div>
                    <h2 className="text-h3 text-[#F5F3EF]">{section.title}</h2>
                    <p className="text-xs text-[#8C8C8C] mt-1">{section.desc}</p>
                  </div>
                  <span className="text-xs font-mono text-[#C8B088] uppercase tracking-wider">
                    {sectionBooks.length} {sectionBooks.length === 1 ? 'Title' : 'Titles'}
                  </span>
                </div>

                {sectionBooks.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sectionBooks.map((book) => (
                      <BookCard
                        key={book.id}
                        book={book}
                        navigate={navigate}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="p-8 bg-[#181818] border border-dashed border-[#333] text-center text-sm text-[#777]">
                    No titles currently in {section.title.toLowerCase()}.
                  </div>
                )}
              </section>
            );
          })
        ) : (
          // Filtered list
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBooks.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                navigate={navigate}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
