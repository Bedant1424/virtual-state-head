import React, { useId } from 'react';
import { clsx } from 'clsx';
import { EnginePillar } from '@/data/siteContent';

export type EngineScrollState = 1 | 2 | 3 | 4 | 5;

export interface EngineVisualProps {
  currentStage: number; // 1: Training, 2: Technology, 3: Accountability, 4: Convergence, 5: Sales Performance Engine
  pillars?: readonly EnginePillar[];
  onSelectStage?: (stage: number) => void;
  className?: string;
  isCompact?: boolean;
}

/**
 * EngineVisual
 * Large editorial vector artwork for the Sales Performance Engine.
 *
 * Core Concept:
 * - Three large flowing visual streams:
 *   1. TRAINING (Top-Left): Skills · Mindset · Communication
 *   2. TECHNOLOGY (Top-Right): Visibility · Tracking · Coordination
 *   3. ACCOUNTABILITY (Bottom): Reviews · Commitments · Follow-through
 * - Progressively converge into:
 *   SALES PERFORMANCE ENGINE
 *
 * Visual Characteristics:
 * - Large flowing lines, light trails, soft glow, subtle depth, strong central convergence
 * - Zero software UI, zero dashboard controls, zero mind maps, zero node graphs
 * - Strictly normal sales-consulting visual language
 */
export const EngineVisual: React.FC<EngineVisualProps> = ({
  currentStage,
  className,
  isCompact = false,
}) => {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '');

  // Normalized scroll state (1 to 5)
  const state: EngineScrollState = (
    currentStage <= 1 ? 1 : currentStage >= 5 ? 5 : currentStage
  ) as EngineScrollState;

  // Stream visibility and intensity based on progressive scroll
  const isTrainingActive = state >= 1;
  const isTechActive = state >= 2;
  const isAccountActive = state >= 3;
  const isConvergence = state >= 4;
  const isFullEngine = state === 5;

  return (
    <div
      className={clsx(
        'relative w-full rounded-2xl sm:rounded-3xl bg-[#081726] border border-white/15 shadow-2xl overflow-hidden flex flex-col items-center justify-center p-3 sm:p-6 transition-all duration-500',
        className
      )}
      style={{ minHeight: isCompact ? '320px' : '480px' }}
      aria-label="Sales Performance Engine: Three Converging Elements"
    >
      {/* Centerpiece Vector Composition */}
      <svg
        viewBox="0 0 800 580"
        className="w-full h-auto max-w-[720px] select-none font-sans"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Radial Ambient Core Glow */}
          <radialGradient id={`core-glow-${uid}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#87CEEB" stopOpacity={isFullEngine ? 0.6 : isConvergence ? 0.4 : 0.25} />
            <stop offset="60%" stopColor="#123B63" stopOpacity={isFullEngine ? 0.3 : 0.15} />
            <stop offset="100%" stopColor="#081726" stopOpacity="0" />
          </radialGradient>

          {/* Central Keystone Gradient */}
          <linearGradient id={`keystone-${uid}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={isFullEngine ? "#1A5285" : "#123B63"} />
            <stop offset="50%" stopColor={isFullEngine ? "#123B63" : "#0F3354"} />
            <stop offset="100%" stopColor="#0B2138" />
          </linearGradient>

          {/* Ribbon 1: Training Light Stream */}
          <linearGradient id={`stream-training-${uid}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#87CEEB" stopOpacity={isTrainingActive ? 0.95 : 0.2} />
            <stop offset="70%" stopColor="#5CAFD6" stopOpacity={isTrainingActive ? 0.7 : 0.15} />
            <stop offset="100%" stopColor="#87CEEB" stopOpacity={isConvergence ? 1 : 0.3} />
          </linearGradient>

          {/* Ribbon 2: Technology Light Stream */}
          <linearGradient id={`stream-tech-${uid}`} x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#87CEEB" stopOpacity={isTechActive ? 0.95 : 0.2} />
            <stop offset="70%" stopColor="#4A98C7" stopOpacity={isTechActive ? 0.7 : 0.15} />
            <stop offset="100%" stopColor="#87CEEB" stopOpacity={isConvergence ? 1 : 0.3} />
          </linearGradient>

          {/* Ribbon 3: Accountability Light Stream */}
          <linearGradient id={`stream-account-${uid}`} x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#87CEEB" stopOpacity={isAccountActive ? 0.95 : 0.2} />
            <stop offset="70%" stopColor="#387FA8" stopOpacity={isAccountActive ? 0.7 : 0.15} />
            <stop offset="100%" stopColor="#87CEEB" stopOpacity={isConvergence ? 1 : 0.3} />
          </linearGradient>

          {/* Stream Glow Filter */}
          <filter id={`glow-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ambient Core Glow */}
        <circle cx="400" cy="270" r={isFullEngine ? 240 : 200} fill={`url(#core-glow-${uid})`} className="transition-all duration-700" />

        {/* Outer Orbit Guide Line */}
        <circle
          cx="400"
          cy="270"
          r="190"
          stroke="#87CEEB"
          strokeOpacity={isConvergence ? 0.22 : 0.1}
          strokeWidth="1.5"
          strokeDasharray="4 8"
          className="transition-all duration-500"
        />

        {/* ============================================================== */}
        {/* STREAM 1: TRAINING (Top-Left → Center Core)                   */}
        {/* ============================================================== */}
        <g className="transition-all duration-500">
          {/* Broad outer ribbon flow */}
          <path
            d="M 110 80 C 230 90, 270 190, 360 250"
            fill="none"
            stroke={`url(#stream-training-${uid})`}
            strokeWidth={state === 1 || isConvergence ? 24 : 16}
            strokeLinecap="round"
            strokeOpacity={state === 1 ? 0.35 : isConvergence ? 0.25 : 0.1}
            className="transition-all duration-500"
          />

          {/* Primary core stream path */}
          <path
            d="M 110 80 C 230 90, 270 190, 360 250"
            fill="none"
            stroke="#87CEEB"
            strokeWidth={state === 1 || isFullEngine ? 5 : 3}
            strokeOpacity={isTrainingActive ? 1 : 0.25}
            strokeLinecap="round"
            filter={isTrainingActive ? `url(#glow-${uid})` : undefined}
            className="transition-all duration-500"
          />

          {/* Parallel rhythm accent stroke */}
          <path
            d="M 130 65 C 240 80, 285 180, 370 240"
            fill="none"
            stroke="#87CEEB"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            strokeOpacity={isTrainingActive ? 0.45 : 0.15}
            className="transition-all duration-500"
          />

          {/* Stream 1 Entry Node & Label */}
          <g transform="translate(95, 75)">
            <circle cx="0" cy="0" r="28" fill="#0B2138" stroke="#87CEEB" strokeWidth={state === 1 ? 2.5 : 1.5} />
            <circle cx="0" cy="0" r="6" fill="#87CEEB" fillOpacity={isTrainingActive ? 1 : 0.4} />
            <text
              x="38"
              y="-10"
              fill={state === 1 || isConvergence ? "#FFFFFF" : "#CBD5E1"}
              fontSize="14"
              fontWeight="800"
              letterSpacing="0.05em"
            >
              TRAINING
            </text>
            <text
              x="38"
              y="8"
              fill="#87CEEB"
              fontSize="10"
              fontWeight="600"
              letterSpacing="0.03em"
              fillOpacity={isTrainingActive ? 1 : 0.5}
            >
              Skills · Mindset · Communication
            </text>
            <text
              x="38"
              y="22"
              fill="#94A3B8"
              fontSize="9"
              letterSpacing="0.02em"
              fillOpacity={isTrainingActive ? 1 : 0.4}
            >
              Sales Capability
            </text>
          </g>
        </g>

        {/* ============================================================== */}
        {/* STREAM 2: TECHNOLOGY (Top-Right → Center Core)                */}
        {/* ============================================================== */}
        <g className="transition-all duration-500">
          {/* Broad outer ribbon flow */}
          <path
            d="M 690 80 C 570 90, 530 190, 440 250"
            fill="none"
            stroke={`url(#stream-tech-${uid})`}
            strokeWidth={state === 2 || isConvergence ? 24 : 16}
            strokeLinecap="round"
            strokeOpacity={state === 2 ? 0.35 : isConvergence ? 0.25 : 0.1}
            className="transition-all duration-500"
          />

          {/* Primary core stream path */}
          <path
            d="M 690 80 C 570 90, 530 190, 440 250"
            fill="none"
            stroke="#87CEEB"
            strokeWidth={state === 2 || isFullEngine ? 5 : 3}
            strokeOpacity={isTechActive ? 1 : 0.25}
            strokeLinecap="round"
            filter={isTechActive ? `url(#glow-${uid})` : undefined}
            className="transition-all duration-500"
          />

          {/* Parallel rhythm accent stroke */}
          <path
            d="M 670 65 C 560 80, 515 180, 430 240"
            fill="none"
            stroke="#87CEEB"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            strokeOpacity={isTechActive ? 0.45 : 0.15}
            className="transition-all duration-500"
          />

          {/* Stream 2 Entry Node & Label */}
          <g transform="translate(705, 75)">
            <circle cx="0" cy="0" r="28" fill="#0B2138" stroke="#87CEEB" strokeWidth={state === 2 ? 2.5 : 1.5} />
            <circle cx="0" cy="0" r="6" fill="#87CEEB" fillOpacity={isTechActive ? 1 : 0.4} />
            <text
              x="-38"
              y="-10"
              fill={state === 2 || isConvergence ? "#FFFFFF" : "#CBD5E1"}
              fontSize="14"
              fontWeight="800"
              letterSpacing="0.05em"
              textAnchor="end"
            >
              TECHNOLOGY
            </text>
            <text
              x="-38"
              y="8"
              fill="#87CEEB"
              fontSize="10"
              fontWeight="600"
              letterSpacing="0.03em"
              textAnchor="end"
              fillOpacity={isTechActive ? 1 : 0.5}
            >
              Visibility · Tracking · Execution
            </text>
            <text
              x="-38"
              y="22"
              fill="#94A3B8"
              fontSize="9"
              letterSpacing="0.02em"
              textAnchor="end"
              fillOpacity={isTechActive ? 1 : 0.4}
            >
              Coordination Support
            </text>
          </g>
        </g>

        {/* ============================================================== */}
        {/* STREAM 3: ACCOUNTABILITY (Bottom → Center Core)               */}
        {/* ============================================================== */}
        <g className="transition-all duration-500">
          {/* Broad outer ribbon flow */}
          <path
            d="M 400 500 C 400 420, 400 370, 400 330"
            fill="none"
            stroke={`url(#stream-account-${uid})`}
            strokeWidth={state === 3 || isConvergence ? 24 : 16}
            strokeLinecap="round"
            strokeOpacity={state === 3 ? 0.35 : isConvergence ? 0.25 : 0.1}
            className="transition-all duration-500"
          />

          {/* Primary core stream path */}
          <path
            d="M 400 500 C 400 420, 400 370, 400 330"
            fill="none"
            stroke="#87CEEB"
            strokeWidth={state === 3 || isFullEngine ? 5 : 3}
            strokeOpacity={isAccountActive ? 1 : 0.25}
            strokeLinecap="round"
            filter={isAccountActive ? `url(#glow-${uid})` : undefined}
            className="transition-all duration-500"
          />

          {/* Flanking guiding flow lines */}
          <path
            d="M 370 490 C 375 420, 385 365, 388 335"
            fill="none"
            stroke="#87CEEB"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            strokeOpacity={isAccountActive ? 0.45 : 0.15}
            className="transition-all duration-500"
          />
          <path
            d="M 430 490 C 425 420, 415 365, 412 335"
            fill="none"
            stroke="#87CEEB"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            strokeOpacity={isAccountActive ? 0.45 : 0.15}
            className="transition-all duration-500"
          />

          {/* Stream 3 Entry Node & Label */}
          <g transform="translate(400, 515)">
            <circle cx="0" cy="0" r="28" fill="#0B2138" stroke="#87CEEB" strokeWidth={state === 3 ? 2.5 : 1.5} />
            <circle cx="0" cy="0" r="6" fill="#87CEEB" fillOpacity={isAccountActive ? 1 : 0.4} />
            <text
              x="0"
              y="42"
              fill={state === 3 || isConvergence ? "#FFFFFF" : "#CBD5E1"}
              fontSize="14"
              fontWeight="800"
              letterSpacing="0.05em"
              textAnchor="middle"
            >
              ACCOUNTABILITY
            </text>
            <text
              x="0"
              y="57"
              fill="#87CEEB"
              fontSize="10"
              fontWeight="600"
              letterSpacing="0.03em"
              textAnchor="middle"
              fillOpacity={isAccountActive ? 1 : 0.5}
            >
              Reviews · Commitments · Follow-through
            </text>
          </g>
        </g>

        {/* ============================================================== */}
        {/* CENTERPIECE CORE: SALES PERFORMANCE ENGINE                     */}
        {/* ============================================================== */}
        <g transform="translate(400, 270)" className="transition-all duration-700">
          {/* Animated/Glowing outer halo rings */}
          <circle
            cx="0"
            cy="0"
            r={isFullEngine ? 92 : 84}
            fill="none"
            stroke="#87CEEB"
            strokeWidth="1.5"
            strokeOpacity={isConvergence ? 0.4 : 0.15}
            strokeDasharray="8 6"
            className="transition-all duration-700"
          />
          <circle
            cx="0"
            cy="0"
            r={isFullEngine ? 80 : 74}
            fill="none"
            stroke="#87CEEB"
            strokeWidth={isFullEngine ? 2.5 : 1.5}
            strokeOpacity={isConvergence ? 0.7 : 0.3}
            className="transition-all duration-700"
          />

          {/* Central Keystone Medallion */}
          <circle
            cx="0"
            cy="0"
            r={isFullEngine ? 70 : 64}
            fill={`url(#keystone-${uid})`}
            stroke="#87CEEB"
            strokeWidth={isFullEngine ? 3 : 2}
            filter={`url(#glow-${uid})`}
            className="transition-all duration-700"
          />

          {/* Central Core Inner Rings */}
          <circle cx="0" cy="0" r="52" fill="none" stroke="#FFFFFF" strokeOpacity={isConvergence ? 0.25 : 0.1} />

          {/* Center Title Typography */}
          <text
            x="0"
            y="-12"
            fill="#87CEEB"
            fontSize="10"
            fontWeight="700"
            letterSpacing="0.14em"
            textAnchor="middle"
          >
            THE
          </text>
          <text
            x="0"
            y="6"
            fill="#FFFFFF"
            fontSize="13"
            fontWeight="900"
            letterSpacing="0.08em"
            textAnchor="middle"
          >
            SALES PERFORMANCE
          </text>
          <text
            x="0"
            y="24"
            fill="#FFFFFF"
            fontSize="14"
            fontWeight="900"
            letterSpacing="0.12em"
            textAnchor="middle"
          >
            ENGINE
          </text>
          <text
            x="0"
            y="40"
            fill="#87CEEB"
            fontSize="8"
            fontWeight="600"
            letterSpacing="0.08em"
            textAnchor="middle"
          >
            ONE STRUCTURED APPROACH
          </text>
        </g>
      </svg>
    </div>
  );
};

export default EngineVisual;
