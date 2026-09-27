import React, { useState, useEffect } from 'react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { vshImages } from '@/assets/images';
import { siteContent } from '@/data/siteContent';
import { ArrowRight } from 'lucide-react';
import { useScrollProgress, useScrollReveal, revealStyles } from '@/hooks/useMotion';

export interface Chapter06EngineProps {
  onCtaClick?: () => void;
}

/**
 * CHAPTER 06 — SALES PERFORMANCE ENGINE
 * Cinematic visual peak. The optical crystal prism anchors the viewport with
 * scroll-driven transformation across 5 distinct visual states:
 *
 * State 01: TRAINING visually dominates (left light stream, scale, left pillar glow)
 * State 02: TECHNOLOGY dominates (central beam, balanced prism, center pillar glow)
 * State 03: ACCOUNTABILITY dominates (right light stream, right pillar glow)
 * State 04: CONVERGENCE (all 3 pillars illuminated, central bloom intensifies)
 * State 05: SALES PERFORMANCE ENGINE CLIMAX (formula reveal + closing concept + CTA)
 *
 * ZERO software badges, ZERO phase pills, ZERO clickable tab controls.
 * Purely scroll-driven, cinematic visual progression.
 */
export const Chapter06Engine: React.FC<Chapter06EngineProps> = ({ onCtaClick }) => {
  const { pillars } = siteContent.engine;
  const [scrollRef, progress] = useScrollProgress();
  const [headerRef, headerVisible] = useScrollReveal(0.12);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Five distinct scroll-driven visual states:
  // State 1: 0.00 – 0.32 (TRAINING)
  // State 2: 0.32 – 0.52 (TECHNOLOGY)
  // State 3: 0.52 – 0.72 (ACCOUNTABILITY)
  // State 4: 0.72 – 0.86 (CONVERGENCE)
  // State 5: 0.86 – 1.00 (SALES PERFORMANCE ENGINE CLIMAX)
  const getVisualState = (p: number) => {
    if (prefersReducedMotion) return 5;
    if (p < 0.32) return 1;
    if (p < 0.52) return 2;
    if (p < 0.72) return 3;
    if (p < 0.86) return 4;
    return 5;
  };

  const currentVisualState = getVisualState(progress);
  const isConverged = currentVisualState >= 4;

  // Dynamic light bloom gradient according to active pillar/state
  const getLightBloomStyle = () => {
    if (prefersReducedMotion) {
      return {
        opacity: 0.65,
        background:
          'radial-gradient(circle at 50% 45%, rgba(135,206,235,0.45) 0%, rgba(18,59,99,0.35) 45%, transparent 75%)',
      };
    }

    switch (currentVisualState) {
      case 1: // Training: left stream
        return {
          opacity: 0.55,
          background:
            'radial-gradient(circle at 28% 50%, rgba(135,206,235,0.45) 0%, rgba(18,59,99,0.30) 35%, transparent 68%)',
        };
      case 2: // Technology: center beam
        return {
          opacity: 0.58,
          background:
            'radial-gradient(circle at 50% 48%, rgba(135,206,235,0.48) 0%, rgba(18,59,99,0.32) 40%, transparent 68%)',
        };
      case 3: // Accountability: right stream
        return {
          opacity: 0.55,
          background:
            'radial-gradient(circle at 72% 50%, rgba(135,206,235,0.45) 0%, rgba(18,59,99,0.30) 35%, transparent 68%)',
        };
      case 4: // Convergence: all three converge
        return {
          opacity: 0.72,
          background:
            'radial-gradient(circle at 50% 45%, rgba(135,206,235,0.58) 0%, rgba(18,59,99,0.42) 45%, transparent 75%)',
        };
      case 5: // Climax: maximum optical brilliance
      default:
        return {
          opacity: 0.82,
          background:
            'radial-gradient(circle at 50% 42%, rgba(135,206,235,0.65) 0%, rgba(18,59,99,0.48) 50%, transparent 80%)',
        };
    }
  };

  // Prism spatial position & scale
  const getPrismTransform = () => {
    if (prefersReducedMotion) return 'scale(1.05) translate(0, 0)';

    const baseScale = 1.04 + progress * 0.10;
    const scrollY = (progress - 0.5) * -22;

    let shiftX = 0;
    if (currentVisualState === 1) shiftX = -1.2;
    else if (currentVisualState === 3) shiftX = 1.2;

    return `scale(${baseScale.toFixed(3)}) translate(${shiftX}%, ${scrollY.toFixed(1)}px)`;
  };

  // Background atmosphere depth movement
  const bgAtmosphereY = prefersReducedMotion ? 0 : ((progress - 0.5) * 16).toFixed(1);

  // Pillar concept descriptions from approved copy
  const pillarConcepts = [
    { id: 'training', summary: 'Builds Capability' },
    { id: 'technology', summary: 'Supports Execution' },
    { id: 'accountability', summary: 'Strengthens Follow-Through' },
  ];

  return (
    <section
      id="engine"
      ref={scrollRef}
      aria-labelledby="engine-heading"
      className="relative bg-[#0B1F33] overflow-hidden"
    >
      {/* SECTION HANDOFF: Smooth gradient from Chapter 05 light background into dark navy */}
      <div className="absolute top-0 inset-x-0 h-16 sm:h-24 bg-gradient-to-b from-[#F3F5F7]/20 via-[#0B1F33]/80 to-[#0B1F33] pointer-events-none z-20" />

      {/* Full-bleed cinematic visual stage */}
      <div className="relative min-h-[760px] lg:min-h-[880px] flex flex-col justify-between py-12 sm:py-16 lg:py-20">
        {/* Layer 1: Background Atmospheric Depth Texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20 transition-transform duration-1000 ease-out"
          style={{
            transform: `translateY(${bgAtmosphereY}px)`,
            backgroundImage:
              'radial-gradient(circle at 50% 30%, rgba(135,206,235,0.15) 0%, transparent 60%)',
          }}
        />

        {/* Layer 2: Dominant Optical Prism Artwork with Scroll-Linked Transformation */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{
            transform: getPrismTransform(),
            willChange: 'transform',
            transition: prefersReducedMotion ? 'none' : 'transform 700ms cubic-bezier(0.16, 1, 0.3, 1)',
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
              transition: prefersReducedMotion ? 'opacity 200ms ease-out' : 'background 700ms ease-out, opacity 700ms ease-out',
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

            {/* LOWER COMPOSITION: Three Large Typographic Pillars (Integrated Spatial Layout) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-10">
              {pillars.map((pillar, idx) => {
                const pillarNumber = idx + 1;
                const isPillarActive =
                  currentVisualState === pillarNumber || isConverged || prefersReducedMotion;
                const concept = pillarConcepts[idx];

                return (
                  <div
                    key={pillar.id}
                    className={`transition-all duration-500 ease-out border-t pt-4 sm:pt-5 ${
                      isPillarActive
                        ? 'border-t-2 border-[#87CEEB] shadow-[0_-8px_24px_-8px_rgba(135,206,235,0.25)]'
                        : 'border-t border-white/20'
                    } ${
                      !prefersReducedMotion &&
                      (isPillarActive
                        ? 'transform scale-[1.025] -translate-y-1'
                        : 'transform scale-[0.985] opacity-50')
                    }`}
                  >
                    {/* Pillar Number & Title */}
                    <div className="flex items-baseline gap-2.5 mb-2">
                      <span
                        className={`text-xs sm:text-sm font-mono font-bold transition-colors duration-500 ${
                          isPillarActive ? 'text-[#87CEEB]' : 'text-white/40'
                        }`}
                      >
                        {pillar.number}
                      </span>
                      <h3
                        className={`text-lg sm:text-xl lg:text-2xl font-sans font-extrabold uppercase tracking-wider transition-colors duration-500 ${
                          isPillarActive ? 'text-white' : 'text-white/50'
                        }`}
                      >
                        {pillar.title}
                      </h3>
                    </div>

                    {/* Short Role Descriptor */}
                    <div className="mb-2">
                      <span
                        className={`text-[10px] sm:text-[11px] font-mono uppercase tracking-wider font-semibold transition-colors duration-500 ${
                          isPillarActive ? 'text-[#87CEEB]/90' : 'text-white/30'
                        }`}
                      >
                        {concept.summary}
                      </span>
                    </div>

                    {/* Approved Description */}
                    <p
                      className={`text-xs sm:text-sm font-sans leading-relaxed transition-all duration-500 ${
                        isPillarActive ? 'text-gray-200 opacity-100' : 'text-gray-400 opacity-40'
                      }`}
                    >
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CONVERGENCE & CLIMAX: Closing Concept, Formula Reveal & CTA */}
            <div
              className={`pt-6 sm:pt-8 border-t border-white/20 transition-all duration-700 ease-out ${
                isConverged || prefersReducedMotion
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-20 translate-y-3 pointer-events-none'
              }`}
            >
              {/* Closing Summary Concept */}
              <div className="mb-4 text-xs sm:text-sm text-gray-300 font-sans tracking-wide">
                <span className="text-white font-medium">Training builds capability.</span>{' '}
                <span className="text-white/40">•</span>{' '}
                <span className="text-white font-medium">Technology supports execution.</span>{' '}
                <span className="text-white/40">•</span>{' '}
                <span className="text-white font-medium">Accountability strengthens follow-through.</span>
              </div>

              {/* Grand Formula Reveal Lockup + Secondary Action */}
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
