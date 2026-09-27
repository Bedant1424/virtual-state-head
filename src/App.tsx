import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import {
  Chapter01Hero,
  Chapter02Problem,
  Chapter03IntroducingVSH,
  Chapter04Coaches,
  Chapter05WhatYouGet,
  Chapter06Engine,
  Chapter07FrameworksProcess,
  Chapter08AudienceWhyVSH,
  Chapter09PerformanceGapBatch,
  Chapter10BookingFAQCTA,
} from '@/sections/Chapters';
import { DemoModal } from '@/components/ui/DemoModal';
import { GlobalSalesSignal } from '@/components/GlobalSalesSignal';
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
      <div className="min-h-screen flex flex-col bg-white text-[#333333] relative selection:bg-[#87CEEB]/20 selection:text-[#0B1F33]">
        {/* Global Sales Signal — Locked Atmospheric Motion Layer */}
        <GlobalSalesSignal />

        {/* WCAG Accessible Skip Link */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        {/* Editorial Header */}
        <Header onCtaClick={handleOpenDemoModal} />

        {/* Main Experience: The 10 Visual Chapters */}
        <main id="main-content" className="relative flex-1">
          {/* CHAPTER 01: Hero — The Provocation & Senior Authority */}
          <Chapter01Hero onCtaClick={handleOpenDemoModal} />

          {/* CHAPTER 02: The Problem — Why Sales Stall Without Direction */}
          <Chapter02Problem />

          {/* CHAPTER 03: Introducing VSH — The Executive Advisory Solution */}
          <Chapter03IntroducingVSH onCtaClick={handleOpenDemoModal} />

          {/* CHAPTER 04: Meet the Coaches — 30+ Years Frontline Sales Leadership */}
          <Chapter04Coaches />

          {/* CHAPTER 05: What Your Business Gets — Five Structured Value Areas */}
          <Chapter05WhatYouGet />

          {/* CHAPTER 06: Sales Performance Engine — Training + Technology + Accountability */}
          <Chapter06Engine onCtaClick={handleOpenDemoModal} />

          {/* CHAPTER 07: Frameworks & Execution Process — 5 Methodologies & 6 Stages */}
          <Chapter07FrameworksProcess />

          {/* CHAPTER 08: Audience & Differentiation — Who We Help & Why VSH */}
          <Chapter08AudienceWhyVSH />

          {/* CHAPTER 09: The Performance Gap & Upcoming Batch — Cost & Cohort */}
          <Chapter09PerformanceGapBatch onCtaClick={handleOpenDemoModal} />

          {/* CHAPTER 10: Conversion — What Happens After, FAQ & Final CTA */}
          <Chapter10BookingFAQCTA onCtaClick={handleOpenDemoModal} />
        </main>

        {/* Editorial Footer */}
        <Footer />

        {/* Strategy Discussion Booking Modal */}
        <DemoModal isOpen={isDemoModalOpen} onClose={handleCloseDemoModal} />
      </div>
    </LazyMotion>
  );
};

export default App;
