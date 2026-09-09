import React from 'react';
import { PageRoute } from '../types';
import { Users, Sparkles, Shield, HeartHandshake, ArrowRight, ExternalLink } from 'lucide-react';

interface CommunityPageProps {
  navigate: (route: PageRoute) => void;
}

export const CommunityPage: React.FC<CommunityPageProps> = ({ navigate }) => {
  return (
    <div className="w-full bg-[#141414] text-[#F5F3EF]">
      {/* Header */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 border-b border-[#222]">
        <div className="max-w-[1280px] mx-auto space-y-6">
          <span className="eyebrow-label text-[#F85800]">PEER ACCOUNTABILITY SQUAD</span>
          <h1 className="text-h1 text-[#F5F3EF]">
            Cut the Crap Community
          </h1>
          <p className="text-[19px] sm:text-[23px] text-[#D1CFC7] max-w-3xl leading-relaxed font-medium">
            "Change is easier when you aren't doing it alone. Join the Cut the Crap Community to share your progress, your Click Moment, your wins, your setbacks, and what you're learning along the way."
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <button
              onClick={() => navigate('/shareyourclickmoment')}
              className="px-8 py-4 bg-[#F85800] hover:bg-[#E05000] text-[#141414] font-sans font-bold text-xs uppercase tracking-[0.1em] transition-colors flex items-center gap-2 shadow-lg"
            >
              <span>Share Your Click Moment</span>
              <Sparkles className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigate('/findyourbattlebuddy')}
              className="px-8 py-4 bg-[#1E1E1E] hover:bg-[#282828] text-[#F5F3EF] border border-[#333] font-sans font-bold text-xs uppercase tracking-[0.1em] transition-colors flex items-center gap-2"
            >
              <span>Find Your Battle Buddy</span>
              <Users className="w-4 h-4 text-[#F85800]" />
            </button>
          </div>
        </div>
      </section>

      {/* Two Flagship Community Modules */}
      <section className="py-20 sm:py-28 px-6 sm:px-8 border-b border-[#222]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Module 1: Share Your Click Moment */}
          <div className="bg-[#1C1C1C] border border-[#2B2B2B] p-8 sm:p-10 flex flex-col justify-between card-hover">
            <div className="space-y-4">
              <span className="text-xs uppercase font-sans font-bold text-[#F85800] tracking-widest block">
                FLAGSHIP TRADITION
              </span>
              <h2 className="text-h2 text-[#F5F3EF]">
                Share Your Click Moment
              </h2>
              <p className="text-sm text-[#A3A3A3] leading-relaxed">
                The moment when weight loss stops feeling like an endless battle and starts feeling like something you actually understand and can control.
              </p>
              <p className="text-xs text-[#8C8C8C] leading-relaxed">
                Every reader has that morning, that rep, or that realization where the fog lifted. Your story inspires the next person holding this book.
              </p>
            </div>
            <div className="pt-8">
              <button
                onClick={() => navigate('/shareyourclickmoment')}
                className="w-full py-4 bg-[#F85800] hover:bg-[#E05000] text-[#141414] font-sans font-bold text-xs uppercase tracking-[0.1em] transition-colors flex items-center justify-center gap-2"
              >
                <span>Submit Your Story</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Module 2: Find Your Battle Buddy */}
          <div className="bg-[#1C1C1C] border border-[#2B2B2B] p-8 sm:p-10 flex flex-col justify-between card-hover">
            <div className="space-y-4">
              <span className="text-xs uppercase font-sans font-bold text-[#F85800] tracking-widest block">
                MILITARY-INSPIRED ACCOUNTABILITY
              </span>
              <h2 className="text-h2 text-[#F5F3EF]">
                Find Your Battle Buddy
              </h2>
              <p className="text-sm text-[#A3A3A3] leading-relaxed">
                In the military, you never step into hostile territory alone. A battle buddy watches your back, calls out your excuses, and holds you to the standard.
              </p>
              <p className="text-xs text-[#8C8C8C] leading-relaxed">
                Pair up with another reader working through the 4 Pillars. Share weekly check-ins, keep each other accountable, and build lasting consistency.
              </p>
            </div>
            <div className="pt-8">
              <button
                onClick={() => navigate('/findyourbattlebuddy')}
                className="w-full py-4 bg-[#262626] hover:bg-[#333] text-[#F5F3EF] border border-[#3A3A3A] font-sans font-bold text-xs uppercase tracking-[0.1em] transition-colors flex items-center justify-center gap-2"
              >
                <span>Browse Buddy Network</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Official Facebook Squad Connection & Ground Rules */}
      <section className="py-20 px-6 sm:px-8 bg-[#181818] border-b border-[#262626]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="eyebrow-label text-[#F85800]">LIVE CHAT &bull; PEER SUPPORT</span>
            <h2 className="text-h2 text-[#F5F3EF]">
              Official Reader Discussion Group
            </h2>
            <p className="text-[17px] text-[#A3A3A3] leading-relaxed">
              Join the private Facebook Community for Cut the Crap readers. Moderated directly by Up Armor Publishing, this is where daily questions, meal ideas, gym wins, and plateaus are dissected without fluff or judgment.
            </p>
            <div className="pt-2">
              <a
                href="https://facebook.com/groups/cutthecrapcommunity"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#1E1E1E] hover:bg-[#252525] text-[#F5F3EF] border border-[#333] font-sans font-bold text-xs uppercase tracking-[0.1em] transition-colors"
              >
                <span>Join Official Facebook Community</span>
                <ExternalLink className="w-4 h-4 text-[#F85800]" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#141414] border border-[#2B2B2B] p-6 sm:p-8 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-sans font-bold text-[#C8B088] flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#F85800]" />
              Community Ground Rules
            </h4>
            <ul className="space-y-3 text-xs text-[#A3A3A3] leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-[#F85800] font-bold">&bull;</span>
                <span><strong>No Diet Scams or MLMs:</strong> Any detox teas, miracle wraps, or supplement recruiting results in an instant ban.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#F85800] font-bold">&bull;</span>
                <span><strong>Radical Personal Ownership:</strong> We support you through every setback, but we don't validate victim mentalities.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#F85800] font-bold">&bull;</span>
                <span><strong>Physiology Over Fads:</strong> We discuss verified energy balance and protein leverage—not emotional food guilt.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
