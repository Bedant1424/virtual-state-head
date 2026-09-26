import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { TrendingDown, AlertCircle, Clock, Users } from 'lucide-react';

export interface PerformanceGapCostProps {
  className?: string;
}

/**
 * PerformanceGapCost Section (<section id="performance-gap">)
 *
 * Requirements:
 * - Cost of the Performance Gap: Visual business-impact concept
 * - Highlights the recurring organizational friction of unaddressed sales execution gaps
 */
export const PerformanceGapCost: React.FC<PerformanceGapCostProps> = ({ className }) => {
  const impactPoints = [
    {
      icon: Clock,
      title: 'Founder Bandwidth Bottleneck',
      description:
        'When sales lacks senior direction, the business owner becomes the chief dealmaker and firefighter, diverting executive focus away from overall business growth.',
    },
    {
      icon: TrendingDown,
      title: 'Unpredictable Revenue Variance',
      description:
        'Quarters swing unpredictably when conversions depend on isolated individual heroics rather than a repeatable, institutionalized team rhythm.',
    },
    {
      icon: AlertCircle,
      title: 'Pipeline Leakage & Missed Follow-ups',
      description:
        'Without disciplined tracking systems and weekly accountability, qualified leads stall in the negotiation phase and quietly slip away.',
    },
    {
      icon: Users,
      title: 'Sales Team Frustration & Churn',
      description:
        'Without ongoing coaching and clear priorities, capable salespeople lose confidence, leading to avoidable turnover and repeated recruitment costs.',
    },
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
          <SectionLabel label="Business Impact" className="mb-3" />
          <h2
            id="performance-gap-heading"
            className="text-3xl sm:text-4xl font-extrabold text-navy mb-4 font-sans tracking-tight"
          >
            The Hidden Cost of the Performance Gap
          </h2>
          <p className="text-base sm:text-lg text-charcoal/80 font-sans leading-relaxed">
            When sales activity exists without structured leadership and regular accountability, the cost is rarely visible on a single line item. It compounds across lost time, leaked pipeline, and inconsistent results.
          </p>
        </div>

        {/* 4 Business Impact Realities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-gray-200/90 p-6 sm:p-7 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-deep-blue/10 text-deep-blue flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-navy font-sans mb-2.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal/70 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Supporting Editorial Bottom Callout */}
        <div className="mt-10 sm:mt-12 p-6 rounded-2xl bg-white border border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-sm font-medium text-navy font-sans">
            Closing the gap does not require replacing your team. It requires introducing experienced sales leadership, practical tools, and disciplined accountability.
          </p>
          <a
            href="#engine"
            className="text-xs sm:text-sm font-bold text-deep-blue hover:text-navy transition-colors shrink-0 whitespace-nowrap"
          >
            Explore the Engine Solution →
          </a>
        </div>
      </Container>
    </section>
  );
};

export default PerformanceGapCost;
