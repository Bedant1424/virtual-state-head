import React from 'react';
import { EngineDesktop } from './EngineDesktop';
import { EngineMobile } from './EngineMobile';
import { EngineReducedMotion } from './EngineReducedMotion';
import { EngineTransition } from './EngineTransition';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export interface PerformanceEngineProps {
  onCtaClick?: () => void;
}

/**
 * PerformanceEngine
 * Primary system section container for the Sales Performance Engine (<section id="engine">).
 *
 * Architecture:
 * - Uses useReducedMotion to conditionally render an accessible static layout
 * - On standard screens:
 *   - Desktop (>=1024px): Pinned GSAP ScrollTrigger 5-stage interactive sequence
 *   - Mobile/Tablet (<1024px): Unpinned vertical storytelling flow
 * - Concludes with EngineTransition (frameworks preview bridge)
 */
export const PerformanceEngine: React.FC<PerformanceEngineProps> = ({ onCtaClick }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="engine"
      className="relative w-full bg-navy text-white overflow-hidden"
      aria-label="Sales Performance Engine"
    >
      {prefersReducedMotion ? (
        <EngineReducedMotion onCtaClick={onCtaClick} />
      ) : (
        <>
          <div className="hidden lg:block">
            <EngineDesktop onCtaClick={onCtaClick} />
          </div>
          <div className="block lg:hidden">
            <EngineMobile onCtaClick={onCtaClick} />
          </div>
        </>
      )}

      {/* Transition bridge to Frameworks section */}
      <EngineTransition />
    </section>
  );
};
