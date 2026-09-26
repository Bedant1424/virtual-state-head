import React from 'react';

/**
 * GlobalMotionOverlay
 *
 * A continuous, subtle, deterministic SVG motion layer fixed across the entire viewport.
 * Provides a unified visual identity of flowing strategic momentum / data currents.
 *
 * Requirements:
 * - Fixed inset-0, pointer-events-none, behind all page content
 * - 3-4 large continuous flowing lines spanning the viewport
 * - Slow, smooth, deterministic animation (independent of scroll/mouse/state)
 * - Low opacity (never obscures text)
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
        className="w-full h-full opacity-60 dark:opacity-40"
      >
        <defs>
          {/* Subtle Strategic Gradients */}
          <linearGradient id="gmo-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#87CEEB" stopOpacity="0.18" />
            <stop offset="50%" stopColor="#123B63" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#87CEEB" stopOpacity="0.22" />
          </linearGradient>

          <linearGradient id="gmo-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#123B63" stopOpacity="0.12" />
            <stop offset="60%" stopColor="#87CEEB" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#123B63" stopOpacity="0.06" />
          </linearGradient>

          <linearGradient id="gmo-grad-3" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#87CEEB" stopOpacity="0.14" />
            <stop offset="50%" stopColor="#EAF5FB" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#123B63" stopOpacity="0.18" />
          </linearGradient>

          {/* Embedded deterministic CSS animations */}
          <style>{`
            @keyframes gmo-flow-1 {
              0% { stroke-dashoffset: 0; }
              100% { stroke-dashoffset: -1600; }
            }
            @keyframes gmo-flow-2 {
              0% { stroke-dashoffset: 0; }
              100% { stroke-dashoffset: 1400; }
            }
            @keyframes gmo-flow-3 {
              0% { stroke-dashoffset: 0; }
              100% { stroke-dashoffset: -1200; }
            }
            @keyframes gmo-breathe {
              0%, 100% { opacity: 0.75; }
              50% { opacity: 1; }
            }
            .gmo-stream-1 {
              stroke-dasharray: 800 600;
              animation: gmo-flow-1 48s linear infinite, gmo-breathe 16s ease-in-out infinite;
            }
            .gmo-stream-2 {
              stroke-dasharray: 700 700;
              animation: gmo-flow-2 56s linear infinite, gmo-breathe 20s ease-in-out infinite reverse;
            }
            .gmo-stream-3 {
              stroke-dasharray: 900 500;
              animation: gmo-flow-3 64s linear infinite, gmo-breathe 18s ease-in-out infinite;
            }
            .gmo-stream-static {
              opacity: 0.45;
            }
            @media (prefers-reduced-motion: reduce) {
              .gmo-stream-1, .gmo-stream-2, .gmo-stream-3 {
                animation: none !important;
                stroke-dasharray: none !important;
              }
            }
          `}</style>
        </defs>

        {/* Stream 1: Primary Diagonal Flow (Upper-Left to Lower-Right) */}
        <path
          d="M -120 180 C 380 80, 740 420, 1180 260 C 1520 140, 1780 480, 2060 380"
          stroke="url(#gmo-grad-1)"
          strokeWidth="2.5"
          className="gmo-stream-1"
        />

        {/* Stream 2: Counter Strategic Current (Lower-Left to Upper-Right) */}
        <path
          d="M -80 880 C 420 720, 820 940, 1260 760 C 1620 620, 1840 820, 2040 690"
          stroke="url(#gmo-grad-2)"
          strokeWidth="2"
          className="gmo-stream-2"
        />

        {/* Stream 3: Central Harmonizing Wave */}
        <path
          d="M -100 520 C 340 380, 680 620, 1120 490 C 1480 380, 1720 580, 2080 460"
          stroke="url(#gmo-grad-3)"
          strokeWidth="2"
          className="gmo-stream-3"
        />

        {/* Stream 4: Subtle Deep Foundation Track (Static Contour) */}
        <path
          d="M -60 320 C 460 220, 920 460, 1380 340 C 1720 240, 1960 410, 2060 350"
          stroke="#87CEEB"
          strokeWidth="1"
          strokeDasharray="4 8"
          className="gmo-stream-static"
        />
      </svg>
    </div>
  );
};

export default GlobalMotionOverlay;
