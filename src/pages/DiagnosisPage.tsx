import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/business';
import { TechGraphic } from '../components/TechGraphic';
import { InquiryBuilder } from '../components/InquiryBuilder';
import {
  Search,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ArrowRight,
  ShieldAlert,
  Cpu,
  Zap,
  Activity,
  Layers,
  CheckCircle2,
} from 'lucide-react';

interface DiagnosisPageProps {
  onNavigate: (page: PageId) => void;
}

export const DiagnosisPage: React.FC<DiagnosisPageProps> = ({ onNavigate }) => {
  const diagnosticStages = [
    {
      num: '01',
      title: 'Intake & Symptom Cataloging',
      icon: Search,
      desc: 'When you bring your phone to Star City Mobile Repairing at Malak Plaza, our technician starts by cataloging exactly when the symptom appeared, whether there was physical impact, contact with moisture, or unusual charging behavior.',
      technicalFocus: 'Baseline history mapping to narrow down internal failure modes.',
    },
    {
      num: '02',
      title: 'Housing & Mechanical Assessment',
      icon: Layers,
      desc: 'We examine the phone chassis for bends, frame torquing, screen lifting, or back glass separation. Frame warping frequently places continuous mechanical stress on internal logic board solder joints.',
      technicalFocus: 'Structural inspection to rule out trace fractures under BGA chips.',
    },
    {
      num: '03',
      title: 'Bench Power Draw & Current Analysis',
      icon: Activity,
      desc: 'Using regulated bench power supplies and ammeters, we measure the micro-amp and milli-amp electrical draw before and after triggering the power button. An unexpected current spike indicates a short circuit, while zero current suggests an open trace or blown fuse.',
      technicalFocus: 'DC power curve benchmarking: primary rail (V_BAT), secondary rails (VDD_MAIN).',
    },
    {
      num: '04',
      title: 'Subsystem & Component Isolation',
      icon: Cpu,
      desc: 'If a device reboots or fails to power on, we disconnect peripheral modules one-by-one (front camera flex, charging sub-board, earpiece sensor, wireless coil). Often a shorted peripheral chip prevents the main processor from completing its boot sequence.',
      technicalFocus: 'Isolation of peripheral I2C and SPI buses to locate line grounding.',
    },
    {
      num: '05',
      title: 'Display & Battery Integrity Check',
      icon: Zap,
      desc: 'We independently test the battery cell voltage and impedance to confirm whether the battery can sustain current under load. We also test display output with test assemblies to determine whether screen darkness is caused by a bad display or a dead backlight IC.',
      technicalFocus: 'Separating display panel faults from motherboard backlight driver failures.',
    },
    {
      num: '06',
      title: 'Clear Report & Consultation',
      icon: CheckCircle2,
      desc: 'Once the problem is identified, we present our findings clearly without technical jargon. We explain what parts require repair or replacement, describe the feasibility, and provide you with honest recommendations before any work begins.',
      technicalFocus: 'Transparent advice with customer approval required prior to repair execution.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16">
      {/* 1. Header Section */}
      <div className="relative">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/60 border border-blue-800/40 text-blue-300 text-xs font-medium mb-4">
          <Search className="w-3.5 h-3.5 text-blue-400" />
          <span>Systematic Hardware & Software Fault Finding</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Comprehensive Mobile Device Diagnosis
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              When your smartphone stops working, guessing can lead to replacing the wrong component. Star City Mobile Repairing conducts systematic, bench-level testing to identify the exact cause of device failure.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call for Diagnosis Info</span>
              </a>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-emerald-300 bg-emerald-950/70 hover:bg-emerald-900 border border-emerald-700/60 rounded-lg transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Shop</span>
              </a>
            </div>

            <div className="pt-2 text-xs text-slate-400 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>Malak Plaza, Abdul Sattar Shah Rd, Quetta</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <TechGraphic type="diagnosis-multimeter" />
          </div>
        </div>
      </div>

      {/* 2. Common Scenarios Requiring Systematic Diagnosis */}
      <section className="bg-[#0b1220] border border-slate-800 rounded-2xl p-6 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
          When Does a Smartphone Need Professional Diagnosis?
        </h2>
        <p className="text-sm text-slate-400 max-w-3xl mb-6">
          Some faults are obvious—such as a physically shattered glass. However, many smartphone malfunctions are ambiguous and require electrical testing to diagnose accurately:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#0f172a] border border-slate-800/80 rounded-xl p-5 space-y-2">
            <div className="text-cyan-400 font-semibold text-sm">
              Phone Completely Dead (No Power)
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Could be a depleted battery, a damaged charging flex, a burned charging IC, or a dead CPU power line. Bench current testing tells us which part is failing before opening unnecessary shields.
            </p>
          </div>

          <div className="bg-[#0f172a] border border-slate-800/80 rounded-xl p-5 space-y-2">
            <div className="text-blue-400 font-semibold text-sm">
              Device Vibrates or Rings but Screen Is Black
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Could be a cracked internal OLED matrix, a broken display flex cable, or a blown backlight diode/filter on the motherboard. We test both sides to avoid charging for an unneeded screen.
            </p>
          </div>

          <div className="bg-[#0f172a] border border-slate-800/80 rounded-xl p-5 space-y-2">
            <div className="text-amber-400 font-semibold text-sm">
              Sudden Restarts or Overheating
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Could be battery gas buildup, a corrupted system update partition, a shorted ceramic capacitor drawing excess current, or a damaged power management chip.
            </p>
          </div>
        </div>
      </section>

      {/* 3. The 6-Stage Systematic Process */}
      <section className="space-y-6">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
            Our Systematic Approach
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
            How Star City Identifies Device Problems
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mt-1">
            We follow a standardized bench procedure designed to protect your device and isolate the true fault quickly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diagnosticStages.map((st) => {
            const Icon = st.icon;
            return (
              <div
                key={st.num}
                className="bg-[#0b1220] border border-slate-800/80 rounded-xl p-6 hover:border-blue-500/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-mono font-bold text-blue-500">
                      {st.num}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-blue-950/60 flex items-center justify-center text-blue-400">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-display font-semibold text-base text-white mb-2">
                    {st.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {st.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/70 text-[11px] text-cyan-300 font-mono">
                  {st.technicalFocus}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Visual Teardown / Circuit Graphic */}
      <section className="bg-[#090f1d] border border-slate-800 rounded-2xl p-6 sm:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-2xl font-bold text-white">
              Hardware Circuit Analysis & Board Level Checks
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              When an issue cannot be resolved by simple module swaps, our technicians inspect logic board circuits for damaged resistors, corroded traces, or broken power distribution rails.
            </p>

            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold">✓</span>
                <span>Testing diode mode values on connector pins against known reference ranges.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold">✓</span>
                <span>Inspecting solder pads under stereoscopic workbench magnification.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold">✓</span>
                <span>Confirming battery temperature sensor lines (BSI / NTC) are responsive.</span>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-md transition-colors"
              >
                <span>Ask Technician About Your Device</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <TechGraphic type="circuit-traces" />
          </div>
        </div>
      </section>

      {/* 5. Call to Action: Bring Your Device in for Assessment */}
      <section className="bg-gradient-to-r from-blue-950/70 to-slate-900 border border-blue-600/30 rounded-2xl p-6 sm:p-10 text-center space-y-5">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Bring Your Device In for Assessment
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Don't let an undiagnosed issue turn into permanent device failure. Visit Star City Mobile Repairing at Malak Plaza on Abdul Sattar Shah Road in Quetta for an honest, systematic evaluation.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href={BUSINESS_INFO.phoneTel}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-lg shadow-blue-900/50"
          >
            <Phone className="w-4 h-4" />
            <span>Call +92 345 8919199</span>
          </a>

          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-emerald-300 bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-600/50 rounded-lg shadow-md"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp Us Now</span>
          </a>
        </div>

        <div className="pt-2 text-xs text-slate-400">
          <span>Location: Malak Plaza, Abdul Sattar Shah Rd, Quetta · Open until 11 PM</span>
        </div>
      </section>

      {/* 6. Embedded Inquiry Builder */}
      <InquiryBuilder initialService="Complete Device Diagnosis (Unknown Cause)" />
    </div>
  );
};
