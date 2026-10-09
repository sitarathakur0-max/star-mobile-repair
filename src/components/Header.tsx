import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/business';
import { Phone, MessageCircle, Menu, X, ChevronDown } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: { label: string; id: PageId }[] = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Diagnosis', id: 'diagnosis' },
    { label: 'Process', id: 'repair-process' },
    { label: 'Why Us', id: 'why-choose-us' },
    { label: 'Reviews', id: 'reviews' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Contact', id: 'contact' },
  ];

  const serviceSubItems: { label: string; id: PageId }[] = [
    { label: 'All Services Overview', id: 'services' },
    { label: 'Comprehensive Diagnosis', id: 'diagnosis' },
    { label: 'Screen Repair', id: 'screen-repair' },
    { label: 'Battery Replacement', id: 'battery-replacement' },
    { label: 'Charging Port Repair', id: 'charging-port-repair' },
    { label: 'Software & System Services', id: 'software-system' },
    { label: 'Water / Liquid Damage', id: 'water-damage' },
    { label: 'Other Hardware Repairs', id: 'other-repairs' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 border-b ${
        isScrolled
          ? 'bg-[#080d17]/95 backdrop-blur-md border-blue-900/30 py-2.5 shadow-lg shadow-black/40'
          : 'bg-[#080d17] border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Zone 1: Brand Wordmark (Clean single-element brand text as per constitution) */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
          >
            <div className="flex flex-col">
              <span className="font-display font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors text-base sm:text-lg leading-tight uppercase">
                Star City
              </span>
              <span className="text-[10px] sm:text-xs tracking-wider text-blue-400 font-semibold uppercase">
                Mobile Repairing
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-sm font-medium">
            {navLinks.map((item) => {
              const isActive = currentPage === item.id;
              if (item.id === 'services') {
                return (
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  >
                    <button
                      onClick={() => handleNavClick('services')}
                      className={`flex items-center gap-1 transition-colors whitespace-nowrap py-1 ${
                        currentPage.startsWith('service') ||
                        currentPage === 'screen-repair' ||
                        currentPage === 'battery-replacement' ||
                        currentPage === 'charging-port-repair' ||
                        currentPage === 'software-system' ||
                        currentPage === 'water-damage' ||
                        currentPage === 'other-repairs' ||
                        currentPage === 'services'
                          ? 'text-blue-400 font-semibold'
                          : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      <span>Services</span>
                      <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                    </button>

                    {/* Services Dropdown */}
                    {isServicesDropdownOpen && (
                      <div className="absolute top-full left-0 pt-2 w-64 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                        <div className="bg-[#0b1220] border border-blue-900/40 rounded-lg p-2 shadow-xl shadow-black/80 space-y-1">
                          {serviceSubItems.map((sub) => (
                            <button
                              key={sub.id}
                              onClick={() => handleNavClick(sub.id)}
                              className={`w-full text-left px-3 py-2 text-xs rounded-md transition-colors ${
                                currentPage === sub.id
                                  ? 'bg-blue-600/20 text-blue-300 font-medium'
                                  : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                              }`}
                            >
                              {sub.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`transition-colors whitespace-nowrap py-1 ${
                    isActive
                      ? 'text-blue-400 font-semibold border-b-2 border-blue-500'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary & Secondary CTAs */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-md transition-all shadow-sm hover:shadow-blue-500/25 whitespace-nowrap focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Now</span>
            </a>

            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/70 border border-emerald-700/50 rounded-md transition-all whitespace-nowrap focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={BUSINESS_INFO.phoneTel}
              aria-label="Call Star City"
              className="p-2 rounded-md bg-blue-600 text-white hover:bg-blue-500"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-[#090e18] px-4 pt-3 pb-6 space-y-3 animate-in fade-in duration-150">
          <div className="grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-3 py-2 rounded-md transition-colors ${
                  currentPage === item.id
                    ? 'bg-blue-600/20 text-blue-400 font-semibold'
                    : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800">
            <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
              Specific Services
            </div>
            <div className="grid grid-cols-1 gap-1 text-xs">
              {serviceSubItems.slice(1).map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => handleNavClick(sub.id)}
                  className={`text-left px-3 py-1.5 rounded transition-colors ${
                    currentPage === sub.id
                      ? 'bg-blue-600/20 text-blue-300 font-medium'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                  }`}
                >
                  {sub.label}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-800 flex gap-2">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="flex-1 inline-flex justify-center items-center gap-1.5 py-2.5 text-xs font-semibold text-white bg-blue-600 rounded-md"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex justify-center items-center gap-1.5 py-2.5 text-xs font-semibold text-emerald-300 bg-emerald-950/80 border border-emerald-700/60 rounded-md"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
