import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { siteContent } from '@/data/siteContent';

export interface FrameworksProps {
  className?: string;
}

/**
 * Frameworks Section (<section id="frameworks">)
 *
 * Requirements:
 * - Keep exactly:
 *   1. Royal Selling Formula
 *   2. Strategic Negotiator
 *   3. Sense Selling
 *   4. Performance Consulting
 *   5. Lifetime Client Relationship (LCR)
 * - Present them as large editorial typography
 * - No five-card dashboard, no tabs, no framework controls, no fabricated descriptions
 */
export const Frameworks: React.FC<FrameworksProps> = ({ className }) => {
  const { frameworks } = siteContent;

  return (
    <section
      id="frameworks"
      aria-labelledby="frameworks-heading"
      className={`py-16 sm:py-20 lg:py-24 bg-white border-b border-gray-200 relative overflow-hidden ${
        className || ''
      }`}
    >
      <Container size="default">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <SectionLabel label="Practical Methodologies" className="mb-3" />
          <h2
            id="frameworks-heading"
            className="text-3xl sm:text-4xl font-extrabold text-navy mb-4 font-sans tracking-tight"
          >
            Sales Frameworks
          </h2>
          <p className="text-base sm:text-lg text-charcoal/80 font-sans leading-relaxed">
            Practical sales frameworks applied across the engagement to structure client discussions, handle negotiations, and build sustainable client relationships.
          </p>
        </div>

        {/* Large Editorial Typography Presentation */}
        <div className="divide-y divide-gray-200/80">
          {frameworks.map((fw) => (
            <div
              key={fw.id}
              className="py-8 sm:py-10 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 group"
            >
              <div className="flex items-baseline gap-4 sm:gap-8">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-mono font-extrabold text-sky-brand/40 group-hover:text-deep-blue transition-colors shrink-0">
                  {fw.number}
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-sans text-navy tracking-tight group-hover:text-deep-blue transition-colors">
                  {fw.name}
                </h3>
              </div>

              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-muted sm:text-right shrink-0">
                Sales Framework
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Frameworks;
