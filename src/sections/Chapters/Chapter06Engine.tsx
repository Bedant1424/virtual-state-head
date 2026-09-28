import React, { useState, useEffect } from 'react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { vshImages } from '@/assets/images';
import { siteContent } from '@/data/siteContent';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal, revealStyles } from '@/hooks/useMotion';

export interface Chapter06EngineProps {
  onCtaClick?: () => void;
}

type ActivePillar = null | 'training' | 'technology' | 'accountability';

/**
 * CHAPTER 06 — SALES PERFORMANCE ENGINE
 * Three-pillar interactive hover showcase:
 * 01 TRAINING
 * 02 TECHNOLOGY
 * 03 ACCOUNTABILITY
 *
 * Controlled exclusively by user interaction:
 * - mouse hover (onMouseEnter / onMouseLeave)
 * - keyboard focus (onFocus / onBlur)
 * - mobile tap (onClick)
 *
 * ZERO scroll-driven pillar highlighting.
 * ZERO phase badges, phase pills, status labels, or software controls.
 */
export const Chapter06Engine: React.FC<Chapter06EngineProps> = ({ onCtaClick }) => {
  const { pillars } = siteContent.engine;
  const [activePillar, setActivePillar] = useState<ActivePillar>(null);
  const [headerRef, headerVisible] = useScrollReveal(0.12);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Optical light bloom gradient responds directly to activePillar
  const getLightBloomStyle = () => {
    if (prefersReducedMotion) {
      return {
        opacity: 0.55,
        background:
          'radial-gradient(circle at 50% 48%, rgba(135,206,235,0.40) 0%, rgba(18,59,99,0.28) 45%, transparent 70%)',
      };
    }

    switch (activePillar) {
      case 'training': // Light focus shifts left toward Training
        return {
          opacity: 0.65,
          background:
            'radial-gradient(circle at 28% 50%, rgba(135,206,235,0.52) 0%, rgba(18,59,99,0.34) 38%, transparent 68%)',
        };
      case 'technology': // Central beam intensifies
        return {
          opacity: 0.72,
          background:
            'radial-gradient(circle at 50% 48%, rgba(135,206,235,0.58) 0%, rgba(18,59,99,0.38) 42%, transparent 72%)',
        };
      case 'accountability': // Light focus shifts right toward Accountability
        return {
          opacity: 0.65,
          background:
            'radial-gradient(circle at 72% 50%, rgba(135,206,235,0.52) 0%, rgba(18,59,99,0.34) 38%, transparent 68%)',
        };
      case null: // Resting neutral state: calm, balanced illumination
      default:
        return {
          opacity: 0.45,
          background:
            'radial-gradient(circle at 50% 48%, rgba(135,206,235,0.36) 0%, rgba(18,59,99,0.22) 40%, transparent 68%)',
        };
    }
  };

  // Prism spatial position & zoom respond directly to activePillar
  const getPrismTransform = () => {
    if (prefersReducedMotion) return 'scale(1.02) translate(0, 0)';

    switch (activePillar) {
      case 'training':
        return 'scale(1.05) translate(-1.8%, 0)';
      case 'technology':
        return 'scale(1.06) translate(0, 0)';
      case 'accountability':
        return 'scale(1.05) translate(1.8%, 0)';
      case null:
      default:
        return 'scale(1.00) translate(0, 0)';
    }
  };

  // Pillar concept descriptors from approved copy
  const pillarConcepts: Record<string, string> = {
    training: 'Builds Capability',
    technology: 'Supports Execution',
    accountability: 'Strengthens Follow-Through',
  };

  return (
    <section
      id="engine"
      aria-labelledby="engine-heading"
      className="relative bg-[#0B1F33] overflow-hidden"
    >
      {/* SECTION HANDOFF: Smooth gradient from Chapter 05 light background into dark navy */}
      <div className="absolute top-0 inset-x-0 h-16 sm:h-24 bg-gradient-to-b from-[#F3F5F7]/20 via-[#0B1F33]/80 to-[#0B1F33] pointer-events-none z-20" />

      {/* Full-bleed cinematic visual stage */}
      <div className="relative min-h-[760px] lg:min-h-[880px] flex flex-col justify-between py-12 sm:py-16 lg:py-20">
        {/* Layer 1: Background Atmospheric Depth Texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle at 50% 30%, rgba(135,206,235,0.15) 0%, transparent 60%)',
          }}
        />

        {/* Layer 2: Dominant Optical Prism Artwork with Hover-Responsive Optics */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{
            transform: getPrismTransform(),
            willChange: 'transform',
            transition: prefersReducedMotion
              ? 'none'
              : 'transform 500ms cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <img
            src={vshImages.engine}
            alt="Optical crystal prism refracting light streams: Training, Technology, and Accountability"
            className="w-full h-full object-cover object-center filter saturate-[1.14] brightness-[0.92]"
            loading="lazy"
          />

          {/* Layer 3: Dynamic Optical Light Bloom & Stream Shifting */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              ...getLightBloomStyle(),
              transition: prefersReducedMotion
                ? 'opacity 200ms ease-out'
                : 'background 500ms ease-out, opacity 500ms ease-out',
            }}
          />

          {/* Layer 4: Cinematic Vignette Gradients to Ground Top and Lower Typography */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33] via-[#0B1F33]/55 to-[#0B1F33]/35 pointer-events-none" />
          <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#0B1F33] to-transparent pointer-events-none" />
        </div>

        {/* Content Container: Editorial Typography & Spatial Pillar Composition */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
          <Container size="default">
            {/* TOP COMPOSITION: Eyebrow, Large Headline, Approved Supporting Copy */}
            <div ref={headerRef} className="max-w-3xl mb-8 sm:mb-12 lg:mb-14">
              <div
                className={`flex items-center gap-2 mb-2.5 ${revealStyles.transition} ${
                  headerVisible ? revealStyles.visible : revealStyles.hidden
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#87CEEB]" />
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#87CEEB] font-bold">
                  SALES PERFORMANCE ENGINE
                </span>
              </div>

              <div className={revealStyles.clipMaskContainer}>
                <h2
                  id="engine-heading"
                  className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white font-sans tracking-tight leading-[1.12] mb-3 ${
                    revealStyles.clipMaskTransition
                  } ${headerVisible ? revealStyles.clipMaskVisible : revealStyles.clipMaskHidden}`}
                >
                  Training.{' '}
                  <span className="text-[#87CEEB]">Technology.</span>{' '}
                  <span className="text-white">Accountability.</span>
                </h2>
              </div>

              <p
                className={`text-sm sm:text-base lg:text-lg text-gray-300 font-sans leading-relaxed max-w-2xl ${
                  revealStyles.transition
                } ${headerVisible ? revealStyles.visible : revealStyles.hidden}`}
                style={{ transitionDelay: '100ms' }}
              >
                A structured approach that brings together three essential elements of sales performance to build sustainable commercial consistency.
              </p>
            </div>

            {/* LOWER COMPOSITION: Three Large Interactive Typographic Pillars (Integrated Spatial Layout) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-12">
              {pillars.map((pillar) => {
                const isSelected = activePillar === pillar.id;
                const isAnySelected = activePillar !== null;
                const isDimmed = isAnySelected && !isSelected;
                const summary = pillarConcepts[pillar.id] || '';

                return (
                  <button
                    key={pillar.id}
                    type="button"
                    id={`engine-pillar-btn-${pillar.id}`}
                    aria-pressed={isSelected}
                    aria-label={`${pillar.title} pillar: ${summary}`}
                    onMouseEnter={() =>
                      setActivePillar(pillar.id as 'training' | 'technology' | 'accountability')
                    }
                    onMouseLeave={() => setActivePillar(null)}
                    onFocus={() =>
                      setActivePillar(pillar.id as 'training' | 'technology' | 'accountability')
                    }
                    onBlur={() => setActivePillar(null)}
                    onClick={() =>
                      setActivePillar((prev) =>
                        prev === pillar.id
                          ? null
                          : (pillar.id as 'training' | 'technology' | 'accountability')
                      )
                    }
                    className={`w-full text-left bg-transparent p-0 cursor-pointer rounded-[4px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#87CEEB] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0B1F33] transition-all duration-300 ease-out border-t pt-4 sm:pt-5 ${
                      isSelected
                        ? 'border-t-2 border-[#87CEEB] shadow-[0_-8px_24px_-8px_rgba(135,206,235,0.35)]'
                        : isDimmed
                        ? 'border-t border-white/15'
                        : 'border-t border-white/30 hover:border-white/50'
                    } ${
                      prefersReducedMotion
                        ? ''
                        : isSelected
                        ? 'transform scale-[1.06] -translate-y-1'
                        : isDimmed
                        ? 'transform scale-[0.96] opacity-60'
                        : 'transform scale-100 opacity-100'
                    }`}
                  >
                    {/* Pillar Number & Title */}
                    <div className="flex items-baseline gap-2.5 mb-2">
                      <span
                        className={`text-xs sm:text-sm font-mono font-bold transition-colors duration-300 ${
                          isSelected
                            ? 'text-white'
                            : isDimmed
                            ? 'text-white/40'
                            : 'text-[#87CEEB]'
                        }`}
                      >
                        {pillar.number}
                      </span>
                      <h3
                        className={`text-lg sm:text-xl lg:text-2xl font-sans font-extrabold uppercase tracking-wider transition-colors duration-300 ${
                          isSelected
                            ? 'text-white'
                            : isDimmed
                            ? 'text-white/60'
                            : 'text-white'
                        }`}
                      >
                        {pillar.title}
                      </h3>
                    </div>

                    {/* Short Role Descriptor */}
                    <div className="mb-2.5">
                      <span
                        className={`text-[10px] sm:text-[11px] font-mono uppercase tracking-wider font-semibold transition-colors duration-300 ${
                          isSelected
                            ? 'text-[#87CEEB]'
                            : isDimmed
                            ? 'text-white/40'
                            : 'text-[#87CEEB]/80'
                        }`}
                      >
                        {summary}
                      </span>
                    </div>

                    {/* Approved Description */}
                    <p
                      className={`text-xs sm:text-sm font-sans leading-relaxed transition-all duration-300 ${
                        isSelected
                          ? 'text-white opacity-100 font-medium'
                          : isDimmed
                          ? 'text-gray-400 opacity-60'
                          : 'text-gray-300 opacity-90'
                      }`}
                    >
                      {pillar.description}
                    </p>

                    {/* Active Underline Accent */}
                    <div
                      className={`h-0.5 mt-3.5 rounded-full transition-all duration-300 ${
                        isSelected
                          ? 'w-12 bg-[#87CEEB] opacity-100'
                          : 'w-0 bg-transparent opacity-0'
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                );
              })}
            </div>

            {/* STATIC FORMULA & CTA BLOCK: Permanent, stable section element */}
            <div className="pt-8 sm:pt-10 border-t border-white/20">
              {/* Closing Summary Concept */}
              <div className="mb-4 text-xs sm:text-sm text-gray-300 font-sans tracking-wide">
                <span className="text-white font-medium">Training builds capability.</span>{' '}
                <span className="text-white/40">•</span>{' '}
                <span className="text-white font-medium">Technology supports execution.</span>{' '}
                <span className="text-white/40">•</span>{' '}
                <span className="text-white font-medium">Accountability strengthens follow-through.</span>
              </div>

              {/* Formula Lockup + Primary Action */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="text-sm sm:text-base lg:text-lg font-mono font-extrabold text-[#87CEEB] tracking-wider leading-snug">
                  <span className="inline-block">TRAINING</span> +{' '}
                  <span className="inline-block">TECHNOLOGY</span> +{' '}
                  <span className="inline-block">ACCOUNTABILITY</span>{' '}
                  <span className="text-white/80 block sm:inline mt-1 sm:mt-0">=</span>{' '}
                  <span className="text-white block sm:inline mt-1 sm:mt-0">
                    SALES PERFORMANCE ENGINE
                  </span>
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  onClick={onCtaClick}
                  className="w-full sm:w-auto bg-[#123B63] text-white hover:bg-[#1a4a7a] transition-colors font-bold px-8 py-3.5 rounded-[4px] shadow-none flex items-center justify-center gap-3 cursor-pointer border border-[#87CEEB]/40 whitespace-nowrap shrink-0"
                >
                  <span>Book Your Sales Strategy Call</span>
                  <ArrowRight className="w-4 h-4 text-[#87CEEB]" />
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </div>

      {/* SECTION HANDOFF: Smooth gradient into Chapter 07 white background */}
      <div className="absolute bottom-0 inset-x-0 h-16 sm:h-24 bg-gradient-to-t from-white/10 via-[#0B1F33]/80 to-[#0B1F33] pointer-events-none z-20" />
    </section>
  );
};

export default Chapter06Engine;
