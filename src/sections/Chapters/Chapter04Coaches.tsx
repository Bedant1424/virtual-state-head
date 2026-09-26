import React from 'react';
import { Container } from '@/components/layout/Container';
import { siteContent } from '@/data/siteContent';
import { Award } from 'lucide-react';

/**
 * CHAPTER 04 — MEET THE COACHES
 * Editorial Strategic Authority
 *
 * Royal Bal takes the dominant visual and editorial position.
 * Flanked by Saroj Kumar Panda and Sudeep Mohanty.
 * Uses refined architectural frames with monograms (no fake portraits).
 * Background: Deep Navy (#0B1F33) for senior executive authority.
 */
export const Chapter04Coaches: React.FC = () => {
  const [royalBal, sarojPanda, sudeepMohanty] = siteContent.coaches;

  return (
    <section
      id="coaches"
      aria-labelledby="coaches-heading"
      className="py-16 sm:py-24 lg:py-28 bg-[#0B1F33] text-white border-b border-white/10 overflow-hidden relative"
    >
      <Container size="default">
        {/* Chapter Micro-Index */}
        <div className="text-xs font-mono font-semibold uppercase tracking-widest text-[#87CEEB] mb-4">
          CHAPTER 04 • SENIOR EXECUTIVE ADVISORS
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2
            id="coaches-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-sans tracking-tight leading-tight mb-4"
          >
            30+ Years of Frontline{' '}
            <span className="text-[#87CEEB]">Sales Leadership.</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 font-sans leading-relaxed">
            Direct advisory from seasoned consultants who have built, directed, and disciplined sales organizations across Odisha and India.
          </p>
        </div>

        {/* Coaches Grid: Dominant Royal Bal (Left 7 cols), Associate Coaches (Right 5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Dominant Coach: Royal Bal */}
          <div className="lg:col-span-7 bg-[#122b47]/50 rounded-[4px] border border-white/15 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Architectural Frame Header */}
              <div className="flex items-start justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                <div className="flex items-center gap-4">
                  {/* Monogram Frame (4:5 Ratio) */}
                  <div className="w-16 h-20 sm:w-20 sm:h-24 rounded-[3px] border border-[#87CEEB]/40 bg-[#081827] flex flex-col items-center justify-center shrink-0 relative overflow-hidden">
                    <div className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-[#87CEEB]" />
                    <div className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-[#87CEEB]" />
                    <span className="text-xl sm:text-2xl font-mono font-extrabold text-[#87CEEB] tracking-wider">
                      {royalBal.initials}
                    </span>
                    <span className="text-[9px] font-mono text-gray-400 mt-0.5">ODISHA</span>
                  </div>

                  <div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#87CEEB] mb-1">
                      <Award className="w-3.5 h-3.5 text-[#87CEEB]" />
                      <span>FOUNDER • SALES PERFORMANCE ENGINE</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-sans">
                      {royalBal.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-gray-300 mt-0.5">
                      {royalBal.experience}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bio & Authority */}
              <p className="text-sm sm:text-base text-gray-200 font-sans leading-relaxed mb-6">
                {royalBal.bioSummary}
              </p>
            </div>

            {/* Core Competencies Register */}
            <div className="pt-4 border-t border-white/10">
              <div className="text-[11px] font-mono font-semibold uppercase tracking-widest text-[#87CEEB] mb-2.5">
                PRIMARY ADVISORY FOCUS
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300 font-sans">
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#87CEEB]" />
                  <span>Strategic territory & revenue planning</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#87CEEB]" />
                  <span>Executive sales leadership for founders</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#87CEEB]" />
                  <span>Frontline objection & negotiation mastery</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#87CEEB]" />
                  <span>Weekly accountability governance</span>
                </div>
              </div>
            </div>
          </div>

          {/* Associate Coaches: Saroj Kumar Panda & Sudeep Mohanty */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {/* Coach 2: Saroj Kumar Panda */}
            <div className="bg-[#122b47]/30 rounded-[4px] border border-white/10 p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-12 h-14 rounded-[3px] border border-white/20 bg-[#081827] flex flex-col items-center justify-center shrink-0">
                    <span className="text-base font-mono font-bold text-white tracking-wider">
                      {sarojPanda.initials}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-sans">
                      {sarojPanda.name}
                    </h3>
                    <p className="text-xs text-[#87CEEB] font-sans">
                      {sarojPanda.experience}
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
                  {sarojPanda.bioSummary}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 text-[11px] font-mono text-gray-400">
                SPECIALIZATION: SALES MINDSET & BEHAVIORAL RESILIENCE
              </div>
            </div>

            {/* Coach 3: Sudeep Mohanty */}
            <div className="bg-[#122b47]/30 rounded-[4px] border border-white/10 p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-12 h-14 rounded-[3px] border border-white/20 bg-[#081827] flex flex-col items-center justify-center shrink-0">
                    <span className="text-base font-mono font-bold text-white tracking-wider">
                      {sudeepMohanty.initials}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-sans">
                      {sudeepMohanty.name}
                    </h3>
                    <p className="text-xs text-[#87CEEB] font-sans">
                      {sudeepMohanty.experience}
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
                  {sudeepMohanty.bioSummary}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 text-[11px] font-mono text-gray-400">
                SPECIALIZATION: EXECUTION DISCIPLINE & DAILY HABITS
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Chapter04Coaches;
