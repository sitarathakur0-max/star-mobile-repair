import React, { useState } from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/business';
import { TechGraphic } from '../components/TechGraphic';
import { InquiryBuilder } from '../components/InquiryBuilder';
import {
  Camera,
  Smartphone,
  Wrench,
  Search,
  Activity,
  Layers,
  Cpu,
  Info,
  ArrowRight,
} from 'lucide-react';

interface GalleryPageProps {
  onNavigate: (page: PageId) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'workbench' | 'diagnostics' | 'components'>('all');

  const galleryItems = [
    {
      id: 'item-1',
      title: 'Smartphone Teardown & Component Mapping',
      category: 'components',
      desc: 'Illustrative schematic showing logic board placement, SoC shielding, battery cavity, and lower charging sub-board.',
      graphicType: 'smartphone-teardown' as const,
    },
    {
      id: 'item-2',
      title: 'Digital Multimeter & Ammeter Power Testing',
      category: 'diagnostics',
      desc: 'Illustrative bench instrument display depicting voltage regulation, milliamp current intake, and short-circuit detection.',
      graphicType: 'diagnosis-multimeter' as const,
    },
    {
      id: 'item-3',
      title: 'Exploded Display Assembly & Frame Alignment',
      category: 'components',
      desc: 'Technical visual detailing the relationship between outer digitizer glass, OLED/LCD panel matrix, and aluminum mid-frame.',
      graphicType: 'screen-exploded' as const,
    },
    {
      id: 'item-4',
      title: 'Printed Circuit Board Logic Traces & Test Points',
      category: 'diagnostics',
      desc: 'Schematic representation of power rails, diode mode test pads, and sensor bus routing on smartphone logic boards.',
      graphicType: 'circuit-traces' as const,
    },
  ];

  const filteredItems = galleryItems.filter(
    (item) => activeTab === 'all' || item.category === activeTab
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16">
      {/* 1. Header */}
      <div>
        <div className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold mb-2">
          Technical Workstations & Equipment
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Workshop & Electronics Gallery
        </h1>
        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mt-3 leading-relaxed">
          Explore technical schematics, diagnostic test interfaces, and component anatomy relevant to mobile phone maintenance and repair procedures.
        </p>

        {/* Mandatory Transparency Note as per user rules */}
        <div className="mt-4 p-3.5 bg-blue-950/40 border border-blue-800/40 rounded-xl flex items-start gap-3 text-xs text-slate-300 max-w-3xl">
          <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
          <p>
            <strong>Transparency Notice:</strong> The visuals and technical schematics displayed on this page serve as illustrative representations of electronics bench procedures and smartphone anatomy, rather than photographic representations of physical shop interiors.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="mt-8 flex flex-wrap gap-1.5 p-1 bg-[#0b1220] border border-slate-800 rounded-xl max-w-fit">
          {[
            { id: 'all', label: 'All Visuals' },
            { id: 'diagnostics', label: 'Diagnostics & Testing' },
            { id: 'components', label: 'Component Anatomy' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* 2. Gallery Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-[#0b1220] border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-blue-500/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="mb-3">
                <span className="text-[11px] font-mono text-cyan-300 uppercase tracking-wide">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold text-white mt-0.5">
                  {item.title}
                </h3>
              </div>

              <TechGraphic type={item.graphicType} />
            </div>

            <p className="text-xs text-slate-400 pt-2 border-t border-slate-800/70 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* 3. Workbench Tools Overview */}
      <section className="bg-[#090f1d] border border-slate-800 rounded-2xl p-6 sm:p-10 space-y-6">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold mb-1">
            Technical Precision Standards
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Precision Mobile Electronics Tools
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mt-1">
            Modern mobile phone service relies on specialized bench tools to avoid damaging fragile internal ribbon connectors and logic chips.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-sm">
          <div className="bg-[#0f172a] border border-slate-800/80 rounded-xl p-4 space-y-2">
            <div className="font-semibold text-white text-sm text-blue-400">
              Anti-Static ESD Mats
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Conductive grounded workbench surfaces that neutralize electrostatic discharge before it can puncture microscopic transistor gates.
            </p>
          </div>

          <div className="bg-[#0f172a] border border-slate-800/80 rounded-xl p-4 space-y-2">
            <div className="font-semibold text-white text-sm text-cyan-400">
              Calibrated Thermal Plates
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Temperature-controlled heating plates that soften waterproof frame adhesives without warping lithium battery cells or burning polarizers.
            </p>
          </div>

          <div className="bg-[#0f172a] border border-slate-800/80 rounded-xl p-4 space-y-2">
            <div className="font-semibold text-white text-sm text-emerald-400">
              Digital Bench DC Supplies
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Regulated voltage injectors with current limits used to safely power phones on the bench and measure milliamp boot sequences.
            </p>
          </div>

          <div className="bg-[#0f172a] border border-slate-800/80 rounded-xl p-4 space-y-2">
            <div className="font-semibold text-white text-sm text-amber-400">
              Inspection Magnification
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Stereo optical inspection used to verify solder bridge clearance, flex cable micro-fractures, and charging port pin alignments.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Inquiry Form */}
      <InquiryBuilder />
    </div>
  );
};
