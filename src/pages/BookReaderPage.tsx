import React, { useState } from 'react';
import { PageRoute } from '../types';
import { useCart } from '../context/CartContext';
import { RealisticBookCover } from '../components/RealisticBookCover';
import {
  BookOpen,
  ArrowLeft,
  ArrowRight,
  Download,
  ShoppingBag,
  List,
  Type,
  Sun,
  Moon,
  Coffee,
  CheckCircle2,
  Share2,
} from 'lucide-react';

interface BookReaderPageProps {
  navigate: (route: PageRoute) => void;
}

export const BookReaderPage: React.FC<BookReaderPageProps> = ({ navigate }) => {
  const { addToCart } = useCart();
  const [currentChapterIdx, setCurrentChapterIdx] = useState(0);
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg' | 'xl'>('base');
  const [theme, setTheme] = useState<'dark' | 'sepia' | 'light'>('dark');
  const [showToc, setShowToc] = useState(false);
  const [hasDownloadedSample, setHasDownloadedSample] = useState(false);

  const chapters = [
    {
      id: 'intro',
      number: 'Introduction',
      title: 'The Death of Diet Dogma',
      subtitle: 'Why Every Diet Failed You (And Why It Wasn’t Your Fault)',
      content: [
        'If you are holding this book, you have almost certainly tried before. You have likely counted points, cut carbs until your brain felt submerged in mud, eliminated seed oils, fasted until 2:00 PM with an empty stomach and a pounding headache, or drank powders that tasted like chalk and regret.',
        'And for three weeks, maybe six, it worked. The scale ticked downward. Your pants felt looser. You believed, with genuine conviction, that this time would be different.',
        'Then life intervened. A stressful work deadline, a sick child, a weekend road trip, or simply the biological exhaustion of fighting your own physiology. You had one meal off-plan. Then two. Within ninety days, the weight returned, accompanied by a heavy residue of guilt and the sickening suspicion that you simply lacked the moral willpower to succeed.',
        'I am here to tell you that your willpower was never the problem.',
        'For nearly two decades, the diet and wellness industry has operated on a predatory business model. They sell you emotional villainy: carbohydrates are evil, insulin is the enemy, fruit is toxic, or you need to detoxify your liver with celery juice. They give you a set of rigid, impossible rules that conflict with basic human physiology and social reality.',
        'When you inevitably fail to sustain their neurotic dogma, they tell you it was your fault—and then sell you their next protocol.',
        'I spent a decade trapped in that cycle. I was an active-duty U.S. Army Engineer officer. I led soldiers through grueling physical training, built bridges, and operated under extreme stress. Yet privately, my weight ballooned until I was carrying over 140 pounds of excess body fat, with a body fat percentage north of 44%.',
        'I did not fix my health through motivation, juice cleanses, or white-knuckled suffering. I fixed it by stripping away the commercial bullshit and treating human body composition as an engineering problem governed by thermodynamics, protein leverage, and habit friction.',
        'This book is that blueprint.',
      ],
    },
    {
      id: 'ch1',
      number: 'Chapter 1',
      title: 'The Dopamine Trap',
      subtitle: 'Why Motivation Is the Worst Tool for Long-Term Body Composition',
      content: [
        'Motivation is an emotional state. Relying on motivation to govern a biological system is like relying on the weather to steer a ship across the Atlantic.',
        'When you decide on a Sunday evening that you are going to "change your life tomorrow," your brain experiences a profound dopamine surge. You envision the leaner version of yourself, the compliments from friends, the ease of moving without joint pain. This visualization feels like actual accomplishment, but it costs zero biological calories.',
        'By Wednesday morning at 6:00 AM, the novelty has evaporated. Your alarm is ringing, your sleep was fragmented, your inbox is overflowing, and the dopamine high of Sunday night is dead.',
        'If your fitness strategy requires high emotional energy to execute, it is doomed to fail. In the military, we do not design combat operating procedures around the assumption that soldiers will feel motivated. We design systems that work when people are exhausted, cold, hungry, and stressed.',
        'Your weight loss protocol must be engineered to survive your worst days, not your best ones.',
        'When you remove motivation from the equation, you replace it with habit architecture: removing friction from the correct choices, adding insurmountable friction to the destructive ones, and establishing non-negotiable minimums that you execute regardless of how you feel.',
      ],
    },
    {
      id: 'ch2',
      number: 'Chapter 2',
      title: 'The Reality of Energy Balance',
      subtitle: 'CICO Without the Bullshit: The First Law of Thermodynamics',
      content: [
        'There is no metabolic loophole that excuses you from the First Law of Thermodynamics. Energy cannot be created or destroyed in a closed system; it can only change form.',
        'If you consume fewer calories than your total daily energy expenditure (TDEE), your body has no physiological choice but to oxidize stored endogenous tissue—primarily adipose tissue and glycogen—to make up the energetic deficit.',
        'Does hormone regulation matter? Yes. Does food quality matter? Immensely. Does gut health and sleep influence expenditure? Without question. But every single one of those factors operates through the mechanism of energy balance, not in place of it.',
        'When low-carb evangelists claim insulin prevents fat burning regardless of calorie deficit, they are peddling pseudoscience. Controlled metabolic ward studies have repeatedly shown that when calories and protein are equated, fat loss is virtually identical regardless of carbohydrate or fat ratios.',
        'Why does this matter to you? Because it gives you freedom. It means you do not have to live in fear of a slice of birthday cake with your daughter or an authentic bowl of pasta in Italy. You simply manage the energy ledger over the course of the week.',
      ],
    },
    {
      id: 'ch3',
      number: 'Chapter 3',
      title: 'The Protein Leverage Solution',
      subtitle: 'The Single Most Powerful Metabolic Shift in Human Nutrition',
      content: [
        'If energy balance is the fundamental law of fat loss, protein leverage is the operational steering wheel.',
        'The Protein Leverage Hypothesis, validated across multiple mammalian species, demonstrates that animals and humans will continue to consume food until their biological protein requirements are satisfied. If your diet is low in dietary protein, your neuroendocrine system will trigger relentless hunger signals, driving you to overconsume energy-dense carbohydrates and fats.',
        'Protein offers three distinct, unmatched advantages for sustainable weight loss:',
        '1. Thermic Effect of Food (TEF): Digesting protein requires your body to expend roughly 20% to 30% of its caloric value simply breaking peptide bonds into amino acids. Carbs require only 5-10%, and fats just 0-3%.',
        '2. Lean Mass Preservation: When in an energy deficit, your body will catabolize muscle tissue unless you supply adequate dietary amino acids and mechanical resistance. Muscle is your metabolic engine; sacrificing it during a diet is a disaster.',
        '3. Satiety Signals: Dietary protein stimulates the release of peptide YY (PYY), glucagon-like peptide-1 (GLP-1), and cholecystokinin (CCK) while suppressing ghrelin, the primary hunger hormone.',
        'The non-negotiable rule of Cut the Crap: Anchor every single day around 0.8g to 1.0g of protein per pound of your target body weight. Hit that target first, and hunger stops being an adversary.',
      ],
    },
    {
      id: 'ch4',
      number: 'Chapter 4',
      title: 'The Minimum Viable Day',
      subtitle: 'Why Consistency at 70% Beats Perfection That Quits at 3 Weeks',
      content: [
        'The fatal flaw of modern fitness programs is their all-or-nothing binary mindset. You are either "on the wagon," tracking every gram and training six days a week, or you are "off the wagon," eating indiscriminately and doing nothing.',
        'In reality, consistency at 70% execution sustained for three years will transform your body far more radically than 100% execution that burns you out after three weeks.',
        'Enter the concept of the Minimum Viable Day (MVD). An MVD is your non-negotiable floor—the baseline actions you commit to executing even when you are traveling across time zones, sick, or working an 80-hour week.',
        'My personal MVD is simple: 1) Hit my daily protein floor. 2) Drink 100 ounces of water. 3) Walk 8,000 steps. That is it. No gym required, no complicated cooking. Just baseline execution.',
        'When you protect your floor, you eliminate the concept of falling off the wagon. You simply adjust between standard operations and minimum viable operations.',
      ],
    },
  ];

  const currentChapter = chapters[currentChapterIdx];

  const fontSizeClasses = {
    sm: 'text-[15px] leading-[1.65]',
    base: 'text-[17px] sm:text-[18px] leading-[1.75]',
    lg: 'text-[19px] sm:text-[21px] leading-[1.8]',
    xl: 'text-[22px] sm:text-[24px] leading-[1.85]',
  };

  const themeClasses = {
    dark: 'bg-[#141414] text-[#D4D2CB]',
    sepia: 'bg-[#24201A] text-[#E0D8C8]',
    light: 'bg-[#F5F3EF] text-[#222220]',
  };

  const handleDownloadSample = () => {
    setHasDownloadedSample(true);
    // Create a mock downloadable PDF text blob
    const element = document.createElement('a');
    const file = new Blob(
      [
        `CUT THE CRAP by Lucas Heffner - Sample Chapters (Intro, Ch 1-4)\n\nPublished by Up Armor Publishing.\nAll rights reserved.\n\nVisit https://lucasheffner.com to order the full print edition or complete digital PDF.`,
      ],
      { type: 'text/plain' }
    );
    element.href = URL.createObjectURL(file);
    element.download = 'Cut_The_Crap_Sample_Chapters_Lucas_Heffner.pdf';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className={`min-h-screen ${themeClasses[theme]} transition-colors duration-200`}>
      {/* Reader Control Header */}
      <header className="sticky top-0 z-30 backdrop-blur-md bg-opacity-95 border-b border-white/10 px-4 sm:px-8 py-3">
        <div className="max-w-[1100px] mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/cutthecrap')}
              className="text-xs uppercase font-sans font-bold tracking-wider hover:text-[#F85800] transition-colors flex items-center gap-1.5"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back to Book Page</span>
              <span className="sm:hidden">Back</span>
            </button>

            <span className="text-white/20 hidden sm:inline">&bull;</span>

            <button
              onClick={() => setShowToc(!showToc)}
              className="text-xs font-sans font-bold uppercase tracking-wider px-2.5 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center gap-1.5"
            >
              <List className="w-3.5 h-3.5 text-[#F85800]" />
              <span>Chapters ({currentChapterIdx + 1}/{chapters.length})</span>
            </button>
          </div>

          {/* Reader Preferences (Font Size, Theme) */}
          <div className="flex items-center gap-3">
            {/* Font Size Selector */}
            <div className="flex items-center border border-white/10 bg-white/5 text-xs font-mono">
              <button
                onClick={() => setFontSize('sm')}
                className={`px-2 py-1 ${fontSize === 'sm' ? 'bg-[#F85800] text-[#141414] font-bold' : 'hover:text-[#FFF]'}`}
                title="Small text"
              >
                A-
              </button>
              <button
                onClick={() => setFontSize('base')}
                className={`px-2 py-1 ${fontSize === 'base' ? 'bg-[#F85800] text-[#141414] font-bold' : 'hover:text-[#FFF]'}`}
                title="Standard text"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('lg')}
                className={`px-2 py-1 ${fontSize === 'lg' ? 'bg-[#F85800] text-[#141414] font-bold' : 'hover:text-[#FFF]'}`}
                title="Large text"
              >
                A+
              </button>
            </div>

            {/* Theme Selector */}
            <div className="flex items-center border border-white/10 bg-white/5 text-xs">
              <button
                onClick={() => setTheme('dark')}
                className={`p-1.5 ${theme === 'dark' ? 'bg-[#F85800] text-[#141414]' : 'text-[#888] hover:text-[#FFF]'}`}
                title="Dark mode"
              >
                <Moon className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setTheme('sepia')}
                className={`p-1.5 ${theme === 'sepia' ? 'bg-[#C8B088] text-[#141414]' : 'text-[#888] hover:text-[#FFF]'}`}
                title="Sepia warm mode"
              >
                <Coffee className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setTheme('light')}
                className={`p-1.5 ${theme === 'light' ? 'bg-[#333] text-[#FFF]' : 'text-[#888] hover:text-[#000]'}`}
                title="Light mode"
              >
                <Sun className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Quick Buy CTA */}
            <button
              onClick={() => navigate('/store')}
              className="px-3 py-1.5 bg-[#F85800] hover:bg-[#E05000] text-[#141414] font-sans font-bold text-xs uppercase tracking-wider hidden md:flex items-center gap-1.5 shadow"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Get Full Book</span>
            </button>
          </div>
        </div>

        {/* Reading Progress Line */}
        <div className="w-full bg-white/10 h-[2px] mt-3">
          <div
            className="bg-[#F85800] h-full transition-all duration-300"
            style={{ width: `${((currentChapterIdx + 1) / chapters.length) * 100}%` }}
          />
        </div>
      </header>

      {/* Table of Contents Dropdown Drawer */}
      {showToc && (
        <div className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm flex justify-start">
          <div className="w-full max-w-sm bg-[#181818] border-r border-[#333] p-6 sm:p-8 space-y-6 overflow-y-auto">
            <div className="flex items-center justify-between border-b border-[#2A2A2A] pb-4">
              <span className="font-display text-lg text-[#F5F3EF]">
                Table of Contents
              </span>
              <button
                onClick={() => setShowToc(false)}
                className="text-[#888] hover:text-[#FFF] text-sm font-bold"
              >
                ✕ Close
              </button>
            </div>

            <div className="space-y-2">
              {chapters.map((ch, idx) => (
                <button
                  key={ch.id}
                  onClick={() => {
                    setCurrentChapterIdx(idx);
                    setShowToc(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`w-full text-left p-3.5 border transition-colors ${
                    currentChapterIdx === idx
                      ? 'bg-[#F85800]/15 border-[#F85800] text-[#F85800]'
                      : 'bg-[#141414] border-[#2A2A2A] text-[#CCC] hover:border-[#555]'
                  }`}
                >
                  <span className="text-[10px] uppercase font-mono font-bold block opacity-70">
                    {ch.number}
                  </span>
                  <span className="font-display text-sm block mt-0.5">
                    {ch.title}
                  </span>
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-[#2A2A2A] space-y-2">
              <span className="text-xs uppercase font-bold text-[#C8B088] block">
                Free Reading Privilege
              </span>
              <p className="text-xs text-[#888] leading-relaxed">
                You are reading the official author preview proof. The full book contains 18 comprehensive chapters, the complete 4 Pillars habit protocol, and printable daily tracking worksheets.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Main Chapter Reader Content */}
      <main className="max-w-[780px] mx-auto px-6 sm:px-8 py-16 sm:py-24">
        {/* Chapter Header */}
        <div className="mb-12 border-b border-current/10 pb-8 space-y-3 text-center sm:text-left">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#F85800] block">
            {currentChapter.number} &bull; Official Book Preview
          </span>
          <h1 className="font-display text-3xl sm:text-5xl tracking-tight leading-[1.1] text-current font-black">
            {currentChapter.title}
          </h1>
          <p className="text-base sm:text-lg opacity-75 font-medium italic">
            {currentChapter.subtitle}
          </p>
        </div>

        {/* Chapter Body */}
        <article className={`space-y-6 ${fontSizeClasses[fontSize]} font-sans`}>
          {currentChapter.content.map((paragraph, pIdx) => {
            if (pIdx === 3 && currentChapter.id === 'intro') {
              return (
                <blockquote
                  key={pIdx}
                  className="my-8 p-6 bg-current/5 border-l-4 border-[#F85800] font-display text-xl sm:text-2xl not-italic tracking-wide text-current"
                >
                  "{paragraph}"
                </blockquote>
              );
            }
            return (
              <p key={pIdx} className="leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </article>

        {/* Navigation Between Chapters */}
        <div className="mt-16 pt-8 border-t border-current/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          {currentChapterIdx > 0 ? (
            <button
              onClick={() => {
                setCurrentChapterIdx((prev) => prev - 1);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-5 py-3 border border-current/20 hover:border-[#F85800] text-xs font-sans font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous Chapter</span>
            </button>
          ) : (
            <div />
          )}

          {currentChapterIdx < chapters.length - 1 ? (
            <button
              onClick={() => {
                setCurrentChapterIdx((prev) => prev + 1);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-6 py-3 bg-[#F85800] hover:bg-[#E05000] text-[#141414] text-xs font-sans font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
            >
              <span>Next Chapter</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => {
                navigate('/store');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-6 py-3 bg-[#F85800] hover:bg-[#E05000] text-[#141414] text-xs font-sans font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-lg"
            >
              <span>Order Full Book &rarr;</span>
            </button>
          )}
        </div>

        {/* Purchase & Download Callout Card at Chapter End */}
        <div className="mt-20 p-8 sm:p-10 bg-current/5 border border-current/15 space-y-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <RealisticBookCover edition="hardcover" size="sm" className="shrink-0" />

            <div className="space-y-3 text-center sm:text-left">
              <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#F85800] block">
                COMPLETE YOUR JOURNEY
              </span>
              <h3 className="font-display text-2xl text-current">
                Get the Full Book &amp; Habit Blueprint
              </h3>
              <p className="text-sm opacity-80 leading-relaxed">
                Enjoyed the preview? The complete 18-chapter book is available in collector's Hardcover, Paperback, and instant Digital PDF &amp; ePub editions.
              </p>

              <div className="pt-2 flex flex-wrap gap-3 justify-center sm:justify-start">
                <button
                  onClick={() => {
                    addToCart({
                      id: 'paperback-edition',
                      title: 'CUT THE CRAP',
                      edition: 'Paperback Edition',
                      price: 24.99,
                      isFoundersEdition: false,
                      isDigital: false,
                    });
                    navigate('/cart');
                  }}
                  className="px-5 py-3 bg-[#F85800] hover:bg-[#E05000] text-[#141414] font-sans font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Buy Paperback ($24.99)</span>
                </button>

                <button
                  onClick={() => {
                    addToCart({
                      id: 'ebook-edition',
                      title: 'CUT THE CRAP',
                      edition: 'Digital PDF & ePub Edition',
                      price: 14.99,
                      isFoundersEdition: false,
                      isDigital: true,
                    });
                    navigate('/cart');
                  }}
                  className="px-5 py-3 bg-white/10 hover:bg-white/15 text-current border border-current/20 font-sans font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5"
                >
                  <Download className="w-4 h-4 text-[#F85800]" />
                  <span>Buy Instant PDF ($14.99)</span>
                </button>

                <button
                  onClick={handleDownloadSample}
                  className="px-5 py-3 bg-transparent hover:bg-current/10 text-current border border-current/30 font-sans font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5"
                >
                  {hasDownloadedSample ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
                      <span>Sample PDF Downloaded</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      <span>Download Sample PDF Free</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
