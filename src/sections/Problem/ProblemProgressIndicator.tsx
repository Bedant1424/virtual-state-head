import React from 'react';
import { clsx } from 'clsx';

export interface ProblemProgressIndicatorProps {
  currentStageIndex: number; // 0 = State 0 (Busy), 1 = 01, 2 = 02, 3 = 03, 4 = 04, 5 = 05, 6 = State 6 (Recognition)
  onSelectStage?: (stageIndex: number) => void;
  className?: string;
}

/**
 * ProblemProgressIndicator
 * Minimal, understated indicator displaying stages 01 through 05.
 * Strictly adheres to guidelines: no giant progress bar, no percentage labels.
 */
export const ProblemProgressIndicator: React.FC<ProblemProgressIndicatorProps> = ({
  currentStageIndex,
  onSelectStage,
  className,
}) => {
  const stageNumbers = ['01', '02', '03', '04', '05'];

  return (
    <div
      className={clsx('flex items-center gap-2 sm:gap-2.5', className)}
      role="tablist"
      aria-label="Diagnostic Sequence Stages"
    >
      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-muted mr-1">
        Diagnostic Stage:
      </span>

      {stageNumbers.map((num, idx) => {
        const stageIndex = idx + 1; // 1-indexed to match stages 01..05
        const isActive = currentStageIndex === stageIndex;
        const isPassed = currentStageIndex > stageIndex;

        return (
          <button
            key={num}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-label={`Diagnostic Stage ${num}`}
            onClick={() => onSelectStage?.(stageIndex)}
            className={clsx(
              'h-7 px-2.5 rounded-md text-xs font-mono font-bold transition-all duration-200 flex items-center justify-center border',
              isActive
                ? 'bg-deep-blue text-white border-deep-blue shadow-xs scale-105'
                : isPassed
                ? 'bg-soft-blue text-deep-blue border-sky-brand/40 hover:bg-soft-blue/80'
                : 'bg-paper text-muted border-gray-200 hover:text-charcoal hover:border-gray-300'
            )}
          >
            {num}
          </button>
        );
      })}

      {/* Recognition Stage Tag (visible when active) */}
      {currentStageIndex === 6 && (
        <span className="ml-1 text-[11px] font-mono font-extrabold uppercase px-2 py-0.5 rounded bg-deep-blue text-white">
          Resolution
        </span>
      )}
    </div>
  );
};
