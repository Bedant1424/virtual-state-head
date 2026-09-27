import React from 'react';
import { Container } from '@/components/layout/Container';
import { vshImages } from '@/assets/images';
import { siteContent } from '@/data/siteContent';

/**
 * CHAPTER 08 — AUDIENCE & DIFFERENTIATION (WHO WE HELP & WHY VSH)
 * Editorial Strategic Authority: Poster-like / Portrait-Dominant Layout
 *
 * Image dominates visually: 3:4 vertical editorial portrait of an Odisha industrial business leader.
 * Left: Concise qualification criteria + secondary, visually quiet differentiators beneath.
 * Zero cards, zero dual dense registers, zero invented exclusions or team-size hurdles.
 */
export const Chapter08AudienceWhyVSH: React.FC = () => {
  const { audienceFit, whyVsh } = siteContent;
  const qualificationPoints = audienceFit[0]?.points || [];

  return (
    <section
      id="who-we-help"
      aria-labelledby="audience-heading"
      className="py-16 sm:py-24 lg:py-28 bg-[#F3F5F7] border-b border-gray-200/80 overflow-hidden"
    >
      <Container size="default">
        {/* Section Headline */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2
            id="audience-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F33] font-sans tracking-tight leading-tight mb-4"
          >
            Is Virtual State Head{' '}
            <span className="text-[#123B63] block sm:inline">
              Right for Your Business?
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#333333] font-sans leading-relaxed">
            Virtual State Head is designed specifically for MSME owners, founders, directors, and business leaders in Odisha who already have an active sales team.
          </p>
        </div>

        {/* 2-Column Split: Editorial Criteria Left (45%), Dominant Portrait Right (55%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Column (5 cols): Concise Qualification Criteria + Visually Quiet Differentiators */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-7 flex flex-col justify-between">
            {/* Concise Qualification Register */}
            <div className="space-y-3">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#123B63]">
                WHO VIRTUAL STATE HEAD IS FOR
              </div>
              <div className="space-y-2">
                {qualificationPoints.map((point, idx) => (
                  <div key={idx} className="flex items-baseline gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#123B63] shrink-0 mt-1.5" />
                    <span className="text-xs sm:text-sm text-[#333333] font-sans font-medium leading-normal">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Five Differentiators (Secondary, Visually Quiet Typography) */}
            <div className="pt-6 border-t border-gray-300/80 space-y-3">
              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#6B7280]">
                FIVE STRATEGIC ADVANTAGES (WHY VSH)
              </div>
              <div className="space-y-2.5">
                {whyVsh.map((diff) => (
                  <div key={diff.number} className="space-y-0.5">
                    <h3 className="text-xs sm:text-sm font-bold text-[#0B1F33] font-sans">
                      {diff.number}. {diff.title}
                    </h3>
                    <p className="text-xs text-[#6B7280] font-sans leading-normal">
                      {diff.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Dominant 3:4 Vertical Editorial Portrait (Carries Main Visual Weight) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative aspect-[3/4] lg:aspect-auto lg:h-full w-full rounded-[4px] overflow-hidden border border-gray-300 shadow-none bg-white">
              <img
                src={vshImages.audience}
                alt="Odisha industrial manufacturing business leader at operating facility"
                width={900}
                height={1200}
                className="w-full h-full object-cover object-center filter saturate-[0.95]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/45 via-transparent to-transparent pointer-events-none" />
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
