import React from 'react';

/**
 * GlobalSalesSignal (<GlobalSalesSignal />)
 *
 * Locked Design System Specification:
 * - Fixed full viewport overlay, pointer-events: none, z-index behind all content.
 * - Primary contour: #87CEEB, 1.5px stroke, ~0.10 opacity, 28 second cycle.
 * - Secondary contour: #123B63, 1.0px stroke, ~0.06 opacity, 40 second cycle.
 * - Ambient light field: subtle radial glow with soft 24s breathing cycle.
 * - Motion feels like light, air, gravity, and slow continuous flow.
 * - Completely freezes under prefers-reduced-motion.
 */
export const GlobalSalesSignal: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Ambient Luminescence Field */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-br from-[#123B63]/[0.035] via-[#87CEEB]/[0.025] to-transparent rounded-full blur-3xl" />

      <svg
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <defs>
          {/* Primary Signal Gradient (#87CEEB Sky Brand) */}
          <linearGradient id="signal-primary-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#87CEEB" stopOpacity="0.08" />
            <stop offset="50%" stopColor="#87CEEB" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#87CEEB" stopOpacity="0.06" />
          </linearGradient>

          {/* Secondary Structural Gradient (#123B63 Deep Blue) */}
          <linearGradient id="signal-secondary-grad" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#123B63" stopOpacity="0.05" />
            <stop offset="50%" stopColor="#123B63" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#123B63" stopOpacity="0.04" />
          </linearGradient>

          {/* Slow Specular Traveling Highlight */}
          <linearGradient id="signal-pulse-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#87CEEB" stopOpacity="0" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#87CEEB" stopOpacity="0" />
          </linearGradient>

          <style>{`
            @keyframes signal-drift-primary {
              0% {
                stroke-dashoffset: 2400;
              }
              100% {
                stroke-dashoffset: 0;
              }
            }

            @keyframes signal-drift-secondary {
              0% {
                stroke-dashoffset: 0;
              }
              100% {
                stroke-dashoffset: 2800;
              }
            }

            @keyframes signal-breathe {
              0%, 100% {
                opacity: 0.8;
                transform: translateY(0px);
              }
              50% {
                opacity: 1;
                transform: translateY(-8px);
              }
            }

            .signal-contour-1 {
              animation: signal-breathe 28s ease-in-out infinite;
            }

            .signal-contour-2 {
              animation: signal-breathe 40s ease-in-out infinite reverse;
            }

            .signal-pulse-1 {
              stroke-dasharray: 200 2200;
              animation: signal-drift-primary 28s linear infinite;
            }

            .signal-pulse-2 {
              stroke-dasharray: 180 2620;
              animation: signal-drift-secondary 40s linear infinite;
            }

            @media (prefers-reduced-motion: reduce) {
              .signal-contour-1,
              .signal-contour-2,
              .signal-pulse-1,
              .signal-pulse-2 {
                animation: none !important;
                stroke-dasharray: none !important;
                stroke-dashoffset: 0 !important;
                transform: none !important;
              }
            }
          `}</style>
        </defs>

        {/* ============================================================== */}
        {/* PRIMARY CONTOUR: Sky Brand #87CEEB (1.5px, ~0.10 opacity, 28s) */}
        {/* ============================================================== */}
        <path
          d="M -100 220 C 320 80, 680 420, 1080 260 C 1320 160, 1460 380, 1600 300"
          stroke="url(#signal-primary-grad)"
          strokeWidth="1.5"
          className="signal-contour-1"
        />
        <path
          d="M -100 220 C 320 80, 680 420, 1080 260 C 1320 160, 1460 380, 1600 300"
          stroke="url(#signal-pulse-grad)"
          strokeWidth="2"
          strokeLinecap="round"
          className="signal-pulse-1"
        />

        {/* ============================================================== */}
        {/* SECONDARY CONTOUR: Deep Blue #123B63 (1.0px, ~0.06 opacity, 40s)*/}
        {/* ============================================================== */}
        <path
          d="M -80 720 C 360 580, 720 810, 1120 640 C 1360 530, 1480 690, 1580 620"
          stroke="url(#signal-secondary-grad)"
          strokeWidth="1"
          className="signal-contour-2"
        />
        <path
          d="M -80 720 C 360 580, 720 810, 1120 640 C 1360 530, 1480 690, 1580 620"
          stroke="url(#signal-pulse-grad)"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="signal-pulse-2"
        />
      </svg>
    </div>
  );
};

export default GlobalSalesSignal;
