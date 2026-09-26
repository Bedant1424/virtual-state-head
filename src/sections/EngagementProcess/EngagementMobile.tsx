import React from 'react';
import { EngagementStage } from '@/data/siteContent';
import { clsx } from 'clsx';
import { ArrowDown, Check } from 'lucide-react';

export interface EngagementMobileProps {
  stages: readonly EngagementStage[];
  activeStageIndex: number;
  onSelectStage: (index: number) => void;
  isResolvedState: boolean;
  onToggleResolved: () => void;
  className?: string;
}

/**
 * EngagementMobile
 * Responsive vertical engagement sequence for mobile & tablet (<1024px).
 *
 * Sequence:
 * 01 Assess -> 02 Set Direction -> 03 Develop -> 04 Execute -> 05 Review -> 06 Improve
 *
 * Design Principles:
 * - One continuous vertical spine connecting all six stages.
 * - Not separate isolated cards; stages remain continuously linked.
 * - Comfortable touch targets (>=52px).
 * - Clear, high-contrast Manrope typography.
 * - Active stage receives sky-blue node, stronger weight, and subtle background tint.
 * - Full sequence remains completely understandable through normal scrolling.
 */
export const EngagementMobile: React.FC<EngagementMobileProps> = ({
  stages,
  activeStageIndex,
  onSelectStage,
  isResolvedState,
  onToggleResolved,
  className,
}) => {
  return (
    <div
      className={clsx(
        'w-full rounded-2xl bg-white border border-gray-200/80 p-5 sm:p-7 shadow-xs relative overflow-hidden',
        className
      )}
    >
      {/* Mobile Header / Mode Bar */}
      <div className="flex items-center justify-between pb-5 mb-6 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-sky-brand" aria-hidden="true" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-muted">
            {isResolvedState ? 'Complete Sequence' : `Stage ${stages[activeStageIndex].number} of 06`}
          </span>
        </div>

        <button
          type="button"
          onClick={onToggleResolved}
          className={clsx(
            'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold transition-all duration-200 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-sky-brand',
            isResolvedState
              ? 'bg-navy text-sky-brand'
              : 'bg-soft-blue text-deep-blue border border-sky-brand/40'
          )}
        >
          {isResolvedState ? (
            <>
              <Check className="w-3 h-3 text-sky-brand" aria-hidden="true" />
              <span>Resolved</span>
            </>
          ) : (
            <span>View All Active</span>
          )}
        </button>
      </div>

      {/* Connected Vertical Timeline Spine */}
      <div className="relative pl-2 sm:pl-3">
        {/* Continuous Background Spine Line */}
        <div
          className="absolute left-[27px] sm:left-[31px] top-6 bottom-6 w-[2px] bg-gray-200"
          aria-hidden="true"
        />

        {/* 6 Vertical Stages */}
        <div
          role="region"
          aria-label="Six-stage vertical engagement progression"
          className="flex flex-col gap-3 relative"
        >
          {stages.map((stage, index) => {
            const isActive = !isResolvedState && index === activeStageIndex;
            const isVisited = !isResolvedState && index < activeStageIndex;
            const isHighlighted = isResolvedState || isActive || isVisited;

            return (
              <div key={stage.id} className="relative">
                {/* Trigger Button */}
                <button
                  id={`mobile-stage-btn-${stage.id}`}
                  type="button"
                  aria-current={isActive ? 'step' : undefined}
                  onClick={() => onSelectStage(index)}
                  className={clsx(
                    'w-full min-h-[56px] flex items-center gap-4 p-3 rounded-xl transition-all duration-200 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-sky-brand text-left',
                    isActive
                      ? 'bg-soft-blue/50 border border-sky-brand/50 shadow-xs'
                      : isResolvedState
                      ? 'bg-white/80 hover:bg-soft-blue/20'
                      : 'bg-transparent hover:bg-gray-50/80'
                  )}
                >
                  {/* Station Number Node on Spine */}
                  <div
                    className={clsx(
                      'w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center font-mono font-bold text-xs shrink-0 z-10 transition-all duration-300',
                      isResolvedState
                        ? 'bg-navy text-sky-brand border border-sky-brand/50'
                        : isActive
                        ? 'bg-navy text-sky-brand border-2 border-sky-brand shadow-xs scale-105'
                        : isVisited
                        ? 'bg-soft-blue text-deep-blue border border-sky-brand/40'
                        : 'bg-white text-muted border border-gray-300'
                    )}
                  >
                    <span>{stage.number}</span>
                  </div>

                  {/* Stage Name */}
                  <div className="flex-1 flex items-center justify-between">
                    <div>
                      <span
                        className={clsx(
                          'text-base font-sans leading-snug block',
                          isResolvedState
                            ? 'font-extrabold text-navy'
                            : isActive
                            ? 'font-extrabold text-navy'
                            : isVisited
                            ? 'font-bold text-navy/90'
                            : 'font-semibold text-charcoal/70'
                        )}
                      >
                        {stage.name}
                      </span>
                    </div>

                    {/* Active State Pill */}
                    {isActive && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-navy text-sky-brand shrink-0 ml-2">
                        Active
                      </span>
                    )}

                    {isResolvedState && (
                      <Check className="w-3.5 h-3.5 text-sky-brand shrink-0 ml-2" aria-hidden="true" />
                    )}
                  </div>
                </button>

                {/* Sub-indicator down arrow between items */}
                {index < stages.length - 1 && (
                  <div
                    className="pl-[17px] sm:pl-[21px] py-0.5 text-gray-300 text-xs flex items-center pointer-events-none"
                    aria-hidden="true"
                  >
                    <ArrowDown
                      className={clsx(
                        'w-3 h-3 transition-colors',
                        isHighlighted && (isResolvedState || index < activeStageIndex)
                          ? 'text-deep-blue'
                          : 'text-gray-300'
                      )}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer Sequence Line */}
      <div className="pt-5 mt-6 border-t border-gray-100 flex items-center justify-between text-xs text-muted font-sans">
        <span>Continuous sequence</span>
        <span className="font-mono text-sky-brand font-semibold">01 → 06</span>
      </div>
    </div>
  );
};
