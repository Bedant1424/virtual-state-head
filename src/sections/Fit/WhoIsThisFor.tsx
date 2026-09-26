import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { siteContent } from '@/data/siteContent';
import { Check, Target, Users } from 'lucide-react';

export interface WhoIsThisForProps {
  className?: string;
}

/**
 * WhoIsThisFor Section (<section id="fit">)
 *
 * Requirements:
 * - Grounded strictly in master-source positioning:
 *   - MSME owners, founders, directors, business leaders
 *   - Existing sales teams
 *   - Inconsistent sales performance
 *   - Unclear priorities
 *   - Follow-up / accountability issues
 *   - Sales development needs
 *   - Need for experienced sales leadership support
 * - No invented "not designed for" claims
 */
export const WhoIsThisFor: React.FC<WhoIsThisForProps> = ({ className }) => {
  const { brand } = siteContent;

  const qualificationCriteria = [
    {
      title: 'MSME Owners, Founders, Directors & Business Leaders',
      description:
        'Business owners and leadership teams seeking experienced sales direction and execution discipline.',
    },
    {
      title: 'Businesses with an Existing Sales Team',
      description:
        'Companies with active sales personnel and products in the market who need structured performance support.',
    },
    {
      title: 'Inconsistent Sales Performance',
      description:
        'Organizations where sales conversions fluctuate unpredictably across months or quarters.',
    },
    {
      title: 'Need Clearer Direction and Priorities',
      description:
        'Teams that require sharper focus on target customers, sales activities, and commercial priorities.',
    },
    {
      title: 'Follow-up and Accountability Issues',
      description:
        'Pipelines where client follow-up lapses and commitments lose momentum without structured reviews.',
    },
    {
      title: 'Sales Development Needs',
      description:
        'Frontline salespeople requiring capability building in customer engagement, communication, and negotiation.',
    },
    {
      title: 'Need for Experienced Sales Leadership Support',
      description:
        'Enterprises needing senior sales guidance, performance consulting, and executive direction.',
    },
  ];

  return (
    <section
      id="fit"
      aria-labelledby="fit-heading"
      className={`py-16 sm:py-20 lg:py-24 bg-white border-b border-gray-200 relative overflow-hidden ${
        className || ''
      }`}
    >
      <Container size="default">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <SectionLabel label="Audience Fit & Alignment" className="mb-3" />
          <h2
            id="fit-heading"
            className="text-3xl sm:text-4xl font-extrabold text-navy mb-4 font-sans tracking-tight"
          >
            Who Virtual State Head Is For
          </h2>
          <p className="text-base sm:text-lg text-charcoal/80 font-sans leading-relaxed">
            Designed specifically for MSME leaders in {brand.location} who have established businesses and active sales teams, but need stronger direction, execution, and performance discipline.
          </p>
        </div>

        {/* 2-Column Split: Editorial Visual Left + Qualification Criteria Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column (5 cols): Contextual Summary & Visual Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-[#0B1F33] text-white p-7 sm:p-8 border border-white/10 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-sky-brand/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-2 mb-6">
                <Target className="w-5 h-5 text-sky-brand" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-brand">
                  Target Profile
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-sans text-white mb-4 leading-snug">
                For Operating Businesses with Active Sales Teams
              </h3>

              <p className="text-sm text-gray-300 font-sans leading-relaxed mb-6">
                Virtual State Head provides senior executive direction and accountability for businesses where sales activity already exists, but structured leadership is needed to eliminate variance and drive team consistency.
              </p>

              <div className="pt-6 border-t border-white/10 space-y-3">
                <div className="flex items-center justify-between text-xs text-gray-300">
                  <span>Target Leadership</span>
                  <strong className="text-white font-sans">Owners, Founders & Directors</strong>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-300">
                  <span>Core Need</span>
                  <strong className="text-white font-sans">Direction & Accountability</strong>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-300">
                  <span>Engagement Scope</span>
                  <strong className="text-white font-sans">Experienced Sales Leadership</strong>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-[#F8FAFC] border border-gray-200/90 p-5 flex items-start gap-3.5">
              <Users className="w-5 h-5 text-deep-blue shrink-0 mt-0.5" />
              <p className="text-xs text-charcoal/80 font-sans leading-relaxed">
                <strong className="text-navy font-bold">Collaborative Leadership: </strong>
                We work directly with your existing sales personnel and management to establish repeatable habits and structured performance cadence.
              </p>
            </div>
          </div>

          {/* Right Column (7 cols): Grounded Master-Source Qualification Points */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white border border-gray-200 p-6 sm:p-8 shadow-xs">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-deep-blue mb-6 pb-3 border-b border-gray-100">
                Core Engagement Indicators
              </h3>

              <div className="space-y-5">
                {qualificationCriteria.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="w-5 h-5 rounded-full bg-deep-blue/10 text-deep-blue flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-navy font-sans mb-0.5">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-charcoal/70 font-sans leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhoIsThisFor;
