import React, { useId } from 'react';
import { clsx } from 'clsx';
import { m, AnimatePresence } from 'motion/react';

export interface FrameworkGraphicProps {
  frameworkId: string;
  frameworkNumber: string;
  className?: string;
  isCompact?: boolean;
}

/**
 * FrameworkGraphic
 * Abstract architectural vector geometry for each of the five named frameworks.
 *
 * Rules:
 * - Strictly abstract visual identity and atmosphere.
 * - Does NOT represent steps, stages, formulas, or methodology diagrams.
 * - Utilizes approved brand tokens: #123B63, #0B1F33, #87CEEB, #EAF5FB, and white.
 */
export const FrameworkGraphic: React.FC<FrameworkGraphicProps> = ({
  frameworkId,
  frameworkNumber,
  className,
  isCompact = false,
}) => {
  const rawId = useId();
  const safeId = rawId.replace(/[^a-zA-Z0-9]/g, '');

  return (
    <div
      className={clsx(
        'relative w-full rounded-2xl bg-gradient-to-br from-white to-soft-blue/30 border border-gray-200/80 shadow-xs overflow-hidden flex items-center justify-center p-6 transition-all duration-300',
        className
      )}
      style={{ minHeight: isCompact ? '220px' : '360px' }}
      aria-hidden="true"
    >
      {/* Background Watermark Number */}
      <div className="absolute right-4 bottom-2 select-none pointer-events-none opacity-5 font-mono font-black text-8xl sm:text-9xl text-navy">
        {frameworkNumber}
      </div>

      <AnimatePresence mode="wait">
        <m.div
          key={frameworkId}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="w-full flex items-center justify-center"
        >
          <svg
            viewBox="0 0 400 300"
            className="w-full h-auto max-w-[360px] select-none font-sans"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id={`grad-sky-${safeId}`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#87CEEB" />
                <stop offset="100%" stopColor="#123B63" />
              </linearGradient>
            </defs>

            {/* Geometric Motif 01: Royal Selling Formula */}
            {frameworkId === 'royal-selling-formula' && (
              <g>
                {/* Background Guide Circle */}
                <circle cx="200" cy="150" r="90" stroke="#EAF5FB" strokeWidth="2" strokeDasharray="4 4" />
                <circle cx="200" cy="150" r="60" stroke="#87CEEB" strokeWidth="1" opacity="0.4" />
                
                {/* Precision Alignment Axes */}
                <line x1="80" y1="150" x2="320" y2="150" stroke="#123B63" strokeWidth="1" strokeDasharray="2 4" opacity="0.3" />
                <line x1="200" y1="30" x2="200" y2="270" stroke="#123B63" strokeWidth="1" strokeDasharray="2 4" opacity="0.3" />

                {/* Keystone Diamond Form */}
                <polygon
                  points="200,80 260,150 200,220 140,150"
                  fill="#EAF5FB"
                  fillOpacity="0.5"
                  stroke="#123B63"
                  strokeWidth="2"
                />
                {/* Inner Concentric Diamond */}
                <polygon
                  points="200,105 235,150 200,195 165,150"
                  stroke="#87CEEB"
                  strokeWidth="1.5"
                />

                {/* Center Focal Coordinate */}
                <circle cx="200" cy="150" r="5" fill="#123B63" />
                <circle cx="200" cy="150" r="2" fill="#FFFFFF" />

                {/* Corner Tick Marks */}
                <circle cx="140" cy="150" r="3" fill="#87CEEB" />
                <circle cx="260" cy="150" r="3" fill="#87CEEB" />
                <circle cx="200" cy="80" r="3" fill="#87CEEB" />
                <circle cx="200" cy="220" r="3" fill="#87CEEB" />
              </g>
            )}

            {/* Geometric Motif 02: Strategic Negotiator */}
            {frameworkId === 'strategic-negotiator' && (
              <g>
                {/* Precision Horizontal Measure Lines */}
                <line x1="90" y1="100" x2="310" y2="100" stroke="#123B63" strokeWidth="1" strokeDasharray="4 4" opacity="0.25" />
                <line x1="90" y1="200" x2="310" y2="200" stroke="#123B63" strokeWidth="1" strokeDasharray="4 4" opacity="0.25" />

                {/* Concentric Rectilinear Balance Frames */}
                <rect
                  x="110"
                  y="75"
                  width="180"
                  height="150"
                  rx="12"
                  stroke="#123B63"
                  strokeWidth="2"
                  fill="#EAF5FB"
                  fillOpacity="0.3"
                />
                <rect
                  x="140"
                  y="100"
                  width="120"
                  height="100"
                  rx="8"
                  stroke="#87CEEB"
                  strokeWidth="1.5"
                  fill="#FFFFFF"
                  fillOpacity="0.8"
                />

                {/* Center Alignment Intersection */}
                <line x1="120" y1="150" x2="280" y2="150" stroke="#123B63" strokeWidth="1.5" opacity="0.6" />
                <line x1="200" y1="90" x2="200" y2="210" stroke="#123B63" strokeWidth="1.5" opacity="0.6" />

                {/* Balance Nodes */}
                <circle cx="160" cy="150" r="4.5" fill="#123B63" />
                <circle cx="240" cy="150" r="4.5" fill="#87CEEB" />
                <circle cx="200" cy="150" r="3" fill="#0B1F33" />
              </g>
            )}

            {/* Geometric Motif 03: Sense Selling */}
            {frameworkId === 'sense-selling' && (
              <g>
                {/* Harmonic Concentric Wave Rings */}
                <circle cx="180" cy="150" r="100" stroke="#EAF5FB" strokeWidth="1.5" />
                <circle cx="180" cy="150" r="75" stroke="#87CEEB" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.5" />
                <circle cx="180" cy="150" r="50" stroke="#123B63" strokeWidth="2" opacity="0.7" />
                <circle cx="180" cy="150" r="25" stroke="#87CEEB" strokeWidth="2" />

                {/* Core Resonance Node */}
                <circle cx="180" cy="150" r="6" fill="#123B63" />
                <circle cx="180" cy="150" r="2" fill="#FFFFFF" />

                {/* Radiating Resonance Rays */}
                <line x1="180" y1="150" x2="280" y2="90" stroke="#87CEEB" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="180" y1="150" x2="295" y2="150" stroke="#123B63" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
                <line x1="180" y1="150" x2="280" y2="210" stroke="#87CEEB" strokeWidth="1.5" strokeDasharray="3 3" />

                {/* Perceptual Receptors */}
                <circle cx="280" cy="90" r="4" fill="#87CEEB" />
                <circle cx="295" cy="150" r="3" fill="#123B63" />
                <circle cx="280" cy="210" r="4" fill="#87CEEB" />
              </g>
            )}

            {/* Geometric Motif 04: Performance Consulting */}
            {frameworkId === 'performance-consulting' && (
              <g>
                {/* Diagnostic Grid System */}
                <rect x="90" y="60" width="220" height="180" rx="8" stroke="#123B63" strokeWidth="1" opacity="0.2" fill="#EAF5FB" fillOpacity="0.2" />
                
                {/* Measure Baseline */}
                <line x1="110" y1="210" x2="290" y2="210" stroke="#123B63" strokeWidth="1.5" />
                <line x1="110" y1="90" x2="110" y2="210" stroke="#123B63" strokeWidth="1.5" />

                {/* Diagnostic Tick Marks */}
                <line x1="110" y1="170" x2="116" y2="170" stroke="#123B63" strokeWidth="1" />
                <line x1="110" y1="130" x2="116" y2="130" stroke="#123B63" strokeWidth="1" />
                <line x1="110" y1="90" x2="116" y2="90" stroke="#123B63" strokeWidth="1" />

                <line x1="170" y1="210" x2="170" y2="204" stroke="#123B63" strokeWidth="1" />
                <line x1="230" y1="210" x2="230" y2="204" stroke="#123B63" strokeWidth="1" />
                <line x1="290" y1="210" x2="290" y2="204" stroke="#123B63" strokeWidth="1" />

                {/* Precision Structural Vector Pathway */}
                <path
                  d="M 130 185 L 180 155 L 230 135 L 280 95"
                  stroke="#123B63"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Diagnostic Coordinate Nodes */}
                <circle cx="130" cy="185" r="4" fill="#123B63" />
                <circle cx="180" cy="155" r="4" fill="#87CEEB" />
                <circle cx="230" cy="135" r="4" fill="#87CEEB" />
                <circle cx="280" cy="95" r="6" fill="#123B63" stroke="#87CEEB" strokeWidth="2" />

                {/* Projection Guide */}
                <line x1="280" y1="95" x2="280" y2="210" stroke="#87CEEB" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
              </g>
            )}

            {/* Geometric Motif 05: Lifetime Client Relationship (LCR) */}
            {frameworkId === 'lifetime-client-relationship' && (
              <g>
                {/* Dual Tangent Coordinate Circles */}
                <circle cx="150" cy="150" r="55" stroke="#87CEEB" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />
                <circle cx="250" cy="150" r="55" stroke="#87CEEB" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />

                {/* Continuous Perpetual Loop Pathway */}
                <path
                  d="M 150 110 C 185 110 215 190 250 190 C 280 190 300 170 300 150 C 300 130 280 110 250 110 C 215 110 185 190 150 190 C 120 190 100 170 100 150 C 100 130 120 110 150 110 Z"
                  stroke="#123B63"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="#EAF5FB"
                  fillOpacity="0.3"
                />

                {/* Harmonic Node Centers */}
                <circle cx="150" cy="150" r="5" fill="#123B63" />
                <circle cx="150" cy="150" r="2" fill="#FFFFFF" />

                <circle cx="250" cy="150" r="5" fill="#87CEEB" />
                <circle cx="250" cy="150" r="2" fill="#FFFFFF" />

                {/* Convergence Intersection */}
                <circle cx="200" cy="150" r="4" fill="#0B1F33" stroke="#87CEEB" strokeWidth="1.5" />
              </g>
            )}
          </svg>
        </m.div>
      </AnimatePresence>
    </div>
  );
};
