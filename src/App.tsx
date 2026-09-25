import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/layout/Container';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { BackgroundGrid } from '@/components/layout/BackgroundGrid';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { siteContent } from '@/data/siteContent';
import { ArrowRight, CheckCircle2, ShieldCheck, Compass, BarChart3 } from 'lucide-react';

export const App: React.FC = () => {
  const handleCtaClick = () => {
    alert(`Action: ${siteContent.cta.primaryLabel} (Demo Mode)`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-charcoal relative selection:bg-sky-brand/20 selection:text-navy">
      {/* WCAG Accessible Skip Link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Structural Header Shell */}
      <Header onCtaClick={handleCtaClick} />

      {/* Main Structural Content Shell */}
      <main id="main-content" className="relative flex-1">
        {/* Living Sales-Performance Background System */}
        <BackgroundGrid variant="light" />

        {/* Sprint 0 Foundation Verification Shell */}
        <SectionWrapper spacing="lg" className="relative z-10">
          <Container size="default">
            {/* Section Eyebrow Label */}
            <div className="mb-4">
              <SectionLabel label="Sprint 0 • Architecture & Design System Foundation" />
            </div>

            {/* Typography Hierarchy Demo & Core Positioning */}
            <div className="max-w-3xl mb-12">
              <h1 className="typography-h1 text-navy mb-4">
                Virtual State Head
                <span className="block text-deep-blue font-bold text-2xl sm:text-3xl mt-1">
                  Sales Performance Engine
                </span>
              </h1>
              <p className="typography-body-lg text-muted mb-6">
                {siteContent.brand.positioningStatement}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="primary" size="lg" onClick={handleCtaClick}>
                  <span>{siteContent.cta.primaryLabel}</span>
                  <ArrowRight className="w-4 h-4 ml-1 text-sky-brand" />
                </Button>
                <Button variant="secondary" size="lg">
                  <span>{siteContent.cta.secondaryLabel}</span>
                </Button>
              </div>
            </div>

            {/* Foundation Primitives Verification: Cards & Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {siteContent.pillars.map((pillar) => (
                <Card
                  key={pillar.id}
                  variant="white"
                  padding="md"
                  interactive
                  className="flex flex-col justify-between"
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
                    <h2 className="typography-h3 text-navy mb-2">{pillar.name}</h2>
                    <p className="typography-small text-muted">{pillar.summary}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-paper flex items-center gap-1.5 text-xs text-deep-blue font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-brand" />
                    <span>Active System Pillar</span>
                  </div>
                </Card>
              ))}
            </div>

            {/* Token & System Verification Strip */}
            <Card variant="paper" padding="md" className="border-gray-200">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="typography-h3 text-navy">
                    {siteContent.batch.statusBadge}
                  </h3>
                  <p className="typography-small text-muted mt-1">
                    Focused engagement limited to <strong>{siteContent.batch.cohortLimit}</strong> in {siteContent.brand.location}.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block px-3 py-1 rounded bg-deep-blue text-white text-xs font-bold">
                    {siteContent.batch.targetMarket}
                  </span>
                  <span className="inline-block px-3 py-1 rounded bg-white text-deep-blue border border-sky-brand/40 text-xs font-bold">
                    {siteContent.batch.deliveryModel}
                  </span>
                </div>
              </div>
            </Card>
          </Container>
        </SectionWrapper>
      </main>

      {/* Structural Footer Shell */}
      <Footer />
    </div>
  );
};

export default App;
