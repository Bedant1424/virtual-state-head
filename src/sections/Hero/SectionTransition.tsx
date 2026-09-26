import React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface SectionTransitionProps {
  className?: string;
}

/**
 * SectionTransition
 * Intentional architectural boundary separating the Hero experience from the upcoming
 * problem framing and operational diagnosis section.
 * Clean, restrained transition without arbitrary decorative wave shapes.
 */
export const SectionTransition: React.FC<SectionTransitionProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'relative w-full pt-4 pb-3 flex flex-col items-center justify-center border-b border-gray-200/80',
        className
      )}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-2 text-center select-none">
        <span className="text-[11px] font-bold uppercase tracking-widest text-muted">
          Operational Diagnosis
        </span>
        <div className="w-8 h-8 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-deep-blue">
          <ChevronDown className="w-4 h-4 text-muted" />
        </div>
      </div>
    </div>
  );
};
