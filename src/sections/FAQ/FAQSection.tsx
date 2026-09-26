import React, { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { siteContent } from '@/data/siteContent';
import { ChevronDown } from 'lucide-react';
import { clsx } from 'clsx';

export interface FAQSectionProps {
  className?: string;
}

/**
 * FAQSection (<section id="faq">)
 *
 * Requirements:
 * - Clean accordion using faqs from siteContent
 * - Full keyboard accessibility (Enter/Space to toggle, aria-expanded, aria-controls)
 */
export const FAQSection: React.FC<FAQSectionProps> = ({ className }) => {
  const { faqs } = siteContent;
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className={`py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] border-b border-gray-200 relative overflow-hidden ${
        className || ''
      }`}
    >
      <Container size="default">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <SectionLabel label="Frequently Asked Questions" className="mb-3" />
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl font-extrabold text-navy mb-4 font-sans tracking-tight"
          >
            Clear Answers for Business Leaders
          </h2>
          <p className="text-base sm:text-lg text-charcoal/80 font-sans leading-relaxed">
            Everything you need to know about how the Virtual State Head engagement operates and integrates with your team.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="max-w-3xl space-y-3.5">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            const contentId = `faq-content-${faq.id}`;
            const headerId = `faq-header-${faq.id}`;

            return (
              <div
                key={faq.id}
                className={clsx(
                  'rounded-xl border transition-colors duration-200 overflow-hidden',
                  isOpen
                    ? 'bg-white border-deep-blue/40 shadow-xs'
                    : 'bg-white/80 border-gray-200/90 hover:border-gray-300'
                )}
              >
                <button
                  id={headerId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggleItem(faq.id)}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-brand"
                >
                  <span className="text-base sm:text-lg font-bold text-navy font-sans leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={clsx(
                      'w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200',
                      isOpen
                        ? 'bg-deep-blue text-sky-brand rotate-180'
                        : 'bg-gray-100 text-gray-500'
                    )}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headerId}
                    className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-sm sm:text-base text-charcoal/80 font-sans leading-relaxed border-t border-gray-100"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;
