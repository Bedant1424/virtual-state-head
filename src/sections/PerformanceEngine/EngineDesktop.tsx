import React, { useRef, useState } from 'react';
import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import { EngineVisual } from './EngineVisual';
import { siteContent } from '@/data/siteContent';
import { useScrollTrigger } from '@/hooks/useScrollTrigger';
import { ScrollTrigger } from '@/lib/gsap';
import { ArrowRight } from 'lucide-react';

export interface EngineDesktopProps {
  onCtaClick?: () => void;
}

/**
 * EngineDesktop
 * Editorial 2-Column Split experience for desktop screens (>=1024px).
 *
 * Requirements:
 * - Left side (38-40%):
 *   - "Introducing the Sales Performance Engine"
 *   - Concise explanation
 *   - TRAINING, TECHNOLOGY, ACCOUNTABILITY with short source-grounded descriptions (NO selectors, NO tabs, NO UI controls)
 *   - Primary CTA button
 * - Right side (60-62%):
 *   - One large visual with scroll-driven progressive convergence (states 1 to 5)
 * - Viewport height clamped: min(900px, calc(100svh - 68px)) with min-height 620px
 * - Zero software terminology
 */
export const EngineDesktop: React.FC<EngineDesktopProps> = ({ onCtaClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinWrapRef = useRef<HTMLDivElement>(null);
  const [currentStage, setCurrentStage] = useState<number>(1);

  const { pillars } = siteContent;
  const trainingPillar = pillars.find((p) => p.id === 'training');
  const technologyPillar = pillars.find((p) => p.id === 'technology');
  const accountabilityPillar = pillars.find((p) => p.id === 'accountability');

  // GSAP ScrollTrigger Pinned Sequence: 5 scroll states
  useScrollTrigger(
    () => {
      if (!containerRef.current || !pinWrapRef.current) return;

      const trigger = ScrollTrigger.create({
        trigger: containerRef.current,
        pin: pinWrapRef.current,
        start: 'top top',
        end: '+=160%',
        scrub: 0.5,
        anticipatePin: 1,
        onUpdate: (self) => {
          const p = self.progress;
          let nextStage = 1;

          if (p < 0.22) {
            nextStage = 1; // 01 TRAINING
          } else if (p < 0.44) {
            nextStage = 2; // 02 TECHNOLOGY
          } else if (p < 0.66) {
            nextStage = 3; // 03 ACCOUNTABILITY
          } else if (p < 0.88) {
            nextStage = 4; // 04 CONVERGENCE
          } else {
            nextStage = 5; // 05 SALES PERFORMANCE ENGINE
          }

          setCurrentStage((prev) => (prev !== nextStage ? nextStage : prev));
        },
      });

      return () => {
        trigger.kill();
      };
    },
    containerRef,
    []
  );

  return (
    <div ref={containerRef} className="relative w-full bg-[#081726] text-white">
      {/* Pinned Viewport Container with Exact Clamped Bounds */}
      <div
        ref={pinWrapRef}
        className="w-full flex flex-col justify-center overflow-hidden"
        style={{
          height: 'min(900px, calc(100svh - 68px))',
          minHeight: '620px',
        }}
      >
        <Container size="default">
          {/* Eyebrow Label */}
          <div className="mb-4">
            <SectionLabel
              label="The Core Mechanism"
              className="text-sky-brand border-sky-brand/30 bg-sky-brand/10"
            />
          </div>

          {/* 2-Column Split: Left 38-40%, Right 60-62% */}
          <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column (38-40%): Pure Editorial Typography & Copy */}
            <div className="col-span-12 lg:col-span-5 flex flex-col justify-center space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-sans leading-tight mb-3">
                  <span>Introducing the </span>
                  <span className="text-sky-brand block sm:inline">
                    Sales Performance Engine
                  </span>
                </h2>
                <p className="text-sm text-gray-300 font-sans leading-relaxed">
                  A structured approach that brings together three essential elements of sales performance. When training happens without technology, or tools exist without accountability, performance remains inconsistent. The Sales Performance Engine connects all three into a continuous operational rhythm.
                </p>
              </div>

              {/* Three Strategic Elements (Clean Editorial Text - Zero UI Selectors/Tabs) */}
              <div className="space-y-4 pt-1">
                {/* 01 TRAINING */}
                <div className="border-l-2 border-sky-brand/40 pl-4 py-0.5">
                  <h3 className="text-xs font-mono font-bold tracking-wider uppercase text-sky-brand mb-1">
                    TRAINING
                  </h3>
                  <p className="text-xs text-gray-300 font-sans leading-relaxed">
                    {trainingPillar?.description ||
                      'Develops the skills, mindset, communication, and sales capabilities required for effective performance.'}
                  </p>
                </div>

                {/* 02 TECHNOLOGY */}
                <div className="border-l-2 border-sky-brand/40 pl-4 py-0.5">
                  <h3 className="text-xs font-mono font-bold tracking-wider uppercase text-sky-brand mb-1">
                    TECHNOLOGY
                  </h3>
                  <p className="text-xs text-gray-300 font-sans leading-relaxed">
                    {technologyPillar?.description ||
                      'Uses appropriate tools and systems to support sales visibility, tracking, coordination, and execution.'}
                  </p>
                </div>

                {/* 03 ACCOUNTABILITY */}
                <div className="border-l-2 border-sky-brand/40 pl-4 py-0.5">
                  <h3 className="text-xs font-mono font-bold tracking-wider uppercase text-sky-brand mb-1">
                    ACCOUNTABILITY
                  </h3>
                  <p className="text-xs text-gray-300 font-sans leading-relaxed">
                    {accountabilityPillar?.description ||
                      'Creates greater ownership through structured reviews, clear commitments, follow-through, and performance discussions.'}
                  </p>
                </div>
              </div>

              {/* Primary Commercial CTA Button */}
              <div className="pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={onCtaClick}
                  className="w-full sm:w-auto shadow-md bg-sky-brand text-navy hover:bg-white transition-colors font-bold"
                >
                  <span>Book Your Sales Strategy Call</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>

            {/* Right Column (60-62%): Large Editorial Visual Driven by Scroll */}
            <div className="col-span-12 lg:col-span-7 flex items-center justify-center">
              <EngineVisual currentStage={currentStage} />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default EngineDesktop;
