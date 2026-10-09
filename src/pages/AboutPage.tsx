import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/business';
import {
  ShieldCheck,
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Wrench,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16">
      {/* 1. Header */}
      <div>
        <div className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold mb-2">
          Local Mobile Repair Business
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          About Star City Mobile Repairing
        </h1>
        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mt-3 leading-relaxed">
          A dedicated mobile phone repair workshop located at Malak Plaza on Abdul Sattar Shah Road in Quetta, focused on systematic technical care, troubleshooting, and hardware restoration.
        </p>
      </div>

      {/* 2. What We Do & Who We Serve */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="bg-[#0b1220] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            What We Do
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Star City Mobile Repairing operates as a hands-on mobile phone repair center in Quetta. Modern smartphones are indispensable daily tools containing personal communications, business records, and banking credentials. When a device drops, suffers liquid exposure, or stops charging, our focus is providing clear, practical repair solutions.
          </p>
          <p className="text-sm text-slate-400 leading-relaxed">
            Rather than jumping to conclusions, our technicians examine circuit rails, connectors, displays, and battery health to isolate the true fault. We service common Android and iOS smartphone models used throughout Pakistan.
          </p>

          <div className="pt-2 flex flex-wrap gap-2 text-xs text-blue-300 font-mono">
            <span>· Screen Replacement</span>
            <span>· Battery Care</span>
            <span>· Charging Jack Repair</span>
            <span>· Board Level Diagnostics</span>
          </div>
        </div>

        <div className="bg-[#0b1220] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Who Our Service Is For
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Our repair workshop is built for anyone in Quetta facing mobile phone issues:
          </p>

          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
              <span><strong>Device Owners with Accidental Damage:</strong> Cracked screens, shattered back covers, broken camera lenses, or liquid exposure.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
              <span><strong>Users Experiencing Aging Hardware:</strong> Rapid battery drain, loose charging ports, muffled earpieces, or unresponsive buttons.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
              <span><strong>Troubleshooting Unexplained Faults:</strong> Phones that won't turn on, boot loop repeatedly, or freeze unexpectedly.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* 3. Service Philosophy */}
      <section className="bg-[#090f1d] border border-slate-800 rounded-2xl p-6 sm:p-10 space-y-6">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold mb-1">
            Core Principles
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Our Service Philosophy
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0f172a] border border-slate-800/80 rounded-xl p-5 space-y-2">
            <h3 className="font-semibold text-white text-base text-blue-400">
              Systematic Diagnosis First
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We believe in testing before replacing. Verifying current draw and isolating faulty circuits protects customers from paying for unneeded parts.
            </p>
          </div>

          <div className="bg-[#0f172a] border border-slate-800/80 rounded-xl p-5 space-y-2">
            <h3 className="font-semibold text-white text-base text-emerald-400">
              Transparent Communication
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We explain our findings directly to the customer in plain language. If a phone is beyond economical repair or parts are unavailable, we state so honestly.
            </p>
          </div>

          <div className="bg-[#0f172a] border border-slate-800/80 rounded-xl p-5 space-y-2">
            <h3 className="font-semibold text-white text-base text-cyan-400">
              Local Accessibility in Quetta
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Centrally located in Malak Plaza on Abdul Sattar Shah Road and open until 11 PM daily, making device drop-off and pickup straightforward for local residents.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Location & Contact Summary */}
      <section className="bg-[#0b1220] border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-xl font-bold text-white">
            Visit Star City Mobile Repairing in Quetta
          </h3>
          <p className="text-xs sm:text-sm text-slate-400">
            Malak Plaza, Abdul Sattar Shah Rd, Quetta, 87300, Pakistan · Plus Code: {BUSINESS_INFO.plusCode}
          </p>
          <p className="text-xs text-slate-500">
            Open daily until 11:00 PM for walk-ins and consultation.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <a
            href={BUSINESS_INFO.phoneTel}
            className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md transition-colors"
          >
            Call {BUSINESS_INFO.phoneDisplay}
          </a>
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-xs font-semibold text-emerald-300 bg-emerald-950/70 border border-emerald-700/60 rounded-lg hover:bg-emerald-900 transition-colors"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};
