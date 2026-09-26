import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';

export interface WhyVirtualStateHeadProps {
  className?: string;
}

const STATEMENTS = [
  {
    number: '01',
    headline: 'Senior Sales Leadership Without Executive Overhead',
    description:
      'Gain high-caliber strategic direction, pipeline governance, and executive mentorship tailored for growing enterprises without the fixed commitment and recruitment friction of a full-time senior hire.',
  },
  {
    number: '02',
    headline: 'Grounded in Daily Execution, Not Generic Advice',
    description:
      'We do not hand over theoretical slide decks and leave. We actively instill structured daily sales cadences, qualification disciplines, and field-tested objection handling into your team’s weekly habits.',
  },
  {
    number: '03',
    headline: 'Custom Engineered for Odisha MSME Market Realities',
    description:
      'Rooted in more than 30 years of frontline sales leadership in Odisha. Our methodology understands local trade ecosystems, regional buyer psychology, and field-level distribution dynamics.',
  },
  {
    number: '04',
    headline: 'Disciplined Accountability That Eliminates Sales Variance',
    description:
      'Through consistent weekly performance reviews and transparent commitment tracking, sales variance narrows and personal ownership replaces founder micromanagement.',
  },
] as const;

/**
 * WhyVirtualStateHead Section (<section id="why-vsh">)
 *
 * Requirements:
 * - 4 Typographic statements (NOT 4 cards!)
 * - Editorial, confident, high-contrast typography
 */
export const WhyVirtualStateHead: React.FC<WhyVirtualStateHeadProps> = ({ className }) => {
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
            A fundamentally different approach to sales performance: institutionalizing senior leadership, active coaching, and rigorous operational governance.
          </p>
        </div>

        {/* 4 Typographic Statements (Editorial Flow - NOT Cards) */}
        <div className="space-y-10 sm:space-y-14 divide-y divide-white/10">
          {STATEMENTS.map((item) => (
            <div
              key={item.number}
              className="pt-10 sm:pt-14 first:pt-0 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-baseline"
            >
              {/* Number Column */}
              <div className="md:col-span-2">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-mono text-sky-brand/30 tracking-tight leading-none block">
                  {item.number}
                </span>
              </div>

              {/* Statement Headline */}
              <div className="md:col-span-5">
                <h3 className="text-xl sm:text-2xl font-bold font-sans text-white leading-snug tracking-tight">
                  {item.headline}
                </h3>
              </div>

              {/* Statement Explanation */}
              <div className="md:col-span-5">
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
