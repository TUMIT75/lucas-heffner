import React from 'react';
import { PageRoute } from '../types';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Plus, Minus, Trash2, ArrowRight, ShieldCheck } from 'lucide-react';

interface CartPageProps {
  navigate: (route: PageRoute) => void;
}

export const CartPage: React.FC<CartPageProps> = ({ navigate }) => {
  const { cart, updateQuantity, removeFromCart, subtotal, shippingEstimate, total } = useCart();

  if (cart.length === 0) {
    return (
      <div className="w-full bg-[#141414] text-[#F5F3EF] min-h-[60vh] flex items-center justify-center py-24 px-6 sm:px-8">
        <div className="max-w-md w-full text-center space-y-6 bg-[#1A1A1A] border border-[#2B2B2B] p-10">
          <div className="w-16 h-16 rounded-full bg-[#222] border border-[#333] flex items-center justify-center mx-auto text-[#777]">
            <ShoppingBag className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h1 className="font-display text-2xl text-[#F5F3EF]">
              Your cart is empty.
            </h1>
            <p className="text-sm text-[#8C8C8C]">
              You have no books, editions, or gear in your current cart.
            </p>
          </div>
          <div className="pt-2">
            <button
              onClick={() => navigate('/store')}
              className="w-full py-4 bg-[#F85800] hover:bg-[#E05000] text-[#141414] font-sans font-bold text-xs uppercase tracking-[0.1em] transition-colors"
            >
              Browse the Store
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#141414] text-[#F5F3EF]">
      {/* Header */}
      <section className="py-16 lg:py-20 px-6 sm:px-8 border-b border-[#222]">
        <div className="max-w-[1280px] mx-auto space-y-2">
          <span className="eyebrow-label text-[#F85800]">ORDER BAG</span>
          <h1 className="text-h1 text-[#F5F3EF]">
            Review Your Cart
          </h1>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-16 px-6 sm:px-8">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Items Table / List */}
          <div className="lg:col-span-8 space-y-6">
            <div className="border border-[#2B2B2B] bg-[#1A1A1A] divide-y divide-[#2B2B2B]">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-display text-xl text-[#F5F3EF]">{item.title}</h3>
                      {item.isFoundersEdition && (
                        <span className="text-[10px] uppercase font-bold text-[#C8B088] bg-[#2A1D0B] border border-[#C8B088] px-2 py-0.5">
                          Founder's
                        </span>
                      )}
                    </div>
                    <p className="text-xs uppercase font-sans text-[#8C8C8C]">{item.edition}</p>
                    <span className="text-sm font-semibold text-[#F85800] block sm:hidden pt-1">
                      ${item.price.toFixed(2)} each
                    </span>
                  </div>

                  {/* Quantity & Actions */}
                  <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
                    <div className="flex items-center border border-[#333] bg-[#141414]">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-2 text-[#888] hover:text-[#FFF] transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-4 text-xs font-mono font-bold text-[#F5F3EF]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-2 text-[#888] hover:text-[#FFF] transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="text-right min-w-[80px]">
                      <div className="text-lg font-display font-bold text-[#F5F3EF]">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                      <div className="text-[10px] text-[#777] hidden sm:block">
                        ${item.price.toFixed(2)} ea
                      </div>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-[#777] hover:text-[#C24A1E] transition-colors"
                      aria-label={`Remove ${item.title} from cart`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center text-xs">
              <button
                onClick={() => navigate('/store')}
                className="text-[#8C8C8C] hover:text-[#F85800] uppercase font-bold tracking-wider"
              >
                &larr; Continue Shopping
              </button>
              <span className="text-[#666]">
                Secure direct checkout guaranteed by Up Armor Publishing
              </span>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-[#1C1C1C] border border-[#2B2B2B] p-6 sm:p-8 space-y-6 sticky top-28">
              <h3 className="font-display text-xl text-[#F5F3EF] border-b border-[#2A2A2A] pb-4">
                Order Summary
              </h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-[#A3A3A3]">
                  <span>Subtotal</span>
                  <span className="font-mono text-[#F5F3EF]">${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-[#A3A3A3]">
                  <span>Standard Shipping Estimate</span>
                  <span className="font-mono text-[#F5F3EF]">
                    {shippingEstimate === 0 ? 'FREE' : `$${shippingEstimate.toFixed(2)}`}
                  </span>
                </div>

                <div className="border-t border-[#2A2A2A] pt-3 flex justify-between text-base font-bold">
                  <span className="text-[#F5F3EF]">Estimated Total</span>
                  <span className="font-display text-xl text-[#F85800]">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  navigate('/checkout');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full py-4 bg-[#F85800] hover:bg-[#E05000] text-[#141414] font-sans font-bold text-xs uppercase tracking-[0.1em] transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="pt-2 text-[11px] text-[#777] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C8B088] shrink-0" />
                <span>SSL 256-Bit Encrypted Direct Publishing Portal</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
