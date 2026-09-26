import React from 'react';
import { clsx } from 'clsx';

export interface ValueTickerRailProps {
  items: readonly string[];
  className?: string;
}

/**
 * ValueTickerRail
 * Restrained, slow auto-moving horizontal rail displaying the five core value pillars:
 * STRATEGY • TEAM • LEADERSHIP • ACCOUNTABILITY • CONSULTING
 *
 * Designed with consulting elegance. Pauses on hover/focus and respects prefers-reduced-motion.
 */
export const ValueTickerRail: React.FC<ValueTickerRailProps> = ({ items, className }) => {
  // Quadruple items to ensure seamless infinite looping across large displays
  const displayItems = [...items, ...items, ...items, ...items];

  return (
    <div
      className={clsx(
        'w-full overflow-hidden py-3 bg-paper/60 border-y border-gray-200/70 select-none group',
        className
      )}
      aria-label="Core Performance Domains"
    >
      <div className="flex items-center gap-8 animate-ticker group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:justify-around w-max">
        {displayItems.map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center gap-8 shrink-0">
            <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-deep-blue/80 font-sans">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-sky-brand/70 shrink-0" aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  );
};
