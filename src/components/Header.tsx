import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types';
import { CutTheCrapHorizontalLogo } from './BrandLogos';
import { ShoppingBag, Menu, X, ShieldAlert, ArrowRight } from 'lucide-react';

interface HeaderProps {
  currentRoute: PageRoute;
  navigate: (route: PageRoute) => void;
  cartCount: number;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, navigate, cartCount }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard accessibility: Escape closes mobile nav
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const navItems: { label: string; route: PageRoute }[] = [
    { label: 'Books', route: '/books' },
    { label: 'Cut the Crap', route: '/cutthecrap' },
    { label: 'Toolbox', route: '/toolkit' },
    { label: 'Community', route: '/community' },
    { label: 'Resources', route: '/resources' },
    { label: 'Articles', route: '/articles' },
    { label: 'Store', route: '/store' },
    { label: 'About', route: '/about' },
    { label: 'Contact', route: '/contact' },
    { label: 'Style Guide', route: '/style-guide' },
  ];

  return (
    <>
      {/* Top Staging / Internal Development Banner */}
      <aside aria-label="Development environment notice" className="w-full bg-[#1E1E1E] text-[#F5F3EF] border-b border-[#2A2A2A] py-1.5 px-4 text-center z-50 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] sm:text-[12px] font-sans uppercase tracking-[0.14em]">
          <div className="flex items-center gap-2 mx-auto">
            <span className="inline-block w-2 h-2 rounded-full bg-[#F85800] animate-pulse" />
            <span className="font-semibold">PRIVATE DEVELOPMENT SITE — NOT YET PUBLIC</span>
            <span className="hidden md:inline text-[#8C8C8C] border-l border-[#333] pl-2 font-normal">
              Internal Staging Preview &bull; Up Armor Publishing &bull; Confidential
            </span>
          </div>
          <button
            onClick={() => navigate('/sitemap')}
            className="hidden sm:flex items-center gap-1 text-[#C8B088] hover:text-[#F85800] transition-colors lowercase tracking-normal text-xs"
            title="View full site route matrix"
          >
            sitemap <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </aside>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-colors duration-150 ${
          isScrolled || currentRoute !== '/'
            ? 'bg-[#141414]/95 backdrop-blur-md border-b border-[#262626] shadow-md'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
          {/* Brand Wordmark */}
          <button
            onClick={() => {
              navigate('/');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F85800]"
            aria-label="Lucas Heffner Home"
          >
            <CutTheCrapHorizontalLogo size="sm" theme="dark" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 text-[14px] font-sans font-medium uppercase tracking-[0.06em]">
            {navItems.map((item) => {
              const isActive = currentRoute === item.route;
              return (
                <button
                  key={item.route}
                  onClick={() => {
                    navigate(item.route);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`transition-colors py-1 relative ${
                    isActive ? 'text-[#F85800] font-semibold' : 'text-[#F5F3EF]/80 hover:text-[#F5F3EF]'
                  }`}
                >
                  {item.label}
                  {isActive && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#F85800]" />}
                </button>
              );
            })}
          </nav>

          {/* Action Buttons: Cart & Preorder CTA */}
          <div className="flex items-center gap-4">
            {/* Cart Icon */}
            <button
              onClick={() => {
                navigate('/cart');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
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

            {/* Preorder Primary CTA */}
            <button
              onClick={() => {
                navigate('/cutthecrap');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 bg-[#F85800] hover:bg-[#E05000] text-[#141414] font-sans font-bold text-[14px] uppercase tracking-[0.08em] transition-colors rounded-none"
            >
              Preorder
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 text-[#F5F3EF] hover:text-[#F85800] focus:outline-none"
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="xl:hidden fixed inset-x-0 top-[110px] bg-[#141414] border-b border-[#2A2A2A] shadow-2xl px-6 py-8 flex flex-col gap-4 max-h-[85vh] overflow-y-auto">
            <div className="text-[12px] font-sans font-semibold uppercase tracking-[0.14em] text-[#8C8C8C] mb-1">
              Platform Navigation
            </div>
            {navItems.map((item) => {
              const isActive = currentRoute === item.route;
              return (
                <button
                  key={item.route}
                  onClick={() => {
                    navigate(item.route);
                    setIsMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`text-left py-2 text-[17px] font-sans font-semibold transition-colors flex items-center justify-between border-b border-[#1E1E1E] ${
                    isActive ? 'text-[#F85800]' : 'text-[#F5F3EF] hover:text-[#F85800]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#F85800]" />}
                </button>
              );
            })}

            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  navigate('/sitemap');
                  setIsMobileMenuOpen(false);
                }}
                className="text-left text-sm text-[#C8B088] py-1 uppercase tracking-wider font-semibold"
              >
                &rarr; View Master Coded Sitemap
              </button>
              <button
                onClick={() => {
                  navigate('/cutthecrap');
                  setIsMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full py-3.5 bg-[#F85800] text-[#141414] font-bold text-center uppercase tracking-wider text-sm"
              >
                Preorder Cut the Crap
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
