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
 * - Left: Large visual consulting illustration (SVG strategic roadmap & executive delivery system)
 * - Right: Simple vertical connected process (01 ASSESS → 02 SET DIRECTION → 03 DEVELOP → 04 EXECUTE → 05 REVIEW → 06 IMPROVE)
 * - Below: 5 named frameworks in compact editorial typography
 */
export const HowItWorks: React.FC<HowItWorksProps> = ({ className }) => {
  const { processStages, frameworks } = siteContent;

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className={`py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] border-b border-gray-200 relative overflow-hidden ${
        className || ''
      }`}
    >
      {/* Anchor targets for backward-compatible deep links */}
      <div id="frameworks" className="absolute -top-24" aria-hidden="true" />
      <div id="process" className="absolute -top-24" aria-hidden="true" />

      <Container size="default">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <SectionLabel label="Methodology & Delivery" className="mb-3" />
          <h2
            id="how-it-works-heading"
            className="text-3xl sm:text-4xl font-extrabold text-navy mb-4 font-sans tracking-tight"
          >
            How the Engagement Works
          </h2>
          <p className="text-base sm:text-lg text-charcoal/80 font-sans leading-relaxed">
            A structured six-stage engagement sequence guiding your business from diagnostic assessment through active leadership and continuous execution discipline, anchored by five proven sales frameworks.
          </p>
        </div>

        {/* ============================================================== */}
        {/* 2-COLUMN SPLIT: Large Illustration Left + Vertical Steps Right */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 sm:mb-20">
          {/* Left Column (5 cols): Large Visual Consulting Illustration */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="w-full rounded-2xl bg-white border border-gray-200/90 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-deep-blue">
                  Consulting Architecture
                </span>
                <span className="text-[11px] font-semibold text-muted bg-gray-100 px-2.5 py-0.5 rounded-full">
                  High-Touch Delivery
                </span>
              </div>

              {/* Vector Consulting Flow Diagram */}
              <svg
                viewBox="0 0 400 440"
                className="w-full h-auto select-none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="diag-grad-top" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#123B63" />
                    <stop offset="100%" stopColor="#0B1F33" />
                  </linearGradient>
                  <linearGradient id="diag-grad-mid" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#87CEEB" />
                    <stop offset="100%" stopColor="#123B63" />
                  </linearGradient>
                  <linearGradient id="diag-grad-bot" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#0B1F33" />
                    <stop offset="100%" stopColor="#123B63" />
                  </linearGradient>
                </defs>

                {/* Vertical Central Spinal Axis */}
                <line
                  x1="200"
                  y1="60"
                  x2="200"
                  y2="380"
                  stroke="#123B63"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  strokeOpacity="0.3"
                />

                {/* Tier 1: Senior Sales Leadership & Advisory */}
                <g transform="translate(40, 20)">
                  <rect
                    width="320"
                    height="70"
                    rx="12"
                    fill="url(#diag-grad-top)"
                    stroke="#87CEEB"
                    strokeWidth="1.5"
                    strokeOpacity="0.4"
                  />
                  <circle cx="36" cy="35" r="18" fill="#87CEEB" fillOpacity="0.2" />
                  <text
                    x="36"
                    y="40"
                    fill="#87CEEB"
                    fontSize="11"
                    fontWeight="800"
                    textAnchor="middle"
                  >
                    VSH
                  </text>
                  <text
                    x="70"
                    y="30"
                    fill="#FFFFFF"
                    fontSize="13"
                    fontWeight="800"
                    fontFamily="sans-serif"
                  >
                    Senior Sales Leadership Layer
                  </text>
                  <text
                    x="70"
                    y="48"
                    fill="#87CEEB"
                    fontSize="10"
                    fontWeight="500"
                    fontFamily="sans-serif"
                  >
                    Strategic Clarity • Target Setting • Governance
                  </text>
                </g>

                {/* Downward Strategic Vector */}
                <path
                  d="M 200 95 L 200 145"
                  stroke="#123B63"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <polygon points="196,140 200,148 204,140" fill="#123B63" />

                {/* Tier 2: The Structured 6-Stage Engine Rhythm */}
                <g transform="translate(60, 150)">
                  <rect
                    width="280"
                    height="140"
                    rx="12"
                    fill="#F1F5F9"
                    stroke="#123B63"
                    strokeWidth="1.5"
                    strokeOpacity="0.3"
                  />

                  {/* 6 Micro-Milestones in 2x3 Grid */}
                  <text
                    x="140"
                    y="24"
                    fill="#0B1F33"
                    fontSize="11"
                    fontWeight="800"
                    textAnchor="middle"
                    letterSpacing="0.05em"
                  >
                    CONTINUOUS EXECUTION ENGINE
                  </text>

                  {/* Row 1: 01, 02, 03 */}
                  <g transform="translate(20, 38)">
                    <rect width="70" height="36" rx="6" fill="#FFFFFF" stroke="#CBD5E1" />
                    <text x="35" y="16" fill="#123B63" fontSize="8" fontWeight="800" textAnchor="middle">01 ASSESS</text>
                    <text x="35" y="27" fill="#64748B" fontSize="7" textAnchor="middle">Diagnostic</text>
                  </g>
                  <line x1="92" y1="56" x2="103" y2="56" stroke="#94A3B8" strokeWidth="1.5" />
                  <g transform="translate(105, 38)">
                    <rect width="70" height="36" rx="6" fill="#FFFFFF" stroke="#CBD5E1" />
                    <text x="35" y="16" fill="#123B63" fontSize="8" fontWeight="800" textAnchor="middle">02 DIRECT</text>
                    <text x="35" y="27" fill="#64748B" fontSize="7" textAnchor="middle">Priorities</text>
                  </g>
                  <line x1="177" y1="56" x2="188" y2="56" stroke="#94A3B8" strokeWidth="1.5" />
                  <g transform="translate(190, 38)">
                    <rect width="70" height="36" rx="6" fill="#FFFFFF" stroke="#CBD5E1" />
                    <text x="35" y="16" fill="#123B63" fontSize="8" fontWeight="800" textAnchor="middle">03 DEVELOP</text>
                    <text x="35" y="27" fill="#64748B" fontSize="7" textAnchor="middle">Capability</text>
                  </g>

                  {/* Return flow curve */}
                  <path d="M 225 76 C 225 84, 225 88, 225 90 C 225 90, 225 90, 225 90" stroke="#94A3B8" strokeWidth="1.5" />

                  {/* Row 2: 06, 05, 04 */}
                  <g transform="translate(190, 88)">
                    <rect width="70" height="36" rx="6" fill="#FFFFFF" stroke="#CBD5E1" />
                    <text x="35" y="16" fill="#123B63" fontSize="8" fontWeight="800" textAnchor="middle">04 EXECUTE</text>
                    <text x="35" y="27" fill="#64748B" fontSize="7" textAnchor="middle">Daily Cadence</text>
                  </g>
                  <line x1="188" y1="106" x2="177" y2="106" stroke="#94A3B8" strokeWidth="1.5" />
                  <g transform="translate(105, 88)">
                    <rect width="70" height="36" rx="6" fill="#FFFFFF" stroke="#CBD5E1" />
                    <text x="35" y="16" fill="#123B63" fontSize="8" fontWeight="800" textAnchor="middle">05 REVIEW</text>
                    <text x="35" y="27" fill="#64748B" fontSize="7" textAnchor="middle">Accountability</text>
                  </g>
                  <line x1="103" y1="106" x2="92" y2="106" stroke="#94A3B8" strokeWidth="1.5" />
                  <g transform="translate(20, 88)">
                    <rect width="70" height="36" rx="6" fill="#FFFFFF" stroke="#CBD5E1" />
                    <text x="35" y="16" fill="#123B63" fontSize="8" fontWeight="800" textAnchor="middle">06 IMPROVE</text>
                    <text x="35" y="27" fill="#64748B" fontSize="7" textAnchor="middle">Discipline</text>
                  </g>
                </g>

                {/* Downward Grounding Vector */}
                <path
                  d="M 200 295 L 200 345"
                  stroke="#123B63"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <polygon points="196,340 200,348 204,340" fill="#123B63" />

                {/* Tier 3: In-Market Frontline Sales Team */}
                <g transform="translate(40, 350)">
                  <rect
                    width="320"
                    height="70"
                    rx="12"
                    fill="url(#diag-grad-bot)"
                    stroke="#123B63"
                    strokeWidth="1.5"
                  />
                  <circle cx="36" cy="35" r="18" fill="#87CEEB" fillOpacity="0.2" />
                  <text
                    x="36"
                    y="40"
                    fill="#87CEEB"
                    fontSize="11"
                    fontWeight="800"
                    textAnchor="middle"
                  >
                    MSME
                  </text>
                  <text
                    x="70"
                    y="30"
                    fill="#FFFFFF"
                    fontSize="13"
                    fontWeight="800"
                    fontFamily="sans-serif"
                  >
                    Frontline Sales Team & Field Execution
                  </text>
                  <text
                    x="70"
                    y="48"
                    fill="#87CEEB"
                    fontSize="10"
                    fontWeight="500"
                    fontFamily="sans-serif"
                  >
                    Daily Ownership • Pipeline Hygiene • Odia Realities
                  </text>
                </g>
              </svg>

              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-muted">
                <span>Direct on-ground engagement</span>
                <span className="font-semibold text-deep-blue">No detached theory</span>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Simple Vertical Connected Process */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="relative pl-8 sm:pl-10 space-y-6 sm:space-y-8 before:absolute before:left-3.5 sm:before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-deep-blue before:via-sky-brand before:to-deep-blue">
              {processStages.map((stage) => (
                <div key={stage.id} className="relative group">
                  {/* Connected Node Dot on the vertical line */}
                  <div className="absolute -left-[33px] sm:-left-[37px] top-1 w-6 h-6 rounded-full bg-white border-2 border-deep-blue group-hover:border-sky-brand flex items-center justify-center transition-colors shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-deep-blue group-hover:bg-sky-brand transition-colors" />
                  </div>

                  {/* Stage Content */}
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

        {/* Divider */}
        <div className="w-full h-px bg-gray-200/90 mb-12 sm:mb-16" />

        {/* ============================================================== */}
        {/* BELOW: Five Named Frameworks in Compact Editorial Typography   */}
        {/* ============================================================== */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-deep-blue mb-1">
                Methodological Grounding
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-navy font-sans">
                Five Confirmed Sales Frameworks
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-muted max-w-md">
              Field-tested frameworks structured for capability development, client negotiations, and relationship longevity.
            </p>
          </div>

          {/* 5-Column Editorial Typography Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {frameworks.map((fw) => (
              <div
                key={fw.id}
                className="p-5 rounded-xl bg-white border border-gray-200/80 shadow-2xs hover:border-deep-blue/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-deep-blue block mb-2">
                    {fw.number}
                  </span>
                  <h4 className="text-base font-bold text-navy font-sans leading-snug">
                    {fw.name}
                  </h4>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-[11px] font-semibold text-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-brand" />
                  <span>Sales Framework</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
