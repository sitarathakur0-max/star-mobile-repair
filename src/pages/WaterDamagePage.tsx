import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/business';
import { InquiryBuilder } from '../components/InquiryBuilder';
import {
  Droplets,
  AlertTriangle,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ShieldAlert,
  CheckCircle2,
  XCircle,
  ArrowRight,
} from 'lucide-react';

interface WaterDamagePageProps {
  onNavigate: (page: PageId) => void;
}

export const WaterDamagePage: React.FC<WaterDamagePageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16">
      {/* 1. Hero */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-950/60 border border-sky-800/40 text-sky-300 text-xs font-medium mb-4">
          <Droplets className="w-3.5 h-3.5 text-sky-400" />
          <span>Moisture Treatment & Chemical Corrosion Assessment</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Water & Liquid Damage Assessment
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              If your phone has been exposed to water, tea, rain, or liquid, rapid professional disassembly and drying is critical. Star City Mobile Repairing provides emergency moisture treatment in Quetta.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Immediately: +92 345 8919199</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-emerald-300 bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-700/60 rounded-lg shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Message on WhatsApp</span>
              </a>
            </div>

            <div className="text-xs text-slate-400 flex items-center gap-2 pt-1">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>Malak Plaza, Abdul Sattar Shah Rd, Quetta · Open until 11 PM</span>
            </div>
          </div>

          {/* Strong Warning Card as per user rules */}
          <div className="lg:col-span-5">
            <div className="bg-rose-950/30 border border-rose-600/40 rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                <AlertTriangle className="w-5 h-5 shrink-0" />
                <span>CRITICAL SAFETY WARNING</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                "Do not continue charging a liquid-damaged device. Professional inspection is recommended."
              </p>
              <p className="text-xs text-slate-300 leading-relaxed">
                Plugging electricity into wet electronics accelerates copper electrolysis. Within minutes, electrical current in the presence of liquid permanently dissolves circuit traces and burns motherboard chips.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Common Symptoms After Liquid Exposure */}
      <section className="bg-[#0b1220] border border-slate-800 rounded-2xl p-6 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
          Common Symptoms of Liquid Exposure
        </h2>
        <p className="text-sm text-slate-400 max-w-3xl mb-6">
          Liquid can seep through speaker meshes, SIM trays, or cracked seams, leading to symptoms that may appear immediately or days later:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#0f172a] border border-slate-800/80 rounded-xl p-5 space-y-2">
            <h3 className="font-semibold text-white text-sm text-sky-400">
              Phone Suddenly Stopped Working
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              The phone shuts off abruptly after contact with water due to safety shutdown triggers or a primary rail short circuit.
            </p>
          </div>

          <div className="bg-[#0f172a] border border-slate-800/80 rounded-xl p-5 space-y-2">
            <h3 className="font-semibold text-white text-sm text-sky-400">
              Display & Touch Glitches
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Flickering display, dark screen, condensation behind the glass, or unresponsive digitizer caused by liquid on flex contacts.
            </p>
          </div>

          <div className="bg-[#0f172a] border border-slate-800/80 rounded-xl p-5 space-y-2">
            <h3 className="font-semibold text-white text-sm text-sky-400">
              Charging Port Warnings
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Persistent "moisture detected in charging port" alerts or device heating up rapidly when connected to power.
            </p>
          </div>

          <div className="bg-[#0f172a] border border-slate-800/80 rounded-xl p-5 space-y-2">
            <h3 className="font-semibold text-white text-sm text-sky-400">
              Muffled Audio & Cameras
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Crackling earpiece, low speaker output, or fogged camera lenses that blur all captured photographs.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Do's and Don'ts */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* DO */}
        <div className="bg-[#091522] border border-emerald-800/40 rounded-xl p-6 space-y-3">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            <span>Immediate Actions TO Take</span>
          </div>
          <ul className="space-y-2 text-xs text-slate-300">
            <li>• Power off the device immediately if it is still turned on.</li>
            <li>• Remove SIM card tray and any protective case to allow trapped moisture to drain.</li>
            <li>• Wipe the exterior surfaces thoroughly with a dry clean cloth.</li>
            <li>• Bring the phone to Star City Mobile Repairing in Quetta as fast as possible for internal inspection.</li>
          </ul>
        </div>

        {/* DON'T */}
        <div className="bg-[#1f1015] border border-rose-800/40 rounded-xl p-6 space-y-3">
          <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm">
            <XCircle className="w-5 h-5 shrink-0" />
            <span>Actions to AVOID</span>
          </div>
          <ul className="space-y-2 text-xs text-slate-300">
            <li>• <strong>Do NOT plug into a charger</strong> under any circumstances.</li>
            <li>• Do NOT place in a bag of rice (rice starch enters ports and does not halt mineral corrosion).</li>
            <li>• Do NOT apply extreme heat with a hair dryer (this melts internal gaskets and forces moisture deeper into boards).</li>
            <li>• Do NOT repeatedly press power buttons trying to force the device on.</li>
          </ul>
        </div>
      </section>

      {/* 4. Realistic Recovery Expectation */}
      <section className="bg-[#0a0f1c] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
        <h3 className="font-display font-semibold text-white text-base">
          Realistic Technical Assessment
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
          Because liquid corrosion depends heavily on how quickly the phone was disconnected from power, the minerals present in the liquid, and the extent of internal short circuits, no honest technician can guarantee that every liquid-damaged phone can be saved. Our goal is to conduct a professional assessment, clean oxidized corrosion, and inspect whether essential components or user data can be recovered.
        </p>
        <div className="pt-2 text-xs text-blue-400 font-mono">
          ASSESSMENT LOCATION: MALAK PLAZA, ABDUL SATTAR SHAH RD, QUETTA
        </div>
      </section>

      {/* 5. Inquiry Form */}
      <InquiryBuilder initialService="Water or Liquid Damage" />
    </div>
  );
};
