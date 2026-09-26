import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { siteContent } from '@/data/siteContent';

export interface WhyVirtualStateHeadProps {
  className?: string;
}

/**
 * WhyVirtualStateHead Section (<section id="why-vsh">)
 *
 * Requirements:
 * - Approved master-source differentiators:
 *   1. Experienced Sales Leadership
 *   2. A Broader Performance Perspective
 *   3. Practical Business Focus
 *   4. Structured Support
 *   5. Designed for MSMEs
 * - Large typography + subtle visual, NOT cards
 * - Concise source-grounded supporting text
 */
export const WhyVirtualStateHead: React.FC<WhyVirtualStateHeadProps> = ({ className }) => {
  const { whyVsh } = siteContent;

  return (
    <section
      id="why-vsh"
      aria-labelledby="why-vsh-heading"
      className={`py-16 sm:py-20 lg:py-24 bg-[#081726] text-white border-b border-white/10 relative overflow-hidden ${
        className || ''
      }`}
    >
      <Container size="default">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <SectionLabel
            label="The Strategic Difference"
            className="text-sky-brand border-sky-brand/30 bg-sky-brand/10 mb-3"
          />
          <h2
            id="why-vsh-heading"
            className="text-3xl sm:text-4xl font-extrabold text-white mb-4 font-sans tracking-tight"
          >
            Why Virtual State Head?
          </h2>
          <p className="text-base sm:text-lg text-white/70 font-sans leading-relaxed">
            A fundamentally different approach to sales performance: institutionalizing senior leadership, active coaching, and disciplined operational governance.
          </p>
        </div>

        {/* Master-Source Differentiators (Editorial Typography - NOT Cards) */}
        <div className="space-y-10 sm:space-y-12 divide-y divide-white/10">
          {whyVsh.map((item) => (
            <div
              key={item.number}
              className="pt-10 sm:pt-12 first:pt-0 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline"
            >
              {/* Number Column */}
              <div className="md:col-span-2">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-mono text-sky-brand/30 tracking-tight leading-none block">
                  {item.number}
                </span>
              </div>

              {/* Differentiator Title */}
              <div className="md:col-span-4">
                <h3 className="text-xl sm:text-2xl font-bold font-sans text-white leading-snug tracking-tight">
                  {item.title}
                </h3>
              </div>

              {/* Differentiator Description */}
              <div className="md:col-span-6">
                <p className="text-sm sm:text-base text-white/70 font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyVirtualStateHead;
