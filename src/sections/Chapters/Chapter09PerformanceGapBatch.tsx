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
 * Open canvas: Architectural tension visual + 8 operational impacts on left.
 * Right: The "10" is a pure typographic visual event with NO enclosing card.
 * ZERO cards, ZERO container boxes.
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
      className="py-8 sm:py-12 lg:py-14 bg-white border-b border-gray-200/80 overflow-hidden"
    >
      <Container size="default">
        {/* Section Headline */}
        <div
          ref={sectionRef}
          className={`max-w-3xl mb-6 sm:mb-8 ${revealStyles.transition} ${
            isVisible ? revealStyles.visible : revealStyles.hidden
          }`}
        >
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          {/* Left: Tension image + 8 impacts matrix */}
          <div className="lg:col-span-6 space-y-4">
            <div
              className={`relative aspect-[2/1] w-full rounded-[2px] overflow-hidden ${
                revealStyles.imageTransition
              } ${isVisible ? revealStyles.imageVisible : revealStyles.imageHidden}`}
            >
              <img
                src={vshImages.gap}
                alt="Architectural shadow and tension representing operational friction across sales functions"
                width={1200}
                height={600}
                className="w-full h-full object-cover object-center filter saturate-[0.9]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 text-[10px] font-mono text-white/80 uppercase tracking-widest">
                THE PERFORMANCE GAP • COMMERCIAL FRICTION
              </div>
            </div>

            {/* Eight Approved Impacts: 2-Column Hairline Matrix */}
            <div className="grid grid-cols-2 gap-x-3 sm:gap-x-6 gap-y-1.5 pt-2 border-t border-gray-200">
              {gapImpacts.map((impact, idx) => (
                <div
                  key={idx}
                  className={`flex items-baseline gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-[#333333] font-sans py-1 sm:py-1.5 border-b border-gray-100 ${
                    revealStyles.transition
                  } ${isVisible ? revealStyles.visible : revealStyles.hidden}`}
                  style={{ transitionDelay: staggerDelay(idx, 30) }}
                >
                  <span className="text-[11px] font-mono font-bold text-[#123B63] shrink-0">
                    {String(idx + 1).padStart(2, '0')}.
                  </span>
                  <span className="leading-tight sm:leading-snug">{impact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Typographic "10" Event (Open Canvas, No Enclosing Card) */}
          <div
            ref={batchRef}
            className="lg:col-span-6 flex flex-col justify-between space-y-4 lg:pl-6"
          >
            {/* Header info line with delicate hairline */}
            <div className="flex items-baseline justify-between pb-2.5 border-b border-gray-200">
              <span className="text-xs font-mono font-bold uppercase text-[#123B63] tracking-wider">
                {batch.statusBadge}
              </span>
              <span className="text-[11px] font-mono text-[#6B7280]">
                {batch.targetMarket}
              </span>
            </div>

            {/* Sculptural "10" Typographic Event */}
            <div
              className={`flex items-baseline gap-4 sm:gap-5 my-1 sm:my-2 transition-all duration-1000 ease-out ${
                batchVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.7]'
              }`}
            >
              <span className="text-7xl sm:text-8xl lg:text-[7.5rem] font-extrabold text-[#0B1F33] font-mono leading-none tracking-tighter">
                10
              </span>
              <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0B1F33] font-sans leading-tight">
                MSME Companies.
                <span className="block text-[#123B63] font-bold text-base sm:text-lg lg:text-xl mt-0.5 sm:mt-1">
                  One Focused Batch.
                </span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#4A5568] font-sans leading-relaxed">
              Each batch is strictly limited to 10 MSME companies from Odisha to ensure intensive coaching attention and executive oversight.
            </p>

            <div className="text-xs font-mono text-[#6B7280] py-2 border-l-2 border-[#123B63] pl-3">
              Selection confirmed through mutual fit assessment during initial strategy discussion.
            </div>

            <div className="pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={onCtaClick}
                className="w-full sm:w-auto bg-[#123B63] text-white hover:bg-[#0B1F33] transition-colors font-bold px-10 py-4 rounded-[4px] shadow-none flex items-center justify-center gap-3 cursor-pointer whitespace-nowrap"
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
