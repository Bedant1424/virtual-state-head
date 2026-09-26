import React from 'react';
import { clsx } from 'clsx';

export type FocusKey =
  | 'strategy'
  | 'team'
  | 'leadership'
  | 'accountability'
  | 'execution'
  | 'discussions'
  | null;

export interface LeadershipLayerVisualProps {
  activeFocus: FocusKey;
  onFocusChange?: (key: FocusKey) => void;
  className?: string;
  isCompact?: boolean;
}

/**
 * LeadershipLayerVisual
 * Conceptual Systems Visualization: The Leadership Layer
 *
 * Visualizes how Experienced Sales Leadership creates structure,
 * alignment, execution discipline, and performance reviews around
 * existing sales team activity.
 *
 * Grounded strictly in approved source concepts.
 */
export const LeadershipLayerVisual: React.FC<LeadershipLayerVisualProps> = ({
  activeFocus,
  onFocusChange,
  className,
  isCompact = false,
}) => {
  return (
    <div
      className={clsx(
        'relative w-full rounded-2xl bg-white border border-gray-200/90 shadow-sm overflow-hidden flex flex-col items-center justify-center p-4 sm:p-6 transition-all duration-300',
        className
      )}
      style={{ minHeight: isCompact ? '280px' : '460px' }}
      aria-hidden="true"
    >
      {/* Light Structured Background Coordinate Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(#123B63_0.75px,transparent_0.75px)] [background-size:16px_16px]" />

      {/* Frame Corner Accents */}
      <div className="absolute top-3 left-3 w-2 h-2 border-t-2 border-l-2 border-deep-blue/30" />
      <div className="absolute top-3 right-3 w-2 h-2 border-t-2 border-r-2 border-deep-blue/30" />
      <div className="absolute bottom-3 left-3 w-2 h-2 border-b-2 border-l-2 border-deep-blue/30" />
      <div className="absolute bottom-3 right-3 w-2 h-2 border-b-2 border-r-2 border-deep-blue/30" />

      {/* Visual Status Indicator */}
      <div className="absolute top-3 sm:top-4 left-4 sm:left-6 flex items-center gap-2 z-10">
        <span className="w-2 h-2 rounded-full bg-deep-blue animate-pulse" />
        <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-deep-blue font-bold">
          System State: Structured Alignment
        </span>
      </div>

      {/* Active Focus Indicator */}
      {activeFocus && (
        <div className="absolute top-3 sm:top-4 right-4 sm:right-6 hidden sm:flex items-center gap-1.5 z-10 px-2 py-0.5 rounded bg-soft-blue border border-sky-brand/40 text-[10px] font-mono font-bold text-deep-blue">
          <span>Active Pathway:</span>
          <span className="uppercase text-sky-brand bg-deep-blue px-1.5 py-0.2 rounded">
            {activeFocus}
          </span>
        </div>
      )}

      {/* Main SVG Vector Canvas */}
      <svg
        viewBox="0 0 640 440"
        className="w-full h-auto max-w-[580px] select-none transition-all duration-300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="ll-gradHeader" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#123B63" />
            <stop offset="100%" stopColor="#0B1F33" />
          </linearGradient>
          <linearGradient id="ll-gradActive" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#87CEEB" />
            <stop offset="100%" stopColor="#123B63" />
          </linearGradient>
        </defs>

        {/* ------------------------------------------------------------- */}
        {/* LEVEL 1: BUSINESS / SALES FUNCTION (Top Anchor)               */}
        {/* ------------------------------------------------------------- */}
        <g className="transition-all duration-300">
          <rect
            x="210"
            y="28"
            width="220"
            height="38"
            rx="8"
            fill="#F3F5F7"
            stroke="#123B63"
            strokeWidth="1.5"
          />
          <text
            x="320"
            y="52"
            textAnchor="middle"
            fill="#123B63"
            fontSize="12"
            fontWeight="800"
            letterSpacing="0.5"
          >
            BUSINESS &amp; SALES FUNCTION
          </text>

          {/* Central Feed Downward Line */}
          <line
            x1="320"
            y1="66"
            x2="320"
            y2="100"
            stroke="#123B63"
            strokeWidth="2"
            strokeDasharray="3 3"
          />
        </g>

        {/* ------------------------------------------------------------- */}
        {/* LEVEL 2: EXPERIENCED SALES LEADERSHIP (Central Layer)         */}
        {/* ------------------------------------------------------------- */}
        <g className="transition-all duration-300">
          {/* Main Leadership Layer Band */}
          <rect
            x="80"
            y="100"
            width="480"
            height="56"
            rx="12"
            fill="url(#ll-gradHeader)"
            stroke="#87CEEB"
            strokeWidth="2"
            className="shadow-sm"
          />

          {/* Label inside the layer */}
          <text
            x="320"
            y="126"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="13"
            fontWeight="800"
            letterSpacing="0.8"
          >
            EXPERIENCED SALES LEADERSHIP
          </text>
          <text
            x="320"
            y="144"
            textAnchor="middle"
            fill="#87CEEB"
            fontSize="10"
            fontFamily="monospace"
            letterSpacing="1.2"
          >
            STRATEGY • DIRECTION • EXECUTION • REVIEWS
          </text>

          {/* Decorative Corner Signal Dots on Layer */}
          <circle cx="98" cy="128" r="4" fill="#87CEEB" />
          <circle cx="542" cy="128" r="4" fill="#87CEEB" />
        </g>

        {/* ------------------------------------------------------------- */}
        {/* LEVEL 3: 5 INTEGRATED DISCIPLINE STREAMS                       */}
        {/* ------------------------------------------------------------- */}
        {/* Pathway 1: Strategy & Direction */}
        <g
          className={clsx(
            'cursor-pointer transition-all duration-300',
            activeFocus === 'strategy' ? 'opacity-100 scale-102' : activeFocus ? 'opacity-40' : 'opacity-85'
          )}
          onClick={() => onFocusChange?.('strategy')}
        >
          <line
            x1="130"
            y1="156"
            x2="130"
            y2="230"
            stroke={activeFocus === 'strategy' ? '#123B63' : '#123B63'}
            strokeWidth={activeFocus === 'strategy' ? '3' : '2'}
          />
          <rect
            x="75"
            y="230"
            width="110"
            height="46"
            rx="8"
            fill={activeFocus === 'strategy' ? '#EAF5FB' : '#FFFFFF'}
            stroke="#123B63"
            strokeWidth={activeFocus === 'strategy' ? '2' : '1.5'}
          />
          <text x="130" y="250" textAnchor="middle" fill="#123B63" fontSize="10" fontWeight="bold">
            Sales Strategy
          </text>
          <text x="130" y="264" textAnchor="middle" fill="#6B7280" fontSize="8">
            Clear Direction
          </text>
        </g>

        {/* Pathway 2: Team Development */}
        <g
          className={clsx(
            'cursor-pointer transition-all duration-300',
            activeFocus === 'team' ? 'opacity-100 scale-102' : activeFocus ? 'opacity-40' : 'opacity-85'
          )}
          onClick={() => onFocusChange?.('team')}
        >
          <line
            x1="225"
            y1="156"
            x2="225"
            y2="230"
            stroke="#123B63"
            strokeWidth={activeFocus === 'team' ? '3' : '2'}
          />
          <rect
            x="170"
            y="230"
            width="110"
            height="46"
            rx="8"
            fill={activeFocus === 'team' ? '#EAF5FB' : '#FFFFFF'}
            stroke="#123B63"
            strokeWidth={activeFocus === 'team' ? '2' : '1.5'}
          />
          <text x="225" y="250" textAnchor="middle" fill="#123B63" fontSize="10" fontWeight="bold">
            Team Capability
          </text>
          <text x="225" y="264" textAnchor="middle" fill="#6B7280" fontSize="8">
            Skills &amp; Discipline
          </text>
        </g>

        {/* Pathway 3: Leadership Support & Discussions */}
        <g
          className={clsx(
            'cursor-pointer transition-all duration-300',
            activeFocus === 'leadership' || activeFocus === 'discussions'
              ? 'opacity-100 scale-102'
              : activeFocus
              ? 'opacity-40'
              : 'opacity-85'
          )}
          onClick={() => onFocusChange?.('leadership')}
        >
          <line
            x1="320"
            y1="156"
            x2="320"
            y2="230"
            stroke="#123B63"
            strokeWidth={activeFocus === 'leadership' || activeFocus === 'discussions' ? '3' : '2'}
          />
          <rect
            x="265"
            y="230"
            width="110"
            height="46"
            rx="8"
            fill={activeFocus === 'leadership' || activeFocus === 'discussions' ? '#EAF5FB' : '#FFFFFF'}
            stroke="#123B63"
            strokeWidth={activeFocus === 'leadership' || activeFocus === 'discussions' ? '2' : '1.5'}
          />
          <text x="320" y="250" textAnchor="middle" fill="#123B63" fontSize="10" fontWeight="bold">
            Leadership Support
          </text>
          <text x="320" y="264" textAnchor="middle" fill="#6B7280" fontSize="8">
            Owner Guidance
          </text>
        </g>

        {/* Pathway 4: Execution & Follow-Through */}
        <g
          className={clsx(
            'cursor-pointer transition-all duration-300',
            activeFocus === 'execution' ? 'opacity-100 scale-102' : activeFocus ? 'opacity-40' : 'opacity-85'
          )}
          onClick={() => onFocusChange?.('execution')}
        >
          <line
            x1="415"
            y1="156"
            x2="415"
            y2="230"
            stroke="#123B63"
            strokeWidth={activeFocus === 'execution' ? '3' : '2'}
          />
          <rect
            x="360"
            y="230"
            width="110"
            height="46"
            rx="8"
            fill={activeFocus === 'execution' ? '#EAF5FB' : '#FFFFFF'}
            stroke="#123B63"
            strokeWidth={activeFocus === 'execution' ? '2' : '1.5'}
          />
          <text x="415" y="250" textAnchor="middle" fill="#123B63" fontSize="10" fontWeight="bold">
            Sales Execution
          </text>
          <text x="415" y="264" textAnchor="middle" fill="#6B7280" fontSize="8">
            Agreed Practices
          </text>
        </g>

        {/* Pathway 5: Accountability & Reviews */}
        <g
          className={clsx(
            'cursor-pointer transition-all duration-300',
            activeFocus === 'accountability' ? 'opacity-100 scale-102' : activeFocus ? 'opacity-40' : 'opacity-85'
          )}
          onClick={() => onFocusChange?.('accountability')}
        >
          <line
            x1="510"
            y1="156"
            x2="510"
            y2="230"
            stroke="#123B63"
            strokeWidth={activeFocus === 'accountability' ? '3' : '2'}
          />
          <rect
            x="455"
            y="230"
            width="110"
            height="46"
            rx="8"
            fill={activeFocus === 'accountability' ? '#EAF5FB' : '#FFFFFF'}
            stroke="#123B63"
            strokeWidth={activeFocus === 'accountability' ? '2' : '1.5'}
          />
          <text x="510" y="250" textAnchor="middle" fill="#123B63" fontSize="10" fontWeight="bold">
            Accountability
          </text>
          <text x="510" y="264" textAnchor="middle" fill="#6B7280" fontSize="8">
            Regular Reviews
          </text>
        </g>

        {/* ------------------------------------------------------------- */}
        {/* LEVEL 4: ORGANIZED SALES TEAM ACTIVITY (Bottom Output)        */}
        {/* ------------------------------------------------------------- */}
        {/* Coordinated Downward Lines converging into organized stream */}
        <path
          d="M 130 276 C 130 320, 260 340, 320 340"
          stroke="#123B63"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />
        <path
          d="M 225 276 C 225 315, 280 340, 320 340"
          stroke="#123B63"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />
        <path
          d="M 320 276 L 320 340"
          stroke="#123B63"
          strokeWidth="2"
        />
        <path
          d="M 415 276 C 415 315, 360 340, 320 340"
          stroke="#123B63"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />
        <path
          d="M 510 276 C 510 320, 380 340, 320 340"
          stroke="#123B63"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />

        {/* Bottom Organized Flow Foundation */}
        <g className="transition-all duration-300">
          <rect
            x="140"
            y="340"
            width="360"
            height="52"
            rx="10"
            fill="#EAF5FB"
            stroke="#123B63"
            strokeWidth="1.5"
          />
          <text
            x="320"
            y="363"
            textAnchor="middle"
            fill="#123B63"
            fontSize="12"
            fontWeight="800"
          >
            STRUCTURED SALES TEAM ACTIVITY
          </text>
          <text
            x="320"
            y="380"
            textAnchor="middle"
            fill="#6B7280"
            fontSize="9"
          >
            Clear Priorities • Structured Reviews • Repeatable Performance
          </text>
        </g>
      </svg>
    </div>
  );
};
