import React from 'react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { vshImages } from '@/assets/images';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export interface Chapter01HeroProps {
  onCtaClick?: () => void;
}

/**
 * CHAPTER 01 — HERO
 * Editorial Strategic Authority
 *
 * Image dominates ~55–60% of the visual field.
 * Communicates experienced sales leadership without SaaS dashboards.
 */
export const Chapter01Hero: React.FC<Chapter01HeroProps> = ({ onCtaClick }) => {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 bg-white border-b border-gray-200/80 overflow-hidden"
    >
      <Container size="default">
        {/* Editorial 2-Column Split: Text Left (5 cols), Large Photo Right (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column (5 cols on lg): Editorial Typography & CTA */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8 z-10">
            {/* Chapter Micro-Index (Eyebrow 1 of 3 on page) */}
            <div className="text-xs font-mono font-semibold uppercase tracking-widest text-[#123B63]">
              • Sales Leadership • Odisha MSMEs
            </div>

            {/* Display Headline */}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold text-[#0B1F33] font-sans tracking-tight leading-[1.04]"
            >
              Your Sales Team Is Busy.{' '}
              <span className="text-[#123B63] block mt-1 sm:mt-2">
                But Is Your Business Growing?
              </span>
            </h1>

            {/* Concise Supporting Brief */}
            <p className="text-base sm:text-lg text-[#333333] font-sans font-normal leading-relaxed max-w-xl">
              Virtual State Head provides experienced sales leadership, execution discipline, and regular accountability for operating MSMEs in Odisha.
            </p>

            {/* Commercial Action & Authority Sign-off */}
            <div className="pt-2 sm:pt-4 space-y-4 sm:space-y-5">
              <Button
                variant="primary"
                size="lg"
                onClick={onCtaClick}
                className="w-full sm:w-auto bg-[#123B63] text-white hover:bg-[#0B1F33] transition-colors font-bold px-8 py-4 rounded-[4px] shadow-none flex items-center justify-center gap-3 cursor-pointer whitespace-nowrap"
              >
                <span>Book Your Sales Strategy Call</span>
                <ArrowRight className="w-4 h-4 text-[#87CEEB]" />
              </Button>

              {/* Verified Authority Badge */}
              <div className="flex items-center gap-2.5 pt-1 text-xs text-[#6B7280] font-sans">
                <ShieldCheck className="w-4 h-4 text-[#123B63] shrink-0" />
                <span>
                  Led by <strong className="text-[#0B1F33] font-semibold">Royal Bal</strong> • More than 30 years of sales experience
                </span>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols on lg): Large Editorial Photography (58% visual field) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/9] w-full rounded-[4px] overflow-hidden border border-gray-200/90 shadow-none bg-gray-100">
              <img
                src={vshImages.hero}
                alt="Executive leader overlooking an industrial manufacturing landscape in Odisha at dawn"
                width={1200}
                height={675}
                className="w-full h-full object-cover object-center filter saturate-[0.92] contrast-[1.05]"
                loading="eager"
                fetchPriority="high"
              />
              {/* Subtle Film Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/25 via-transparent to-transparent pointer-events-none" />
              
              {/* Minimal Architectural Photo Caption */}
              <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-[2px] bg-[#0B1F33]/70 backdrop-blur-xs text-[11px] font-mono text-white/80 tracking-wider">
                COMMERCIAL DIRECTION • ODISHA
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Chapter01Hero;
