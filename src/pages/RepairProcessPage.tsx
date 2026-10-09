import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO, REPAIR_PROCESS_STEPS } from '../data/business';
import { InquiryBuilder } from '../components/InquiryBuilder';
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

interface RepairProcessPageProps {
  onNavigate: (page: PageId) => void;
}

export const RepairProcessPage: React.FC<RepairProcessPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16">
      {/* 1. Header */}
      <div>
        <div className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold mb-2">
          Step-by-Step Procedure
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          How Our Repair Process Works
        </h1>
        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mt-3 leading-relaxed">
          At Star City Mobile Repairing, we believe in a transparent, structured workflow. From your initial inquiry to final handover, every stage is designed to ensure you know exactly what is happening with your mobile phone.
        </p>
      </div>

      {/* 2. Detailed Timeline Workflow */}
      <div className="space-y-6">
        {REPAIR_PROCESS_STEPS.map((step, idx) => (
          <div
            key={step.step}
            className="bg-[#0b1220] border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-blue-500/40 transition-all grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
          >
            {/* Step Number Badge */}
            <div className="lg:col-span-2 flex items-center lg:flex-col lg:items-start gap-4">
              <span className="text-4xl sm:text-5xl font-mono font-extrabold text-blue-500">
                {step.step}
              </span>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Phase {idx + 1}
              </span>
            </div>

            {/* Step Content */}
            <div className="lg:col-span-6 space-y-2">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                {step.title}
              </h2>
              <div className="text-xs font-semibold text-blue-400 uppercase tracking-wide">
                {step.subtitle}
              </div>
              <p className="text-sm text-slate-300 leading-relaxed pt-1">
                {step.description}
              </p>
            </div>

            {/* Key Checklist Points */}
            <div className="lg:col-span-4 bg-[#0f172a] border border-slate-800/80 rounded-xl p-4 space-y-2">
              <div className="text-xs font-mono text-cyan-300 uppercase tracking-wider">
                What Happens in this Stage:
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {step.keyDetails.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Honest Turnaround Notice */}
      <section className="bg-[#090f1d] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
        <div className="flex items-center gap-2 text-blue-400 font-semibold text-sm">
          <ShieldCheck className="w-5 h-5 shrink-0" />
          <span>Careful Bench Time vs. Rushed Work</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          We do not offer hasty generic claims like "fixed in 30 minutes". Thorough device testing, adhesive curing, precision soldering, and battery health checks require measured technical attention. When you bring your phone to Malak Plaza, our technician will provide an honest turnaround estimate based on your specific phone model and the severity of the fault.
        </p>
      </section>

      {/* 4. Inquiry Form */}
      <InquiryBuilder />
    </div>
  );
};
