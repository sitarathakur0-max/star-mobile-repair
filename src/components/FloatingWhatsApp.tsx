import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

export const FloatingWhatsApp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside
      aria-label="Contact options"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip */}
      <div
        className={`hidden md:block transition-all duration-200 pointer-events-none ${
          isHovered
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-2'
        }`}
      >
        <span className="bg-slate-900/95 text-emerald-300 text-xs font-medium px-3 py-1.5 rounded-lg border border-emerald-500/30 shadow-lg whitespace-nowrap">
          Chat on WhatsApp · Fast Response
        </span>
      </div>

      {/* Button */}
      <a
        href={BUSINESS_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Star City Mobile Repairing on WhatsApp"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-lg shadow-emerald-950/60 hover:shadow-emerald-600/40 transition-all duration-200 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-900"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-400/20 animate-ping opacity-75 pointer-events-none" />
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white fill-white/10" />
      </a>
    </aside>
  );
};
