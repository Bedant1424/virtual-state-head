import React, { useRef, useState } from 'react';
import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import { EngineVisual } from './EngineVisual';
import { EngineProgressIndicator, type EngineStageIndex } from './EngineProgressIndicator';
import { siteContent } from '@/data/siteContent';
import { useScrollTrigger } from '@/hooks/useScrollTrigger';
import { ScrollTrigger } from '@/lib/gsap';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { clsx } from 'clsx';

export interface EngineDesktopProps {
  onCtaClick?: () => void;
}

/**
 * EngineDesktop
 * 2-Column Split signature experience for desktop screens (>=1024px).
 *
 * Layout:
 * - Left (38-40%): Editorial copy, three core pillars, and primary CTA.
 * - Right (60-62%): Large editorial SVG visual with 3 flowing ribbons converging to core.
 * - Height: clamped viewport height min(900px, calc(100svh - 68px)) with min-height 620px.
 * - Zero software dashboard jargon.
 */
export const EngineDesktop: React.FC<EngineDesktopProps> = ({ onCtaClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinWrapRef = useRef<HTMLDivElement>(null);
  const [currentStage, setCurrentStage] = useState<EngineStageIndex>(0);
  const triggerRef = useRef<ScrollTrigger | null>(null);

  const { engine } = siteContent;

  // GSAP ScrollTrigger Pinned Sequence
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
          let nextStage: EngineStageIndex = 0;

          if (p < 0.2) {
            nextStage = 0; // Overview / All
          } else if (p < 0.45) {
            nextStage = 1; // Training
          } else if (p < 0.7) {
            nextStage = 2; // Technology
          } else if (p < 0.9) {
            nextStage = 3; // Accountability
          } else {
            nextStage = 4; // Unified Engine
          }

          setCurrentStage((prev) => (prev !== nextStage ? nextStage : prev));
        },
      });

      triggerRef.current = trigger;
    },
    containerRef,
    []
  );

  const handleSelectStage = (targetStage: EngineStageIndex) => {
    setCurrentStage(targetStage);
    if (!triggerRef.current || !containerRef.current) return;
    const progressMap: Record<EngineStageIndex, number> = {
      0: 0.05,
      1: 0.32,
      2: 0.58,
      3: 0.8,
      4: 0.95,
    };
    const targetProgress = progressMap[targetStage];
    const startY = triggerRef.current.start;
    const totalDist = triggerRef.current.end - startY;
    const targetScroll = startY + totalDist * targetProgress;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  const pillarDescriptions = [
    {
      stage: 1 as EngineStageIndex,
      num: '01',
      title: 'Training',
      summary: 'Skills, mindset, communication & sales capability development.',
    },
    {
      stage: 2 as EngineStageIndex,
      num: '02',
      title: 'Technology',
      summary: 'Visibility, tracking, coordination & daily execution support.',
    },
    {
      stage: 3 as EngineStageIndex,
      num: '03',
      title: 'Accountability',
      summary: 'Structured reviews, clear commitments & disciplined follow-through.',
    },
  ];

  return (
    <div ref={containerRef} className="relative w-full bg-navy text-white">
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
          {/* Top Stage Indicator Strip */}
          <div className="flex items-center justify-between gap-4 mb-4">
            <SectionLabel
              label="The Core Mechanism"
              className="text-sky-brand border-sky-brand/30 bg-sky-brand/10"
            />
            <EngineProgressIndicator
              currentStage={currentStage}
              onSelectStage={handleSelectStage}
            />
          </div>

          {/* 2-Column Split: Left 38-40%, Right 60-62% */}
          <div className="grid grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column (38-40%): Editorial Copy & Pillar List & CTA */}
            <div className="col-span-12 lg:col-span-5 flex flex-col justify-center space-y-5">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-sans leading-tight mb-2">
                  <span>{engine.headline.primary} </span>
                  <span className="text-sky-brand block sm:inline">
                    {engine.headline.secondary}
                  </span>
                </h2>
                <p className="text-sm text-white/70 font-sans leading-relaxed">
                  Most sales initiatives fail because training happens without technology, or tools exist without accountability. The Sales Performance Engine unites all three elements into one continuous operational rhythm.
                </p>
              </div>

              {/* Three Strategic Elements List */}
              <div className="space-y-2.5">
                {pillarDescriptions.map((item) => {
                  const isActive = currentStage === item.stage || currentStage === 4;
                  return (
                    <button
                      key={item.num}
                      type="button"
                      onClick={() => handleSelectStage(item.stage)}
                      className={clsx(
                        'w-full text-left p-3 rounded-xl border transition-all duration-200 cursor-pointer flex items-start gap-3',
                        currentStage === item.stage
                          ? 'bg-sky-brand/15 border-sky-brand text-white shadow-xs'
                          : 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:border-white/20'
                      )}
                    >
                      <span
                        className={clsx(
                          'w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5',
                          currentStage === item.stage
                            ? 'bg-sky-brand text-navy'
                            : 'bg-white/10 text-sky-brand'
                        )}
                      >
                        {item.num}
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold font-sans uppercase tracking-wider text-white">
                            {item.title}
                          </span>
                          {isActive && (
                            <CheckCircle2 className="w-3.5 h-3.5 text-sky-brand" />
                          )}
                        </div>
                        <p className="text-xs text-white/60 font-sans leading-normal mt-0.5">
                          {item.summary}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Primary Commercial CTA Button */}
              <div className="pt-1">
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

            {/* Right Column (60-62%): Large Editorial SVG Visual */}
            <div className="col-span-12 lg:col-span-7 flex items-center justify-center">
              <EngineVisual
                currentStage={currentStage}
                onSelectStage={handleSelectStage}
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default EngineDesktop;
