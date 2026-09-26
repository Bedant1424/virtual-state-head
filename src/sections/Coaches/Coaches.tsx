import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { siteContent } from '@/data/siteContent';
import { Award, Briefcase, ChevronRight, UserCheck } from 'lucide-react';

export interface CoachesProps {
  className?: string;
}

/**
 * Coaches Section (<section id="coaches">)
 * Human-centered editorial presentation of the leadership behind Virtual State Head.
 *
 * Grounded in approved source content:
 * - Royal Bal (Founder, 30+ Years Sales Experience)
 * - Saroj Kumar Panda (Mindfulness Educator & Mindset Coach)
 * - Sudeep Mohanty (Head Coach & Senior Sales Leadership Mentor)
 *
 * Emphasizes human credibility through clean typography, structured credentials,
 * and editorial composure — without competing technical SVG diagrams.
 */
export const Coaches: React.FC<CoachesProps> = ({ className }) => {
  const { coaches } = siteContent;
  const royalBal = coaches[0];
  const supportingCoaches = coaches.slice(1);

  return (
    <section
      id="coaches"
      aria-labelledby="coaches-heading"
      className={`py-18 sm:py-22 lg:py-26 bg-white border-b border-gray-200/80 relative overflow-hidden ${
        className || ''
      }`}
    >
      <Container size="default">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <div className="mb-4">
            <SectionLabel label="Sales Leadership Team • Human Credibility" />
          </div>
          <h2
            id="coaches-heading"
            className="typography-h2 text-navy mb-4 font-sans font-extrabold"
          >
            The Leadership Behind Virtual State Head
          </h2>
          <p className="text-base sm:text-lg text-muted font-sans leading-relaxed">
            Direct guidance and coaching from senior sales practitioners with decades of field execution experience, helping MSME business owners establish lasting sales discipline.
          </p>
        </div>

        {/* Lead Mentor: Royal Bal (Featured Prominent Card) */}
        <div className="mb-8">
          <div className="rounded-2xl bg-paper border border-gray-200/90 p-6 sm:p-8 lg:p-10 shadow-xs hover:border-sky-brand/50 transition-all duration-200">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-10">
              {/* Left Column: Avatar & Core Titles */}
              <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-navy text-sky-brand font-extrabold text-xl sm:text-2xl flex items-center justify-center shrink-0 border-2 border-sky-brand/40 shadow-sm">
                  {royalBal.initials}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1.5">
                    <h3 className="text-xl sm:text-2xl font-bold text-navy font-sans">
                      {royalBal.name}
                    </h3>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-soft-blue text-deep-blue text-xs font-bold border border-sky-brand/30">
                      <Award className="w-3.5 h-3.5 text-deep-blue" />
                      Lead Consultant
                    </span>
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-deep-blue font-sans mb-1">
                    {royalBal.role}
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-muted font-sans">
                    {royalBal.experience}
                  </p>
                </div>
              </div>

              {/* Right Column: Factual Bio Summary */}
              <div className="lg:max-w-md xl:max-w-lg border-t lg:border-t-0 lg:border-l border-gray-200/80 pt-4 lg:pt-0 lg:pl-8">
                <p className="text-sm sm:text-base text-charcoal font-sans leading-relaxed">
                  {royalBal.bioSummary}
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-deep-blue">
                  <UserCheck className="w-4 h-4 text-sky-brand" />
                  <span>Senior Executive Advisory for Odisha MSMEs</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Supporting Coaches: Saroj Kumar Panda & Sudeep Mohanty (2-Column Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {supportingCoaches.map((coach) => (
            <div
              key={coach.id}
              className="rounded-xl bg-white border border-gray-200/90 p-6 sm:p-7 shadow-xs hover:border-sky-brand/50 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-soft-blue text-deep-blue font-bold text-base flex items-center justify-center shrink-0 border border-sky-brand/30">
                    {coach.initials}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy font-sans">
                      {coach.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-deep-blue font-sans">
                      {coach.role}
                    </p>
                    <span className="text-xs text-muted font-sans">
                      {coach.experience}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-charcoal font-sans leading-relaxed mb-4">
                  {coach.bioSummary}
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-muted">
                <Briefcase className="w-3.5 h-3.5 text-sky-brand" />
                <span>Executive Coaching & Team Development</span>
              </div>
            </div>
          ))}
        </div>

        {/* Subtle Bridge to Engine */}
        <div className="mt-12 sm:mt-14 pt-8 border-t border-gray-200/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-muted font-sans">
            Leadership works through a structured framework. See how training, technology, and accountability connect.
          </p>
          <a
            href="#engine"
            className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-deep-blue hover:text-navy transition-colors shrink-0"
          >
            <span>See the Sales Performance Engine</span>
            <ChevronRight className="w-4 h-4 text-sky-brand group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Coaches;
