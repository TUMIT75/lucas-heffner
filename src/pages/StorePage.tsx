import React, { useState } from 'react';
import { PageRoute } from '../types';
import { useCart } from '../context/CartContext';
import { RealisticBookCover } from '../components/RealisticBookCover';
import { FoundersEditionCard } from '../components/FoundersEditionCard';
import { FoundersEditionBanner } from '../components/OfficialBrandBanners';
import { IMAGE_ASSETS } from '../data/imageAssets';
import { ShoppingBag, Check, ArrowRight, BookOpen, Download, ShieldCheck, Sparkles } from 'lucide-react';

interface StorePageProps {
  navigate: (route: PageRoute) => void;
}

export const StorePage: React.FC<StorePageProps> = ({ navigate }) => {
  const { addToCart } = useCart();
  const [addedItemId, setAddedItemId] = useState<string | null>(null);

  const products = [
    {
      id: 'founders-hardcover',
      title: 'CUT THE CRAP',
      edition: "Founder's Edition Hardcover",
      price: 49.0,
      description: 'Signed, numbered, gold-embossed limited hardcover edition. Strict one-time printing run.',
      badge: "Founder's Edition",
      isFounders: true,
      isDigital: false,
      image: IMAGE_ASSETS.books.bookStack,
      bookEdition: 'hardcover' as const,
    },
    {
      id: 'paperback-edition',
      title: 'CUT THE CRAP',
      edition: 'Paperback Edition',
      price: 24.99,
      description: 'Standard print edition manufactured to rigorous Ingram publishing benchmarks.',
      badge: 'Print Edition',
      isFounders: false,
      isDigital: false,
      image: IMAGE_ASSETS.books.openBookReading,
      bookEdition: 'paperback' as const,
    },
    {
      id: 'ebook-edition',
      title: 'CUT THE CRAP',
      edition: 'Instant PDF & ePub Edition',
      price: 14.99,
      description: 'Instant DRM-free high-resolution PDF and ePub for Kindle & Apple Books. Complete worksheets included.',
      badge: 'Instant Download',
      isFounders: false,
      isDigital: true,
      image: IMAGE_ASSETS.books.digitalTabletReader,
      bookEdition: 'ebook' as const,
    },
    {
      id: 'habit-journal',
      title: 'Cut the Crap Habit Field Journal',
      edition: '180-Day Linen Hardcover',
      price: 19.99,
      description: 'Custom-designed daily habit logbook with energy balance trackers and weekly reflection prompts.',
      badge: 'Official Companion',
      isFounders: false,
      isDigital: false,
      image: IMAGE_ASSETS.author.writingDesk,
    },
    {
      id: 'up-armor-tee',
      title: 'Up Armor Heavyweight Crewneck',
      edition: 'Charcoal / 100% Ring-Spun Cotton',
      price: 32.0,
      description: 'Minimalist athletic fit apparel featuring the subtle Up Armor shield crest on sleeve.',
      badge: 'Gear',
      isFounders: false,
      isDigital: false,
      image: IMAGE_ASSETS.author.aboutPortrait,
    },
  ];

  const handleAdd = (prod: typeof products[0]) => {
    addToCart({
      id: prod.id,
      title: prod.title,
      edition: prod.edition,
      price: prod.price,
      isFoundersEdition: prod.isFounders,
      isDigital: prod.isDigital,
    });
    setAddedItemId(prod.id);
    setTimeout(() => setAddedItemId(null), 2000);
  };

  return (
    <div className="w-full bg-[#141414] text-[#F5F3EF]">
      {/* Header */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 border-b border-[#222]">
        <div className="max-w-[1280px] mx-auto space-y-6">
          <span className="eyebrow-label text-[#F85800]">OFFICIAL STORE</span>
          <h1 className="text-h1 text-[#F5F3EF]">
            Books &amp; Field Gear
          </h1>
          <p className="text-[19px] sm:text-[23px] text-[#D1CFC7] max-w-3xl leading-relaxed font-medium">
            Direct from Up Armor Publishing. Guaranteed authentic first-edition printings, signed copies, instant digital downloads, and habit companions.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-sans text-[#A3A3A3]">
            <button
              onClick={() => {
                navigate('/read-book');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-4 py-2 bg-[#F85800] hover:bg-[#E05000] text-[#141414] font-bold uppercase tracking-wider flex items-center gap-2 transition-colors shadow"
            >
              <BookOpen className="w-4 h-4" />
              <span>Read Free Sample Chapters Online</span>
            </button>
            <span className="text-[#666]">&bull;</span>
            <span className="flex items-center gap-1.5 text-[#60A5FA]">
              <Download className="w-3.5 h-3.5" />
              Instant PDF downloads immediately accessible after checkout
            </span>
          </div>
        </div>
      </section>

      {/* Featured Showcase: Founder's Edition Collector's Volume (IMG_4134) */}
      <section className="pt-12 px-6 sm:px-8 max-w-[1280px] mx-auto">
        <FoundersEditionBanner
          onSelectHardcover={() =>
            handleAdd({
              id: 'founders-hardcover',
              title: 'CUT THE CRAP',
              edition: "Founder's Edition Hardcover",
              price: 49.0,
              description: 'Signed, numbered, gold-embossed limited hardcover edition. Strict one-time printing run.',
              badge: "Founder's Edition",
              isFounders: true,
              isDigital: false,
              image: IMAGE_ASSETS.books.bookStack,
              bookEdition: 'hardcover' as const,
            })
          }
        />
      </section>

      {/* Catalog Grid */}
      <section className="py-16 sm:py-20 px-6 sm:px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-10 space-y-2">
            <span className="eyebrow-label text-[#F85800]">EDITIONS &amp; COMPANIONS</span>
            <h2 className="text-h2 text-[#F5F3EF]">Print, Digital &amp; Field Gear</h2>
            <p className="text-sm text-[#A3A3A3]">
              Manufactured and distributed directly by Up Armor Publishing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products
              .filter((prod) => !prod.isFounders)
              .map((prod) => {
                const isAdded = addedItemId === prod.id;
                return (
              <div
                key={prod.id}
                className={`p-6 sm:p-8 flex flex-col justify-between border card-hover ${
                  prod.isFounders
                    ? 'bg-[#1F1912] border-2 border-[#8C6F42] hover:border-[#D4AF37] shadow-xl'
                    : prod.isDigital
                    ? 'bg-[#1C1C1C] border-[#333] hover:border-[#F85800]/60 shadow-lg'
                    : 'bg-[#1C1C1C] border-[#2B2B2B] hover:border-[#F85800]/60'
                }`}
              >
                <div>
                  {/* Top Badge & Price */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`text-[10px] font-sans font-bold uppercase tracking-widest px-2.5 py-1 ${
                        prod.isFounders
                          ? 'bg-[#2A1D0B] text-[#D4AF37] border border-[#D4AF37]'
                          : prod.isDigital
                          ? 'bg-[#222] text-[#F85800] border border-[#F85800]/60'
                          : 'bg-[#252525] text-[#8C8C8C] border border-[#333]'
                      }`}
                    >
                      {prod.badge}
                    </span>
                    <span
                      className={`text-2xl font-display font-bold ${
                        prod.isFounders ? 'text-[#D4AF37]' : 'text-[#F5F3EF]'
                      }`}
                    >
                      ${prod.price.toFixed(2)}
                    </span>
                  </div>

                  {/* Product Visual */}
                  <div className="w-full h-48 mb-6 bg-[#141414] border border-[#2B2B2B] overflow-hidden flex items-center justify-center relative group">
                    {prod.bookEdition ? (
                      <div className="scale-75 transition-transform duration-300 group-hover:scale-80">
                        <RealisticBookCover edition={prod.bookEdition} size="sm" />
                      </div>
                    ) : (
                      <img
                        src={prod.image}
                        alt={prod.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                      />
                    )}

                    {/* Foil Medallion Stamp if Founder's */}
                    {prod.isFounders && (
                      <div className="absolute top-2 right-2 px-2 py-0.5 bg-[#1F1912]/95 border border-[#D4AF37] text-[10px] font-sans font-bold text-[#D4AF37] uppercase tracking-wider shadow pointer-events-none">
                        ★ 1 of 500
                      </div>
                    )}
                  </div>

                  <h3
                    className={`font-display text-2xl mb-1 ${
                      prod.isFounders ? 'text-[#C8B088]' : 'text-[#F5F3EF]'
                    }`}
                  >
                    {prod.title}
                  </h3>
                  <p className="text-xs uppercase font-sans font-semibold text-[#8C8C8C] mb-3">
                    {prod.edition}
                  </p>

                  <p className="text-sm text-[#A3A3A3] leading-relaxed mb-6">
                    {prod.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#2A2A2A] space-y-2">
                  <button
                    type="button"
                    onClick={() => handleAdd(prod)}
                    className={`w-full py-3.5 font-sans font-bold text-xs uppercase tracking-[0.1em] transition-colors flex items-center justify-center gap-2 shadow ${
                      isAdded
                        ? 'bg-[#2E7D32] text-white'
                        : prod.isDigital
                        ? 'bg-[#2563EB] hover:bg-[#1D4ED8] text-white'
                        : 'bg-[#F85800] hover:bg-[#E05000] text-[#141414]'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Added to Cart</span>
                      </>
                    ) : (
                      <>
                        {prod.isDigital ? <Download className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
                        <span>
                          {prod.isDigital ? 'Buy Instant PDF' : 'Add to Cart'} &bull; ${prod.price.toFixed(2)}
                        </span>
                      </>
                    )}
                  </button>

                  {prod.bookEdition && (
                    <button
                      type="button"
                      onClick={() => {
                        navigate('/read-book');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="w-full py-2 bg-[#141414] hover:bg-[#222] border border-[#333] text-[11px] font-sans font-bold uppercase tracking-wider text-[#A3A3A3] hover:text-[#F5F3EF] flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-[#F85800]" />
                      <span>Read Free Sample Excerpt</span>
                    </button>
                  )}
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
