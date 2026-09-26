import React, { useId } from 'react';
import { clsx } from 'clsx';
import { EnginePillar } from '@/data/siteContent';
import { EngineStageIndex } from './EngineProgressIndicator';

export interface EngineVisualProps {
  currentStage: EngineStageIndex;
  pillars?: readonly EnginePillar[];
  onSelectStage?: (stage: EngineStageIndex) => void;
  className?: string;
  isCompact?: boolean;
}

/**
 * EngineVisual
 * Centerpiece living system representing the Sales Performance Engine.
 *
 * Core Architecture:
 * - Central Core: Represents the "SALES PERFORMANCE ENGINE".
 * - Three Distinct Arcs/Pathways:
 *   1. TRAINING (01): Capability nodes, skill signals flowing to core.
 *   2. TECHNOLOGY (02): Visibility pathways, tracking/coordination grids.
 *   3. ACCOUNTABILITY (03): Review checkpoints, commitment loops.
 * - Integration Climax:
 *   The three distinct arcs connect into one continuous circulating closed loop,
 *   illuminating the unified Sales Performance Engine.
 *
 * Grounded in premium consulting system visualization.
 */
export const EngineVisual: React.FC<EngineVisualProps> = ({
  currentStage,
  pillars: _pillars,
  onSelectStage,
  className,
  isCompact = false,
}) => {
  const rawId = useId();
  const safeId = rawId.replace(/[^a-zA-Z0-9]/g, '');

  const gradCoreId = `eng-core-${safeId}`;
  const gradActivePillarId = `eng-active-${safeId}`;
  const gradLoopId = `eng-loop-${safeId}`;

  // Stage Flags
  const isIntro = currentStage === 0;
  const isTrainingActive = currentStage === 1;
  const isTechnologyActive = currentStage === 2;
  const isAccountabilityActive = currentStage === 3;
  const isClimax = currentStage === 4;

  // Activation threshold checks (once activated, stays structurally connected)
  const hasTraining = currentStage >= 1;
  const hasTechnology = currentStage >= 2;
  const hasAccountability = currentStage >= 3;

  return (
    <div
      className={clsx(
        'relative w-full rounded-3xl bg-navy/80 border border-white/15 shadow-2xl overflow-hidden flex flex-col items-center justify-center p-4 sm:p-6 transition-all duration-300',
        className
      )}
      style={{ minHeight: isCompact ? '320px' : '480px' }}
      aria-label="Sales Performance Engine Interactive System Visual"
    >
      {/* Top System Status Bar */}
      <div className="w-full flex items-center justify-between mb-2 z-10 px-2 sm:px-4">
        <div className="flex items-center gap-2">
          <span
            className={clsx(
              'w-2 h-2 rounded-full transition-colors duration-300',
              isClimax ? 'bg-sky-brand' : 'bg-sky-brand/70'
            )}
          />
          <span className="text-[11px] sm:text-xs font-sans font-bold uppercase tracking-wider text-white/90">
            {isClimax
              ? 'Integrated Performance Engine'
              : isIntro
                ? 'Strategic Framework • Initial State'
                : 'Assembly Stage'}
          </span>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-xs">
          <span className="text-[10px] text-white/60 font-sans font-medium">State:</span>
          <span className="text-[10px] font-sans font-bold text-sky-brand uppercase tracking-wider">
            {isIntro && 'Three Core Elements'}
            {isTrainingActive && '01 Capability'}
            {isTechnologyActive && '02 Visibility + Execution'}
            {isAccountabilityActive && '03 Follow-Through'}
            {isClimax && 'Three Pillars Integrated'}
          </span>
        </div>
      </div>

      {/* Main Vector SVG Canvas */}
      <svg
        viewBox="0 0 720 540"
        className="w-full h-auto max-w-[660px] select-none font-sans"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Central Keystone Gradient */}
          <linearGradient id={gradCoreId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#123B63" />
            <stop offset="100%" stopColor="#0B1F33" />
          </linearGradient>

          {/* Active Node Gradient */}
          <linearGradient id={gradActivePillarId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#123B63" />
            <stop offset="100%" stopColor="#0B1F33" />
          </linearGradient>

          {/* Continuous Loop Glow Gradient */}
          <linearGradient id={gradLoopId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#87CEEB" />
            <stop offset="50%" stopColor="#EAF5FB" />
            <stop offset="100%" stopColor="#87CEEB" />
          </linearGradient>
        </defs>

        {/* ------------------------------------------------------------- */}
        {/* AMBIENT RADIAL TRACKS & SYSTEM GUIDES                         */}
        {/* ------------------------------------------------------------- */}
        <circle
          cx="360"
          cy="270"
          r="195"
          stroke="#87CEEB"
          strokeWidth="1"
          strokeDasharray="4 4"
          opacity="0.15"
        />
        <circle
          cx="360"
          cy="270"
          r="140"
          stroke="#87CEEB"
          strokeWidth="1.5"
          strokeDasharray="3 3"
          opacity={isClimax ? 0.35 : 0.2}
          className="transition-opacity duration-300"
        />

        {/* ------------------------------------------------------------- */}
        {/* CLIMAX: CONTINUOUS CIRCULATING CLOSED LOOP                    */}
        {/* ------------------------------------------------------------- */}
        {isClimax && (
          <g className="transition-opacity duration-500">
            {/* Outer Soft Ambient Ring */}
            <circle
              cx="360"
              cy="270"
              r="140"
              stroke="#87CEEB"
              strokeWidth="4"
              opacity="0.2"
            />
            {/* Main Continuous Ring */}
            <circle
              cx="360"
              cy="270"
              r="140"
              stroke={`url(#${gradLoopId})`}
              strokeWidth="2.5"
              strokeDasharray="14 8"
              opacity="0.85"
            />
          </g>
        )}

        {/* ------------------------------------------------------------- */}
        {/* THREE CONNECTING CONDUIT PATHS TO CORE                       */}
        {/* ------------------------------------------------------------- */}

        {/* 1. TRAINING CONDUIT (Top-Left 210° to Core Port 1) */}
        <g className="transition-all duration-300">
          {hasTraining && (
            <path
              d="M 230 148 Q 280 200 300 235"
              stroke="#87CEEB"
              strokeWidth={isTrainingActive || isClimax ? '3' : '1.5'}
              opacity={isTrainingActive || isClimax ? 1 : 0.4}
            />
          )}
          {/* Signal Pulse Nodes along Training pathway */}
          {hasTraining && (
            <>
              <circle cx="250" cy="170" r={isTrainingActive ? 3.5 : 2} fill="#87CEEB" opacity="0.9" />
              <circle cx="280" cy="205" r={isTrainingActive ? 4 : 2} fill="#87CEEB" opacity="0.95" />
            </>
          )}
        </g>

        {/* 2. TECHNOLOGY CONDUIT (Top-Right 330° to Core Port 2) */}
        <g className="transition-all duration-300">
          {hasTechnology && (
            <path
              d="M 490 148 Q 440 200 420 235"
              stroke="#87CEEB"
              strokeWidth={isTechnologyActive || isClimax ? '3' : '1.5'}
              opacity={isTechnologyActive || isClimax ? 1 : 0.4}
            />
          )}
          {/* Visibility grid cues along Technology pathway */}
          {hasTechnology && (
            <>
              <circle cx="470" cy="170" r={isTechnologyActive ? 3.5 : 2} fill="#87CEEB" opacity="0.9" />
              <circle cx="440" cy="205" r={isTechnologyActive ? 4 : 2} fill="#87CEEB" opacity="0.95" />
            </>
          )}
        </g>

        {/* 3. ACCOUNTABILITY CONDUIT (Bottom 90° to Core Port 3) */}
        <g className="transition-all duration-300">
          {hasAccountability && (
            <path
              d="M 360 415 L 360 340"
              stroke="#87CEEB"
              strokeWidth={isAccountabilityActive || isClimax ? '3' : '1.5'}
              opacity={isAccountabilityActive || isClimax ? 1 : 0.4}
            />
          )}
          {/* Checkpoint cadence nodes along Accountability pathway */}
          {hasAccountability && (
            <>
              <circle cx="360" cy="385" r={isAccountabilityActive ? 3.5 : 2} fill="#87CEEB" opacity="0.9" />
              <circle cx="360" cy="355" r={isAccountabilityActive ? 4 : 2} fill="#87CEEB" opacity="0.95" />
            </>
          )}
        </g>

        {/* ------------------------------------------------------------- */}
        {/* CENTRAL CORE: SALES PERFORMANCE ENGINE                        */}
        {/* ------------------------------------------------------------- */}
        <g className="transition-all duration-300">
          {/* Core Ambient Radiance */}
          <circle
            cx="360"
            cy="270"
            r="84"
            fill="#123B63"
            opacity={isClimax ? 0.6 : 0.3}
            className="transition-opacity duration-300"
          />

          {/* Central Keystone Disc */}
          <circle
            cx="360"
            cy="270"
            r="70"
            fill={`url(#${gradCoreId})`}
            stroke="#87CEEB"
            strokeWidth={isClimax ? '2.5' : '1.5'}
            className="transition-all duration-300"
          />

          {/* Core Inner Guide Ring */}
          <circle
            cx="360"
            cy="270"
            r="58"
            stroke="#87CEEB"
            strokeWidth="0.75"
            strokeDasharray="2 2"
            opacity="0.5"
          />

          {/* Three Port Receptor Nodes on Core Edge */}
          {/* Port 1: Training (210°) */}
          <circle
            cx="300"
            cy="235"
            r={hasTraining ? 4.5 : 3}
            fill={hasTraining ? '#87CEEB' : '#0B1F33'}
            stroke="#87CEEB"
            strokeWidth="1.5"
          />
          {/* Port 2: Technology (330°) */}
          <circle
            cx="420"
            cy="235"
            r={hasTechnology ? 4.5 : 3}
            fill={hasTechnology ? '#87CEEB' : '#0B1F33'}
            stroke="#87CEEB"
            strokeWidth="1.5"
          />
          {/* Port 3: Accountability (90°) */}
          <circle
            cx="360"
            cy="340"
            r={hasAccountability ? 4.5 : 3}
            fill={hasAccountability ? '#87CEEB' : '#0B1F33'}
            stroke="#87CEEB"
            strokeWidth="1.5"
          />

          {/* Core Typography */}
          <text
            x="360"
            y="248"
            textAnchor="middle"
            fill="#87CEEB"
            fontSize="8"
            fontWeight="800"
            letterSpacing="1.4"
          >
            {isClimax ? 'INTEGRATED ENGINE' : 'SALES PERFORMANCE'}
          </text>
          <text
            x="360"
            y="268"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="12.5"
            fontWeight="800"
            letterSpacing="0.8"
          >
            SALES PERFORMANCE
          </text>
          <text
            x="360"
            y="285"
            textAnchor="middle"
            fill={isClimax ? '#87CEEB' : '#FFFFFF'}
            fontSize="12"
            fontWeight="800"
            letterSpacing="1.2"
          >
            ENGINE
          </text>
          <text
            x="360"
            y="302"
            textAnchor="middle"
            fill="#87CEEB"
            fontSize="7"
            fontWeight="600"
            letterSpacing="0.5"
            opacity="0.9"
          >
            Training • Technology • Accountability
          </text>
        </g>

        {/* ------------------------------------------------------------- */}
        {/* THREE PERIPHERAL PILLAR NODES                                */}
        {/* ------------------------------------------------------------- */}

        {/* PILLAR 01: TRAINING (Top-Left) */}
        <g
          tabIndex={0}
          role="button"
          aria-label="01 Training: Develop skills, mindset, communication, and sales capabilities"
          aria-pressed={isTrainingActive}
          onClick={() => onSelectStage?.(1)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onSelectStage?.(1);
            }
          }}
          className={clsx(
            'cursor-pointer outline-none transition-all duration-300',
            hasTraining ? 'opacity-100' : 'opacity-40 hover:opacity-70'
          )}
        >
          {/* Card Contour */}
          <rect
            x="60"
            y="86"
            width="220"
            height="66"
            rx="12"
            fill={isTrainingActive ? `url(#${gradActivePillarId})` : '#0B1F33'}
            stroke={isTrainingActive || isClimax ? '#87CEEB' : 'rgba(255,255,255,0.2)'}
            strokeWidth={isTrainingActive ? '2' : '1'}
          />
          {/* Number Pill */}
          <rect
            x="74"
            y="98"
            width="26"
            height="22"
            rx="6"
            fill={isTrainingActive ? '#87CEEB' : 'rgba(255,255,255,0.1)'}
          />
          <text
            x="87"
            y="113"
            textAnchor="middle"
            fill={isTrainingActive ? '#0B1F33' : '#FFFFFF'}
            fontSize="10"
            fontWeight="800"
          >
            01
          </text>
          {/* Title */}
          <text x="110" y="112" fill="#FFFFFF" fontSize="11" fontWeight="800" letterSpacing="0.4">
            TRAINING
          </text>
          {/* Concept Tag */}
          <text x="210" y="112" fill="#87CEEB" fontSize="8" fontWeight="600" letterSpacing="0.6">
            CAPABILITY
          </text>
          {/* 4 Strategic Dimensions */}
          <text x="74" y="138" fill="rgba(255,255,255,0.85)" fontSize="7.5" fontWeight="500">
            Skills • Mindset • Communication • Capability
          </text>
        </g>

        {/* PILLAR 02: TECHNOLOGY (Top-Right) */}
        <g
          tabIndex={0}
          role="button"
          aria-label="02 Technology: Visibility, tracking, coordination, and execution support"
          aria-pressed={isTechnologyActive}
          onClick={() => onSelectStage?.(2)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onSelectStage?.(2);
            }
          }}
          className={clsx(
            'cursor-pointer outline-none transition-all duration-300',
            hasTechnology ? 'opacity-100' : 'opacity-40 hover:opacity-70'
          )}
        >
          {/* Card Contour */}
          <rect
            x="440"
            y="86"
            width="220"
            height="66"
            rx="12"
            fill={isTechnologyActive ? `url(#${gradActivePillarId})` : '#0B1F33'}
            stroke={isTechnologyActive || isClimax ? '#87CEEB' : 'rgba(255,255,255,0.2)'}
            strokeWidth={isTechnologyActive ? '2' : '1'}
          />
          {/* Number Pill */}
          <rect
            x="454"
            y="98"
            width="26"
            height="22"
            rx="6"
            fill={isTechnologyActive ? '#87CEEB' : 'rgba(255,255,255,0.1)'}
          />
          <text
            x="467"
            y="113"
            textAnchor="middle"
            fill={isTechnologyActive ? '#0B1F33' : '#FFFFFF'}
            fontSize="10"
            fontWeight="800"
          >
            02
          </text>
          {/* Title */}
          <text x="490" y="112" fill="#FFFFFF" fontSize="11" fontWeight="800" letterSpacing="0.4">
            TECHNOLOGY
          </text>
          {/* Concept Tag */}
          <text x="590" y="112" fill="#87CEEB" fontSize="8" fontWeight="600" letterSpacing="0.6">
            VISIBILITY
          </text>
          {/* 4 Strategic Dimensions */}
          <text x="454" y="138" fill="rgba(255,255,255,0.85)" fontSize="7.5" fontWeight="500">
            Visibility • Tracking • Coordination • Support
          </text>
        </g>

        {/* PILLAR 03: ACCOUNTABILITY (Bottom-Center) */}
        <g
          tabIndex={0}
          role="button"
          aria-label="03 Accountability: Reviews, commitments, follow-through, and performance discussions"
          aria-pressed={isAccountabilityActive}
          onClick={() => onSelectStage?.(3)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onSelectStage?.(3);
            }
          }}
          className={clsx(
            'cursor-pointer outline-none transition-all duration-300',
            hasAccountability ? 'opacity-100' : 'opacity-40 hover:opacity-70'
          )}
        >
          {/* Card Contour */}
          <rect
            x="250"
            y="410"
            width="220"
            height="66"
            rx="12"
            fill={isAccountabilityActive ? `url(#${gradActivePillarId})` : '#0B1F33'}
            stroke={isAccountabilityActive || isClimax ? '#87CEEB' : 'rgba(255,255,255,0.2)'}
            strokeWidth={isAccountabilityActive ? '2' : '1'}
          />
          {/* Number Pill */}
          <rect
            x="264"
            y="422"
            width="26"
            height="22"
            rx="6"
            fill={isAccountabilityActive ? '#87CEEB' : 'rgba(255,255,255,0.1)'}
          />
          <text
            x="277"
            y="437"
            textAnchor="middle"
            fill={isAccountabilityActive ? '#0B1F33' : '#FFFFFF'}
            fontSize="10"
            fontWeight="800"
          >
            03
          </text>
          {/* Title */}
          <text x="300" y="436" fill="#FFFFFF" fontSize="11" fontWeight="800" letterSpacing="0.4">
            ACCOUNTABILITY
          </text>
          {/* Concept Tag */}
          <text x="408" y="436" fill="#87CEEB" fontSize="8" fontWeight="600" letterSpacing="0.6">
            FOLLOW-THROUGH
          </text>
          {/* 4 Strategic Dimensions */}
          <text x="264" y="462" fill="rgba(255,255,255,0.85)" fontSize="7.5" fontWeight="500">
            Reviews • Commitments • Follow-Through • Discussions
          </text>
        </g>
      </svg>

      {/* Editorial Footnote */}
      <div className="w-full text-center mt-2 px-4">
        <p className="text-[11px] text-white/50 font-sans leading-relaxed">
          {isClimax
            ? 'Training builds capability • Technology supports execution • Accountability strengthens follow-through.'
            : 'Three complementary elements forming the Sales Performance Engine.'}
        </p>
      </div>
    </div>
  );
};
