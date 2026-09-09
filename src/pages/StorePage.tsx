import React, { useState } from 'react';
import { PageRoute } from '../types';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Check, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

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
    },
    {
      id: 'ebook-edition',
      title: 'CUT THE CRAP',
      edition: 'eBook Digital Edition',
      price: 14.99,
      description: 'Instant DRM-free download in EPUB and Kindle formats. Full hyperlinks to Toolbox items.',
      badge: 'Instant Digital',
      isFounders: false,
      isDigital: true,
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
            Direct from Up Armor Publishing. Guaranteed authentic first-edition printings, signed copies, and battle-tested habit companions.
          </p>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="py-16 sm:py-24 px-6 sm:px-8">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((prod) => {
            const isAdded = addedItemId === prod.id;
            return (
              <div
                key={prod.id}
                className={`p-8 flex flex-col justify-between border card-hover ${
                  prod.isFounders
                    ? 'founders-edition border-2 shadow-xl'
                    : 'bg-[#1C1C1C] border-[#2B2B2B]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`text-[10px] font-sans font-bold uppercase tracking-widest px-2 py-0.5 ${
                        prod.isFounders
                          ? 'bg-[#2A1D0B] text-[#C8B088] border border-[#C8B088]'
                          : 'bg-[#252525] text-[#8C8C8C] border border-[#333]'
                      }`}
                    >
                      {prod.badge}
                    </span>
                    <span
                      className={`text-2xl font-display font-bold ${
                        prod.isFounders ? 'text-[#C8B088]' : 'text-[#F5F3EF]'
                      }`}
                    >
                      ${prod.price.toFixed(2)}
                    </span>
                  </div>

                  <h3
                    className={`font-display text-2xl mb-1 ${
                      prod.isFounders ? 'text-[#C8B088]' : 'text-[#F5F3EF]'
                    }`}
                  >
                    {prod.title}
                  </h3>
                  <p className="text-xs uppercase font-sans font-semibold text-[#8C8C8C] mb-4">
                    {prod.edition}
                  </p>

                  <p className="text-sm text-[#A3A3A3] leading-relaxed mb-6">
                    {prod.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#2A2A2A]">
                  <button
                    type="button"
                    onClick={() => handleAdd(prod)}
                    className={`w-full py-3.5 font-sans font-bold text-xs uppercase tracking-[0.1em] transition-colors flex items-center justify-center gap-2 ${
                      isAdded
                        ? 'bg-[#2E7D32] text-white'
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
                        <ShoppingBag className="w-4 h-4" />
                        <span>Add to Cart &bull; ${prod.price.toFixed(2)}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
