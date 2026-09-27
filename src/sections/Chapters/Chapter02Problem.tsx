import React from 'react';
import { Container } from '@/components/layout/Container';
import { vshImages } from '@/assets/images';

/**
 * CHAPTER 02 — THE PROBLEM
 * Editorial Strategic Authority: Typographic / Chiaroscuro Tension
 *
 * Chiaroscuro boardroom photography + 3 core realities + 5 operational gaps in spacious typography.
 * No mathematical formulas. No node maps. No flowcharts. No cards.
 */
export const Chapter02Problem: React.FC = () => {
  const operationalGaps = [
    {
      num: '01',
      title: 'Direction Gap',
      desc: 'Priorities, commercial focus, and daily sales efforts lack clear business alignment.',
    },
    {
      num: '02',
      title: 'Consistency Gap',
      desc: 'Performance fluctuates month-to-month, relying on isolated individual efforts rather than a team rhythm.',
    },
    {
      num: '03',
      title: 'Accountability Gap',
      desc: 'Sales targets are set, but consistent follow-through and ownership of commitments lapse without review.',
    },
    {
      num: '04',
      title: 'Opportunity Gap',
      desc: 'Active follow-ups, negotiations, and conversions stall without structured frontline guidance.',
    },
    {
      num: '05',
      title: 'Leadership Gap',
      desc: 'Business owners bear the full operational burden of sales direction alongside daily operations.',
    },
  ];

  return (
    <section
      id="problem"
      aria-labelledby="problem-heading"
      className="py-16 sm:py-24 lg:py-28 bg-[#F3F5F7] border-b border-gray-200/80 overflow-hidden"
    >
      <Container size="default">
        {/* Section Headline */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2
            id="problem-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F33] font-sans tracking-tight leading-tight mb-4"
          >
            More Salespeople. More Targets.{' '}
            <span className="text-[#123B63] block sm:inline">
              Still Not Enough Sales?
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#333333] font-sans leading-relaxed">
            Most sales difficulties in growing MSMEs stem from a lack of sales direction, execution discipline, and regular accountability—not a lack of salespeople.
          </p>
        </div>

        {/* 2-Column Split: Image Left (50%), 5 Operational Gaps Right (50%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column (6 cols): Atmospheric Photography & 3 Key Realities */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative aspect-[16/9] w-full rounded-[4px] overflow-hidden border border-gray-200 bg-white">
              <img
                src={vshImages.problem}
                alt="Executive boardroom table at dusk with solitary lamp illuminating operational reports"
                width={1200}
                height={675}
                className="w-full h-full object-cover object-center filter saturate-[0.9] contrast-[1.05]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-[2px] bg-[#0B1F33]/80 backdrop-blur-xs text-[11px] font-mono text-white/90">
                THE OPERATIONAL BOTTLENECK
              </div>
            </div>

            {/* Three Concise Foundational Statements (No Cards) */}
            <div className="space-y-3 pt-2">
              <div className="text-sm font-semibold text-[#0B1F33] border-l-2 border-[#123B63] pl-3.5 leading-snug">
                1. Activity does not equal performance without direction.
              </div>
              <div className="text-sm font-semibold text-[#0B1F33] border-l-2 border-[#123B63] pl-3.5 leading-snug">
                2. Individual effort cannot substitute for an institutional sales rhythm.
              </div>
              <div className="text-sm font-semibold text-[#0B1F33] border-l-2 border-[#123B63] pl-3.5 leading-snug">
                3. Owner bandwidth gets consumed managing sales problems manually.
              </div>
            </div>
          </div>

          {/* Right Column (6 cols): 5 Operational Gaps in Spacious Typography */}
          <div className="lg:col-span-6 space-y-8">
            <div className="border-t border-gray-300 divide-y divide-gray-300">
              {operationalGaps.map((item) => (
                <div key={item.num} className="py-5 first:pt-4 last:pb-4 flex items-start gap-4">
                  <span className="text-xs font-mono font-bold text-[#123B63] shrink-0 mt-0.5">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#0B1F33] font-sans mb-1 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6B7280] font-sans leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Source-Grounded Closing Principle (Clean, Unadorned Typography) */}
            <div className="pt-2">
              <p className="text-sm sm:text-base font-semibold text-[#0B1F33] font-sans italic border-l-2 border-[#87CEEB] pl-4 py-1 leading-relaxed">
                "A hardworking sales team still needs direction, execution discipline, and accountability around the work."
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Chapter02Problem;
