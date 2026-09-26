import React, { useId } from 'react';
import { clsx } from 'clsx';
import { type EngineStageIndex } from './EngineProgressIndicator';
import { EnginePillar } from '@/data/siteContent';

export interface EngineVisualProps {
  currentStage: EngineStageIndex;
  pillars?: readonly EnginePillar[];
  onSelectStage?: (stage: EngineStageIndex) => void;
  className?: string;
  isCompact?: boolean;
}

/**
 * EngineVisual
 * Centerpiece editorial graphic for the Sales Performance Engine.
 *
 * Core Concept:
 * - Three large flowing ribbons / light streams:
 *   1. TRAINING (Top-Left): Skills · Mindset · Communication · Sales Capability
 *   2. TECHNOLOGY (Top-Right): Visibility · Tracking · Coordination · Execution Support
 *   3. ACCOUNTABILITY (Bottom): Reviews · Commitments · Follow-through · Performance Discussions
 * - All three converge seamlessly into the illuminated central core:
 *   SALES PERFORMANCE ENGINE
 *
 * Distinct consulting-grade vector art with zero software dashboard tropes.
 */
export const EngineVisual: React.FC<EngineVisualProps> = ({
  currentStage,
  onSelectStage,
  className,
  isCompact = false,
}) => {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '');

  // Active flags
  const isFocusedOne = currentStage >= 1 && currentStage <= 3;

  return (
    <div
      className={clsx(
        'relative w-full rounded-2xl sm:rounded-3xl bg-[#081726] border border-white/15 shadow-2xl overflow-hidden flex flex-col items-center justify-center p-3 sm:p-6 transition-all duration-300',
        className
      )}
      style={{ minHeight: isCompact ? '320px' : '480px' }}
      aria-label="Sales Performance Engine: Three Converging Elements"
    >
      {/* Top Editorial Caption */}
      <div className="w-full flex items-center justify-between mb-2 px-2 z-10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-sky-brand animate-pulse" />
          <span className="text-[11px] sm:text-xs font-sans font-bold uppercase tracking-wider text-white/90">
            Integrated Sales Architecture
          </span>
        </div>
        <div className="text-[10px] sm:text-xs font-mono font-medium text-sky-brand/80">
          3 Pillars → 1 Continuous Rhythm
        </div>
      </div>

      {/* Centerpiece Vector Composition */}
      <svg
        viewBox="0 0 800 580"
        className="w-full h-auto max-w-[720px] select-none font-sans"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Radial Core Glow */}
          <radialGradient id={`core-glow-${uid}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#87CEEB" stopOpacity="0.45" />
            <stop offset="60%" stopColor="#123B63" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#081726" stopOpacity="0" />
          </radialGradient>

          {/* Central Keystone Gradient */}
          <linearGradient id={`keystone-${uid}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#164875" />
            <stop offset="50%" stopColor="#0F3354" />
            <stop offset="100%" stopColor="#0B2138" />
          </linearGradient>

          {/* Ribbon 1 Gradient: Training (Sky & Pure Light) */}
          <linearGradient id={`ribbon-training-${uid}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#87CEEB" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#5CAFD6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#87CEEB" stopOpacity="0.95" />
          </linearGradient>

          {/* Ribbon 2 Gradient: Technology (Cyan-Teal Sapphire) */}
          <linearGradient id={`ribbon-tech-${uid}`} x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#87CEEB" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#4A98C7" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#87CEEB" stopOpacity="0.95" />
          </linearGradient>

          {/* Ribbon 3 Gradient: Accountability (Vibrant Cobalt-Sky) */}
          <linearGradient id={`ribbon-account-${uid}`} x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#87CEEB" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#387FA8" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#87CEEB" stopOpacity="0.95" />
          </linearGradient>

          {/* Soft Stream Glow Filter */}
          <filter id={`glow-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ambient Core Glow */}
        <circle cx="400" cy="270" r="220" fill={`url(#core-glow-${uid})`} />

        {/* Outer Orbit Alignment Guide Line */}
        <circle
          cx="400"
          cy="270"
          r="190"
          stroke="#87CEEB"
          strokeOpacity="0.12"
          strokeWidth="1.5"
          strokeDasharray="4 8"
        />

        {/* ============================================================== */}
        {/* STREAM 1: TRAINING (Top-Left → Center Core)                   */}
        {/* ============================================================== */}
        <g
          className={clsx(
            'transition-opacity duration-300 cursor-pointer',
            isFocusedOne && currentStage !== 1 ? 'opacity-35' : 'opacity-100'
          )}
          onClick={() => onSelectStage?.(1)}
        >
          {/* Broad outer ribbon flow */}
          <path
            d="M 110 80 C 230 90, 270 190, 360 250"
            fill="none"
            stroke={`url(#ribbon-training-${uid})`}
            strokeWidth="24"
            strokeLinecap="round"
            strokeOpacity={currentStage === 1 ? '0.35' : '0.18'}
          />

          {/* Primary core stream path */}
          <path
            d="M 110 80 C 230 90, 270 190, 360 250"
            fill="none"
            stroke="#87CEEB"
            strokeWidth={currentStage === 1 ? '5' : '3.5'}
            strokeLinecap="round"
            filter={`url(#glow-${uid})`}
          />

          {/* Parallel rhythm accent stroke */}
          <path
            d="M 130 65 C 240 80, 285 180, 370 240"
            fill="none"
            stroke="#87CEEB"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            strokeOpacity="0.4"
          />

          {/* Stream 1 Entry Node & Badge */}
          <g transform="translate(95, 75)">
            <circle cx="0" cy="0" r="28" fill="#0B2138" stroke="#87CEEB" strokeWidth="2" />
            <circle cx="0" cy="0" r="6" fill="#87CEEB" />
            <text
              x="38"
              y="-10"
              fill="#FFFFFF"
              fontSize="14"
              fontWeight="800"
              letterSpacing="0.05em"
            >
              01 TRAINING
            </text>
            <text
              x="38"
              y="8"
              fill="#87CEEB"
              fontSize="10"
              fontWeight="600"
              letterSpacing="0.03em"
            >
              Skills · Mindset · Communication
            </text>
            <text
              x="38"
              y="22"
              fill="#A0B8D0"
              fontSize="9"
              letterSpacing="0.02em"
            >
              Sales Capability Development
            </text>
          </g>
        </g>

        {/* ============================================================== */}
        {/* STREAM 2: TECHNOLOGY (Top-Right → Center Core)                */}
        {/* ============================================================== */}
        <g
          className={clsx(
            'transition-opacity duration-300 cursor-pointer',
            isFocusedOne && currentStage !== 2 ? 'opacity-35' : 'opacity-100'
          )}
          onClick={() => onSelectStage?.(2)}
        >
          {/* Broad outer ribbon flow */}
          <path
            d="M 690 80 C 570 90, 530 190, 440 250"
            fill="none"
            stroke={`url(#ribbon-tech-${uid})`}
            strokeWidth="24"
            strokeLinecap="round"
            strokeOpacity={currentStage === 2 ? '0.35' : '0.18'}
          />

          {/* Primary core stream path */}
          <path
            d="M 690 80 C 570 90, 530 190, 440 250"
            fill="none"
            stroke="#87CEEB"
            strokeWidth={currentStage === 2 ? '5' : '3.5'}
            strokeLinecap="round"
            filter={`url(#glow-${uid})`}
          />

          {/* Parallel rhythm accent stroke */}
          <path
            d="M 670 65 C 560 80, 515 180, 430 240"
            fill="none"
            stroke="#87CEEB"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            strokeOpacity="0.4"
          />

          {/* Stream 2 Entry Node & Badge */}
          <g transform="translate(705, 75)">
            <circle cx="0" cy="0" r="28" fill="#0B2138" stroke="#87CEEB" strokeWidth="2" />
            <circle cx="0" cy="0" r="6" fill="#87CEEB" />
            <text
              x="-38"
              y="-10"
              fill="#FFFFFF"
              fontSize="14"
              fontWeight="800"
              letterSpacing="0.05em"
              textAnchor="end"
            >
              02 TECHNOLOGY
            </text>
            <text
              x="-38"
              y="8"
              fill="#87CEEB"
              fontSize="10"
              fontWeight="600"
              letterSpacing="0.03em"
              textAnchor="end"
            >
              Visibility · Tracking · Execution
            </text>
            <text
              x="-38"
              y="22"
              fill="#A0B8D0"
              fontSize="9"
              letterSpacing="0.02em"
              textAnchor="end"
            >
              Coordination & Pipeline Hygiene
            </text>
          </g>
        </g>

        {/* ============================================================== */}
        {/* STREAM 3: ACCOUNTABILITY (Bottom → Center Core)               */}
        {/* ============================================================== */}
        <g
          className={clsx(
            'transition-opacity duration-300 cursor-pointer',
            isFocusedOne && currentStage !== 3 ? 'opacity-35' : 'opacity-100'
          )}
          onClick={() => onSelectStage?.(3)}
        >
          {/* Broad outer ribbon flow */}
          <path
            d="M 400 500 C 400 420, 400 370, 400 330"
            fill="none"
            stroke={`url(#ribbon-account-${uid})`}
            strokeWidth="24"
            strokeLinecap="round"
            strokeOpacity={currentStage === 3 ? '0.35' : '0.18'}
          />

          {/* Primary core stream path */}
          <path
            d="M 400 500 C 400 420, 400 370, 400 330"
            fill="none"
            stroke="#87CEEB"
            strokeWidth={currentStage === 3 ? '5' : '3.5'}
            strokeLinecap="round"
            filter={`url(#glow-${uid})`}
          />

          {/* Flanking guiding flow lines */}
          <path
            d="M 370 490 C 375 420, 385 365, 388 335"
            fill="none"
            stroke="#87CEEB"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            strokeOpacity="0.4"
          />
          <path
            d="M 430 490 C 425 420, 415 365, 412 335"
            fill="none"
            stroke="#87CEEB"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            strokeOpacity="0.4"
          />

          {/* Stream 3 Entry Node & Badge */}
          <g transform="translate(400, 515)">
            <circle cx="0" cy="0" r="28" fill="#0B2138" stroke="#87CEEB" strokeWidth="2" />
            <circle cx="0" cy="0" r="6" fill="#87CEEB" />
            <text
              x="0"
              y="42"
              fill="#FFFFFF"
              fontSize="14"
              fontWeight="800"
              letterSpacing="0.05em"
              textAnchor="middle"
            >
              03 ACCOUNTABILITY
            </text>
            <text
              x="0"
              y="57"
              fill="#87CEEB"
              fontSize="10"
              fontWeight="600"
              letterSpacing="0.03em"
              textAnchor="middle"
            >
              Reviews · Commitments · Follow-through
            </text>
          </g>
        </g>

        {/* ============================================================== */}
        {/* CENTERPIECE CORE: SALES PERFORMANCE ENGINE                     */}
        {/* ============================================================== */}
        <g transform="translate(400, 270)">
          {/* Animated/Glowing outer halo rings */}
          <circle
            cx="0"
            cy="0"
            r="86"
            fill="none"
            stroke="#87CEEB"
            strokeWidth="1.5"
            strokeOpacity="0.3"
            strokeDasharray="8 6"
          />
          <circle
            cx="0"
            cy="0"
            r="76"
            fill="none"
            stroke="#87CEEB"
            strokeWidth="2"
            strokeOpacity="0.5"
          />

          {/* Central Keystone Medallion */}
          <circle
            cx="0"
            cy="0"
            r="66"
            fill={`url(#keystone-${uid})`}
            stroke="#87CEEB"
            strokeWidth="2.5"
            filter={`url(#glow-${uid})`}
          />

          {/* Central Core Inner Rings */}
          <circle cx="0" cy="0" r="54" fill="none" stroke="#FFFFFF" strokeOpacity="0.15" />

          {/* Center Title Typography */}
          <text
            x="0"
            y="-14"
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
            y="4"
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
            y="22"
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
            y="38"
            fill="#87CEEB"
            fontSize="8"
            fontWeight="600"
            letterSpacing="0.06em"
            textAnchor="middle"
          >
            INTEGRATED CORE
          </text>
        </g>
      </svg>
    </div>
  );
};

export default EngineVisual;
