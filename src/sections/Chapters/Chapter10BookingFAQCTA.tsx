import React, { useState, useEffect } from 'react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { siteContent } from '@/data/siteContent';
import { vshImages } from '@/assets/images';
import { ArrowRight, Plus, Minus, ShieldCheck, ChevronRight, CalendarCheck } from 'lucide-react';
import { useScrollReveal, revealStyles } from '@/hooks/useMotion';

export interface Chapter10BookingFAQCTAProps {
  onCtaClick?: () => void;
}

interface BookingStage {
  readonly num: string;
  readonly title: string;
  readonly desc: string;
  readonly detail: string;
  readonly tag: string;
}

const bookingStages: readonly BookingStage[] = [
  {
    num: '01',
    title: 'Book Your Call',
    desc: 'Schedule an initial sales strategy discussion for your business.',
    detail: 'An introductory sales strategy discussion directly with senior sales leadership.',
    tag: 'INITIAL CONSULTATION',
  },
  {
    num: '02',
    title: 'Discuss Your Business',
    desc: 'Review your sales structure, challenges, and goals.',
    detail: 'We examine your current sales team, pipeline bottlenecks, and commercial priorities in Odisha.',
    tag: 'DIAGNOSTIC REVIEW',
  },
  {
    num: '03',
    title: 'Assess the Fit',
    desc: 'Assess alignment and readiness for the engagement.',
    detail: 'We evaluate whether the VSH advisory and coaching model aligns with your operational stage. Booking a call does not guarantee acceptance.',
    tag: 'FIT ASSESSMENT',
  },
  {
    num: '04',
    title: 'Discuss the Engagement',
    desc: 'Outline the operating cadence, support structure, and next steps.',
    detail: 'Clarify the working rhythm, executive milestones, and weekly accountability schedule.',
    tag: 'OPERATING CADENCE',
  },
];

/**
 * CHAPTER 10 — CONVERSION FINALE
 *
 * Visual Priority:
 * FINAL CTA > BOOKING ACTION > FAQ
 *
 * 1. BOOKING PROCESS:
 *    - Headline: "READY TO DISCUSS YOUR SALES PERFORMANCE?"
 *    - 4 interactive stages (hover, keyboard focus, mobile tap).
 *    - Active stage scales (~1.03x), Sky Blue accent, description appears.
 *    - Inactive stages subtly recede (~0.98x, opacity ~0.75).
 *    - Prominent Booking Action Card with direct CTA button.
 *
 * 2. FAQ:
 *    - Headline: "FREQUENTLY ASKED QUESTIONS"
 *    - Compact editorial accordion of all 9 approved source questions and answers.
 *    - One answer open at a time, thin hairline rules, plus/minus toggle.
 *
 * 3. FINAL CTA:
 *    - Full-bleed Midnight Navy field (#0B1F33).
 *    - Architectural dark texture background (vshImages.gapTension).
 *    - Headline: "STOP LEAVING SALES PERFORMANCE TO CHANCE."
 *    - Approved supporting copy and large prominent CTA button.
 */
export const Chapter10BookingFAQCTA: React.FC<Chapter10BookingFAQCTAProps> = ({ onCtaClick }) => {
  const { faqs } = siteContent;
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const [bookingRef, bookingVisible] = useScrollReveal(0.12);
  const [faqRef, faqVisible] = useScrollReveal(0.12);
  const [ctaRef, ctaVisible] = useScrollReveal(0.15);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  const handleStageKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveStageIndex((index + 1) % bookingStages.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveStageIndex((index - 1 + bookingStages.length) % bookingStages.length);
    } else if (e.key === 'Home') {
      e.preventDefault();
      setActiveStageIndex(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setActiveStageIndex(bookingStages.length - 1);
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiveStageIndex(index);
    }
  };

  return (
    <div id="conversion" className="overflow-hidden">
      {/* ============================================================ */}
      {/* LAYER 1: BOOKING PROCESS (Clean Light Canvas)               */}
      {/* ============================================================ */}
      <section
        id="booking"
        ref={bookingRef}
        aria-labelledby="booking-heading"
        className="py-12 sm:py-16 lg:py-20 bg-white text-[#0B1F33] border-b border-gray-200/80"
      >
        <Container size="default">
          {/* Eyebrow & Main Statement */}
          <div className="max-w-3xl mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#EAF5FB] border border-[#87CEEB]/40 text-[#123B63] text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#123B63]" />
              PROCESS TRANSPARENCY • OPERATING CADENCE
            </div>

            <div className={revealStyles.clipMaskContainer}>
              <h2
                id="booking-heading"
                className={`text-2xl sm:text-3xl lg:text-4xl xl:text-[2.75rem] font-extrabold text-[#0B1F33] font-sans tracking-tight leading-tight mb-4 ${
                  revealStyles.clipMaskTransition
                } ${bookingVisible ? revealStyles.clipMaskVisible : revealStyles.clipMaskHidden}`}
              >
                Ready to Discuss Your{' '}
                <span className="text-[#123B63]">
                  Sales Performance?
                </span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#4A5568] font-sans leading-relaxed max-w-2xl">
              A structured four-stage process to review your sales function and determine whether the Virtual State Head
              engagement aligns with your commercial objectives.
            </p>
          </div>

          {/* Booking Content: Interactive 4 Stages (Left) + Action Card (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left: 4 Interactive Editorial Stages */}
            <div
              role="tablist"
              aria-label="Booking process stages"
              className="lg:col-span-7 space-y-3"
            >
              {bookingStages.map((stage, idx) => {
                const isActive = activeStageIndex === idx;
                return (
                  <button
                    key={stage.num}
                    type="button"
                    role="tab"
                    id={`booking-stage-tab-${idx}`}
                    aria-selected={isActive}
                    aria-expanded={isActive}
                    aria-controls={`booking-stage-panel-${idx}`}
                    tabIndex={0}
                    onClick={() => setActiveStageIndex(idx)}
                    onMouseEnter={() => setActiveStageIndex(idx)}
                    onFocus={() => setActiveStageIndex(idx)}
                    onKeyDown={(e) => handleStageKeyDown(e, idx)}
                    className={`w-full text-left p-4 sm:p-5 rounded-[4px] border transition-all duration-300 ease-out cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#123B63] ${
                      isActive
                        ? 'bg-[#F3F5F7] border-l-4 border-l-[#123B63] border-y-gray-200 border-r-gray-200 shadow-sm'
                        : 'bg-transparent border-l-2 border-l-transparent border-y-gray-100 border-r-gray-100 opacity-75 hover:opacity-95 hover:bg-[#F9FAFB]'
                    }`}
                    style={{
                      transform: prefersReducedMotion
                        ? 'none'
                        : isActive
                        ? 'scale(1.02)'
                        : 'scale(0.98)',
                    }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3.5 sm:gap-4">
                        <span
                          className={`text-sm sm:text-base font-mono font-bold tracking-wider pt-0.5 shrink-0 ${
                            isActive ? 'text-[#123B63]' : 'text-gray-400'
                          }`}
                        >
                          {stage.num}
                        </span>
                        <div>
                          <h3
                            className={`text-base sm:text-lg font-sans font-bold leading-snug transition-colors ${
                              isActive ? 'text-[#0B1F33]' : 'text-[#333333]'
                            }`}
                          >
                            {stage.title}
                          </h3>

                          {/* Stage Summary */}
                          <p className="text-xs sm:text-sm text-[#4A5568] font-sans mt-0.5 leading-relaxed">
                            {stage.desc}
                          </p>

                          {/* Expanded Stage Detail */}
                          <div
                            id={`booking-stage-panel-${idx}`}
                            className={`transition-all duration-300 ease-out overflow-hidden ${
                              isActive
                                ? 'max-h-24 opacity-100 mt-2.5 pt-2.5 border-t border-gray-200'
                                : 'max-h-0 opacity-0'
                            }`}
                          >
                            <p className="text-xs text-[#6B7280] font-sans leading-relaxed">
                              {stage.detail}
                            </p>
                            <div className="mt-2 inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-[#123B63] font-semibold">
                              <span className="w-1 h-1 rounded-full bg-[#123B63]" />
                              {stage.tag}
                            </div>
                          </div>
                        </div>
                      </div>

                      <ChevronRight
                        className={`w-4 h-4 shrink-0 transition-transform duration-300 mt-1.5 ${
                          isActive
                            ? 'text-[#123B63] rotate-90 sm:rotate-0 translate-x-0.5'
                            : 'text-gray-400 opacity-40'
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right: Prominent Booking Action Card */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-[4px] bg-[#F3F5F7] border border-gray-200 shadow-sm space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#123B63]">
                    <CalendarCheck className="w-4 h-4 text-[#123B63]" />
                    SALES STRATEGY DISCUSSION
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B1F33] font-sans leading-tight">
                    Direct Executive Dialogue.
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A5568] font-sans leading-relaxed">
                    You will speak directly with senior sales leadership about your sales organization,
                    pipeline obstacles, and commercial growth priorities in Odisha.
                  </p>
                </div>

                <div className="space-y-2.5 pt-2 border-t border-gray-200 text-xs text-[#333333] font-sans">
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#123B63]" />
                    <span>Initial diagnostic discussion on sales structure and goals</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#123B63]" />
                    <span>Review of current sales activities and bottlenecks</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#123B63]" />
                    <span>Assessment of alignment and operational readiness</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={onCtaClick}
                    className="w-full bg-[#123B63] text-white hover:bg-[#0B1F33] transition-colors font-bold py-4 rounded-[4px] shadow-none flex items-center justify-center gap-3 cursor-pointer whitespace-nowrap"
                  >
                    <span>Book Your Sales Strategy Call</span>
                    <ArrowRight className="w-4 h-4 text-[#87CEEB]" />
                  </Button>
                  <p className="text-[11px] font-mono text-center text-[#6B7280] mt-2.5">
                    No generic pitch • Senior executive consultation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* LAYER 2: FAQ (Compact Editorial Accordion)                  */}
      {/* ============================================================ */}
      <section
        id="faqs"
        ref={faqRef}
        aria-labelledby="faq-heading"
        className="py-12 sm:py-16 bg-[#F3F5F7] text-[#0B1F33] border-b border-gray-200/80"
      >
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            {/* Eyebrow & Heading */}
            <div className="text-center mb-8 sm:mb-10">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#123B63] mb-2">
                FREQUENTLY ASKED QUESTIONS
              </div>
              <h2
                id="faq-heading"
                className={`text-2xl sm:text-3xl font-extrabold text-[#0B1F33] font-sans tracking-tight ${
                  revealStyles.transition
                } ${faqVisible ? revealStyles.visible : revealStyles.hidden}`}
              >
                Direct Answers to Common Questions.
              </h2>
              <p className="text-xs sm:text-sm text-[#6B7280] font-sans mt-2">
                Clear information regarding our engagement model, leadership support, and scope.
              </p>
            </div>

            {/* Compact 9-Item Accordion */}
            <div className="border-t border-gray-300 divide-y divide-gray-200">
              {faqs.map((faq, index) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div key={faq.id}>
                    <button
                      type="button"
                      id={`faq-btn-${faq.id}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-ans-${faq.id}`}
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full text-left flex items-start justify-between gap-4 py-3.5 sm:py-4 min-h-[48px] group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#123B63] rounded-[2px]"
                    >
                      <div className="flex items-baseline gap-3 sm:gap-3.5">
                        <span className="text-xs font-mono font-bold text-[#123B63] shrink-0 pt-0.5">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="text-sm sm:text-base font-bold text-[#0B1F33] font-sans group-hover:text-[#123B63] transition-colors leading-snug">
                          {faq.question}
                        </span>
                      </div>

                      <div className="w-5 h-5 shrink-0 flex items-center justify-center text-[#123B63] mt-0.5">
                        {isOpen ? (
                          <Minus className="w-4 h-4 text-[#123B63]" />
                        ) : (
                          <Plus className="w-4 h-4 text-gray-500 group-hover:text-[#123B63] transition-colors" />
                        )}
                      </div>
                    </button>

                    {/* Smoothly Expanded Answer */}
                    <div
                      id={`faq-ans-${faq.id}`}
                      role="region"
                      aria-labelledby={`faq-btn-${faq.id}`}
                      className={`transition-all duration-300 ease-out overflow-hidden ${
                        isOpen
                          ? 'max-h-96 opacity-100 pb-4 pl-7 sm:pl-8 pr-4'
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-xs sm:text-sm text-[#4A5568] font-sans leading-relaxed border-t border-gray-200/80 pt-2.5">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* LAYER 3: FINAL CTA (FULL-BLEED MIDNIGHT NAVY CANVAS)         */}
      {/* ============================================================ */}
      <section
        id="final-cta"
        ref={ctaRef}
        aria-labelledby="final-cta-heading"
        className="relative py-16 sm:py-24 lg:py-28 bg-[#0B1F33] text-white overflow-hidden"
      >
        {/* Architectural Texture Field (Subtle Monochrome Tension Texture) */}
        <img
          src={vshImages.gapTension}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-luminosity filter contrast-125 pointer-events-none select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F33] via-[#0B1F33]/85 to-[#0B1F33]/70 pointer-events-none" />

        <Container size="default">
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
            {/* Eyebrow */}
            <div
              className={`text-xs font-mono font-semibold uppercase tracking-widest text-[#87CEEB] ${
                revealStyles.transition
              } ${ctaVisible ? revealStyles.visible : revealStyles.hidden}`}
            >
              • SALES LEADERSHIP FOR ODISHA MSMES •
            </div>

            {/* Monumental Final Headline */}
            <div className={revealStyles.clipMaskContainer}>
              <h2
                id="final-cta-heading"
                className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white font-sans tracking-tight leading-[1.08] ${
                  revealStyles.clipMaskTransition
                } ${ctaVisible ? revealStyles.clipMaskVisible : revealStyles.clipMaskHidden}`}
              >
                Stop Leaving Sales Performance{' '}
                <span className="text-[#87CEEB] block mt-1 sm:mt-2">
                  to Chance.
                </span>
              </h2>
            </div>

            {/* Approved Supporting Copy */}
            <p
              className={`text-sm sm:text-base lg:text-lg text-gray-300 font-sans leading-relaxed max-w-2xl mx-auto ${
                revealStyles.transition
              } ${ctaVisible ? revealStyles.visible : revealStyles.hidden}`}
              style={{ transitionDelay: '100ms' }}
            >
              Equip your business with the experienced sales leadership, execution structure, and accountability
              required for consistent sales performance in Odisha.
            </p>

            {/* Primary Action Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={onCtaClick}
                className="w-full sm:w-auto bg-[#123B63] text-white hover:bg-[#081827] border border-[#87CEEB]/40 font-bold px-10 sm:px-12 py-4 sm:py-5 rounded-[4px] text-base sm:text-lg flex items-center justify-center gap-3 transition-all duration-300 group cursor-pointer shadow-xl"
              >
                <span>Book Your Sales Strategy Call</span>
                <ArrowRight className="w-5 h-5 text-[#87CEEB] transition-transform duration-300 group-hover:translate-x-1.5" />
              </Button>
            </div>

            {/* Reassurance Footer Line */}
            <div className="pt-1 flex items-center justify-center gap-2 text-xs text-gray-400 font-sans">
              <ShieldCheck className="w-4 h-4 text-[#87CEEB] shrink-0" />
              <span>Planned batch for 10 MSME companies in Odisha • Booking a call does not guarantee acceptance</span>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Chapter10BookingFAQCTA;
