import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/business';
import { TechGraphic } from '../components/TechGraphic';
import { InquiryBuilder } from '../components/InquiryBuilder';
import {
  Smartphone,
  Phone,
  MessageCircle,
  MapPin,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ArrowRight,
} from 'lucide-react';

interface ScreenRepairPageProps {
  onNavigate: (page: PageId) => void;
}

export const ScreenRepairPage: React.FC<ScreenRepairPageProps> = ({ onNavigate }) => {
  const commonScreenIssues = [
    {
      title: 'Cracked or Shattered Glass',
      desc: 'Physical fractures across the exterior protective glass layer following an accidental drop or impact.',
    },
    {
      title: 'Broken or Blank Display',
      desc: 'The phone powers on, vibrates, or rings, but the screen remains completely dark or shows blotches.',
    },
    {
      title: 'Touch Unresponsiveness & Dead Zones',
      desc: 'Areas of the display do not register finger taps, require excessive pressure, or register random phantom touches ("ghost touch").',
    },
    {
      title: 'Colored Lines & Display Flickering',
      desc: 'Vertical or horizontal colored bars (green, pink, or white lines) or rapid strobe-like display flickering.',
    },
    {
      title: 'Ink Spots / Liquid Bleed Spots',
      desc: 'Dark ink-like purple or black spots spreading across the internal display matrix indicating broken OLED/LCD cells.',
    },
    {
      title: 'Damaged Frame & Glass Separation',
      desc: 'The glass panel lifting away from the metal or plastic midframe, creating gaps that permit moisture and dust to enter.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16">
      {/* 1. Hero / Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/60 border border-blue-800/40 text-blue-300 text-xs font-medium mb-4">
          <Smartphone className="w-3.5 h-3.5 text-blue-400" />
          <span>Display Assessment & Replacement Support</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Mobile Screen Repair
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              If your smartphone suffered a cracked screen, distorted display colors, or an unresponsive touch digitizer, Star City Mobile Repairing provides assessment and replacement assistance in Quetta.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-emerald-300 bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-700/60 rounded-lg shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Ask About Screen Repair</span>
              </a>

              <a
                href={BUSINESS_INFO.phoneTel}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call +92 345 8919199</span>
              </a>
            </div>

            <div className="text-xs text-slate-400 flex items-center gap-2 pt-1">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>Malak Plaza, Abdul Sattar Shah Rd, Quetta · Open until 11 PM</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <TechGraphic type="screen-exploded" />
          </div>
        </div>
      </div>

      {/* 2. Common Screen-Related Problems */}
      <section className="bg-[#0b1220] border border-slate-800 rounded-2xl p-6 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
          Common Screen-Related Problems
        </h2>
        <p className="text-sm text-slate-400 max-w-3xl mb-6">
          Smartphone displays consist of multiple bonded layers including the outer protective glass, capacitive touch digitizer grid, polarization film, and the underlying OLED or LCD image matrix.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {commonScreenIssues.map((issue, idx) => (
            <div
              key={idx}
              className="bg-[#0f172a] border border-slate-800/80 rounded-xl p-5 space-y-2 hover:border-blue-500/30 transition-colors"
            >
              <h3 className="font-semibold text-white text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>{issue.title}</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {issue.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Screen Assessment Process */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-[#090f1d] border border-slate-800 rounded-2xl p-6 sm:p-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">
            How We Assess Screen Damage
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Customers can bring their smartphone to our shop at Malak Plaza for an initial inspection. Before proceeding, our technician checks whether the fault is limited to the exterior display assembly or involves motherboard display drivers:
          </p>

          <ul className="space-y-2.5 text-xs text-slate-300">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
              <span>Checking the frame for dents that might put pressure on a new replacement panel.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
              <span>Verifying touch responsiveness across all corners and the keyboard region.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
              <span>Testing front-facing sensors (ambient light, proximity sensor, and earpiece alignment).</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
              <span>Inspecting display flex ribbon seating to rule out simple connector dislodgement.</span>
            </li>
          </ul>

          <div className="pt-2">
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-emerald-300 bg-emerald-950/70 border border-emerald-700/60 rounded-md hover:bg-emerald-900 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>Send Photo of Broken Screen on WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 space-y-4">
          <h3 className="font-display font-semibold text-white text-base">
            What You Should Know
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Every smartphone model has distinct display panel specifications (IPS LCD, AMOLED, Super AMOLED, curved edges). Replacement options and availability depend on your exact device model and manufacturer.
          </p>

          <div className="p-3 bg-blue-950/30 border border-blue-800/40 rounded-lg text-xs text-blue-300 space-y-1">
            <div className="font-semibold">Bring Your Phone for Accurate Inspection:</div>
            <p className="text-slate-400">
              Visit Star City Mobile Repairing in Quetta or message us with your phone model number to discuss assessment options.
            </p>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800">
            <span>Shop Location: Malak Plaza, Quetta</span>
            <span className="text-blue-400 font-medium">Open until 11 PM</span>
          </div>
        </div>
      </section>

      {/* 4. Interactive Inquiry Builder */}
      <InquiryBuilder initialService="Screen Issue (Cracked / Black Display)" />
    </div>
  );
};
