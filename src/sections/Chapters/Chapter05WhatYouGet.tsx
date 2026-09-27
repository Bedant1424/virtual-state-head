import React from 'react';
import { Container } from '@/components/layout/Container';
import { siteContent } from '@/data/siteContent';
import { useScrollReveal, staggerDelay, revealStyles } from '@/hooks/useMotion';

/**
 * CHAPTER 05 — WHAT YOUR BUSINESS GETS
 * Pure typographic authority. High-contrast headline bands acting as a rhythmic visual breath.
 * Zero cards, zero bloated descriptions.
 */
export const Chapter05WhatYouGet: React.FC = () => {
  const [sectionRef, isVisible] = useScrollReveal(0.15);
  const { valueAreas } = siteContent.benefits;

  return (
    <section
      id="benefits"
      ref={sectionRef}
      aria-labelledby="benefits-heading"
      className="py-8 sm:py-10 lg:py-12 bg-white border-b border-gray-200/80 overflow-hidden"
    >
      <Container size="default">
        {/* Section Headline with Mask Reveal */}
        <div className="mb-5 sm:mb-6">
          <div className={revealStyles.clipMaskContainer}>
            <h2
              id="benefits-heading"
              className={`text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold text-[#0B1F33] font-sans tracking-tight leading-tight ${
                revealStyles.clipMaskTransition
              } ${isVisible ? revealStyles.clipMaskVisible : revealStyles.clipMaskHidden}`}
            >
              More Than Training.{' '}
              <span className="text-[#123B63]">
                A Structured Approach to Sales Performance.
              </span>
            </h2>
          </div>
        </div>

        {/* Five Value Bands: High-Contrast Typographic Rhythm */}
        <div className="border-t border-gray-300 divide-y divide-gray-300">
          {valueAreas.map((area, idx) => (
            <div
              key={area.id}
              className={`py-2.5 sm:py-3.5 flex items-baseline gap-4 transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-3'
              }`}
              style={{ transitionDelay: staggerDelay(idx, 40) }}
            >
              <span className="text-xs font-mono font-bold text-[#123B63] w-6 shrink-0">
                {area.number}
              </span>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0B1F33] font-sans tracking-tight">
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
