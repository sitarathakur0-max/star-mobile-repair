import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/business';
import { InquiryBuilder } from '../components/InquiryBuilder';
import {
  BatteryMedium,
  BatteryWarning,
  AlertTriangle,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

interface BatteryReplacementPageProps {
  onNavigate: (page: PageId) => void;
}

export const BatteryReplacementPage: React.FC<BatteryReplacementPageProps> = ({ onNavigate }) => {
  const batterySymptoms = [
    {
      title: 'Fast Battery Drain',
      desc: 'The battery percentage plummets from 80% to 20% in an hour of modest usage or drains overnight in standby mode.',
    },
    {
      title: 'Unexpected Shutdowns',
      desc: 'The phone powers off abruptly while launching an app or placing a phone call, even when the battery reads 30% or higher.',
    },
    {
      title: 'Degraded Battery Performance',
      desc: 'The device throttles performance, lags heavily under moderate load, or requires constant connection to a power bank.',
    },
    {
      title: 'Charging Stalls or Jumps',
      desc: 'The battery gauge takes hours to move 5% or skips wildly from 15% directly to 70% within moments of plugging in.',
    },
    {
      title: 'Excessive Heat While Idle',
      desc: 'The back of the device feels unusually warm to touch even when no intensive games or applications are active.',
    },
    {
      title: 'Battery Swelling Concerns',
      desc: 'The phone back cover lifts, screen pushes outward, or a slight chemical scent is detected—indicating gas pouch buildup.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16">
      {/* 1. Hero */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-300 text-xs font-medium mb-4">
          <BatteryMedium className="w-3.5 h-3.5 text-cyan-400" />
          <span>Battery Health Assessment & Replacement Support</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Mobile Battery Replacement
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              If your phone discharges rapidly, dies unpredictably during calls, or exhibits signs of physical bulging, Star City Mobile Repairing provides professional inspection and replacement assistance in Quetta.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Contact Star City</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-emerald-300 bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-700/60 rounded-lg shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            <div className="text-xs text-slate-400 flex items-center gap-2 pt-1">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>Malak Plaza, Abdul Sattar Shah Rd, Quetta · Open until 11 PM</span>
            </div>
          </div>

          {/* Critical Warning Box */}
          <div className="lg:col-span-5">
            <div className="bg-amber-950/30 border border-amber-600/40 rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-2.5 text-amber-400 font-semibold text-sm">
                <AlertTriangle className="w-5 h-5 shrink-0" />
                <span>Safety Notice: Never Attempt DIY Battery Puncture</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Swollen lithium-ion batteries represent a pressurized chemical reaction. Never press down with force on a lifting back cover, and never insert sharp metal objects into the phone to pry the battery loose. Puncturing a lithium cell can generate immediate thermal runaway and fire.
              </p>
              <div className="pt-2 text-xs text-amber-300 font-medium">
                Bring swollen or lifting devices to our Quetta shop for safe, careful disassembly.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Common Symptoms */}
      <section className="bg-[#0b1220] border border-slate-800 rounded-2xl p-6 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
          Common Battery Problems
        </h2>
        <p className="text-sm text-slate-400 max-w-3xl mb-6">
          Smartphone batteries typically degrade gradually over hundreds of chemical charge cycles, leading to noticeable performance drops and unpredictable shutdowns.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {batterySymptoms.map((symp, idx) => (
            <div
              key={idx}
              className="bg-[#0f172a] border border-slate-800/80 rounded-xl p-5 space-y-2 hover:border-cyan-500/30 transition-colors"
            >
              <h3 className="font-semibold text-white text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>{symp.title}</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {symp.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Professional Inspection Approach */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-[#090f1d] border border-slate-800 rounded-2xl p-6 sm:p-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">
            Why Professional Battery Inspection Matters
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            In some devices, fast battery drain is not caused by the battery itself, but by a leaking capacitor or a faulty power management integrated circuit (PMIC) on the motherboard that constantly draws excess current even during sleep.
          </p>

          <ul className="space-y-2.5 text-xs text-slate-300">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
              <span>We check standby power draw with bench meters to rule out mainboard short circuits.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
              <span>We inspect adhesive pull-tabs and frame clearance to prevent cell puncture during removal.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
              <span>We verify connector pins and temperature sensor continuity prior to re-sealing.</span>
            </li>
          </ul>

          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-md transition-colors"
            >
              <span>Visit Star City in Quetta</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 space-y-4">
          <h3 className="font-display font-semibold text-white text-base">
            Care Tips for Mobile Batteries
          </h3>
          <ul className="space-y-2 text-xs text-slate-300">
            <li>• Avoid leaving your phone inside hot vehicles or exposed to direct sunlight in Quetta heat.</li>
            <li>• Avoid using damaged, frayed cables or erratic ungrounded power adapters.</li>
            <li>• If the phone body shows signs of bowing or curvature, stop charging immediately.</li>
          </ul>

          <div className="p-3 bg-cyan-950/30 border border-cyan-800/40 rounded-lg text-xs text-cyan-300">
            <strong>Contact Star City:</strong> Have questions about battery availability for your specific phone? Send us a message on WhatsApp or call our shop.
          </div>
        </div>
      </section>

      {/* 4. Inquiry Form */}
      <InquiryBuilder initialService="Battery Drain / Swelling / Shutdowns" />
    </div>
  );
};
