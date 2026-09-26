import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { siteContent } from '@/data/siteContent';
import { Award, User } from 'lucide-react';

export interface CoachesProps {
  className?: string;
}

/**
 * Coaches Section (<section id="coaches">)
 * Human-centered editorial presentation of experienced sales leadership.
 *
 * Grounded strictly in approved master source content:
 * - Royal Bal (Lead Consultant, Founder of Sales Performance Engine, 30+ Years Experience)
 * - Saroj Kumar Panda (Mindfulness Educator & Mindset Coach)
 * - Sudeep Mohanty (Head Coach)
 *
 * Uses intentional, premium portrait placeholder frames (not bare initials)
 * labeled clearly for future photography. Zero invented credentials.
 */
export const Coaches: React.FC<CoachesProps> = ({ className }) => {
  const { coaches } = siteContent;
  const royalBal = coaches[0];
  const supportingCoaches = coaches.slice(1);

  return (
    <section
      id="coaches"
      aria-labelledby="coaches-heading"
      className={`py-12 sm:py-14 lg:py-16 bg-white border-b border-gray-200/80 relative overflow-hidden ${
        className || ''
      }`}
    >
      <Container size="default">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="mb-3">
            <SectionLabel label="Sales Leadership Team • Human Credibility" />
          </div>
          <h2
            id="coaches-heading"
            className="typography-h2 text-navy mb-3 font-sans font-extrabold tracking-tight"
          >
            The Leadership Behind Virtual State Head
          </h2>
          <p className="text-base sm:text-lg text-muted font-sans leading-relaxed">
            Direct guidance and coaching from senior sales practitioners with decades of field execution experience, helping MSME business owners establish lasting sales discipline.
          </p>
        </div>

        {/* ============================================================== */}
        {/* LEAD CONSULTANT: Royal Bal (Large Feature Profile)            */}
        {/* ============================================================== */}
        <div className="mb-8">
          <div className="rounded-2xl bg-paper border border-gray-200/90 p-6 sm:p-8 lg:p-10 shadow-xs hover:border-sky-brand/50 transition-all duration-200">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 lg:gap-10">
              {/* Intentional Executive Portrait Placeholder */}
              <div className="shrink-0 w-36 h-44 sm:w-44 sm:h-52 rounded-2xl bg-gradient-to-b from-[#123B63] to-[#0B1F33] border-2 border-sky-brand/40 shadow-md relative overflow-hidden flex flex-col items-center justify-between p-3.5 text-center">
                <span className="text-[10px] font-mono uppercase tracking-widest text-sky-brand/80">
                  Lead Consultant
                </span>
                <div className="flex flex-col items-center gap-1.5 my-auto">
                  <div className="w-12 h-12 rounded-full bg-white/10 border border-sky-brand/30 flex items-center justify-center text-sky-brand">
                    <User className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-sans font-bold text-white tracking-wide">
                    Royal Bal
                  </span>
                </div>
                <span className="text-[9px] font-mono text-slate-300/80 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                  [ Executive Portrait ]
                </span>
              </div>

              {/* Bio & Credentials */}
              <div className="flex-1 flex flex-col justify-between self-stretch text-center md:text-left">
                <div>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 mb-2">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-navy font-sans">
                      {royalBal.name}
                    </h3>
                    <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-soft-blue text-deep-blue text-xs font-bold border border-sky-brand/30">
                      <Award className="w-3.5 h-3.5 text-deep-blue" />
                      Lead Consultant
                    </span>
                  </div>

                  <p className="text-sm sm:text-base font-bold text-deep-blue font-sans mb-1.5">
                    {royalBal.role}
                  </p>

                  <div className="inline-block px-3 py-1 rounded-md bg-white border border-gray-200 text-xs font-bold text-navy mb-4">
                    {royalBal.experience}
                  </div>

                  <p className="text-sm sm:text-base text-charcoal font-sans leading-relaxed max-w-2xl">
                    {royalBal.bioSummary}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-gray-200/80 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-semibold text-deep-blue">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-brand" />
                    Sales Strategy & Direction
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-brand" />
                    Sales Performance Engine Architect
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-brand" />
                    Odisha MSME Consulting
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* SUPPORTING COACHES: Saroj Kumar Panda & Sudeep Mohanty          */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {supportingCoaches.map((coach) => (
            <div
              key={coach.id}
              className="rounded-xl bg-white border border-gray-200/90 p-5 sm:p-7 shadow-xs hover:border-sky-brand/50 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 mb-4">
                {/* Intentional Portrait Placeholder */}
                <div className="shrink-0 w-24 h-28 sm:w-28 sm:h-32 rounded-xl bg-gradient-to-b from-paper to-soft-blue/50 border border-sky-brand/30 shadow-2xs flex flex-col items-center justify-between p-2 text-center">
                  <span className="text-[9px] font-mono text-muted uppercase">
                    Sales Coach
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-deep-blue">
                    <User className="w-4 h-4" />
                  </div>
                  <span className="text-[8px] font-mono text-muted bg-white/80 px-1.5 py-0.5 rounded border border-gray-200">
                    [ Portrait ]
                  </span>
                </div>

                <div className="text-center sm:text-left">
                  <h3 className="text-lg font-bold text-navy font-sans">
                    {coach.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-deep-blue font-sans mb-1">
                    {coach.role}
                  </p>
                  <span className="inline-block px-2 py-0.5 rounded bg-paper text-[11px] font-medium text-muted border border-gray-200 mb-2">
                    {coach.experience}
                  </span>
                  <p className="text-xs sm:text-sm text-charcoal font-sans leading-relaxed">
                    {coach.bioSummary}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-center sm:justify-start gap-2 text-xs font-semibold text-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-brand" />
                <span>Executive Coaching & Team Development</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Coaches;
