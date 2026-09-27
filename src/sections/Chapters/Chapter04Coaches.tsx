import React from 'react';
import { Container } from '@/components/layout/Container';
import { siteContent } from '@/data/siteContent';
import { useScrollReveal, revealStyles } from '@/hooks/useMotion';

/**
 * CHAPTER 04 — MEET THE COACHES
 * Midnight Navy with staggered entrance. Larger monogram for Royal Bal.
 * Reduced bio copy — experience line only for supporting coaches.
 */
export const Chapter04Coaches: React.FC = () => {
  const [sectionRef, isVisible] = useScrollReveal(0.1);
  const [royalBal, sarojPanda, sudeepMohanty] = siteContent.coaches;

  return (
    <section
      id="coaches"
      ref={sectionRef}
      aria-labelledby="coaches-heading"
      className="py-12 sm:py-16 lg:py-20 bg-[#0B1F33] text-white overflow-hidden relative"
    >
      <Container size="default">
        {/* Eyebrow + Headline */}
        <div className={`${revealStyles.transition} ${isVisible ? revealStyles.visible : revealStyles.hidden}`}>
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-[#87CEEB] mb-3">
            • Senior Sales Leadership • Royal Way Academy
          </div>
          <div className="max-w-3xl mb-8 sm:mb-10">
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

        {/* Coach cards with stagger */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Royal Bal — dominant */}
          <div
            className={`lg:col-span-7 bg-[#122b47]/50 rounded-[4px] border border-white/15 p-6 sm:p-8 flex flex-col justify-between ${revealStyles.transition} ${isVisible ? revealStyles.visible : revealStyles.hidden}`}
            style={{ transitionDelay: '150ms' }}
          >
            <div>
              <div className="flex items-start gap-5 mb-5 pb-5 border-b border-white/10">
                {/* Larger Monogram Frame */}
                <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-[3px] border border-[#87CEEB]/40 bg-[#081827] flex flex-col items-center justify-center shrink-0 relative overflow-hidden">
                  <div className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-[#87CEEB]" />
                  <div className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-[#87CEEB]" />
                  <span className="text-2xl sm:text-3xl font-mono font-extrabold text-[#87CEEB] tracking-wider">
                    {royalBal.initials}
                  </span>
                  <span className="text-[9px] font-mono text-gray-400 mt-0.5">ODISHA</span>
                </div>
                <div>
                  <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#87CEEB] mb-1">
                    FOUNDER • SALES PERFORMANCE ENGINE
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-sans">
                    {royalBal.name}
                  </h3>
                  <p className="text-sm font-semibold text-gray-300 mt-0.5">
                    {royalBal.experience}
                  </p>
                  <p className="text-xs text-gray-400 font-sans mt-0.5">
                    {royalBal.role}
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-200 font-sans leading-relaxed">
                {royalBal.bioSummary}
              </p>
            </div>
            <div className="pt-5 mt-5 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-400">
              <span>SALES LEADERSHIP CONSULTING</span>
              <span className="text-[#87CEEB]">ODISHA MSME SECTOR</span>
            </div>
          </div>

          {/* Supporting coaches — compact */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-5">
            <div
              className={`bg-[#122b47]/30 rounded-[4px] border border-white/10 p-5 flex-1 flex flex-col justify-center ${revealStyles.transition} ${isVisible ? revealStyles.visible : revealStyles.hidden}`}
              style={{ transitionDelay: '300ms' }}
            >
              <div className="flex items-center gap-3.5">
                <div className="w-14 h-16 rounded-[3px] border border-white/20 bg-[#081827] flex items-center justify-center shrink-0">
                  <span className="text-lg font-mono font-bold text-white tracking-wider">
                    {sarojPanda.initials}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-sans">{sarojPanda.name}</h3>
                  <p className="text-sm font-semibold text-gray-300 mt-0.5">{sarojPanda.experience}</p>
                  <p className="text-xs text-[#87CEEB] font-sans">{sarojPanda.role}</p>
                </div>
              </div>
            </div>

            <div
              className={`bg-[#122b47]/30 rounded-[4px] border border-white/10 p-5 flex-1 flex flex-col justify-center ${revealStyles.transition} ${isVisible ? revealStyles.visible : revealStyles.hidden}`}
              style={{ transitionDelay: '450ms' }}
            >
              <div className="flex items-center gap-3.5">
                <div className="w-14 h-16 rounded-[3px] border border-white/20 bg-[#081827] flex items-center justify-center shrink-0">
                  <span className="text-lg font-mono font-bold text-white tracking-wider">
                    {sudeepMohanty.initials}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-sans">{sudeepMohanty.name}</h3>
                  <p className="text-sm font-semibold text-gray-300 mt-0.5">{sudeepMohanty.experience}</p>
                  <p className="text-xs text-[#87CEEB] font-sans">{sudeepMohanty.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Chapter04Coaches;
