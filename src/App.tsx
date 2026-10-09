/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

// Page Imports
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesOverviewPage } from './pages/ServicesOverviewPage';
import { DiagnosisPage } from './pages/DiagnosisPage';
import { ScreenRepairPage } from './pages/ScreenRepairPage';
import { BatteryReplacementPage } from './pages/BatteryReplacementPage';
import { ChargingPortRepairPage } from './pages/ChargingPortRepairPage';
import { SoftwarePage } from './pages/SoftwarePage';
import { WaterDamagePage } from './pages/WaterDamagePage';
import { OtherRepairsPage } from './pages/OtherRepairsPage';
import { RepairProcessPage } from './pages/RepairProcessPage';
import { WhyChooseUsPage } from './pages/WhyChooseUsPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { FAQPage } from './pages/FAQPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  // Handle URL hash routing if present
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'home',
        'about',
        'services',
        'diagnosis',
        'screen-repair',
        'battery-replacement',
        'charging-port-repair',
        'software-system',
        'water-damage',
        'other-repairs',
        'repair-process',
        'why-choose-us',
        'reviews',
        'faq',
        'gallery',
        'contact',
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={navigateTo} />;
      case 'about':
        return <AboutPage onNavigate={navigateTo} />;
      case 'services':
        return <ServicesOverviewPage onNavigate={navigateTo} />;
      case 'diagnosis':
        return <DiagnosisPage onNavigate={navigateTo} />;
      case 'screen-repair':
        return <ScreenRepairPage onNavigate={navigateTo} />;
      case 'battery-replacement':
        return <BatteryReplacementPage onNavigate={navigateTo} />;
      case 'charging-port-repair':
        return <ChargingPortRepairPage onNavigate={navigateTo} />;
      case 'software-system':
        return <SoftwarePage onNavigate={navigateTo} />;
      case 'water-damage':
        return <WaterDamagePage onNavigate={navigateTo} />;
      case 'other-repairs':
        return <OtherRepairsPage onNavigate={navigateTo} />;
      case 'repair-process':
        return <RepairProcessPage onNavigate={navigateTo} />;
      case 'why-choose-us':
        return <WhyChooseUsPage onNavigate={navigateTo} />;
      case 'reviews':
        return <ReviewsPage onNavigate={navigateTo} />;
      case 'faq':
        return <FAQPage onNavigate={navigateTo} />;
      case 'gallery':
        return <GalleryPage onNavigate={navigateTo} />;
      case 'contact':
        return <ContactPage onNavigate={navigateTo} />;
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#080c14] text-slate-100 tech-grid-pattern selection:bg-blue-600 selection:text-white">
      {/* Sticky Header */}
      <Header currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main Content Area */}
      <main className="flex-1 w-full">{renderCurrentPage()}</main>

      {/* Persistent Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Complete Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
