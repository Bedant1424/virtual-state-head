import React from 'react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { vshImages } from '@/assets/images';
import { siteContent } from '@/data/siteContent';
import { ArrowRight, ShieldAlert } from 'lucide-react';

export interface Chapter09PerformanceGapBatchProps {
  onCtaClick?: () => void;
}

/**
 * CHAPTER 09 — THE PERFORMANCE GAP & UPCOMING BATCH
 * Editorial Strategic Authority
 *
 * Left: Photographic tension visual + 8 operational cost realities.
 * Right: Sculptural '10' cohort presentation + upcoming batch governance.
 * Zero fake countdown timers. Zero artificial pressure.
 */
export const Chapter09PerformanceGapBatch: React.FC<Chapter09PerformanceGapBatchProps> = ({ onCtaClick }) => {
  const { batch } = siteContent;

  const gapImpacts = [
    'Unmanaged pipeline leakage and lost deals',
    'Frequent discounting and margin erosion',
    'Founder exhaustion from daily firefighting',
    'Erratic and unpredictable revenue swings',
  ];

  return (
    <section
      id="batch"
      aria-labelledby="gap-batch-heading"
      className="py-16 sm:py-24 lg:py-28 bg-white border-b border-gray-200/80 overflow-hidden"
    >
      <Container size="default">
        {/* Chapter Micro-Index */}
        <div className="text-xs font-mono font-semibold uppercase tracking-widest text-[#123B63] mb-4">
          CHAPTER 09 • THE COST OF INACTION & THE NEXT COHORT
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2
            id="gap-batch-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F33] font-sans tracking-tight leading-tight mb-4"
          >
            The Hidden Cost of an{' '}
            <span className="text-[#123B63] block sm:inline">
              Unstructured Sales Team.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#333333] font-sans leading-relaxed">
            Without sales leadership and accountability, businesses continually absorb silent financial leakage across delayed deals, price cuts, and diverted executive focus.
          </p>
        </div>

        {/* 2-Column Split: The Gap Visual & Realities Left (55%), Cohort Focus Right (45%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column (7 cols): Tension Photo & 4 Core Friction Points */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative aspect-[16/9] w-full rounded-[4px] overflow-hidden border border-gray-200 bg-gray-50">
              <img
                src={vshImages.gap}
                alt="Architectural shadow and tension representing corporate performance drag"
                width={1200}
                height={675}
                className="w-full h-full object-cover object-center filter saturate-[0.9]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-[2px] bg-[#0B1F33]/80 backdrop-blur-xs text-[11px] font-mono text-white/90">
                THE PERFORMANCE GAP
              </div>
            </div>

            {/* Gap Impacts Register */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {gapImpacts.map((impact, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#333333] font-sans">
                  <ShieldAlert className="w-4 h-4 text-[#123B63] shrink-0 mt-0.5" />
                  <span>{impact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (5 cols): Disciplined Cohort Block with Sculptural '10' */}
          <div className="lg:col-span-5 bg-[#F3F5F7] rounded-[4px] border border-gray-300 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-baseline justify-between mb-4 pb-4 border-b border-gray-300">
                <span className="text-xs font-mono font-bold uppercase text-[#123B63] tracking-widest">
                  {batch.statusBadge}
                </span>
                <span className="text-[11px] font-mono text-[#6B7280]">
                  {batch.targetMarket}
                </span>
              </div>

              {/* Sculptural 10 Headline */}
              <div className="flex items-baseline gap-4 my-6">
                <span className="text-6xl sm:text-7xl font-extrabold text-[#0B1F33] font-mono leading-none tracking-tight">
                  10
                </span>
                <div className="text-xl sm:text-2xl font-extrabold text-[#0B1F33] font-sans leading-tight">
                  MSME Companies.
                  <span className="block text-[#123B63] font-bold text-base sm:text-lg">
                    One Focused Batch.
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#4A5568] font-sans leading-relaxed mb-6">
                To guarantee direct senior executive attention and high-touch oversight from Royal Bal and the lead coaches, each batch is strictly capped at ten client firms.
              </p>

              <div className="text-[11px] font-mono text-[#6B7280] bg-white p-3 rounded-[3px] border border-gray-200 mb-6">
                NOTE: {batch.note}
              </div>
            </div>

            {/* CTA 4 Placement */}
            <div>
              <Button
                variant="primary"
                size="lg"
                onClick={onCtaClick}
                className="w-full bg-[#123B63] text-white hover:bg-[#0B1F33] transition-colors font-bold px-8 py-4 rounded-[4px] shadow-none flex items-center justify-center gap-3 cursor-pointer"
              >
                <span>Book Your Sales Strategy Call</span>
                <ArrowRight className="w-4 h-4 text-[#87CEEB]" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Chapter09PerformanceGapBatch;
