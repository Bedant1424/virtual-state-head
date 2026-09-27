import React from 'react';
import { Button } from '@/components/ui/Button';
import { vshImages } from '@/assets/images';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { useScrollReveal, useImageParallax, revealStyles } from '@/hooks/useMotion';

export interface Chapter01HeroProps {
  onCtaClick?: () => void;
}

/**
 * CHAPTER 01 — HERO
 * Immersive editorial authority. Dominant edge-bleed image connected directly to typography.
 * First viewport is purposeful, occupied, and free of dead vertical travel.
 */
export const Chapter01Hero: React.FC<Chapter01HeroProps> = ({ onCtaClick }) => {
  const [heroRef, isVisible] = useScrollReveal(0.05, '0px');
  const [imageContainerRef, imageParallax] = useImageParallax(1.05, 24);

  return (
    <section
      id="hero"
      ref={heroRef}
      aria-labelledby="hero-heading"
      className="relative bg-white overflow-visible"
    >
      {/* Full-width immersive grid — text left, image extends to right edge */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px] lg:min-h-[660px]">
        {/* Left Column: Editorial Typography & CTA */}
        <div className="lg:col-span-5 flex flex-col justify-center px-5 sm:px-8 lg:pl-[max(2rem,calc((100vw-1160px)/2+2rem))] lg:pr-10 py-10 sm:py-14 lg:py-16 z-20">
          <div className="space-y-4 sm:space-y-5">
            {/* Eyebrow 1 of 3 */}
            <div className={`text-xs font-mono font-semibold uppercase tracking-widest text-[#123B63] ${revealStyles.transition} ${isVisible ? revealStyles.visible : revealStyles.hidden}`}>
              • Sales Leadership • Odisha MSMEs
            </div>

            {/* Display Headline with High-End Clip Mask Reveal */}
            <div className={revealStyles.clipMaskContainer}>
              <h1
                id="hero-heading"
                className={`text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] font-extrabold text-[#0B1F33] font-sans tracking-tight leading-[1.05] ${revealStyles.clipMaskTransition} ${
                  isVisible ? revealStyles.clipMaskVisible : revealStyles.clipMaskHidden
                }`}
              >
                Your Sales Team Is Busy.{' '}
                <span className="text-[#123B63] block mt-1 sm:mt-1.5">
                  But Is Your Business Growing?
                </span>
              </h1>
            </div>

            {/* Concise Supporting Brief */}
            <p
              className={`text-sm sm:text-base text-[#333333] font-sans font-normal leading-relaxed max-w-lg ${revealStyles.transition} ${isVisible ? revealStyles.visible : revealStyles.hidden}`}
              style={{ transitionDelay: '100ms' }}
            >
              Virtual State Head provides experienced sales leadership, execution discipline, and regular accountability for operating MSMEs in Odisha.
            </p>

            {/* CTA & Authority */}
            <div
              className={`pt-1 space-y-2.5 ${revealStyles.transition} ${isVisible ? revealStyles.visible : revealStyles.hidden}`}
              style={{ transitionDelay: '150ms' }}
            >
              <Button
                variant="primary"
                size="lg"
                onClick={onCtaClick}
                className="w-full sm:w-auto bg-[#123B63] text-white hover:bg-[#0B1F33] transition-colors font-bold px-8 py-3.5 rounded-[4px] shadow-none flex items-center justify-center gap-3 cursor-pointer whitespace-nowrap"
              >
                <span>Book Your Sales Strategy Call</span>
                <ArrowRight className="w-4 h-4 text-[#87CEEB]" />
              </Button>

              <div className="flex items-center gap-2 text-xs text-[#6B7280] font-sans">
                <ShieldCheck className="w-4 h-4 text-[#123B63] shrink-0" />
                <span>
                  Led by <strong className="text-[#0B1F33] font-semibold">Royal Bal</strong> • More than 30 years of sales experience
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Immersive edge-bleed photography with subtle parallax & downward overlap */}
        <div ref={imageContainerRef} className="lg:col-span-7 relative z-10 lg:translate-y-4 lg:mb-[-24px]">
          <div
            className={`relative w-full h-60 sm:h-72 lg:h-full lg:absolute lg:inset-0 overflow-hidden shadow-none lg:shadow-md ${revealStyles.imageTransition} ${isVisible ? revealStyles.imageVisible : revealStyles.imageHidden}`}
          >
            <div
              className="w-full h-full"
              style={imageParallax}
            >
              <img
                src={vshImages.hero}
                alt="Executive leader overlooking an industrial manufacturing landscape in Odisha at dawn"
                width={1200}
                height={675}
                className="w-full h-full object-cover object-center filter saturate-[0.92] contrast-[1.05]"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            {/* Film Vignette with gentle bottom bleed into Problem section */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/60 lg:to-white/80 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/25 via-transparent to-transparent pointer-events-none" />

            {/* Photo Caption */}
            <div className="absolute bottom-4 right-4 text-[10px] font-mono text-white/80 uppercase tracking-widest">
              COMMERCIAL DIRECTION • ODISHA
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chapter01Hero;
