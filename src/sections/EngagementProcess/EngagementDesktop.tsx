import React from 'react';
import { EngagementStage } from '@/data/siteContent';
import { clsx } from 'clsx';
import { Check, ArrowRight } from 'lucide-react';

export interface EngagementDesktopProps {
  stages: readonly EngagementStage[];
  activeStageIndex: number;
  onSelectStage: (index: number) => void;
  isResolvedState: boolean;
  onToggleResolved: () => void;
  className?: string;
}

/**
 * EngagementDesktop
 * Continuous horizontal engagement sequence on desktop (>=1024px).
 *
 * Sequence:
 * Assess -> Set Direction -> Develop -> Execute -> Review -> Improve
 *
 * Design Principles:
 * - Large connected horizontal process track with 6 numbered stage points.
 * - Stage names directly attached to the sequence.
 * - Active stage receives stronger typographic and line emphasis; others remain quieter.
 * - Entire sequence remains readable even with no interaction.
 * - Restrained brand styling: thin neutral baseline, sky-blue active segment, deep-blue active typography.
 * - Zero glowing or neon effects.
 * - Strong final state when resolved.
 */
export const EngagementDesktop: React.FC<EngagementDesktopProps> = ({
  stages,
  activeStageIndex,
  onSelectStage,
  isResolvedState,
  onToggleResolved,
  className,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent, currentIndex: number) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      const nextIndex = Math.min(stages.length - 1, currentIndex + 1);
      onSelectStage(nextIndex);
      document.getElementById(`desktop-stage-btn-${stages[nextIndex].id}`)?.focus();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevIndex = Math.max(0, currentIndex - 1);
      onSelectStage(prevIndex);
      document.getElementById(`desktop-stage-btn-${stages[prevIndex].id}`)?.focus();
    } else if (e.key === 'Home') {
      e.preventDefault();
      onSelectStage(0);
      document.getElementById(`desktop-stage-btn-${stages[0].id}`)?.focus();
    } else if (e.key === 'End') {
      e.preventDefault();
      onSelectStage(stages.length - 1);
      document.getElementById(`desktop-stage-btn-${stages[stages.length - 1].id}`)?.focus();
    }
  };

  // Calculate active progress bar width percentage across the track
  // Track starts at center of stage 1 (index 0) and ends at center of stage 6 (index 5)
  const progressPercent = isResolvedState
    ? 100
    : Math.round((activeStageIndex / (stages.length - 1)) * 100);

  return (
    <div
      className={clsx(
        'w-full rounded-3xl bg-white border border-gray-200/80 p-8 xl:p-12 shadow-xs relative overflow-hidden',
        className
      )}
    >
      {/* Top Track Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-sky-brand" aria-hidden="true" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-muted">
            {isResolvedState
              ? 'Complete Engagement Sequence'
              : `Stage ${stages[activeStageIndex].number} of 06 • ${stages[activeStageIndex].name}`}
          </span>
        </div>

        {/* State Toggle: Step Inspection vs Complete Resolved Sequence */}
        <button
          type="button"
          onClick={onToggleResolved}
          className={clsx(
            'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all duration-200 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-sky-brand',
            isResolvedState
              ? 'bg-navy text-sky-brand border border-navy shadow-xs'
              : 'bg-soft-blue text-deep-blue border border-sky-brand/40 hover:bg-sky-brand/20'
          )}
        >
          {isResolvedState ? (
            <>
              <Check className="w-3.5 h-3.5 text-sky-brand" aria-hidden="true" />
              <span>Resolved Sequence Active</span>
            </>
          ) : (
            <>
              <ArrowRight className="w-3.5 h-3.5 text-deep-blue" aria-hidden="true" />
              <span>View Resolved Sequence</span>
            </>
          )}
        </button>
      </div>

      {/* Main Connected Process Track */}
      <div className="relative pt-12 pb-16 px-4 xl:px-8">
        {/* Continuous Horizontal Baseline Track */}
        {/* Placed behind the station nodes */}
        <div
          className="absolute top-[82px] left-[8.33%] right-[8.33%] h-[2px] bg-gray-200 -translate-y-1/2 pointer-events-none"
          aria-hidden="true"
        >
          {/* Restrained sky-blue active segment */}
          <div
            className="h-full bg-sky-brand transition-all duration-500 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* 6 Stage Stations Grid */}
        <div
          role="region"
          aria-label="Six-stage continuous engagement progression"
          className="grid grid-cols-6 gap-2 lg:gap-4 relative"
        >
          {stages.map((stage, index) => {
            const isActive = !isResolvedState && index === activeStageIndex;
            const isVisited = !isResolvedState && index < activeStageIndex;
            const isHighlighted = isResolvedState || isActive || isVisited;

            return (
              <div key={stage.id} className="relative flex flex-col items-center">
                {/* Stage Button / Station Trigger */}
                <button
                  id={`desktop-stage-btn-${stage.id}`}
                  type="button"
                  aria-current={isActive ? 'step' : undefined}
                  tabIndex={0}
                  onClick={() => onSelectStage(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="group flex flex-col items-center w-full cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-sky-brand rounded-2xl p-2 transition-all duration-200"
                >
                  {/* Station Number Badge (Above baseline) */}
                  <div
                    className={clsx(
                      'w-12 h-12 lg:w-14 lg:h-14 rounded-2xl flex items-center justify-center font-mono font-bold transition-all duration-300 shrink-0 mb-4',
                      isResolvedState
                        ? 'bg-navy text-sky-brand border border-sky-brand/50 shadow-xs'
                        : isActive
                        ? 'bg-navy text-sky-brand border-2 border-sky-brand shadow-md scale-105 -translate-y-1'
                        : isVisited
                        ? 'bg-soft-blue text-deep-blue border border-sky-brand/40'
                        : 'bg-paper text-muted border border-gray-200/80 group-hover:border-gray-300 group-hover:text-charcoal'
                    )}
                  >
                    <span className={clsx(isActive ? 'text-base font-extrabold' : 'text-sm')}>
                      {stage.number}
                    </span>
                  </div>

                  {/* Node Circle on Baseline */}
                  <div
                    className={clsx(
                      'w-4 h-4 rounded-full flex items-center justify-center transition-all duration-300 z-10 mb-6 bg-white',
                      isResolvedState
                        ? 'border-2 border-deep-blue'
                        : isActive
                        ? 'border-2 border-navy scale-125'
                        : isVisited
                        ? 'border-2 border-sky-brand'
                        : 'border border-gray-300'
                    )}
                  >
                    <span
                      className={clsx(
                        'w-2 h-2 rounded-full transition-colors',
                        isResolvedState
                          ? 'bg-deep-blue'
                          : isActive
                          ? 'bg-sky-brand'
                          : isVisited
                          ? 'bg-sky-brand'
                          : 'bg-transparent'
                      )}
                    />
                  </div>

                  {/* Stage Name Directly Attached Below Sequence */}
                  <div className="text-center min-h-[52px] flex flex-col items-center">
                    <span
                      className={clsx(
                        'text-base lg:text-lg font-sans transition-colors duration-200 leading-snug block',
                        isResolvedState
                          ? 'font-extrabold text-navy'
                          : isActive
                          ? 'font-extrabold text-navy scale-105'
                          : isVisited
                          ? 'font-bold text-navy/90'
                          : 'font-semibold text-charcoal/60 group-hover:text-charcoal'
                      )}
                    >
                      {stage.name}
                    </span>

                    {/* Active Stage Indicator Dot */}
                    {isActive && (
                      <span className="inline-block mt-2 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-soft-blue text-deep-blue border border-sky-brand/30">
                        Active Stage
                      </span>
                    )}

                    {isResolvedState && (
                      <span className="inline-flex items-center gap-1 mt-2 text-[10px] font-mono font-bold text-sky-brand">
                        <Check className="w-3 h-3" aria-hidden="true" />
                        <span>Connected</span>
                      </span>
                    )}
                  </div>
                </button>

                {/* Subtle Directional Arrow Connector Between Stations */}
                {index < stages.length - 1 && (
                  <div
                    className="absolute top-[82px] -right-2 lg:-right-3 -translate-y-1/2 pointer-events-none z-10 text-xs font-mono font-bold"
                    aria-hidden="true"
                  >
                    <span
                      className={clsx(
                        'transition-colors duration-300',
                        isHighlighted && (isResolvedState || index < activeStageIndex)
                          ? 'text-deep-blue'
                          : 'text-gray-300'
                      )}
                    >
                      →
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Grounded Sequence Footer Bar */}
      <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted font-sans">
        <div className="flex items-center gap-2">
          <span className="font-mono text-sky-brand font-semibold">Sequence:</span>
          <span>Assess → Set Direction → Develop → Execute → Review → Improve</span>
        </div>

        {/* Keyboard Navigation Helper */}
        <div className="hidden lg:flex items-center gap-1.5 text-[11px] font-mono text-muted/80">
          <span>Use</span>
          <kbd className="px-1.5 py-0.5 rounded bg-gray-100 text-charcoal border border-gray-200">←</kbd>
          <kbd className="px-1.5 py-0.5 rounded bg-gray-100 text-charcoal border border-gray-200">→</kbd>
          <span>to navigate sequence</span>
        </div>
      </div>
    </div>
  );
};
