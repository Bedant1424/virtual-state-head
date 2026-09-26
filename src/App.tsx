import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/sections/Hero';
import { Problem } from '@/sections/Problem';
import { PerformanceGapCost } from '@/sections/Problem/PerformanceGapCost';
import { Introduction } from '@/sections/Introduction';
import { Coaches } from '@/sections/Coaches';
import { PerformanceEngine } from '@/sections/PerformanceEngine';
import { Frameworks } from '@/sections/Frameworks';
import { HowItWorks } from '@/sections/HowItWorks';
import { WhoIsThisFor } from '@/sections/Fit';
import { WhyVirtualStateHead } from '@/sections/Benefits/WhyVirtualStateHead';
import { UpcomingBatch } from '@/sections/Batch';
import { WhatHappensAfterBooking } from '@/sections/Booking';
import { FAQSection } from '@/sections/FAQ';
import { FinalCTA } from '@/sections/FinalCTA';
import { DemoModal } from '@/components/ui/DemoModal';
import { GlobalMotionOverlay } from '@/components/GlobalMotionOverlay';
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
        {/* Continuous Strategic Motion Layer */}
        <GlobalMotionOverlay />

        {/* WCAG Accessible Skip Link */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        {/* Premium Visual Header */}
        <Header onCtaClick={handleOpenDemoModal} />

        {/* Main Experience Container: 15 Core Chapters */}
        <main id="main-content" className="relative flex-1">
          {/* CHAPTER 1: Hero */}
          <Hero onCtaClick={handleOpenDemoModal} />

          {/* CHAPTER 2: Problem */}
          <Problem />

          {/* CHAPTER 3: Introducing Virtual State Head */}
          <Introduction onCtaClick={handleOpenDemoModal} />

          {/* CHAPTER 4: Meet the Coaches */}
          <Coaches />

          {/* CHAPTER 5: Sales Performance Engine */}
          <PerformanceEngine onCtaClick={handleOpenDemoModal} />

          {/* CHAPTER 6: Sales Frameworks */}
          <Frameworks />

          {/* CHAPTER 7: How the Engagement Works */}
          <HowItWorks />

          {/* CHAPTER 8: Who Is This For? */}
          <WhoIsThisFor />

          {/* CHAPTER 9: Why Virtual State Head? */}
          <WhyVirtualStateHead />

          {/* CHAPTER 10: Cost of the Performance Gap */}
          <PerformanceGapCost />

          {/* CHAPTER 11: Upcoming Batch */}
          <UpcomingBatch onCtaClick={handleOpenDemoModal} />

          {/* CHAPTER 12: What Happens After You Book? */}
          <WhatHappensAfterBooking />

          {/* CHAPTER 13: FAQ */}
          <FAQSection />

          {/* CHAPTER 14: Final CTA */}
          <FinalCTA onCtaClick={handleOpenDemoModal} />
        </main>

        {/* CHAPTER 15: Footer */}
        <Footer />

        {/* Controlled CTA Trial/Demo Feedback Modal */}
        <DemoModal isOpen={isDemoModalOpen} onClose={handleCloseDemoModal} />
      </div>
    </LazyMotion>
  );
};

export default App;
