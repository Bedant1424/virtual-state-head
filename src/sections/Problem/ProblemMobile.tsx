import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ProblemVisual, type VisualStateType } from './ProblemVisual';
import { siteContent, type ProblemStage } from '@/data/siteContent';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

export const ProblemMobile: React.FC = () => {
  const problemData = siteContent.problem;
  const stages = problemData.stages;

  return (
    <div className="w-full bg-white py-12 sm:py-16">
      <Container size="default">
        {/* Mobile Section Header */}
        <div className="mb-8">
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

        {/* State 0: High Activity Introduction Card */}
        <div className="mb-8 rounded-xl bg-paper/60 border border-gray-200/90 p-5 space-y-4">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-deep-blue px-2.5 py-0.5 rounded bg-soft-blue border border-sky-brand/30">
              Initial State
            </span>
            <span className="text-xs font-semibold text-muted">Active Cadence</span>
          </div>

          <h3 className="typography-h3 text-navy font-bold text-lg sm:text-xl">
            {problemData.state0Busy.title}
          </h3>

          <p className="typography-body text-charcoal text-sm leading-relaxed">
            {problemData.state0Busy.description}
          </p>

          <ProblemVisual activeState="busy" isCompact className="mt-4" />
        </div>

        {/* Vertical Narrative Stack: Stages 01 to 05 */}
        <div className="space-y-8">
          {stages.map((stage: ProblemStage) => (
            <div
              key={stage.id}
              className="rounded-xl bg-white border border-gray-200/90 p-5 shadow-xs space-y-4 transition-colors"
            >
              {/* Header: Stage Number & Short Tag */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-deep-blue px-2.5 py-1 rounded bg-soft-blue border border-sky-brand/30">
                  Problem {stage.number}
                </span>
                <span className="text-xs font-semibold text-muted">
                  {stage.shortLabel}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="typography-h3 text-navy font-bold text-lg sm:text-xl">
                {stage.title}
              </h3>

              <p className="typography-body text-charcoal text-sm leading-relaxed">
                {stage.description}
              </p>

              {/* Compact Conceptual Diagram representing this specific stage */}
              <ProblemVisual
                activeState={stage.visualState as VisualStateType}
                isCompact
                className="mt-3"
              />

              {/* Strategic Operational Impact */}
              <div className="pt-3 border-t border-gray-100 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-deep-blue shrink-0 mt-0.5" />
                <p className="typography-small text-muted text-xs leading-normal">
                  <strong className="text-deep-blue font-semibold">Strategic Impact: </strong>
                  {stage.operationalImpact}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* State 6: Mobile Climax / Recognition Card */}
        <div className="mt-8 rounded-xl bg-soft-blue/60 border border-sky-brand/50 p-6 shadow-sm space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-deep-blue text-white text-xs font-bold">
            <CheckCircle2 className="w-3.5 h-3.5 text-sky-brand" />
            <span>Diagnostic Conclusion</span>
          </div>

          <div className="py-2 border-y border-deep-blue/15">
            <span className="block text-xs font-mono uppercase tracking-widest text-deep-blue font-bold mb-1">
              Systemic Insight
            </span>
            <p className="text-2xl font-extrabold text-navy tracking-tight font-mono">
              {problemData.climax.equation}
            </p>
          </div>

          <p className="typography-body text-charcoal font-semibold text-sm leading-relaxed">
            {problemData.climax.supportingStatement}
          </p>

          <p className="typography-small text-muted italic text-xs">
            "{problemData.climax.closingIdea}"
          </p>

          <ProblemVisual activeState="recognition" isCompact className="mt-3" />
        </div>
      </Container>
    </div>
  );
};
