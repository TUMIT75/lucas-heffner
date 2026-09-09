import React, { useState } from 'react';
import { PageRoute } from '../types';
import { CutTheCrapHorizontalLogo } from './BrandLogos';
import { Shield, ArrowRight, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  navigate: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate }) => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
    }
  };

  return (
    <footer className="w-full bg-[#0D0D0D] text-[#F5F3EF] border-t border-[#222]">
      {/* Global Newsletter Signup Block from Brief Section 2 */}
      <section className="border-b border-[#222] py-16 px-6 sm:px-8 bg-[#141414]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-3">
            <span className="eyebrow-label text-[#F85800]">STAY INFORMED &bull; ZERO SPAM</span>
            <h2 className="text-h2 text-[#F5F3EF]">Keep Cutting the Crap.</h2>
            <p className="text-[#A3A3A3] text-[17px] leading-relaxed max-w-xl">
              Get new articles, resources, book updates, and practical ideas from Lucas. Direct to your inbox. No fluff, no detox sales pitches.
            </p>
          </div>

          <div className="lg:col-span-6">
            {isSubmitted ? (
              <div className="p-6 bg-[#1E1E1E] border border-[#F85800]/50 flex items-center gap-4">
                <CheckCircle2 className="w-8 h-8 text-[#F85800] shrink-0" />
                <div>
                  <h4 className="font-display text-lg text-[#F5F3EF]">YOU'RE ON THE LIST</h4>
                  <p className="text-sm text-[#A3A3A3]">
                    Watch your inbox for real, practical updates from Lucas Heffner and Up Armor Publishing.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <label htmlFor="footer-first-name" className="sr-only">First Name</label>
                  <input
                    id="footer-first-name"
                    type="text"
                    required
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-4 py-3.5 bg-[#1E1E1E] border border-[#333] text-[#F5F3EF] placeholder-[#777] text-[15px] focus:outline-none focus:border-[#F85800]"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="footer-email" className="sr-only">Email Address</label>
                  <input
                    id="footer-email"
                    type="email"
                    required
                    placeholder="Your Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3.5 bg-[#1E1E1E] border border-[#333] text-[#F5F3EF] placeholder-[#777] text-[15px] focus:outline-none focus:border-[#F85800]"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3.5 bg-[#F85800] hover:bg-[#E05000] text-[#141414] font-sans font-bold text-[14px] uppercase tracking-[0.08em] transition-colors whitespace-nowrap"
                >
                  Join the List
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Main Footer Links */}
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand & Up Armor Statement */}
          <div className="lg:col-span-4 space-y-5">
            <CutTheCrapHorizontalLogo size="md" theme="dark" />
            <p className="text-[15px] text-[#A3A3A3] leading-relaxed">
              Lucas Heffner is an author, Certified Nutrition Coach, U.S. Army Engineer veteran, and entrepreneur dedicated to practical human performance and lifelong discipline.
            </p>
            <div className="pt-2 border-t border-[#222]">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#C8B088] uppercase tracking-wider mb-1">
                <Shield className="w-4 h-4 text-[#F85800]" />
                Published by Up Armor Publishing
              </div>
              <p className="text-xs text-[#777] leading-relaxed">
                Up Armor Publishing exists to create practical books that help people cut through noise, understand what actually matters, and put that knowledge to work in their lives.
              </p>
            </div>
          </div>

          {/* Column 1: Books & Works */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[13px] font-sans font-semibold uppercase tracking-[0.14em] text-[#F85800]">
              Books &amp; Works
            </h4>
            <ul className="space-y-2.5 text-[14px] text-[#A3A3A3]">
              <li>
                <button onClick={() => navigate('/cutthecrap')} className="hover:text-[#F85800] transition-colors text-left">
                  Cut the Crap
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/books')} className="hover:text-[#F85800] transition-colors text-left">
                  Books Library
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/books')} className="hover:text-[#F85800] transition-colors text-left flex items-center gap-1.5">
                  <span>Iron &amp; Fuel</span>
                  <span className="text-[10px] uppercase font-bold text-[#8C8C8C]">[PLACEHOLDER]</span>
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/books')} className="hover:text-[#F85800] transition-colors text-left flex items-center gap-1.5">
                  <span>Unbroken Habits</span>
                  <span className="text-[10px] uppercase font-bold text-[#8C8C8C]">[PLACEHOLDER]</span>
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/store')} className="hover:text-[#F85800] transition-colors text-left">
                  Author Store
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Resources & Community */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[13px] font-sans font-semibold uppercase tracking-[0.14em] text-[#F85800]">
              Ecosystem &amp; Community
            </h4>
            <ul className="space-y-2.5 text-[14px] text-[#A3A3A3]">
              <li>
                <button onClick={() => navigate('/toolkit')} className="hover:text-[#F85800] transition-colors text-left">
                  Cut the Crap Toolbox
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/community')} className="hover:text-[#F85800] transition-colors text-left">
                  Cut the Crap Community
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/shareyourclickmoment')} className="hover:text-[#F85800] transition-colors text-left">
                  Share Your Click Moment
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/findyourbattlebuddy')} className="hover:text-[#F85800] transition-colors text-left">
                  Find Your Battle Buddy
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/resources')} className="hover:text-[#F85800] transition-colors text-left">
                  All Resources Hub
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/articles')} className="hover:text-[#F85800] transition-colors text-left">
                  Articles &amp; Field Notes
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Platform & Legal */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[13px] font-sans font-semibold uppercase tracking-[0.14em] text-[#F85800]">
              Account &amp; Governance
            </h4>
            <ul className="space-y-2.5 text-[14px] text-[#A3A3A3]">
              <li>
                <button onClick={() => navigate('/my-account')} className="hover:text-[#F85800] transition-colors text-left">
                  My Customer Account
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/about')} className="hover:text-[#F85800] transition-colors text-left">
                  About Lucas Heffner
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/contact')} className="hover:text-[#F85800] transition-colors text-left">
                  Contact Lucas
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/style-guide')} className="hover:text-[#F85800] transition-colors text-left text-[#C8B088] font-medium">
                  Brand Style Guide &bull; Specs
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/sitemap')} className="hover:text-[#F85800] transition-colors text-left text-[#C8B088] font-medium">
                  Master Sitemap &bull; Click Index
                </button>
              </li>
            </ul>

            {/* Facebook community link */}
            <div className="pt-2">
              <a
                href="https://facebook.com/groups/cutthecrapcommunity"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#F5F3EF] hover:text-[#F85800] transition-colors p-2 bg-[#1E1E1E] border border-[#333]"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
                Join Facebook Community
              </a>
            </div>
          </div>
        </div>

        {/* Legal Policies Strip */}
        <div className="mt-16 pt-8 border-t border-[#1E1E1E] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#777]">
          <div>
            &copy; {new Date().getFullYear()} Lucas Heffner. All Rights Reserved. Published by Up Armor Publishing.
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 items-center">
            <button onClick={() => navigate('/privacy-policy')} className="hover:text-[#F5F3EF] transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => navigate('/terms')} className="hover:text-[#F5F3EF] transition-colors">
              Terms &amp; Conditions
            </button>
            <button onClick={() => navigate('/shipping-returns')} className="hover:text-[#F5F3EF] transition-colors">
              Shipping &amp; Returns
            </button>
            <button onClick={() => navigate('/affiliate-disclosure')} className="hover:text-[#F5F3EF] transition-colors">
              Affiliate Disclosure
            </button>
            <button onClick={() => navigate('/accessibility')} className="hover:text-[#F5F3EF] transition-colors">
              Accessibility
            </button>
            <button onClick={() => navigate('/cookie-policy')} className="hover:text-[#F5F3EF] transition-colors">
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
