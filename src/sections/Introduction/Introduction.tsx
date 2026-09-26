import React, { useState } from 'react';
import { m, useReducedMotion } from 'motion/react';
import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import { siteContent } from '@/data/siteContent';
import { LeadershipLayerVisual, FocusKey } from './LeadershipLayerVisual';
import { CapabilitySystem } from './CapabilitySystem';
import { IntroductionTransition } from './IntroductionTransition';
import { ArrowRight, Award, CheckCircle } from 'lucide-react';

export interface IntroductionProps {
  onCtaClick?: () => void;
}

export const Introduction: React.FC<IntroductionProps> = ({ onCtaClick }) => {
  const [activeFocus, setActiveFocus] = useState<FocusKey>(null);
  const shouldReduceMotion = useReducedMotion();
  const { solution } = siteContent;

  const handleNavigateNext = () => {
    const nextElem = document.getElementById('benefits');
    if (nextElem) {
      nextElem.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <section
      id="about"
      aria-label="Experienced Sales Leadership Solution"
      className="py-18 sm:py-24 lg:py-28 bg-paper border-b border-gray-200/80 relative overflow-hidden"
    >

      <Container size="default">
        {/* Top Section Header: Eyebrow + Primary Headline */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <m.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mb-4"
          >
            <SectionLabel label={solution.eyebrow} />
          </m.div>

          <m.h2
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="typography-h2 text-navy mb-4"
          >
            <span>{solution.headline.primary} </span>
            <span className="text-deep-blue/80 font-semibold block sm:inline">
              {solution.headline.secondary}
            </span>
          </m.h2>

          {/* Lead Intro Paragraph */}
          <m.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
            className="text-base sm:text-lg text-charcoal font-medium leading-relaxed mb-4"
          >
            {solution.introLead}
          </m.p>

          {/* Supporting Paragraphs */}
          <m.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="space-y-3 text-sm sm:text-base text-muted leading-relaxed"
          >
            <p>{solution.supportingParagraph1}</p>
            <p>{solution.supportingParagraph2}</p>
          </m.div>

          {/* Credibility Anchor Badge (Royal Bal, 30+ Years) */}
          <m.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.25, ease: 'easeOut' }}
            className="mt-6 inline-flex items-center gap-3.5 px-4 py-2.5 rounded-xl bg-soft-blue/70 border border-sky-brand/40 shadow-xs"
          >
            <div className="w-10 h-10 rounded-lg bg-deep-blue text-white flex items-center justify-center font-bold text-sm shrink-0">
              RB
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-bold text-navy">
                  {solution.credibility.name}
                </span>
                <span className="w-1 h-1 rounded-full bg-deep-blue/40" />
                <span className="text-xs font-mono font-bold text-deep-blue">
                  {solution.credibility.experience}
                </span>
              </div>
              <span className="text-xs text-muted block">
                {solution.credibility.designation} • {solution.credibility.role}
              </span>
            </div>
            <Award className="w-4 h-4 text-deep-blue shrink-0 ml-1 hidden sm:block" />
          </m.div>
        </div>

        {/* Interactive Dual-Panel Centerpiece: Capability Directory + Visual Layer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Supporting Column (lg:col-span-5): The 6 Core Capability Dimensions Directory */}
          <div className="order-2 lg:order-1 lg:col-span-5 flex flex-col justify-between">
            <CapabilitySystem
              capabilities={solution.capabilities}
              activeFocus={activeFocus}
              onFocusChange={setActiveFocus}
            />

            {/* Closing Idea & Call To Action */}
            <div className="mt-6 p-5 sm:p-6 rounded-xl bg-white border border-gray-200/90 shadow-xs flex flex-col items-start gap-4">
              <div className="w-full">
                <div className="flex items-center gap-2 mb-1.5">
                  <CheckCircle className="w-4 h-4 text-deep-blue shrink-0" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-deep-blue">
                    Summary
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-charcoal font-medium leading-relaxed">
                  {solution.closingIdea}
                </p>
              </div>

              <Button
                variant="primary"
                size="md"
                onClick={onCtaClick}
                className="w-full sm:w-auto group shadow-sm hover:shadow"
              >
                <span>Book Your Sales Strategy Call</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
            </div>
          </div>

          {/* Primary Centerpiece Column (lg:col-span-7): The Leadership Layer Architectural Visual */}
          <div className="order-1 lg:order-2 lg:col-span-7 lg:sticky lg:top-24">
            <div className="mb-3 flex items-center justify-between px-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-navy">
                The Leadership Layer
              </span>
            </div>

            <LeadershipLayerVisual
              activeFocus={activeFocus}
              onFocusChange={setActiveFocus}
            />

            <p className="text-[11px] text-muted text-center mt-3 font-sans">
              Diagram illustrates how experienced sales leadership connects business goals with structured sales activity.
            </p>
          </div>
        </div>

        {/* Next Architectural Stage Transition Bridge */}
        <IntroductionTransition
          statement={solution.bridge.statement}
          targetLabel={solution.bridge.targetLabel}
          onNavigateNext={handleNavigateNext}
        />
      </Container>
    </section>
  );
};
