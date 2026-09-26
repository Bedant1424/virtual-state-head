import React from 'react';
import { clsx } from 'clsx';
import { SolutionCapability } from '@/data/siteContent';
import { FocusKey } from './LeadershipLayerVisual';
import {
  Compass,
  Users,
  Shield,
  CalendarCheck,
  CheckCircle2,
  MessageSquareQuote,
  ChevronRight,
} from 'lucide-react';

interface CapabilitySystemProps {
  capabilities: readonly SolutionCapability[];
  activeFocus: FocusKey;
  onFocusChange: (key: FocusKey) => void;
  className?: string;
}

// Icon mapper for the 6 capabilities
const capabilityIcons: Record<string, React.FC<{ className?: string }>> = {
  strategy: Compass,
  team: Users,
  leadership: Shield,
  accountability: CalendarCheck,
  execution: CheckCircle2,
  discussions: MessageSquareQuote,
};

export const CapabilitySystem: React.FC<CapabilitySystemProps> = ({
  capabilities,
  activeFocus,
  onFocusChange,
  className,
}) => {
  return (
    <div className={clsx('w-full', className)}>
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-muted">
          Six Core Dimensions of Support
        </span>
        <span className="text-[11px] font-sans text-muted hidden sm:inline-block">
          Hover or tap to trace alignment
        </span>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-3"
        role="region"
        aria-label="Sales Performance Capability Dimensions"
      >
        {capabilities.map((cap) => {
          const isActive = activeFocus === cap.focusKey;
          const Icon = capabilityIcons[cap.focusKey] || Compass;

          return (
            <div
              key={cap.id}
              role="button"
              tabIndex={0}
              onMouseEnter={() => onFocusChange(cap.focusKey)}
              onMouseLeave={() => onFocusChange(null)}
              onFocus={() => onFocusChange(cap.focusKey)}
              onBlur={() => onFocusChange(null)}
              onClick={() => onFocusChange(isActive ? null : cap.focusKey)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onFocusChange(isActive ? null : cap.focusKey);
                }
              }}
              className={clsx(
                'group relative rounded-xl p-4 sm:p-4.5 text-left transition-all duration-200 cursor-pointer outline-none select-none',
                'border',
                isActive
                  ? 'bg-soft-blue/60 border-deep-blue shadow-sm ring-1 ring-deep-blue/20'
                  : 'bg-white border-gray-200/80 hover:border-deep-blue/40 hover:bg-paper/40'
              )}
              aria-pressed={isActive}
            >
              {/* Header Row: Number + Icon + Status indicator */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span
                    className={clsx(
                      'font-mono text-xs font-bold transition-colors',
                      isActive ? 'text-deep-blue' : 'text-muted group-hover:text-deep-blue'
                    )}
                  >
                    {cap.number}
                  </span>
                  <div
                    className={clsx(
                      'w-7 h-7 rounded-lg flex items-center justify-center transition-colors',
                      isActive
                        ? 'bg-deep-blue text-white shadow-xs'
                        : 'bg-paper text-deep-blue group-hover:bg-soft-blue'
                    )}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="flex items-center">
                  <ChevronRight
                    className={clsx(
                      'w-4 h-4 transition-transform duration-200',
                      isActive
                        ? 'text-deep-blue translate-x-0.5'
                        : 'text-gray-300 group-hover:text-deep-blue/60'
                    )}
                  />
                </div>
              </div>

              {/* Title */}
              <h3
                className={clsx(
                  'text-sm font-bold tracking-tight mb-1 transition-colors',
                  isActive ? 'text-deep-blue' : 'text-navy group-hover:text-deep-blue'
                )}
              >
                {cap.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-muted leading-relaxed line-clamp-3">
                {cap.description}
              </p>

              {/* Active Base Bar */}
              <div
                className={clsx(
                  'absolute bottom-0 left-3 right-3 h-0.5 rounded-full transition-opacity duration-200',
                  isActive ? 'bg-deep-blue opacity-100' : 'bg-transparent opacity-0'
                )}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
