import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { AlertCircle } from 'lucide-react';

export interface PerformanceGapCostProps {
  className?: string;
}

/**
 * PerformanceGapCost Section (<section id="performance-gap">)
 *
 * Source-grounded impacts:
 * 1. Lost or delayed sales opportunities
 * 2. Inconsistent follow-up
 * 3. Weak visibility into sales activities
 * 4. Unclear ownership of targets
 * 5. Repeated negotiation difficulties
 * 6. Underdeveloped sales capability
 * 7. Excessive dependence on the business owner
 * 8. Time spent managing problems that could be addressed more systematically
 */
export const PerformanceGapCost: React.FC<PerformanceGapCostProps> = ({ className }) => {
  const impacts = [
    'Lost or delayed sales opportunities',
    'Inconsistent follow-up',
    'Weak visibility into sales activities',
    'Unclear ownership of targets',
    'Repeated negotiation difficulties',
    'Underdeveloped sales capability',
    'Excessive dependence on the business owner',
    'Time spent managing problems that could be addressed more systematically',
  ];

  return (
    <section
      id="performance-gap"
      aria-labelledby="performance-gap-heading"
      className={`py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] border-b border-gray-200 relative overflow-hidden ${
        className || ''
      }`}
    >
      <Container size="default">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <SectionLabel label="Operational Reality" className="mb-3" />
          <h2
            id="performance-gap-heading"
            className="text-3xl sm:text-4xl font-extrabold text-navy mb-4 font-sans tracking-tight"
          >
            The Cost of the Performance Gap
          </h2>
          <p className="text-base sm:text-lg text-charcoal/80 font-sans leading-relaxed">
            When sales operations lack structured leadership and regular accountability, the cost emerges across day-to-day execution difficulties.
          </p>
        </div>

        {/* 8 Source-Grounded Impacts in a Clean 2-Column / 4-Row Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {impacts.map((impact, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-white border border-gray-200/90 p-5 sm:p-6 flex items-start gap-4 shadow-2xs hover:border-deep-blue/30 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-deep-blue/10 text-deep-blue flex items-center justify-center shrink-0 mt-0.5">
                <AlertCircle className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <span className="text-xs font-mono font-bold text-muted block mb-1">
                  IMPACT {String(idx + 1).padStart(2, '0')}
                </span>
                <p className="text-sm sm:text-base font-semibold text-navy font-sans leading-snug">
                  {impact}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Supporting Editorial Bottom Callout */}
        <div className="mt-10 sm:mt-12 p-6 rounded-2xl bg-white border border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-sm font-medium text-navy font-sans">
            These challenges are addressed through experienced sales leadership, practical tools, and disciplined accountability.
          </p>
          <a
            href="#engine"
            className="text-xs sm:text-sm font-bold text-deep-blue hover:text-navy transition-colors shrink-0 whitespace-nowrap"
          >
            Explore the Sales Performance Engine →
          </a>
        </div>
      </Container>
    </section>
  );
};

export default PerformanceGapCost;
