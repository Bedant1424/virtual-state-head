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

interface CapabilityNode {
  key: NonNullable<FocusKey>;
  number: string;
  title: string;
  subtitle: string;
  col: number; // 0, 1, 2
  row: number; // 0, 1
  x: number;
  y: number;
}

const capabilityNodes: CapabilityNode[] = [
  // Row 1: Direction & Organizational Capabilities
  {
    key: 'strategy',
    number: '01',
    title: 'Sales Strategy',
    subtitle: 'Clear Direction & Priorities',
    col: 0,
    row: 0,
    x: 24,
    y: 190,
  },
  {
    key: 'team',
    number: '02',
    title: 'Team Development',
    subtitle: 'Sales Capability & Skills',
    col: 1,
    row: 0,
    x: 226,
    y: 190,
  },
  {
    key: 'leadership',
    number: '03',
    title: 'Leadership Support',
    subtitle: 'Owner & Team Guidance',
    col: 2,
    row: 0,
    x: 428,
    y: 190,
  },
  // Row 2: Alignment, Action & Review Rhythms
  {
    key: 'discussions',
    number: '06',
    title: 'Strategic Discussions',
    subtitle: 'Strategic Priorities & Alignment',
    col: 0,
    row: 1,
    x: 24,
    y: 272,
  },
  {
    key: 'execution',
    number: '05',
    title: 'Sales Execution',
    subtitle: 'Agreed Action Follow-Through',
    col: 1,
    row: 1,
    x: 226,
    y: 272,
  },
  {
    key: 'accountability',
    number: '04',
    title: 'Accountability',
    subtitle: 'Regular Performance Reviews',
    col: 2,
    row: 1,
    x: 428,
    y: 272,
  },
];

/**
 * LeadershipLayerVisual
 * Strategic Architecture Visualization: The Leadership Layer
 *
 * Demonstrates how Experienced Sales Leadership bridges executive business goals
 * with disciplined sales team execution across six core capability dimensions.
 *
 * Designed with an editorial, executive consulting aesthetic strictly using the 8 approved brand colors.
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
        'relative w-full rounded-2xl bg-gradient-to-b from-white via-paper/40 to-soft-blue/20 border border-gray-200/90 shadow-sm overflow-hidden flex flex-col items-center justify-center p-4 sm:p-6 transition-all duration-300',
        className
      )}
      style={{ minHeight: isCompact ? '280px' : '460px' }}
      aria-hidden="true"
    >
      {/* Executive Header Bar */}
      <div className="w-full flex items-center justify-between mb-2 z-10 px-1">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-deep-blue" />
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-deep-blue">
            Experienced Sales Leadership • The Leadership Layer
          </span>
        </div>

        {activeFocus ? (
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-white border border-sky-brand/50 shadow-2xs">
            <span className="text-[10px] text-muted font-medium">Dimension:</span>
            <span className="text-[10px] font-bold text-deep-blue uppercase">
              {capabilityNodes.find((c) => c.key === activeFocus)?.title}
            </span>
          </div>
        ) : (
          <span className="text-[11px] text-muted hidden sm:inline-block font-sans">
            Interactive System Overview
          </span>
        )}
      </div>

      {/* Main Vector Diagram Canvas */}
      <svg
        viewBox="0 0 640 460"
        className="w-full h-auto max-w-[620px] select-none transition-all duration-300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Executive Leadership Layer Gradient */}
          <linearGradient id="ll-gradLeadership" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#123B63" />
            <stop offset="100%" stopColor="#0B1F33" />
          </linearGradient>

          {/* Base Foundation Soft Gradient */}
          <linearGradient id="ll-gradFoundation" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#EAF5FB" />
          </linearGradient>
        </defs>

        {/* ------------------------------------------------------------- */}
        {/* LEVEL 1: BUSINESS GOALS (Top Anchor)                          */}
        {/* ------------------------------------------------------------- */}
        <g className="transition-all duration-300">
          <rect
            x="160"
            y="16"
            width="320"
            height="46"
            rx="10"
            fill="#FFFFFF"
            stroke="#123B63"
            strokeWidth="1.5"
            className="filter drop-shadow-2xs"
          />
          <text
            x="320"
            y="36"
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
            y="51"
            textAnchor="middle"
            fill="#6B7280"
            fontSize="8.5"
            fontWeight="500"
          >
            Business Objectives • Priorities • Strategic Direction
          </text>

          {/* Central Connecting Feeder Line */}
          <line
            x1="320"
            y1="62"
            x2="320"
            y2="88"
            stroke="#123B63"
            strokeWidth="1.5"
          />
          <circle cx="320" cy="75" r="2.5" fill="#123B63" />
        </g>

        {/* ------------------------------------------------------------- */}
        {/* LEVEL 2: THE LEADERSHIP LAYER (Central Keystone)              */}
        {/* ------------------------------------------------------------- */}
        <g className="transition-all duration-300">
          {/* Main Leadership Banner */}
          <rect
            x="24"
            y="88"
            width="592"
            height="62"
            rx="12"
            fill="url(#ll-gradLeadership)"
            stroke="#87CEEB"
            strokeWidth="2"
          />

          <text
            x="320"
            y="108"
            textAnchor="middle"
            fill="#87CEEB"
            fontSize="9"
            fontWeight="700"
            letterSpacing="1.4"
          >
            VIRTUAL STATE HEAD
          </text>
          <text
            x="320"
            y="128"
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
            y="142"
            textAnchor="middle"
            fill="#87CEEB"
            fontSize="8.5"
            opacity="0.95"
            letterSpacing="0.2"
          >
            Strategy • Team Capability • Leadership Support • Accountability
          </text>
        </g>

        {/* ------------------------------------------------------------- */}
        {/* STRUCTURAL CONNECTORS: LEADERSHIP TO CAPABILITIES             */}
        {/* ------------------------------------------------------------- */}
        {/* Feeder line dropping from Leadership Layer */}
        <line x1="320" y1="150" x2="320" y2="168" stroke="#123B63" strokeWidth="1.5" />

        {/* Horizontal Distribution Trunk */}
        <line x1="118" y1="168" x2="522" y2="168" stroke="#123B63" strokeWidth="1.5" />

        {/* Column 1 Vertical Drop to Row 1 */}
        <path
          d="M 118 168 L 118 190"
          stroke={activeFocus === 'strategy' || activeFocus === 'discussions' ? '#123B63' : '#123B63'}
          strokeWidth={activeFocus === 'strategy' || activeFocus === 'discussions' ? '2.5' : '1.5'}
        />

        {/* Column 2 Vertical Drop to Row 1 */}
        <path
          d="M 320 168 L 320 190"
          stroke={activeFocus === 'team' || activeFocus === 'execution' ? '#123B63' : '#123B63'}
          strokeWidth={activeFocus === 'team' || activeFocus === 'execution' ? '2.5' : '1.5'}
        />

        {/* Column 3 Vertical Drop to Row 1 */}
        <path
          d="M 522 168 L 522 190"
          stroke={activeFocus === 'leadership' || activeFocus === 'accountability' ? '#123B63' : '#123B63'}
          strokeWidth={activeFocus === 'leadership' || activeFocus === 'accountability' ? '2.5' : '1.5'}
        />

        {/* ------------------------------------------------------------- */}
        {/* LEVEL 3: SIX STRATEGIC CAPABILITY PILLARS                     */}
        {/* ------------------------------------------------------------- */}
        {capabilityNodes.map((node) => {
          const isActive = activeFocus === node.key;
          const isDimmed = activeFocus !== null && !isActive;

          return (
            <g
              key={node.key}
              tabIndex={0}
              role="button"
              aria-label={`${node.number} ${node.title}: ${node.subtitle}`}
              aria-pressed={isActive}
              onClick={() => onFocusChange?.(isActive ? null : node.key)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onFocusChange?.(isActive ? null : node.key);
                }
              }}
              onMouseEnter={() => onFocusChange?.(node.key)}
              onMouseLeave={() => onFocusChange?.(null)}
              className={clsx(
                'cursor-pointer outline-none transition-all duration-300',
                isActive ? 'opacity-100' : isDimmed ? 'opacity-45' : 'opacity-100 hover:opacity-90'
              )}
            >
              {/* Card Container */}
              <rect
                x={node.x}
                y={node.y}
                width="188"
                height="58"
                rx="10"
                fill={isActive ? '#EAF5FB' : '#FFFFFF'}
                stroke={isActive ? '#123B63' : '#123B63'}
                strokeWidth={isActive ? '2' : '1.2'}
              />

              {/* Number Badge */}
              <rect
                x={node.x + 12}
                y={node.y + 14}
                width="28"
                height="22"
                rx="6"
                fill={isActive ? '#123B63' : '#F3F5F7'}
                stroke={isActive ? '#123B63' : '#123B63'}
                strokeWidth={isActive ? '1' : '0.5'}
              />
              <text
                x={node.x + 26}
                y={node.y + 29}
                textAnchor="middle"
                fill={isActive ? '#FFFFFF' : '#123B63'}
                fontSize="9.5"
                fontWeight="800"
              >
                {node.number}
              </text>

              {/* Title */}
              <text
                x={node.x + 48}
                y={node.y + 28}
                fill="#123B63"
                fontSize="11"
                fontWeight="700"
                letterSpacing="0.2"
              >
                {node.title}
              </text>

              {/* Subtitle */}
              <text
                x={node.x + 48}
                y={node.y + 44}
                fill="#6B7280"
                fontSize="8.5"
                fontWeight="500"
              >
                {node.subtitle}
              </text>
            </g>
          );
        })}

        {/* ------------------------------------------------------------- */}
        {/* INTER-ROW STRUCTURAL CONNECTORS (Row 1 -> Row 2)             */}
        {/* ------------------------------------------------------------- */}
        {/* Col 1 connector (Row 1 to Row 2) */}
        <line
          x1="118"
          y1="248"
          x2="118"
          y2="272"
          stroke="#123B63"
          strokeWidth={activeFocus === 'strategy' || activeFocus === 'discussions' ? '2.5' : '1.5'}
        />

        {/* Col 2 connector (Row 1 to Row 2) */}
        <line
          x1="320"
          y1="248"
          x2="320"
          y2="272"
          stroke="#123B63"
          strokeWidth={activeFocus === 'team' || activeFocus === 'execution' ? '2.5' : '1.5'}
        />

        {/* Col 3 connector (Row 1 to Row 2) */}
        <line
          x1="522"
          y1="248"
          x2="522"
          y2="272"
          stroke="#123B63"
          strokeWidth={activeFocus === 'leadership' || activeFocus === 'accountability' ? '2.5' : '1.5'}
        />

        {/* ------------------------------------------------------------- */}
        {/* STRUCTURAL CONNECTORS: CAPABILITIES TO FOUNDATION             */}
        {/* ------------------------------------------------------------- */}
        {/* Col 1 drop to bottom conduit */}
        <line
          x1="118"
          y1="330"
          x2="118"
          y2="348"
          stroke="#123B63"
          strokeWidth={activeFocus === 'strategy' || activeFocus === 'discussions' ? '2.5' : '1.5'}
        />

        {/* Col 3 drop to bottom conduit */}
        <line
          x1="522"
          y1="330"
          x2="522"
          y2="348"
          stroke="#123B63"
          strokeWidth={activeFocus === 'leadership' || activeFocus === 'accountability' ? '2.5' : '1.5'}
        />

        {/* Bottom Horizontal Conduit */}
        <line x1="118" y1="348" x2="522" y2="348" stroke="#123B63" strokeWidth="1.5" />

        {/* Central Feed into Foundation */}
        <line
          x1="320"
          y1="330"
          x2="320"
          y2="368"
          stroke="#123B63"
          strokeWidth="2"
        />
        <circle cx="320" cy="358" r="2.5" fill="#123B63" />

        {/* ------------------------------------------------------------- */}
        {/* LEVEL 4: STRUCTURED SALES ACTIVITY & PERFORMANCE FOCUS        */}
        {/* ------------------------------------------------------------- */}
        <g className="transition-all duration-300">
          <rect
            x="24"
            y="368"
            width="592"
            height="62"
            rx="12"
            fill="url(#ll-gradFoundation)"
            stroke="#123B63"
            strokeWidth="1.5"
          />
          <text
            x="320"
            y="389"
            textAnchor="middle"
            fill="#123B63"
            fontSize="9"
            fontWeight="700"
            letterSpacing="1.4"
          >
            STRUCTURED SALES ACTIVITY
          </text>
          <text
            x="320"
            y="409"
            textAnchor="middle"
            fill="#0B1F33"
            fontSize="13.5"
            fontWeight="800"
            letterSpacing="0.6"
          >
            STRUCTURED SALES PERFORMANCE
          </text>
          <text
            x="320"
            y="422"
            textAnchor="middle"
            fill="#6B7280"
            fontSize="8.5"
            fontWeight="500"
          >
            Consistent Execution • Regular Performance Reviews • Performance Focus
          </text>
        </g>
      </svg>

      {/* Editorial Footnote */}
      <div className="w-full text-center mt-2">
        <p className="text-[11px] text-muted font-sans">
          Diagram illustrates how experienced sales leadership supports strategy, team capability, execution discipline, and performance reviews.
        </p>
      </div>
    </div>
  );
};

