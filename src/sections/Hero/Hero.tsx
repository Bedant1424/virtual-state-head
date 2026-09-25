import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import { HeroBackground } from './HeroBackground';
import { HeroVisual } from './HeroVisual';
import { AuthorityStrip } from './AuthorityStrip';
import { SectionTransition } from './SectionTransition';
import { siteContent } from '@/data/siteContent';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { ArrowRight, ChevronRight, Check } from 'lucide-react';

export interface HeroProps {
  onCtaClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const containerRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  // Subtle Scroll-Linked Parallax Choreography
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, reducedMotion ? 0 : 25]);
  const visualY = useTransform(scrollYProgress, [0, 1], [0, reducedMotion ? 0 : 50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.9, 1], [1, 0.96, reducedMotion ? 1 : 0.85]);

  return (
    <section
      ref={containerRef}
      id="hero"
      aria-label="Virtual State Head Introduction & Overview"
      className="relative w-full overflow-hidden bg-white pt-6 sm:pt-10 lg:pt-14 pb-0"
    >
      {/* Signature Living Background System */}
      <HeroBackground />

      <motion.div
        style={{ opacity: heroOpacity }}
        className="relative z-10 w-full"
      >
        <Container size="default">
          {/* Main 2-Column Hero Composition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Headline, Narrative & Primary Actions */}
            <motion.div
              style={{ y: contentY }}
              className="lg:col-span-7 flex flex-col items-start"
            >
              {/* Step 3: Eyebrow / Category Label */}
              <motion.div
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.1 }}
                className="mb-4"
              >
                <SectionLabel label="Sales Leadership & Performance Consulting for MSMEs in Odisha" />
              </motion.div>

              {/* Step 4: Refined Headline Reveal */}
              <div className="mb-6 overflow-hidden">
                <motion.h1
                  initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="typography-display text-navy tracking-tight font-extrabold"
                >
                  <span className="block">Your Sales Team Is Busy.</span>
                  <span className="block text-deep-blue mt-1 sm:mt-1.5">
                    But Is Your Business Growing?
                  </span>
                </motion.h1>
              </div>

              {/* Step 5: Compact Supporting Copy */}
              <motion.div
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.35 }}
                className="space-y-3 max-w-2xl text-muted text-base sm:text-lg leading-relaxed mb-8"
              >
                <p>
                  Your salespeople may be working hard. Your business may have targets, processes, and technology in place.
                </p>
                <p className="font-semibold text-charcoal">
                  But without the right sales leadership, direction, and accountability, effort does not always translate into consistent performance.
                </p>
                <p className="text-sm sm:text-base text-muted/90">
                  Virtual State Head helps MSMEs in Odisha strengthen their sales strategy, develop their teams, and improve execution through experienced sales leadership and the Sales Performance Engine.
                </p>
              </motion.div>

              {/* Step 6: Prominent Primary CTA & Secondary Action */}
              <motion.div
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.45 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto"
              >
                <Button
                  variant="primary"
                  size="lg"
                  onClick={onCtaClick}
                  className="gap-2.5 shadow-md hover:shadow-lg font-bold text-base px-7 py-4"
                  aria-label="Book Your Sales Strategy Call with Virtual State Head"
                >
                  <span>{siteContent.cta.primaryLabel}</span>
                  <ArrowRight className="w-5 h-5 text-sky-brand" />
                </Button>

                <a
                  href="#engine"
                  className="inline-flex items-center justify-center gap-1.5 px-6 py-4 rounded-md text-sm font-bold text-deep-blue hover:text-navy hover:bg-soft-blue/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-brand"
                >
                  <span>{siteContent.cta.secondaryLabel}</span>
                  <ChevronRight className="w-4 h-4 text-muted" />
                </a>
              </motion.div>

              {/* Key Trust Highlights */}
              <motion.div
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.55 }}
                className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted font-medium"
              >
                <div className="flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-deep-blue" />
                  <span>Odisha MSME Dedicated</span>
                </div>
                <span className="text-gray-300">•</span>
                <div className="flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-deep-blue" />
                  <span>Direct Senior Advisory</span>
                </div>
                <span className="text-gray-300">•</span>
                <div className="flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-deep-blue" />
                  <span>3 Pillars Operating Model</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column: Original Business Performance System Visual */}
            <motion.div
              style={{ y: visualY }}
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.97, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <HeroVisual />
            </motion.div>
          </div>

          {/* Step 7: Authority Strip (Connected Rail Presentation) */}
          <motion.div
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            <AuthorityStrip />
          </motion.div>
        </Container>

        {/* Step 8 / Section 15: Clean Architectural Transition Boundary */}
        <SectionTransition className="mt-14 sm:mt-18 lg:mt-24" />
      </motion.div>
    </section>
  );
};
