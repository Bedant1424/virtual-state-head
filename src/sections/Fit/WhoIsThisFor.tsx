import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { siteContent } from '@/data/siteContent';
import { Check, X, ShieldAlert, Target } from 'lucide-react';

export interface WhoIsThisForProps {
  className?: string;
}

/**
 * WhoIsThisFor Section (<section id="fit">)
 *
 * Requirements:
 * - Split layout: Visual/contextual narrative left + checklist right using audienceFit
 * - Grounded in authentic MSME qualification criteria
 */
export const WhoIsThisFor: React.FC<WhoIsThisForProps> = ({ className }) => {
  const { audienceFit, brand } = siteContent;
  const idealFit = audienceFit.find((a) => a.type === 'ideal');
  const notSuitedFit = audienceFit.find((a) => a.type === 'not_suited');

  return (
    <section
      id="fit"
      aria-labelledby="fit-heading"
      className={`py-16 sm:py-20 lg:py-24 bg-white border-b border-gray-200 relative overflow-hidden ${
        className || ''
      }`}
    >
      <Container size="default">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <SectionLabel label="Cohort Qualification & Fit" className="mb-3" />
          <h2
            id="fit-heading"
            className="text-3xl sm:text-4xl font-extrabold text-navy mb-4 font-sans tracking-tight"
          >
            Who Virtual State Head Is For
          </h2>
          <p className="text-base sm:text-lg text-charcoal/80 font-sans leading-relaxed">
            We partner with established businesses in {brand.location} where sales activity already exists, but leadership, execution rigor, and accountability need to be institutionalized.
          </p>
        </div>

        {/* 2-Column Split: Editorial Visual Left + Checklist Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column (5 cols): Visual Context & MSME Grounding */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="rounded-2xl bg-[#0B1F33] text-white p-7 sm:p-8 border border-white/10 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-sky-brand/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-2 mb-6">
                <Target className="w-5 h-5 text-sky-brand" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-brand">
                  High-Touch Cohort Model
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-sans text-white mb-4 leading-snug">
                Built Specifically for Odisha MSME Realities
              </h3>

              <p className="text-sm text-gray-300 font-sans leading-relaxed mb-6">
                This is not generic digital courseware or high-level academic theory. A Virtual State Head works directly with your business to steer sales strategy, build team capability, and run weekly performance reviews.
              </p>

              <div className="pt-6 border-t border-white/10 space-y-3">
                <div className="flex items-center justify-between text-xs text-gray-300">
                  <span>Target Team Size</span>
                  <strong className="text-white font-mono">3 to 25+ Salespeople</strong>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-300">
                  <span>Engagement Mode</span>
                  <strong className="text-white font-mono">High-Touch Virtual Leadership</strong>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-300">
                  <span>Geography</span>
                  <strong className="text-white font-mono">{brand.location}</strong>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-[#F8FAFC] border border-gray-200/90 p-5 flex items-start gap-3.5">
              <ShieldAlert className="w-5 h-5 text-deep-blue shrink-0 mt-0.5" />
              <p className="text-xs text-charcoal/80 font-sans leading-relaxed">
                <strong className="text-navy font-bold">Mutual Qualification: </strong>
                Because of the intensive time commitment from our senior coaches, we only accept 10 companies per batch after an initial diagnostic fit assessment.
              </p>
            </div>
          </div>

          {/* Right Column (7 cols): Checklist (Designed For vs Not Designed For) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Ideal Fit Checklist */}
            <div className="rounded-2xl bg-white border border-gray-200 p-6 sm:p-7 shadow-xs">
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-gray-100">
                <div className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <h3 className="text-base font-bold text-navy font-sans uppercase tracking-tight">
                  {idealFit?.heading || 'Designed For'}
                </h3>
              </div>

              <ul className="space-y-3.5">
                {idealFit?.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-charcoal font-sans leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      ✓
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not Suited Checklist */}
            <div className="rounded-2xl bg-gray-50/70 border border-gray-200/80 p-6 sm:p-7">
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-gray-200">
                <div className="w-6 h-6 rounded-full bg-rose-500/10 text-rose-600 flex items-center justify-center">
                  <X className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <h3 className="text-base font-bold text-navy font-sans uppercase tracking-tight">
                  {notSuitedFit?.heading || 'Not Designed For'}
                </h3>
              </div>

              <ul className="space-y-3.5">
                {notSuitedFit?.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-charcoal/70 font-sans leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      ✕
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhoIsThisFor;
