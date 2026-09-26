import React from 'react';

/**
 * GlobalMotionOverlay
 *
 * A continuous, elegant SVG motion layer fixed across the entire viewport.
 * Provides a clear, recognizable visual identity of flowing strategic momentum.
 *
 * Specifications:
 * - Fixed inset-0, pointer-events-none, z-0 behind content
 * - 4 long flowing curves entering from viewport edges with gentle intersections
 * - Visible but restrained sky-blue / soft-blue strokes with travelling highlights
 * - Continuous CSS animations independent of scroll position or React state
 * - Freezes under prefers-reduced-motion
 */
export const GlobalMotionOverlay: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1920 1080"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <defs>
          {/* Base Flow Gradients */}
          <linearGradient id="gmo-stroke-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#87CEEB" stopOpacity="0.28" />
            <stop offset="50%" stopColor="#123B63" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#87CEEB" stopOpacity="0.32" />
          </linearGradient>

          <linearGradient id="gmo-stroke-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#123B63" stopOpacity="0.2" />
            <stop offset="60%" stopColor="#87CEEB" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#123B63" stopOpacity="0.15" />
          </linearGradient>

          <linearGradient id="gmo-stroke-3" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#87CEEB" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#0B1F33" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#87CEEB" stopOpacity="0.3" />
          </linearGradient>

          {/* Travelling Highlight Glow Gradients */}
          <linearGradient id="gmo-pulse-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#87CEEB" stopOpacity="0" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#87CEEB" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="gmo-pulse-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#87CEEB" stopOpacity="0" />
            <stop offset="50%" stopColor="#87CEEB" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#87CEEB" stopOpacity="0" />
          </linearGradient>

          {/* CSS Animations */}
          <style>{`
            @keyframes gmo-dash-1 {
              0% { stroke-dashoffset: 2800; }
              100% { stroke-dashoffset: 0; }
            }
            @keyframes gmo-dash-2 {
              0% { stroke-dashoffset: 0; }
              100% { stroke-dashoffset: 2600; }
            }
            @keyframes gmo-dash-3 {
              0% { stroke-dashoffset: 2400; }
              100% { stroke-dashoffset: 0; }
            }
            @keyframes gmo-breathe-subtle {
              0%, 100% { opacity: 0.65; }
              50% { opacity: 0.95; }
            }

            .gmo-base-1 {
              animation: gmo-breathe-subtle 12s ease-in-out infinite;
            }
            .gmo-base-2 {
              animation: gmo-breathe-subtle 16s ease-in-out infinite reverse;
            }
            .gmo-base-3 {
              animation: gmo-breathe-subtle 14s ease-in-out infinite;
            }

            .gmo-highlight-1 {
              stroke-dasharray: 280 2520;
              animation: gmo-dash-1 22s linear infinite;
            }
            .gmo-highlight-2 {
              stroke-dasharray: 240 2360;
              animation: gmo-dash-2 28s linear infinite;
            }
            .gmo-highlight-3 {
              stroke-dasharray: 300 2300;
              animation: gmo-dash-3 25s linear infinite;
            }

            @media (prefers-reduced-motion: reduce) {
              .gmo-highlight-1, .gmo-highlight-2, .gmo-highlight-3,
              .gmo-base-1, .gmo-base-2, .gmo-base-3 {
                animation: none !important;
                stroke-dasharray: none !important;
              }
            }
          `}</style>
        </defs>

        {/* ============================================================== */}
        {/* PATH 1: Upper-Left to Lower-Right Diagonal Current              */}
        {/* ============================================================== */}
        <path
          d="M -150 180 C 350 80, 720 380, 1160 220 C 1500 110, 1740 440, 2070 340"
          stroke="url(#gmo-stroke-1)"
          strokeWidth="2.5"
          className="gmo-base-1"
        />
        <path
          d="M -150 180 C 350 80, 720 380, 1160 220 C 1500 110, 1740 440, 2070 340"
          stroke="url(#gmo-pulse-1)"
          strokeWidth="3.5"
          strokeLinecap="round"
          className="gmo-highlight-1"
        />

        {/* ============================================================== */}
        {/* PATH 2: Lower-Left to Upper-Right Intersecting Current          */}
        {/* ============================================================== */}
        <path
          d="M -100 860 C 400 700, 800 920, 1240 740 C 1600 600, 1820 800, 2060 670"
          stroke="url(#gmo-stroke-2)"
          strokeWidth="2.5"
          className="gmo-base-2"
        />
        <path
          d="M -100 860 C 400 700, 800 920, 1240 740 C 1600 600, 1820 800, 2060 670"
          stroke="url(#gmo-pulse-2)"
          strokeWidth="3.5"
          strokeLinecap="round"
          className="gmo-highlight-2"
        />

        {/* ============================================================== */}
        {/* PATH 3: Central Transverse Flow                                */}
        {/* ============================================================== */}
        <path
          d="M -120 510 C 320 370, 660 610, 1100 480 C 1460 370, 1700 570, 2080 450"
          stroke="url(#gmo-stroke-3)"
          strokeWidth="2.5"
          className="gmo-base-3"
        />
        <path
          d="M -120 510 C 320 370, 660 610, 1100 480 C 1460 370, 1700 570, 2080 450"
          stroke="url(#gmo-pulse-1)"
          strokeWidth="3"
          strokeLinecap="round"
          className="gmo-highlight-3"
        />

        {/* ============================================================== */}
        {/* PATH 4: Soft Structural Rhythm Horizon                         */}
        {/* ============================================================== */}
        <path
          d="M -80 340 C 440 240, 900 480, 1360 360 C 1700 260, 1940 430, 2060 370"
          stroke="#87CEEB"
          strokeWidth="1.5"
          strokeDasharray="6 8"
          strokeOpacity="0.25"
        />
      </svg>
    </div>
  );
};

export default GlobalMotionOverlay;
