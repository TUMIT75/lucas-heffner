import React, { useState } from 'react';
import { PageRoute } from '../types';
import { Shield, Users, ArrowLeft, Check, CheckCircle2, MessageSquare, Clock } from 'lucide-react';

interface FindBattleBuddyPageProps {
  navigate: (route: PageRoute) => void;
}

export const FindBattleBuddyPage: React.FC<FindBattleBuddyPageProps> = ({ navigate }) => {
  const [selectedGoal, setSelectedGoal] = useState<string>('All');
  const [requestedMatches, setRequestedMatches] = useState<string[]>([]);

  const sampleBuddies = [
    {
      id: 'buddy-1',
      callsign: 'Derek M.',
      location: 'Dallas, TX (Central)',
      goal: 'Fat Loss & Energy Balance',
      frequency: 'Daily text pulse',
      bio: 'Lost 20 lbs so far following Chapter 3. Working full-time with 2 kids. Need someone to keep my evening snacking honest.',
      badges: ['Chapter 4 Reader', 'Dad'],
    },
    {
      id: 'buddy-2',
      callsign: 'Sarah K.',
      location: 'Columbus, OH (Eastern)',
      goal: 'Habit Consistency',
      frequency: 'Weekly 15-min phone call',
      bio: 'Prior yo-yo dieter learning that slow is fast. Want a female battle buddy focusing on protein targets and daily 8k steps.',
      badges: ['Habit Tracker', 'Morning Lifter'],
    },
    {
      id: 'buddy-3',
      callsign: 'Anthony R.',
      location: 'Phoenix, AZ (Mountain)',
      goal: 'Strength & Progressive Overload',
      frequency: '3x weekly sync',
      bio: 'Veteran getting back into the barbell after 5 years off. No excuses, strict logging, looking for another veteran or lifter.',
      badges: ['Veteran', 'Barbell Focus'],
    },
    {
      id: 'buddy-4',
      callsign: 'Elena V.',
      location: 'Seattle, WA (Pacific)',
      goal: 'Post-Burnout Re-entry',
      frequency: 'Daily text pulse',
      bio: 'Rebuilding health after corporate burnout. Prioritizing sleep, protein leverage, and leaving diet dogmatism behind.',
      badges: ['Nutrition Coach Track', 'Tech Exec'],
    },
  ];

  const handleRequestMatch = (id: string) => {
    if (!requestedMatches.includes(id)) {
      setRequestedMatches([...requestedMatches, id]);
    }
  };

  const filteredBuddies =
    selectedGoal === 'All'
      ? sampleBuddies
      : sampleBuddies.filter((b) => b.goal.toLowerCase().includes(selectedGoal.toLowerCase()));

  return (
    <div className="w-full bg-[#141414] text-[#F5F3EF]">
      {/* Header */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 border-b border-[#222]">
        <div className="max-w-[1280px] mx-auto max-w-4xl space-y-6">
          <button
            onClick={() => navigate('/community')}
            className="text-xs uppercase tracking-wider font-sans font-bold text-[#8C8C8C] hover:text-[#F85800] flex items-center gap-1.5 mb-2"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Community
          </button>
          <span className="eyebrow-label text-[#F85800]">ACCOUNTABILITY PROTOCOL</span>
          <h1 className="text-h1 text-[#F5F3EF]">
            Find Your Battle Buddy
          </h1>
          <p className="text-[19px] sm:text-[23px] text-[#D1CFC7] leading-relaxed font-medium">
            In the military, a battle buddy watches your back, shares the burden, and refuses to let you abandon the mission. We apply that same non-negotiable peer discipline to your health and habits.
          </p>
        </div>
      </section>

      {/* Directory & Filter Controls */}
      <section className="py-16 sm:py-24 px-6 sm:px-8">
        <div className="max-w-[1280px] mx-auto space-y-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#2A2A2A] pb-6">
            <div>
              <h2 className="text-h3 text-[#F5F3EF]">Active Reader Partner Listings</h2>
              <p className="text-xs text-[#8C8C8C] mt-1">
                Directly connect with readers pursuing identical habit targets.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs uppercase font-sans font-bold text-[#777]">Filter Goal:</span>
              <select
                value={selectedGoal}
                onChange={(e) => setSelectedGoal(e.target.value)}
                className="bg-[#1C1C1C] border border-[#333] text-[#F5F3EF] px-3 py-1.5 text-xs focus:outline-none focus:border-[#F85800]"
              >
                <option value="All">All Goals</option>
                <option value="Fat Loss">Fat Loss</option>
                <option value="Habit">Habit Consistency</option>
                <option value="Strength">Strength &amp; Barbell</option>
                <option value="Burnout">Post-Burnout Re-entry</option>
              </select>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredBuddies.map((buddy) => {
              const isMatched = requestedMatches.includes(buddy.id);
              return (
                <div
                  key={buddy.id}
                  className="bg-[#1C1C1C] border border-[#2B2B2B] p-6 sm:p-8 flex flex-col justify-between card-hover"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#2A2A2A] border border-[#444] text-[#F85800] flex items-center justify-center font-display font-bold text-sm">
                          {buddy.callsign.split(' ')[0][0]}
                        </div>
                        <div>
                          <h4 className="font-display text-lg text-[#F5F3EF]">{buddy.callsign}</h4>
                          <span className="text-xs text-[#8C8C8C]">{buddy.location}</span>
                        </div>
                      </div>
                      <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#F85800] bg-[#141414] border border-[#333] px-2.5 py-1">
                        {buddy.frequency}
                      </span>
                    </div>

                    <div className="p-3 bg-[#141414] border border-[#252525] space-y-1">
                      <span className="text-[10px] uppercase font-bold text-[#C8B088] tracking-wider block">
                        Focus Target
                      </span>
                      <p className="text-sm font-semibold text-[#F5F3EF]">{buddy.goal}</p>
                    </div>

                    <p className="text-sm text-[#A3A3A3] leading-relaxed italic">
                      "{buddy.bio}"
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {buddy.badges.map((b) => (
                        <span
                          key={b}
                          className="text-[10px] uppercase font-mono px-2 py-0.5 bg-[#252525] text-[#8C8C8C] border border-[#333]"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#2A2A2A]">
                    <button
                      type="button"
                      onClick={() => handleRequestMatch(buddy.id)}
                      className={`w-full py-3 text-xs uppercase font-sans font-bold tracking-[0.1em] flex items-center justify-center gap-2 transition-colors ${
                        isMatched
                          ? 'bg-[#2E7D32] text-white'
                          : 'bg-[#F85800] hover:bg-[#E05000] text-[#141414]'
                      }`}
                    >
                      {isMatched ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Match Request Dispatched</span>
                        </>
                      ) : (
                        <>
                          <MessageSquare className="w-4 h-4" />
                          <span>Request Battle Buddy Connection</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
