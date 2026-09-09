import React from 'react';
import { PageRoute } from '../types';
import { ArrowRight, CheckCircle2, Globe } from 'lucide-react';

interface SitemapPageProps {
  navigate: (route: PageRoute) => void;
}

export const SitemapPage: React.FC<SitemapPageProps> = ({ navigate }) => {
  const routeGroups: {
    category: string;
    routes: { route: PageRoute; name: string; desc: string; status: string }[];
  }[] = [
    {
      category: 'Primary Brand & Narrative Routes',
      routes: [
        {
          route: '/',
          name: 'Home Page',
          desc: "Full-bleed hero, 4 Pillars strip, Lucas's 140-lb transformation story, Cut the Crap debut spotlight, Toolbox teaser, Community, and Latest Articles.",
          status: 'Complete & Interactive',
        },
        {
          route: '/about',
          name: 'About Lucas Heffner',
          desc: "Lucas's background, horizontal credibility strip (Veteran, Entrepreneur, Roofing Owner, Publishing Founder, CNC, Author), and Up Armor Publishing manifesto.",
          status: 'Complete & Interactive',
        },
        {
          route: '/contact',
          name: 'Contact Lucas',
          desc: 'Media / Speaking / Podcast inquiries, bulk book orders (military/gyms), publishing rights, and reader feedback.',
          status: 'Complete & Interactive',
        },
      ],
    },
    {
      category: 'Publishing & Book Work Routes',
      routes: [
        {
          route: '/books',
          name: 'Books Library',
          desc: 'Permanent multi-title catalog organized by 4 publishing lifecycle states (Available, Preorder, Coming Soon, In Development) with interactive status switcher.',
          status: 'Complete & Interactive',
        },
        {
          route: '/cutthecrap',
          name: 'Cut the Crap Flagship Page',
          desc: "Primary book landing page with What This Book Is About vs NOT (opposing columns), Who It's For, Choose Your Edition (Founder's, Paperback, eBook, disabled Audiobook), and FAQ accordion.",
          status: 'Complete & Interactive',
        },
        {
          route: '/toolkit',
          name: 'Cut the Crap Toolbox',
          desc: 'Companion resource directory with categories, "Why Lucas Recommends It" quotes, vetted partner badges, and transparent affiliate disclosure.',
          status: 'Complete & Interactive',
        },
      ],
    },
    {
      category: 'Community & Engagement Routes',
      routes: [
        {
          route: '/community',
          name: 'Community Hub',
          desc: 'Find Your Battle Buddy, Share Your Click Moment, official Facebook discussion squad link, and zero-bullshit ground rules.',
          status: 'Complete & Interactive',
        },
        {
          route: '/shareyourclickmoment',
          name: 'Share Your Click Moment',
          desc: 'Flagship reader submission form: "Where were you when it clicked?", photo attachment simulator, publishing consent, and submission confirmation.',
          status: 'Complete & Interactive',
        },
        {
          route: '/findyourbattlebuddy',
          name: 'Find Your Battle Buddy',
          desc: 'Military-inspired reader accountability directory: goal filtering, partner bio cards, and interactive "Request Match" simulation.',
          status: 'Complete & Interactive',
        },
      ],
    },
    {
      category: 'Content, Tools & Education',
      routes: [
        {
          route: '/resources',
          name: 'Resources Hub',
          desc: 'Toolbox link, printable PDF habit matrices, study group syllabus, and interactive Chapter 2 Energy Balance & Protein Estimator tool.',
          status: 'Complete & Interactive',
        },
        {
          route: '/articles',
          name: 'Articles & Essays',
          desc: 'Filterable archive of essays on energy balance, motivation neurochemistry, protein leverage, and military habit engineering.',
          status: 'Complete & Interactive',
        },
        {
          route: '/article-detail',
          name: 'Article Detail Layout',
          desc: 'Crafted editorial typography, asymmetric pullquotes, author credentials, and related reading suggestions.',
          status: 'Complete & Interactive',
        },
      ],
    },
    {
      category: 'Commerce & Customer Account',
      routes: [
        {
          route: '/store',
          name: 'Official Store',
          desc: "Catalog featuring Cut the Crap Founder's Edition, Paperback, eBook, 180-Day Habit Field Journal, and Up Armor apparel.",
          status: 'Complete & Interactive',
        },
        {
          route: '/cart',
          name: 'Shopping Cart',
          desc: 'Live item count, edition tags, +/- quantity adjustments, shipping calculation, and empty cart state.',
          status: 'Complete & Interactive',
        },
        {
          route: '/checkout',
          name: 'Checkout & Fulfillment',
          desc: 'Address fields, simulated PCI payment, order confirmation receipt, and instant digital eBook/PDF download deliverables.',
          status: 'Complete & Interactive',
        },
        {
          route: '/my-account',
          name: 'Customer Portal',
          desc: 'Orders & preorders tracking, digital download library (EPUB, PDF), and shipping address management.',
          status: 'Complete & Interactive',
        },
      ],
    },
    {
      category: 'System, Specs & Governance',
      routes: [
        {
          route: '/style-guide',
          name: 'Brand Style Guide',
          desc: "Master design system specs: exact hex tokens, full 8px typography scale, button states, badges, 4 Pillar vector icons, and Founder's Edition card.",
          status: 'Complete & Interactive',
        },
        {
          route: '/privacy-policy',
          name: 'Privacy Policy',
          desc: 'Up Armor Publishing data protection and zero-sale privacy policy.',
          status: 'Complete',
        },
        {
          route: '/terms',
          name: 'Terms & Conditions',
          desc: 'Author intellectual property, preorder delivery terms, and health disclaimer.',
          status: 'Complete',
        },
        {
          route: '/shipping-returns',
          name: 'Shipping & Returns',
          desc: 'Domestic carrier logistics, printing schedules, and 30-day replacement guarantee.',
          status: 'Complete',
        },
        {
          route: '/affiliate-disclosure',
          name: 'Affiliate Disclosure',
          desc: 'Transparent disclosure policy and zero pay-for-play guarantee.',
          status: 'Complete',
        },
        {
          route: '/accessibility',
          name: 'Accessibility Statement',
          desc: 'WCAG 2.1 AA conformance declaration and keyboard navigability standards.',
          status: 'Complete',
        },
        {
          route: '/cookie-policy',
          name: 'Cookie Policy',
          desc: 'Functional session cookie explanation without tracking pixels.',
          status: 'Complete',
        },
      ],
    },
  ];

  const totalRoutes = routeGroups.reduce((sum, g) => sum + g.routes.length, 0);

  return (
    <div className="w-full bg-[#141414] text-[#F5F3EF]">
      {/* Header */}
      <section className="py-20 lg:py-24 px-6 sm:px-8 border-b border-[#222]">
        <div className="max-w-[1280px] mx-auto space-y-4">
          <span className="eyebrow-label text-[#F85800]">INTERNAL ROUTE MATRIX</span>
          <h1 className="text-h1 text-[#F5F3EF]">
            Master Site Index &amp; Coded Sitemap
          </h1>
          <p className="text-[18px] sm:text-[20px] text-[#D1CFC7] max-w-3xl leading-relaxed">
            All {totalRoutes} routes hand-coded in this build. Click any route below to immediately navigate, inspect layout fidelity, test interactive states, or verify brief requirements.
          </p>
        </div>
      </section>

      {/* Grouped Routes */}
      <section className="py-16 sm:py-24 px-6 sm:px-8">
        <div className="max-w-[1280px] mx-auto space-y-16">
          {routeGroups.map((group, idx) => (
            <div key={idx} className="space-y-6">
              <div className="border-b border-[#2A2A2A] pb-3 flex items-center justify-between">
                <h2 className="font-display text-xl sm:text-2xl text-[#F5F3EF]">
                  {group.category}
                </h2>
                <span className="text-xs font-mono text-[#C8B088]">
                  {group.routes.length} Routes
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.routes.map((r) => (
                  <div
                    key={r.route}
                    onClick={() => {
                      navigate(r.route);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="p-6 bg-[#1A1A1A] border border-[#2B2B2B] card-hover flex flex-col justify-between cursor-pointer group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="font-mono text-xs text-[#F85800] group-hover:underline">
                          {r.route}
                        </span>
                        <span className="text-[10px] uppercase font-bold text-[#2E7D32] bg-[#2E7D32]/10 border border-[#2E7D32]/30 px-2 py-0.5">
                          {r.status}
                        </span>
                      </div>
                      <h3 className="font-display text-lg text-[#F5F3EF] group-hover:text-[#F85800] transition-colors mb-2">
                        {r.name}
                      </h3>
                      <p className="text-xs text-[#A3A3A3] leading-relaxed">
                        {r.desc}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-[#252525] flex items-center justify-between text-xs text-[#8C8C8C]">
                      <span>Click to visit route</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#F85800] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
