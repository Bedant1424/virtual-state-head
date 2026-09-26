import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/sections/Hero';
import { Problem } from '@/sections/Problem';
import { Introduction } from '@/sections/Introduction';
import { Coaches } from '@/sections/Coaches';
import { PerformanceEngine } from '@/sections/PerformanceEngine';
import { HowItWorks } from '@/sections/HowItWorks';
import { WhyVirtualStateHead } from '@/sections/Benefits/WhyVirtualStateHead';
import { WhoIsThisFor } from '@/sections/Fit';
import { UpcomingBatch } from '@/sections/Batch';
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

        {/* Main Experience Container */}
        <main id="main-content" className="relative flex-1">
          {/* CHAPTER 1: Signature Hero Section Experience */}
          <Hero onCtaClick={handleOpenDemoModal} />

          {/* CHAPTER 2: Problem + Performance Gap Diagnostic Narrative */}
          <Problem />

          {/* CHAPTER 3: Experienced Sales Leadership & Business Value */}
          <Introduction onCtaClick={handleOpenDemoModal} />

          {/* CHAPTER 4: Leadership Mentors & Human Credibility */}
          <Coaches />

          {/* CHAPTER 5: The Sales Performance Engine Signature Peak */}
          <PerformanceEngine onCtaClick={handleOpenDemoModal} />

          {/* CHAPTER 6: How the Engagement Works (Process + Frameworks) */}
          <HowItWorks />

          {/* CHAPTER 7: Why Virtual State Head? (4 Typographic Statements) */}
          <WhyVirtualStateHead />

          {/* CHAPTER 8: Who It Is For (Cohort Qualification & Fit) */}
          <WhoIsThisFor />

          {/* CHAPTER 9: Upcoming Batch (10 MSME Companies) */}
          <UpcomingBatch onCtaClick={handleOpenDemoModal} />

          {/* CHAPTER 10: FAQ Accordion */}
          <FAQSection />

          {/* CHAPTER 11: Final Closing Call to Action */}
          <FinalCTA onCtaClick={handleOpenDemoModal} />
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
