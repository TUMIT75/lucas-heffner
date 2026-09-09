import React, { useState } from 'react';
import { PageRoute } from '../types';
import { Mail, MessageSquare, CheckCircle2, Shield, ArrowRight } from 'lucide-react';

interface ContactPageProps {
  navigate: (route: PageRoute) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ navigate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Media / Speaking / Podcast Request');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="w-full bg-[#141414] text-[#F5F3EF]">
      {/* Header */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 border-b border-[#222]">
        <div className="max-w-[1280px] mx-auto max-w-3xl space-y-6">
          <span className="eyebrow-label text-[#F85800]">DIRECT INQUIRIES</span>
          <h1 className="text-h1 text-[#F5F3EF]">
            Contact Lucas Heffner
          </h1>
          <p className="text-[19px] sm:text-[23px] text-[#D1CFC7] leading-relaxed font-medium">
            For speaking engagements, podcast interviews, bulk book orders for military or athletic units, and publishing inquiries.
          </p>
        </div>
      </section>

      {/* Form & Channels */}
      <section className="py-16 sm:py-24 px-6 sm:px-8">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form */}
          <div className="lg:col-span-7">
            {isSubmitted ? (
              <div className="bg-[#1C1C1C] border border-[#F85800]/60 p-8 sm:p-12 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#F85800]/20 border border-[#F85800] flex items-center justify-center mx-auto text-[#F85800]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-2xl text-[#F5F3EF]">
                    MESSAGE DISPATCHED
                  </h3>
                  <p className="text-sm text-[#A3A3A3] max-w-md mx-auto">
                    Thank you for reaching out. Inquiries are reviewed by Lucas and the Up Armor executive office within 1-2 business days.
                  </p>
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 bg-[#262626] hover:bg-[#333] text-xs uppercase font-bold text-[#F5F3EF]"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 bg-[#181818] border border-[#2B2B2B] p-6 sm:p-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase font-bold text-[#A3A3A3] mb-2">
                      Your Name <span className="text-[#F85800]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. David Ross"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 bg-[#121212] border border-[#333] text-[#F5F3EF] text-sm focus:outline-none focus:border-[#F85800]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-bold text-[#A3A3A3] mb-2">
                      Email Address <span className="text-[#F85800]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@organization.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-[#121212] border border-[#333] text-[#F5F3EF] text-sm focus:outline-none focus:border-[#F85800]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-bold text-[#A3A3A3] mb-2">
                    Inquiry Nature <span className="text-[#F85800]">*</span>
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-3 bg-[#121212] border border-[#333] text-[#F5F3EF] text-sm focus:outline-none focus:border-[#F85800]"
                  >
                    <option value="Media / Speaking / Podcast Request">Media / Speaking / Podcast Request</option>
                    <option value="Bulk Book Orders (Military / Gyms / Teams)">Bulk Book Orders (Military / Gyms / Teams)</option>
                    <option value="Reader Feedback & Click Moments">Reader Feedback &amp; Click Moments</option>
                    <option value="Up Armor Publishing Rights & Inquiries">Up Armor Publishing Rights &amp; Inquiries</option>
                    <option value="General Question">General Question</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase font-bold text-[#A3A3A3] mb-2">
                    Your Message <span className="text-[#F85800]">*</span>
                  </label>
                  <textarea
                    rows={6}
                    required
                    placeholder="Provide details on dates, audiences, order quantities, or specific questions..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 bg-[#121212] border border-[#333] text-[#F5F3EF] text-sm focus:outline-none focus:border-[#F85800]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#F85800] hover:bg-[#E05000] text-[#141414] font-sans font-bold text-xs uppercase tracking-[0.1em] transition-colors flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Dispatch Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#1C1C1C] border border-[#2B2B2B] p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#C8B088] uppercase tracking-wider">
                <Shield className="w-4 h-4 text-[#F85800]" />
                Up Armor Publishing
              </div>
              <h3 className="font-display text-xl text-[#F5F3EF]">
                Direct Corporate Office
              </h3>
              <p className="text-sm text-[#A3A3A3] leading-relaxed">
                Up Armor Publishing manages all commercial rights, distribution agreements, and translation licensing for Lucas Heffner's literary works.
              </p>
              <div className="pt-2 border-t border-[#282828] text-xs text-[#8C8C8C] space-y-1">
                <p>Office: publishing@uparmorpublishing.com</p>
                <p>Media Inquiries: press@lucasheffner.com</p>
              </div>
            </div>

            <div className="bg-[#1C1C1C] border border-[#2B2B2B] p-6 sm:p-8 space-y-4">
              <span className="text-xs font-bold text-[#F85800] uppercase tracking-wider block">
                Bulk Book Orders
              </span>
              <p className="text-sm text-[#A3A3A3] leading-relaxed">
                Specialized bulk pricing and custom author notes are available for orders of 25+ copies to military units, first responder squads, crossfit affiliates, and corporate leadership programs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
