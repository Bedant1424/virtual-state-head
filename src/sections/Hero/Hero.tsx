import React, { useRef } from 'react';
import { m } from 'motion/react';
import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import { HeroBackground } from './HeroBackground';
import { HeroVisual } from './HeroVisual';
import { AuthorityStrip } from './AuthorityStrip';
import { SectionTransition } from './SectionTransition';
import { siteContent } from '@/data/siteContent';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { ArrowRight, ChevronDown, Check } from 'lucide-react';

export interface HeroProps {
  onCtaClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const containerRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  return (
    <section
      ref={containerRef}
      id="hero"
      aria-label="Virtual State Head Introduction & Overview"
      className="relative w-full overflow-hidden bg-white pt-6 sm:pt-10 lg:pt-14 pb-0"
    >
      {/* Signature Living Background System */}
      <HeroBackground />

      <div className="relative z-10 w-full">
        <Container size="default">
          {/* Main 2-Column Hero Composition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Headline, Narrative & Primary Actions */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Step 3: Eyebrow / Category Label */}
              <m.div
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.1 }}
                className="mb-4"
              >
                <SectionLabel label="Sales Leadership & Performance Consulting for MSMEs in Odisha" />
              </m.div>

              {/* Step 4: Refined Headline Reveal */}
              <div className="mb-6 overflow-hidden">
                <m.h1
                  initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="typography-display text-navy tracking-tight font-extrabold"
                >
                  <span className="block">Your Sales Team Is Busy.</span>
                  <span className="block text-deep-blue mt-1 sm:mt-1.5">
                    But Is Your Business Growing?
                  </span>
                </m.h1>
              </div>

              {/* Step 5: Refined Supporting Copy (1 short paragraph + 1 concise sentence) */}
              <m.div
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.32 }}
                className="space-y-3 max-w-2xl text-muted text-base sm:text-lg leading-relaxed mb-7"
              >
                <p>
                  Your salespeople may be working hard, and targets, processes, and technology may already be in place. But without the right sales leadership, direction, and accountability, effort does not always translate into consistent performance.
                </p>
                <p className="font-semibold text-charcoal text-base sm:text-lg">
                  Virtual State Head helps MSMEs in Odisha strengthen sales strategy, develop teams, and improve execution through experienced sales leadership and the Sales Performance Engine.
                </p>
              </m.div>

              {/* Step 6: Dominant Primary CTA & Lightweight Scroll Cue */}
              <m.div
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.42 }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full sm:w-auto"
              >
                <Button
                  variant="primary"
                  size="lg"
                  onClick={onCtaClick}
                  className="w-full sm:w-auto gap-2.5 shadow-md hover:shadow-lg font-bold text-base px-8 py-4 bg-deep-blue text-white hover:bg-navy border border-deep-blue hover:border-sky-brand"
                  aria-label="Book Your Sales Strategy Call with Virtual State Head"
                >
                  <span>{siteContent.cta.primaryLabel}</span>
                  <ArrowRight className="w-5 h-5 text-sky-brand" />
                </Button>

                <a
                  href="#problem"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-muted hover:text-deep-blue transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-brand rounded py-2 px-1"
                  aria-label="Scroll to see where the performance gap begins"
                >
                  <span>See where the gap begins</span>
                  <ChevronDown className="w-4 h-4 text-muted group-hover:text-deep-blue group-hover:translate-y-0.5 transition-all" />
                </a>
              </m.div>

              {/* Key Trust & Positioning Alignment */}
              <m.div
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.52 }}
                className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted font-medium"
              >
                <div className="flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-deep-blue shrink-0" />
                  <span>Odisha MSME Focus</span>
                </div>
                <span className="text-gray-300">•</span>
                <div className="flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-deep-blue shrink-0" />
                  <span>Senior Sales Leadership</span>
                </div>
                <span className="text-gray-300">•</span>
                <div className="flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-deep-blue shrink-0" />
                  <span>Training • Technology • Accountability</span>
                </div>
              </m.div>
            </div>

            {/* Right Column: Original Business Performance System Visual */}
            <m.div
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.97, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <HeroVisual />
            </m.div>
          </div>

          {/* Step 7: Authority Strip (Connected Rail Presentation) */}
          <m.div
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            <AuthorityStrip />
          </m.div>
        </Container>

        {/* Step 8 / Section 15: Clean Architectural Transition Boundary */}
        <SectionTransition className="mt-6 sm:mt-8 lg:mt-10" />
      </div>
    </section>
  );
};
