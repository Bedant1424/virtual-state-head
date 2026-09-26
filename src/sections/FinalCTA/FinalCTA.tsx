import React from 'react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { siteContent } from '@/data/siteContent';
import { ArrowRight, ShieldCheck, Calendar, PhoneCall } from 'lucide-react';

export interface FinalCTAProps {
  onCtaClick?: () => void;
  className?: string;
}

/**
 * FinalCTA Section (<section id="contact">)
 *
 * Requirements:
 * - Headline: "Stop Leaving Sales Performance to Chance."
 * - High-impact commercial conversion trigger
 */
export const FinalCTA: React.FC<FinalCTAProps> = ({ onCtaClick, className }) => {
  const { brand } = siteContent;

  return (
    <section
      id="contact"
      aria-labelledby="final-cta-heading"
      className={`py-20 sm:py-24 lg:py-28 bg-[#0B1F33] text-white relative overflow-hidden ${
        className || ''
      }`}
    >
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-brand/10 rounded-full blur-3xl pointer-events-none" />

      <Container size="default">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-sky-brand text-xs font-mono font-bold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-sky-brand" />
            <span>Senior Sales Leadership For {brand.location}</span>
          </div>

          <h2
            id="final-cta-heading"
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 font-sans tracking-tight leading-tight"
          >
            Stop Leaving Sales Performance <br className="hidden sm:inline" />
            <span className="text-sky-brand">to Chance.</span>
          </h2>

          <p className="text-base sm:text-xl text-gray-200 font-sans leading-relaxed mb-10 max-w-2xl mx-auto">
            Gain experienced senior direction, structured team execution, and disciplined weekly accountability. Speak directly with Royal Bal and our leadership team.
          </p>

          {/* Primary CTA Trigger */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button
              variant="primary"
              size="lg"
              onClick={onCtaClick}
              className="w-full sm:w-auto bg-sky-brand text-navy hover:bg-white transition-colors font-bold text-base px-8 py-4 shadow-xl"
            >
              <span>Book Your Sales Strategy Call</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Value Assurances */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-sky-brand" />
              <span>45-Minute Diagnostic Session</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-sky-brand" />
              <span>Confidential Executive Review</span>
            </div>
            <div className="flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-sky-brand" />
              <span>No High-Pressure Pitch</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FinalCTA;
