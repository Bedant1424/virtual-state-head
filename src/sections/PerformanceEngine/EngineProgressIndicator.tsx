import React from 'react';
import { clsx } from 'clsx';

export type EngineStageIndex = 0 | 1 | 2 | 3 | 4;

export interface EngineProgressIndicatorProps {
  currentStage: EngineStageIndex;
  onSelectStage: (stage: EngineStageIndex) => void;
  className?: string;
}

interface StageStep {
  index: EngineStageIndex;
  label: string;
  shortCode: string;
}

const STAGES: readonly StageStep[] = [
  { index: 0, label: 'Intro', shortCode: 'INTRO' },
  { index: 1, label: '01 Training', shortCode: '01' },
  { index: 2, label: '02 Technology', shortCode: '02' },
  { index: 3, label: '03 Accountability', shortCode: '03' },
  { index: 4, label: 'Integration Climax', shortCode: 'CLIMAX' },
];

/**
 * EngineProgressIndicator
 * Minimal, secondary stage indicator for the desktop pinned Engine sequence.
 * Stages: INTRO • 01 • 02 • 03 • CLIMAX.
 * Avoids percentage values and oversized progress bars.
 */
export const EngineProgressIndicator: React.FC<EngineProgressIndicatorProps> = ({
  currentStage,
  onSelectStage,
  className,
}) => {
  return (
    <nav
      aria-label="Engine Progression Stages"
      className={clsx('flex items-center gap-1.5 sm:gap-2', className)}
    >
      {STAGES.map((step) => {
        const isActive = currentStage === step.index;
        const isPassed = currentStage > step.index;

        return (
          <button
            key={step.index}
            type="button"
            onClick={() => onSelectStage(step.index)}
            aria-current={isActive ? 'step' : undefined}
            aria-label={`Advance to ${step.label}`}
            className={clsx(
              'group relative inline-flex items-center justify-center px-2.5 py-1 rounded-full text-[11px] font-sans font-bold tracking-wider transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-brand',
              isActive
                ? 'bg-sky-brand text-navy shadow-sm'
                : isPassed
                  ? 'bg-deep-blue/80 text-white/90 border border-sky-brand/30 hover:bg-deep-blue hover:text-white'
                  : 'bg-navy/70 text-white/50 border border-white/10 hover:border-white/30 hover:text-white/80'
            )}
          >
            <span>{step.shortCode}</span>
          </button>
        );
      })}
    </nav>
  );
};
