import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO, SERVICES_DATA, REPAIR_PROCESS_STEPS } from '../data/business';
import { TechGraphic } from '../components/TechGraphic';
import { InquiryBuilder } from '../components/InquiryBuilder';
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  Search,
  Smartphone,
  BatteryMedium,
  Zap,
  Cpu,
  Droplets,
  Wrench,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
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
    <div className="space-y-16 lg:space-y-24 pb-16">
      {/* 1. Hero Section */}
      <section className="relative pt-6 lg:pt-12 overflow-hidden">
        <div className="absolute inset-0 tech-radial-glow pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Headlines & Actions */}
            <div className="lg:col-span-7 space-y-6">
              {/* Location marker */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/40 border border-blue-800/40 text-blue-300 text-xs font-medium">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>Malak Plaza, Abdul Sattar Shah Rd, Quetta</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Professional Mobile Repair in Quetta
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                Reliable mobile phone repair services in Quetta for customers looking to restore, maintain, and troubleshoot their devices.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all shadow-lg shadow-blue-900/40 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>

                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-emerald-300 bg-emerald-950/70 hover:bg-emerald-900/80 border border-emerald-700/60 rounded-lg transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Us</span>
                </a>

                <button
                  onClick={() => onNavigate('diagnosis')}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 text-sm font-medium text-slate-300 hover:text-white bg-slate-800/70 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors"
                >
                  <span>Device Diagnosis</span>
                  <ArrowRight className="w-4 h-4 text-blue-400" />
                </button>
              </div>

              {/* Quick Hours and Walk-in note */}
              <div className="pt-2 flex items-center gap-4 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-blue-400" />
                  <span>{BUSINESS_INFO.hours}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                  <span>Walk-in device inspections</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Workbench Schematics & Teardown Graphic */}
            <div className="lg:col-span-5">
              <div className="relative">
                <TechGraphic type="smartphone-teardown" className="shadow-2xl shadow-blue-950/40" />
                
                {/* Floating Micro-Badge */}
                <div className="absolute -bottom-4 -left-3 sm:left-4 bg-[#091122]/95 border border-blue-500/30 rounded-lg p-3 shadow-xl backdrop-blur-md flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md bg-blue-600/20 flex items-center justify-center text-blue-400">
                    <Wrench className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Precision Electronics Bench</div>
                    <div className="text-[11px] text-slate-400">Star City Mobile Repairing · Quetta</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Hero Trust Strip (Strictly Factual) */}
      <section className="border-y border-slate-800/80 bg-[#070b14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800/80">
            <div className="py-2 px-3">
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-0.5">
                Specialization
              </div>
              <div className="text-sm font-bold text-white">Mobile Phone Repair</div>
            </div>

            <div className="py-2 px-3">
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-0.5">
                Location
              </div>
              <div className="text-sm font-bold text-blue-400">Quetta Location</div>
            </div>

            <div className="py-2 px-3">
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-0.5">
                Daily Hours
              </div>
              <div className="text-sm font-bold text-white">Open Until 11 PM</div>
            </div>

            <div className="py-2 px-3">
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-0.5">
                Customer Support
              </div>
              <div className="text-sm font-bold text-emerald-400">Call / WhatsApp Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Customer Journey Section: "Got a Phone Problem?" */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Got a Phone Problem?
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Identify what your phone is struggling with and connect directly with our repair team at Malak Plaza.
          </p>
        </div>

        {/* Problem-to-Solution Flow */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            { title: 'Cracked Screen', desc: 'Display broken or unreadable', target: 'screen-repair', icon: Smartphone },
            { title: 'Battery Problem', desc: 'Rapid drain or phone dies fast', target: 'battery-replacement', icon: BatteryMedium },
            { title: 'Not Charging', desc: 'Loose jack or zero current', target: 'charging-port-repair', icon: Zap },
            { title: 'Software Issue', desc: 'Bootloop, freeze, or crashes', target: 'software-system', icon: Cpu },
            { title: 'Water Damage', desc: 'Liquid exposure emergency', target: 'water-damage', icon: Droplets },
            { title: 'Need Diagnosis?', desc: 'Unknown device fault', target: 'diagnosis', icon: Search },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <button
                key={idx}
                onClick={() => onNavigate(item.target as PageId)}
                className="group p-4 rounded-xl bg-[#0b1220] border border-slate-800/80 hover:border-blue-500/50 hover:bg-[#0f172a] text-left transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-blue-950/60 border border-blue-800/40 flex items-center justify-center text-blue-400 mb-3 group-hover:scale-105 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="font-semibold text-white text-sm group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                    {item.desc}
                  </div>
                </div>
                <div className="mt-4 pt-2 border-t border-slate-800/60 flex items-center gap-1 text-[11px] text-blue-400 font-medium">
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all shadow-md shadow-blue-950"
          >
            <span>Talk to Star City</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 4. Services Overview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold mb-1">
              Workshop Capabilities
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Mobile Repair Services
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mt-1">
              Common repair assistance available at Star City Mobile Repairing in Quetta. Contact us to confirm your specific model and fault.
            </p>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors self-start md:self-auto"
          >
            <span>View all service details</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-[#0b1220] border border-slate-800 rounded-xl p-6 hover:border-blue-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0e172a] border border-slate-700/60 flex items-center justify-center">
                    {getServiceIcon(service.icon)}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wide">
                    {service.category}
                  </span>
                </div>

                <h3 className="font-display font-semibold text-base text-white group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Common Symptoms preview */}
                <div className="mt-4 pt-3 border-t border-slate-800/70">
                  <div className="text-[11px] text-slate-400 font-medium mb-1.5">
                    Common assistance includes:
                  </div>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {service.symptoms.slice(0, 2).map((symp, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-1.5">
                        <span className="text-blue-400 font-bold">·</span>
                        <span className="line-clamp-1">{symp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/70 flex items-center justify-between">
                <button
                  onClick={() => onNavigate(service.id)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-emerald-400 hover:text-emerald-300 font-medium"
                >
                  Ask via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Device Diagnosis Spotlight (Special User Request) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#0c162c] to-[#090f1d] border border-blue-500/30 rounded-2xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
                <Search className="w-3.5 h-3.5" />
                <span>Precision Diagnosis Service</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Not Sure What Is Wrong With Your Phone?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Modern phones encounter complex faults where screen, power IC, battery, or software issues can present identical symptoms. At Star City Mobile Repairing, we employ a systematic diagnostic process to pinpoint the exact root cause before recommending any repair.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>Current draw & ammeter power tests</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>Subsystem & motherboard isolation</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>Clear explanation of findings</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>No obligation consultation</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate('diagnosis')}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-md transition-all shadow-md"
                >
                  View Full Diagnostic Process
                </button>
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 text-xs font-semibold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900 border border-emerald-700/60 rounded-md transition-all"
                >
                  Inquire on WhatsApp
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <TechGraphic type="diagnosis-multimeter" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Quick Repair Process Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold mb-1">
            Standard Procedure
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            How Our Repair Process Works
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            A straightforward 5-step process designed to keep you informed from initial intake to final functional testing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {REPAIR_PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-[#0b1220] border border-slate-800 rounded-xl p-5 relative flex flex-col justify-between"
            >
              <div>
                <div className="text-2xl font-mono font-bold text-blue-500 mb-2">
                  {step.step}
                </div>
                <h3 className="font-display font-semibold text-sm text-white mb-1">
                  {step.title}
                </h3>
                <div className="text-xs text-blue-400 mb-2">
                  {step.subtitle}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/60 text-[11px] text-slate-400">
                <span>Malak Plaza workbench</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => onNavigate('repair-process')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>Learn detailed step-by-step workflow</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* 7. Interactive Repair Inquiry Builder */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InquiryBuilder />
      </section>

      {/* 8. Why Choose Star City & Local Presence */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-[#0a0f1c] border border-slate-800 rounded-2xl p-6 sm:p-10">
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
              Local Quetta Service Center
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Why Choose Star City Mobile Repairing?
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              We focus on practical, honest repair solutions for local phone owners in Quetta. Whether your device was damaged in an accident or is slowly failing, you receive direct communication from technicians who inspect your phone in person.
            </p>

            <ul className="space-y-3 pt-2 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <span><strong>Central Quetta Location:</strong> Situated at Malak Plaza on Abdul Sattar Shah Road for convenient local access.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <span><strong>Evening Availability:</strong> Open until 11:00 PM to accommodate customers after working hours.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <span><strong>Direct WhatsApp & Calls:</strong> Speak directly to our shop staff without complicated call centers or automated bots.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <span><strong>Systematic Inspection:</strong> We examine circuit boards and components methodically rather than guessing issues.</span>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('why-choose-us')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300"
              >
                <span>Read more about our approach</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 space-y-4">
            <h3 className="font-display font-semibold text-white text-base">
              Visit Star City Mobile Repairing
            </h3>
            
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <div className="text-white font-medium">Malak Plaza, Abdul Sattar Shah Rd</div>
                  <div className="text-slate-400">Quetta, 87300, Pakistan</div>
                  <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                    Plus Code: {BUSINESS_INFO.plusCode}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <a href={BUSINESS_INFO.phoneTel} className="text-white hover:text-blue-400 font-medium">
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                  <div className="text-[11px] text-slate-500">Call during business hours</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <div className="text-white font-medium">{BUSINESS_INFO.hours}</div>
                  <div className="text-[11px] text-slate-500">Open 7 days a week</div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex flex-col sm:flex-row gap-2">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-md transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Shop</span>
              </a>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 text-xs font-semibold text-emerald-300 bg-emerald-950/70 border border-emerald-700/60 rounded-md hover:bg-emerald-900 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
