import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { siteContent } from '@/data/siteContent';
import { ArrowRight, ArrowDown, Check, Layers } from 'lucide-react';

export interface HowItWorksProps {
  className?: string;
}

/**
 * HowItWorks Section (<section id="how-it-works">)
 * Unified methodology chapter combining the 6-stage Engagement Process
 * and the 5 Named Sales Frameworks.
 *
 * Sequence:
 * Assess → Set Direction → Develop → Execute → Review → Improve
 *
 * Frameworks:
 * 1. Royal Selling Formula
 * 2. Strategic Negotiator
 * 3. Sense Selling
 * 4. Performance Consulting
 * 5. Lifetime Client Relationship (LCR)
 *
 * Design:
 * - Scannable editorial timeline + clean typographic framework cards.
 * - Calm, structured, human, and credible.
 * - Zero bloated dashboard selectors or redundant click requirements.
 */
export const HowItWorks: React.FC<HowItWorksProps> = ({ className }) => {
  const { processStages, frameworks } = siteContent;

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className={`py-12 sm:py-14 lg:py-16 bg-[#F8FAFC] border-b border-gray-200/80 relative overflow-hidden ${
        className || ''
      }`}
    >
      {/* Anchor targets for backward-compatible deep links */}
      <div id="frameworks" className="absolute -top-20" aria-hidden="true" />
      <div id="process" className="absolute -top-20" aria-hidden="true" />

      <Container size="default">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="mb-4">
            <SectionLabel label="Methodology & Frameworks • Structured Delivery" />
          </div>
          <h2
            id="how-it-works-heading"
            className="typography-h2 text-navy mb-4 font-sans font-extrabold"
          >
            How the Engagement Works
          </h2>
          <p className="text-base sm:text-lg text-muted font-sans leading-relaxed">
            A structured six-stage engagement sequence guiding your sales team from initial diagnostic assessment to continuous improvement, anchored by five named sales frameworks.
          </p>
        </div>

        {/* ============================================================== */}
        {/* PART 1: The 6-Stage Engagement Sequence                        */}
        {/* ============================================================== */}
        <div className="mb-8 sm:mb-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-deep-blue" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-deep-blue font-sans">
                The Engagement Sequence
              </h3>
            </div>
            <span className="text-xs font-mono font-medium text-muted hidden sm:inline">
              01 → 06 Continuous Progression
            </span>
          </div>

          {/* Desktop Horizontal Track (>= 1024px) */}
          <div className="hidden lg:block relative p-5 sm:p-6 rounded-2xl bg-white border border-gray-200/90 shadow-xs">
            {/* Horizontal Connecting Baseline */}
            <div
              className="absolute top-1/2 left-12 right-12 h-0.5 bg-gray-200 -translate-y-1/2 pointer-events-none"
              aria-hidden="true"
            />

            <div className="grid grid-cols-6 gap-3 relative z-10">
              {processStages.map((stage, idx) => (
                <div
                  key={stage.id}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-11 h-11 rounded-xl bg-paper border border-gray-200 group-hover:border-deep-blue group-hover:bg-soft-blue/60 transition-all duration-200 flex items-center justify-center font-bold text-sm text-navy mb-2 shadow-2xs">
                    {stage.number}
                  </div>
                  <h4 className="text-sm font-bold text-navy font-sans tracking-tight mb-0.5">
                    {stage.name}
                  </h4>
                  {idx < processStages.length - 1 ? (
                    <span className="text-[11px] font-mono text-muted flex items-center gap-1">
                      Step {stage.number}
                    </span>
                  ) : (
                    <span className="text-[11px] font-semibold text-deep-blue flex items-center gap-0.5">
                      <Check className="w-3 h-3 text-sky-brand" />
                      Continuous
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Vertical Connected Timeline (< 1024px) */}
          <div className="block lg:hidden relative pl-6 border-l-2 border-sky-brand/40 space-y-3 ml-3">
            {processStages.map((stage, idx) => (
              <div
                key={stage.id}
                className="relative flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-200 shadow-2xs"
              >
                {/* Node on vertical line */}
                <div className="absolute -left-[35px] w-6 h-6 rounded-full bg-deep-blue text-white text-[11px] font-bold flex items-center justify-center border-2 border-white shadow-xs">
                  {stage.number}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy font-sans">
                    {stage.name}
                  </h4>
                  <span className="text-[11px] text-muted font-sans">
                    Stage {stage.number} of 06
                  </span>
                </div>
                {idx < processStages.length - 1 && (
                  <ArrowDown className="w-3.5 h-3.5 text-muted ml-auto" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Subtle Section Divider */}
        <div className="w-full h-px bg-gray-200/80 mb-8 sm:mb-10" />

        {/* ============================================================== */}
        {/* PART 2: Five Named Frameworks                                 */}
        {/* ============================================================== */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-brand" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-deep-blue font-sans">
                Five Named Sales Frameworks
              </h3>
            </div>
            <span className="text-xs font-mono font-medium text-muted hidden sm:inline">
              Core Methodologies
            </span>
          </div>

          {/* Scannable 5-Card Typographic Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {frameworks.map((fw) => (
              <div
                key={fw.id}
                className="p-5 rounded-xl bg-white border border-gray-200/90 shadow-xs hover:border-sky-brand/60 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="w-7 h-7 rounded-lg bg-soft-blue text-deep-blue font-mono font-bold text-xs flex items-center justify-center border border-sky-brand/30">
                      {fw.number}
                    </span>
                    <Layers className="w-4 h-4 text-sky-brand/70" />
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-navy font-sans leading-snug">
                    {fw.name}
                  </h4>
                </div>
                <div className="mt-4 pt-2.5 border-t border-gray-100 flex items-center gap-1.5 text-[11px] font-semibold text-deep-blue">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-brand" />
                  <span>Sales Framework</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Editorial Reinforcement */}
        <div className="mt-12 sm:mt-14 p-6 rounded-2xl bg-white border border-gray-200/90 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-charcoal font-medium font-sans">
            These frameworks and stages are implemented collaboratively with your sales leadership and frontline team.
          </p>
          <a
            href="#hero"
            className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-deep-blue hover:text-navy transition-colors shrink-0"
          >
            <span>Back to top</span>
            <ArrowRight className="w-4 h-4 text-sky-brand group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
