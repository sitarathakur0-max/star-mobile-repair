import React, { useState } from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO, FAQS_DATA } from '../data/business';
import { InquiryBuilder } from '../components/InquiryBuilder';
import {
  HelpCircle,
  ChevronDown,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Search,
} from 'lucide-react';

interface FAQPageProps {
  onNavigate: (page: PageId) => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onNavigate }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'general' | 'services' | 'contact'>('all');

  const filteredFaqs = FAQS_DATA.filter((faq) => {
    const matchesCategory = categoryFilter === 'all' || faq.category === categoryFilter;
    const matchesQuery =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16">
      {/* 1. Header */}
      <div>
        <div className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold mb-2">
          Helpful Guidance
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mt-3 leading-relaxed">
          Find answers to common questions regarding device drop-offs, WhatsApp communication, business hours, and our mobile repair services in Quetta.
        </p>

        {/* Search & Category Filter */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          <div className="relative max-w-md w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search questions (e.g. wet phone, charging, location)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0b1220] border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500 placeholder:text-slate-500"
            />
          </div>

          <div className="flex flex-wrap gap-1.5 p-1 bg-[#0b1220] border border-slate-800 rounded-xl">
            {[
              { id: 'all', label: 'All' },
              { id: 'general', label: 'General & Hours' },
              { id: 'services', label: 'Repairs & Care' },
              { id: 'contact', label: 'Contact' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setCategoryFilter(tab.id as any)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  categoryFilter === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.length === 0 ? (
          <div className="bg-[#0b1220] border border-slate-800 rounded-xl p-8 text-center text-slate-400 text-sm">
            No questions matched your search query. Please message us directly on WhatsApp or call our shop.
          </div>
        ) : (
          filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#0b1220] border border-slate-800/80 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <span className="font-semibold text-white text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-cyan-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 border-t border-slate-800/60 leading-relaxed bg-[#0a0f1d]/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* 3. Direct Contact Card */}
      <section className="bg-[#090f1d] border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-xl font-bold text-white">Have a question not listed here?</h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Our repair technicians are available to answer questions about your device.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
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
            Ask on WhatsApp
          </a>
        </div>
      </section>

      {/* 4. Inquiry Form */}
      <InquiryBuilder />
    </div>
  );
};
