import React from 'react';
import { cn } from '@/lib/utils';

export interface BackgroundGridProps {
  variant?: 'light' | 'subtle' | 'dark';
  className?: string;
}

/**
 * BackgroundGrid
 * Lightweight, reusable background system communicating a living sales-performance architecture.
 * Uses pure SVG coordinate grids and subtle ambient radial accents.
 * 100% pointer-events-none and zero horizontal overflow.
 */
export const BackgroundGrid: React.FC<BackgroundGridProps> = ({
  variant = 'light',
  className,
}) => {
  const isDark = variant === 'dark';

  return (
    <div
      aria-hidden="true"
      className={cn(
        'absolute inset-0 pointer-events-none select-none overflow-hidden z-0',
        className
      )}
    >
      {/* SVG Fine Coordinate Grid */}
      <svg
        className="absolute inset-0 w-full h-full opacity-40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id={`grid-pattern-${variant}`}
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 48 0 L 0 0 0 48"
              fill="none"
              stroke={isDark ? '#87CEEB' : '#123B63'}
              strokeWidth="0.75"
              strokeOpacity={isDark ? '0.08' : '0.04'}
            />
            {/* Subtle Node Accent at intersections */}
            <circle
              cx="0"
              cy="0"
              r="1"
              fill={isDark ? '#87CEEB' : '#123B63'}
              fillOpacity={isDark ? '0.2' : '0.12'}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-pattern-${variant})`} />
      </svg>

      {/* Controlled Ambient Glow Accent (Non-blurring, GPU-friendly gradient) */}
      <div
        className={cn(
          'absolute top-0 right-1/4 w-[500px] h-[350px] rounded-full opacity-30 transform-gpu',
          isDark
            ? 'bg-gradient-to-b from-sky-brand/10 to-transparent'
            : 'bg-gradient-to-b from-soft-blue to-transparent'
        )}
      />
    </div>
  );
};
