import React from 'react';
import { Container } from '@/components/layout/Container';
import { vshImages } from '@/assets/images';
import { useScrollReveal, staggerDelay, revealStyles } from '@/hooks/useMotion';

/**
 * CHAPTER 02 — THE PROBLEM
 * Compressed composition: dominant image + headline + 5 scannable gaps.
 * Image mask reveal + heading reveal + problem items stagger.
 */
export const Chapter02Problem: React.FC = () => {
  const [sectionRef, isVisible] = useScrollReveal(0.1);
  const [gapsRef, gapsVisible] = useScrollReveal(0.2);

  const operationalGaps = [
    { num: '01', title: 'Sales Without Clear Direction' },
    { num: '02', title: 'Inconsistent Sales Performance' },
    { num: '03', title: 'Weak Accountability' },
    { num: '04', title: 'Missed Opportunities' },
    { num: '05', title: 'Leadership Gaps' },
  ];

  return (
    <section
      id="problem"
      aria-labelledby="problem-heading"
      className="relative py-12 sm:py-16 lg:py-20 bg-[#F3F5F7] overflow-hidden"
    >
      <Container size="default">
        {/* Compact 2-column: Large image left, headline + gaps right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Dominant atmospheric image with mask reveal */}
          <div className="lg:col-span-6" ref={sectionRef}>
            <div className={`relative aspect-[4/3] w-full rounded-[4px] overflow-hidden ${revealStyles.imageTransition} ${isVisible ? 'clip-reveal-done' : 'clip-reveal-start'}`}>
              <img
                src={vshImages.problem}
                alt="Executive boardroom table at dusk with solitary lamp illuminating operational reports"
                width={1200}
                height={900}
                className={`w-full h-full object-cover object-center filter saturate-[0.9] contrast-[1.05] ${revealStyles.imageTransition} ${isVisible ? revealStyles.imageVisible : revealStyles.imageHidden}`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-[2px] bg-[#0B1F33]/80 backdrop-blur-xs text-[11px] font-mono text-white/90">
                THE OPERATIONAL BOTTLENECK
              </div>
            </div>
          </div>

          {/* Right: Headline + 5 scannable gaps */}
          <div className="lg:col-span-6 space-y-6">
            <div className={`${revealStyles.transition} ${isVisible ? revealStyles.visible : revealStyles.hidden}`}>
              <h2
                id="problem-heading"
                className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-[#0B1F33] font-sans tracking-tight leading-tight mb-3"
              >
                More Salespeople. More Targets.{' '}
                <span className="text-[#123B63] block sm:inline">
                  Still Not Enough Sales?
                </span>
              </h2>
              <p className="text-sm sm:text-base text-[#333333] font-sans leading-relaxed">
                Most sales difficulties in growing MSMEs stem from a lack of sales direction, execution discipline, and regular accountability—not a lack of salespeople.
              </p>
            </div>

            {/* 5 Operational Gaps — scannable, compact */}
            <div ref={gapsRef} className="space-y-0 border-t border-gray-300">
              {operationalGaps.map((item, idx) => (
                <div
                  key={item.num}
                  className={`py-3 flex items-center gap-3 border-b border-gray-300/60 ${revealStyles.transition} ${gapsVisible ? revealStyles.visible : revealStyles.hidden}`}
                  style={{ transitionDelay: staggerDelay(idx, 60) }}
                >
                  <span className="text-xs font-mono font-bold text-[#123B63] shrink-0 w-6">
                    {item.num}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-[#0B1F33] font-sans leading-snug">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>

            {/* Closing principle */}
            <p className="text-sm font-semibold text-[#0B1F33] font-sans italic border-l-2 border-[#87CEEB] pl-4 py-1 leading-relaxed">
              "A hardworking sales team still needs direction, execution discipline, and accountability around the work."
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Chapter02Problem;
