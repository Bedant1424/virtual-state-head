import React from 'react';
import { Container } from '@/components/layout/Container';
import { siteContent } from '@/data/siteContent';
import { useScrollReveal, staggerDelay, revealStyles } from '@/hooks/useMotion';

/**
 * CHAPTER 05 — WHAT YOUR BUSINESS GETS
 * Dramatically compressed. Large typography, no descriptions.
 * Sequential scroll reveal stagger.
 */
export const Chapter05WhatYouGet: React.FC = () => {
  const [sectionRef, isVisible] = useScrollReveal(0.15);
  const { valueAreas } = siteContent.benefits;

  return (
    <section
      id="benefits"
      ref={sectionRef}
      aria-labelledby="benefits-heading"
      className="py-10 sm:py-14 lg:py-16 bg-white overflow-hidden"
    >
      <Container size="default">
        {/* Compact headline — no supporting paragraph */}
        <div className={`mb-6 sm:mb-8 ${revealStyles.transition} ${isVisible ? revealStyles.visible : revealStyles.hidden}`}>
          <h2
            id="benefits-heading"
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-[#0B1F33] font-sans tracking-tight leading-tight"
          >
            More Than Training.{' '}
            <span className="text-[#123B63]">
              A Structured Approach to Sales Performance.
            </span>
          </h2>
        </div>

        {/* Five value bands — large typography, tight spacing */}
        <div className="border-t border-gray-300 divide-y divide-gray-300">
          {valueAreas.map((area, idx) => (
            <div
              key={area.id}
              className={`py-3 sm:py-4 flex items-baseline gap-4 ${revealStyles.transition} ${isVisible ? revealStyles.visible : revealStyles.hidden}`}
              style={{ transitionDelay: staggerDelay(idx, 80) }}
            >
              <span className="text-xs font-mono font-bold text-[#123B63] w-6 shrink-0">
                {area.number}
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B1F33] font-sans tracking-tight">
                {area.shortLabel}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Chapter05WhatYouGet;
