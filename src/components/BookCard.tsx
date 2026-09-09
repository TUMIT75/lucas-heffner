import React from 'react';
import { Book, PageRoute } from '../types';
import { CutTheCrapHorizontalLogo } from './BrandLogos';
import { RealisticBookCover } from './RealisticBookCover';
import { ArrowRight, BookOpen, Download, ShoppingBag } from 'lucide-react';

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
      {/* Flagship tag */}
      {isCutTheCrap && (
        <div className="absolute top-4 right-4 bg-[#F85800] text-[#141414] text-[10px] font-sans font-bold uppercase tracking-widest px-2.5 py-0.5 shadow">
          FLAGSHIP
        </div>
      )}

      <div>
        {/* Cover Artwork / 3D Book Display */}
        <div className="w-full aspect-3/4 bg-[#141414] border border-[#333] mb-6 flex items-center justify-center p-4 relative overflow-hidden group">
          {isCutTheCrap ? (
            <div className="scale-90 transition-transform duration-300 group-hover:scale-95">
              <RealisticBookCover edition="hardcover" size="sm" />
            </div>
          ) : (
            <div className="w-[180px] h-[260px] bg-gradient-to-br from-[#1E252B] via-[#151A1E] to-[#0D1013] border border-[#485563] p-5 flex flex-col justify-between shadow-2xl relative">
              <div className="space-y-1">
                <span className="text-[9px] font-sans uppercase font-bold tracking-[0.2em] text-[#8EA3B8]">
                  UP ARMOR PUBLISHING
                </span>
                <div className="w-6 h-[2px] bg-[#5E7488] my-1" />
              </div>
              <div>
                <h4 className="font-display text-lg text-white font-bold leading-tight">
                  {book.title}
                </h4>
                <p className="text-[10px] text-[#A3B3C2] mt-1 line-clamp-2">
                  {book.subtitle}
                </p>
              </div>
              <div className="border-t border-white/10 pt-2 text-[9px] font-sans text-[#8EA3B8] uppercase">
                Lucas Heffner
              </div>
            </div>
          )}
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

        {/* Action Buttons */}
        {isCutTheCrap ? (
          <div className="space-y-2">
            <button
              onClick={() => {
                navigate('/read-book');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full py-3 bg-[#F85800] hover:bg-[#E05000] text-[#141414] font-sans font-bold text-xs uppercase tracking-[0.1em] flex items-center justify-center gap-2 transition-colors shadow"
            >
              <BookOpen className="w-4 h-4" />
              <span>Read Sample Chapters</span>
            </button>
            <button
              onClick={() => {
                navigate('/cutthecrap');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full py-2.5 bg-[#252525] hover:bg-[#333] text-[#F5F3EF] font-sans font-bold text-xs uppercase tracking-[0.1em] flex items-center justify-center gap-2 transition-colors border border-[#3A3A3A]"
            >
              <span>Order Physical / Digital</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              navigate('/contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full py-3 bg-[#2A2A2A] hover:bg-[#333] text-[#F5F3EF] font-sans font-semibold text-xs uppercase tracking-[0.1em] flex items-center justify-center gap-2 transition-colors border border-[#444]"
          >
            <span>Notify Me Upon Release</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}

        {/* Owner status switcher */}
        {onStatusChange && (
          <div className="mt-4 pt-3 border-t border-[#252525] flex items-center justify-between text-[11px] text-[#777]">
            <span>Status Preview:</span>
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
