import React from 'react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { siteContent } from '@/data/siteContent';
import { ArrowRight, Users2, MapPin, Sparkles } from 'lucide-react';

export interface UpcomingBatchProps {
  onCtaClick?: () => void;
  className?: string;
}

/**
 * UpcomingBatch Section (<section id="batch">)
 *
 * Requirements:
 * - Visual conversion block: "10 MSME Companies. One Focused Batch."
 * - Large visual 10 + CTA
 */
export const UpcomingBatch: React.FC<UpcomingBatchProps> = ({ onCtaClick, className }) => {
  const { batch, brand } = siteContent;

  return (
    <section
      id="batch"
      aria-labelledby="batch-heading"
      className={`py-16 sm:py-20 lg:py-24 bg-white border-b border-gray-200 relative overflow-hidden ${
        className || ''
      }`}
    >
      <Container size="default">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0B1F33] via-[#123B63] to-[#0B1F33] text-white p-8 sm:p-12 lg:p-16 border border-white/10 shadow-2xl overflow-hidden">
          {/* Giant Sculptural "10" Background Element */}
          <div
            className="absolute -right-8 -bottom-16 sm:right-6 sm:bottom-0 text-[160px] sm:text-[240px] lg:text-[280px] font-mono font-black text-white/5 select-none pointer-events-none leading-none z-0"
            aria-hidden="true"
          >
            10
          </div>

          <div className="relative z-10 max-w-3xl">
            {/* Cohort Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-brand/15 border border-sky-brand/30 text-sky-brand text-xs font-mono font-bold tracking-wider uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-sky-brand" />
              <span>{batch.statusBadge}</span>
            </div>

            {/* Main Headline */}
            <h2
              id="batch-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 font-sans tracking-tight leading-tight"
            >
              10 MSME Companies. <br />
              <span className="text-sky-brand">One Focused Batch.</span>
            </h2>

            <p className="text-base sm:text-lg text-gray-200 font-sans leading-relaxed mb-8 max-w-2xl">
              To ensure deep executive attention and high-touch advisory oversight from senior coaches, each cohort is strictly limited to ten enterprises across {brand.location}.
            </p>

            {/* Quick Cohort Facts */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-8 mb-8 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-sky-brand shrink-0">
                  <Users2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-mono">Cohort Capacity</div>
                  <div className="text-sm font-bold text-white font-sans">{batch.cohortLimit}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-sky-brand shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-mono">Market Focus</div>
                  <div className="text-sm font-bold text-white font-sans">{batch.targetMarket}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-sky-brand shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-mono">Advisory Model</div>
                  <div className="text-sm font-bold text-white font-sans">High-Touch Leadership</div>
                </div>
              </div>
            </div>

            {/* CTA + Note */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-5">
              <Button
                variant="primary"
                size="lg"
                onClick={onCtaClick}
                className="bg-sky-brand text-navy hover:bg-white transition-colors font-bold px-8 shadow-md"
              >
                <span>Book Your Sales Strategy Call</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              <span className="text-xs text-gray-300 font-sans max-w-sm">
                {batch.note}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default UpcomingBatch;
