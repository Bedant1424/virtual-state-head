import React, { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { siteContent } from '@/data/siteContent';
import { ArrowRight, ChevronDown, ShieldCheck } from 'lucide-react';
import { useScrollReveal, staggerDelay, revealStyles } from '@/hooks/useMotion';

export interface Chapter10BookingFAQCTAProps {
  onCtaClick?: () => void;
}

/**
 * CHAPTER 10 — CONVERSION: BOOKING STAGES, FAQS & DECISIVE CLOSING
 * Compact FAQ rows, smooth height transitions, tight connection to final CTA.
 */
export const Chapter10BookingFAQCTA: React.FC<Chapter10BookingFAQCTAProps> = ({ onCtaClick }) => {
  const { faqs } = siteContent;
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [stagesRef, stagesVisible] = useScrollReveal(0.15);
  const [ctaRef, ctaVisible] = useScrollReveal(0.2);

  const toggleFaq = (id: string) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  const bookingStages = [
    { num: '01', title: 'Book Your Call', desc: 'Schedule an initial sales strategy discussion for your business.' },
    { num: '02', title: 'Discuss Your Business', desc: 'Review your sales structure, challenges, and goals.' },
    { num: '03', title: 'Assess the Fit', desc: 'Determine mutual fit and readiness for the engagement.' },
    { num: '04', title: 'Discuss the Engagement', desc: 'Outline the operating cadence, support structure, and next steps.' },
  ];

  return (
    <div id="conversion" className="overflow-hidden">
      {/* SECTION 1: BOOKING STAGES & FAQS */}
      <section
        id="faqs"
        aria-labelledby="faq-heading"
        className="py-10 sm:py-14 lg:py-16 bg-[#F3F5F7]"
      >
        <Container size="default">
          {/* Eyebrow 3 of 3 */}
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-[#123B63] mb-3">
            • Process Transparency • Direct Answers
          </div>

          {/* Compact heading */}
          <div className="max-w-3xl mb-8 sm:mb-10">
            <h2
              id="faq-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F33] font-sans tracking-tight leading-tight mb-2"
            >
              What to Expect.{' '}
              <span className="text-[#123B63]">
                Straightforward Answers.
              </span>
            </h2>
          </div>

          {/* 4 Booking Stages — compact row */}
          <div ref={stagesRef} className="mb-10 pb-8 border-b border-gray-300">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#123B63] mb-5">
              WHAT HAPPENS AFTER YOU REQUEST A CALL
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {bookingStages.map((stage, idx) => (
                <div
                  key={stage.num}
                  className={`space-y-1 ${revealStyles.transition} ${stagesVisible ? revealStyles.visible : revealStyles.hidden}`}
                  style={{ transitionDelay: staggerDelay(idx, 80) }}
                >
                  <span className="text-xs font-mono font-bold text-[#123B63] block">
                    STAGE {stage.num}
                  </span>
                  <h3 className="text-sm font-bold text-[#0B1F33] font-sans">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-[#6B7280] font-sans leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 9 Master FAQs — compact accordion */}
          <div className="max-w-4xl mx-auto">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#123B63] mb-4">
              FREQUENTLY ASKED QUESTIONS
            </div>

            <div className="border-t border-gray-300 divide-y divide-gray-300">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === faq.id;
                return (
                  <div key={faq.id}>
                    <button
                      type="button"
                      onClick={() => toggleFaq(faq.id)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${faq.id}`}
                      className="w-full text-left flex items-center justify-between gap-4 py-3 min-h-[44px] group cursor-pointer focus-visible:ring-2 focus-visible:ring-[#123B63] focus-visible:outline-none rounded-[2px]"
                    >
                      <div className="flex items-baseline gap-2.5">
                        <span className="text-xs font-mono font-bold text-[#123B63] shrink-0">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="text-sm sm:text-base font-bold text-[#0B1F33] font-sans group-hover:text-[#123B63] transition-colors leading-snug">
                          {faq.question}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-[#123B63] shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {/* Smooth height transition for FAQ answer */}
                    <div
                      id={`faq-answer-${faq.id}`}
                      className={`overflow-hidden transition-all duration-300 ease-out ${
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="pb-3 pl-6 pr-4 text-sm text-[#4A5568] font-sans leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2: FINAL DECISIVE CTA — Direct transition, no gap */}
      <section
        id="final-cta"
        ref={ctaRef}
        aria-labelledby="final-cta-heading"
        className="py-16 sm:py-20 lg:py-24 bg-[#0B1F33] text-white relative overflow-hidden"
      >
        <Container size="default">
          <div className={`max-w-3xl mx-auto text-center space-y-5 sm:space-y-6 ${revealStyles.transition} ${ctaVisible ? revealStyles.visible : revealStyles.hidden}`}>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#87CEEB]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#87CEEB]" />
              <span>SALES LEADERSHIP FOR ODISHA MSMES</span>
            </div>

            <h2
              id="final-cta-heading"
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white font-sans tracking-tight leading-[1.08]"
            >
              Stop Leaving Sales Performance{' '}
              <span className="text-[#87CEEB] block mt-1">
                to Chance.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed max-w-2xl mx-auto">
              Equip your business with the experienced sales leadership, execution structure, and accountability required for consistent sales performance in Odisha.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={onCtaClick}
                className="w-full sm:w-auto bg-[#123B63] text-white hover:bg-[#1a4a7a] transition-colors font-bold px-10 py-4 rounded-[4px] shadow-none flex items-center justify-center gap-3 cursor-pointer border border-[#87CEEB]/30 whitespace-nowrap"
              >
                <span>Book Your Sales Strategy Call</span>
                <ArrowRight className="w-4 h-4 text-[#87CEEB]" />
              </Button>
            </div>

            <div className="pt-1 flex items-center justify-center gap-2 text-xs text-gray-400 font-sans">
              <ShieldCheck className="w-4 h-4 text-[#87CEEB] shrink-0" />
              <span>Strictly Limited to 10 MSME Companies • Selection Based on Mutual Fit</span>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Chapter10BookingFAQCTA;
