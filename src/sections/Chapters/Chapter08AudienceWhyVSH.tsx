import React from 'react';
import { Container } from '@/components/layout/Container';
import { vshImages } from '@/assets/images';
import { siteContent } from '@/data/siteContent';
import { Check } from 'lucide-react';

/**
 * CHAPTER 08 — AUDIENCE & DIFFERENTIATION (WHO WE HELP & WHY VSH)
 * Editorial Strategic Authority
 *
 * Left: 7 qualification criteria + 5 core differentiators.
 * Right: Industrial founder contextual photography (audience_industrial_leader.jpg).
 * No 12-card grid explosion. Clean high-contrast typography.
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
        {/* Chapter Micro-Index */}
        <div className="text-xs font-mono font-semibold uppercase tracking-widest text-[#123B63] mb-4">
          CHAPTER 08 • TARGET SELECTION & STRATEGIC FIT
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2
            id="audience-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F33] font-sans tracking-tight leading-tight mb-4"
          >
            Built for Operating MSMEs.{' '}
            <span className="text-[#123B63] block sm:inline">
              Not Early-Stage Experiments.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#333333] font-sans leading-relaxed">
            We partner with established businesses in Odisha that already possess active products and sales teams, but require experienced sales leadership to unlock consistent execution.
          </p>
        </div>

        {/* 2-Column Split: Editorial Selection Left (60%), Industrial Context Photo Right (40%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column (7 cols): Qualification Criteria & 5 Differentiators */}
          <div className="lg:col-span-7 space-y-10">
            {/* Qualification Register */}
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#123B63] mb-4">
                WHO VIRTUAL STATE HEAD IS FOR
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {qualificationPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-[2px] bg-[#123B63]/10 text-[#123B63] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </span>
                    <span className="text-xs sm:text-sm text-[#333333] font-sans font-medium leading-snug">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Five Master Differentiators (Why VSH) */}
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#123B63] mb-4 pt-6 border-t border-gray-300">
                WHY VIRTUAL STATE HEAD (FIVE STRATEGIC ADVANTAGES)
              </div>
              <div className="border-t border-gray-300 divide-y divide-gray-300">
                {whyVsh.map((diff) => (
                  <div key={diff.number} className="py-4">
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="text-xs font-mono font-bold text-[#123B63]">
                        {diff.number}
                      </span>
                      <h3 className="text-base font-bold text-[#0B1F33] font-sans">
                        {diff.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#6B7280] font-sans leading-relaxed pl-6">
                      {diff.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Industrial Founder Vertical Photo */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] w-full rounded-[4px] overflow-hidden border border-gray-300 shadow-none bg-white">
              <img
                src={vshImages.audience}
                alt="Odisha industrial manufacturing business leader at operating facility"
                width={900}
                height={1200}
                className="w-full h-full object-cover object-center filter saturate-[0.95]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-[2px] bg-[#0B1F33]/85 backdrop-blur-xs text-white">
                <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#87CEEB] mb-1">
                  TARGET PROFILE
                </div>
                <div className="text-sm font-bold font-sans">
                  Odisha MSME Owners & Commercial Directors
                </div>
                <div className="text-xs text-gray-300 font-sans mt-0.5">
                  Teams of 3 to 25+ salespeople operating across manufacturing, distribution, and services.
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
