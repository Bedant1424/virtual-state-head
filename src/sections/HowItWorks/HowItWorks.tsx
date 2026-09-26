import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { siteContent } from '@/data/siteContent';

export interface HowItWorksProps {
  className?: string;
}

const stageDescriptions: Record<string, string> = {
  '01': 'Diagnostic review of current sales capabilities, pipeline health & team friction points.',
  '02': 'Align commercial priorities, target accounts, territory structure & growth milestones.',
  '03': 'Develop sales communication, objection handling, negotiation capability & confidence.',
  '04': 'Establish disciplined daily sales cadence, customer engagement & execution routines.',
  '05': 'Lead regular weekly performance reviews, pipeline hygiene & commitment follow-through.',
  '06': 'Refine sales playbooks, institutionalize team discipline & ensure sustainable execution.',
};

/**
 * HowItWorks Section (<section id="how-it-works">)
 *
 * Requirements:
 * - 6 Stages kept exactly: 01 Assess, 02 Set Direction, 03 Develop, 04 Execute, 05 Review, 06 Improve
 * - Left visual: Simple premium business-consulting illustration showing the logical flow from business context to improvement
 * - Right column: Simple vertical connected process
 */
export const HowItWorks: React.FC<HowItWorksProps> = ({ className }) => {
  const { processStages } = siteContent;

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className={`py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] border-b border-gray-200 relative overflow-hidden ${
        className || ''
      }`}
    >
      {/* Anchor target for backward-compatible deep links */}
      <div id="process" className="absolute -top-24" aria-hidden="true" />

      <Container size="default">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <SectionLabel label="Structured Delivery" className="mb-3" />
          <h2
            id="how-it-works-heading"
            className="text-3xl sm:text-4xl font-extrabold text-navy mb-4 font-sans tracking-tight"
          >
            How the Engagement Works
          </h2>
          <p className="text-base sm:text-lg text-charcoal/80 font-sans leading-relaxed">
            A structured six-stage engagement sequence guiding your sales team from initial diagnostic assessment to continuous improvement and disciplined follow-through.
          </p>
        </div>

        {/* 2-Column Split: Business Consulting Illustration Left + Vertical Steps Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column (5 cols): Simple Premium Business-Consulting Illustration */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="w-full rounded-2xl bg-white border border-gray-200/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-gray-100">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-deep-blue">
                  Engagement Flow
                </span>
                <span className="text-[11px] font-semibold text-muted bg-gray-100 px-2.5 py-0.5 rounded-full">
                  Structured Progression
                </span>
              </div>

              {/* Business-Consulting Progression Illustration */}
              <svg
                viewBox="0 0 360 480"
                className="w-full h-auto select-none font-sans"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Central Connecting Flow Line */}
                <line
                  x1="180"
                  y1="40"
                  x2="180"
                  y2="440"
                  stroke="#123B63"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  strokeOpacity="0.25"
                />

                {/* 1. Business Context */}
                <g transform="translate(40, 20)">
                  <rect width="280" height="42" rx="8" fill="#0B1F33" stroke="#87CEEB" strokeWidth="1" strokeOpacity="0.4" />
                  <text x="140" y="26" fill="#FFFFFF" fontSize="12" fontWeight="700" textAnchor="middle" letterSpacing="0.04em">
                    Business Context
                  </text>
                </g>

                <path d="M 180 62 L 180 78" stroke="#123B63" strokeWidth="2" />
                <polygon points="177,74 180,80 183,74" fill="#123B63" />

                {/* 2. Sales Assessment */}
                <g transform="translate(50, 80)">
                  <rect width="260" height="40" rx="8" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1" />
                  <text x="130" y="24" fill="#0B1F33" fontSize="11" fontWeight="700" textAnchor="middle">
                    01 • Sales Assessment
                  </text>
                </g>

                <path d="M 180 120 L 180 136" stroke="#123B63" strokeWidth="2" />
                <polygon points="177,132 180,138 183,132" fill="#123B63" />

                {/* 3. Direction */}
                <g transform="translate(50, 138)">
                  <rect width="260" height="40" rx="8" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1" />
                  <text x="130" y="24" fill="#0B1F33" fontSize="11" fontWeight="700" textAnchor="middle">
                    02 • Direction
                  </text>
                </g>

                <path d="M 180 178 L 180 194" stroke="#123B63" strokeWidth="2" />
                <polygon points="177,190 180,196 183,190" fill="#123B63" />

                {/* 4. Development */}
                <g transform="translate(50, 196)">
                  <rect width="260" height="40" rx="8" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1" />
                  <text x="130" y="24" fill="#0B1F33" fontSize="11" fontWeight="700" textAnchor="middle">
                    03 • Development
                  </text>
                </g>

                <path d="M 180 236 L 180 252" stroke="#123B63" strokeWidth="2" />
                <polygon points="177,248 180,254 183,248" fill="#123B63" />

                {/* 5. Execution */}
                <g transform="translate(50, 254)">
                  <rect width="260" height="40" rx="8" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1" />
                  <text x="130" y="24" fill="#0B1F33" fontSize="11" fontWeight="700" textAnchor="middle">
                    04 • Execution
                  </text>
                </g>

                <path d="M 180 294 L 180 310" stroke="#123B63" strokeWidth="2" />
                <polygon points="177,306 180,312 183,306" fill="#123B63" />

                {/* 6. Review */}
                <g transform="translate(50, 312)">
                  <rect width="260" height="40" rx="8" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1" />
                  <text x="130" y="24" fill="#0B1F33" fontSize="11" fontWeight="700" textAnchor="middle">
                    05 • Review
                  </text>
                </g>

                <path d="M 180 352 L 180 368" stroke="#123B63" strokeWidth="2" />
                <polygon points="177,364 180,370 183,364" fill="#123B63" />

                {/* 7. Improvement */}
                <g transform="translate(50, 370)">
                  <rect width="260" height="40" rx="8" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1" />
                  <text x="130" y="24" fill="#0B1F33" fontSize="11" fontWeight="700" textAnchor="middle">
                    06 • Improvement
                  </text>
                </g>

                <path d="M 180 410 L 180 426" stroke="#123B63" strokeWidth="2" />
                <polygon points="177,422 180,428 183,422" fill="#123B63" />

                {/* Outcome: Sustained Discipline */}
                <g transform="translate(40, 428)">
                  <rect width="280" height="42" rx="8" fill="#123B63" />
                  <text x="140" y="26" fill="#87CEEB" fontSize="12" fontWeight="700" textAnchor="middle" letterSpacing="0.04em">
                    Sustained Sales Discipline
                  </text>
                </g>
              </svg>
            </div>
          </div>

          {/* Right Column (7 cols): Simple Vertical Connected Process */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="relative pl-8 sm:pl-10 space-y-6 sm:space-y-8 before:absolute before:left-3.5 sm:before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-deep-blue before:via-sky-brand before:to-deep-blue">
              {processStages.map((stage) => (
                <div key={stage.id} className="relative group">
                  {/* Connected Node Dot */}
                  <div className="absolute -left-[33px] sm:-left-[37px] top-1 w-6 h-6 rounded-full bg-white border-2 border-deep-blue group-hover:border-sky-brand flex items-center justify-center transition-colors shadow-2xs">
                    <span className="w-2 h-2 rounded-full bg-deep-blue group-hover:bg-sky-brand transition-colors" />
                  </div>

                  {/* Stage Details */}
                  <div>
                    <div className="flex items-baseline gap-2.5 mb-1">
                      <span className="text-xs font-mono font-bold text-deep-blue tracking-wider">
                        {stage.number}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-navy font-sans tracking-tight">
                        {stage.name}
                      </h3>
                    </div>
                    <p className="text-sm text-charcoal/80 leading-relaxed font-sans max-w-xl">
                      {stageDescriptions[stage.number] || stage.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
