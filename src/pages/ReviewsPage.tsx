import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/business';
import { InquiryBuilder } from '../components/InquiryBuilder';
import {
  MessageSquare,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

interface ReviewsPageProps {
  onNavigate: (page: PageId) => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16">
      {/* 1. Header */}
      <div>
        <div className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold mb-2">
          Customer Relations & Trust
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Customer Feedback
        </h1>
        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mt-3 leading-relaxed">
          At Star City Mobile Repairing, we believe in authentic local service and transparent communication. We encourage customers to share their direct feedback, questions, or repair inquiries directly with our shop team.
        </p>
      </div>

      {/* 2. Primary Customer Feedback Notice (Per strict prompt rules) */}
      <section className="bg-[#0b1220] border border-blue-900/30 rounded-2xl p-8 sm:p-12 text-center space-y-6 max-w-4xl mx-auto">
        <div className="w-14 h-14 rounded-2xl bg-blue-950/60 border border-blue-800/40 flex items-center justify-center text-blue-400 mx-auto">
          <MessageSquare className="w-7 h-7" />
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Looking for a mobile repair service in Quetta?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Contact Star City Mobile Repairing directly to discuss your device issue.
          </p>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            Whether you need a quick assessment for a cracked display, a battery evaluation, or general troubleshooting, our team at Malak Plaza on Abdul Sattar Shah Road is available to assist you.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href={BUSINESS_INFO.phoneTel}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md transition-all"
          >
            <Phone className="w-4 h-4" />
            <span>Call {BUSINESS_INFO.phoneDisplay}</span>
          </a>

          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-emerald-300 bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-700/60 rounded-lg shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Inquire on WhatsApp</span>
          </a>
        </div>
      </section>

      {/* 3. Direct Feedback Channel */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#090f1d] border border-slate-800 rounded-2xl p-6 sm:p-8">
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-white">
            How to Share Feedback or Get Support
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            We value direct dialogue with every customer. If you have recently visited our shop for a repair, or if you have questions following a device handover, please reach out to us:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-300 pt-1">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
              <span>Message us directly on WhatsApp with your repair order details.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
              <span>Visit our shop during working hours (open until 11 PM) for in-person support.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
              <span>Verify that all repaired functions remain stable during regular use.</span>
            </li>
          </ul>
        </div>

        <div className="bg-[#0f172a] border border-slate-800/80 rounded-xl p-5 space-y-3 flex flex-col justify-between">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold mb-1">
              Direct Contact Details
            </div>
            <div className="text-sm font-semibold text-white">
              Star City Mobile Repairing
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Malak Plaza, Abdul Sattar Shah Rd, Quetta, 87300, Pakistan
            </p>
            <p className="text-xs text-slate-400 mt-0.5">
              Phone: {BUSINESS_INFO.phoneDisplay}
            </p>
            <p className="text-xs text-slate-400 mt-0.5">
              Business Hours: Open · Closes 11 PM
            </p>
          </div>

          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300"
            >
              <span>Go to Contact Information Page</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. Inquiry Form */}
      <InquiryBuilder />
    </div>
  );
};
