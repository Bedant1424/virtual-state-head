import React from 'react';
import { Container } from '@/components/layout/Container';
import { siteContent } from '@/data/siteContent';

/**
 * CHAPTER 04 — MEET THE COACHES
 * Editorial Strategic Authority: Human Authority / Midnight Navy Gallery
 *
 * Royal Bal holds the dominant visual and editorial position on the left.
 * Flanked by Saroj Kumar Panda and Sudeep Mohanty on the right.
 * Uses refined architectural monogram frames with verified biographies only.
 * Background: Midnight Navy (#0B1F33) for senior executive authority.
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
        {/* Chapter Micro-Index (Eyebrow 2 of 3 on page) */}
        <div className="text-xs font-mono font-semibold uppercase tracking-widest text-[#87CEEB] mb-4">
          • Senior Sales Leadership • Royal Way Academy
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2
            id="coaches-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-sans tracking-tight leading-tight mb-4"
          >
            30+ Years of Frontline{' '}
            <span className="text-[#87CEEB]">Sales Experience.</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 font-sans leading-relaxed">
            Sales leadership, frontline coaching, and team development delivered by seasoned consultants with decades of practical field experience.
          </p>
        </div>

        {/* Coaches Layout: Dominant Royal Bal (Left 7 cols), Associate Coaches (Right 5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Dominant Coach: Royal Bal (7 cols) */}
          <div className="lg:col-span-7 bg-[#122b47]/50 rounded-[4px] border border-white/15 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Architectural Frame Header */}
              <div className="flex items-start gap-5 mb-6 pb-6 border-b border-white/10">
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
                  <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#87CEEB] mb-1">
                    FOUNDER • SALES PERFORMANCE ENGINE
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-sans">
                    {royalBal.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-gray-300 mt-0.5">
                    {royalBal.experience}
                  </p>
                  <p className="text-xs text-gray-400 font-sans mt-0.5">
                    {royalBal.role}
                  </p>
                </div>
              </div>

              {/* Verified Authoritative Bio */}
              <p className="text-sm sm:text-base text-gray-200 font-sans leading-relaxed">
                {royalBal.bioSummary}
              </p>
            </div>

            {/* Grounding Attribution */}
            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-400">
              <span>SALES LEADERSHIP CONSULTING</span>
              <span className="text-[#87CEEB]">ODISHA MSME SECTOR</span>
            </div>
          </div>

          {/* Associate Coaches: Saroj Kumar Panda & Sudeep Mohanty (5 cols) */}
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
                      {sarojPanda.role} • {sarojPanda.experience}
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
                  {sarojPanda.bioSummary}
                </p>
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
                      {sudeepMohanty.role} • {sudeepMohanty.experience}
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
                  {sudeepMohanty.bioSummary}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Chapter04Coaches;
