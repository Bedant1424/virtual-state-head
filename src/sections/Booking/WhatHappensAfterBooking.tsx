import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { PhoneCall, ShieldCheck, CheckCircle2 } from 'lucide-react';

export interface WhatHappensAfterBookingProps {
  className?: string;
}

/**
 * WhatHappensAfterBooking Section (<section id="after-booking">)
 *
 * Requirements:
 * - Clear, transparent 3-step advisory process
 * - Eliminates sales anxiety, establishes executive professionalism
 */
export const WhatHappensAfterBooking: React.FC<WhatHappensAfterBookingProps> = ({ className }) => {
  const steps = [
    {
      step: '01',
      icon: PhoneCall,
      title: '45-Minute Sales Strategy Discussion',
      description:
        'A confidential 1-on-1 diagnostic discussion with our senior sales leadership. We review your current sales structure, active pipeline, and immediate performance roadblocks.',
    },
    {
      step: '02',
      icon: ShieldCheck,
      title: 'Diagnostic Review & Mutual Fit Evaluation',
      description:
        'We evaluate whether your team has the right operational foundation for the Virtual State Head engagement and ensure high mutual alignment before moving forward.',
    },
    {
      step: '03',
      icon: CheckCircle2,
      title: 'Clear Recommendation & Next Steps',
      description:
        'If the fit is right, we confirm cohort entry into the upcoming 10-company batch. If not, we provide candid strategic feedback on what your sales team needs to address first.',
    },
  ];

  return (
    <section
      id="after-booking"
      aria-labelledby="after-booking-heading"
      className={`py-16 sm:py-20 lg:py-24 bg-white border-b border-gray-200 relative overflow-hidden ${
        className || ''
      }`}
    >
      <Container size="default">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <SectionLabel label="Advisory Transparency" className="mb-3" />
          <h2
            id="after-booking-heading"
            className="text-3xl sm:text-4xl font-extrabold text-navy mb-4 font-sans tracking-tight"
          >
            What Happens After You Book?
          </h2>
          <p className="text-base sm:text-lg text-charcoal/80 font-sans leading-relaxed">
            We respect your time. Our strategy discussion is an executive-level consultation focused on practical clarity, not a high-pressure sales pitch.
          </p>
        </div>

        {/* 3 Sequential Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative rounded-2xl bg-[#F8FAFC] border border-gray-200/90 p-7 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl sm:text-3xl font-mono font-extrabold text-deep-blue/40">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-deep-blue shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-navy font-sans mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal/70 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200/60 text-[11px] font-mono font-semibold uppercase tracking-wider text-muted">
                  Stage {item.step} • Consultation
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default WhatHappensAfterBooking;
