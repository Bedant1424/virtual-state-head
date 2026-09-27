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
 * Compact: large image with overlapping headline card + 6 capability terms in tight grid.
 */
export const Chapter03IntroducingVSH: React.FC<Chapter03IntroducingVSHProps> = ({ onCtaClick }) => {
  const [sectionRef, isVisible] = useScrollReveal(0.1);
  const [capsRef, capsVisible] = useScrollReveal(0.2);

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
      className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden"
    >
      <Container size="default">
        {/* Asymmetric Header with Overlapping Card */}
        <div className="relative mb-10 sm:mb-14">
          {/* Large image — 3:2 aspect */}
          <div className="lg:w-9/12">
            <div className={`relative aspect-[3/2] w-full rounded-[4px] overflow-hidden ${revealStyles.imageTransition} ${isVisible ? revealStyles.imageVisible : revealStyles.imageHidden}`}>
              <img
                src={vshImages.introducingVsh}
                alt="Two senior Indian business leaders in deep strategic advisory discussion over operational plans"
                width={1200}
                height={800}
                className="w-full h-full object-cover object-center filter saturate-[0.95]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/50 via-[#0B1F33]/15 to-transparent pointer-events-none" />
              <div className="absolute top-3 left-3 px-3 py-1.5 rounded-[2px] bg-[#0B1F33]/80 backdrop-blur-xs text-[11px] font-mono text-white/90">
                SALES LEADERSHIP SUPPORT
              </div>
            </div>
          </div>

          {/* Overlapping statement card */}
          <div
            className={`lg:absolute lg:bottom-6 lg:right-0 lg:w-7/12 bg-white/95 backdrop-blur-md p-6 lg:p-8 rounded-[4px] lg:shadow-lg lg:border lg:border-gray-100 -mt-8 lg:mt-0 relative z-10 ${revealStyles.transition} ${isVisible ? revealStyles.visible : revealStyles.hidden}`}
            style={{ transitionDelay: '200ms' }}
          >
            <h2
              id="introducing-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F33] font-sans tracking-tight leading-[1.08] mb-3"
            >
              Experienced Sales Leadership.{' '}
              <span className="text-[#123B63] block mt-1 text-xl sm:text-2xl lg:text-3xl font-bold">
                Without Necessarily Hiring Another Full-Time Executive.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#333333] font-sans leading-relaxed mb-5">
              Virtual State Head provides experienced sales leadership, strategic direction, team development, performance consulting, and accountability support for MSMEs in Odisha that already have sales activity but need stronger direction, execution, and performance discipline.
            </p>
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

        {/* Compact Capability Grid */}
        <div ref={capsRef} className="pt-8 border-t border-gray-200">
          <div className={`text-xs font-mono font-bold uppercase tracking-wider text-[#123B63] mb-5 ${revealStyles.transition} ${capsVisible ? revealStyles.visible : revealStyles.hidden}`}>
            AREAS OF ACTIVE CONSULTING INTERVENTION
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4">
            {capabilityAreas.map((area, idx) => (
              <div
                key={area.num}
                className={`flex items-center gap-3 border-l-2 border-[#123B63] pl-3 py-1 ${revealStyles.transition} ${capsVisible ? revealStyles.visible : revealStyles.hidden}`}
                style={{ transitionDelay: staggerDelay(idx, 60) }}
              >
                <span className="text-xs font-mono font-bold text-[#123B63]">{area.num}</span>
                <h3 className="text-sm sm:text-base font-bold text-[#0B1F33] font-sans">
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
