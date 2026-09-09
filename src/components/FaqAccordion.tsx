import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS_DATA } from '../data/siteData';

interface FaqItem {
  question: string;
  answer: string;
}

export const FaqAccordion: React.FC<{ items?: FaqItem[]; theme?: 'dark' | 'light' }> = ({
  items = FAQS_DATA,
  theme = 'dark',
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default
  const isDark = theme === 'dark';

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="w-full divide-y divide-[#2B2B2B] border-y border-[#2B2B2B]">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className="group">
            <button
              type="button"
              onClick={() => toggleItem(idx)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleItem(idx);
                }
              }}
              aria-expanded={isOpen}
              className={`w-full py-5 px-2 flex items-center justify-between text-left transition-colors focus:outline-none ${
                isDark ? 'text-[#F5F3EF] hover:text-[#F85800]' : 'text-[#141414] hover:text-[#F85800]'
              }`}
            >
              <span className="font-display text-lg sm:text-xl tracking-wide pr-4">
                {item.question}
              </span>
              <span
                className={`transform transition-transform duration-200 text-[#F85800] shrink-0 ${
                  isOpen ? 'rotate-180' : 'rotate-0'
                }`}
              >
                <ChevronDown className="w-5 h-5" />
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-250 ease-in-out ${
                isOpen ? 'max-h-96 opacity-100 pb-6 pt-1' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-2">
                <p className={`text-[16px] leading-relaxed ${isDark ? 'text-[#A3A3A3]' : 'text-[#555]'}`}>
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
