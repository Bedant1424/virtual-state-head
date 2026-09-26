import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
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
    const nextElem = document.getElementById('engine');
    if (nextElem) {
      nextElem.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <section
      id="about"
      aria-label="Experienced Sales Leadership Solution"
      className="py-18 sm:py-24 lg:py-28 bg-white border-b border-gray-200/80 relative overflow-hidden"
    >
      {/* Background Soft Atmospheric Radiance */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-soft-blue/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-paper/60 rounded-full blur-2xl pointer-events-none -z-10" />

      <Container size="default">
        {/* Top Section Header: Eyebrow + Primary Headline */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mb-4"
          >
            <SectionLabel label={solution.eyebrow} />
          </motion.div>

          <motion.h2
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
          </motion.h2>

          {/* Lead Intro Paragraph */}
          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
            className="text-base sm:text-lg text-charcoal font-medium leading-relaxed mb-4"
          >
            {solution.introLead}
          </motion.p>

          {/* Supporting Paragraphs */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="space-y-3 text-sm sm:text-base text-muted leading-relaxed"
          >
            <p>{solution.supportingParagraph1}</p>
            <p>{solution.supportingParagraph2}</p>
          </motion.div>

          {/* Credibility Anchor Badge (Royal Bal, 30+ Years) */}
          <motion.div
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
          </motion.div>
        </div>

        {/* Interactive Dual-Panel Centerpiece: Visual Layer + Capability System */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column (lg:col-span-7): The 6-Dimension Capability Architecture */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <CapabilitySystem
              capabilities={solution.capabilities}
              activeFocus={activeFocus}
              onFocusChange={setActiveFocus}
            />

            {/* Closing Idea & Call To Action */}
            <div className="mt-8 p-5 sm:p-6 rounded-xl bg-paper/60 border border-gray-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="max-w-md">
                <div className="flex items-center gap-2 mb-1.5">
                  <CheckCircle className="w-4 h-4 text-deep-blue shrink-0" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-deep-blue">
                    System Objective
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
                className="shrink-0 group shadow-sm hover:shadow"
              >
                <span>Book Your Sales Strategy Call</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
            </div>
          </div>

          {/* Right Column (lg:col-span-5): The Conceptual Systems Visualization */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="mb-3 flex items-center justify-between px-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-navy">
                Visual Framework
              </span>
              <span className="text-[11px] font-mono text-muted">
                The Leadership Layer
              </span>
            </div>

            <LeadershipLayerVisual
              activeFocus={activeFocus}
              onFocusChange={setActiveFocus}
            />

            <p className="text-[11px] text-muted text-center mt-3 font-sans">
              Diagram represents the integration layer bridging executive intent with day-to-day sales execution.
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
