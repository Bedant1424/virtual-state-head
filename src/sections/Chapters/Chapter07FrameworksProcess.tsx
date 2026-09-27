import React from 'react';
import { Container } from '@/components/layout/Container';
import { vshImages } from '@/assets/images';
import { siteContent } from '@/data/siteContent';
import { useScrollReveal, staggerDelay, revealStyles } from '@/hooks/useMotion';

/**
 * CHAPTER 07 — FRAMEWORKS & ENGAGEMENT STAGES
 * Compressed: larger image, stronger framework typography, tighter stage spacing.
 * Clip reveal on image, stagger on frameworks + stages.
 */
export const Chapter07FrameworksProcess: React.FC = () => {
  const { frameworks, processStages } = siteContent;
  const [sectionRef, isVisible] = useScrollReveal(0.1);
  const [stagesRef, stagesVisible] = useScrollReveal(0.2);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      aria-labelledby="frameworks-process-heading"
      className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden"
    >
      <Container size="default">
        {/* Compact headline */}
        <div className={`max-w-3xl mb-8 sm:mb-10 ${revealStyles.transition} ${isVisible ? revealStyles.visible : revealStyles.hidden}`}>
          <h2
            id="frameworks-process-heading"
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-[#0B1F33] font-sans tracking-tight leading-tight mb-2"
          >
            Structured Frameworks.{' '}
            <span className="text-[#123B63]">
              Disciplined Execution.
            </span>
          </h2>
        </div>

        {/* 2-Column: Frameworks left, large image right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-10 sm:mb-12">
          {/* Frameworks — stronger typography */}
          <div className="lg:col-span-5 space-y-0 border-t border-gray-300">
            {frameworks.map((fw, idx) => (
              <div
                key={fw.id}
                className={`py-3 flex items-center gap-3 border-b border-gray-300/60 ${revealStyles.transition} ${isVisible ? revealStyles.visible : revealStyles.hidden}`}
                style={{ transitionDelay: staggerDelay(idx, 60) }}
              >
                <span className="text-xs font-mono font-bold text-[#123B63]">
                  {fw.number}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#0B1F33] font-sans">
                  {fw.name}
                </h3>
              </div>
            ))}
          </div>

          {/* Large field image — 3:2 aspect */}
          <div className="lg:col-span-7">
            <div className={`relative aspect-[3/2] w-full rounded-[4px] overflow-hidden ${revealStyles.imageTransition} ${isVisible ? revealStyles.imageVisible : revealStyles.imageHidden}`}>
              <img
                src={vshImages.howItWorks}
                alt="Frontline sales field review and strategic execution in Odisha"
                width={1200}
                height={800}
                className="w-full h-full object-cover object-center filter saturate-[0.95]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/30 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-[2px] bg-[#0B1F33]/80 backdrop-blur-xs text-[11px] font-mono text-white/90">
                FRONTLINE FIELD REVIEW • ODISHA
              </div>
            </div>
          </div>
        </div>

        {/* Six Engagement Stages — large typography, tight gaps */}
        <div ref={stagesRef} className="pt-8 border-t border-gray-200">
          <div className={`text-xs font-mono font-bold uppercase tracking-wider text-[#6B7280] mb-5 ${revealStyles.transition} ${stagesVisible ? revealStyles.visible : revealStyles.hidden}`}>
            SIX ENGAGEMENT STAGES
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6 items-baseline">
            {processStages.map((stage, idx) => (
              <div
                key={stage.id}
                className={`space-y-1 ${revealStyles.transition} ${stagesVisible ? revealStyles.visible : revealStyles.hidden}`}
                style={{ transitionDelay: staggerDelay(idx, 80) }}
              >
                <span className="text-xs font-mono font-bold text-[#123B63] block">
                  {stage.number}
                </span>
                <span className="text-xl sm:text-2xl font-bold text-[#0B1F33] font-sans tracking-tight block leading-snug">
                  {stage.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Chapter07FrameworksProcess;
