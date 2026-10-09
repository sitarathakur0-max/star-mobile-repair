import React, { useState } from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/business';
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Navigation,
  Send,
  CheckCircle2,
  Copy,
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [device, setDevice] = useState('');
  const [problem, setProblem] = useState('');
  const [copied, setCopied] = useState(false);

  const getInquiryText = () => {
    let text = `Hi Star City Mobile Repairing,\nI want to inquire about a repair at your Quetta shop.`;
    if (name.trim()) text += `\nName: ${name.trim()}`;
    if (phone.trim()) text += `\nPhone: ${phone.trim()}`;
    if (device.trim()) text += `\nDevice: ${device.trim()}`;
    if (problem.trim()) text += `\nProblem: ${problem.trim()}`;
    return text;
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const encoded = encodeURIComponent(getInquiryText());
    window.open(`https://wa.me/923458919199?text=${encoded}`, '_blank');
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(getInquiryText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16">
      {/* 1. Header */}
      <div>
        <div className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold mb-2">
          Direct Customer Assistance
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Contact Star City Mobile Repairing
        </h1>
        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mt-3 leading-relaxed">
          Get in touch with our mobile repair shop in Quetta. Call us directly, send a message on WhatsApp, or visit us in person at Malak Plaza on Abdul Sattar Shah Road.
        </p>
      </div>

      {/* 2. Business Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Telephone Card */}
        <div className="bg-[#0b1220] border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-blue-500/40 transition-colors flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-blue-950/60 border border-blue-800/40 flex items-center justify-center text-blue-400 mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-display font-semibold text-lg text-white">
              Telephone Inquiries
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Speak directly with a repair technician during daily business hours.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-800">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="text-lg font-bold text-blue-400 hover:text-blue-300 transition-colors"
              >
                {BUSINESS_INFO.phoneDisplay}
              </a>
            </div>
          </div>

          <a
            href={BUSINESS_INFO.phoneTel}
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-md"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now</span>
          </a>
        </div>

        {/* WhatsApp Card */}
        <div className="bg-[#0b1220] border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-emerald-500/40 transition-colors flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-emerald-950/60 border border-emerald-800/40 flex items-center justify-center text-emerald-400 mb-4">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="font-display font-semibold text-lg text-white">
              WhatsApp Support
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Send device photos, describe symptoms, or ask about repair assessment.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-800">
              <span className="text-lg font-bold text-emerald-400">
                {BUSINESS_INFO.phoneDisplay}
              </span>
            </div>
          </div>

          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-emerald-300 bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-700/60 rounded-lg transition-colors shadow-md"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Open WhatsApp Chat</span>
          </a>
        </div>

        {/* Physical Address & Hours */}
        <div className="bg-[#0b1220] border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-cyan-500/40 transition-colors flex flex-col justify-between md:col-span-2 lg:col-span-1">
          <div>
            <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-800/40 flex items-center justify-center text-cyan-400 mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-display font-semibold text-lg text-white">
              Shop Location & Hours
            </h3>
            <div className="mt-2 text-xs sm:text-sm text-slate-300 space-y-1">
              <div className="font-semibold text-white">Malak Plaza</div>
              <div>Abdul Sattar Shah Rd, Quetta, 87300, Pakistan</div>
              <div className="text-xs text-cyan-300 font-mono pt-1">
                Plus Code: {BUSINESS_INFO.plusCode}
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-400">
              <Clock className="w-4 h-4 text-blue-400" />
              <span>{BUSINESS_INFO.hours}</span>
            </div>
          </div>

          <div className="p-2.5 bg-[#0f172a] border border-slate-800 rounded-lg text-center text-xs text-slate-400">
            Walk-ins welcome until 11:00 PM daily
          </div>
        </div>
      </div>

      {/* 3. Address Text Presentation (STRICTLY NO GOOGLE MAP as per prompt) */}
      <section className="bg-[#080e1a] border border-slate-800 rounded-2xl p-6 sm:p-10 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold mb-1">
              Physical Location Reference
            </div>
            <h2 className="text-2xl font-bold text-white">
              Visiting Star City Mobile Repairing in Quetta
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-950/60 border border-blue-800/40 text-blue-300 text-xs font-mono">
            <Navigation className="w-3.5 h-3.5 text-blue-400" />
            <span>Plus Code: 52R8+Q4 Quetta</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-300">
          <div className="space-y-1 bg-[#0b1220] p-4 rounded-xl border border-slate-800/80">
            <div className="text-slate-400 text-xs font-medium">Building & Plaza</div>
            <div className="text-white font-semibold text-base">Malak Plaza</div>
            <div className="text-slate-400 text-xs">Abdul Sattar Shah Rd, Quetta</div>
          </div>

          <div className="space-y-1 bg-[#0b1220] p-4 rounded-xl border border-slate-800/80">
            <div className="text-slate-400 text-xs font-medium">Postal Code & Area</div>
            <div className="text-white font-semibold text-base">87300, Quetta</div>
            <div className="text-slate-400 text-xs">Balochistan, Pakistan</div>
          </div>

          <div className="space-y-1 bg-[#0b1220] p-4 rounded-xl border border-slate-800/80">
            <div className="text-slate-400 text-xs font-medium">Daily Schedule</div>
            <div className="text-emerald-400 font-semibold text-base">Open · Closes 11 PM</div>
            <div className="text-slate-400 text-xs">7 days a week</div>
          </div>
        </div>
      </section>

      {/* 4. Contact / Inquiry Form (Pre-fills WhatsApp message, strictly no fake email backend) */}
      <section className="bg-[#0b1220] border border-blue-900/30 rounded-2xl p-6 sm:p-10 space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Send a Repair Inquiry
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
            Fill in your device details to prepare a direct inquiry. Clicking 'Send to WhatsApp' directly connects you with our repair desk with your details pre-formatted.
          </p>
        </div>

        <form onSubmit={handleSendWhatsApp} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Your Name (optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Tariq Ahmed"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-[#0f172a] border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500 placeholder:text-slate-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Your Phone Number (optional)
            </label>
            <input
              type="text"
              placeholder="e.g. 0345..."
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-[#0f172a] border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500 placeholder:text-slate-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Device Brand & Model *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Samsung Galaxy A32, iPhone 12, Redmi Note 11"
              value={device}
              onChange={(e) => setDevice(e.target.value)}
              className="w-full bg-[#0f172a] border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500 placeholder:text-slate-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Brief Problem Description *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Cracked screen, does not charge, or water damage"
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
              className="w-full bg-[#0f172a] border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500 placeholder:text-slate-500"
            />
          </div>

          <div className="md:col-span-2 pt-2 flex flex-wrap items-center gap-3">
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send to WhatsApp</span>
            </button>

            <button
              type="button"
              onClick={handleCopyText}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
            >
              <Copy className="w-4 h-4" />
              <span>{copied ? 'Copied Details' : 'Copy Inquiry'}</span>
            </button>

            <a
              href={BUSINESS_INFO.phoneTel}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Direct Call</span>
            </a>
          </div>
        </form>
      </section>
    </div>
  );
};
