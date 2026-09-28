import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { vshImages } from '@/assets/images';
import { siteContent } from '@/data/siteContent';
import { ArrowRight, ChevronRight, ShieldCheck, Users } from 'lucide-react';
import { useScrollReveal, useImageParallax, revealStyles } from '@/hooks/useMotion';

export interface Chapter09PerformanceGapBatchProps {
  onCtaClick?: () => void;
}

interface PerformanceImpact {
  readonly number: string;
  readonly title: string;
  readonly shortTag: string;
  readonly description: string;
  readonly cropFocus: string;
}

const performanceImpacts: readonly PerformanceImpact[] = [
  {
    number: '01',
    title: 'Lost or delayed sales opportunities',
    shortTag: 'PIPELINE MOMENTUM',
    description:
      'High-value prospective clients slip through extended gaps in outreach, momentum, and deal pacing without structured sales management.',
    cropFocus: 'scale-[1.04] object-center',
  },
  {
    number: '02',
    title: 'Inconsistent follow-up',
    shortTag: 'PIPELINE DISCIPLINE',
    description:
      'Sales conversations stall between initial contact and closing when pipeline stages lack systematic tracking cadence.',
    cropFocus: 'scale-[1.04] object-top',
  },
  {
    number: '03',
    title: 'Weak visibility into sales activities',
    shortTag: 'OPERATIONAL VISIBILITY',
    description:
      'Leadership lacks transparent, real-time insight into actual field conversations, deal velocity, and customer feedback.',
    cropFocus: 'scale-[1.05] object-center',
  },
  {
    number: '04',
    title: 'Unclear ownership of targets',
    shortTag: 'ACCOUNTABILITY GAP',
    description:
      'Individual quotas and performance commitments blur into collective ambiguity without structured weekly review rhythms.',
    cropFocus: 'scale-[1.04] object-bottom',
  },
  {
    number: '05',
    title: 'Repeated negotiation difficulties',
    shortTag: 'MARGIN PROTECTION',
    description:
      'Deals encounter unnecessary pricing pressure and margin concessions due to underdeveloped objection handling and positioning.',
    cropFocus: 'scale-[1.05] object-center',
  },
  {
    number: '06',
    title: 'Underdeveloped sales capability',
    shortTag: 'CAPABILITY DEVELOPMENT',
    description:
      'Sales representatives rely on ad-hoc instincts rather than structured consultative selling and negotiation frameworks.',
    cropFocus: 'scale-[1.04] object-top',
  },
  {
    number: '07',
    title: 'Excessive dependence on the business owner',
    shortTag: 'FOUNDER BOTTLENECK',
    description:
      'The business owner remains the primary closing engine, creating an unsustainable operational bottleneck across growth phases.',
    cropFocus: 'scale-[1.05] object-center',
  },
  {
    number: '08',
    title: 'Time spent managing problems more systematically',
    shortTag: 'SYSTEMIC RESOLUTION',
    description:
      'Management bandwidth gets consumed resolving recurrent operational friction that could be addressed through structured systems.',
    cropFocus: 'scale-[1.04] object-center',
  },
];

/**
 * CHAPTER 09 — THE PERFORMANCE GAP & UPCOMING BATCH
 *
 * PART 1: THE PERFORMANCE GAP (Deep Slate/Navy Canvas)
 * - Serious commercial diagnostic on the operational friction of unstructured sales.
 * - Interactive 8-impact editorial list driven by hover, keyboard focus, and mobile tap.
 * - Active item expands (~1.03x) with Sky Blue accent, revealing supporting approved sentence.
 * - Inactive items recede (scale ~0.98, opacity ~0.72) while staying crisp and readable.
 * - Responsive photographic showcase (gap_demo_review.jpg) with subtle crop/position zoom.
 * - ZERO scroll-based highlighting.
 *
 * PART 2: THE UPCOMING BATCH (Expansive Pure Light Canvas)
 * - Powerful visual reset from serious friction to focused clarity.
 * - Sculptural "10" graphic event with restrained pointer parallax and subtle scale.
 * - Panoramic photographic field (batch_demo_cohort.jpg) of the focused executive session.
 * - Approved batch messaging (planned batch of 10 MSME companies in Odisha).
 * - Primary CTA: "Book Your Sales Strategy Call".
 * - NO countdown clocks, NO fake urgency, NO artificial scarcity.
 */
export const Chapter09PerformanceGapBatch: React.FC<Chapter09PerformanceGapBatchProps> = ({ onCtaClick }) => {
  const { batch } = siteContent;
  const [sectionRef, isVisible] = useScrollReveal(0.1);
  const [batchRef, batchVisible] = useScrollReveal(0.12);
  const [cohortImageRef, cohortImageParallax] = useImageParallax(1.03, 14);

  const [activeImpactIndex, setActiveImpactIndex] = useState<number>(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [tenParallax, setTenParallax] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const tenContainerRef = useRef<HTMLDivElement>(null);

  // Check prefers-reduced-motion
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Subtle pointer parallax over the "10"
  const handleTenMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (prefersReducedMotion || !tenContainerRef.current) return;
      const rect = tenContainerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 16;
      setTenParallax({ x, y });
    },
    [prefersReducedMotion]
  );

  const handleTenMouseLeave = useCallback(() => {
    setTenParallax({ x: 0, y: 0 });
  }, []);

  // Keyboard navigation across the 8 impacts
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveImpactIndex((index + 1) % performanceImpacts.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveImpactIndex((index - 1 + performanceImpacts.length) % performanceImpacts.length);
    } else if (e.key === 'Home') {
      e.preventDefault();
      setActiveImpactIndex(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setActiveImpactIndex(performanceImpacts.length - 1);
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiveImpactIndex(index);
    }
  };

  const activeImpact = performanceImpacts[activeImpactIndex] || performanceImpacts[0];

  return (
    <section
      id="batch"
      aria-labelledby="gap-batch-heading"
      className="overflow-hidden"
    >
      {/* ============================================================ */}
      {/* PART 1: THE PERFORMANCE GAP (SERIOUS DEEP NAVY CANVAS)      */}
      {/* ============================================================ */}
      <div className="py-12 sm:py-16 lg:py-20 bg-[#0B1F33] text-white border-b border-white/10">
        <Container size="default">
          {/* Eyebrow & Main Section Headline */}
          <div ref={sectionRef} className="max-w-3xl mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-white/[0.08] border border-white/15 text-[#87CEEB] text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#87CEEB]" />
              THE PERFORMANCE GAP • OPERATIONAL FRICTION
            </div>

            <div className={revealStyles.clipMaskContainer}>
              <h2
                id="gap-batch-heading"
                className={`text-2xl sm:text-3xl lg:text-4xl xl:text-[2.75rem] font-extrabold text-white font-sans tracking-tight leading-tight mb-4 ${
                  revealStyles.clipMaskTransition
                } ${isVisible ? revealStyles.clipMaskVisible : revealStyles.clipMaskHidden}`}
              >
                When Sales Performance Is Not Structured,{' '}
                <span className="text-[#87CEEB]">
                  The Cost Shows Up In How The Business Operates.
                </span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed max-w-2xl">
              Sales activity without experienced leadership and systematic accountability produces commercial friction.
              Across growing MSMEs, these eight operational consequences repeatedly emerge:
            </p>
          </div>

          {/* Interactive Split Grid: 8 Impacts List (Left) + Executive Photographic Anchor (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left: 8 Interactive Impact Items */}
            <div
              role="tablist"
              aria-label="Commercial friction impact items"
              className="lg:col-span-7 space-y-2 sm:space-y-2.5"
            >
              {performanceImpacts.map((impact, idx) => {
                const isActive = activeImpactIndex === idx;
                return (
                  <button
                    key={impact.number}
                    type="button"
                    role="tab"
                    id={`impact-tab-${idx}`}
                    aria-selected={isActive}
                    aria-expanded={isActive}
                    aria-controls={`impact-desc-${idx}`}
                    tabIndex={0}
                    onClick={() => setActiveImpactIndex(idx)}
                    onMouseEnter={() => setActiveImpactIndex(idx)}
                    onFocus={() => setActiveImpactIndex(idx)}
                    onKeyDown={(e) => handleKeyDown(e, idx)}
                    className={`w-full text-left p-3.5 sm:p-4 rounded-[4px] border transition-all duration-300 ease-out cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#87CEEB] ${
                      isActive
                        ? 'bg-white/[0.09] border-l-4 border-l-[#87CEEB] border-y-white/15 border-r-white/15 shadow-sm transform scale-[1.01] sm:scale-[1.02]'
                        : 'bg-transparent border-l-2 border-l-transparent border-y-white/5 border-r-white/5 opacity-70 hover:opacity-90 hover:bg-white/[0.04]'
                    }`}
                    style={{
                      transform: prefersReducedMotion
                        ? 'none'
                        : isActive
                        ? 'scale(1.02)'
                        : 'scale(0.98)',
                    }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3 sm:gap-3.5">
                        <span
                          className={`text-xs font-mono font-bold tracking-wider pt-0.5 shrink-0 ${
                            isActive ? 'text-[#87CEEB]' : 'text-gray-400'
                          }`}
                        >
                          {impact.number}
                        </span>
                        <div>
                          <p
                            className={`text-sm sm:text-base font-sans font-bold leading-snug transition-colors ${
                              isActive ? 'text-white' : 'text-gray-300'
                            }`}
                          >
                            {impact.title}
                          </p>

                          {/* Expanded Supporting Description */}
                          <div
                            id={`impact-desc-${idx}`}
                            className={`transition-all duration-300 ease-out overflow-hidden ${
                              isActive
                                ? 'max-h-28 opacity-100 mt-2 pt-2 border-t border-white/10'
                                : 'max-h-0 opacity-0'
                            }`}
                          >
                            <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
                              {impact.description}
                            </p>
                            <div className="mt-2 inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-[#87CEEB]">
                              <span className="w-1 h-1 rounded-full bg-[#87CEEB]" />
                              {impact.shortTag}
                            </div>
                          </div>
                        </div>
                      </div>

                      <ChevronRight
                        className={`w-4 h-4 shrink-0 transition-transform duration-300 mt-1 ${
                          isActive
                            ? 'text-[#87CEEB] rotate-90 sm:rotate-0 translate-x-0.5'
                            : 'text-gray-500 opacity-40'
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right: Sticky Executive Photographic Visual Anchor */}
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <div className="relative rounded-[2px] overflow-hidden border border-white/15 bg-[#071422] shadow-2xl">
                {/* Photo Frame */}
                <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/5] w-full overflow-hidden">
                  <img
                    src={vshImages.gap}
                    alt="Senior sales leadership reviewing commercial performance figures in an executive office"
                    width={1000}
                    height={1250}
                    className={`w-full h-full object-cover transition-all duration-700 ease-out ${
                      prefersReducedMotion ? 'object-center' : activeImpact.cropFocus
                    }`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33] via-[#0B1F33]/30 to-transparent pointer-events-none" />

                  {/* Active Impact Badge on Image */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-[3px] bg-[#0B1F33]/90 backdrop-blur-sm border border-white/15">
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#87CEEB] mb-1">
                      <span className="font-bold tracking-wider">
                        EXECUTIVE REVIEW • {activeImpact.number} OF 08
                      </span>
                      <span className="text-gray-400 uppercase text-[10px]">
                        {activeImpact.shortTag}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm font-sans font-bold text-white leading-tight">
                      {activeImpact.title}
                    </p>
                  </div>
                </div>

                {/* Sub-caption Line */}
                <div className="p-3 bg-[#071422] border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-gray-400">
                  <span>COMMERCIAL FRICTION EXPLORATION</span>
                  <span className="text-[#87CEEB]">ODISHA MSME SECTOR</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* ============================================================ */}
      {/* PART 2: THE UPCOMING BATCH (EXPANSIVE PURE LIGHT CANVAS)    */}
      {/* ============================================================ */}
      <div
        ref={batchRef}
        className="py-14 sm:py-20 lg:py-24 bg-white text-[#0B1F33] border-b border-gray-200/80"
      >
        <Container size="default">
          {/* Header Metadata Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-8 sm:mb-12 border-b border-gray-200">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#123B63]">
              <span className="w-2 h-2 rounded-full bg-[#123B63] animate-pulse" />
              {batch.statusBadge}
            </div>
            <div className="text-xs font-mono text-[#6B7280]">
              {batch.targetMarket} • {batch.deliveryModel}
            </div>
          </div>

          {/* Central Editorial Statement: Massive "10" + Headline */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10 sm:mb-14">
            {/* The Sculptural "10" Event */}
            <div className="lg:col-span-5 flex items-center justify-center lg:justify-start">
              <div
                ref={tenContainerRef}
                onMouseMove={handleTenMouseMove}
                onMouseLeave={handleTenMouseLeave}
                className="relative inline-flex items-baseline cursor-default select-none transition-transform duration-300 ease-out"
                style={{
                  transform: prefersReducedMotion
                    ? 'none'
                    : `translate(${tenParallax.x.toFixed(1)}px, ${tenParallax.y.toFixed(1)}px)`,
                }}
              >
                {/* Ambient Soft Sky Blue Glow behind 10 */}
                <div
                  className="absolute inset-0 bg-[#87CEEB]/15 blur-2xl rounded-full scale-125 -z-10 transition-opacity duration-500"
                  aria-hidden="true"
                />

                <span className="text-[7.5rem] sm:text-[10rem] lg:text-[12.5rem] xl:text-[14rem] font-extrabold text-[#0B1F33] font-mono leading-none tracking-tighter">
                  10
                </span>
                <span className="text-xl sm:text-2xl lg:text-3xl font-mono font-bold text-[#123B63] ml-1">
                  /BATCH
                </span>
              </div>
            </div>

            {/* Headline & Focused Cohort Proposition */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-block px-3 py-1 rounded-[4px] bg-[#EAF5FB] border border-[#87CEEB]/40 text-[#123B63] text-xs font-mono font-bold uppercase tracking-wider">
                PLANNED BATCH • ODISHA MSMES
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F33] font-sans tracking-tight leading-tight">
                10 MSME Companies.{' '}
                <span className="block text-[#123B63]">
                  One Focused Batch.
                </span>
              </h3>

              <p className="text-base sm:text-lg text-[#333333] font-sans leading-relaxed">
                A planned batch for 10 MSME companies in Odisha, providing experienced sales leadership,
                team development, and ongoing performance support.
              </p>

              <div className="flex items-center gap-3 p-3.5 bg-[#F3F5F7] rounded-[4px] border-l-4 border-l-[#123B63]">
                <ShieldCheck className="w-5 h-5 text-[#123B63] shrink-0" />
                <p className="text-xs sm:text-sm font-sans text-[#333333]">
                  Initial discussion to review sales structure and assess readiness. Booking a call does not guarantee acceptance.
                </p>
              </div>
            </div>
          </div>

          {/* Panoramic Photographic Field: The Focused Cohort Session */}
          <div className="mb-10 sm:mb-14">
            <div
              ref={cohortImageRef}
              className={`relative aspect-[16/9] sm:aspect-[21/9] lg:aspect-[24/9] w-full rounded-[2px] overflow-hidden border border-gray-200 shadow-lg ${
                revealStyles.imageTransition
              } ${batchVisible ? revealStyles.imageVisible : revealStyles.imageHidden}`}
            >
              <div className="w-full h-full" style={cohortImageParallax}>
                <img
                  src={vshImages.batch}
                  alt="Senior executive coaching session with a focused cohort of business leaders in a boardroom setting"
                  width={1400}
                  height={600}
                  className="w-full h-full object-cover object-center filter saturate-[0.95]"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/70 via-transparent to-transparent pointer-events-none" />

              {/* Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-mono">
                <span className="font-bold tracking-wider uppercase text-[#87CEEB]">
                  PLANNED BATCH • 10 MSME COMPANIES
                </span>
                <span className="hidden sm:inline-block text-white/80">
                  BHUBANESWAR, ODISHA
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Action Strip & CTA */}
          <div className="p-6 sm:p-8 rounded-[4px] bg-[#F3F5F7] border border-gray-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1 max-w-xl">
              <div className="text-xs font-mono font-bold text-[#123B63] uppercase tracking-wider flex items-center gap-2">
                <Users className="w-4 h-4 text-[#123B63]" />
                EXPLORATORY STRATEGY DISCUSSION
              </div>
              <p className="text-sm sm:text-base font-sans font-semibold text-[#0B1F33]">
                Discuss your sales team structure, key friction points, and engagement readiness.
              </p>
              <p className="text-xs text-[#6B7280] font-sans">
                Exploratory discussion with senior sales leadership. No sales pitch, no obligation.
              </p>
            </div>

            <div className="w-full sm:w-auto shrink-0">
              <Button
                variant="primary"
                size="lg"
                onClick={onCtaClick}
                className="w-full sm:w-auto bg-[#123B63] text-white hover:bg-[#0B1F33] transition-colors font-bold px-8 sm:px-10 py-4 rounded-[4px] shadow-none flex items-center justify-center gap-3 cursor-pointer whitespace-nowrap"
              >
                <span>Book Your Sales Strategy Call</span>
                <ArrowRight className="w-4 h-4 text-[#87CEEB]" />
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Chapter09PerformanceGapBatch;
