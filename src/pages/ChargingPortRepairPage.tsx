import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/business';
import { InquiryBuilder } from '../components/InquiryBuilder';
import {
  Zap,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

interface ChargingPortRepairPageProps {
  onNavigate: (page: PageId) => void;
}

export const ChargingPortRepairPage: React.FC<ChargingPortRepairPageProps> = ({ onNavigate }) => {
  const chargingSymptoms = [
    {
      title: 'Phone Not Charging at All',
      desc: 'Plugging in the charger produces zero reaction; no charging icon, sound, or battery animation appears on screen.',
    },
    {
      title: 'Charging Disconnects Frequently',
      desc: 'The phone starts charging, but immediately disconnects if the cable is touched, moved, or shifted slightly.',
    },
    {
      title: 'Loose Charging Connection',
      desc: 'The USB-C, Lightning, or Micro-USB plug feels wobbly inside the port and easily falls out under its own weight.',
    },
    {
      title: 'Holding Cable at an Angle Required',
      desc: 'Current flows only when the cable is wedged or supported at an awkward tension angle against a table.',
    },
    {
      title: 'Abnormally Slow Charging Speeds',
      desc: 'The phone indicates charging, but takes hours to gain just a few percent, even when connected to an authentic adapter.',
    },
    {
      title: 'Port Overheating or Burning Smell',
      desc: 'The bottom edge of the phone becomes scorching hot when connected to power, indicating shorted contact pins.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16">
      {/* 1. Hero */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-950/60 border border-amber-800/40 text-amber-300 text-xs font-medium mb-4">
          <Zap className="w-3.5 h-3.5 text-amber-400" />
          <span>USB-C, Lightning & Micro-USB Port Diagnostics</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Charging Port Repair
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              If your phone refuses to charge, continuously disconnects, or has a loose charging jack, Star City Mobile Repairing provides inspection and port repair assistance in Quetta.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-emerald-300 bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-700/60 rounded-lg shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Ask About Charging Issue</span>
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

          <div className="lg:col-span-5 bg-[#0b1220] border border-slate-800 rounded-xl p-6 space-y-3">
            <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>Diagnostic Inspection Before Repair</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Charging problems can be caused by compressed pocket lint, bent metallic pins, a broken sub-board solder joint, or a damaged power IC on the main logic board. Bringing your device in allows our technician to identify the exact cause rather than replacing parts blindly.
            </p>
            <div className="text-[11px] text-slate-500 font-mono">
              INSPECTION AT MALAK PLAZA WORKBENCH
            </div>
          </div>
        </div>
      </div>

      {/* 2. Common Symptoms */}
      <section className="bg-[#0b1220] border border-slate-800 rounded-2xl p-6 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
          Common Charging Port Symptoms
        </h2>
        <p className="text-sm text-slate-400 max-w-3xl mb-6">
          Daily insertion and removal of charging cables places repetitive mechanical stress on the small electrical contacts inside the phone. Here are common symptoms:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {chargingSymptoms.map((symp, idx) => (
            <div
              key={idx}
              className="bg-[#0f172a] border border-slate-800/80 rounded-xl p-5 space-y-2 hover:border-amber-500/30 transition-colors"
            >
              <h3 className="font-semibold text-white text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>{symp.title}</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {symp.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Inspection & Repair Process */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-[#090f1d] border border-slate-800 rounded-2xl p-6 sm:p-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">
            How We Identify the Cause
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Star City Mobile Repairing uses a methodical approach to diagnose charging faults:
          </p>

          <ul className="space-y-2.5 text-xs text-slate-300">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
              <span><strong>Precision Port Examination:</strong> We inspect inside the jack under magnification to check for compacted dust, lint, or bent contact pins.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
              <span><strong>Digital USB Ammeter Testing:</strong> We measure the exact voltage (V) and current draw (A) the phone draws from a calibrated power supply.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
              <span><strong>Sub-Board vs. Mainboard Check:</strong> We determine whether the fault is on the bottom daughter-board or further upstream on the main motherboard charging circuits.</span>
            </li>
          </ul>

          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-md transition-colors"
            >
              <span>Visit Shop in Quetta</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 space-y-4">
          <h3 className="font-display font-semibold text-white text-base">
            Helpful Advice Before Visiting
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Avoid sticking safety pins, needles, or metal paperclips into your phone's charging port. Doing so can easily short out the 5V power pin against ground pins or permanently shear off delicate golden pins.
          </p>

          <div className="p-3 bg-amber-950/30 border border-amber-800/40 rounded-lg text-xs text-amber-300">
            <strong>Need advice?</strong> If your phone is completely dead and will not charge, bring your standard charging cable along so we can test both the phone and cable together.
          </div>
        </div>
      </section>

      {/* 4. Inquiry Form */}
      <InquiryBuilder initialService="Charging Port / Not Charging" />
    </div>
  );
};
