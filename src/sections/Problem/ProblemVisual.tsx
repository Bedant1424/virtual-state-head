import React from 'react';
import { clsx } from 'clsx';

export type VisualStateType =
  | 'busy'
  | 'misaligned'
  | 'inconsistent'
  | 'unaccounted'
  | 'missed-opportunities'
  | 'leadership-gap'
  | 'recognition';

export interface ProblemVisualProps {
  activeState: VisualStateType;
  className?: string;
  isCompact?: boolean;
}

/**
 * ProblemVisual
 * Conceptual Sales-System Visualization Diagram
 *
 * Visualizes systems thinking & strategic sales dynamics:
 * - Nodes: Team members, Opportunities, Target Goals, Founder/Leadership Hub
 * - Pathways: Deal pipelines, Follow-up streams, Review checkpoints
 * - Vectors: Strategic direction and alignment trajectories
 *
 * Pure conceptual visual metaphors — ZERO fake statistics, ZERO fake revenue figures.
 */
export const ProblemVisual: React.FC<ProblemVisualProps> = ({
  activeState,
  className,
  isCompact = false,
}) => {
  return (
    <div
      className={clsx(
        'relative w-full rounded-2xl bg-white border border-gray-200/90 shadow-sm overflow-hidden flex flex-col items-center justify-center p-4 sm:p-6 transition-all duration-500',
        activeState === 'recognition' ? 'border-deep-blue/40 bg-soft-blue/20' : '',
        className
      )}
      style={{ minHeight: isCompact ? '260px' : '380px' }}
      aria-hidden="true"
    >
      {/* Background Architectural Coordinate Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(#123B63_0.75px,transparent_0.75px)] [background-size:16px_16px]" />

      {/* Subtle Frame Corner Markers */}
      <div className="absolute top-3 left-3 w-2 h-2 border-t-2 border-l-2 border-deep-blue/30" />
      <div className="absolute top-3 right-3 w-2 h-2 border-t-2 border-r-2 border-deep-blue/30" />
      <div className="absolute bottom-3 left-3 w-2 h-2 border-b-2 border-l-2 border-deep-blue/30" />
      <div className="absolute bottom-3 right-3 w-2 h-2 border-b-2 border-r-2 border-deep-blue/30" />

      {/* System Status Eyebrow Tag */}
      <div className="absolute top-3 sm:top-4 left-4 sm:left-6 flex items-center gap-2 z-10">
        <span
          className={clsx(
            'w-2 h-2 rounded-full transition-colors duration-300',
            activeState === 'busy' && 'bg-sky-brand animate-pulse',
            activeState === 'misaligned' && 'bg-amber-500',
            activeState === 'inconsistent' && 'bg-amber-600',
            activeState === 'unaccounted' && 'bg-rose-500',
            activeState === 'missed-opportunities' && 'bg-rose-600',
            activeState === 'leadership-gap' && 'bg-deep-blue animate-pulse',
            activeState === 'recognition' && 'bg-deep-blue'
          )}
        />
        <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-muted font-semibold">
          {activeState === 'busy' && 'System Cadence: High Velocity Activity'}
          {activeState === 'misaligned' && 'Direction: Vector Divergence'}
          {activeState === 'inconsistent' && 'Execution: Asymmetric Conversion Rhythm'}
          {activeState === 'unaccounted' && 'Governance: Unanchored Review Commitments'}
          {activeState === 'missed-opportunities' && 'Pipeline: Unmonitored Follow-up Drift'}
          {activeState === 'leadership-gap' && 'Architecture: Central Founder Bottleneck'}
          {activeState === 'recognition' && 'System Insight: Activity ≠ Performance'}
        </span>
      </div>

      {/* Main SVG Vector Canvas */}
      <svg
        viewBox="0 0 600 400"
        className="w-full h-auto max-w-[560px] select-none transition-all duration-500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="pv-blueGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#123B63" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#87CEEB" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="pv-fadePath" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#123B63" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#6B7280" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="pv-strainGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#87CEEB" />
            <stop offset="100%" stopColor="#123B63" />
          </linearGradient>

          {/* Marker Arrows */}
          <marker
            id="pv-arrow"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="5"
            markerHeight="5"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 8 5 L 0 9 z" fill="#123B63" opacity="0.7" />
          </marker>
          <marker
            id="pv-arrow-divergent"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="5"
            markerHeight="5"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 8 5 L 0 9 z" fill="#D97706" opacity="0.8" />
          </marker>
        </defs>

        {/* ------------------------------------------------------------- */}
        {/* COMMON REFERENCE GUIDES: Strategic Target Axis */}
        {/* ------------------------------------------------------------- */}
        <g className="pv-target-axis opacity-40">
          <line
            x1="500"
            y1="60"
            x2="500"
            y2="340"
            stroke="#123B63"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <text
            x="500"
            y="48"
            textAnchor="middle"
            fill="#123B63"
            fontSize="10"
            fontFamily="monospace"
            fontWeight="bold"
            letterSpacing="1"
          >
            BUSINESS TARGET
          </text>
        </g>

        {/* Strategic Goal Node */}
        <g
          className={clsx(
            'transition-all duration-500',
            activeState === 'recognition' ? 'opacity-100 scale-105' : 'opacity-85'
          )}
        >
          <circle
            cx="500"
            cy="200"
            r="28"
            fill="#EAF5FB"
            stroke="#123B63"
            strokeWidth="2"
          />
          <circle
            cx="500"
            cy="200"
            r="16"
            fill="#123B63"
            className="transition-colors duration-500"
          />
          <circle cx="500" cy="200" r="6" fill="#87CEEB" />
          <text
            x="500"
            y="242"
            textAnchor="middle"
            fill="#123B63"
            fontSize="11"
            fontWeight="700"
          >
            Revenue Goal
          </text>
        </g>

        {/* ------------------------------------------------------------- */}
        {/* STATE 0: BUSY / HIGH SALES ACTIVITY                           */}
        {/* ------------------------------------------------------------- */}
        {activeState === 'busy' && (
          <g className="pv-state-busy animate-fadeIn">
            {/* Input Sales Source Nodes */}
            <circle cx="90" cy="110" r="14" fill="#EAF5FB" stroke="#123B63" strokeWidth="2" />
            <text x="90" y="114" textAnchor="middle" fill="#123B63" fontSize="9" fontWeight="bold">T1</text>
            <text x="90" y="88" textAnchor="middle" fill="#6B7280" fontSize="10">Calls & Leads</text>

            <circle cx="90" cy="200" r="14" fill="#EAF5FB" stroke="#123B63" strokeWidth="2" />
            <text x="90" y="204" textAnchor="middle" fill="#123B63" fontSize="9" fontWeight="bold">T2</text>
            <text x="90" y="178" textAnchor="middle" fill="#6B7280" fontSize="10">Field Meetings</text>

            <circle cx="90" cy="290" r="14" fill="#EAF5FB" stroke="#123B63" strokeWidth="2" />
            <text x="90" y="294" textAnchor="middle" fill="#123B63" fontSize="9" fontWeight="bold">T3</text>
            <text x="90" y="322" textAnchor="middle" fill="#6B7280" fontSize="10">Follow-up Activity</text>

            {/* Busy Pipelines flowing towards target */}
            <path
              d="M 104 110 C 220 110, 320 180, 472 195"
              stroke="#123B63"
              strokeWidth="2.5"
              strokeDasharray="6 4"
              className="animate-pulse"
            />
            <path
              d="M 104 200 C 240 200, 340 200, 472 200"
              stroke="#87CEEB"
              strokeWidth="3"
            />
            <path
              d="M 104 290 C 220 290, 320 220, 472 205"
              stroke="#123B63"
              strokeWidth="2.5"
              strokeDasharray="6 4"
              className="animate-pulse"
            />

            {/* Active Mid-Stream Nodes */}
            <circle cx="230" cy="135" r="9" fill="#87CEEB" stroke="#123B63" strokeWidth="1.5" />
            <circle cx="340" cy="180" r="9" fill="#EAF5FB" stroke="#123B63" strokeWidth="1.5" />
            <circle cx="210" cy="200" r="10" fill="#123B63" />
            <circle cx="320" cy="200" r="10" fill="#87CEEB" />
            <circle cx="230" cy="265" r="9" fill="#87CEEB" stroke="#123B63" strokeWidth="1.5" />
            <circle cx="340" cy="220" r="9" fill="#EAF5FB" stroke="#123B63" strokeWidth="1.5" />

            {/* High Activity Signal Badges */}
            <rect x="255" y="70" width="120" height="26" rx="6" fill="#F3F5F7" stroke="#123B63" strokeWidth="1" strokeDasharray="3 3" />
            <text x="315" y="87" textAnchor="middle" fill="#123B63" fontSize="10" fontWeight="bold">
              High Daily Velocity
            </text>

            <rect x="245" y="315" width="140" height="26" rx="6" fill="#F3F5F7" stroke="#123B63" strokeWidth="1" strokeDasharray="3 3" />
            <text x="315" y="332" textAnchor="middle" fill="#123B63" fontSize="10" fontWeight="bold">
              Multiple Moving Targets
            </text>
          </g>
        )}

        {/* ------------------------------------------------------------- */}
        {/* STATE 1: 01 - SALES WITHOUT CLEAR DIRECTION (Misaligned)      */}
        {/* ------------------------------------------------------------- */}
        {activeState === 'misaligned' && (
          <g className="pv-state-misaligned animate-fadeIn">
            {/* Input Nodes */}
            <circle cx="90" cy="110" r="14" fill="#EAF5FB" stroke="#123B63" strokeWidth="2" />
            <text x="90" y="114" textAnchor="middle" fill="#123B63" fontSize="9" fontWeight="bold">T1</text>

            <circle cx="90" cy="200" r="14" fill="#EAF5FB" stroke="#123B63" strokeWidth="2" />
            <text x="90" y="204" textAnchor="middle" fill="#123B63" fontSize="9" fontWeight="bold">T2</text>

            <circle cx="90" cy="290" r="14" fill="#EAF5FB" stroke="#123B63" strokeWidth="2" />
            <text x="90" y="294" textAnchor="middle" fill="#123B63" fontSize="9" fontWeight="bold">T3</text>

            {/* Divergent Paths (Pointing away from Target) */}
            <path
              d="M 104 110 C 200 95, 290 50, 420 40"
              stroke="#D97706"
              strokeWidth="2.5"
              markerEnd="url(#pv-arrow-divergent)"
            />
            <path
              d="M 104 200 C 230 190, 310 130, 430 120"
              stroke="#D97706"
              strokeWidth="2"
              strokeDasharray="4 4"
              markerEnd="url(#pv-arrow-divergent)"
            />
            <path
              d="M 104 290 C 220 310, 310 360, 420 370"
              stroke="#D97706"
              strokeWidth="2.5"
              markerEnd="url(#pv-arrow-divergent)"
            />

            {/* Weakened True Target Link */}
            <path
              d="M 230 200 L 472 200"
              stroke="#6B7280"
              strokeWidth="1.5"
              strokeDasharray="3 6"
              opacity="0.4"
            />

            {/* Divergence Annotation Markers */}
            <g transform="translate(360, 65)">
              <rect x="0" y="0" width="130" height="24" rx="4" fill="#FEF3C7" stroke="#D97706" strokeWidth="1" />
              <text x="65" y="16" textAnchor="middle" fill="#92400E" fontSize="9" fontWeight="bold">
                Uncoordinated Territory
              </text>
            </g>

            <g transform="translate(340, 325)">
              <rect x="0" y="0" width="140" height="24" rx="4" fill="#FEF3C7" stroke="#D97706" strokeWidth="1" />
              <text x="70" y="16" textAnchor="middle" fill="#92400E" fontSize="9" fontWeight="bold">
                Conflicting Deal Priorities
              </text>
            </g>
          </g>
        )}

        {/* ------------------------------------------------------------- */}
        {/* STATE 2: 02 - INCONSISTENT SALES PERFORMANCE (Asymmetric)     */}
        {/* ------------------------------------------------------------- */}
        {activeState === 'inconsistent' && (
          <g className="pv-state-inconsistent animate-fadeIn">
            {/* Input Nodes */}
            <circle cx="90" cy="110" r="14" fill="#EAF5FB" stroke="#6B7280" strokeWidth="1.5" opacity="0.6" />
            <text x="90" y="114" textAnchor="middle" fill="#6B7280" fontSize="9">T1</text>
            <text x="90" y="88" textAnchor="middle" fill="#9CA3AF" fontSize="9">Off Month</text>

            {/* The Lone Advancing Path (Single Individual Reliance) */}
            <circle cx="90" cy="200" r="16" fill="#123B63" stroke="#87CEEB" strokeWidth="2.5" />
            <text x="90" y="204" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold">T2</text>
            <text x="90" y="174" textAnchor="middle" fill="#123B63" fontSize="10" fontWeight="bold">Single Active Stream</text>

            <circle cx="90" cy="290" r="14" fill="#EAF5FB" stroke="#6B7280" strokeWidth="1.5" opacity="0.6" />
            <text x="90" y="294" textAnchor="middle" fill="#6B7280" fontSize="9">T3</text>
            <text x="90" y="322" textAnchor="middle" fill="#9CA3AF" fontSize="9">Stalled Pipeline</text>

            {/* Broken / Stalled Paths */}
            <path
              d="M 104 110 L 220 125"
              stroke="#DC2626"
              strokeWidth="2"
              strokeDasharray="4 4"
              opacity="0.6"
            />
            <circle cx="220" cy="125" r="4" fill="#DC2626" />
            <line x1="216" y1="121" x2="224" y2="129" stroke="#FFFFFF" strokeWidth="1.5" />
            <line x1="224" y1="121" x2="216" y2="129" stroke="#FFFFFF" strokeWidth="1.5" />

            {/* Lone Successful Pipeline Path */}
            <path
              d="M 106 200 L 472 200"
              stroke="#123B63"
              strokeWidth="3.5"
            />
            <circle cx="280" cy="200" r="8" fill="#87CEEB" stroke="#123B63" strokeWidth="2" />
            <circle cx="380" cy="200" r="8" fill="#87CEEB" stroke="#123B63" strokeWidth="2" />

            <path
              d="M 104 290 L 190 280"
              stroke="#DC2626"
              strokeWidth="2"
              strokeDasharray="4 4"
              opacity="0.6"
            />
            <circle cx="190" cy="280" r="4" fill="#DC2626" />

            {/* Inconsistency Wave Bracket */}
            <g transform="translate(240, 260)">
              <rect x="0" y="0" width="190" height="26" rx="5" fill="#F3F5F7" stroke="#DC2626" strokeWidth="1" />
              <text x="95" y="17" textAnchor="middle" fill="#991B1B" fontSize="9" fontWeight="bold">
                Unrepeatable Individual Spikes
              </text>
            </g>
          </g>
        )}

        {/* ------------------------------------------------------------- */}
        {/* STATE 3: 03 - WEAK ACCOUNTABILITY (Unaccounted)               */}
        {/* ------------------------------------------------------------- */}
        {activeState === 'unaccounted' && (
          <g className="pv-state-unaccounted animate-fadeIn">
            {/* Input Nodes */}
            <circle cx="90" cy="130" r="14" fill="#EAF5FB" stroke="#123B63" strokeWidth="2" />
            <text x="90" y="134" textAnchor="middle" fill="#123B63" fontSize="9" fontWeight="bold">T1</text>
            <circle cx="90" cy="270" r="14" fill="#EAF5FB" stroke="#123B63" strokeWidth="2" />
            <text x="90" y="274" textAnchor="middle" fill="#123B63" fontSize="9" fontWeight="bold">T2</text>

            {/* Unconnected Cadence / Review Checkpoints (Floating) */}
            <g transform="translate(200, 110)">
              <rect x="0" y="0" width="48" height="32" rx="4" fill="#FFFFFF" stroke="#E11D48" strokeWidth="1.5" strokeDasharray="3 3" />
              <text x="24" y="20" textAnchor="middle" fill="#E11D48" fontSize="8" fontWeight="bold">WEEK 1?</text>
            </g>
            <g transform="translate(310, 150)">
              <rect x="0" y="0" width="48" height="32" rx="4" fill="#FFFFFF" stroke="#E11D48" strokeWidth="1.5" strokeDasharray="3 3" />
              <text x="24" y="20" textAnchor="middle" fill="#E11D48" fontSize="8" fontWeight="bold">NO REVIEW</text>
            </g>
            <g transform="translate(220, 250)">
              <rect x="0" y="0" width="56" height="32" rx="4" fill="#FFFFFF" stroke="#E11D48" strokeWidth="1.5" strokeDasharray="3 3" />
              <text x="28" y="20" textAnchor="middle" fill="#E11D48" fontSize="8" fontWeight="bold">UNOWNED</text>
            </g>

            {/* Disconnected Commitment Lines */}
            <path d="M 104 130 L 200 126" stroke="#6B7280" strokeWidth="1.5" strokeDasharray="4 4" />
            <path d="M 248 126 L 310 166" stroke="#E11D48" strokeWidth="1.5" strokeDasharray="2 4" />
            <path d="M 358 166 L 472 195" stroke="#E11D48" strokeWidth="1.5" strokeDasharray="2 5" opacity="0.4" />

            <path d="M 104 270 L 220 266" stroke="#6B7280" strokeWidth="1.5" strokeDasharray="4 4" />
            <path d="M 276 266 L 410 240" stroke="#E11D48" strokeWidth="1.5" strokeDasharray="2 4" />

            <g transform="translate(210, 60)">
              <rect x="0" y="0" width="180" height="26" rx="5" fill="#FFE4E6" stroke="#E11D48" strokeWidth="1" />
              <text x="90" y="17" textAnchor="middle" fill="#9F1239" fontSize="9" fontWeight="bold">
                Targets Set Without Review Cadence
              </text>
            </g>
          </g>
        )}

        {/* ------------------------------------------------------------- */}
        {/* STATE 4: 04 - MISSED OPPORTUNITIES                            */}
        {/* ------------------------------------------------------------- */}
        {activeState === 'missed-opportunities' && (
          <g className="pv-state-missed animate-fadeIn">
            {/* Input Node */}
            <circle cx="90" cy="200" r="16" fill="#EAF5FB" stroke="#123B63" strokeWidth="2" />
            <text x="90" y="204" textAnchor="middle" fill="#123B63" fontSize="9" fontWeight="bold">LEADS</text>

            {/* Drifting, Drop-off Paths */}
            <path
              d="M 106 195 C 190 170, 240 100, 310 80"
              stroke="#EA580C"
              strokeWidth="2"
              strokeDasharray="4 3"
            />
            <circle cx="310" cy="80" r="7" fill="#FFF7ED" stroke="#EA580C" strokeWidth="2" />
            <text x="325" y="84" fill="#9A3412" fontSize="9" fontWeight="600">Dropped Inactive</text>

            <path
              d="M 106 200 C 210 200, 270 200, 340 200"
              stroke="#EA580C"
              strokeWidth="2"
              strokeDasharray="4 3"
            />
            <circle cx="340" cy="200" r="7" fill="#FFF7ED" stroke="#EA580C" strokeWidth="2" />
            <text x="355" y="204" fill="#9A3412" fontSize="9" fontWeight="600">Unanswered Follow-up</text>

            <path
              d="M 106 205 C 190 230, 240 300, 300 320"
              stroke="#EA580C"
              strokeWidth="2"
              strokeDasharray="4 3"
            />
            <circle cx="300" cy="320" r="7" fill="#FFF7ED" stroke="#EA580C" strokeWidth="2" />
            <text x="315" y="324" fill="#9A3412" fontSize="9" fontWeight="600">Stalled Negotiation</text>

            {/* Unreached Target Gap */}
            <path
              d="M 360 200 L 472 200"
              stroke="#9CA3AF"
              strokeWidth="1.5"
              strokeDasharray="3 6"
              opacity="0.3"
            />

            <g transform="translate(180, 250)">
              <rect x="0" y="0" width="180" height="26" rx="5" fill="#FFEDD5" stroke="#EA580C" strokeWidth="1" />
              <text x="90" y="17" textAnchor="middle" fill="#C2410C" fontSize="9" fontWeight="bold">
                Incomplete Pipeline Cycles
              </text>
            </g>
          </g>
        )}

        {/* ------------------------------------------------------------- */}
        {/* STATE 5: 05 - LEADERSHIP GAPS (Central Owner Bottleneck)      */}
        {/* ------------------------------------------------------------- */}
        {activeState === 'leadership-gap' && (
          <g className="pv-state-leadership animate-fadeIn">
            {/* Central Founder / Leadership Hub */}
            <circle cx="300" cy="200" r="38" fill="#0B1F33" stroke="#87CEEB" strokeWidth="3" className="animate-pulse" />
            <circle cx="300" cy="200" r="24" fill="#123B63" />
            <text x="300" y="196" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">BUSINESS</text>
            <text x="300" y="209" textAnchor="middle" fill="#87CEEB" fontSize="9" fontWeight="bold">OWNER</text>

            {/* Multiple Streams Converging Onto Owner */}
            {/* 1. Strategy & Planning */}
            <path d="M 120 70 L 265 175" stroke="#123B63" strokeWidth="2.5" markerEnd="url(#pv-arrow)" />
            <rect x="70" y="55" width="90" height="22" rx="4" fill="#F3F5F7" stroke="#123B63" strokeWidth="1" />
            <text x="115" y="70" textAnchor="middle" fill="#123B63" fontSize="8" fontWeight="bold">Sales Strategy</text>

            {/* 2. Team Coaching & Performance */}
            <path d="M 100 200 L 260 200" stroke="#123B63" strokeWidth="2.5" markerEnd="url(#pv-arrow)" />
            <rect x="50" y="188" width="90" height="22" rx="4" fill="#F3F5F7" stroke="#123B63" strokeWidth="1" />
            <text x="95" y="203" textAnchor="middle" fill="#123B63" fontSize="8" fontWeight="bold">Team Firefighting</text>

            {/* 3. Daily Operations */}
            <path d="M 120 330 L 265 225" stroke="#123B63" strokeWidth="2.5" markerEnd="url(#pv-arrow)" />
            <rect x="65" y="320" width="100" height="22" rx="4" fill="#F3F5F7" stroke="#123B63" strokeWidth="1" />
            <text x="115" y="335" textAnchor="middle" fill="#123B63" fontSize="8" fontWeight="bold">Daily Operations</text>

            {/* 4. Key Customer Relations */}
            <path d="M 400 90 L 335 170" stroke="#123B63" strokeWidth="2.5" markerEnd="url(#pv-arrow)" />
            <rect x="360" y="75" width="110" height="22" rx="4" fill="#F3F5F7" stroke="#123B63" strokeWidth="1" />
            <text x="415" y="90" textAnchor="middle" fill="#123B63" fontSize="8" fontWeight="bold">Customer Demands</text>

            {/* Single Strained Link to Ultimate Goal */}
            <path d="M 338 200 L 472 200" stroke="#123B63" strokeWidth="2" strokeDasharray="3 3" />

            <g transform="translate(200, 310)">
              <rect x="0" y="0" width="200" height="26" rx="5" fill="#EAF5FB" stroke="#123B63" strokeWidth="1.5" />
              <text x="100" y="17" textAnchor="middle" fill="#123B63" fontSize="9" fontWeight="bold">
                Founder Carries All Execution Friction
              </text>
            </g>
          </g>
        )}

        {/* ------------------------------------------------------------- */}
        {/* STATE 6: RECOGNITION (Activity ≠ Performance)                 */}
        {/* ------------------------------------------------------------- */}
        {activeState === 'recognition' && (
          <g className="pv-state-recognition animate-fadeIn">
            {/* Organized Clean Matrix Architecture */}
            <rect
              x="60"
              y="110"
              width="150"
              height="180"
              rx="12"
              fill="#FFFFFF"
              stroke="#6B7280"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            <text x="135" y="135" textAnchor="middle" fill="#6B7280" fontSize="10" fontWeight="bold">
              RAW EFFORT
            </text>
            <circle cx="135" cy="170" r="14" fill="#F3F5F7" stroke="#6B7280" strokeWidth="1.5" />
            <text x="135" y="174" textAnchor="middle" fill="#6B7280" fontSize="8" fontWeight="bold">Calls</text>
            <circle cx="105" cy="225" r="14" fill="#F3F5F7" stroke="#6B7280" strokeWidth="1.5" />
            <text x="105" y="229" textAnchor="middle" fill="#6B7280" fontSize="8" fontWeight="bold">Targets</text>
            <circle cx="165" cy="225" r="14" fill="#F3F5F7" stroke="#6B7280" strokeWidth="1.5" />
            <text x="165" y="229" textAnchor="middle" fill="#6B7280" fontSize="8" fontWeight="bold">Reps</text>
            <text x="135" y="270" textAnchor="middle" fill="#6B7280" fontSize="9" fontWeight="600">
              Activity Only
            </text>

            {/* Central Mathematical Disconnect: ≠ */}
            <g transform="translate(245, 175)">
              <rect x="0" y="0" width="55" height="50" rx="8" fill="#123B63" />
              <text x="27" y="34" textAnchor="middle" fill="#87CEEB" fontSize="24" fontWeight="extrabold">
                ≠
              </text>
            </g>

            {/* Structured System Architecture on Right */}
            <rect
              x="330"
              y="110"
              width="145"
              height="180"
              rx="12"
              fill="#EAF5FB"
              stroke="#123B63"
              strokeWidth="2"
            />
            <text x="402" y="135" textAnchor="middle" fill="#123B63" fontSize="10" fontWeight="bold">
              STRUCTURED SYSTEM
            </text>

            <rect x="345" y="155" width="115" height="24" rx="4" fill="#FFFFFF" stroke="#87CEEB" strokeWidth="1" />
            <text x="402" y="171" textAnchor="middle" fill="#123B63" fontSize="8" fontWeight="bold">
              • Strategic Direction
            </text>

            <rect x="345" y="188" width="115" height="24" rx="4" fill="#FFFFFF" stroke="#87CEEB" strokeWidth="1" />
            <text x="402" y="204" textAnchor="middle" fill="#123B63" fontSize="8" fontWeight="bold">
              • Capability & Tools
            </text>

            <rect x="345" y="221" width="115" height="24" rx="4" fill="#FFFFFF" stroke="#87CEEB" strokeWidth="1" />
            <text x="402" y="237" textAnchor="middle" fill="#123B63" fontSize="8" fontWeight="bold">
              • Weekly Governance
            </text>

            <text x="402" y="270" textAnchor="middle" fill="#123B63" fontSize="9" fontWeight="bold">
              = Performance Focus
            </text>

            {/* Direct Connect to Ultimate Goal */}
            <path d="M 475 200 L 500 200" stroke="#123B63" strokeWidth="3" />
          </g>
        )}
      </svg>
    </div>
  );
};
