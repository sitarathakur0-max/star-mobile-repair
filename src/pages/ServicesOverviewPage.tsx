import React, { useState } from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO, SERVICES_DATA } from '../data/business';
import { InquiryBuilder } from '../components/InquiryBuilder';
import {
  Wrench,
  Smartphone,
  BatteryMedium,
  Zap,
  Cpu,
  Droplets,
  Search,
  ArrowRight,
  Phone,
  MessageCircle,
  CheckCircle2,
} from 'lucide-react';

interface ServicesOverviewPageProps {
  onNavigate: (page: PageId) => void;
}

export const ServicesOverviewPage: React.FC<ServicesOverviewPageProps> = ({ onNavigate }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'display' | 'power' | 'software' | 'hardware' | 'diagnostic'>('all');

  const filteredServices = SERVICES_DATA.filter((srv) => {
    if (selectedFilter === 'all') return true;
    return srv.category === selectedFilter;
  });

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-blue-400" />;
      case 'BatteryMedium':
        return <BatteryMedium className="w-5 h-5 text-cyan-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-indigo-400" />;
      case 'Droplets':
        return <Droplets className="w-5 h-5 text-sky-400" />;
      case 'SearchCheck':
        return <Search className="w-5 h-5 text-emerald-400" />;
      default:
        return <Wrench className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16">
      {/* 1. Page Header */}
      <div>
        <div className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold mb-2">
          Star City Mobile Repairing · Quetta
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Mobile Repair Services
        </h1>
        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mt-3 leading-relaxed">
          Comprehensive repair assistance and systematic troubleshooting for smartphones across major mobile brands. Explore our service categories or contact us directly to confirm your device issue.
        </p>

        {/* Category Filters (Interactive Filter Controls allowed per constitution) */}
        <div className="mt-8 flex flex-wrap gap-2 p-1.5 bg-[#0b1220] border border-slate-800 rounded-xl max-w-fit">
          {[
            { id: 'all', label: 'All Services' },
            { id: 'diagnostic', label: 'Diagnosis' },
            { id: 'display', label: 'Screen & Display' },
            { id: 'power', label: 'Battery & Charging' },
            { id: 'software', label: 'Software & OS' },
            { id: 'hardware', label: 'Hardware & Peripherals' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedFilter(cat.id as any)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                selectedFilter === cat.id
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* 2. Service Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((srv) => (
          <div
            key={srv.id}
            className="bg-[#0b1220] border border-slate-800 rounded-xl p-6 hover:border-blue-500/40 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#0e172a] border border-slate-700/60 flex items-center justify-center">
                  {getServiceIcon(srv.icon)}
                </div>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wide">
                  {srv.category}
                </span>
              </div>

              <h2 className="font-display font-semibold text-lg text-white group-hover:text-blue-300 transition-colors">
                {srv.title}
              </h2>

              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                {srv.shortDesc}
              </p>

              {/* Assessment preview */}
              <div className="mt-4 pt-3 border-t border-slate-800/70">
                <div className="text-[11px] text-slate-400 font-medium mb-1.5">
                  Assessment includes:
                </div>
                <ul className="space-y-1 text-xs text-slate-300">
                  {srv.assessmentPoints.slice(0, 3).map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-1.5">
                      <span className="text-blue-400 font-bold">·</span>
                      <span className="line-clamp-1">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/70 flex items-center justify-between">
              <button
                onClick={() => {
                  onNavigate(srv.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>Full Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-emerald-400 hover:text-emerald-300 font-medium"
              >
                Inquire on WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Inquiry Builder */}
      <InquiryBuilder />
    </div>
  );
};
