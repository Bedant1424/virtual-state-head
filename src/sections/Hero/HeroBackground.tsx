import React from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/utils';

export interface HeroBackgroundProps {
  className?: string;
}

/**
 * Signature Hero Background
 * Multi-layered, continuously living ambient background system communicating
 * strategic direction, leadership governance, and continuous sales telemetry.
 *
 * Layer 1: Fine SVG Coordinate Grid with technical intersection crosses
 * Layer 2: Slow-moving restrained gradient light fields
 * Layer 3: Strategic telemetry nodes
 * Layer 4: Connected directional vectors and fine technical paths
 * Layer 5: Slow signal pulse travelling along the performance network
 */
export const HeroBackground: React.FC<HeroBackgroundProps> = ({ className }) => {
  const reducedMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className={cn(
        'absolute inset-0 pointer-events-none select-none overflow-hidden z-0',
        className
      )}
    >
      {/* LAYER 1: Technical Coordinate System & Fine Grid */}
      <svg
        className="absolute inset-0 w-full h-full opacity-60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="hero-coordinate-grid"
            width="56"
            height="56"
            patternUnits="userSpaceOnUse"
          >
            {/* Grid lines */}
            <path
              d="M 56 0 L 0 0 0 56"
              fill="none"
              stroke="#123B63"
              strokeWidth="0.75"
              strokeOpacity="0.04"
            />
            {/* Fine coordinate cross at intersections */}
            <path
              d="M -3 0 L 3 0 M 0 -3 L 0 3"
              fill="none"
              stroke="#87CEEB"
              strokeWidth="0.75"
              strokeOpacity="0.25"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-coordinate-grid)" />
      </svg>

      {/* LAYER 2: Slow-Moving Ambient Gradient Light Fields */}
      <div
        className={cn(
          'absolute -top-32 right-10 w-[600px] h-[550px] rounded-full opacity-40 blur-3xl transform-gpu transition-transform',
          !reducedMotion && 'animate-pulse'
        )}
        style={{
          background:
            'radial-gradient(circle, rgba(135, 206, 235, 0.28) 0%, rgba(234, 245, 251, 0.4) 45%, transparent 70%)',
          animationDuration: '14s',
        }}
      />
      <div
        className={cn(
          'absolute top-1/3 -left-32 w-[500px] h-[450px] rounded-full opacity-30 blur-3xl transform-gpu',
          !reducedMotion && 'animate-pulse'
        )}
        style={{
          background:
            'radial-gradient(circle, rgba(18, 59, 99, 0.15) 0%, rgba(234, 245, 251, 0.3) 50%, transparent 75%)',
          animationDuration: '18s',
        }}
      />

      {/* LAYERS 3, 4, 5: Connected Nodes & Flow Paths SVG Network */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 800"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="hero-vector-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#123B63" stopOpacity="0.05" />
            <stop offset="50%" stopColor="#87CEEB" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#123B63" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="hero-vector-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#87CEEB" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#123B63" stopOpacity="0.04" />
          </linearGradient>
        </defs>

        {/* LAYER 4: Technical Flow Lines */}
        <g strokeWidth="1" strokeDasharray="4 6">
          <path
            d="M 120 180 Q 420 220 720 160 T 1320 260"
            stroke="url(#hero-vector-gradient-1)"
          />
          <path
            d="M 280 480 C 560 410 880 520 1260 380"
            stroke="url(#hero-vector-gradient-2)"
          />
          <path
            d="M 720 160 L 880 340 L 1120 460"
            stroke="#87CEEB"
            strokeOpacity="0.16"
          />
        </g>

        {/* LAYER 3: Strategic Coordinate Nodes */}
        <g>
          {/* Node 1: Northwest Anchor */}
          <circle cx="420" cy="200" r="3" fill="#123B63" fillOpacity="0.3" />
          <circle cx="420" cy="200" r="7" stroke="#87CEEB" strokeWidth="1" strokeOpacity="0.25" />

          {/* Node 2: Central Strategic Intersection */}
          <circle cx="720" cy="160" r="4" fill="#123B63" fillOpacity="0.4" />
          <circle cx="720" cy="160" r="10" stroke="#87CEEB" strokeWidth="1" strokeOpacity="0.35" />

          {/* Node 3: Leadership Hub Connection */}
          <circle cx="880" cy="340" r="3.5" fill="#87CEEB" fillOpacity="0.5" />
          <circle cx="880" cy="340" r="8" stroke="#123B63" strokeWidth="1" strokeOpacity="0.2" />

          {/* Node 4: East Territory Marker */}
          <circle cx="1120" cy="460" r="3" fill="#123B63" fillOpacity="0.3" />
          <circle cx="1120" cy="460" r="6" stroke="#87CEEB" strokeWidth="1" strokeOpacity="0.2" />
        </g>

        {/* LAYER 5: Restrained Ambient Signal Pulse */}
        {!reducedMotion && (
          <g>
            <circle r="3.5" fill="#87CEEB" opacity="0.7">
              <animateMotion
                path="M 120 180 Q 420 220 720 160 T 1320 260"
                dur="16s"
                repeatCount="indefinite"
              />
            </circle>
            <circle r="3" fill="#123B63" opacity="0.6">
              <animateMotion
                path="M 720 160 L 880 340 L 1120 460"
                dur="12s"
                repeatCount="indefinite"
                begin="4s"
              />
            </circle>
          </g>
        )}
      </svg>
    </div>
  );
};
