import React from 'react';
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
 * Cinematic visual peak. The optical crystal prism dominates the viewport.
 * Scroll progress drives crop, scale, light intensity, and pillar convergence.
 * ZERO frosted glass cards, ZERO status dots, ZERO UI-like pillar controls.
 */
export const Chapter06Engine: React.FC<Chapter06EngineProps> = ({ onCtaClick }) => {
  const { pillars } = siteContent.engine;
  const [scrollRef, progress] = useScrollProgress();
  const [headerRef, headerVisible] = useScrollReveal(0.15);

  // Five distinct scroll-driven phases:
  // Phase 01: TRAINING
  // Phase 02: TECHNOLOGY
  // Phase 03: ACCOUNTABILITY
  // Phase 04: CONVERGENCE
  // Phase 05: SALES PERFORMANCE ENGINE
  const getPhaseInfo = (p: number) => {
    if (p < 0.36) return { phase: 1, name: 'TRAINING', label: 'PHASE 01 • TRAINING' };
    if (p < 0.54) return { phase: 2, name: 'TECHNOLOGY', label: 'PHASE 02 • TECHNOLOGY' };
    if (p < 0.72) return { phase: 3, name: 'ACCOUNTABILITY', label: 'PHASE 03 • ACCOUNTABILITY' };
    if (p < 0.86) return { phase: 4, name: 'CONVERGENCE', label: 'PHASE 04 • CONVERGENCE' };
    return { phase: 5, name: 'SALES PERFORMANCE ENGINE', label: 'PHASE 05 • SALES PERFORMANCE ENGINE' };
  };

  const phaseInfo = getPhaseInfo(progress);
  const currentPhase = phaseInfo.phase;
  const isConverged = currentPhase >= 4;

  // Optical prism transforms: scale increases, position subtly tracks, light bloom intensifies
  const artworkScale = (1.04 + progress * 0.10).toFixed(3);
  const artworkY = ((progress - 0.5) * -26).toFixed(1);
  const lightBloomOpacity = isConverged ? 0.75 : 0.35 + currentPhase * 0.08;

  return (
    <section
      id="engine"
      ref={scrollRef}
      aria-labelledby="engine-heading"
      className="relative bg-[#0B1F33] overflow-hidden"
    >
      {/* Full-bleed dominant artwork canvas — enlarged cinematic height */}
      <div className="relative min-h-[720px] lg:min-h-[840px]">
        {/* Dominant Optical Prism Artwork Background */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            transform: `scale(${artworkScale}) translateY(${artworkY}px)`,
            willChange: 'transform',
          }}
        >
          <img
            src={vshImages.engine}
            alt="Optical crystal prism refracting light streams: Training, Technology, and Accountability"
            className="w-full h-full object-cover object-center filter saturate-[1.12]"
            loading="lazy"
          />

          {/* Dynamic Optical Light Glow: shifts with scroll phase */}
          <div
            className="absolute inset-0 transition-opacity duration-700 pointer-events-none"
            style={{
              opacity: lightBloomOpacity,
              background: isConverged
                ? 'radial-gradient(circle at 50% 45%, rgba(135,206,235,0.45) 0%, rgba(18,59,99,0.3) 40%, transparent 70%)'
                : 'radial-gradient(circle at 50% 50%, rgba(135,206,235,0.25) 0%, transparent 60%)',
            }}
          />

          {/* Subtle cinematic gradient to ground typography */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33] via-[#0B1F33]/65 to-[#0B1F33]/25 pointer-events-none" />
        </div>

        {/* Content overlay: Pure typography directly on the visual field */}
        <div className="relative z-10 flex flex-col justify-end min-h-[720px] lg:min-h-[840px] px-5 sm:px-8 pb-10 sm:pb-14 lg:pb-16 pt-16 sm:pt-20">
          <Container size="default">
            {/* Phase Tag + Section Heading */}
            <div ref={headerRef} className="mb-6 sm:mb-10 max-w-2xl">
              {/* Dynamic Scroll Phase Indicator */}
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#87CEEB] mb-2.5 transition-all duration-300">
                {phaseInfo.label}
              </div>

              <div className={revealStyles.clipMaskContainer}>
                <h2
                  id="engine-heading"
                  className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white font-sans tracking-tight leading-tight mb-2.5 ${
                    revealStyles.clipMaskTransition
                  } ${headerVisible ? revealStyles.clipMaskVisible : revealStyles.clipMaskHidden}`}
                >
                  The{' '}
                  <span className="text-[#87CEEB]">
                    Sales Performance Engine
                  </span>
                </h2>
              </div>
              <p
                className={`text-sm sm:text-base text-gray-300 font-sans leading-relaxed ${revealStyles.transition} ${
                  headerVisible ? revealStyles.visible : revealStyles.hidden
                }`}
                style={{ transitionDelay: '100ms' }}
              >
                Three essential elements converge to build sustainable commercial consistency.
              </p>
            </div>

            {/* Three Approved Pillars: TRAINING, TECHNOLOGY, ACCOUNTABILITY (Fixed Grid, Pure Typography) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 mb-8 border-t border-white/20 pt-5">
              {pillars.map((pillar, idx) => {
                const pillarPhase = idx + 1;
                const isPillarActive = currentPhase === pillarPhase || isConverged;
                return (
                  <div key={pillar.id} className="space-y-1.5 transition-all duration-500">
                    <div className="flex items-baseline gap-2">
                      <span
                        className={`text-xs font-mono font-bold transition-colors duration-500 ${
                          isPillarActive ? 'text-[#87CEEB]' : 'text-white/30'
                        }`}
                      >
                        {pillar.number}
                      </span>
                      <h3
                        className={`text-base sm:text-lg font-bold font-sans uppercase tracking-wider transition-colors duration-500 ${
                          isPillarActive ? 'text-white' : 'text-white/40'
                        }`}
                      >
                        {pillar.title}
                      </h3>
                    </div>
                    <p
                      className={`text-xs sm:text-sm font-sans leading-relaxed transition-opacity duration-500 ${
                        isPillarActive ? 'text-gray-200 opacity-100' : 'text-gray-400 opacity-30'
                      }`}
                    >
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Convergence Formula Lockup + Primary Action (Illuminates in Phases 04 & 05) */}
            <div
              className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-5 border-t border-white/20 transition-all duration-700 ${
                isConverged ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="text-xs sm:text-sm font-mono font-bold text-[#87CEEB] tracking-wider">
                TRAINING + TECHNOLOGY + ACCOUNTABILITY = SALES PERFORMANCE ENGINE
              </div>
              <Button
                variant="primary"
                size="lg"
                onClick={onCtaClick}
                className="w-full sm:w-auto bg-[#123B63] text-white hover:bg-[#1a4a7a] transition-colors font-bold px-8 py-3.5 rounded-[4px] shadow-none flex items-center justify-center gap-3 cursor-pointer border border-[#87CEEB]/30 whitespace-nowrap"
              >
                <span>Book Your Sales Strategy Call</span>
                <ArrowRight className="w-4 h-4 text-[#87CEEB]" />
              </Button>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default Chapter06Engine;
