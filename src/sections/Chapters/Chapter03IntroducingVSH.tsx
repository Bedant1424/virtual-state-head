import React from 'react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { vshImages } from '@/assets/images';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal, staggerDelay, revealStyles } from '@/hooks/useMotion';

export interface Chapter03IntroducingVSHProps {
  onCtaClick?: () => void;
}

/**
 * CHAPTER 03 — INTRODUCING VIRTUAL STATE HEAD
 * Open editorial composition: large documentary photograph + oversized headline + sparse capability typography.
 * ZERO cards, ZERO frosted glass, ZERO container boxes.
 */
export const Chapter03IntroducingVSH: React.FC<Chapter03IntroducingVSHProps> = ({ onCtaClick }) => {
  const [sectionRef, isVisible] = useScrollReveal(0.1);
  const [capsRef, capsVisible] = useScrollReveal(0.15);

  const capabilityAreas = [
    { num: '01', title: 'Sales Strategy' },
    { num: '02', title: 'Team Development' },
    { num: '03', title: 'Leadership Support' },
    { num: '04', title: 'Accountability' },
    { num: '05', title: 'Sales Execution' },
    { num: '06', title: 'Strategic Discussions' },
  ];

  return (
    <section
      id="about"
      aria-labelledby="introducing-heading"
      ref={sectionRef}
      className="py-8 sm:py-12 lg:py-14 bg-white border-b border-gray-200/80 overflow-hidden"
    >
      <Container size="default">
        {/* Editorial Split: Large Documentary Photo (7 cols) + Authoritative Statement (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center mb-8 sm:mb-10">
          {/* Left: Documentary Photograph */}
          <div className="lg:col-span-7">
            <div className={`relative aspect-[3/2] w-full rounded-[2px] overflow-hidden ${revealStyles.imageTransition} ${isVisible ? revealStyles.imageVisible : revealStyles.imageHidden}`}>
              <img
                src={vshImages.introducingVsh}
                alt="Two senior Indian business leaders in deep strategic advisory discussion over operational plans"
                width={1200}
                height={800}
                className="w-full h-full object-cover object-center filter saturate-[0.95]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 text-[10px] font-mono text-white/80 uppercase tracking-widest">
                SALES LEADERSHIP SUPPORT • ODISHA
              </div>
            </div>
          </div>

          {/* Right: Oversized Headline + Statement (Open canvas, no cards) */}
          <div className={`lg:col-span-5 space-y-4 sm:space-y-5 ${revealStyles.transition} ${isVisible ? revealStyles.visible : revealStyles.hidden}`}>
            <h2
              id="introducing-heading"
              className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold text-[#0B1F33] font-sans tracking-tight leading-[1.08]"
            >
              Experienced Sales Leadership.{' '}
              <span className="text-[#123B63] block mt-1 text-xl sm:text-2xl lg:text-3xl font-bold">
                Without Necessarily Hiring Another Full-Time Executive.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#333333] font-sans leading-relaxed">
              Virtual State Head provides experienced sales leadership, strategic direction, team development, performance consulting, and accountability support for MSMEs in Odisha that already have sales activity but need stronger direction, execution, and performance discipline.
            </p>

            <div className="pt-1">
              <Button
                variant="primary"
                size="lg"
                onClick={onCtaClick}
                className="w-full sm:w-auto bg-[#123B63] text-white hover:bg-[#0B1F33] transition-colors font-bold px-8 py-3.5 rounded-[4px] shadow-none flex items-center justify-center gap-3 cursor-pointer whitespace-nowrap"
              >
                <span>Book Your Sales Strategy Call</span>
                <ArrowRight className="w-4 h-4 text-[#87CEEB]" />
              </Button>
            </div>
          </div>
        </div>

        {/* Sparse Capability Typography: Open flow across canvas */}
        <div ref={capsRef} className="pt-6 border-t border-gray-200">
          <div className={`text-xs font-mono font-bold uppercase tracking-wider text-[#123B63] mb-4 sm:mb-5 ${revealStyles.transition} ${capsVisible ? revealStyles.visible : revealStyles.hidden}`}>
            AREAS OF ACTIVE CONSULTING INTERVENTION
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 items-baseline">
            {capabilityAreas.map((area, idx) => (
              <div
                key={area.num}
                className={`space-y-0.5 ${revealStyles.transition} ${capsVisible ? revealStyles.visible : revealStyles.hidden}`}
                style={{ transitionDelay: staggerDelay(idx, 40) }}
              >
                <span className="text-xs font-mono font-bold text-[#123B63] block">
                  {area.num}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-[#0B1F33] font-sans leading-snug">
                  {area.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Chapter03IntroducingVSH;
