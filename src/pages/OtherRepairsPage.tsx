import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/business';
import { InquiryBuilder } from '../components/InquiryBuilder';
import {
  Wrench,
  Volume2,
  Mic,
  Camera,
  Radio,
  Sliders,
  Phone,
  MessageCircle,
  MapPin,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

interface OtherRepairsPageProps {
  onNavigate: (page: PageId) => void;
}

export const OtherRepairsPage: React.FC<OtherRepairsPageProps> = ({ onNavigate }) => {
  const hardwareCategories = [
    {
      title: 'Speaker & Earpiece Issues',
      icon: Volume2,
      desc: 'Muffled call audio, distorted speaker playback, buzzing sounds at high volumes, or complete lack of ringing audio.',
      solution: 'Testing of acoustic meshes, amplifier IC circuits, and speaker module continuity.',
    },
    {
      title: 'Microphone & Audio Input Problems',
      icon: Mic,
      desc: 'Callers cannot hear your voice, recorded voice notes are faint or noisy, or secondary noise-cancelling microphones malfunction.',
      solution: 'Cleaning microphone acoustic ports and checking lower sub-board flex connectors.',
    },
    {
      title: 'Camera Modules & Cracked Lens Glass',
      icon: Camera,
      desc: 'Shaking camera view caused by broken optical stabilization (OIS), blurry focus, cracked sapphire/lens glass, or black viewfinder.',
      solution: 'Lens protector glass replacement and camera sensor module inspection.',
    },
    {
      title: 'Power & Volume Buttons',
      icon: Sliders,
      desc: 'Stuck buttons that no longer click, collapsed internal metal dome switches, or phones stuck in endless boot because the volume rocker is pressed permanently.',
      solution: 'Tactile switch flex ribbon inspection and chassis button clearing.',
    },
    {
      title: 'Wi-Fi, Bluetooth & Cellular Signal Issues',
      icon: Radio,
      desc: 'Weak Wi-Fi signal dropouts, inability to connect to Bluetooth headsets, or persistent "no service" / searching network indicators.',
      solution: 'Internal coaxial antenna cable verification and RF circuit grounding checks.',
    },
    {
      title: 'General Hardware Diagnosis',
      icon: Wrench,
      desc: 'Vibration motor failures, SIM card tray ejection mechanisms, housing frame alignment, and internal grounding clips.',
      solution: 'Comprehensive physical and electrical evaluation depending on device and fault.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16">
      {/* 1. Hero */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/60 border border-blue-800/40 text-blue-300 text-xs font-medium mb-4">
          <Wrench className="w-3.5 h-3.5 text-blue-400" />
          <span>Peripheral & Component Troubleshooting</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Other Mobile Device Hardware Repairs
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Smartphones rely on interconnected sub-assemblies for clear audio, responsive buttons, stable camera focus, and wireless reception. Star City Mobile Repairing provides repair assistance for common peripheral hardware issues in Quetta.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-emerald-300 bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-700/60 rounded-lg shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Ask About Device Issue</span>
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
            <h3 className="font-semibold text-white text-sm">
              Scope of Hardware Services
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Repair feasibility varies depending on your specific mobile model and the nature of the fault. Some issues can be solved by precision micro-cleaning or flex realignment, while others require component replacement. Contact us or visit our shop to verify feasibility for your device.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Hardware Categories */}
      <section className="bg-[#0b1220] border border-slate-800 rounded-2xl p-6 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
          Peripheral Hardware Categories
        </h2>
        <p className="text-sm text-slate-400 max-w-3xl mb-6">
          Common device issues brought in for assessment at our Quetta repair center:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {hardwareCategories.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#0f172a] border border-slate-800/80 rounded-xl p-5 space-y-3 hover:border-blue-500/30 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-blue-950/60 border border-blue-800/40 flex items-center justify-center text-blue-400 mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-semibold text-white text-sm">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mt-1">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/60 text-[11px] text-cyan-300">
                  {item.solution}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Inquiry Form */}
      <InquiryBuilder initialService="Speaker / Mic / Audio Issue" />
    </div>
  );
};
