import React from 'react';
import { Container } from '@/components/layout/Container';
import { vshImages } from '@/assets/images';
import { siteContent } from '@/data/siteContent';
import { useScrollReveal, useImageParallax, staggerDelay, revealStyles } from '@/hooks/useMotion';

/**
 * CHAPTER 08 — AUDIENCE & DIFFERENTIATION (WHO WE HELP & WHY VSH)
 * Dominant 3:4 industrial portrait anchor.
 * PRIMARY: Concise qualification criteria.
 * SECONDARY: Why VSH is different (compact, visually secondary).
 * ZERO card badges, ZERO frosted glass overlays.
 */
export const Chapter08AudienceWhyVSH: React.FC = () => {
  const [sectionRef, isVisible] = useScrollReveal(0.1);
  const [imageContainerRef, imageParallax] = useImageParallax(1.04, 18);
  const { whyVsh } = siteContent;

  const primaryCriteria = [
    'MSME owners, founders, directors, and business leaders in Odisha',
    'Enterprises with an active, existing sales team in place',
    'Businesses experiencing inconsistent sales performance or lack of clear direction',
    'Leaders seeking structured sales execution and regular accountability',
  ];

  return (
    <section
      id="who-we-help"
      aria-labelledby="audience-heading"
      ref={sectionRef}
      className="py-8 sm:py-12 lg:py-14 bg-[#F3F5F7] border-b border-gray-200/80 overflow-hidden"
    >
      <Container size="default">
        {/* Section Headline with Mask Reveal */}
        <div className="max-w-3xl mb-6 sm:mb-8">
          <div className={revealStyles.clipMaskContainer}>
            <h2
              id="audience-heading"
              className={`text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-[#0B1F33] font-sans tracking-tight leading-tight mb-2 ${
                revealStyles.clipMaskTransition
              } ${isVisible ? revealStyles.clipMaskVisible : revealStyles.clipMaskHidden}`}
            >
              Is Virtual State Head{' '}
              <span className="text-[#123B63] block sm:inline">
                Right for Your Business?
              </span>
            </h2>
          </div>
        </div>

        {/* 2-Column Split: Qualification left, Dominant Portrait right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Left Column: Criteria (Primary + Secondary) */}
          <div className="lg:col-span-5 space-y-5">
            {/* PRIMARY: Who this is for */}
            <div
              className={`space-y-3 ${revealStyles.transition} ${
                isVisible ? revealStyles.visible : revealStyles.hidden
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#123B63]">
                WHO VIRTUAL STATE HEAD IS FOR
              </div>
              <div className="space-y-2">
                {primaryCriteria.map((point, idx) => (
                  <div
                    key={idx}
                    className={`flex items-baseline gap-2.5 ${revealStyles.transition} ${
                      isVisible ? revealStyles.visible : revealStyles.hidden
                    }`}
                    style={{ transitionDelay: staggerDelay(idx, 40) }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#123B63] shrink-0 mt-1.5" />
                    <span className="text-xs sm:text-sm text-[#333333] font-sans font-medium leading-relaxed">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* SECONDARY: Why VSH (Compact, visually quiet) */}
            <div
              className={`pt-5 border-t border-gray-300 space-y-2.5 ${revealStyles.transition} ${
                isVisible ? revealStyles.visible : revealStyles.hidden
              }`}
              style={{ transitionDelay: '250ms' }}
            >
              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#6B7280]">
                STRATEGIC ADVANTAGES (WHY VSH)
              </div>
              <div className="space-y-1.5">
                {whyVsh.map((diff) => (
                  <div key={diff.number} className="flex items-baseline gap-2 text-xs text-[#4A5568] font-sans">
                    <span className="font-mono font-bold text-[#123B63] shrink-0">
                      {diff.number}.
                    </span>
                    <span className="font-medium text-[#0B1F33]">
                      {diff.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Dominant Portrait Anchor (Pure image, no badge card) */}
          <div className="lg:col-span-7">
            <div
              ref={imageContainerRef}
              className={`relative aspect-[16/10] sm:aspect-[3/4] max-h-[260px] sm:max-h-[520px] lg:max-h-[560px] w-full rounded-[2px] overflow-hidden border border-gray-300 shadow-none bg-white ${
                revealStyles.imageTransition
              } ${isVisible ? revealStyles.imageVisible : revealStyles.imageHidden}`}
            >
              <div className="w-full h-full" style={imageParallax}>
                <img
                  src={vshImages.audience}
                  alt="Odisha industrial manufacturing business leader at operating facility"
                  width={900}
                  height={1200}
                  className="w-full h-full object-cover object-center filter saturate-[0.95]"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 text-[10px] font-mono text-white/80 uppercase tracking-widest">
                ODISHA INDUSTRIAL SECTOR • OPERATING ENTERPRISE
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Chapter08AudienceWhyVSH;
