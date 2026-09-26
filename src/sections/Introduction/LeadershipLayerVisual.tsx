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
 * all six core capability dimensions of sales activity.
 *
 * Grounded strictly in approved source concepts and brand colors.
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
        </defs>

        {/* ------------------------------------------------------------- */}
        {/* LEVEL 1: BUSINESS & SALES FUNCTION (Top Anchor)               */}
        {/* ------------------------------------------------------------- */}
        <g className="transition-all duration-300">
          <rect
            x="200"
            y="28"
            width="240"
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
            x="40"
            y="100"
            width="560"
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

          {/* Decorative Signal Dots on Layer */}
          <circle cx="58" cy="128" r="4" fill="#87CEEB" />
          <circle cx="582" cy="128" r="4" fill="#87CEEB" />
        </g>

        {/* ------------------------------------------------------------- */}
        {/* LEVEL 3: SIX INTEGRATED DISCIPLINE PATHWAYS                    */}
        {/* ------------------------------------------------------------- */}

        {/* Pathway 1: 01 Sales Strategy (center = 65) */}
        <g
          className={clsx(
            'cursor-pointer transition-all duration-300',
            activeFocus === 'strategy' ? 'opacity-100 scale-102' : activeFocus ? 'opacity-40' : 'opacity-85'
          )}
          onClick={() => onFocusChange?.(activeFocus === 'strategy' ? null : 'strategy')}
        >
          <line
            x1="65"
            y1="156"
            x2="65"
            y2="228"
            stroke="#123B63"
            strokeWidth={activeFocus === 'strategy' ? '3' : '1.5'}
          />
          <rect
            x="22"
            y="228"
            width="86"
            height="48"
            rx="8"
            fill={activeFocus === 'strategy' ? '#EAF5FB' : '#FFFFFF'}
            stroke="#123B63"
            strokeWidth={activeFocus === 'strategy' ? '2.5' : '1.5'}
          />
          <text x="65" y="248" textAnchor="middle" fill="#123B63" fontSize="9.5" fontWeight="bold">
            Sales Strategy
          </text>
          <text x="65" y="263" textAnchor="middle" fill="#6B7280" fontSize="8">
            Clear Direction
          </text>
        </g>

        {/* Pathway 2: 02 Team Development (center = 167) */}
        <g
          className={clsx(
            'cursor-pointer transition-all duration-300',
            activeFocus === 'team' ? 'opacity-100 scale-102' : activeFocus ? 'opacity-40' : 'opacity-85'
          )}
          onClick={() => onFocusChange?.(activeFocus === 'team' ? null : 'team')}
        >
          <line
            x1="167"
            y1="156"
            x2="167"
            y2="228"
            stroke="#123B63"
            strokeWidth={activeFocus === 'team' ? '3' : '1.5'}
          />
          <rect
            x="124"
            y="228"
            width="86"
            height="48"
            rx="8"
            fill={activeFocus === 'team' ? '#EAF5FB' : '#FFFFFF'}
            stroke="#123B63"
            strokeWidth={activeFocus === 'team' ? '2.5' : '1.5'}
          />
          <text x="167" y="248" textAnchor="middle" fill="#123B63" fontSize="9" fontWeight="bold">
            Team Dev
          </text>
          <text x="167" y="263" textAnchor="middle" fill="#6B7280" fontSize="8">
            Sales Capability
          </text>
        </g>

        {/* Pathway 3: 03 Leadership Support (center = 269) */}
        <g
          className={clsx(
            'cursor-pointer transition-all duration-300',
            activeFocus === 'leadership' ? 'opacity-100 scale-102' : activeFocus ? 'opacity-40' : 'opacity-85'
          )}
          onClick={() => onFocusChange?.(activeFocus === 'leadership' ? null : 'leadership')}
        >
          <line
            x1="269"
            y1="156"
            x2="269"
            y2="228"
            stroke="#123B63"
            strokeWidth={activeFocus === 'leadership' ? '3' : '1.5'}
          />
          <rect
            x="226"
            y="228"
            width="86"
            height="48"
            rx="8"
            fill={activeFocus === 'leadership' ? '#EAF5FB' : '#FFFFFF'}
            stroke="#123B63"
            strokeWidth={activeFocus === 'leadership' ? '2.5' : '1.5'}
          />
          <text x="269" y="248" textAnchor="middle" fill="#123B63" fontSize="8.5" fontWeight="bold">
            Leadership
          </text>
          <text x="269" y="263" textAnchor="middle" fill="#6B7280" fontSize="8">
            Owner Guidance
          </text>
        </g>

        {/* Pathway 4: 06 Strategic Discussions (center = 371) */}
        <g
          className={clsx(
            'cursor-pointer transition-all duration-300',
            activeFocus === 'discussions' ? 'opacity-100 scale-102' : activeFocus ? 'opacity-40' : 'opacity-85'
          )}
          onClick={() => onFocusChange?.(activeFocus === 'discussions' ? null : 'discussions')}
        >
          <line
            x1="371"
            y1="156"
            x2="371"
            y2="228"
            stroke="#123B63"
            strokeWidth={activeFocus === 'discussions' ? '3' : '1.5'}
          />
          <rect
            x="328"
            y="228"
            width="86"
            height="48"
            rx="8"
            fill={activeFocus === 'discussions' ? '#EAF5FB' : '#FFFFFF'}
            stroke="#123B63"
            strokeWidth={activeFocus === 'discussions' ? '2.5' : '1.5'}
          />
          <text x="371" y="248" textAnchor="middle" fill="#123B63" fontSize="8.5" fontWeight="bold">
            Discussions
          </text>
          <text x="371" y="263" textAnchor="middle" fill="#6B7280" fontSize="8">
            Owner Priorities
          </text>
        </g>

        {/* Pathway 5: 05 Sales Execution (center = 473) */}
        <g
          className={clsx(
            'cursor-pointer transition-all duration-300',
            activeFocus === 'execution' ? 'opacity-100 scale-102' : activeFocus ? 'opacity-40' : 'opacity-85'
          )}
          onClick={() => onFocusChange?.(activeFocus === 'execution' ? null : 'execution')}
        >
          <line
            x1="473"
            y1="156"
            x2="473"
            y2="228"
            stroke="#123B63"
            strokeWidth={activeFocus === 'execution' ? '3' : '1.5'}
          />
          <rect
            x="430"
            y="228"
            width="86"
            height="48"
            rx="8"
            fill={activeFocus === 'execution' ? '#EAF5FB' : '#FFFFFF'}
            stroke="#123B63"
            strokeWidth={activeFocus === 'execution' ? '2.5' : '1.5'}
          />
          <text x="473" y="248" textAnchor="middle" fill="#123B63" fontSize="9.5" fontWeight="bold">
            Execution
          </text>
          <text x="473" y="263" textAnchor="middle" fill="#6B7280" fontSize="8">
            Agreed Actions
          </text>
        </g>

        {/* Pathway 6: 04 Accountability (center = 575) */}
        <g
          className={clsx(
            'cursor-pointer transition-all duration-300',
            activeFocus === 'accountability' ? 'opacity-100 scale-102' : activeFocus ? 'opacity-40' : 'opacity-85'
          )}
          onClick={() => onFocusChange?.(activeFocus === 'accountability' ? null : 'accountability')}
        >
          <line
            x1="575"
            y1="156"
            x2="575"
            y2="228"
            stroke="#123B63"
            strokeWidth={activeFocus === 'accountability' ? '3' : '1.5'}
          />
          <rect
            x="532"
            y="228"
            width="86"
            height="48"
            rx="8"
            fill={activeFocus === 'accountability' ? '#EAF5FB' : '#FFFFFF'}
            stroke="#123B63"
            strokeWidth={activeFocus === 'accountability' ? '2.5' : '1.5'}
          />
          <text x="575" y="248" textAnchor="middle" fill="#123B63" fontSize="9" fontWeight="bold">
            Accountability
          </text>
          <text x="575" y="263" textAnchor="middle" fill="#6B7280" fontSize="8">
            Regular Reviews
          </text>
        </g>

        {/* ------------------------------------------------------------- */}
        {/* LEVEL 4: STRUCTURED SALES TEAM ACTIVITY (Bottom Output)       */}
        {/* ------------------------------------------------------------- */}
        {/* 6 Converging Feeds into organized stream */}
        <path
          d="M 65 276 C 65 320, 200 344, 320 344"
          stroke="#123B63"
          strokeWidth={activeFocus === 'strategy' ? '2.5' : '1.5'}
          strokeDasharray={activeFocus === 'strategy' ? undefined : '4 3'}
        />
        <path
          d="M 167 276 C 167 315, 250 344, 320 344"
          stroke="#123B63"
          strokeWidth={activeFocus === 'team' ? '2.5' : '1.5'}
          strokeDasharray={activeFocus === 'team' ? undefined : '4 3'}
        />
        <path
          d="M 269 276 C 269 310, 290 344, 320 344"
          stroke="#123B63"
          strokeWidth={activeFocus === 'leadership' ? '2.5' : '1.5'}
          strokeDasharray={activeFocus === 'leadership' ? undefined : '4 3'}
        />
        <path
          d="M 371 276 C 371 310, 350 344, 320 344"
          stroke="#123B63"
          strokeWidth={activeFocus === 'discussions' ? '2.5' : '1.5'}
          strokeDasharray={activeFocus === 'discussions' ? undefined : '4 3'}
        />
        <path
          d="M 473 276 C 473 315, 390 344, 320 344"
          stroke="#123B63"
          strokeWidth={activeFocus === 'execution' ? '2.5' : '1.5'}
          strokeDasharray={activeFocus === 'execution' ? undefined : '4 3'}
        />
        <path
          d="M 575 276 C 575 320, 440 344, 320 344"
          stroke="#123B63"
          strokeWidth={activeFocus === 'accountability' ? '2.5' : '1.5'}
          strokeDasharray={activeFocus === 'accountability' ? undefined : '4 3'}
        />

        {/* Bottom Structured Sales Team Activity Foundation */}
        <g className="transition-all duration-300">
          <rect
            x="110"
            y="344"
            width="420"
            height="52"
            rx="10"
            fill="#EAF5FB"
            stroke="#123B63"
            strokeWidth="1.5"
          />
          <text
            x="320"
            y="367"
            textAnchor="middle"
            fill="#123B63"
            fontSize="12"
            fontWeight="800"
          >
            STRUCTURED SALES TEAM ACTIVITY
          </text>
          <text
            x="320"
            y="384"
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
