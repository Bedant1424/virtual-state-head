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
 * ZERO frosted glass cards, ZERO status dots, ZERO UI-like pillar controls.
 * Pure typography integrated into cinematic art direction.
 */
export const Chapter06Engine: React.FC<Chapter06EngineProps> = ({ onCtaClick }) => {
  const { pillars } = siteContent.engine;
  const [scrollRef, progress] = useScrollProgress();
  const [headerRef, headerVisible] = useScrollReveal(0.15);

  // Determine active pillar based on scroll progress (0–1)
  const getActiveIndex = () => {
    if (progress < 0.2) return -1;
    if (progress < 0.4) return 0;
    if (progress < 0.6) return 1;
    if (progress < 0.8) return 2;
    return 3; // convergence
  };
  const activeIndex = getActiveIndex();
  const isConverged = activeIndex === 3;

  // Image transform based on scroll
  const imageScale = 1.12 - progress * 0.12;
  const imageY = (1 - progress) * 15;

  return (
    <section
      id="engine"
      ref={scrollRef}
      aria-labelledby="engine-heading"
      className="relative bg-[#0B1F33] overflow-hidden"
    >
      {/* Full-bleed cinematic artwork canvas */}
      <div className="relative min-h-[720px] lg:min-h-[820px]">
        {/* Dominant Artwork Background */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            transform: `scale(${imageScale}) translateY(${imageY}px)`,
            transition: 'transform 0.1s linear',
          }}
        >
          <img
            src={vshImages.engine}
            alt="Optical crystal prism refracting three essential light streams: Training, Technology, and Accountability"
            className="w-full h-full object-cover object-center filter saturate-[1.1]"
            loading="lazy"
          />
          {/* Subtle cinematic gradient to ground typography */}
          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{ opacity: 0.45 + progress * 0.25 }}
          >
            <div className="w-full h-full bg-gradient-to-t from-[#0B1F33] via-[#0B1F33]/60 to-[#0B1F33]/20" />
          </div>
        </div>

        {/* Content overlay: Pure typography directly on the visual field */}
        <div className="relative z-10 flex flex-col justify-end min-h-[720px] lg:min-h-[820px] px-5 sm:px-8 pb-12 sm:pb-16 lg:pb-20 pt-20">
          <Container size="default">
            {/* Section Heading */}
            <div
              ref={headerRef}
              className={`mb-8 sm:mb-12 max-w-2xl ${revealStyles.transition} ${
                headerVisible ? revealStyles.visible : revealStyles.hidden
              }`}
            >
              <h2
                id="engine-heading"
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white font-sans tracking-tight leading-tight mb-3"
              >
                The{' '}
                <span className="text-[#87CEEB]">
                  Sales Performance Engine
                </span>
              </h2>
              <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
                Three essential elements converge to build sustainable commercial consistency.
              </p>
            </div>

            {/* Three Pillars: Pure Typography Over Artwork (No Cards, No Status Dots) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 mb-10 border-t border-white/20 pt-6">
              {pillars.map((pillar, idx) => {
                const isActive = activeIndex === idx || isConverged;
                return (
                  <div key={pillar.id} className="space-y-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs font-mono font-bold text-[#87CEEB]">
                        {pillar.number}
                      </span>
                      <h3
                        className={`text-base sm:text-lg font-bold font-sans uppercase tracking-wider transition-colors duration-500 ${
                          isActive ? 'text-white' : 'text-white/50'
                        }`}
                      >
                        {pillar.title}
                      </h3>
                    </div>
                    <p
                      className={`text-xs sm:text-sm text-gray-300 font-sans leading-relaxed transition-opacity duration-500 ${
                        isActive ? 'opacity-100' : 'opacity-40'
                      }`}
                    >
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Convergence Formula Lockup + Primary Action */}
            <div
              className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-white/20 transition-all duration-700 ${
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
