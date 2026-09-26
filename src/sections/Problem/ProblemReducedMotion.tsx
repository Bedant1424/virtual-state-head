import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ProblemVisual, type VisualStateType } from './ProblemVisual';
import { siteContent, type ProblemStage } from '@/data/siteContent';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

/**
 * ProblemReducedMotion
 * Accessible static layout rendered when `prefers-reduced-motion: reduce` is active.
 * Guarantees zero pinning, zero continuous scrubbing, and 100% semantic readability.
 */
export const ProblemReducedMotion: React.FC = () => {
  const problemData = siteContent.problem;
  const stages = problemData.stages;

  return (
    <div className="w-full bg-white py-14 sm:py-20 border-b border-gray-200">
      <Container size="default">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="mb-3">
            <SectionLabel label={problemData.eyebrow} />
          </div>
          <h2 className="typography-h2 text-navy font-extrabold tracking-tight mb-4">
            {problemData.headline}
          </h2>
          <div className="space-y-3 text-muted typography-body leading-relaxed">
            {problemData.introParagraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Semantic Grid of All 5 Problem Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {stages.map((stage: ProblemStage) => (
            <article
              key={stage.id}
              className="rounded-xl bg-paper/60 border border-gray-200/90 p-6 flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center text-xs font-mono font-bold uppercase tracking-wider text-deep-blue px-2.5 py-0.5 rounded bg-soft-blue border border-sky-brand/30">
                    Stage {stage.number}
                  </span>
                  <span className="text-xs font-semibold text-muted">
                    {stage.shortLabel}
                  </span>
                </div>

                <h3 className="typography-h3 text-navy font-bold text-lg mb-2">
                  {stage.title}
                </h3>

                <p className="typography-body text-charcoal text-sm leading-relaxed mb-4">
                  {stage.description}
                </p>

                {/* Static, Non-Animated Conceptual Diagram */}
                <ProblemVisual
                  activeState={stage.visualState as VisualStateType}
                  isCompact
                  className="my-3"
                />
              </div>

              <div className="pt-3 border-t border-gray-200/70 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-deep-blue shrink-0 mt-0.5" />
                <p className="typography-small text-muted text-xs leading-normal">
                  <strong className="text-deep-blue font-semibold">Strategic Impact: </strong>
                  {stage.operationalImpact}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Static Recognition Conclusion Banner */}
        <div className="rounded-xl bg-soft-blue/60 border border-sky-brand/50 p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-deep-blue text-white text-xs font-bold">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-brand" />
              <span>Diagnostic Conclusion</span>
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight font-mono">
              {problemData.climax.equation}
            </p>
            <p className="typography-body text-charcoal font-semibold">
              {problemData.climax.supportingStatement}
            </p>
            <p className="typography-small text-muted italic text-sm">
              "{problemData.climax.closingIdea}"
            </p>
          </div>

          <div className="w-full lg:w-auto lg:min-w-[340px]">
            <ProblemVisual activeState="recognition" isCompact />
          </div>
        </div>
      </Container>
    </div>
  );
};
