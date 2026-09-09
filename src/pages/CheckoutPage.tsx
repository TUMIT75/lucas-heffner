import React, { useState } from 'react';
import { PageRoute } from '../types';
import { useCart } from '../context/CartContext';
import { ShieldCheck, Lock, CheckCircle2, ArrowRight, Download, CreditCard, Truck } from 'lucide-react';

interface CheckoutPageProps {
  navigate: (route: PageRoute) => void;
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({ navigate }) => {
  const { cart, subtotal, shippingEstimate, total, clearCart } = useCart();

  const [firstName, setFirstName] = useState('Marcus');
  const [lastName, setLastName] = useState('Vance');
  const [email, setEmail] = useState('marcus.vance@example.com');
  const [address, setAddress] = useState('742 Evergreen Terrace');
  const [city, setCity] = useState('Austin');
  const [stateVal, setStateVal] = useState('TX');
  const [zip, setZip] = useState('78701');
  const [cardNumber, setCardNumber] = useState('•••• •••• •••• 4242');
  const [expiry, setExpiry] = useState('12/28');
  const [cvc, setCvc] = useState('789');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      const generatedOrder = `UA-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setOrderNumber(generatedOrder);
      setIsProcessing(false);
      setIsComplete(true);
      clearCart();
    }, 1200);
  };

  if (isComplete) {
    return (
      <div className="w-full bg-[#141414] text-[#F5F3EF] min-h-[75vh] py-20 px-6 sm:px-8 flex items-center justify-center">
        <div className="max-w-2xl w-full bg-[#1A1A1A] border border-[#2B2B2B] p-8 sm:p-12 text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-[#2E7D32]/20 border border-[#2E7D32] text-[#4CAF50] flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-xs uppercase font-sans font-bold text-[#F85800] tracking-widest block">
              UP ARMOR PUBLISHING ORDER CONFIRMED
            </span>
            <h1 className="text-h2 text-[#F5F3EF]">
              Thank you for your order!
            </h1>
            <p className="text-sm font-mono text-[#C8B088]">
              Order Reference #{orderNumber}
            </p>
          </div>

          <p className="text-sm text-[#A3A3A3] max-w-lg mx-auto leading-relaxed">
            A confirmation receipt and fulfillment timeline have been dispatched to{' '}
            <strong className="text-[#F5F3EF]">{email}</strong>. Hardcover and paperback preorders are allocated directly to the initial printing queue.
          </p>

          {/* Digital Fulfillment Simulator */}
          <div className="p-6 bg-[#141414] border border-[#333] text-left space-y-3">
            <span className="text-xs uppercase font-bold text-[#C8B088] tracking-wider block">
              Digital Deliverables Included
            </span>
            <div className="flex items-center justify-between text-xs text-[#F5F3EF] border-t border-[#222] pt-3">
              <span>Cut the Crap — Complete Habit Matrix (PDF)</span>
              <button
                onClick={() => alert('Download initiated: Cut_The_Crap_Habit_Matrix.pdf')}
                className="text-[#F85800] font-bold hover:underline flex items-center gap-1"
              >
                <Download className="w-3.5 h-3.5" /> Download
              </button>
            </div>
            <div className="flex items-center justify-between text-xs text-[#F5F3EF] border-t border-[#222] pt-3">
              <span>Cut the Crap — Digital Edition Early Preview (.epub)</span>
              <button
                onClick={() => alert('Download initiated: Cut_The_Crap_Early_Access.epub')}
                className="text-[#F85800] font-bold hover:underline flex items-center gap-1"
              >
                <Download className="w-3.5 h-3.5" /> Download
              </button>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => navigate('/my-account')}
              className="px-6 py-3.5 bg-[#262626] hover:bg-[#333] text-[#F5F3EF] font-sans font-bold text-xs uppercase tracking-wider transition-colors"
            >
              View in My Account
            </button>
            <button
              onClick={() => navigate('/')}
              className="px-6 py-3.5 bg-[#F85800] hover:bg-[#E05000] text-[#141414] font-sans font-bold text-xs uppercase tracking-wider transition-colors"
            >
              Return to Homepage
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
          <span className="eyebrow-label text-[#F85800]">SECURE TRANSACTION</span>
          <h1 className="text-h1 text-[#F5F3EF]">
            Checkout &amp; Fulfillment
          </h1>
        </div>
      </section>

      {/* Checkout Form & Summary */}
      <section className="py-16 px-6 sm:px-8">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handlePlaceOrder} className="space-y-10">
              {/* Customer Contact */}
              <div className="bg-[#1A1A1A] border border-[#2B2B2B] p-6 sm:p-8 space-y-4">
                <h3 className="font-display text-lg text-[#F5F3EF] flex items-center gap-2">
                  <span>01</span>
                  <span>Contact Information</span>
                </h3>
                <div>
                  <label className="block text-xs uppercase font-bold text-[#A3A3A3] mb-1">
                    Email Address for Order Confirmation
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-[#121212] border border-[#333] text-sm text-[#F5F3EF] focus:outline-none focus:border-[#F85800]"
                  />
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-[#1A1A1A] border border-[#2B2B2B] p-6 sm:p-8 space-y-4">
                <h3 className="font-display text-lg text-[#F5F3EF] flex items-center gap-2">
                  <Truck className="w-5 h-5 text-[#F85800]" />
                  <span>02 Shipping Destination</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-bold text-[#A3A3A3] mb-1">First Name</label>
                    <input
                      type="text"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full px-4 py-3 bg-[#121212] border border-[#333] text-sm text-[#F5F3EF] focus:outline-none focus:border-[#F85800]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-bold text-[#A3A3A3] mb-1">Last Name</label>
                    <input
                      type="text"
                      required
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full px-4 py-3 bg-[#121212] border border-[#333] text-sm text-[#F5F3EF] focus:outline-none focus:border-[#F85800]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-bold text-[#A3A3A3] mb-1">Street Address</label>
                  <input
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-4 py-3 bg-[#121212] border border-[#333] text-sm text-[#F5F3EF] focus:outline-none focus:border-[#F85800]"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-bold text-[#A3A3A3] mb-1">City</label>
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-4 py-3 bg-[#121212] border border-[#333] text-sm text-[#F5F3EF] focus:outline-none focus:border-[#F85800]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-bold text-[#A3A3A3] mb-1">State</label>
                    <input
                      type="text"
                      required
                      value={stateVal}
                      onChange={(e) => setStateVal(e.target.value)}
                      className="w-full px-4 py-3 bg-[#121212] border border-[#333] text-sm text-[#F5F3EF] focus:outline-none focus:border-[#F85800]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-bold text-[#A3A3A3] mb-1">ZIP Code</label>
                    <input
                      type="text"
                      required
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                      className="w-full px-4 py-3 bg-[#121212] border border-[#333] text-sm text-[#F5F3EF] focus:outline-none focus:border-[#F85800]"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Details */}
              <div className="bg-[#1A1A1A] border border-[#2B2B2B] p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg text-[#F5F3EF] flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-[#F85800]" />
                    <span>03 Payment Method</span>
                  </h3>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 bg-[#252525] text-[#C8B088] border border-[#3A3A3A]">
                    Simulated Sandbox Mode
                  </span>
                </div>

                <div>
                  <label className="block text-xs uppercase font-bold text-[#A3A3A3] mb-1">Card Number</label>
                  <input
                    type="text"
                    required
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="w-full px-4 py-3 bg-[#121212] border border-[#333] text-sm font-mono text-[#F5F3EF] focus:outline-none focus:border-[#F85800]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-bold text-[#A3A3A3] mb-1">Expiration</label>
                    <input
                      type="text"
                      required
                      value={expiry}
                      onChange={(e) => setExpiry(e.target.value)}
                      className="w-full px-4 py-3 bg-[#121212] border border-[#333] text-sm font-mono text-[#F5F3EF] focus:outline-none focus:border-[#F85800]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-bold text-[#A3A3A3] mb-1">Security CVC</label>
                    <input
                      type="text"
                      required
                      value={cvc}
                      onChange={(e) => setCvc(e.target.value)}
                      className="w-full px-4 py-3 bg-[#121212] border border-[#333] text-sm font-mono text-[#F5F3EF] focus:outline-none focus:border-[#F85800]"
                    />
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <div>
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-4 bg-[#F85800] hover:bg-[#E05000] text-[#141414] font-sans font-bold text-sm uppercase tracking-[0.1em] transition-colors flex items-center justify-center gap-2 shadow-xl disabled:opacity-50"
                >
                  {isProcessing ? (
                    <span>Processing Transaction...</span>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" />
                      <span>Complete Preorder &bull; ${total.toFixed(2)}</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Sidebar Order Summary */}
          <div className="lg:col-span-5">
            <div className="bg-[#1C1C1C] border border-[#2B2B2B] p-6 sm:p-8 space-y-6 sticky top-28">
              <h3 className="font-display text-xl text-[#F5F3EF] border-b border-[#2A2A2A] pb-4">
                Items In Order ({cart.length})
              </h3>

              <div className="divide-y divide-[#282828] space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="pt-4 first:pt-0 flex justify-between gap-4 text-xs">
                    <div>
                      <div className="font-bold text-[#F5F3EF]">{item.title}</div>
                      <div className="text-[#8C8C8C]">{item.edition}</div>
                      <div className="text-[#777] mt-0.5">Qty: {item.quantity}</div>
                    </div>
                    <div className="font-mono font-bold text-[#F5F3EF]">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-[#2A2A2A] pt-4 space-y-2 text-xs">
                <div className="flex justify-between text-[#A3A3A3]">
                  <span>Subtotal</span>
                  <span className="font-mono text-[#F5F3EF]">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#A3A3A3]">
                  <span>Tracked Shipping</span>
                  <span className="font-mono text-[#F5F3EF]">
                    {shippingEstimate === 0 ? 'FREE' : `$${shippingEstimate.toFixed(2)}`}
                  </span>
                </div>
                <div className="border-t border-[#333] pt-3 flex justify-between text-base font-bold text-[#F85800]">
                  <span>Total Due</span>
                  <span className="font-display text-xl">${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="p-4 bg-[#141414] border border-[#262626] text-[11px] text-[#888] space-y-1">
                <p className="font-semibold text-[#C8B088] uppercase tracking-wider">
                  Direct Fulfillment
                </p>
                <p>
                  Orders are processed and fulfilled by Up Armor Publishing in accordance with standard author release schedules.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
