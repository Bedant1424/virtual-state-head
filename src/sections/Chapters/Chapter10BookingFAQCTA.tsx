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
 * Open canvas: 4 compact booking stages + 9 master FAQs + Midnight Navy closing CTA.
 * ZERO cards, ZERO status dots, ZERO fake booking calendar UI.
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
      {/* SECTION 1: BOOKING STAGES & FAQS (Open Light Mist Canvas) */}
      <section
        id="faqs"
        aria-labelledby="faq-heading"
        className="py-8 sm:py-12 lg:py-14 bg-[#F3F5F7]"
      >
        <Container size="default">
          {/* Eyebrow 3 of 3 */}
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-[#123B63] mb-2 sm:mb-3">
            • Process Transparency • Direct Answers
          </div>

          {/* Section Heading with Mask Reveal */}
          <div className="max-w-3xl mb-6 sm:mb-8">
            <div className={revealStyles.clipMaskContainer}>
              <h2
                id="faq-heading"
                className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F33] font-sans tracking-tight leading-tight mb-2 ${
                  revealStyles.clipMaskTransition
                } ${stagesVisible ? revealStyles.clipMaskVisible : revealStyles.clipMaskHidden}`}
              >
                What to Expect.{' '}
                <span className="text-[#123B63]">
                  Straightforward Answers.
                </span>
              </h2>
            </div>
          </div>

          {/* 4 Booking Stages — compact row */}
          <div ref={stagesRef} className="mb-8 pb-6 border-b border-gray-300">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#123B63] mb-4">
              WHAT HAPPENS AFTER YOU REQUEST A CALL
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {bookingStages.map((stage, idx) => (
                <div
                  key={stage.num}
                  className={`space-y-1 ${revealStyles.transition} ${stagesVisible ? revealStyles.visible : revealStyles.hidden}`}
                  style={{ transitionDelay: staggerDelay(idx, 60) }}
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

          {/* 9 Master FAQs — Collapsed Accordion */}
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

                    {/* Conditional render: answers appear on user interaction */}
                    {isOpen && (
                      <div
                        id={`faq-answer-${faq.id}`}
                        className="pb-3 pl-6 pr-4 text-sm text-[#4A5568] font-sans leading-relaxed border-t border-gray-200 mt-1 pt-2"
                      >
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2: FINAL DECISIVE CTA (Midnight Navy Canvas, Zero Gap) */}
      <section
        id="final-cta"
        ref={ctaRef}
        aria-labelledby="final-cta-heading"
        className="py-12 sm:py-16 lg:py-20 bg-[#0B1F33] text-white relative overflow-hidden"
      >
        <Container size="default">
          <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-5">
            <div className={`text-xs font-mono font-semibold uppercase tracking-widest text-[#87CEEB] ${revealStyles.transition} ${ctaVisible ? revealStyles.visible : revealStyles.hidden}`}>
              • SALES LEADERSHIP FOR ODISHA MSMES •
            </div>

            <div className={revealStyles.clipMaskContainer}>
              <h2
                id="final-cta-heading"
                className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white font-sans tracking-tight leading-[1.08] ${
                  revealStyles.clipMaskTransition
                } ${ctaVisible ? revealStyles.clipMaskVisible : revealStyles.clipMaskHidden}`}
              >
                Stop Leaving Sales Performance{' '}
                <span className="text-[#87CEEB] block mt-1">
                  to Chance.
                </span>
              </h2>
            </div>

            <p
              className={`text-sm sm:text-base text-gray-300 font-sans leading-relaxed max-w-2xl mx-auto ${revealStyles.transition} ${
                ctaVisible ? revealStyles.visible : revealStyles.hidden
              }`}
              style={{ transitionDelay: '100ms' }}
            >
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
