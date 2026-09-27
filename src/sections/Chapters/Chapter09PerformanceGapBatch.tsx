import React from 'react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { vshImages } from '@/assets/images';
import { siteContent } from '@/data/siteContent';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal, staggerDelay, revealStyles } from '@/hooks/useMotion';

export interface Chapter09PerformanceGapBatchProps {
  onCtaClick?: () => void;
}

/**
 * CHAPTER 09 — THE PERFORMANCE GAP & UPCOMING BATCH
 * Compressed: tension image + compact impact grid + sculptural "10" moment.
 * The "10" scales in on scroll reveal.
 */
export const Chapter09PerformanceGapBatch: React.FC<Chapter09PerformanceGapBatchProps> = ({ onCtaClick }) => {
  const { batch } = siteContent;
  const [sectionRef, isVisible] = useScrollReveal(0.1);
  const [batchRef, batchVisible] = useScrollReveal(0.2);

  const gapImpacts = [
    'Lost or delayed sales opportunities',
    'Inconsistent follow-up',
    'Weak visibility into sales activities',
    'Unclear ownership of targets',
    'Repeated negotiation difficulties',
    'Underdeveloped sales capability',
    'Excessive dependence on the business owner',
    'Time spent managing problems that could be addressed more systematically',
  ];

  return (
    <section
      id="batch"
      aria-labelledby="gap-batch-heading"
      className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden"
    >
      <Container size="default">
        {/* Compact headline */}
        <div className={`max-w-3xl mb-8 sm:mb-10 ${revealStyles.transition} ${isVisible ? revealStyles.visible : revealStyles.hidden}`} ref={sectionRef}>
          <h2
            id="gap-batch-heading"
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-[#0B1F33] font-sans tracking-tight leading-tight mb-2"
          >
            The Operational Cost of an{' '}
            <span className="text-[#123B63]">
              Unstructured Sales Function.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left: Tension image + compact impact grid */}
          <div className="lg:col-span-7 space-y-5">
            <div className={`relative aspect-[2/1] w-full rounded-[4px] overflow-hidden ${revealStyles.imageTransition} ${isVisible ? revealStyles.imageVisible : revealStyles.imageHidden}`}>
              <img
                src={vshImages.gap}
                alt="Architectural shadow and tension representing operational friction across sales functions"
                width={1200}
                height={600}
                className="w-full h-full object-cover object-center filter saturate-[0.9]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-[2px] bg-[#0B1F33]/80 backdrop-blur-xs text-[11px] font-mono text-white/90">
                THE PERFORMANCE GAP
              </div>
            </div>

            {/* Compact 2-col impact grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
              {gapImpacts.map((impact, idx) => (
                <div
                  key={idx}
                  className={`flex items-baseline gap-2 text-xs sm:text-sm text-[#333333] font-sans py-1 ${revealStyles.transition} ${isVisible ? revealStyles.visible : revealStyles.hidden}`}
                  style={{ transitionDelay: staggerDelay(idx, 40) }}
                >
                  <span className="text-xs font-mono font-bold text-[#123B63] shrink-0">
                    {String(idx + 1).padStart(2, '0')}.
                  </span>
                  <span className="leading-snug">{impact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Sculptural cohort block with animated "10" */}
          <div
            ref={batchRef}
            className="lg:col-span-5 bg-[#F3F5F7] rounded-[4px] border border-gray-300 p-6 sm:p-8"
          >
            <div className="flex items-baseline justify-between mb-3 pb-3 border-b border-gray-300">
              <span className="text-xs font-mono font-bold uppercase text-[#123B63] tracking-wider">
                {batch.statusBadge}
              </span>
              <span className="text-[11px] font-mono text-[#6B7280]">
                {batch.targetMarket}
              </span>
            </div>

            {/* Sculptural 10 — scales in on reveal */}
            <div className={`flex items-baseline gap-4 my-5 transition-all duration-1000 ease-out ${
              batchVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.6]'
            }`}>
              <span className="text-7xl sm:text-8xl lg:text-[6.5rem] font-extrabold text-[#0B1F33] font-mono leading-none tracking-tighter">
                10
              </span>
              <div className="text-xl sm:text-2xl font-extrabold text-[#0B1F33] font-sans leading-tight">
                MSME Companies.
                <span className="block text-[#123B63] font-bold text-base sm:text-lg">
                  One Focused Batch.
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#4A5568] font-sans leading-relaxed mb-4">
              Each batch is strictly limited to 10 MSME companies from Odisha to ensure intensive coaching attention and executive oversight.
            </p>

            <div className="text-[11px] font-mono text-[#6B7280] bg-white p-3 rounded-[3px] border border-gray-200 mb-5">
              NOTE: {batch.note}
            </div>

            <Button
              variant="primary"
              size="lg"
              onClick={onCtaClick}
              className="w-full bg-[#123B63] text-white hover:bg-[#0B1F33] transition-colors font-bold px-8 py-4 rounded-[4px] shadow-none flex items-center justify-center gap-3 cursor-pointer whitespace-nowrap"
            >
              <span>Book Your Sales Strategy Call</span>
              <ArrowRight className="w-4 h-4 text-[#87CEEB]" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Chapter09PerformanceGapBatch;
