import React, { useState } from 'react';
import { PageRoute } from '../types';
import { Sparkles, CheckCircle2, ArrowLeft, UploadCloud } from 'lucide-react';

interface ShareClickMomentPageProps {
  navigate: (route: PageRoute) => void;
}

export const ShareClickMomentPage: React.FC<ShareClickMomentPageProps> = ({ navigate }) => {
  const [name, setName] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [whenWhere, setWhenWhere] = useState('');
  const [truthShift, setTruthShift] = useState('');
  const [story, setStory] = useState('');
  const [permissionGranted, setPermissionGranted] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="w-full bg-[#141414] text-[#F5F3EF]">
      {/* Header */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 border-b border-[#222]">
        <div className="max-w-[1280px] mx-auto max-w-3xl space-y-6">
          <button
            onClick={() => navigate('/community')}
            className="text-xs uppercase tracking-wider font-sans font-bold text-[#8C8C8C] hover:text-[#F85800] flex items-center gap-1.5 mb-2"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Community
          </button>
          <span className="eyebrow-label text-[#F85800]">READER ARCHIVE</span>
          <h1 className="text-h1 text-[#F5F3EF]">
            Share Your Click Moment
          </h1>
          <div className="p-6 sm:p-8 bg-[#1E1E1E] border-l-4 border-[#F85800] text-[18px] sm:text-[20px] text-[#F5F3EF] leading-relaxed italic">
            "The moment when weight loss stops feeling like an endless battle and starts feeling like something you actually understand and can control."
          </div>
          <p className="text-sm text-[#A3A3A3] leading-relaxed">
            Every reader has a pivotal point where the endless frustration gave way to clarity. Whether it happened in the grocery aisle reading a nutrition label, after calculating your true calorie burn, or during an early-morning workout—your story proves what is possible without gimmicks.
          </p>
        </div>
      </section>

      {/* Submission Form */}
      <section className="py-16 sm:py-24 px-6 sm:px-8">
        <div className="max-w-3xl mx-auto">
          {isSubmitted ? (
            <div className="bg-[#1C1C1C] border border-[#F85800]/60 p-8 sm:p-12 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#F85800]/20 border border-[#F85800] flex items-center justify-center mx-auto text-[#F85800]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="font-display text-2xl text-[#F5F3EF]">
                  YOUR CLICK MOMENT WAS RECEIVED
                </h3>
                <p className="text-sm text-[#A3A3A3] max-w-lg mx-auto">
                  Thank you for contributing to the Cut the Crap reader archive. Lucas and the Up Armor Publishing team review every story personally.
                </p>
              </div>
              <div className="pt-4 flex justify-center gap-4">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 bg-[#262626] hover:bg-[#333] text-xs uppercase tracking-wider font-bold text-[#F5F3EF]"
                >
                  Submit Another Story
                </button>
                <button
                  onClick={() => navigate('/community')}
                  className="px-6 py-3 bg-[#F85800] hover:bg-[#E05000] text-xs uppercase tracking-wider font-bold text-[#141414]"
                >
                  Back to Community
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 bg-[#181818] border border-[#2B2B2B] p-6 sm:p-10">
              {/* Contributor Identity */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-[#A3A3A3] mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required={!isAnonymous}
                    disabled={isAnonymous}
                    placeholder={isAnonymous ? 'Anonymous Reader' : 'e.g. Marcus Vance'}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 bg-[#121212] border border-[#333] text-[#F5F3EF] text-sm focus:outline-none focus:border-[#F85800]"
                  />
                  <label className="flex items-center gap-2 mt-2 text-xs text-[#8C8C8C] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isAnonymous}
                      onChange={(e) => setIsAnonymous(e.target.checked)}
                      className="accent-[#F85800]"
                    />
                    <span>Keep my name anonymous if featured publicly</span>
                  </label>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-[#A3A3A3] mb-2">
                    Email Address <span className="text-[#F85800]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-[#121212] border border-[#333] text-[#F5F3EF] text-sm focus:outline-none focus:border-[#F85800]"
                  />
                  <span className="text-[11px] text-[#666] block mt-1">
                    For verification and private author updates only. Never published.
                  </span>
                </div>
              </div>

              {/* Setting the Scene */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-[#A3A3A3] mb-2">
                  Where were you when it clicked? <span className="text-[#F85800]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Reading Chapter 4 in my kitchen while weighing food for the first time"
                  value={whenWhere}
                  onChange={(e) => setWhenWhere(e.target.value)}
                  className="w-full px-4 py-3 bg-[#121212] border border-[#333] text-[#F5F3EF] text-sm focus:outline-none focus:border-[#F85800]"
                />
              </div>

              {/* The Shift */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-[#A3A3A3] mb-2">
                  What was the specific truth or shift that changed everything? <span className="text-[#F85800]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Realizing that carbs were not my enemy, but energy density was"
                  value={truthShift}
                  onChange={(e) => setTruthShift(e.target.value)}
                  className="w-full px-4 py-3 bg-[#121212] border border-[#333] text-[#F5F3EF] text-sm focus:outline-none focus:border-[#F85800]"
                />
              </div>

              {/* Story Details */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-[#A3A3A3] mb-2">
                  Tell Your Story in Detail <span className="text-[#F85800]">*</span>
                </label>
                <textarea
                  rows={6}
                  required
                  placeholder="Describe your previous struggles, the moment the light turned on, and what your daily life and habits look like today..."
                  value={story}
                  onChange={(e) => setStory(e.target.value)}
                  className="w-full px-4 py-3 bg-[#121212] border border-[#333] text-[#F5F3EF] text-sm focus:outline-none focus:border-[#F85800]"
                />
              </div>

              {/* Photo Upload Simulator per Brief */}
              <div className="p-6 bg-[#141414] border border-dashed border-[#3A3A3A] text-center space-y-2">
                <UploadCloud className="w-8 h-8 text-[#C8B088] mx-auto" />
                <div className="text-xs uppercase font-sans font-bold text-[#F5F3EF]">
                  Attach Transformation or Journal Photo (Optional)
                </div>
                <p className="text-[11px] text-[#777]">
                  Supports PNG, JPG up to 15MB. Real photos help illustrate genuine progress.
                </p>
                <div className="pt-2">
                  <span className="text-[10px] font-mono bg-[#222] text-[#AAA] px-3 py-1 border border-[#333]">
                    [PHOTO: Reader Attachment Slot]
                  </span>
                </div>
              </div>

              {/* Publishing Consent Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-3 text-xs text-[#A3A3A3] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={permissionGranted}
                    onChange={(e) => setPermissionGranted(e.target.checked)}
                    required
                    className="accent-[#F85800] mt-0.5"
                  />
                  <span>
                    I grant Up Armor Publishing permission to share my Click Moment (attributed or anonymously as selected above) in future book editions, community newsletters, and articles.
                  </span>
                </label>
              </div>

              {/* Submit CTA */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#F85800] hover:bg-[#E05000] text-[#141414] font-sans font-bold text-xs uppercase tracking-[0.1em] transition-colors"
                >
                  Submit Your Click Moment
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
