import React from 'react';
import { Container } from '@/components/layout/Container';
import { siteContent } from '@/data/siteContent';

/**
 * CHAPTER 05 — WHAT YOUR BUSINESS GETS
 * Editorial Strategic Authority
 *
 * Five structured value areas (I to V) presented with hairline dividers.
 * Direct editorial typography on open canvas. Zero cards, zero icons in boxes.
 */
export const Chapter05WhatYouGet: React.FC = () => {
  const { valueAreas } = siteContent.benefits;
  const romanNumerals = ['I', 'II', 'III', 'IV', 'V'];

  return (
    <section
      id="benefits"
      aria-labelledby="benefits-heading"
      className="py-16 sm:py-24 lg:py-28 bg-white border-b border-gray-200/80 overflow-hidden"
    >
      <Container size="default">
        {/* Chapter Micro-Index */}
        <div className="text-xs font-mono font-semibold uppercase tracking-widest text-[#123B63] mb-4">
          CHAPTER 05 • FIVE STRUCTURED VALUE AREAS
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2
            id="benefits-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F33] font-sans tracking-tight leading-tight mb-4"
          >
            More Than Training.{' '}
            <span className="text-[#123B63] block sm:inline">
              A Structured Approach to Sales Performance.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#333333] font-sans leading-relaxed">
            Virtual State Head addresses the broader sales performance system, aligning strategy, capability, leadership, execution, and accountability into a single operational rhythm.
          </p>
        </div>

        {/* Five Value Areas: Editorial Linear Register with Hairline Separators */}
        <div className="border-t border-gray-300 divide-y divide-gray-300">
          {valueAreas.map((area, index) => (
            <div
              key={area.id}
              className="py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-baseline"
            >
              {/* Roman Numeral & Title (4 cols) */}
              <div className="lg:col-span-4 flex items-baseline gap-4">
                <span className="text-sm font-mono font-bold text-[#123B63] w-6 shrink-0">
                  {romanNumerals[index]}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0B1F33] font-sans tracking-tight">
                  {area.title}
                </h3>
              </div>

              {/* Description (7 cols) */}
              <div className="lg:col-span-7">
                <p className="text-sm sm:text-base text-[#4A5568] font-sans leading-relaxed">
                  {area.description}
                </p>
              </div>

              {/* Strategic Anchor Tag (1 col) */}
              <div className="hidden lg:block lg:col-span-1 text-right">
                <span className="text-[10px] font-mono font-bold uppercase text-[#123B63]/60 tracking-wider">
                  PILLAR {area.number}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Authority Editorial Footnote */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-baseline justify-between gap-4 text-xs font-mono text-[#6B7280]">
          <div>SYSTEMIC INTEGRATION • NO STANDALONE COMMODITY WORKSHOPS</div>
          <div className="text-[#123B63] font-semibold">ODISHA MSME COMMERCIAL EXECUTION</div>
        </div>
      </Container>
    </section>
  );
};

export default Chapter05WhatYouGet;
