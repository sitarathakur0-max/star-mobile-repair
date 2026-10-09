import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/business';
import { InquiryBuilder } from '../components/InquiryBuilder';
import {
  Cpu,
  Phone,
  MessageCircle,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  AlertOctagon,
  ArrowRight,
  RefreshCw,
} from 'lucide-react';

interface SoftwarePageProps {
  onNavigate: (page: PageId) => void;
}

export const SoftwarePage: React.FC<SoftwarePageProps> = ({ onNavigate }) => {
  const softwareServices = [
    {
      title: 'Operating System Boot Loop Recovery',
      desc: 'Assistance for phones repeatedly cycling through the manufacturer boot logo without reaching the home screen.',
    },
    {
      title: 'Failed Update & OS Crash Recovery',
      desc: 'Troubleshooting devices that froze or encountered partition errors following an interrupted system update.',
    },
    {
      title: 'Persistent App Crashes & System Freezes',
      desc: 'Resolving severe system-level application crashes, Google Play service errors, and recurring framework stopped alerts.',
    },
    {
      title: 'Sluggish Performance & Cache Overload',
      desc: 'Clearing damaged cache partitions, resolving memory fragmentation, and optimizing system responsiveness.',
    },
    {
      title: 'Device Setup & Backup Guidance',
      desc: 'Assisting customers with proper operating system setup, account synchronization, and data migration assistance.',
    },
    {
      title: 'Stock Firmware Flashing & Integrity Check',
      desc: 'Re-installing official, manufacturer-verified stock software to restore corrupted operating system partitions.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16">
      {/* 1. Hero */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-800/40 text-indigo-300 text-xs font-medium mb-4">
          <Cpu className="w-3.5 h-3.5 text-indigo-400" />
          <span>Legitimate Firmware & Operating System Support</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Software & System Services
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              When your smartphone suffers from continuous reboot loops, failed system updates, or severe software slowdowns, Star City Mobile Repairing provides legitimate troubleshooting and OS restoration in Quetta.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-emerald-300 bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-700/60 rounded-lg shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Software Inquiry</span>
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

          {/* Legal / Ethical Notice */}
          <div className="lg:col-span-5">
            <div className="bg-[#0f172a] border border-blue-900/40 rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-blue-400 font-semibold text-sm">
                <ShieldCheck className="w-5 h-5 shrink-0" />
                <span>Ethical & Legitimate Service Policy</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Star City Mobile Repairing operates strictly within legal and authorized repair standards. We provide legitimate recovery, stock firmware restoration, and troubleshooting.
              </p>
              <div className="text-xs text-slate-400 border-t border-slate-800 pt-2 space-y-1">
                <div>• No illegal bypassing of security protections.</div>
                <div>• No unauthorized IMEI modifications.</div>
                <div>• No services for reported lost or stolen devices.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Common Software Issues */}
      <section className="bg-[#0b1220] border border-slate-800 rounded-2xl p-6 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
          Software & System Troubleshooting Categories
        </h2>
        <p className="text-sm text-slate-400 max-w-3xl mb-6">
          Operating system corruption can make a functioning phone look like a permanent hardware brick. Here is how we assist with recovery:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {softwareServices.map((srv, idx) => (
            <div
              key={idx}
              className="bg-[#0f172a] border border-slate-800/80 rounded-xl p-5 space-y-2 hover:border-indigo-500/30 transition-colors"
            >
              <h3 className="font-semibold text-white text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                <span>{srv.title}</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {srv.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Diagnostic & Recovery Process */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-[#090f1d] border border-slate-800 rounded-2xl p-6 sm:p-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">
            How We Troubleshoot Software Faults
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Our technician isolates whether an issue is purely operating system software or rooted in underlying eMMC / UFS flash memory hardware degradation:
          </p>

          <ul className="space-y-2.5 text-xs text-slate-300">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
              <span>Verifying whether the phone can enter recovery or fastboot/download modes.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
              <span>Safe clearing of damaged cache partitions to attempt booting without data loss.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
              <span>Verifying flash memory health to ensure storage blocks are not read-only or physically dying.</span>
            </li>
          </ul>

          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-md transition-colors"
            >
              <span>Bring Phone to Malak Plaza</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 space-y-4">
          <h3 className="font-display font-semibold text-white text-base">
            Customer Advice on Data & Backups
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Whenever possible, our priority is preserving user data during system troubleshooting. However, in cases of severe partition corruption or full firmware re-flashing, data retention depends on system integrity.
          </p>
          <div className="p-3 bg-indigo-950/30 border border-indigo-800/40 rounded-lg text-xs text-indigo-300">
            <strong>Have an inquiry?</strong> Message us on WhatsApp with your phone model and the exact message or error on screen.
          </div>
        </div>
      </section>

      {/* 4. Inquiry Form */}
      <InquiryBuilder initialService="Software / Boot Loop / Update Error" />
    </div>
  );
};
