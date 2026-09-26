import React from 'react';
import { ProblemDesktop } from './ProblemDesktop';
import { ProblemMobile } from './ProblemMobile';
import { ProblemReducedMotion } from './ProblemReducedMotion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export interface ProblemProps {
  className?: string;
}

/**
 * Problem Experience Coordinator
 *
 * Virtual State Head — Sales Performance Gap
 *
 * Dispatches between:
 * 1. Accessible Static Layout (prefers-reduced-motion)
 * 2. Desktop Pinned ScrollTrigger Scene (lg screens and up)
 * 3. Mobile Stacked Vertical Narrative (< lg screens)
 *
 * Accompanied by the structural transition bridge.
 */
export const Problem: React.FC<ProblemProps> = ({ className }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="problem"
      aria-label="Sales Performance Gap Analysis"
      className={`relative w-full bg-[#F8FAFC] border-b border-gray-200/80 overflow-hidden ${className || ''}`}
    >
      {prefersReducedMotion ? (
        <ProblemReducedMotion />
      ) : (
        <>
          {/* Desktop Pinned ScrollTrigger Narrative */}
          <div className="hidden lg:block">
            <ProblemDesktop />
          </div>

          {/* Mobile Vertical Narrative Stack */}
          <div className="block lg:hidden">
            <ProblemMobile />
          </div>
        </>
      )}
    </section>
  );
};

export default Problem;
