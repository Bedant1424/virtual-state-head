import React, { useRef, useState } from 'react';
import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ProblemVisual, type VisualStateType } from './ProblemVisual';
import { ProblemProgressIndicator } from './ProblemProgressIndicator';
import { siteContent, type ProblemStage } from '@/data/siteContent';
import { useScrollTrigger } from '@/hooks/useScrollTrigger';
import { ScrollTrigger } from '@/lib/gsap';
import { AnimatePresence, m } from 'motion/react';
import { ArrowRight, AlertCircle, Sparkles, CheckCircle2 } from 'lucide-react';

export const ProblemDesktop: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinWrapRef = useRef<HTMLDivElement>(null);
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const timelineTriggerRef = useRef<ScrollTrigger | null>(null);

  const problemData = siteContent.problem;
  const stages = problemData.stages;

  // Map 0..6 indices to VisualStateType
  const visualStateMap: VisualStateType[] = [
    'busy',                  // 0: Initial Busy Activity
    'misaligned',            // 1: 01 - Sales Without Clear Direction
    'inconsistent',          // 2: 02 - Inconsistent Sales Performance
    'unaccounted',            // 3: 03 - Weak Accountability
    'missed-opportunities',  // 4: 04 - Missed Opportunities
    'leadership-gap',        // 5: 05 - Leadership Gaps
    'recognition',           // 6: Recognition (Activity != Performance)
  ];

  const currentVisualState = visualStateMap[activeStageIndex] || 'busy';
  const currentStage: ProblemStage | undefined =
    activeStageIndex >= 1 && activeStageIndex <= 5 ? stages[activeStageIndex - 1] : undefined;

  // GSAP ScrollTrigger Pinned Narrative Setup
  useScrollTrigger(
    () => {
      if (!containerRef.current || !pinWrapRef.current) return;

      const trigger = ScrollTrigger.create({
        trigger: containerRef.current,
        pin: pinWrapRef.current,
        start: 'top top',
        end: '+=320%',
        scrub: 0.5,
        anticipatePin: 1,
        onUpdate: (self) => {
          const p = self.progress;
          let nextIndex = 0;

          if (p < 0.14) {
            nextIndex = 0;
          } else if (p < 0.28) {
            nextIndex = 1;
          } else if (p < 0.42) {
            nextIndex = 2;
          } else if (p < 0.57) {
            nextIndex = 3;
          } else if (p < 0.71) {
            nextIndex = 4;
          } else if (p < 0.85) {
            nextIndex = 5;
          } else {
            nextIndex = 6;
          }

          setActiveStageIndex((prev) => (prev !== nextIndex ? nextIndex : prev));
        },
      });

      timelineTriggerRef.current = trigger;
    },
    containerRef,
    []
  );

  // Jump scroll position when user clicks stage buttons
  const handleSelectStage = (stageIdx: number) => {
    if (!timelineTriggerRef.current || !containerRef.current) return;
    const targetProgress = (stageIdx * 0.14) + 0.04;
    const startY = timelineTriggerRef.current.start;
    const totalDist = timelineTriggerRef.current.end - startY;
    const targetScroll = startY + totalDist * targetProgress;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  return (
    <div ref={containerRef} className="relative w-full bg-white">
      {/* Pinned Viewport Container */}
      <div
        ref={pinWrapRef}
        className="w-full min-h-screen flex flex-col justify-center py-10 lg:py-16 overflow-hidden"
      >
        <Container size="default">
          {/* Section Header Eyebrow & Headline */}
          <div className="mb-6 lg:mb-8">
            <div className="mb-3">
              <SectionLabel label={problemData.eyebrow} />
            </div>
            <h2 className="typography-h2 text-navy max-w-3xl font-extrabold tracking-tight">
              {problemData.headline}
            </h2>
          </div>

          {/* Minimal Progress Indicator */}
          <div className="mb-6 pb-4 border-b border-gray-100 flex items-center justify-between">
            <ProblemProgressIndicator
              currentStageIndex={activeStageIndex}
              onSelectStage={handleSelectStage}
            />
            <span className="text-xs text-muted font-medium hidden sm:inline-block">
              Scroll down to explore the diagnostic sequence
            </span>
          </div>

          {/* 2-Column Pinned Composition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Narrative Card */}
            <div className="lg:col-span-5 flex flex-col justify-center min-h-[380px]">
              <AnimatePresence mode="wait">
                {/* STATE 0: Initial Busy Activity Context */}
                {activeStageIndex === 0 && (
                  <m.div
                    key="state-0"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-soft-blue text-deep-blue text-xs font-bold border border-sky-brand/30">
                      <Sparkles className="w-3.5 h-3.5 text-sky-brand" />
                      <span>The Starting Reality</span>
                    </div>

                    <h3 className="typography-h3 text-navy font-bold">
                      {problemData.state0Busy.title}
                    </h3>

                    <div className="space-y-3 text-muted typography-body leading-relaxed">
                      {problemData.introParagraphs.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>

                    <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-deep-blue">
                      <span>Begin scrolling to examine where friction enters the system</span>
                      <ArrowRight className="w-4 h-4 text-sky-brand animate-bounceX" />
                    </div>
                  </m.div>
                )}

                {/* STATES 1 to 5: Approved Problems 01 to 05 */}
                {currentStage && (
                  <m.div
                    key={`state-${currentStage.number}`}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-xl bg-paper/60 border border-gray-200/80 p-6 sm:p-7 shadow-xs space-y-4"
                  >
                    {/* Stage Eyebrow & Number Badge */}
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-deep-blue px-2.5 py-1 rounded bg-soft-blue border border-sky-brand/30">
                        Problem {currentStage.number}
                      </span>
                      <span className="text-xs font-semibold text-muted">
                        {currentStage.shortLabel}
                      </span>
                    </div>

                    {/* Problem Title */}
                    <h3 className="typography-h3 text-navy font-bold">
                      {currentStage.title}
                    </h3>

                    {/* Approved Description */}
                    <p className="typography-body text-charcoal leading-relaxed">
                      {currentStage.description}
                    </p>

                    {/* Operational Impact (strictly derived from source) */}
                    <div className="pt-3 border-t border-gray-200/60 flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 text-deep-blue shrink-0 mt-0.5" />
                      <p className="typography-small text-muted">
                        <strong className="text-deep-blue font-semibold">Strategic Impact: </strong>
                        {currentStage.operationalImpact}
                      </p>
                    </div>
                  </m.div>
                )}

                {/* STATE 6: Climax / Recognition (Activity != Performance) */}
                {activeStageIndex === 6 && (
                  <m.div
                    key="state-6-recognition"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.35 }}
                    className="rounded-xl bg-soft-blue/60 border border-sky-brand/50 p-6 sm:p-7 shadow-sm space-y-4"
                  >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-deep-blue text-white text-xs font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-brand" />
                      <span>Diagnostic Conclusion</span>
                    </div>

                    {/* The Core Recognition Equation */}
                    <div className="py-2 border-y border-deep-blue/15">
                      <span className="block text-xs font-mono uppercase tracking-widest text-deep-blue font-bold mb-1">
                        Systemic Insight
                      </span>
                      <p className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight font-mono">
                        {problemData.climax.equation}
                      </p>
                    </div>

                    {/* Supporting Statement & Closing Idea */}
                    <p className="typography-body text-charcoal font-semibold leading-relaxed">
                      {problemData.climax.supportingStatement}
                    </p>

                    <p className="typography-small text-muted italic">
                      "{problemData.climax.closingIdea}"
                    </p>
                  </m.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right Column: Conceptual Systems Diagram Visual */}
            <div className="lg:col-span-7">
              <ProblemVisual activeState={currentVisualState} />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
