import React from 'react';
import { PageRoute } from '../types';
import { Shield, ArrowLeft } from 'lucide-react';

interface LegalPageProps {
  route: PageRoute;
  navigate: (route: PageRoute) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ route, navigate }) => {
  const getLegalContent = () => {
    switch (route) {
      case '/privacy-policy':
        return {
          title: 'Privacy Policy',
          updated: 'September 2026',
          content: [
            {
              heading: '1. Information We Collect',
              text: 'LucasHeffner.com and Up Armor Publishing collect information directly provided by users when ordering books, joining the newsletter, submitting Click Moments, or using the Toolbox. This includes your name, email address, shipping address, and order transaction details.',
            },
            {
              heading: '2. How We Use Your Data',
              text: 'Your personal information is used exclusively to fulfill book orders, deliver digital editions, manage newsletter updates, and maintain reader accounts. We never sell, rent, or trade your personal data to third-party marketing companies.',
            },
            {
              heading: '3. Data Security',
              text: 'All transactions are transmitted using industry-standard 256-bit SSL encryption. Payment card details are tokenized by PCI-compliant payment gateways and are never stored on our application servers.',
            },
            {
              heading: '4. Your Rights',
              text: 'You may request an export or deletion of your personal data at any time by contacting support@uparmorpublishing.com or through your My Account portal.',
            },
          ],
        };
      case '/terms':
        return {
          title: 'Terms & Conditions',
          updated: 'September 2026',
          content: [
            {
              heading: '1. Intellectual Property',
              text: 'All book texts, diagrams, logos, insignia, trademarks, and articles published on LucasHeffner.com are the exclusive intellectual property of Lucas Heffner and Up Armor Publishing. Unauthorized redistribution, piracy, or resale is strictly prohibited.',
            },
            {
              heading: '2. Health & Nutrition Disclaimer',
              text: "The contents of Cut the Crap, articles, and the Toolbox are for educational and informational purposes only. Lucas Heffner is a Certified Nutrition Coach (NASM-CNC), not a licensed medical physician or registered dietitian. Consult your healthcare provider prior to starting any aggressive weight loss or exercise regimen.",
            },
            {
              heading: '3. Preorder Fulfillment Terms',
              text: "Preorders for Cut the Crap (including Founder's Edition hardcovers and paperbacks) represent commitments to deliver once printing and binding runs conclude. Estimated dispatch dates will be communicated via email.",
            },
          ],
        };
      case '/shipping-returns':
        return {
          title: 'Shipping & Returns Policy',
          updated: 'September 2026',
          content: [
            {
              heading: '1. Domestic & International Shipping',
              text: 'Physical book orders are fulfilled from our primary domestic fulfillment facilities via tracked carriers (USPS / UPS / FedEx). Standard shipping typically requires 3-5 business days from shipment notification.',
            },
            {
              heading: '2. Preorder Schedules',
              text: "Founder's Edition hardcover books undergo specialized binding, foil stamping, and individual hand-signing by Lucas. Preorders will dispatch according to the production schedule published on the Cut the Crap landing page.",
            },
            {
              heading: '3. Return & Replacement Guarantee',
              text: 'If your book arrives damaged or misprinted, Up Armor Publishing will dispatch a replacement copy at zero additional cost upon receipt of photographic verification within 30 days of delivery.',
            },
            {
              heading: '4. Digital Deliverables',
              text: 'Digital products (eBooks, PDF worksheets, downloadable companion tools) are delivered immediately and are non-refundable once downloaded.',
            },
          ],
        };
      case '/affiliate-disclosure':
        return {
          title: 'Affiliate Disclosure',
          updated: 'September 2026',
          content: [
            {
              heading: '1. Up Armor Transparency Standard',
              text: 'Some links in the Cut the Crap Toolbox and articles are affiliate links. If you purchase through these links, Up Armor Publishing may earn a small referral commission at zero additional cost to you.',
            },
            {
              heading: '2. Zero Pay-for-Play Rule',
              text: 'Lucas Heffner does not accept sponsored placement fees to feature products. Every scale, tracker, kitchen device, and training tool listed in the Toolbox is something Lucas has personally used in his own 140+ pound transformation or vetted rigorously for client adherence.',
            },
            {
              heading: '3. Reader First Priority',
              text: 'If a recommended tool declines in quality or becomes predatory in pricing, it is immediately removed from the Toolbox regardless of affiliate relationships.',
            },
          ],
        };
      case '/accessibility':
        return {
          title: 'Accessibility Statement',
          updated: 'September 2026',
          content: [
            {
              heading: '1. WCAG 2.1 AA Conformance',
              text: 'LucasHeffner.com is engineered to adhere strictly to Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. This includes high-contrast typography, keyboard navigability, screen reader semantics, and clear focus rings.',
            },
            {
              heading: '2. Ongoing Enhancements',
              text: 'We continually audit our digital platform to ensure that all readers, regardless of physical or cognitive ability, can access book chapters, the Toolbox, and account portals effortlessly.',
            },
          ],
        };
      case '/cookie-policy':
      default:
        return {
          title: 'Cookie Policy',
          updated: 'September 2026',
          content: [
            {
              heading: '1. Necessary Cookies',
              text: 'We use strictly necessary session cookies to maintain your shopping cart state, process secure checkouts, and authenticate your customer portal session.',
            },
            {
              heading: '2. Analytics & Preferences',
              text: 'We do not employ intrusive surveillance trackers or third-party ad retargeting pixels. Minimal aggregated analytics may be utilized to monitor server performance and reader engagement.',
            },
          ],
        };
    }
  };

  const legal = getLegalContent();

  return (
    <div className="w-full bg-[#141414] text-[#F5F3EF]">
      {/* Header */}
      <section className="py-20 lg:py-24 px-6 sm:px-8 border-b border-[#222]">
        <div className="max-w-[800px] mx-auto space-y-4">
          <button
            onClick={() => navigate('/')}
            className="text-xs uppercase tracking-wider font-sans font-bold text-[#8C8C8C] hover:text-[#F85800] flex items-center gap-1.5 mb-2"
          >
            <ArrowLeft className="w-4 h-4" /> Return to Home
          </button>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#C8B088] uppercase tracking-wider">
            <Shield className="w-4 h-4 text-[#F85800]" />
            Up Armor Publishing Governance &bull; Last Revised {legal.updated}
          </div>
          <h1 className="text-h1 text-[#F5F3EF]">
            {legal.title}
          </h1>
        </div>
      </section>

      {/* Main Legal Content */}
      <section className="py-16 sm:py-24 px-6 sm:px-8">
        <div className="max-w-[800px] mx-auto space-y-12 text-[#D1CFC7] font-sans leading-relaxed">
          {legal.content.map((sec, idx) => (
            <div key={idx} className="space-y-3">
              <h2 className="font-display text-xl sm:text-2xl text-[#F5F3EF]">
                {sec.heading}
              </h2>
              <p className="text-[17px] leading-[1.7] text-[#A3A3A3]">
                {sec.text}
              </p>
            </div>
          ))}

          <div className="pt-8 border-t border-[#2A2A2A] text-xs text-[#777]">
            <p>
              Questions regarding Up Armor Publishing policies? Reach our governance office via{' '}
              <button
                onClick={() => navigate('/contact')}
                className="text-[#F85800] underline hover:text-[#E05000]"
              >
                our official contact portal
              </button>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
