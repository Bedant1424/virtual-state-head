import React from 'react';
import { Container } from '@/components/layout/Container';
import { vshImages } from '@/assets/images';
import { siteContent } from '@/data/siteContent';
import { useScrollReveal, staggerDelay, revealStyles } from '@/hooks/useMotion';

/**
 * CHAPTER 08 — AUDIENCE & DIFFERENTIATION (WHO WE HELP & WHY VSH)
 * Dominant 3:4 portrait anchor + concise qualification criteria + secondary differentiators.
 * Clean CSS transitions, zero invalid style objects.
 */
export const Chapter08AudienceWhyVSH: React.FC = () => {
  const [sectionRef, isVisible] = useScrollReveal(0.1);
  const { audienceFit, whyVsh } = siteContent;
  const qualificationPoints = audienceFit[0]?.points || [];

  return (
    <section
      id="who-we-help"
      aria-labelledby="audience-heading"
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-20 bg-[#F3F5F7] border-b border-gray-200/80 overflow-hidden"
    >
      <Container size="default">
        {/* Section Headline */}
        <div
          className={`max-w-3xl mb-10 sm:mb-14 ${revealStyles.transition} ${
            isVisible ? revealStyles.visible : revealStyles.hidden
          }`}
        >
          <h2
            id="audience-heading"
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-[#0B1F33] font-sans tracking-tight leading-tight mb-3"
          >
            Is Virtual State Head{' '}
            <span className="text-[#123B63] block sm:inline">
              Right for Your Business?
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#333333] font-sans leading-relaxed">
            Virtual State Head is designed specifically for MSME owners, founders, directors, and business leaders in Odisha who already have an active sales team.
          </p>
        </div>

        {/* 2-Column Split: Qualification left, Dominant Portrait right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Criteria */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            {/* Qualification Register */}
            <div
              className={`space-y-4 ${revealStyles.transition} ${
                isVisible ? revealStyles.visible : revealStyles.hidden
              }`}
              style={{ transitionDelay: '150ms' }}
            >
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#123B63]">
                WHO VIRTUAL STATE HEAD IS FOR
              </div>
              <div className="space-y-2.5">
                {qualificationPoints.map((point, idx) => (
                  <div
                    key={idx}
                    className={`flex items-baseline gap-2.5 ${revealStyles.transition} ${
                      isVisible ? revealStyles.visible : revealStyles.hidden
                    }`}
                    style={{ transitionDelay: staggerDelay(idx, 50) }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#123B63] shrink-0 mt-1.5" />
                    <span className="text-xs sm:text-sm text-[#333333] font-sans font-medium leading-normal">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Differentiators (Titles Only, Visually Secondary) */}
            <div
              className={`pt-6 border-t border-gray-300/80 space-y-3 ${revealStyles.transition} ${
                isVisible ? revealStyles.visible : revealStyles.hidden
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#6B7280]">
                FIVE STRATEGIC ADVANTAGES (WHY VSH)
              </div>
              <div className="space-y-2">
                {whyVsh.map((diff, idx) => (
                  <div
                    key={diff.number}
                    className={`flex items-baseline gap-2 text-xs sm:text-sm text-[#0B1F33] font-sans ${revealStyles.transition} ${
                      isVisible ? revealStyles.visible : revealStyles.hidden
                    }`}
                    style={{ transitionDelay: staggerDelay(idx, 40) }}
                  >
                    <span className="font-mono font-bold text-[#123B63] shrink-0">
                      {diff.number}.
                    </span>
                    <h3 className="font-bold text-[#0B1F33] leading-snug">
                      {diff.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Dominant Portrait Anchor */}
          <div className="lg:col-span-7 flex flex-col">
            <div
              className={`relative aspect-[3/4] lg:aspect-auto lg:h-full w-full rounded-[4px] overflow-hidden border border-gray-300 shadow-none bg-white ${
                revealStyles.imageTransition
              } ${isVisible ? revealStyles.imageVisible : revealStyles.imageHidden}`}
            >
              <img
                src={vshImages.audience}
                alt="Odisha industrial manufacturing business leader at operating facility"
                width={900}
                height={1200}
                className="w-full h-full object-cover object-center filter saturate-[0.95]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/60 via-[#0B1F33]/15 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-[2px] bg-[#0B1F33]/85 backdrop-blur-xs text-white">
                <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#87CEEB] mb-1">
                  TARGET PROFILE
                </div>
                <div className="text-sm font-bold font-sans">
                  MSME Owners, Founders, Directors & Business Leaders
                </div>
                <div className="text-xs text-gray-300 font-sans mt-0.5">
                  Operating enterprises in Odisha with an active, existing sales team.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Chapter08AudienceWhyVSH;
