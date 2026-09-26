import React from 'react';
import { cn } from '@/lib/utils';

export interface HeroBackgroundProps {
  className?: string;
}

/**
 * Signature Hero Background
 * Refined ambient background: subtle coordinate grid and one gentle gradient.
 * Background should be felt, not noticed — never competing with the headline.
 */
export const HeroBackground: React.FC<HeroBackgroundProps> = ({ className }) => {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'absolute inset-0 pointer-events-none select-none overflow-hidden z-0',
        className
      )}
    >
      {/* Layer 1: Subtle Coordinate Grid */}
      <svg
        className="absolute inset-0 w-full h-full opacity-40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="hero-coordinate-grid"
            width="56"
            height="56"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 56 0 L 0 0 0 56"
              fill="none"
              stroke="#123B63"
              strokeWidth="0.75"
              strokeOpacity="0.04"
            />
            <path
              d="M -3 0 L 3 0 M 0 -3 L 0 3"
              fill="none"
              stroke="#87CEEB"
              strokeWidth="0.75"
              strokeOpacity="0.18"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-coordinate-grid)" />
      </svg>

      {/* Layer 2: Single Gentle Ambient Gradient */}
      <div
        className="absolute -top-32 right-10 w-[600px] h-[550px] rounded-full opacity-30 blur-3xl transform-gpu"
        style={{
          background:
            'radial-gradient(circle, rgba(135, 206, 235, 0.22) 0%, rgba(234, 245, 251, 0.3) 45%, transparent 70%)',
        }}
      />
    </div>
  );
};
