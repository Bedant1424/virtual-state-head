import React from 'react';
import { Container } from '@/components/layout/Container';
import { siteContent } from '@/data/siteContent';
import { Compass, ChevronDown } from 'lucide-react';

export interface ProblemTransitionProps {
  className?: string;
}

/**
 * ProblemTransition
 * Architectural Bridge connecting the Problem / Performance Gap to
 * the upcoming solution (Experienced Sales Leadership).
 *
 * Designed with technical grid reorganization and subtle light-field handoff.
 */
export const ProblemTransition: React.FC<ProblemTransitionProps> = ({ className }) => {
  const bridge = siteContent.problem.bridge;

  return (
    <div
      className={`relative w-full overflow-hidden bg-gradient-to-b from-white via-soft-blue/20 to-paper/60 pt-16 pb-12 sm:pt-20 sm:pb-16 border-b border-gray-200/80 ${
        className || ''
      }`}
      aria-label="Transition to Solution"
    >
      {/* Structural Converging Grid Vectors */}
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-[linear-gradient(to_right,#123B63_1px,transparent_1px),linear-gradient(to_bottom,#123B63_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Central Linear Axis */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-sky-brand via-deep-blue/40 to-transparent" />

      <Container size="default">
        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
          {/* Transition Pill Indicator */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200/90 shadow-2xs text-xs font-mono font-semibold text-deep-blue mb-4">
            <Compass className="w-3.5 h-3.5 text-sky-brand" />
            <span>The Strategic Question</span>
          </div>

          {/* Restrained Bridge Statement */}
          <p className="typography-h3 text-navy font-bold tracking-tight mb-3 sm:mb-4">
            {bridge.statement}
          </p>

          <p className="typography-small text-muted max-w-xl mx-auto mb-6">
            Bridging the gap between frontline exertion and sustainable enterprise growth requires senior guidance.
          </p>

          {/* Subtle Directional Lead */}
          <div className="inline-flex flex-col items-center gap-1.5 text-xs font-mono font-bold tracking-wider uppercase text-deep-blue/80">
            <span>Next: {bridge.targetLabel}</span>
            <ChevronDown className="w-4 h-4 text-sky-brand animate-bounce" />
          </div>
        </div>
      </Container>
    </div>
  );
};
