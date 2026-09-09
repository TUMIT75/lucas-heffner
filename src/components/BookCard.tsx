import React from 'react';
import { Book, PageRoute } from '../types';
import { CutTheCrapHorizontalLogo, StarWingsInsignia } from './BrandLogos';
import { ArrowRight, BookOpen } from 'lucide-react';

interface BookCardProps {
  book: Book;
  navigate: (route: PageRoute) => void;
  onStatusChange?: (id: string, newStatus: Book['status']) => void;
}

export const StatusBadge: React.FC<{ status: Book['status']; label?: string }> = ({ status, label }) => {
  const config = {
    'in-development': { bg: 'bg-[#5C5C5C]', text: 'text-[#F5F3EF]', defaultLabel: 'In Development' },
    'coming-soon': { bg: 'bg-[#5E7488]', text: 'text-[#F5F3EF]', defaultLabel: 'Coming Soon' },
    preorder: { bg: 'bg-[#F85800]', text: 'text-[#141414]', defaultLabel: 'Preorder' },
    available: { bg: 'bg-[#D9691E]', text: 'text-[#141414]', defaultLabel: 'Available Now' },
    'sold-out': { bg: 'bg-[#4A3A22]', text: 'text-[#F5F3EF]', defaultLabel: 'Sold Out' },
  }[status];

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 text-[11px] font-sans font-bold uppercase tracking-[0.12em] ${config.bg} ${config.text}`}
    >
      {label || config.defaultLabel}
    </span>
  );
};

export const BookCard: React.FC<BookCardProps> = ({ book, navigate, onStatusChange }) => {
  const isCutTheCrap = book.isCutTheCrap;

  return (
    <div className="bg-[#1E1E1E] border border-[#2B2B2B] card-hover flex flex-col justify-between p-6 sm:p-8 relative">
      {/* Placeholder pill if applicable */}
      {book.isPlaceholder && (
        <div className="absolute top-4 right-4 bg-[#2A2A2A] border border-[#444] text-[#C8B088] text-[10px] font-sans font-semibold uppercase tracking-widest px-2 py-0.5">
          [PLACEHOLDER]
        </div>
      )}

      <div>
        {/* Cover Artwork / Stylized Title Mockup */}
        <div className="w-full aspect-3/4 bg-[#141414] border border-[#333] mb-6 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden group">
          {/* Subtle background radial pattern */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] to-[#0E0E0E] opacity-90" />

          <div className="relative z-10 flex flex-col items-center">
            {isCutTheCrap ? (
              <>
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#C8B088] mb-2">
                  UP ARMOR PUBLISHING
                </span>
                <CutTheCrapHorizontalLogo size="sm" theme="dark" className="my-2" />
                <span className="text-xs text-[#F85800] font-sans font-medium uppercase tracking-wider mt-1">
                  LOSE THE FAT. KEEP THE FREEDOM.
                </span>
                <div className="w-8 h-[1px] bg-[#C8B088] my-4" />
                <span className="text-[11px] font-sans text-[#A3A3A3] uppercase tracking-widest">
                  LUCAS HEFFNER, MBA, NASM-CNC
                </span>
              </>
            ) : (
              <>
                <BookOpen className="w-10 h-10 text-[#5E7488] mb-3 stroke-[1.25]" />
                <h4 className="font-display text-xl text-[#F5F3EF] tracking-wider mb-1">
                  {book.title}
                </h4>
                <p className="text-xs text-[#A3A3A3] font-sans max-w-[200px] mb-3">
                  {book.subtitle}
                </p>
                <div className="w-6 h-[1px] bg-[#444] my-2" />
                <span className="text-[10px] font-sans uppercase tracking-widest text-[#8C8C8C]">
                  By Lucas Heffner
                </span>
              </>
            )}
          </div>
        </div>

        {/* Status Badge */}
        <div className="mb-3">
          <StatusBadge status={book.status} label={book.statusLabel} />
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-h3 text-[#F5F3EF] mb-1">{book.title}</h3>
        <p className="text-sm font-sans font-semibold text-[#F85800] uppercase tracking-wide mb-3">
          {book.subtitle}
        </p>

        {/* Description */}
        <p className="text-sm text-[#A3A3A3] leading-relaxed mb-6">
          {book.description}
        </p>
      </div>

      <div>
        {/* Available Formats */}
        <div className="border-t border-[#2A2A2A] pt-4 mb-5">
          <span className="text-[11px] font-sans uppercase tracking-widest text-[#777] block mb-1.5">
            Planned Formats
          </span>
          <div className="flex flex-wrap gap-2">
            {book.formats.map((fmt) => (
              <span
                key={fmt}
                className="text-xs bg-[#141414] text-[#C8B088] border border-[#333] px-2 py-0.5"
              >
                {fmt}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        {isCutTheCrap ? (
          <button
            onClick={() => {
              navigate('/cutthecrap');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full py-3 bg-[#F85800] hover:bg-[#E05000] text-[#141414] font-sans font-bold text-xs uppercase tracking-[0.1em] flex items-center justify-center gap-2 transition-colors"
          >
            <span>Explore Cut the Crap</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={() => {
              navigate('/contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full py-3 bg-[#2A2A2A] hover:bg-[#333] text-[#F5F3EF] font-sans font-semibold text-xs uppercase tracking-[0.1em] flex items-center justify-center gap-2 transition-colors border border-[#444]"
          >
            <span>Register for Updates</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}

        {/* Owner status switcher demonstration per brief Section 4 */}
        {onStatusChange && (
          <div className="mt-4 pt-3 border-t border-[#252525] flex items-center justify-between text-[11px] text-[#777]">
            <span>Mockup Status:</span>
            <select
              value={book.status}
              onChange={(e) => onStatusChange(book.id, e.target.value as Book['status'])}
              className="bg-[#141414] border border-[#333] text-[#C8B088] px-2 py-0.5 text-[11px] focus:outline-none"
            >
              <option value="in-development">In Development</option>
              <option value="coming-soon">Coming Soon</option>
              <option value="preorder">Preorder</option>
              <option value="available">Available Now</option>
              <option value="sold-out">Sold Out</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
};
