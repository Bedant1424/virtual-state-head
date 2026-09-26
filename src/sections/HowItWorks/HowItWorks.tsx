import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { siteContent } from '@/data/siteContent';
import { ArrowRight, ArrowDown } from 'lucide-react';

export interface HowItWorksProps {
  className?: string;
}

const stageDescriptions: Record<string, string> = {
  '01': 'Diagnostic review of sales capabilities & friction points.',
  '02': 'Align commercial objectives, target market & priorities.',
  '03': 'Build team capability, objection handling & communication.',
  '04': 'Structured sales cadence & agreed daily follow-through.',
  '05': 'Regular performance reviews & commitment tracking.',
  '06': 'Continuous feedback & institutionalized sales discipline.',
};

/**
 * HowItWorks Section (<section id="how-it-works">)
 *
 * Visual sequence for the 6-stage Engagement Process and 5 Named Sales Frameworks.
 *
 * Sequence:
 * 01 ASSESS → 02 SET DIRECTION → 03 DEVELOP → 04 EXECUTE → 05 REVIEW → 06 IMPROVE
 *
 * Frameworks:
 * 1. Royal Selling Formula
 * 2. Strategic Negotiator
 * 3. Sense Selling
 * 4. Performance Consulting
 * 5. Lifetime Client Relationship (LCR)
 *
 * Editorial methodology layout with one connected line, large step numbers,
 * concise descriptions, and zero dashboard/accordion UI cards.
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
          <div className="mb-3">
            <SectionLabel label="Structured Delivery & Methodology" />
          </div>
          <h2
            id="how-it-works-heading"
            className="typography-h2 text-navy mb-3 font-sans font-extrabold tracking-tight"
          >
            How the Engagement Works
          </h2>
          <p className="text-base sm:text-lg text-muted font-sans leading-relaxed">
            A structured six-stage engagement sequence guiding your sales team from initial diagnostic assessment to continuous improvement, anchored by five named sales frameworks.
          </p>
        </div>

        {/* ============================================================== */}
        {/* PART 1: The Connected Visual Process Sequence                  */}
        {/* ============================================================== */}
        <div className="mb-12 sm:mb-14">
          <div className="flex items-center justify-between mb-6">
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

          {/* Desktop Continuous Connected Line Sequence (>= 1024px) */}
          <div className="hidden lg:block relative py-4">
            {/* The Continuous Connected Flow Line */}
            <div
              className="absolute top-10 left-8 right-8 h-0.5 bg-gradient-to-r from-deep-blue via-sky-brand to-deep-blue pointer-events-none"
              aria-hidden="true"
            />

            <div className="grid grid-cols-6 gap-4 relative z-10">
              {processStages.map((stage, idx) => (
                <div
                  key={stage.id}
                  className="flex flex-col items-start pr-2 group"
                >
                  {/* Step Node on Line */}
                  <div className="flex items-center justify-between w-full mb-3">
                    <div className="w-8 h-8 rounded-full bg-white border-2 border-deep-blue flex items-center justify-center shadow-xs group-hover:border-sky-brand transition-colors">
                      <span className="w-2.5 h-2.5 rounded-full bg-deep-blue group-hover:bg-sky-brand transition-colors" />
                    </div>
                    {idx < processStages.length - 1 && (
                      <span className="text-xs font-bold text-sky-brand font-mono opacity-60 group-hover:opacity-100 transition-opacity">
                        →
                      </span>
                    )}
                  </div>

                  {/* Large Step Number */}
                  <span className="text-2xl sm:text-3xl font-extrabold font-mono text-deep-blue/40 tracking-tight leading-none mb-1 group-hover:text-deep-blue transition-colors">
                    {stage.number}
                  </span>

                  {/* Stage Name */}
                  <h4 className="text-sm font-extrabold text-navy uppercase tracking-tight font-sans mb-1.5 leading-snug">
                    {stage.name}
                  </h4>

                  {/* Very Short Description */}
                  <p className="text-xs text-charcoal/80 leading-relaxed font-sans">
                    {stageDescriptions[stage.number] || stage.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Vertical Connected Line (< 1024px) */}
          <div className="block lg:hidden relative pl-6 border-l-2 border-deep-blue/30 space-y-5 ml-3">
            {processStages.map((stage, idx) => (
              <div
                key={stage.id}
                className="relative flex flex-col items-start"
              >
                {/* Node on vertical line */}
                <div className="absolute -left-[33px] top-0.5 w-5 h-5 rounded-full bg-deep-blue text-white flex items-center justify-center border-2 border-white shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-brand" />
                </div>

                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-xs font-mono font-bold text-deep-blue">
                    {stage.number}
                  </span>
                  <h4 className="text-sm font-extrabold text-navy uppercase tracking-tight font-sans">
                    {stage.name}
                  </h4>
                </div>

                <p className="text-xs text-charcoal/80 leading-relaxed font-sans">
                  {stageDescriptions[stage.number] || stage.name}
                </p>

                {idx < processStages.length - 1 && (
                  <ArrowDown className="w-3.5 h-3.5 text-sky-brand mt-2" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Subtle Horizontal Divider */}
        <div className="w-full h-px bg-gray-200/90 mb-10 sm:mb-12" />

        {/* ============================================================== */}
        {/* PART 2: Five Named Sales Frameworks (Compact Editorial Section) */}
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

          {/* Compact Editorial Typographic Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {frameworks.map((fw) => (
              <div
                key={fw.id}
                className="p-5 rounded-xl bg-white border border-gray-200/90 shadow-2xs hover:border-deep-blue/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-deep-blue block mb-2">
                    {fw.number}
                  </span>
                  <h4 className="text-base font-bold text-navy font-sans leading-snug">
                    {fw.name}
                  </h4>
                </div>
                <div className="mt-4 pt-2.5 border-t border-gray-100 flex items-center gap-1.5 text-[11px] font-semibold text-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-brand" />
                  <span>Sales Framework</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Editorial Reinforcement */}
        <div className="mt-10 sm:mt-12 p-5 sm:p-6 rounded-xl bg-white border border-gray-200/90 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
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
