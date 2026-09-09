import React, { useState } from 'react';
import { PageRoute } from '../types';
import { Wrench, FileDown, Calculator, BookOpen, ArrowRight, Check } from 'lucide-react';

interface ResourcesPageProps {
  navigate: (route: PageRoute) => void;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({ navigate }) => {
  // Simple interactive energy balance calculator demonstration for readers
  const [weight, setWeight] = useState<number>(185);
  const [activityMultiplier, setActivityMultiplier] = useState<number>(14);
  const estimatedMaintenance = Math.round(weight * activityMultiplier);
  const targetDeficit = estimatedMaintenance - 450;
  const recommendedProtein = Math.round(weight * 0.85);

  return (
    <div className="w-full bg-[#141414] text-[#F5F3EF]">
      {/* Header */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 border-b border-[#222]">
        <div className="max-w-[1280px] mx-auto space-y-6">
          <span className="eyebrow-label text-[#F85800]">IMPLEMENTATION ASSETS</span>
          <h1 className="text-h1 text-[#F5F3EF]">
            Resources Hub
          </h1>
          <p className="text-[19px] sm:text-[23px] text-[#D1CFC7] max-w-3xl leading-relaxed font-medium">
            Calculators, habit tracking matrices, field templates, and reference guides designed to convert the principles of Cut the Crap into immediate daily execution.
          </p>
        </div>
      </section>

      {/* Flagship Hub Links */}
      <section className="py-16 sm:py-24 px-6 sm:px-8 border-b border-[#222]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Cut the Crap Toolbox */}
          <div className="bg-[#1C1C1C] border border-[#2B2B2B] p-8 flex flex-col justify-between card-hover">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#2A2A2A] border border-[#3A3A3A] flex items-center justify-center text-[#F85800]">
                <Wrench className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase font-sans font-bold text-[#F85800] tracking-widest block">
                FLAGSHIP SUITE
              </span>
              <h3 className="font-display text-2xl text-[#F5F3EF]">
                Cut the Crap Toolbox
              </h3>
              <p className="text-sm text-[#A3A3A3] leading-relaxed">
                Direct gear recommendations, precision food scales, tracking apps, and kitchen friction reducers vetted by Lucas.
              </p>
            </div>
            <div className="pt-6">
              <button
                onClick={() => navigate('/toolkit')}
                className="w-full py-3.5 bg-[#F85800] hover:bg-[#E05000] text-[#141414] font-sans font-bold text-xs uppercase tracking-[0.1em] transition-colors flex items-center justify-center gap-2"
              >
                <span>Launch Toolbox</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Printable PDF Habit Matrices */}
          <div className="bg-[#1C1C1C] border border-[#2B2B2B] p-8 flex flex-col justify-between card-hover">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#2A2A2A] border border-[#3A3A3A] flex items-center justify-center text-[#C8B088]">
                <FileDown className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase font-sans font-bold text-[#C8B088] tracking-widest block">
                FIELD WORKSHEETS
              </span>
              <h3 className="font-display text-2xl text-[#F5F3EF]">
                Habit Tracking Sheets
              </h3>
              <p className="text-sm text-[#A3A3A3] leading-relaxed">
                Downloadable, high-contrast PDF habit audit worksheets and weekly adherence scorecards formatted for clipboard and fridge.
              </p>
            </div>
            <div className="pt-6">
              <button
                onClick={() => alert('Download simulated: Cut_The_Crap_Habit_Matrix.pdf')}
                className="w-full py-3.5 bg-[#262626] hover:bg-[#333] text-[#F5F3EF] border border-[#3A3A3A] font-sans font-bold text-xs uppercase tracking-[0.1em] transition-colors flex items-center justify-center gap-2"
              >
                <span>Download PDF Worksheets</span>
                <FileDown className="w-4 h-4 text-[#F85800]" />
              </button>
            </div>
          </div>

          {/* Card 3: Reading & Study Group Guide */}
          <div className="bg-[#1C1C1C] border border-[#2B2B2B] p-8 flex flex-col justify-between card-hover">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#2A2A2A] border border-[#3A3A3A] flex items-center justify-center text-[#5E7488]">
                <BookOpen className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase font-sans font-bold text-[#5E7488] tracking-widest block">
                STUDY CURRICULUM
              </span>
              <h3 className="font-display text-2xl text-[#F5F3EF]">
                Book Club &amp; Squad Guide
              </h3>
              <p className="text-sm text-[#A3A3A3] leading-relaxed">
                A structured 6-week syllabus for teams, military units, and gym communities reading Cut the Crap together.
              </p>
            </div>
            <div className="pt-6">
              <button
                onClick={() => alert('Download simulated: CTC_Study_Syllabus_6Weeks.pdf')}
                className="w-full py-3.5 bg-[#262626] hover:bg-[#333] text-[#F5F3EF] border border-[#3A3A3A] font-sans font-bold text-xs uppercase tracking-[0.1em] transition-colors flex items-center justify-center gap-2"
              >
                <span>Download Study Guide</span>
                <BookOpen className="w-4 h-4 text-[#5E7488]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tool: Simple Caloric Baseline & Protein Estimator */}
      <section className="py-20 sm:py-28 px-6 sm:px-8 bg-[#181818] border-b border-[#262626]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F85800]">
              <Calculator className="w-4 h-4" />
              Chapter 2 Interactive Model
            </div>
            <h2 className="text-h2 text-[#F5F3EF]">
              Quick Energy &amp; Protein Estimator
            </h2>
            <p className="text-[17px] text-[#A3A3A3] leading-relaxed">
              No expensive metabolic chamber required. The mathematics of energy expenditure rely on predictable baseline multipliers. Use this interactive model to understand where your baseline begins.
            </p>
            <div className="p-4 bg-[#141414] border-l-2 border-[#C8B088] text-xs text-[#999] space-y-1">
              <p className="font-semibold text-[#F5F3EF]">Engineering Rule:</p>
              <p>Calculators provide an initial hypothesis. The real test is tracking average body weight against average calories over 14 consecutive days.</p>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#141414] border border-[#2B2B2B] p-6 sm:p-8 space-y-6">
            <div>
              <div className="flex justify-between text-xs uppercase font-sans font-bold text-[#A3A3A3] mb-2">
                <span>Current Body Weight</span>
                <span className="text-[#F85800] text-sm">{weight} lbs</span>
              </div>
              <input
                type="range"
                min={110}
                max={380}
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="w-full accent-[#F85800]"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs uppercase font-sans font-bold text-[#A3A3A3] mb-2">
                <span>Daily Activity Profile</span>
                <span className="text-[#C8B088]">
                  {activityMultiplier === 13
                    ? 'Sedentary Desk'
                    : activityMultiplier === 14
                    ? 'Moderate (7k-10k steps)'
                    : 'Active / Heavy Labor'}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: 'Sedentary', val: 13 },
                  { label: 'Moderate', val: 14 },
                  { label: 'Active', val: 15 },
                ].map((act) => (
                  <button
                    key={act.val}
                    onClick={() => setActivityMultiplier(act.val)}
                    className={`py-2 text-xs font-sans font-bold uppercase tracking-wider border transition-colors ${
                      activityMultiplier === act.val
                        ? 'bg-[#F85800] text-[#141414] border-[#F85800]'
                        : 'bg-[#1C1C1C] text-[#888] border-[#333]'
                    }`}
                  >
                    {act.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#2A2A2A] grid grid-cols-3 gap-4 text-center">
              <div className="p-3 bg-[#1C1C1C] border border-[#2F2F2F]">
                <span className="text-[10px] uppercase font-bold text-[#8C8C8C] block mb-1">
                  Est. Maintenance
                </span>
                <span className="text-xl font-display text-[#F5F3EF]">
                  {estimatedMaintenance}
                </span>
                <span className="text-[10px] text-[#666] block">kcal/day</span>
              </div>
              <div className="p-3 bg-[#1C1C1C] border border-[#F85800]/40">
                <span className="text-[10px] uppercase font-bold text-[#F85800] block mb-1">
                  Target Deficit
                </span>
                <span className="text-xl font-display text-[#F85800]">
                  {targetDeficit}
                </span>
                <span className="text-[10px] text-[#888] block">kcal/day</span>
              </div>
              <div className="p-3 bg-[#1C1C1C] border border-[#2F2F2F]">
                <span className="text-[10px] uppercase font-bold text-[#C8B088] block mb-1">
                  Daily Protein Floor
                </span>
                <span className="text-xl font-display text-[#C8B088]">
                  {recommendedProtein}g
                </span>
                <span className="text-[10px] text-[#666] block">grams/day</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
