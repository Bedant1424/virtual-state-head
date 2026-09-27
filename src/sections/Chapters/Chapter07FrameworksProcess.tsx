import React from 'react';
import { Container } from '@/components/layout/Container';
import { vshImages } from '@/assets/images';
import { siteContent } from '@/data/siteContent';

/**
 * CHAPTER 07 — FRAMEWORKS & ENGAGEMENT STAGES
 * Editorial Strategic Authority: Photographic / Reportage & Pure Typographic Sequence
 *
 * Left: 5 named sales methodologies in quiet, airy typography.
 * Right: Frontline field review visual (how_it_works_field.jpg).
 * Bottom: 6 engagement stages as PURE TYPOGRAPHY ONLY.
 * NO arrows. NO connectors. NO rails. NO progress bars. NO flowcharts.
 */
export const Chapter07FrameworksProcess: React.FC = () => {
  const { frameworks, processStages } = siteContent;

  return (
    <section
      id="how-it-works"
      aria-labelledby="frameworks-process-heading"
      className="py-16 sm:py-24 lg:py-28 bg-white border-b border-gray-200/80 overflow-hidden"
    >
      <Container size="default">
        {/* Section Headline */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2
            id="frameworks-process-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F33] font-sans tracking-tight leading-tight mb-4"
          >
            Structured Frameworks.{' '}
            <span className="text-[#123B63] block sm:inline">
              Disciplined Execution.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#333333] font-sans leading-relaxed">
            Practical sales methodologies deployed across a structured six-stage engagement cycle.
          </p>
        </div>

        {/* 2-Column Split: Five Frameworks Left (50%), Frontline Photography Right (50%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 sm:mb-20">
          {/* Left Column (6 cols): Five Named Frameworks */}
          <div className="lg:col-span-6 space-y-4">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#6B7280] mb-2">
              FIVE NAMED SALES FRAMEWORKS
            </div>

            <div className="border-t border-gray-300 divide-y divide-gray-300">
              {frameworks.map((fw) => (
                <div key={fw.id} className="py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <span className="text-xs font-mono font-bold text-[#123B63]">
                      {fw.number}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#0B1F33] font-sans">
                      {fw.name}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-[#6B7280]">
                    ROYAL WAY
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (6 cols): Photographic Field Review Visual */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/9] w-full rounded-[4px] overflow-hidden border border-gray-200 bg-gray-50">
              <img
                src={vshImages.howItWorks}
                alt="Frontline sales field review and strategic execution in Odisha"
                width={1200}
                height={675}
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

        {/* Six Engagement Stages: PURE TYPOGRAPHY ONLY (No arrows, no connectors, no rails, no flowcharts) */}
        <div className="pt-10 border-t border-gray-200">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#6B7280] mb-8">
            SIX ENGAGEMENT STAGES
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8 items-baseline">
            {processStages.map((stage) => (
              <div key={stage.id} className="space-y-1.5">
                <span className="text-xs font-mono font-bold text-[#123B63] block">
                  {stage.number}
                </span>
                <span className="text-base sm:text-lg font-bold text-[#0B1F33] font-sans tracking-tight block leading-snug">
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
