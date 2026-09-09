import React from 'react';
import {
  PillarTrainingIcon,
  PillarNutritionIcon,
  PillarFaithIcon,
  PillarDisciplineIcon,
} from './BrandLogos';

interface PillarRowProps {
  theme?: 'dark' | 'light';
  showSubtitles?: boolean;
}

export const PillarRow: React.FC<PillarRowProps> = ({ theme = 'dark', showSubtitles = true }) => {
  const isDark = theme === 'dark';

  const pillars = [
    {
      name: 'TRAINING',
      icon: <PillarTrainingIcon className="w-8 h-8 text-[#F85800]" />,
      desc: 'Progressive overload, lean mass retention, and physical readiness without endless cardio.',
    },
    {
      name: 'NUTRITION',
      icon: <PillarNutritionIcon className="w-8 h-8 text-[#F85800]" />,
      desc: 'Energy balance and protein leverage without rigid detoxes, misery, or forbidden foods.',
    },
    {
      name: 'FAITH',
      icon: <PillarFaithIcon className="w-8 h-8 text-[#F85800]" />,
      desc: 'An unshakeable spiritual anchor and higher purpose beyond fleeting mirror vanity.',
    },
    {
      name: 'DISCIPLINE',
      icon: <PillarDisciplineIcon className="w-8 h-8 text-[#F85800]" />,
      desc: 'Military habit architecture that keeps you consistent when motivation evaporates.',
    },
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {pillars.map((p) => (
          <div
            key={p.name}
            className={`p-6 border text-center flex flex-col items-center justify-start transition-transform hover:-translate-y-1 ${
              isDark
                ? 'bg-[#1A1A1A] border-[#2A2A2A]'
                : 'bg-white border-[#E5E0D8] shadow-sm'
            }`}
          >
            {/* Orange circular badge container */}
            <div className="w-14 h-14 rounded-full border border-[#F85800]/30 bg-[#F85800]/10 flex items-center justify-center mb-4 text-[#F85800]">
              {p.icon}
            </div>

            <h4 className={`font-display text-lg tracking-wider mb-2 ${
              isDark ? 'text-[#F5F3EF]' : 'text-[#141414]'
            }`}>
              {p.name}
            </h4>

            {showSubtitles && (
              <p className={`text-xs font-sans leading-relaxed ${
                isDark ? 'text-[#8C8C8C]' : 'text-[#666]'
              }`}>
                {p.desc}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
