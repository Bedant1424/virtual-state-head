import React from 'react';
import { clsx } from 'clsx';
import { BusinessValueArea, ValueAreaKey } from '@/data/siteContent';

export interface ActiveValuePanelProps {
  valueAreas: readonly BusinessValueArea[];
  activeKey: ValueAreaKey;
  onSelectKey: (key: ValueAreaKey) => void;
  className?: string;
}

/**
 * ActiveValuePanel
 * Editorial active card displaying the currently focused value area.
 * Designed in high-end consulting editorial aesthetic.
 * Strictly avoids dashboard widgets, fake metrics, progress bars, or KPI chips.
 */
export const ActiveValuePanel: React.FC<ActiveValuePanelProps> = ({
  valueAreas,
  activeKey,
  onSelectKey,
  className,
}) => {
  const activeArea = valueAreas.find((v) => v.valueKey === activeKey) ?? valueAreas[0];

  return (
    <div
      className={clsx(
        'w-full rounded-2xl bg-white border border-gray-200/90 shadow-sm p-5 sm:p-7 transition-all duration-300',
        className
      )}
      aria-live="polite"
    >
      {/* Selector Navigation Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-6" role="tablist" aria-label="Select business value area">
        {valueAreas.map((area) => {
          const isActive = area.valueKey === activeKey;
          return (
            <button
              key={area.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`value-panel-${area.valueKey}`}
              id={`value-tab-${area.valueKey}`}
              onClick={() => onSelectKey(area.valueKey)}
              className={clsx(
                'inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-deep-blue focus-visible:ring-offset-2',
                isActive
                  ? 'bg-deep-blue text-white shadow-xs'
                  : 'bg-paper text-deep-blue hover:bg-soft-blue/60 hover:text-deep-blue'
              )}
            >
              <span
                className={clsx(
                  'w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold',
                  isActive ? 'bg-sky-brand text-deep-blue' : 'bg-white text-muted border border-gray-200'
                )}
              >
                {area.number}
              </span>
              <span className="hidden xs:inline sm:inline">{area.shortLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Active Content Display */}
      <div
        id={`value-panel-${activeArea.valueKey}`}
        role="tabpanel"
        aria-labelledby={`value-tab-${activeArea.valueKey}`}
        className="space-y-4"
      >
        {/* Number & Category Pill */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-soft-blue text-deep-blue text-xs font-bold font-mono border border-sky-brand/40">
              {activeArea.number}
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-deep-blue">
              Area of Support
            </span>
          </div>
          <span className="text-xs font-medium text-muted font-mono">
            {activeArea.visualConcept}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-deep-blue font-serif tracking-tight">
          {activeArea.title}
        </h3>

        {/* Approved Verbatim Description */}
        <p className="text-base sm:text-lg text-charcoal/90 leading-relaxed font-sans font-normal">
          {activeArea.description}
        </p>

        {/* System Integration Note */}
        <div className="pt-3 border-t border-gray-100 flex items-center gap-2 text-xs text-muted">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-brand" />
          <span>Integrates directly with the overarching sales performance system.</span>
        </div>
      </div>
    </div>
  );
};
