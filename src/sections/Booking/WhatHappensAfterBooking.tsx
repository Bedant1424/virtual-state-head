import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { CalendarCheck, MessageSquare, Compass, CheckCircle } from 'lucide-react';

export interface WhatHappensAfterBookingProps {
  className?: string;
}

/**
 * WhatHappensAfterBooking Section (<section id="after-booking">)
 *
 * Source-grounded 4 stages:
 * 01 Book Your Call - Choose the appropriate booking option and submit your details.
 * 02 Discuss Your Business - Share your business context, sales team structure, and challenges.
 * 03 Assess the Fit - Discuss whether Virtual State Head and the Sales Performance Engine may be relevant.
 * 04 Discuss the Engagement - If there is a suitable fit, discuss the possible engagement, expectations, and next steps.
 */
export const WhatHappensAfterBooking: React.FC<WhatHappensAfterBookingProps> = ({ className }) => {
  const stages = [
    {
      number: '01',
      title: 'Book Your Call',
      description: 'Choose the appropriate booking option and submit your details.',
      icon: CalendarCheck,
    },
    {
      number: '02',
      title: 'Discuss Your Business',
      description: 'Share your business context, sales team structure, and challenges.',
      icon: MessageSquare,
    },
    {
      number: '03',
      title: 'Assess the Fit',
      description: 'Discuss whether Virtual State Head and the Sales Performance Engine may be relevant.',
      icon: Compass,
    },
    {
      number: '04',
      title: 'Discuss the Engagement',
      description: 'If there is a suitable fit, discuss the possible engagement, expectations, and next steps.',
      icon: CheckCircle,
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
          <SectionLabel label="Next Steps" className="mb-3" />
          <h2
            id="after-booking-heading"
            className="text-3xl sm:text-4xl font-extrabold text-navy mb-4 font-sans tracking-tight"
          >
            What Happens After You Book
          </h2>
          <p className="text-base sm:text-lg text-charcoal/80 font-sans leading-relaxed">
            A clear, straightforward process to understand your business and evaluate whether the engagement is the right fit.
          </p>
        </div>

        {/* 4 Sequential Stages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stages.map((stage) => {
            const Icon = stage.icon;
            return (
              <div
                key={stage.number}
                className="relative rounded-2xl bg-[#F8FAFC] border border-gray-200/90 p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl sm:text-3xl font-mono font-extrabold text-deep-blue/30">
                      {stage.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-deep-blue shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-navy font-sans mb-2.5 leading-snug">
                    {stage.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal/70 font-sans leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200/60 text-[11px] font-mono font-semibold uppercase tracking-wider text-muted">
                  Stage {stage.number}
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
