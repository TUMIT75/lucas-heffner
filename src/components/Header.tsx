import React, { useState, useEffect, useRef } from 'react';
import { PageRoute } from '../types';
import { CutTheCrapHorizontalLogo } from './BrandLogos';
import {
  ShoppingBag,
  Menu,
  X,
  BookOpen,
  ChevronDown,
  Users,
  Sparkles,
  Shield,
  Wrench,
  FileText,
  HelpCircle,
  ArrowRight,
} from 'lucide-react';

interface HeaderProps {
  currentRoute: PageRoute;
  navigate: (route: PageRoute) => void;
  cartCount: number;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, navigate, cartCount }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const moreDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (moreDropdownRef.current && !moreDropdownRef.current.contains(event.target as Node)) {
        setIsMoreOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard accessibility: Escape closes mobile nav & dropdown
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setIsMoreOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen, isMoreOpen]);

  const handleNav = (route: PageRoute) => {
    navigate(route);
    setIsMobileMenuOpen(false);
    setIsMoreOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Primary streamlined menu items
  const primaryNavItems: { label: string; route: PageRoute; badge?: string; icon?: React.ReactNode }[] = [
    { label: 'The Book', route: '/cutthecrap', badge: 'Flagship' },
    { label: 'Sample', route: '/read-book', icon: <BookOpen className="w-3.5 h-3.5 text-[#F85800]" /> },
    { label: 'Toolbox', route: '/toolkit' },
    { label: 'Articles', route: '/articles' },
    { label: 'Store', route: '/store' },
    { label: 'About', route: '/about' },
  ];

  // Secondary grouped items in the "Community & More" dropdown
  const secondaryNavItems: { label: string; desc: string; route: PageRoute; icon: React.ReactNode }[] = [
    {
      label: 'Community Hub',
      desc: 'Peer accountability & reader network',
      route: '/community',
      icon: <Users className="w-4 h-4 text-[#F85800]" />,
    },
    {
      label: 'Find Battle Buddy',
      desc: 'Pair up with a disciplined reader',
      route: '/findyourbattlebuddy',
      icon: <Shield className="w-4 h-4 text-[#C8B088]" />,
    },
    {
      label: 'Share Click Moment',
      desc: 'Submit your personal turning point',
      route: '/shareyourclickmoment',
      icon: <Sparkles className="w-4 h-4 text-[#F85800]" />,
    },
    {
      label: 'Worksheets & Tools',
      desc: 'Printable matrices & calculators',
      route: '/resources',
      icon: <FileText className="w-4 h-4 text-[#5E7488]" />,
    },
    {
      label: 'Publishing Library',
      desc: 'All current & upcoming books',
      route: '/books',
      icon: <BookOpen className="w-4 h-4 text-[#8C8C8C]" />,
    },
    {
      label: 'Contact Lucas',
      desc: 'Speaking, press & bulk inquiries',
      route: '/contact',
      icon: <HelpCircle className="w-4 h-4 text-[#A3A3A3]" />,
    },
  ];

  const isSecondaryActive = secondaryNavItems.some((item) => item.route === currentRoute);

  return (
    <>
      {/* Top Announcement Bar */}
      <aside aria-label="Official book release notice" className="w-full bg-[#181818] text-[#F5F3EF] border-b border-[#2A2A2A] py-2 px-4 text-center z-50 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] sm:text-[12px] font-sans">
          <div className="flex items-center gap-2 mx-auto">
            <span className="inline-block w-2 h-2 rounded-full bg-[#F85800]" />
            <span className="font-semibold uppercase tracking-[0.12em]">
              CUT THE CRAP: LIMITED FIRST PRINTING
            </span>
            <span className="hidden md:inline text-[#A3A3A3] border-l border-[#333] pl-2 font-normal">
              Signed &amp; Numbered Founder&apos;s Hardcover strictly limited to first run.
            </span>
          </div>
          <button
            onClick={() => handleNav('/cutthecrap')}
            className="hidden sm:flex items-center gap-1 text-[#C8B088] hover:text-[#F85800] transition-colors font-bold tracking-wider uppercase text-[11px]"
          >
            <span>Preorder</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </aside>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled || currentRoute !== '/'
            ? 'bg-[#141414]/95 backdrop-blur-md border-b border-[#262626] shadow-xl'
            : 'bg-[#141414] border-b border-[#222]'
        }`}
      >
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Brand Wordmark */}
          <button
            onClick={() => handleNav('/')}
            className="flex items-center gap-2 text-left focus:outline-none shrink-0"
            aria-label="Lucas Heffner Home"
          >
            <CutTheCrapHorizontalLogo size="sm" theme="dark" />
          </button>

          {/* Streamlined Desktop Navigation Links (Visible on lg and up) */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-[13px] xl:text-[14px] font-sans font-medium uppercase tracking-[0.06em]">
            {primaryNavItems.map((item) => {
              const isActive = currentRoute === item.route;
              return (
                <button
                  key={item.route}
                  onClick={() => handleNav(item.route)}
                  className={`transition-colors py-1.5 px-1 relative flex items-center gap-1.5 whitespace-nowrap ${
                    isActive
                      ? 'text-[#F85800] font-bold'
                      : 'text-[#F5F3EF]/85 hover:text-[#F85800]'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="hidden xl:inline text-[9px] font-mono px-1.5 py-0.2 bg-[#F85800]/20 border border-[#F85800]/40 text-[#F85800] font-bold tracking-wider">
                      {item.badge}
                    </span>
                  )}
                  {isActive && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#F85800]" />}
                </button>
              );
            })}

            {/* "More" Dropdown Menu */}
            <div className="relative" ref={moreDropdownRef}>
              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className={`py-1.5 px-2 flex items-center gap-1 transition-colors uppercase tracking-[0.06em] ${
                  isSecondaryActive || isMoreOpen
                    ? 'text-[#F85800] font-bold'
                    : 'text-[#F5F3EF]/85 hover:text-[#F85800]'
                }`}
                aria-expanded={isMoreOpen}
              >
                <span>Community</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isMoreOpen ? 'rotate-180 text-[#F85800]' : ''}`} />
                {isSecondaryActive && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#F85800]" />}
              </button>

              {/* Dropdown Panel */}
              {isMoreOpen && (
                <div className="absolute top-full right-0 mt-3 w-80 bg-[#1A1A1A] border-2 border-[#2F2F2F] shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-3 py-1.5 text-[10px] uppercase font-mono font-bold tracking-widest text-[#777] border-b border-[#2A2A2A] mb-1">
                    Community &amp; Resources
                  </div>
                  {secondaryNavItems.map((sec) => {
                    const isSecActive = currentRoute === sec.route;
                    return (
                      <button
                        key={sec.route}
                        onClick={() => handleNav(sec.route)}
                        className={`w-full text-left p-2.5 flex items-start gap-3 transition-colors ${
                          isSecActive
                            ? 'bg-[#252525] text-[#F85800]'
                            : 'hover:bg-[#252525] text-[#F5F3EF]'
                        }`}
                      >
                        <div className="mt-0.5 shrink-0 p-1.5 bg-[#141414] border border-[#333]">
                          {sec.icon}
                        </div>
                        <div>
                          <div className="text-xs font-bold font-sans uppercase tracking-wider">
                            {sec.label}
                          </div>
                          <div className="text-[11px] text-[#8C8C8C] normal-case tracking-normal">
                            {sec.desc}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                  <div className="pt-2 mt-1 border-t border-[#2A2A2A] px-2 flex justify-between text-[11px] text-[#A3A3A3]">
                    <button
                      onClick={() => handleNav('/my-account')}
                      className="hover:text-[#F85800] transition-colors"
                    >
                      Customer Account &rarr;
                    </button>
                    <button
                      onClick={() => handleNav('/sitemap')}
                      className="hover:text-[#F85800] transition-colors"
                    >
                      Sitemap &rarr;
                    </button>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Action Buttons: Cart & Order CTA */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* Cart Button */}
            <button
              onClick={() => handleNav('/cart')}
              className="relative p-2.5 rounded text-[#F5F3EF] hover:text-[#F85800] hover:bg-[#1E1E1E] transition-colors"
              aria-label={`View Cart (${cartCount} items)`}
            >
              <ShoppingBag className="w-5 h-5" strokeWidth={1.75} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#F85800] text-[#141414] rounded-full text-[11px] font-display font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Quick Order CTA */}
            <button
              onClick={() => handleNav('/cutthecrap')}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 bg-[#F85800] hover:bg-[#E05000] text-[#141414] font-sans font-bold text-xs uppercase tracking-[0.08em] transition-colors shadow"
            >
              Order Book
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#F5F3EF] hover:text-[#F85800] focus:outline-none"
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer - Categorized and Uncluttered */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[110px] bottom-0 bg-[#141414]/98 backdrop-blur-xl border-b border-[#2A2A2A] shadow-2xl px-6 py-6 flex flex-col justify-between overflow-y-auto z-50">
            <div className="space-y-6">
              {/* Category 1: The Books */}
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#F85800] block mb-2">
                  The Books
                </span>
                <div className="space-y-1">
                  <button
                    onClick={() => handleNav('/cutthecrap')}
                    className="w-full text-left py-2 px-3 text-[15px] font-sans font-bold flex items-center justify-between text-[#F5F3EF] hover:bg-[#1E1E1E]"
                  >
                    <span>Cut the Crap (Flagship)</span>
                    <span className="text-[10px] bg-[#F85800] text-[#141414] px-1.5 py-0.5 font-mono">NEW</span>
                  </button>
                  <button
                    onClick={() => handleNav('/read-book')}
                    className="w-full text-left py-2 px-3 text-[15px] font-sans font-bold flex items-center justify-between text-[#F85800] hover:bg-[#1E1E1E]"
                  >
                    <span className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4" /> Read Free Chapters
                    </span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleNav('/books')}
                    className="w-full text-left py-2 px-3 text-[15px] font-sans text-[#DDD] hover:bg-[#1E1E1E]"
                  >
                    Publishing Library (All Books)
                  </button>
                </div>
              </div>

              {/* Category 2: Tools & Community */}
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#C8B088] block mb-2">
                  Field Tools &amp; Community
                </span>
                <div className="space-y-1">
                  <button
                    onClick={() => handleNav('/toolkit')}
                    className="w-full text-left py-2 px-3 text-[15px] font-sans text-[#DDD] hover:bg-[#1E1E1E] flex items-center justify-between"
                  >
                    <span>Companion Toolbox</span>
                    <Wrench className="w-3.5 h-3.5 text-[#888]" />
                  </button>
                  <button
                    onClick={() => handleNav('/community')}
                    className="w-full text-left py-2 px-3 text-[15px] font-sans text-[#DDD] hover:bg-[#1E1E1E] flex items-center justify-between"
                  >
                    <span>Community Hub</span>
                    <Users className="w-3.5 h-3.5 text-[#888]" />
                  </button>
                  <button
                    onClick={() => handleNav('/findyourbattlebuddy')}
                    className="w-full text-left py-2 px-3 text-[15px] font-sans text-[#DDD] hover:bg-[#1E1E1E]"
                  >
                    Find Your Battle Buddy
                  </button>
                  <button
                    onClick={() => handleNav('/shareyourclickmoment')}
                    className="w-full text-left py-2 px-3 text-[15px] font-sans text-[#DDD] hover:bg-[#1E1E1E]"
                  >
                    Share Your Click Moment
                  </button>
                  <button
                    onClick={() => handleNav('/resources')}
                    className="w-full text-left py-2 px-3 text-[15px] font-sans text-[#DDD] hover:bg-[#1E1E1E]"
                  >
                    Calculators &amp; Worksheets
                  </button>
                </div>
              </div>

              {/* Category 3: Author & Store */}
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#8EA3B8] block mb-2">
                  Editorial &amp; Author
                </span>
                <div className="space-y-1">
                  <button
                    onClick={() => handleNav('/articles')}
                    className="w-full text-left py-2 px-3 text-[15px] font-sans text-[#DDD] hover:bg-[#1E1E1E]"
                  >
                    Articles &amp; Field Notes
                  </button>
                  <button
                    onClick={() => handleNav('/about')}
                    className="w-full text-left py-2 px-3 text-[15px] font-sans text-[#DDD] hover:bg-[#1E1E1E]"
                  >
                    About Lucas Heffner
                  </button>
                  <button
                    onClick={() => handleNav('/store')}
                    className="w-full text-left py-2 px-3 text-[15px] font-sans text-[#DDD] hover:bg-[#1E1E1E]"
                  >
                    Official Store &amp; Gear
                  </button>
                  <button
                    onClick={() => handleNav('/contact')}
                    className="w-full text-left py-2 px-3 text-[15px] font-sans text-[#DDD] hover:bg-[#1E1E1E]"
                  >
                    Contact &amp; Media Inquiries
                  </button>
                  <button
                    onClick={() => handleNav('/my-account')}
                    className="w-full text-left py-2 px-3 text-[15px] font-sans text-[#DDD] hover:bg-[#1E1E1E]"
                  >
                    My Account / Digital Library
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Footer CTAs */}
            <div className="pt-6 border-t border-[#2A2A2A] space-y-2">
              <button
                onClick={() => handleNav('/cutthecrap')}
                className="w-full py-3.5 bg-[#F85800] text-[#141414] font-bold text-center uppercase tracking-wider text-xs shadow-lg"
              >
                Preorder Cut the Crap &rarr;
              </button>
              <button
                onClick={() => handleNav('/sitemap')}
                className="w-full py-2 text-center text-xs text-[#8C8C8C] hover:text-[#FFF] uppercase tracking-wider"
              >
                View Master Site Index
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
