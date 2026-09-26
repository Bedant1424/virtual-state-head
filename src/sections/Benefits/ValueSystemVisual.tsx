import React, { useId } from 'react';
import { clsx } from 'clsx';
import { BusinessValueArea, ValueAreaKey } from '@/data/siteContent';

export interface ValueSystemVisualProps {
  valueAreas: readonly BusinessValueArea[];
  activeKey: ValueAreaKey;
  onSelectKey: (key: ValueAreaKey) => void;
  className?: string;
  isCompact?: boolean;
}

interface NodePosition {
  key: ValueAreaKey;
  boxX: number;
  boxY: number;
  boxW: number;
  boxH: number;
  anchorX: number;
  anchorY: number;
  coreAttachX: number;
  coreAttachY: number;
  controlX: number;
  controlY: number;
}

const nodePositions: Record<ValueAreaKey, NodePosition> = {
  strategy: {
    key: 'strategy',
    boxX: 50,
    boxY: 55,
    boxW: 190,
    boxH: 56,
    anchorX: 145,
    anchorY: 111,
    coreAttachX: 285,
    coreAttachY: 200,
    controlX: 180,
    controlY: 180,
  },
  team: {
    key: 'team',
    boxX: 440,
    boxY: 55,
    boxW: 190,
    boxH: 56,
    anchorX: 535,
    anchorY: 111,
    coreAttachX: 395,
    coreAttachY: 200,
    controlX: 500,
    controlY: 180,
  },
  leadership: {
    key: 'leadership',
    boxX: 460,
    boxY: 220,
    boxW: 195,
    boxH: 56,
    anchorX: 460,
    anchorY: 248,
    coreAttachX: 418,
    coreAttachY: 248,
    controlX: 439,
    controlY: 248,
  },
  accountability: {
    key: 'accountability',
    boxX: 400,
    boxY: 380,
    boxW: 195,
    boxH: 56,
    anchorX: 480,
    anchorY: 380,
    coreAttachX: 385,
    coreAttachY: 305,
    controlX: 460,
    controlY: 340,
  },
  consulting: {
    key: 'consulting',
    boxX: 70,
    boxY: 380,
    boxW: 215,
    boxH: 56,
    anchorX: 195,
    anchorY: 380,
    coreAttachX: 295,
    coreAttachY: 305,
    controlX: 220,
    controlY: 340,
  },
};

/**
 * ValueSystemVisual
 * Interactive five-part visual system representing the broader sales performance areas.
 *
 * Core Concept:
 * Central visual core representing "SALES PERFORMANCE", connected to five distinct
 * value areas (Strategy, Team, Leadership, Accountability, Consulting).
 *
 * Grounded in editorial consulting aesthetics using strictly approved brand colors.
 */
export const ValueSystemVisual: React.FC<ValueSystemVisualProps> = ({
  valueAreas,
  activeKey,
  onSelectKey,
  className,
  isCompact = false,
}) => {
  const rawId = useId();
  const safeId = rawId.replace(/[^a-zA-Z0-9]/g, '');
  const coreGradId = `vsv-gradCore-${safeId}`;
  const activeGradId = `vsv-gradActive-${safeId}`;

  return (
    <div
      className={clsx(
        'relative w-full rounded-2xl bg-gradient-to-b from-white via-paper/30 to-soft-blue/20 border border-gray-200/90 shadow-sm overflow-hidden flex flex-col items-center justify-center p-4 sm:p-6 transition-all duration-300',
        className
      )}
      style={{ minHeight: isCompact ? '280px' : '460px' }}
      aria-label="Interactive Sales Performance Value System"
    >
      {/* Top System Context Bar */}
      <div className="w-full flex items-center justify-between mb-2 z-10 px-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-deep-blue" />
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-deep-blue font-sans">
            Value System • Interconnected Impact
          </span>
        </div>

        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white border border-sky-brand/40 shadow-2xs">
          <span className="text-[10px] text-muted font-medium">Active Focus:</span>
          <span className="text-[10px] font-bold text-deep-blue uppercase">
            {valueAreas.find((v) => v.valueKey === activeKey)?.shortLabel || 'Sales Strategy'}
          </span>
        </div>
      </div>

      {/* Main SVG Vector Canvas */}
      <svg
        viewBox="0 0 680 490"
        className="w-full h-auto max-w-[640px] select-none transition-all duration-300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Central Core Gradient */}
          <linearGradient id={coreGradId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#123B63" />
            <stop offset="100%" stopColor="#0B1F33" />
          </linearGradient>

          {/* Node Active Gradient */}
          <linearGradient id={activeGradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#EAF5FB" />
          </linearGradient>
        </defs>

        {/* ------------------------------------------------------------- */}
        {/* BACKGROUND AMBIENT RINGS & RADIAL GUIDES                     */}
        {/* ------------------------------------------------------------- */}
        <circle
          cx="340"
          cy="248"
          r="165"
          stroke="#123B63"
          strokeWidth="1"
          strokeDasharray="4 4"
          opacity="0.2"
        />
        <circle
          cx="340"
          cy="248"
          r="105"
          stroke="#87CEEB"
          strokeWidth="1.5"
          strokeDasharray="3 3"
          opacity="0.35"
        />

        {/* ------------------------------------------------------------- */}
        {/* CONNECTING CONDUIT PATHS TO CORE                              */}
        {/* ------------------------------------------------------------- */}
        {valueAreas.map((area) => {
          const pos = nodePositions[area.valueKey];
          const isActive = activeKey === area.valueKey;

          return (
            <g key={`path-${area.id}`}>
              {/* Outer Glow Path for Active Conduit */}
              {isActive && (
                <path
                  d={`M ${pos.anchorX} ${pos.anchorY} Q ${pos.controlX} ${pos.controlY} ${pos.coreAttachX} ${pos.coreAttachY}`}
                  stroke="#87CEEB"
                  strokeWidth="6"
                  opacity="0.45"
                  className="transition-all duration-300"
                />
              )}

              {/* Main Structural Conduit Path */}
              <path
                d={`M ${pos.anchorX} ${pos.anchorY} Q ${pos.controlX} ${pos.controlY} ${pos.coreAttachX} ${pos.coreAttachY}`}
                stroke="#123B63"
                strokeWidth={isActive ? '2.5' : '1.5'}
                opacity={isActive ? 1 : 0.4}
                className="transition-all duration-300"
              />

              {/* Conduit Anchor Joint Node */}
              <circle
                cx={pos.coreAttachX}
                cy={pos.coreAttachY}
                r={isActive ? 4 : 2.5}
                fill={isActive ? '#87CEEB' : '#123B63'}
                className="transition-all duration-300"
              />
            </g>
          );
        })}

        {/* ------------------------------------------------------------- */}
        {/* CENTRAL CORE: SALES PERFORMANCE                               */}
        {/* ------------------------------------------------------------- */}
        <g className="transition-all duration-300">
          {/* Subtle Outer Energy Ring */}
          <circle
            cx="340"
            cy="248"
            r="82"
            fill="#EAF5FB"
            opacity="0.6"
          />

          {/* Central Keystone Disc */}
          <circle
            cx="340"
            cy="248"
            r="72"
            fill={`url(#${coreGradId})`}
            stroke="#87CEEB"
            strokeWidth="2.5"
            className="filter drop-shadow-sm"
          />

          {/* Internal Rings */}
          <circle
            cx="340"
            cy="248"
            r="60"
            stroke="#87CEEB"
            strokeWidth="0.75"
            strokeDasharray="2 2"
            opacity="0.4"
          />

          {/* Core Labels */}
          <text
            x="340"
            y="230"
            textAnchor="middle"
            fill="#87CEEB"
            fontSize="8.5"
            fontWeight="700"
            letterSpacing="1.4"
          >
            INTEGRATED CORE
          </text>
          <text
            x="340"
            y="248"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="13.5"
            fontWeight="800"
            letterSpacing="0.8"
          >
            SALES PERFORMANCE
          </text>
          <text
            x="340"
            y="264"
            textAnchor="middle"
            fill="#87CEEB"
            fontSize="8"
            fontWeight="600"
            letterSpacing="0.2"
            opacity="0.95"
          >
            Strategy • Capability • Leadership
          </text>
          <text
            x="340"
            y="275"
            textAnchor="middle"
            fill="#87CEEB"
            fontSize="8"
            fontWeight="600"
            letterSpacing="0.2"
            opacity="0.95"
          >
            Accountability • Consulting
          </text>
        </g>

        {/* ------------------------------------------------------------- */}
        {/* FIVE PERIPHERAL VALUE NODES                                   */}
        {/* ------------------------------------------------------------- */}
        {valueAreas.map((area) => {
          const pos = nodePositions[area.valueKey];
          const isActive = activeKey === area.valueKey;
          const isQuiet = activeKey !== null && !isActive;

          return (
            <g
              key={area.id}
              tabIndex={0}
              role="button"
              aria-label={`${area.number} ${area.title}: ${area.description}`}
              aria-pressed={isActive}
              onClick={() => onSelectKey(area.valueKey)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectKey(area.valueKey);
                }
              }}
              onMouseEnter={() => onSelectKey(area.valueKey)}
              onFocus={() => onSelectKey(area.valueKey)}
              className={clsx(
                'cursor-pointer outline-none transition-all duration-300',
                isActive ? 'opacity-100 scale-102' : isQuiet ? 'opacity-65' : 'opacity-100'
              )}
            >
              {/* Outer Card Contour */}
              <rect
                x={pos.boxX}
                y={pos.boxY}
                width={pos.boxW}
                height={pos.boxH}
                rx="12"
                fill={isActive ? `url(#${activeGradId})` : '#FFFFFF'}
                stroke={isActive ? '#123B63' : '#123B63'}
                strokeWidth={isActive ? '2' : '1.2'}
                className="transition-colors duration-200"
              />

              {/* Number Badge Pill */}
              <rect
                x={pos.boxX + 12}
                y={pos.boxY + 14}
                width="28"
                height="22"
                rx="6"
                fill={isActive ? '#123B63' : '#F3F5F7'}
                stroke={isActive ? '#123B63' : '#123B63'}
                strokeWidth={isActive ? '1' : '0.5'}
              />
              <text
                x={pos.boxX + 26}
                y={pos.boxY + 29}
                textAnchor="middle"
                fill={isActive ? '#FFFFFF' : '#123B63'}
                fontSize="9.5"
                fontWeight="800"
              >
                {area.number}
              </text>

              {/* Title */}
              <text
                x={pos.boxX + 48}
                y={pos.boxY + 28}
                fill="#123B63"
                fontSize="10.5"
                fontWeight="800"
                letterSpacing="0.2"
              >
                {area.title}
              </text>

              {/* Sub-label Concept Marker */}
              <text
                x={pos.boxX + 48}
                y={pos.boxY + 43}
                fill="#6B7280"
                fontSize="8.5"
                fontWeight="500"
              >
                {area.shortLabel}
              </text>

              {/* Domain Specific Visual Marker */}
              {area.valueKey === 'strategy' && (
                <path
                  d={`M ${pos.boxX + pos.boxW - 22} ${pos.boxY + 28} L ${pos.boxX + pos.boxW - 14} ${pos.boxY + 28} M ${pos.boxX + pos.boxW - 17} ${pos.boxY + 24} L ${pos.boxX + pos.boxW - 14} ${pos.boxY + 28} L ${pos.boxX + pos.boxW - 17} ${pos.boxY + 32}`}
                  stroke={isActive ? '#123B63' : '#87CEEB'}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}

              {area.valueKey === 'team' && (
                <g opacity={isActive ? 1 : 0.7}>
                  <circle cx={pos.boxX + pos.boxW - 22} cy={pos.boxY + 26} r="2.5" fill="#123B63" />
                  <circle cx={pos.boxX + pos.boxW - 14} cy={pos.boxY + 26} r="2.5" fill="#87CEEB" />
                  <circle cx={pos.boxX + pos.boxW - 18} cy={pos.boxY + 32} r="2.5" fill="#123B63" />
                </g>
              )}

              {area.valueKey === 'leadership' && (
                <g opacity={isActive ? 1 : 0.7}>
                  <circle cx={pos.boxX + pos.boxW - 18} cy={pos.boxY + 28} r="5" stroke="#123B63" strokeWidth="1.5" />
                  <circle cx={pos.boxX + pos.boxW - 18} cy={pos.boxY + 28} r="2" fill="#87CEEB" />
                </g>
              )}

              {area.valueKey === 'accountability' && (
                <g opacity={isActive ? 1 : 0.7}>
                  <rect x={pos.boxX + pos.boxW - 22} y={pos.boxY + 22} width="11" height="11" rx="2" stroke="#123B63" strokeWidth="1.2" />
                  <path d={`M ${pos.boxX + pos.boxW - 19} ${pos.boxY + 27} L ${pos.boxX + pos.boxW - 17} ${pos.boxY + 30} L ${pos.boxX + pos.boxW - 13} ${pos.boxY + 24}`} stroke="#87CEEB" strokeWidth="1.5" strokeLinecap="round" />
                </g>
              )}

              {area.valueKey === 'consulting' && (
                <g opacity={isActive ? 1 : 0.7}>
                  <circle cx={pos.boxX + pos.boxW - 18} cy={pos.boxY + 28} r="6" stroke="#123B63" strokeWidth="1.2" strokeDasharray="3 2" />
                  <path d={`M ${pos.boxX + pos.boxW - 18} ${pos.boxY + 24} L ${pos.boxX + pos.boxW - 18} ${pos.boxY + 28} L ${pos.boxX + pos.boxW - 15} ${pos.boxY + 30}`} stroke="#87CEEB" strokeWidth="1.2" />
                </g>
              )}
            </g>
          );
        })}
      </svg>

      {/* Editorial Footnote */}
      <div className="w-full text-center mt-2 px-4">
        <p className="text-[11px] text-muted font-sans leading-relaxed">
          The five value areas operate interconnectedly around the sales-performance challenge.
        </p>
      </div>
    </div>
  );
};
