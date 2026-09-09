import React, { useState } from 'react';
import { PageRoute } from '../types';
import {
  CutTheCrapHorizontalLogo,
  CutTheCrapStackedLogo,
  PillarCircularBadge,
  StarWingsInsignia,
  FoundersEmbossedBadge,
} from './BrandLogos';
import {
  FlagshipCutTheCrapBanner,
  FoundersEditionBanner,
  FoundersPlaqueHeader,
} from './OfficialBrandBanners';
import { CLIENT_BRAND_ASSETS } from '../data/imageAssets';
import { X, Check, Copy, Download, ExternalLink, Sparkles, Shield, QrCode, Image as ImageIcon } from 'lucide-react';

interface BrandAssetShowcaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  navigate?: (route: PageRoute) => void;
}

export const BrandAssetShowcaseModal: React.FC<BrandAssetShowcaseModalProps> = ({
  isOpen,
  onClose,
  navigate,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'logos' | 'banners' | 'pillars' | 'qr'>('all');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in">
      <div className="bg-[#141414] border-2 border-[#F85800] w-full max-w-5xl max-h-[96vh] sm:max-h-[90vh] flex flex-col rounded-sm shadow-2xl overflow-hidden text-[#F5F3EF]">
        {/* Header */}
        <div className="p-4 sm:p-6 bg-[#1A1A1A] border-b border-[#2B2B2B] flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-sm bg-[#F85800] text-[#141414] flex items-center justify-center font-bold shrink-0">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h3 className="font-display font-black text-lg sm:text-xl text-[#F5F3EF] truncate">
                Cut the Crap &bull; Official Brand Assets
              </h3>
              <p className="text-xs text-[#8C8C8C] line-clamp-1 sm:line-clamp-none">
                Official visual identity, 5 core brand images, logos, 4 pillar badges, and print-ready QR codes.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#888] hover:text-white hover:bg-[#262626] rounded-sm transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="px-4 sm:px-6 py-2.5 bg-[#111] border-b border-[#222] flex gap-2 text-xs overflow-x-auto scrollbar-none whitespace-nowrap">
          {[
            { id: 'all', label: 'All 5 Brand Assets' },
            { id: 'logos', label: 'Logos (Horizontal & Stacked)' },
            { id: 'banners', label: 'Official Banners (Flagship & Founder)' },
            { id: 'pillars', label: '4 Pillars Insignia' },
            { id: 'qr', label: 'Permanent QR Ecosystem' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3 py-1.5 font-bold uppercase tracking-wider text-[11px] shrink-0 transition-colors ${
                activeTab === tab.id
                  ? 'bg-[#F85800] text-[#141414]'
                  : 'bg-[#1C1C1C] text-[#888] hover:text-[#CCC]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 overflow-y-auto space-y-10 flex-1 scrollbar-thin">
          {/* 1. Flagship Landscape Banner Suite (IMG_4132.png) */}
          {(activeTab === 'all' || activeTab === 'banners') && (
            <div className="space-y-3 bg-[#181818] p-6 border border-[#2B2B2B]">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#2B2B2B] pb-3">
                <div>
                  <span className="text-[10px] font-mono text-[#F85800] uppercase font-bold tracking-wider">
                    CLIENT ASSET #1 &bull; /assets/IMG_4132.png
                  </span>
                  <h4 className="text-lg font-display font-bold text-[#F5F3EF]">
                    Flagship Black Identity Mark Suite
                  </h4>
                  <p className="text-xs text-[#8C8C8C]">
                    Original authentic master file with vertical emblem, horizontal stencil, and circular quality seal.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={CLIENT_BRAND_ASSETS.flagshipBanner}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-[#222] hover:bg-[#333] text-xs font-mono text-[#F85800] flex items-center gap-1.5 border border-[#333]"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>View Full Size (1320x489)</span>
                  </a>
                  <a
                    href={CLIENT_BRAND_ASSETS.flagshipBanner}
                    download="IMG_4132.png"
                    className="px-3 py-1.5 bg-[#222] hover:bg-[#333] text-xs font-mono text-[#C8B088] flex items-center gap-1.5 border border-[#333]"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </a>
                </div>
              </div>
              <div className="rounded overflow-hidden border border-[#333] bg-black">
                <img
                  src="/assets/IMG_4132.png?v=6"
                  alt="Cut The Crap Brand Suite Dark - IMG_4132"
                  className="w-full h-auto object-contain select-none block"
                  referrerPolicy="no-referrer"
                />
              </div>
              <FlagshipCutTheCrapBanner navigate={navigate} />
            </div>
          )}

          {/* 2. Founder's Edition Kraft Debossed Plaque (IMG_4133.png) */}
          {(activeTab === 'all' || activeTab === 'banners' || activeTab === 'logos') && (
            <div className="space-y-3 bg-[#181818] p-6 border border-[#2B2B2B]">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#2B2B2B] pb-3">
                <div>
                  <span className="text-[10px] font-mono text-[#D4AF37] uppercase font-bold tracking-wider">
                    CLIENT ASSET #2 &bull; /assets/IMG_4133.png
                  </span>
                  <h4 className="text-lg font-display font-bold text-[#F5F3EF]">
                    Debossed Kraft &amp; Industrial Texture Banner
                  </h4>
                  <p className="text-xs text-[#8C8C8C]">
                    Authentic physical cardboard/kraft substrate with distressed debossed stencil branding.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={CLIENT_BRAND_ASSETS.foundersPlaque}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-[#222] hover:bg-[#333] text-xs font-mono text-[#D4AF37] flex items-center gap-1.5 border border-[#7A5826]"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>View Full Size (2172x724)</span>
                  </a>
                  <a
                    href={CLIENT_BRAND_ASSETS.foundersPlaque}
                    download="IMG_4133.png"
                    className="px-3 py-1.5 bg-[#222] hover:bg-[#333] text-xs font-mono text-[#D4AF37] flex items-center gap-1.5 border border-[#7A5826]"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </a>
                </div>
              </div>
              <div className="rounded overflow-hidden border border-[#4A3219]/60 shadow-xl bg-[#1C140D]">
                <img
                  src="/assets/IMG_4133.png?v=6"
                  alt="Cut The Crap Kraft Banner - IMG_4133"
                  className="w-full h-auto object-cover select-none block"
                  referrerPolicy="no-referrer"
                />
              </div>
              <FoundersEditionBanner navigate={navigate} />
            </div>
          )}

          {/* 3. White Paper Identity Suite (IMG_4134.png) */}
          {(activeTab === 'all' || activeTab === 'banners') && (
            <div className="space-y-3 bg-[#181818] p-6 border border-[#2B2B2B]">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#2B2B2B] pb-3">
                <div>
                  <span className="text-[10px] font-mono text-[#FFF] uppercase font-bold tracking-wider">
                    CLIENT ASSET #3 &bull; /assets/IMG_4134.png
                  </span>
                  <h4 className="text-lg font-display font-bold text-[#F5F3EF]">
                    Light Paper Brand Identity Suite
                  </h4>
                  <p className="text-xs text-[#8C8C8C]">
                    Clean high-contrast presentation on crisp white paper for editorial print and merchandise.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={CLIENT_BRAND_ASSETS.foundersBanner}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-[#222] hover:bg-[#333] text-xs font-mono text-white flex items-center gap-1.5 border border-[#444]"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>View Full Size (1320x489)</span>
                  </a>
                  <a
                    href={CLIENT_BRAND_ASSETS.foundersBanner}
                    download="IMG_4134.png"
                    className="px-3 py-1.5 bg-[#222] hover:bg-[#333] text-xs font-mono text-[#DDD] flex items-center gap-1.5 border border-[#444]"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </a>
                </div>
              </div>
              <div className="rounded overflow-hidden border border-[#333] bg-white p-2">
                <img
                  src="/assets/IMG_4134.png?v=6"
                  alt="Cut The Crap White Paper Suite - IMG_4134"
                  className="w-full h-auto object-contain select-none block"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          )}

          {/* 4. Horizontal & Stacked Wordmarks (IMG_4131.png & IMG_4130.png) */}
          {(activeTab === 'all' || activeTab === 'logos') && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Horizontal Logo (IMG_4131) */}
              <div className="space-y-3 bg-[#181818] p-6 border border-[#2B2B2B]">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-[#F85800] uppercase font-bold tracking-wider">
                      CLIENT ASSET #4 &bull; /assets/IMG_4131.png
                    </span>
                    <h4 className="text-base font-display font-bold text-[#F5F3EF]">
                      Horizontal Distressed Wordmark
                    </h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={CLIENT_BRAND_ASSETS.horizontalLogo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 text-[#8C8C8C] hover:text-white"
                      title="Open IMG_4131.png"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href={CLIENT_BRAND_ASSETS.horizontalLogo}
                      download="IMG_4131.png"
                      className="p-1 text-[#8C8C8C] hover:text-white"
                      title="Download"
                    >
                      <Download className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <div className="p-6 bg-black border border-[#2B2B2B] rounded flex flex-col items-center justify-center min-h-[160px] space-y-4">
                  <CutTheCrapHorizontalLogo size="lg" />
                  <span className="text-[10px] text-[#666] font-mono uppercase">Transparent Stencil Header Asset</span>
                </div>
                <button
                  onClick={() => handleCopy('<CutTheCrapHorizontalLogo size="lg" />', 'copy-hz')}
                  className="w-full py-2 bg-[#1C1C1C] hover:bg-[#262626] text-xs font-mono text-[#8C8C8C] flex items-center justify-center gap-1.5"
                >
                  {copiedKey === 'copy-hz' ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>Copy Component</span>
                </button>
              </div>

              {/* Stacked Logo (IMG_4130) */}
              <div className="space-y-3 bg-[#181818] p-6 border border-[#2B2B2B]">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-[#F85800] uppercase font-bold tracking-wider">
                      CLIENT ASSET #5 &bull; /assets/IMG_4130.png
                    </span>
                    <h4 className="text-base font-display font-bold text-[#F5F3EF]">
                      Stacked Stencil Wordmark &amp; Subtitle
                    </h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={CLIENT_BRAND_ASSETS.stackedLogo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 text-[#8C8C8C] hover:text-white"
                      title="Open IMG_4130.png"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href={CLIENT_BRAND_ASSETS.stackedLogo}
                      download="IMG_4130.png"
                      className="p-1 text-[#8C8C8C] hover:text-white"
                      title="Download"
                    >
                      <Download className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <div className="p-6 bg-black border border-[#2B2B2B] rounded flex flex-col items-center justify-center min-h-[160px] space-y-4">
                  <CutTheCrapStackedLogo size="md" />
                  <span className="text-[10px] text-[#666] font-mono uppercase">Transparent Master Badge Asset</span>
                </div>
                <button
                  onClick={() => handleCopy('<CutTheCrapStackedLogo size="md" />', 'copy-st')}
                  className="w-full py-2 bg-[#1C1C1C] hover:bg-[#262626] text-xs font-mono text-[#8C8C8C] flex items-center justify-center gap-1.5"
                >
                  {copiedKey === 'copy-st' ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>Copy Component</span>
                </button>
              </div>
            </div>
          )}

          {/* 5. The 4 Circular Pillar Badges */}
          {(activeTab === 'all' || activeTab === 'pillars') && (
            <div className="space-y-3 bg-[#181818] p-6 border border-[#2B2B2B]">
              <div className="flex items-center justify-between border-b border-[#2B2B2B] pb-3">
                <div>
                  <span className="text-[10px] font-mono text-[#F85800] uppercase font-bold tracking-wider">
                    CORE SYSTEM ICONS
                  </span>
                  <h4 className="text-lg font-display font-bold text-[#F5F3EF]">
                    The 4 Pillars Circular Badges
                  </h4>
                </div>
                <StarWingsInsignia className="w-24 h-5" color="#F85800" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 text-center">
                <div className="p-4 bg-[#141414] border border-[#252525] flex flex-col items-center">
                  <PillarCircularBadge type="training" size="lg" />
                  <p className="text-xs text-[#8C8C8C] mt-3">Progressive Overload &amp; Readiness</p>
                </div>
                <div className="p-4 bg-[#141414] border border-[#252525] flex flex-col items-center">
                  <PillarCircularBadge type="nutrition" size="lg" />
                  <p className="text-xs text-[#8C8C8C] mt-3">Energy Balance &amp; Protein Leverage</p>
                </div>
                <div className="p-4 bg-[#141414] border border-[#252525] flex flex-col items-center">
                  <PillarCircularBadge type="faith" size="lg" />
                  <p className="text-xs text-[#8C8C8C] mt-3">Spiritual Anchor &amp; Higher Purpose</p>
                </div>
                <div className="p-4 bg-[#141414] border border-[#252525] flex flex-col items-center">
                  <PillarCircularBadge type="discipline" size="lg" />
                  <p className="text-xs text-[#8C8C8C] mt-3">Military Standard Operating Procedures</p>
                </div>
              </div>
            </div>
          )}

          {/* 6. QR Code Ecosystem (Section 20 of Brief) */}
          {(activeTab === 'all' || activeTab === 'qr') && (
            <div className="space-y-4 bg-[#181818] p-6 border border-[#2B2B2B]">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F85800]">
                <QrCode className="w-4 h-4" />
                Permanent QR &amp; Short URL Ecosystem (Developer Brief Section 20)
              </div>
              <p className="text-xs text-[#A3A3A3] leading-relaxed">
                As required by the developer brief, all QR codes on business cards and book printings resolve through permanent LucasHeffner.com URLs that Lucas controls, so destination links can be modified without reprinting books or business cards.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
                {[
                  {
                    title: 'Book Landing Page',
                    url: 'https://lucasheffner.com/cutthecrap',
                    route: '/cutthecrap' as PageRoute,
                    desc: 'Directs to primary sales page',
                  },
                  {
                    title: 'Toolbox Page',
                    url: 'https://lucasheffner.com/cutthecrap/toolkit',
                    route: '/toolkit' as PageRoute,
                    desc: 'Directs to tools, scales, and appliances',
                  },
                  {
                    title: 'Community Facebook Hub',
                    url: 'https://lucasheffner.com/community',
                    route: '/community' as PageRoute,
                    desc: 'Directs to Cut the Crap reader group',
                  },
                  {
                    title: 'Share Click Moment',
                    url: 'https://lucasheffner.com/shareyourclickmoment',
                    route: '/shareyourclickmoment' as PageRoute,
                    desc: 'Permanent short URL for reader stories',
                  },
                  {
                    title: 'Find Battle Buddy',
                    url: 'https://lucasheffner.com/findyourbattlebuddy',
                    route: '/findyourbattlebuddy' as PageRoute,
                    desc: 'Permanent short URL for accountability partner',
                  },
                ].map((item) => (
                  <div key={item.url} className="p-4 bg-[#141414] border border-[#2A2A2A] flex flex-col justify-between">
                    <div>
                      <h5 className="font-display font-bold text-sm text-[#F5F3EF]">{item.title}</h5>
                      <span className="text-[11px] font-mono text-[#F85800] break-all block my-1">{item.url}</span>
                      <p className="text-[11px] text-[#8C8C8C]">{item.desc}</p>
                    </div>
                    <div className="pt-3 mt-3 border-t border-[#222] flex gap-2">
                      <button
                        onClick={() => handleCopy(item.url, item.title)}
                        className="px-2.5 py-1 bg-[#222] hover:bg-[#333] text-[10px] font-mono text-[#CCC] flex items-center gap-1"
                      >
                        {copiedKey === item.title ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
                        <span>Copy</span>
                      </button>
                      <button
                        onClick={() => {
                          onClose();
                          if (navigate) navigate(item.route);
                        }}
                        className="px-2.5 py-1 bg-[#F85800]/20 hover:bg-[#F85800]/30 text-[#F85800] text-[10px] font-bold uppercase flex items-center gap-1"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Visit</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#181818] border-t border-[#262626] flex items-center justify-between text-xs text-[#8C8C8C]">
          <span>Up Armor Publishing &bull; Brand Visual Assets</span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#F85800] hover:bg-[#E05000] text-[#141414] font-bold uppercase tracking-wider text-xs"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
