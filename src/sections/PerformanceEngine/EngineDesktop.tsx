import React, { useRef, useState } from 'react';
import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import { EngineVisual } from './EngineVisual';
import { EnginePillarPanel } from './EnginePillarPanel';
import { EngineProgressIndicator, type EngineStageIndex } from './EngineProgressIndicator';
import { siteContent } from '@/data/siteContent';
import { useScrollTrigger } from '@/hooks/useScrollTrigger';
import { ScrollTrigger } from '@/lib/gsap';
import { ArrowRight } from 'lucide-react';

export interface EngineDesktopProps {
  onCtaClick?: () => void;
}

/**
 * EngineDesktop
 * Pinned GSAP ScrollTrigger signature experience for desktop screens.
 *
 * Sequence:
 * - State 0: Intro (System core waiting, three connection ports open)
 * - State 1: Training (01 Training active • Capability)
 * - State 2: Technology (02 Technology active • Visibility + Execution)
 * - State 3: Accountability (03 Accountability active • Follow-Through)
 * - State 4: Integration Climax (Three elements connect into the Sales Performance Engine)
 */
export const EngineDesktop: React.FC<EngineDesktopProps> = ({ onCtaClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinWrapRef = useRef<HTMLDivElement>(null);
  const [currentStage, setCurrentStage] = useState<EngineStageIndex>(0);
  const triggerRef = useRef<ScrollTrigger | null>(null);

  const { engine } = siteContent;

  // GSAP ScrollTrigger Pinned Narrative Scene
  useScrollTrigger(
    () => {
      if (!containerRef.current || !pinWrapRef.current) return;

      const trigger = ScrollTrigger.create({
        trigger: containerRef.current,
        pin: pinWrapRef.current,
        start: 'top top',
        end: '+=220%',
        scrub: 0.5,
        anticipatePin: 1,
        onUpdate: (self) => {
          const p = self.progress;
          let nextStage: EngineStageIndex = 0;

          if (p < 0.18) {
            nextStage = 0; // Intro
          } else if (p < 0.38) {
            nextStage = 1; // Training
          } else if (p < 0.58) {
            nextStage = 2; // Technology
          } else if (p < 0.78) {
            nextStage = 3; // Accountability
          } else {
            nextStage = 4; // Integration Climax
          }

          setCurrentStage((prev) => (prev !== nextStage ? nextStage : prev));
        },
      });

      triggerRef.current = trigger;
    },
    containerRef,
    []
  );

  // Jump scroll position when user clicks stage buttons
  const handleSelectStage = (targetStage: EngineStageIndex) => {
    setCurrentStage(targetStage);

    if (!triggerRef.current || !containerRef.current) return;
    // Map stage to target progress
    const progressMap: Record<EngineStageIndex, number> = {
      0: 0.05,
      1: 0.28,
      2: 0.48,
      3: 0.68,
      4: 0.88,
    };
    const targetProgress = progressMap[targetStage];
    const startY = triggerRef.current.start;
    const totalDist = triggerRef.current.end - startY;
    const targetScroll = startY + totalDist * targetProgress;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  // Keyboard focus inspection without forcing page scroll
  const handleFocusPillar = (targetStage: EngineStageIndex) => {
    setCurrentStage(targetStage);
  };

  return (
    <div ref={containerRef} className="relative w-full bg-navy text-white">
      {/* Pinned Viewport Container */}
      <div
        ref={pinWrapRef}
        className="w-full min-h-screen flex flex-col justify-center py-8 lg:py-12 overflow-hidden"
      >
        <Container size="default">
          {/* Header Row: Eyebrow + Minimal Stage Progress Indicator */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <SectionLabel label={engine.eyebrow} className="text-sky-brand border-sky-brand/30 bg-sky-brand/10" />
            </div>
            <EngineProgressIndicator
              currentStage={currentStage}
              onSelectStage={handleSelectStage}
            />
          </div>

          {/* Section Headline & Intro */}
          <div className="max-w-3xl mb-8">
            <h2 className="typography-h2 text-white mb-2 font-sans">
              <span>{engine.headline.primary} </span>
              <span className="text-sky-brand font-extrabold block sm:inline">
                {engine.headline.secondary}
              </span>
            </h2>
            <p className="text-sm sm:text-base text-white/70 font-sans leading-relaxed">
              {engine.intro}
            </p>
          </div>

          {/* Main 2-Column Storytelling Grid */}
          <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column (5 cols): Dynamic Pillar Detail Panel & Primary CTA */}
            <div className="col-span-12 lg:col-span-5 space-y-6">
              <EnginePillarPanel
                currentStage={currentStage}
                pillars={engine.pillars}
                climaxData={engine.climax}
                onSelectPillarStage={handleFocusPillar}
              />

              {/* Primary Commercial CTA Button */}
              <div className="pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={onCtaClick}
                  className="w-full sm:w-auto shadow-md bg-sky-brand text-navy hover:bg-white transition-colors"
                >
                  <span>Book Your Sales Strategy Call</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>

            {/* Right Column (7 cols): Centerpiece Vector Engine Visual */}
            <div className="col-span-12 lg:col-span-7">
              <EngineVisual
                currentStage={currentStage}
                pillars={engine.pillars}
                onSelectStage={handleSelectStage}
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
