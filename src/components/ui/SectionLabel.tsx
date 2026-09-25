import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionLabelProps {
  label: string;
  theme?: 'light' | 'dark';
  className?: string;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({
  label,
  theme = 'light',
  className,
}) => {
  const isDark = theme === 'dark';

  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border transition-colors select-none',
        isDark
          ? 'bg-navy/80 text-sky-brand border-sky-brand/30 shadow-sm'
          : 'bg-soft-blue text-deep-blue border-sky-brand/50 shadow-sm',
        className
      )}
      role="status"
      aria-label={label}
    >
      <span
        className={cn(
          'w-1.5 h-1.5 rounded-full animate-pulse',
          isDark ? 'bg-sky-brand' : 'bg-deep-blue'
        )}
        aria-hidden="true"
      />
      <span>{label}</span>
    </div>
  );
};
