import React, { useState } from 'react';
import { PageRoute } from '../types';
import { User, Package, Download, MapPin, Shield, ArrowRight, ExternalLink } from 'lucide-react';

interface MyAccountPageProps {
  navigate: (route: PageRoute) => void;
}

export const MyAccountPage: React.FC<MyAccountPageProps> = ({ navigate }) => {
  const [activeTab, setActiveTab] = useState<'orders' | 'digital' | 'addresses'>('orders');

  return (
    <div className="w-full bg-[#141414] text-[#F5F3EF]">
      {/* Header */}
      <section className="py-20 lg:py-24 px-6 sm:px-8 border-b border-[#222]">
        <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="eyebrow-label text-[#F85800]">CUSTOMER PORTAL</span>
            <h1 className="text-h1 text-[#F5F3EF]">
              My Account
            </h1>
            <p className="text-sm text-[#A3A3A3]">
              Welcome back, Marcus Vance &bull; marcus.vance@example.com
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs uppercase font-sans font-bold text-[#C8B088] bg-[#1E1E1E] border border-[#333] px-3 py-1.5">
              Founding Reader Member
            </span>
          </div>
        </div>
      </section>

      {/* Tabs & Content */}
      <section className="py-12 px-6 sm:px-8">
        <div className="max-w-[1280px] mx-auto space-y-8">
          {/* Navigation Tabs */}
          <div className="flex border-b border-[#2B2B2B] gap-2 overflow-x-auto">
            <button
              onClick={() => setActiveTab('orders')}
              className={`pb-3 px-4 text-xs font-sans font-bold uppercase tracking-wider transition-colors flex items-center gap-2 border-b-2 whitespace-nowrap ${
                activeTab === 'orders'
                  ? 'border-[#F85800] text-[#F85800]'
                  : 'border-transparent text-[#888] hover:text-[#CCC]'
              }`}
            >
              <Package className="w-4 h-4" />
              <span>Orders &amp; Preorders (1)</span>
            </button>

            <button
              onClick={() => setActiveTab('digital')}
              className={`pb-3 px-4 text-xs font-sans font-bold uppercase tracking-wider transition-colors flex items-center gap-2 border-b-2 whitespace-nowrap ${
                activeTab === 'digital'
                  ? 'border-[#F85800] text-[#F85800]'
                  : 'border-transparent text-[#888] hover:text-[#CCC]'
              }`}
            >
              <Download className="w-4 h-4" />
              <span>Digital Library (2)</span>
            </button>

            <button
              onClick={() => setActiveTab('addresses')}
              className={`pb-3 px-4 text-xs font-sans font-bold uppercase tracking-wider transition-colors flex items-center gap-2 border-b-2 whitespace-nowrap ${
                activeTab === 'addresses'
                  ? 'border-[#F85800] text-[#F85800]'
                  : 'border-transparent text-[#888] hover:text-[#CCC]'
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span>Shipping &amp; Addresses</span>
            </button>
          </div>

          {/* Tab 1: Orders */}
          {activeTab === 'orders' && (
            <div className="space-y-6">
              <div className="bg-[#1C1C1C] border border-[#2B2B2B] p-6 sm:p-8 space-y-6">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 pb-4 border-b border-[#282828] text-xs">
                  <div>
                    <span className="text-[#888] uppercase block">Order Placed</span>
                    <span className="font-bold text-[#F5F3EF]">September 6, 2026</span>
                  </div>
                  <div>
                    <span className="text-[#888] uppercase block">Order Total</span>
                    <span className="font-bold text-[#F5F3EF]">$49.00</span>
                  </div>
                  <div>
                    <span className="text-[#888] uppercase block">Order #</span>
                    <span className="font-mono text-[#C8B088]">UA-2026-9182</span>
                  </div>
                  <div>
                    <span className="inline-block px-2.5 py-1 bg-[#2A1D0B] border border-[#C8B088] text-[#C8B088] font-bold uppercase tracking-wider text-[10px]">
                      Preorder Confirmed &bull; Queue #142
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div className="space-y-1">
                    <h3 className="font-display text-xl text-[#F5F3EF]">
                      CUT THE CRAP &mdash; Founder's Edition Hardcover
                    </h3>
                    <p className="text-xs text-[#8C8C8C]">
                      Signed &amp; Individually Numbered First Edition &bull; Qty: 1
                    </p>
                    <p className="text-xs text-[#C8B088] pt-1">
                      Fulfillment Status: Printing Proof Approved &bull; Scheduled Fall Dispatch
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => navigate('/cutthecrap')}
                      className="px-4 py-2 bg-[#252525] hover:bg-[#333] text-xs uppercase font-bold text-[#F5F3EF]"
                    >
                      View Book Page
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Digital Library */}
          {activeTab === 'digital' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#1C1C1C] border border-[#2B2B2B] p-6 space-y-4">
                <span className="text-[10px] uppercase font-bold text-[#F85800] tracking-wider block">
                  EPUB / KINDLE FORMAT
                </span>
                <h3 className="font-display text-xl text-[#F5F3EF]">
                  Cut the Crap Digital Edition (Early Chapter Proof)
                </h3>
                <p className="text-xs text-[#A3A3A3] leading-relaxed">
                  Includes Chapters 1 through 4, energy balance diagrams, and clickable Toolbox references.
                </p>
                <button
                  onClick={() => alert('Download initiated: Cut_The_Crap_Early_Access.epub')}
                  className="w-full py-3 bg-[#262626] hover:bg-[#333] text-[#F5F3EF] border border-[#3A3A3A] text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4 text-[#F85800]" />
                  <span>Download .EPUB</span>
                </button>
              </div>

              <div className="bg-[#1C1C1C] border border-[#2B2B2B] p-6 space-y-4">
                <span className="text-[10px] uppercase font-bold text-[#C8B088] tracking-wider block">
                  PRINTABLE MATRIX
                </span>
                <h3 className="font-display text-xl text-[#F5F3EF]">
                  Cut the Crap Daily Habit Worksheet
                </h3>
                <p className="text-xs text-[#A3A3A3] leading-relaxed">
                  High-contrast printable PDF scorecard for tracking daily protein floors and activity baselines.
                </p>
                <button
                  onClick={() => alert('Download initiated: Cut_The_Crap_Habit_Matrix.pdf')}
                  className="w-full py-3 bg-[#262626] hover:bg-[#333] text-[#F5F3EF] border border-[#3A3A3A] text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4 text-[#C8B088]" />
                  <span>Download .PDF</span>
                </button>
              </div>
            </div>
          )}

          {/* Tab 3: Addresses */}
          {activeTab === 'addresses' && (
            <div className="bg-[#1C1C1C] border border-[#2B2B2B] p-6 sm:p-8 space-y-6 max-w-xl">
              <h3 className="font-display text-lg text-[#F5F3EF]">
                Primary Shipping Address
              </h3>
              <div className="text-sm text-[#A3A3A3] space-y-1">
                <p className="font-bold text-[#F5F3EF]">Marcus Vance</p>
                <p>742 Evergreen Terrace</p>
                <p>Austin, TX 78701</p>
                <p>United States</p>
              </div>
              <button
                onClick={() => alert('Address edit dialog simulation')}
                className="px-4 py-2 bg-[#252525] hover:bg-[#333] text-xs uppercase font-bold text-[#F85800]"
              >
                Edit Address
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
