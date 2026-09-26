import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/sections/Hero';
import { Problem } from '@/sections/Problem';
import { Introduction } from '@/sections/Introduction';
import { DemoModal } from '@/components/ui/DemoModal';
import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Compass, ShieldCheck, BarChart3, CheckCircle2 } from 'lucide-react';
import { siteContent } from '@/data/siteContent';
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

        {/* Future Sprint Boundary Preview: Operational Architecture Preview */}
        <section
          id="engine"
          aria-label="Sales Performance Engine Pillars"
          className="py-16 sm:py-20 bg-paper/50 border-b border-gray-200/80"
        >
          <Container size="default">
            <div className="mb-4">
              <SectionLabel label="Engine Pillars • Operating Architecture" />
            </div>

            <div className="max-w-2xl mb-10">
              <h2 className="typography-h2 text-navy mb-3">
                The Three Pillars of the Sales Performance Engine
              </h2>
              <p className="typography-body text-muted">
                Virtual State Head replaces fragmented sales efforts with an integrated discipline combining training, visibility tools, and executive review cadence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {siteContent.pillars.map((pillar) => (
                <div
                  key={pillar.id}
                  className="rounded-xl bg-white border border-gray-200/80 p-6 sm:p-7 shadow-sm hover:border-sky-brand/50 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-soft-blue text-deep-blue flex items-center justify-center mb-4 border border-sky-brand/30">
                      {pillar.id === 'training' && <Compass className="w-5 h-5 text-deep-blue" />}
                      {pillar.id === 'technology' && <BarChart3 className="w-5 h-5 text-deep-blue" />}
                      {pillar.id === 'accountability' && <ShieldCheck className="w-5 h-5 text-deep-blue" />}
                    </div>
                    <span className="typography-eyebrow text-muted block mb-1">
                      Pillar: {pillar.focus}
                    </span>
                    <h3 className="typography-h3 text-navy mb-2">{pillar.name}</h3>
                    <p className="typography-small text-muted">{pillar.summary}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-paper flex items-center gap-1.5 text-xs text-deep-blue font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-brand" />
                    <span>Structured Execution</span>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
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
