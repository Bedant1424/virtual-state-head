import React from 'react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { vshImages } from '@/assets/images';
import { siteContent } from '@/data/siteContent';
import { ArrowRight } from 'lucide-react';

export interface Chapter06EngineProps {
  onCtaClick?: () => void;
}

/**
 * CHAPTER 06 — SALES PERFORMANCE ENGINE
 * Editorial Strategic Authority
 *
 * Three core pillars: Training + Technology + Accountability.
 * Right: Optical prism visual with 3 converging streams.
 * Left: Clean editorial presentation. Zero UI tabs or control buttons.
 * Height clamped to min(900px, calc(100svh - 68px)) on desktop.
 */
export const Chapter06Engine: React.FC<Chapter06EngineProps> = ({ onCtaClick }) => {
  const { pillars } = siteContent.engine;

  return (
    <section
      id="engine"
      aria-labelledby="engine-heading"
      className="py-16 sm:py-24 lg:py-28 bg-[#F3F5F7] border-b border-gray-200/80 overflow-hidden"
    >
      <Container size="default">
        {/* Chapter Micro-Index */}
        <div className="text-xs font-mono font-semibold uppercase tracking-widest text-[#123B63] mb-4">
          CHAPTER 06 • THE OPERATING APPROACH
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2
            id="engine-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F33] font-sans tracking-tight leading-tight mb-4"
          >
            Introducing the{' '}
            <span className="text-[#123B63] block sm:inline">
              Sales Performance Engine
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#333333] font-sans leading-relaxed">
            A structured approach that brings together three essential elements of sales performance to create repeatable commercial consistency.
          </p>
        </div>

        {/* 2-Column Split: Editorial Pillars Left (48%), Optical Prism Visual Right (52%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column (5 cols): Three Clear Pillars + Climax Formula (No Tab Buttons) */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div className="border-t border-gray-300 divide-y divide-gray-300">
              {pillars.map((pillar) => (
                <div key={pillar.id} className="py-5">
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="text-xs font-mono font-bold text-[#123B63]">
                      {pillar.number}
                    </span>
                    <h3 className="text-lg font-bold text-[#0B1F33] font-sans uppercase tracking-wide">
                      {pillar.title}
                    </h3>
                    <span className="text-[11px] font-mono font-medium text-[#6B7280] ml-auto uppercase">
                      {pillar.coreConcept}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4A5568] font-sans leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Convergence Formula Box (No Card Cage, Clean Border Rule) */}
            <div className="bg-white p-5 rounded-[4px] border border-gray-300 space-y-2">
              <div className="text-[11px] font-mono font-semibold uppercase tracking-widest text-[#123B63]">
                CONVERGENCE PRINCIPLE
              </div>
              <p className="text-sm font-semibold text-[#0B1F33] leading-snug">
                Training builds capability. Technology supports execution. Accountability strengthens follow-through.
              </p>
            </div>

            {/* CTA 3 Placement */}
            <div className="pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={onCtaClick}
                className="w-full sm:w-auto bg-[#123B63] text-white hover:bg-[#0B1F33] transition-colors font-bold px-8 py-4 rounded-[4px] shadow-none flex items-center justify-center gap-3 cursor-pointer"
              >
                <span>Book Your Sales Strategy Call</span>
                <ArrowRight className="w-4 h-4 text-[#87CEEB]" />
              </Button>
            </div>
          </div>

          {/* Right Column (7 cols): Optical Prism Visual Field */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/9] w-full rounded-[4px] overflow-hidden border border-gray-300 shadow-none bg-white">
              <img
                src={vshImages.engine}
                alt="Optical glass prism refracting 3 light streams: Training, Technology, and Accountability"
                width={1200}
                height={675}
                className="w-full h-full object-cover object-center filter saturate-[1.05]"
                loading="lazy"
              />
              {/* Cinematic Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/40 via-transparent to-transparent pointer-events-none" />

              {/* Three Stream Flow Markers */}
              <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[2px] bg-[#0B1F33]/80 backdrop-blur-xs text-[10px] font-mono text-white/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#87CEEB]" />
                  STREAM 01: CAPABILITY
                </span>
                <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[2px] bg-[#0B1F33]/80 backdrop-blur-xs text-[10px] font-mono text-white/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#87CEEB]" />
                  STREAM 02: VISIBILITY
                </span>
                <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[2px] bg-[#0B1F33]/80 backdrop-blur-xs text-[10px] font-mono text-white/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#87CEEB]" />
                  STREAM 03: GOVERNANCE
                </span>
              </div>

              {/* Resolution Label */}
              <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-[2px] bg-[#0B1F33]/85 backdrop-blur-xs text-[11px] font-mono text-white/95">
                SALES PERFORMANCE ENGINE
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Chapter06Engine;
