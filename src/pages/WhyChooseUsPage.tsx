import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/business';
import {
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Search,
  CheckCircle2,
  ShieldCheck,
  Wrench,
  ArrowRight,
} from 'lucide-react';

interface WhyChooseUsPageProps {
  onNavigate: (page: PageId) => void;
}

export const WhyChooseUsPage: React.FC<WhyChooseUsPageProps> = ({ onNavigate }) => {
  const factualReasons = [
    {
      title: 'Centrally Located in Quetta',
      icon: MapPin,
      desc: 'Based inside Malak Plaza on Abdul Sattar Shah Road in Quetta, making device drop-off and pickup straightforward for local customers without having to travel across city outskirts.',
    },
    {
      title: 'Open Daily Until 11:00 PM',
      icon: Clock,
      desc: 'We remain open late into the evening, allowing customers to bring in their phones or collect completed repairs after regular office, university, or business hours.',
    },
    {
      title: 'Direct Phone & WhatsApp Access',
      icon: MessageCircle,
      desc: 'You communicate directly with the local repair staff (+92 345 8919199) who actually inspect and work on your device—no intermediaries or automated chat bots.',
    },
    {
      title: 'Systematic Diagnostic Approach',
      icon: Search,
      desc: 'We use power ammeters, multimeters, and component isolation rather than guesswork. Identifying the root cause protects you from paying for unneeded replacement parts.',
    },
    {
      title: 'Multiple Mobile Repair Categories',
      icon: Wrench,
      desc: 'From shattered screens and depleted batteries to charging ports, software recovery, audio faults, and liquid exposure, we handle a broad spectrum of common smartphone issues.',
    },
    {
      title: 'Clear Explanation Before Starting',
      icon: ShieldCheck,
      desc: 'We inspect your device, explain our technical findings honestly, and ensure you understand the options before any repair work is carried out.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16">
      {/* 1. Header */}
      <div>
        <div className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold mb-2">
          Local Commitment & Standards
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Why Choose Star City Mobile Repairing?
        </h1>
        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mt-3 leading-relaxed">
          Choosing a repair service for your smartphone comes down to trust, clear communication, and accessible local support. Here are the practical reasons customers in Quetta rely on our shop.
        </p>
      </div>

      {/* 2. Grid of Factual Reasons */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {factualReasons.map((reason, idx) => {
          const Icon = reason.icon;
          return (
            <div
              key={idx}
              className="bg-[#0b1220] border border-slate-800 rounded-2xl p-6 hover:border-blue-500/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-800/40 flex items-center justify-center text-blue-400 mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2">
                  {reason.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {reason.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/60 text-[11px] text-cyan-300 font-mono">
                MALAK PLAZA · QUETTA
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. Honest Comparison / Our Approach */}
      <section className="bg-[#090f1d] border border-slate-800 rounded-2xl p-6 sm:p-10 space-y-6">
        <h2 className="text-2xl font-bold text-white">
          Our Commitment to Real Value
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-300">
          <div className="space-y-3">
            <h3 className="font-semibold text-white text-base text-blue-400">
              What You Can Expect
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Honest advice on whether a device is worth repairing or if replacement is more economical.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Careful handling of your phone's internal parts, screws, and brackets.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Direct contact via WhatsApp with photos or status updates on your device.</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-white text-base text-cyan-400">
              Customer Responsibility & Privacy
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Respect for customer privacy: we do not access personal photos, messages, or files.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Clear testing upon handover so you verify all features work before leaving the shop.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Action Card */}
      <div className="bg-[#0b1220] border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-white">Have a phone problem?</h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Call or message Star City Mobile Repairing to discuss your phone issue today.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={BUSINESS_INFO.phoneTel}
            className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-md transition-colors"
          >
            Call {BUSINESS_INFO.phoneDisplay}
          </a>
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-xs font-semibold text-emerald-300 bg-emerald-950/70 border border-emerald-700/60 rounded-md hover:bg-emerald-900 transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};
