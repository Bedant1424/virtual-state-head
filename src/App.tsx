import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/sections/Hero';
import { Problem } from '@/sections/Problem';
import { Introduction } from '@/sections/Introduction';
import { Benefits } from '@/sections/Benefits';
import { DemoModal } from '@/components/ui/DemoModal';
import { PerformanceEngine } from '@/sections/PerformanceEngine';
import { Frameworks } from '@/sections/Frameworks';
import { LazyMotion, domAnimation } from 'motion/react';

export const App: React.FC = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState<boolean>(false);

  const handleOpenDemoModal = () => {
    setIsDemoModalOpen(true);
  };

  const handleCloseDemoModal = () => {
    setIsDemoModalOpen(false);
  };

  return (
    <LazyMotion features={domAnimation} strict>
      <div className="min-h-screen flex flex-col bg-white text-charcoal relative selection:bg-sky-brand/20 selection:text-navy">
        {/* WCAG Accessible Skip Link */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

      {/* Premium Visual Header */}
      <Header onCtaClick={handleOpenDemoModal} />

      {/* Main Experience Container */}
      <main id="main-content" className="relative flex-1">
        {/* SPRINT 1: Signature Hero Section Experience */}
        <Hero onCtaClick={handleOpenDemoModal} />

        {/* SPRINT 2: Problem + Performance Gap Experience */}
        <Problem />

        {/* SPRINT 3: Experienced Sales Leadership / Solution Section */}
        <Introduction onCtaClick={handleOpenDemoModal} />

        {/* SPRINT 4: What Your Business Gets Experience */}
        <Benefits onCtaClick={handleOpenDemoModal} />

        {/* SPRINT 5: The Sales Performance Engine Experience */}
        <PerformanceEngine onCtaClick={handleOpenDemoModal} />

        {/* SPRINT 6: Framework Library / Named Frameworks Experience */}
        <Frameworks />
      </main>

      {/* Structural Footer Shell */}
      <Footer />

      {/* Controlled CTA Trial/Demo Feedback Modal */}
      <DemoModal isOpen={isDemoModalOpen} onClose={handleCloseDemoModal} />
    </div>
  </LazyMotion>
  );
};

export default App;
