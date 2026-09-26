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

interface CapabilityItem {
  key: NonNullable<FocusKey>;
  number: string;
  title: string;
  subtitle: string;
  domain: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

const capabilityItems: CapabilityItem[] = [
  // Pillar 1: STRATEGY (col 0, center x = 80)
  {
    key: 'strategy',
    number: '01',
    title: 'Sales Strategy',
    subtitle: 'Clear Direction & Priorities',
    domain: 'STRATEGY',
    x: 16,
    y: 236,
    w: 130,
    h: 56,
  },
  {
    key: 'discussions',
    number: '06',
    title: 'Strategic Discussions',
    subtitle: 'Priorities & Alignment',
    domain: 'STRATEGY',
    x: 16,
    y: 304,
    w: 130,
    h: 56,
  },
  // Pillar 2: TEAM (col 1, center x = 240)
  {
    key: 'team',
    number: '02',
    title: 'Team Development',
    subtitle: 'Sales Capability & Skills',
    domain: 'TEAM',
    x: 176,
    y: 236,
    w: 130,
    h: 56,
  },
  {
    key: 'leadership',
    number: '03',
    title: 'Leadership Support',
    subtitle: 'Owner & Team Guidance',
    domain: 'TEAM',
    x: 176,
    y: 304,
    w: 130,
    h: 56,
  },
  // Pillar 3: EXECUTION (col 2, center x = 400)
  {
    key: 'execution',
    number: '05',
    title: 'Sales Execution',
    subtitle: 'Agreed Follow-Through & Daily Cadence',
    domain: 'EXECUTION',
    x: 336,
    y: 236,
    w: 130,
    h: 124,
  },
  // Pillar 4: ACCOUNTABILITY (col 3, center x = 560)
  {
    key: 'accountability',
    number: '04',
    title: 'Accountability',
    subtitle: 'Regular Reviews & Performance Tracking',
    domain: 'ACCOUNTABILITY',
    x: 496,
    y: 236,
    w: 130,
    h: 124,
  },
];

/**
 * LeadershipLayerVisual
 * Strategic Consulting Framework Architecture Illustration
 *
 * Implements the exact executive tree:
 *
 *            BUSINESS GOALS
 *                  |
 *           SALES LEADERSHIP (Virtual State Head)
 *                  |
 *   -------------------------------------------------
 *   |          |                 |                  |
 * STRATEGY    TEAM           EXECUTION        ACCOUNTABILITY
 *   |          |                 |                  |
 * - 01/06    - 02/03           - 05               - 04
 *   |          |                 |                  |
 *   -------------------------------------------------
 *                  |
 *      STRUCTURED SALES PERFORMANCE
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
        'relative w-full rounded-2xl bg-gradient-to-b from-white via-paper/50 to-soft-blue/20 border border-gray-200/90 shadow-sm overflow-hidden flex flex-col items-center justify-center p-4 sm:p-6 transition-all duration-300',
        className
      )}
      style={{ minHeight: isCompact ? '280px' : '460px' }}
      aria-hidden="true"
    >
      {/* Visual Header */}
      <div className="w-full flex items-center justify-between mb-3 z-10 px-1">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-deep-blue" />
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-deep-blue font-sans">
            Consulting Framework • The Leadership Layer
          </span>
        </div>

        {activeFocus ? (
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white border border-sky-brand/50 shadow-2xs">
            <span className="text-[10px] text-muted font-medium">Focus:</span>
            <span className="text-[10px] font-bold text-deep-blue uppercase">
              {capabilityItems.find((c) => c.key === activeFocus)?.title}
            </span>
          </div>
        ) : (
          <span className="text-[11px] text-muted hidden sm:inline-block font-sans">
            Strategic Alignment Architecture
          </span>
        )}
      </div>

      {/* Main SVG Vector Canvas */}
      <svg
        viewBox="0 0 640 460"
        className="w-full h-auto max-w-[620px] select-none font-sans"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="ll-gradLeadership" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#123B63" />
            <stop offset="100%" stopColor="#0B1F33" />
          </linearGradient>
        </defs>

        {/* ============================================================== */}
        {/* TIER 1: BUSINESS GOALS (Top Enterprise Level)                  */}
        {/* ============================================================== */}
        <g>
          <rect
            x="160"
            y="14"
            width="320"
            height="44"
            rx="8"
            fill="#FFFFFF"
            stroke="#123B63"
            strokeWidth="1.5"
          />
          <text
            x="320"
            y="33"
            textAnchor="middle"
            fill="#123B63"
            fontSize="11"
            fontWeight="800"
            letterSpacing="0.8"
          >
            BUSINESS GOALS
          </text>
          <text
            x="320"
            y="47"
            textAnchor="middle"
            fill="#6B7280"
            fontSize="8.5"
            fontWeight="500"
          >
            Business Objectives • Commercial Vision • Growth Priorities
          </text>

          {/* Central Connecting Feeder Line */}
          <line x1="320" y1="58" x2="320" y2="84" stroke="#123B63" strokeWidth="1.5" />
          <circle cx="320" cy="71" r="2.5" fill="#123B63" />
        </g>

        {/* ============================================================== */}
        {/* TIER 2: SALES LEADERSHIP (Virtual State Head Anchor)           */}
        {/* ============================================================== */}
        <g>
          <rect
            x="40"
            y="84"
            width="560"
            height="58"
            rx="10"
            fill="url(#ll-gradLeadership)"
            stroke="#87CEEB"
            strokeWidth="2"
          />
          <text
            x="320"
            y="102"
            textAnchor="middle"
            fill="#87CEEB"
            fontSize="9"
            fontWeight="800"
            letterSpacing="1.5"
          >
            VIRTUAL STATE HEAD
          </text>
          <text
            x="320"
            y="121"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="14"
            fontWeight="800"
            letterSpacing="0.6"
          >
            EXPERIENCED SALES LEADERSHIP
          </text>
          <text
            x="320"
            y="134"
            textAnchor="middle"
            fill="#87CEEB"
            fontSize="8"
            fontWeight="500"
            opacity="0.95"
          >
            Connecting owner vision to daily sales execution with structured direction & accountability
          </text>

          {/* Central Connecting Feeder Line down to Distribution Crossbar */}
          <line x1="320" y1="142" x2="320" y2="168" stroke="#123B63" strokeWidth="1.5" />
        </g>

        {/* ============================================================== */}
        {/* HORIZONTAL DISTRIBUTION CROSSBAR                              */}
        {/* ============================================================== */}
        <line x1="81" y1="168" x2="561" y2="168" stroke="#123B63" strokeWidth="1.5" />
        {/* Drops to each of the 4 domains */}
        <line x1="81" y1="168" x2="81" y2="186" stroke="#123B63" strokeWidth="1.5" />
        <line x1="241" y1="168" x2="241" y2="186" stroke="#123B63" strokeWidth="1.5" />
        <line x1="401" y1="168" x2="401" y2="186" stroke="#123B63" strokeWidth="1.5" />
        <line x1="561" y1="168" x2="561" y2="186" stroke="#123B63" strokeWidth="1.5" />

        {/* ============================================================== */}
        {/* TIER 3: THE FOUR STRATEGIC DOMAINS (STRATEGY, TEAM, EXEC, ACC) */}
        {/* ============================================================== */}
        {/* Domain 1: STRATEGY */}
        <g>
          <rect
            x="16"
            y="186"
            width="130"
            height="34"
            rx="6"
            fill="#EAF5FB"
            stroke="#123B63"
            strokeWidth="1.2"
          />
          <text
            x="81"
            y="207"
            textAnchor="middle"
            fill="#123B63"
            fontSize="10"
            fontWeight="800"
            letterSpacing="0.8"
          >
            STRATEGY
          </text>
        </g>

        {/* Domain 2: TEAM */}
        <g>
          <rect
            x="176"
            y="186"
            width="130"
            height="34"
            rx="6"
            fill="#EAF5FB"
            stroke="#123B63"
            strokeWidth="1.2"
          />
          <text
            x="241"
            y="207"
            textAnchor="middle"
            fill="#123B63"
            fontSize="10"
            fontWeight="800"
            letterSpacing="0.8"
          >
            TEAM
          </text>
        </g>

        {/* Domain 3: EXECUTION */}
        <g>
          <rect
            x="336"
            y="186"
            width="130"
            height="34"
            rx="6"
            fill="#EAF5FB"
            stroke="#123B63"
            strokeWidth="1.2"
          />
          <text
            x="401"
            y="207"
            textAnchor="middle"
            fill="#123B63"
            fontSize="10"
            fontWeight="800"
            letterSpacing="0.8"
          >
            EXECUTION
          </text>
        </g>

        {/* Domain 4: ACCOUNTABILITY */}
        <g>
          <rect
            x="496"
            y="186"
            width="130"
            height="34"
            rx="6"
            fill="#EAF5FB"
            stroke="#123B63"
            strokeWidth="1.2"
          />
          <text
            x="561"
            y="207"
            textAnchor="middle"
            fill="#123B63"
            fontSize="10"
            fontWeight="800"
            letterSpacing="0.8"
          >
            ACCOUNTABILITY
          </text>
        </g>

        {/* Drops from Domain headers to capability cards */}
        <line x1="81" y1="220" x2="81" y2="236" stroke="#123B63" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="241" y1="220" x2="241" y2="236" stroke="#123B63" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="401" y1="220" x2="401" y2="236" stroke="#123B63" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="561" y1="220" x2="561" y2="236" stroke="#123B63" strokeWidth="1" strokeDasharray="2 2" />

        {/* Drops between Row 1 and Row 2 in columns 0 and 1 */}
        <line x1="81" y1="292" x2="81" y2="304" stroke="#123B63" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="241" y1="292" x2="241" y2="304" stroke="#123B63" strokeWidth="1" strokeDasharray="2 2" />

        {/* ============================================================== */}
        {/* TIER 4: SIX SPECIFIC CAPABILITY CARDS                          */}
        {/* ============================================================== */}
        {capabilityItems.map((item) => {
          const isActive = activeFocus === item.key;
          const isDimmed = activeFocus !== null && !isActive;

          return (
            <g
              key={item.key}
              tabIndex={0}
              role="button"
              aria-label={`${item.number} ${item.title}: ${item.subtitle}`}
              aria-pressed={isActive}
              onClick={() => onFocusChange?.(isActive ? null : item.key)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onFocusChange?.(isActive ? null : item.key);
                }
              }}
              onMouseEnter={() => onFocusChange?.(item.key)}
              onMouseLeave={() => onFocusChange?.(null)}
              className={clsx(
                'cursor-pointer outline-none transition-all duration-200',
                isActive ? 'opacity-100' : isDimmed ? 'opacity-40' : 'opacity-100 hover:opacity-90'
              )}
            >
              {/* Card Container */}
              <rect
                x={item.x}
                y={item.y}
                width={item.w}
                height={item.h}
                rx="6"
                fill={isActive ? '#EAF5FB' : '#FFFFFF'}
                stroke={isActive ? '#123B63' : '#123B63'}
                strokeWidth={isActive ? '2' : '1'}
              />

              {/* Number Badge */}
              <rect
                x={item.x + 8}
                y={item.y + 8}
                width="20"
                height="16"
                rx="4"
                fill={isActive ? '#123B63' : '#F3F5F7'}
              />
              <text
                x={item.x + 18}
                y={item.y + 19}
                textAnchor="middle"
                fill={isActive ? '#FFFFFF' : '#123B63'}
                fontSize="8.5"
                fontWeight="800"
              >
                {item.number}
              </text>

              {/* Title */}
              <text
                x={item.x + 34}
                y={item.y + 20}
                fill="#123B63"
                fontSize="9.5"
                fontWeight="700"
              >
                {item.title}
              </text>

              {/* Subtitle / Description */}
              <text
                x={item.x + 8}
                y={item.y + 36}
                fill="#6B7280"
                fontSize="7.5"
                fontWeight="500"
              >
                {item.subtitle}
              </text>

              {/* Additional detail for tall cards (05 & 04) */}
              {item.h > 60 && (
                <text
                  x={item.x + 8}
                  y={item.y + 54}
                  fill="#123B63"
                  fontSize="7.5"
                  fontWeight="600"
                >
                  {item.key === 'execution'
                    ? 'Structured daily execution cadence'
                    : 'Milestone tracking & ownership'}
                </text>
              )}
            </g>
          );
        })}

        {/* ============================================================== */}
        {/* TIER 5: BASE FOUNDATION (Structured Sales Performance)         */}
        {/* ============================================================== */}
        {/* Upward connector drops to foundation */}
        <line x1="81" y1="360" x2="81" y2="394" stroke="#123B63" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="241" y1="360" x2="241" y2="394" stroke="#123B63" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="401" y1="360" x2="401" y2="394" stroke="#123B63" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="561" y1="360" x2="561" y2="394" stroke="#123B63" strokeWidth="1" strokeDasharray="2 2" />

        <g>
          <rect
            x="40"
            y="394"
            width="560"
            height="44"
            rx="8"
            fill="#FFFFFF"
            stroke="#123B63"
            strokeWidth="1.5"
          />
          <text
            x="320"
            y="413"
            textAnchor="middle"
            fill="#123B63"
            fontSize="11"
            fontWeight="800"
            letterSpacing="0.8"
          >
            STRUCTURED SALES PERFORMANCE
          </text>
          <text
            x="320"
            y="427"
            textAnchor="middle"
            fill="#6B7280"
            fontSize="8.5"
            fontWeight="500"
          >
            Consistent Execution • Regular Reviews • Team Capability • Commercial Focus
          </text>
        </g>
      </svg>
    </div>
  );
};

export default LeadershipLayerVisual;
