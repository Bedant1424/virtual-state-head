import React, { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { siteContent } from '@/data/siteContent';
import { ArrowRight, ChevronDown, ShieldCheck } from 'lucide-react';

export interface Chapter10BookingFAQCTAProps {
  onCtaClick?: () => void;
}

/**
 * CHAPTER 10 — CONVERSION: WHAT HAPPENS AFTER, FAQ & FINAL CTA
 * Editorial Strategic Authority
 *
 * 1. What Happens When You Book: 4 concise stages.
 * 2. Exactly 9 Authoritative Master FAQs (collapsed accordions).
 * 3. Final Decisive CTA in Deep Navy (#0B1F33).
 */
export const Chapter10BookingFAQCTA: React.FC<Chapter10BookingFAQCTAProps> = ({ onCtaClick }) => {
  const { faqs } = siteContent;
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  const bookingSteps = [
    {
      num: '01',
      title: 'Confidential Strategy Call',
      desc: 'A 45-minute structured discussion to understand your current sales bottlenecks and team dynamics.',
    },
    {
      num: '02',
      title: 'Sales Diagnostic Review',
      desc: 'Clear analysis of pipeline leakage, follow-through discipline, and leadership alignment.',
    },
    {
      num: '03',
      title: 'Mutual Fit Evaluation',
      desc: 'Confirming whether your business and sales team are prepared for structured performance coaching.',
    },
    {
      num: '04',
      title: 'Engagement Roadmap',
      desc: 'Defining the operational cadence, review rhythms, and milestone objectives for your batch.',
    },
  ];

  return (
    <div id="conversion" className="overflow-hidden">
      {/* SECTION 1: WHAT HAPPENS WHEN YOU BOOK & FAQS (Light Mist Ground) */}
      <section
        id="faqs"
        aria-labelledby="faq-heading"
        className="py-16 sm:py-24 lg:py-28 bg-[#F3F5F7] border-b border-gray-200/80"
      >
        <Container size="default">
          {/* Chapter Micro-Index */}
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-[#123B63] mb-4">
            CHAPTER 10 • PROCESS TRANSPARENCY & CLARITY
          </div>

          {/* Heading */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <h2
              id="faq-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F33] font-sans tracking-tight leading-tight mb-4"
            >
              What to Expect.{' '}
              <span className="text-[#123B63] block sm:inline">
                Straightforward Answers.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-[#333333] font-sans leading-relaxed">
              We maintain absolute transparency regarding our advisory engagement, selection standards, and operational process.
            </p>
          </div>

          {/* 4-Step Booking Roadmap (Hairline Register) */}
          <div className="mb-16 pb-12 border-b border-gray-300">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#123B63] mb-6">
              WHAT HAPPENS AFTER YOU REQUEST A CALL
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {bookingSteps.map((step) => (
                <div key={step.num} className="bg-white p-5 rounded-[4px] border border-gray-300">
                  <span className="text-xs font-mono font-bold text-[#123B63] block mb-2">
                    STAGE {step.num}
                  </span>
                  <h3 className="text-base font-bold text-[#0B1F33] font-sans mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#6B7280] font-sans leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 9 Master FAQs: Collapsed Accordions */}
          <div className="max-w-4xl mx-auto">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#123B63] mb-6">
              FREQUENTLY ASKED QUESTIONS
            </div>

            <div className="border-t border-gray-300 divide-y divide-gray-300">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === faq.id;
                return (
                  <div key={faq.id} className="py-4">
                    <button
                      type="button"
                      onClick={() => toggleFaq(faq.id)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${faq.id}`}
                      className="w-full text-left flex items-start justify-between gap-4 py-2 group cursor-pointer focus-visible:ring-2 focus-visible:ring-[#123B63] focus-visible:outline-none rounded-[2px]"
                    >
                      <div className="flex items-baseline gap-3">
                        <span className="text-xs font-mono font-bold text-[#123B63] shrink-0">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="text-base sm:text-lg font-bold text-[#0B1F33] font-sans group-hover:text-[#123B63] transition-colors leading-snug">
                          {faq.question}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-[#123B63] shrink-0 transition-transform duration-200 mt-1 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div
                        id={`faq-answer-${faq.id}`}
                        className="pt-3 pb-2 pl-7 pr-4 text-sm text-[#4A5568] font-sans leading-relaxed border-t border-gray-200 mt-2"
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

      {/* SECTION 2: FINAL DECISIVE CTA (Midnight Navy #0B1F33 Ground) */}
      <section
        id="final-cta"
        aria-labelledby="final-cta-heading"
        className="py-20 sm:py-28 lg:py-32 bg-[#0B1F33] text-white relative overflow-hidden"
      >
        <Container size="default">
          <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-[#87CEEB]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#87CEEB]" />
              <span>CONFIDENTIAL EXECUTIVE ADVISORY</span>
            </div>

            <h2
              id="final-cta-heading"
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-sans tracking-tight leading-[1.08]"
            >
              Stop Leaving Sales Performance{' '}
              <span className="text-[#87CEEB] block mt-1 sm:mt-2">
                to Chance.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-gray-300 font-sans leading-relaxed max-w-2xl mx-auto">
              Equip your business with the experienced sales leadership, execution structure, and accountability required for sustainable commercial growth in Odisha.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={onCtaClick}
                className="w-full sm:w-auto bg-[#123B63] text-white hover:bg-[#1a4a7a] transition-colors font-bold px-10 py-4 rounded-[4px] shadow-none flex items-center justify-center gap-3 cursor-pointer border border-[#87CEEB]/30"
              >
                <span>Book Your Sales Strategy Call</span>
                <ArrowRight className="w-4 h-4 text-[#87CEEB]" />
              </Button>
            </div>

            <div className="pt-2 flex items-center justify-center gap-2 text-xs text-gray-400 font-sans">
              <ShieldCheck className="w-4 h-4 text-[#87CEEB] shrink-0" />
              <span>Strictly 10 MSME Companies per Batch • Confidential 1-on-1 Discussion</span>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Chapter10BookingFAQCTA;
