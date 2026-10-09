import React from 'react';

interface TechGraphicProps {
  type: 'smartphone-teardown' | 'circuit-traces' | 'diagnosis-multimeter' | 'screen-exploded';
  className?: string;
}

export const TechGraphic: React.FC<TechGraphicProps> = ({ type, className = '' }) => {
  if (type === 'smartphone-teardown') {
    return (
      <div className={`relative overflow-hidden rounded-xl bg-[#0b1222] border border-blue-500/20 p-6 ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-transparent to-cyan-950/10 pointer-events-none" />
        <svg
          viewBox="0 0 500 320"
          className="w-full h-auto drop-shadow-md select-none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle grid lines */}
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(59, 130, 246, 0.08)" strokeWidth="0.5" />
          </pattern>
          <rect width="500" height="320" fill="url(#grid)" />

          {/* Smartphone chassis outline */}
          <rect x="160" y="30" width="180" height="260" rx="20" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6 3" />
          <rect x="175" y="45" width="150" height="230" rx="12" fill="#0f172a" stroke="#1e3a8a" strokeWidth="1.5" />

          {/* Logic Board Section (Top) */}
          <path d="M185 55 H315 V135 H245 V145 H185 Z" fill="#0c1f38" stroke="#60a5fa" strokeWidth="1.5" />
          {/* CPU / SoC shield */}
          <rect x="200" y="70" width="45" height="45" rx="3" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.2" />
          <text x="222" y="96" fill="#93c5fd" fontSize="9" fontFamily="monospace" textAnchor="middle">
            SoC
          </text>
          {/* Power IC */}
          <rect x="260" y="72" width="28" height="28" rx="2" fill="#1e293b" stroke="#60a5fa" strokeWidth="1" />
          <text x="274" y="89" fill="#60a5fa" fontSize="8" fontFamily="monospace" textAnchor="middle">
            PMIC
          </text>
          {/* Memory chip */}
          <rect x="260" y="106" width="42" height="22" rx="2" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" />
          <text x="281" y="120" fill="#38bdf8" fontSize="8" fontFamily="monospace" textAnchor="middle">
            NAND
          </text>

          {/* Battery Cavity (Middle) */}
          <rect x="185" y="150" width="130" height="85" rx="4" fill="#0f1d33" stroke="#2563eb" strokeWidth="1.2" />
          <text x="250" y="196" fill="#94a3b8" fontSize="10" fontFamily="sans-serif" textAnchor="middle" letterSpacing="1">
            LI-ION CELL CAVITY
          </text>
          <path d="M 240 160 H 260" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />

          {/* Sub-board (Charging Port at bottom) */}
          <rect x="195" y="245" width="110" height="22" rx="3" fill="#0c1f38" stroke="#38bdf8" strokeWidth="1.2" />
          <rect x="235" y="255" width="30" height="10" rx="2" fill="#334155" stroke="#93c5fd" strokeWidth="1" />
          <text x="250" y="263" fill="#38bdf8" fontSize="7" fontFamily="monospace" textAnchor="middle">
            USB-C
          </text>

          {/* Flex ribbon cables */}
          <path d="M 215 140 V 245" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 2" />
          <path d="M 285 135 V 245" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 2" />

          {/* Diagnostic pointers & measurement lines */}
          {/* Top Left Probe */}
          <line x1="90" y1="92" x2="195" y2="92" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="195" cy="92" r="3" fill="#38bdf8" />
          <rect x="20" y="80" width="80" height="24" rx="4" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
          <text x="60" y="96" fill="#7dd3fc" fontSize="9" fontFamily="monospace" textAnchor="middle">
            TEST: VDD_CORE
          </text>

          {/* Bottom Right Probe */}
          <line x1="305" y1="256" x2="410" y2="256" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="305" cy="256" r="3" fill="#38bdf8" />
          <rect x="400" y="244" width="85" height="24" rx="4" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
          <text x="442" y="260" fill="#7dd3fc" fontSize="9" fontFamily="monospace" textAnchor="middle">
            5.0V / 2.0A CHG
          </text>

          {/* Calibrated precision tools on desk */}
          <g transform="translate(370, 70)">
            <rect x="0" y="0" width="6" height="90" rx="3" fill="#475569" stroke="#94a3b8" strokeWidth="0.5" />
            <polygon points="3,-10 0,0 6,0" fill="#cbd5e1" />
            <text x="12" y="45" fill="#64748b" fontSize="8" fontFamily="monospace">
              PROBE
            </text>
          </g>

          <g transform="translate(70, 180)">
            <rect x="0" y="0" width="8" height="80" rx="2" fill="#334155" stroke="#64748b" strokeWidth="0.5" />
            <polygon points="4,90 0,80 8,80" fill="#94a3b8" />
            <text x="-4" y="45" fill="#64748b" fontSize="8" fontFamily="monospace" textAnchor="end">
              TWEEZERS
            </text>
          </g>
        </svg>
      </div>
    );
  }

  if (type === 'circuit-traces') {
    return (
      <div className={`relative overflow-hidden rounded-xl bg-[#090f1d] border border-blue-500/20 p-6 ${className}`}>
        <svg viewBox="0 0 400 240" className="w-full h-auto select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Logic circuit diagram */}
          <path d="M 30 50 H 120 V 90 H 220 V 160 H 350" stroke="#3b82f6" strokeWidth="1.5" />
          <path d="M 50 180 H 140 V 130 H 260 V 80 H 370" stroke="#06b6d4" strokeWidth="1.5" />
          <path d="M 120 90 V 130" stroke="#60a5fa" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M 220 160 V 200 H 320" stroke="#3b82f6" strokeWidth="1" />

          {/* Test Points */}
          <circle cx="30" cy="50" r="4" fill="#3b82f6" stroke="#93c5fd" strokeWidth="1.5" />
          <circle cx="120" cy="90" r="4" fill="#06b6d4" stroke="#a5f3fc" strokeWidth="1.5" />
          <circle cx="220" cy="160" r="4" fill="#3b82f6" stroke="#93c5fd" strokeWidth="1.5" />
          <circle cx="260" cy="80" r="4" fill="#06b6d4" stroke="#a5f3fc" strokeWidth="1.5" />
          <circle cx="350" cy="160" r="4" fill="#10b981" stroke="#a7f3d0" strokeWidth="1.5" />

          {/* Component Blocks */}
          <rect x="140" y="35" width="60" height="30" rx="4" fill="#1e293b" stroke="#3b82f6" strokeWidth="1" />
          <text x="170" y="54" fill="#bfdbfe" fontSize="8" fontFamily="monospace" textAnchor="middle">
            LDO REG
          </text>

          <rect x="240" y="135" width="70" height="35" rx="4" fill="#1e293b" stroke="#06b6d4" strokeWidth="1" />
          <text x="275" y="157" fill="#a5f3fc" fontSize="8" fontFamily="monospace" textAnchor="middle">
            I2C SENSOR
          </text>
        </svg>
      </div>
    );
  }

  if (type === 'diagnosis-multimeter') {
    return (
      <div className={`relative overflow-hidden rounded-xl bg-[#090f1d] border border-blue-500/20 p-5 ${className}`}>
        <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono text-slate-300 uppercase tracking-wider">
              Bench Power Analyzer
            </span>
          </div>
          <span className="text-xs font-mono text-blue-400">STAR CITY DIAGNOSTIC</span>
        </div>

        <div className="grid grid-cols-3 gap-3 text-center mb-4">
          <div className="bg-[#0f172a] p-2.5 rounded-lg border border-slate-800">
            <div className="text-[10px] text-slate-400 font-mono">VOLTAGE</div>
            <div className="text-lg font-mono font-bold text-cyan-400">4.18 V</div>
            <div className="text-[10px] text-emerald-400">NOMINAL</div>
          </div>
          <div className="bg-[#0f172a] p-2.5 rounded-lg border border-slate-800">
            <div className="text-[10px] text-slate-400 font-mono">CURRENT</div>
            <div className="text-lg font-mono font-bold text-blue-400">1.85 A</div>
            <div className="text-[10px] text-emerald-400">ACTIVE CHG</div>
          </div>
          <div className="bg-[#0f172a] p-2.5 rounded-lg border border-slate-800">
            <div className="text-[10px] text-slate-400 font-mono">RESISTANCE</div>
            <div className="text-lg font-mono font-bold text-slate-200">0.08 Ω</div>
            <div className="text-[10px] text-blue-400">NORMAL</div>
          </div>
        </div>

        <div className="text-[11px] text-slate-400 flex items-center justify-between border-t border-slate-800/80 pt-2.5">
          <span>Short Circuit Detection: Clear</span>
          <span className="text-emerald-400 font-medium">Ready for Repair</span>
        </div>
      </div>
    );
  }

  // screen exploded
  return (
    <div className={`relative overflow-hidden rounded-xl bg-[#090f1d] border border-blue-500/20 p-6 ${className}`}>
      <svg viewBox="0 0 450 260" className="w-full h-auto select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Layer 1: Outer Glass / Digitizer */}
        <g transform="translate(60, 40)">
          <rect x="0" y="0" width="120" height="180" rx="10" stroke="#38bdf8" strokeWidth="1.5" fill="#0c1e38" fillOpacity="0.4" />
          <text x="60" y="95" fill="#7dd3fc" fontSize="9" fontFamily="sans-serif" textAnchor="middle">
            Outer Glass & Touch Layer
          </text>
        </g>

        {/* Connecting dotted lines showing layer explosion */}
        <line x1="180" y1="50" x2="210" y2="50" stroke="#60a5fa" strokeDasharray="3 3" />
        <line x1="180" y1="210" x2="210" y2="210" stroke="#60a5fa" strokeDasharray="3 3" />

        {/* Layer 2: Display Panel OLED/LCD */}
        <g transform="translate(210, 40)">
          <rect x="0" y="0" width="120" height="180" rx="8" stroke="#3b82f6" strokeWidth="1.5" fill="#0f172a" />
          <rect x="10" y="15" width="100" height="150" fill="#0284c7" fillOpacity="0.15" stroke="#0284c7" strokeWidth="1" />
          <text x="60" y="90" fill="#93c5fd" fontSize="9" fontFamily="sans-serif" textAnchor="middle">
            Display Panel
          </text>
          <text x="60" y="105" fill="#64748b" fontSize="8" fontFamily="monospace" textAnchor="middle">
            (OLED / LCD)
          </text>
        </g>

        {/* Connecting dotted lines to chassis frame */}
        <line x1="330" y1="50" x2="360" y2="50" stroke="#60a5fa" strokeDasharray="3 3" />
        <line x1="330" y1="210" x2="360" y2="210" stroke="#60a5fa" strokeDasharray="3 3" />

        {/* Layer 3: Midframe / Chassis */}
        <g transform="translate(360, 40)">
          <rect x="0" y="0" width="50" height="180" rx="6" stroke="#64748b" strokeWidth="1.5" fill="#1e293b" />
          <text x="25" y="95" fill="#94a3b8" fontSize="8" fontFamily="sans-serif" textAnchor="middle">
            Frame
          </text>
        </g>
      </svg>
    </div>
  );
};
