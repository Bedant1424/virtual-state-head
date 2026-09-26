import React from 'react';
import { clsx } from 'clsx';
import { ArrowDown, Layers } from 'lucide-react';

interface IntroductionTransitionProps {
  statement: string;
  targetLabel: string;
  className?: string;
  onNavigateNext?: () => void;
}

export const IntroductionTransition: React.FC<IntroductionTransitionProps> = ({
  statement,
  targetLabel,
  className,
  onNavigateNext,
}) => {
  return (
    <div
      className={clsx(
        'mt-8 sm:mt-10 pt-6 sm:pt-6 border-t border-gray-200/80 flex flex-col md:flex-row items-center justify-between gap-4',
        className
      )}
    >
      <div className="flex items-center gap-3 text-left">
        <div className="w-10 h-10 rounded-full bg-soft-blue border border-sky-brand/30 flex items-center justify-center shrink-0 text-deep-blue">
          <Layers className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-muted font-bold block">
            Next
          </span>
          <p className="text-sm sm:text-base font-medium text-navy">
            {statement}
          </p>
        </div>
      </div>

      <div className="shrink-0 flex items-center gap-3">
        <span className="text-xs text-muted uppercase tracking-wider">
          Looking Ahead: <strong className="text-deep-blue">{targetLabel}</strong>
        </span>
        <button
          type="button"
          onClick={onNavigateNext}
          className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white border border-gray-200/90 text-deep-blue hover:bg-soft-blue hover:border-deep-blue transition-colors shadow-xs"
          aria-label={`Advance to next section: ${targetLabel}`}
        >
          <ArrowDown className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
