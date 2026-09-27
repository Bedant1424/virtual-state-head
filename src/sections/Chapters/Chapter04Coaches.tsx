import React from 'react';
import { Container } from '@/components/layout/Container';
import { siteContent } from '@/data/siteContent';
import { useScrollReveal, revealStyles } from '@/hooks/useMotion';

/**
 * CHAPTER 04 — MEET THE COACHES
 * Pure editorial authority on open Midnight Navy canvas.
 * ZERO profile cards, ZERO container boxes, ZERO LinkedIn-style directory UI.
 * Royal Bal dominant left; Saroj Kumar Panda & Sudeep Mohanty supporting right.
 */
export const Chapter04Coaches: React.FC = () => {
  const [sectionRef, isVisible] = useScrollReveal(0.1);
  const [royalBal, sarojPanda, sudeepMohanty] = siteContent.coaches;

  return (
    <section
      id="coaches"
      ref={sectionRef}
      aria-labelledby="coaches-heading"
      className="py-12 sm:py-16 lg:py-20 bg-[#0B1F33] text-white border-b border-white/10 overflow-hidden relative"
    >
      <Container size="default">
        {/* Eyebrow + Section Headline */}
        <div className={`mb-10 sm:mb-14 ${revealStyles.transition} ${isVisible ? revealStyles.visible : revealStyles.hidden}`}>
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-[#87CEEB] mb-3">
            • Senior Sales Leadership • Royal Way Academy
          </div>
          <div className="max-w-3xl">
            <h2
              id="coaches-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-sans tracking-tight leading-tight mb-3"
            >
              30+ Years of Frontline{' '}
              <span className="text-[#87CEEB]">Sales Experience.</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
              Sales leadership, frontline coaching, and team development delivered by seasoned consultants with decades of practical field experience.
            </p>
          </div>
        </div>

        {/* Human Editorial Composition — Open Canvas, No Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start border-t border-white/15 pt-8">
          {/* Dominant Coach: Royal Bal (7 cols) */}
          <div
            className={`lg:col-span-7 space-y-6 ${revealStyles.transition} ${isVisible ? revealStyles.visible : revealStyles.hidden}`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="flex items-start gap-6">
              {/* Minimal Monogram Typography */}
              <div className="w-16 h-20 sm:w-20 sm:h-24 border border-[#87CEEB]/40 flex flex-col items-center justify-center shrink-0">
                <span className="text-2xl sm:text-3xl font-mono font-extrabold text-[#87CEEB] tracking-wider">
                  {royalBal.initials}
                </span>
                <span className="text-[9px] font-mono text-gray-400 mt-0.5">ODISHA</span>
              </div>

              <div className="space-y-1">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#87CEEB]">
                  FOUNDER • SALES PERFORMANCE ENGINE
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-sans">
                  {royalBal.name}
                </h3>
                <p className="text-sm sm:text-base font-semibold text-gray-200">
                  {royalBal.experience}
                </p>
                <p className="text-xs text-gray-400 font-sans">
                  {royalBal.role}
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed max-w-xl">
              {royalBal.bioSummary}
            </p>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-400">
              <span>SALES LEADERSHIP CONSULTING</span>
              <span className="text-[#87CEEB]">ODISHA MSME SECTOR</span>
            </div>
          </div>

          {/* Supporting Coaches: Saroj Kumar Panda & Sudeep Mohanty (5 cols) */}
          <div
            className={`lg:col-span-5 space-y-6 lg:border-l lg:border-white/15 lg:pl-10 ${revealStyles.transition} ${isVisible ? revealStyles.visible : revealStyles.hidden}`}
            style={{ transitionDelay: '250ms' }}
          >
            {/* Coach 2: Saroj Kumar Panda */}
            <div className="space-y-1.5 pb-6 border-b border-white/10">
              <div className="text-[11px] font-mono font-semibold text-[#87CEEB] uppercase tracking-wider">
                ASSOCIATE COACH
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">
                {sarojPanda.name}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-gray-200">
                {sarojPanda.role} • {sarojPanda.experience}
              </p>
              <p className="text-xs text-gray-400 font-sans leading-relaxed">
                Mindfulness Educator & Mindset Coach
              </p>
            </div>

            {/* Coach 3: Sudeep Mohanty */}
            <div className="space-y-1.5">
              <div className="text-[11px] font-mono font-semibold text-[#87CEEB] uppercase tracking-wider">
                ASSOCIATE COACH
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">
                {sudeepMohanty.name}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-gray-200">
                {sudeepMohanty.role} • {sudeepMohanty.experience}
              </p>
              <p className="text-xs text-gray-400 font-sans leading-relaxed">
                Head Coach
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Chapter04Coaches;
