import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/business';
import { Phone, MapPin, Clock, MessageCircle, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050810] border-t border-slate-800/80 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Brand & Overview */}
          <div className="space-y-4">
            <div>
              <div className="font-display font-bold text-white text-lg tracking-tight uppercase">
                Star City
              </div>
              <div className="text-xs text-blue-400 font-semibold tracking-wider uppercase">
                Mobile Repairing
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Professional mobile phone repair center located at Malak Plaza on Abdul Sattar Shah Rd in Quetta. Providing technical assessment and repair services for smartphones across major mobile brands.
            </p>
            <div className="pt-1 flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Systematic assessment · Open until 11 PM</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-display text-xs font-bold text-white tracking-wider uppercase mb-4 text-blue-400">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-blue-400 transition-colors text-slate-400 hover:underline"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-blue-400 transition-colors text-slate-400 hover:underline"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-blue-400 transition-colors text-slate-400 hover:underline"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('diagnosis')}
                  className="hover:text-blue-400 transition-colors text-slate-400 hover:underline"
                >
                  Device Diagnosis
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('repair-process')}
                  className="hover:text-blue-400 transition-colors text-slate-400 hover:underline"
                >
                  Repair Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('why-choose-us')}
                  className="hover:text-blue-400 transition-colors text-slate-400 hover:underline"
                >
                  Why Choose Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('reviews')}
                  className="hover:text-blue-400 transition-colors text-slate-400 hover:underline"
                >
                  Customer Feedback
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('faq')}
                  className="hover:text-blue-400 transition-colors text-slate-400 hover:underline"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('gallery')}
                  className="hover:text-blue-400 transition-colors text-slate-400 hover:underline"
                >
                  Workshop Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-blue-400 transition-colors text-slate-400 hover:underline"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-display text-xs font-bold text-white tracking-wider uppercase mb-4 text-blue-400">
              Services
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => handleNav('screen-repair')}
                  className="hover:text-blue-400 transition-colors text-slate-400 hover:underline"
                >
                  Screen Repair
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('battery-replacement')}
                  className="hover:text-blue-400 transition-colors text-slate-400 hover:underline"
                >
                  Battery Replacement
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('charging-port-repair')}
                  className="hover:text-blue-400 transition-colors text-slate-400 hover:underline"
                >
                  Charging Port Repair
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('software-system')}
                  className="hover:text-blue-400 transition-colors text-slate-400 hover:underline"
                >
                  Software Troubleshooting
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('water-damage')}
                  className="hover:text-blue-400 transition-colors text-slate-400 hover:underline"
                >
                  Water / Liquid Damage
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('other-repairs')}
                  className="hover:text-blue-400 transition-colors text-slate-400 hover:underline"
                >
                  General Mobile Repair
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-4">
            <h3 className="font-display text-xs font-bold text-white tracking-wider uppercase mb-4 text-blue-400">
              Contact
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <a
                    href={BUSINESS_INFO.phoneTel}
                    className="text-white hover:text-blue-400 transition-colors font-medium"
                  >
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                  <p className="text-[11px] text-slate-500">Direct phone calls</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-slate-200">Malak Plaza, Abdul Sattar Shah Rd</p>
                  <p className="text-slate-400">Quetta, 87300, Pakistan</p>
                  <p className="text-[11px] text-slate-500 font-mono mt-0.5">
                    Plus Code: {BUSINESS_INFO.plusCode}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-slate-200">{BUSINESS_INFO.hours}</p>
                  <p className="text-[11px] text-slate-500">Evening visits welcome</p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-700/50 rounded-md transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© Star City Mobile Repairing. All rights reserved.</p>
          <p className="text-[11px] text-slate-600">
            Malak Plaza, Abdul Sattar Shah Rd, Quetta, Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
};
