import React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'white' | 'paper' | 'softBlue' | 'navy' | 'deepBlue';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  interactive?: boolean;
  children: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'white',
      padding = 'md',
      interactive = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const variants = {
      white: 'bg-white text-charcoal border-paper shadow-sm',
      paper: 'bg-paper text-charcoal border-gray-200/70 shadow-sm',
      softBlue: 'bg-soft-blue text-deep-blue border-sky-brand/30 shadow-sm',
      navy: 'bg-navy text-white border-white/10 shadow-md',
      deepBlue: 'bg-deep-blue text-white border-sky-brand/20 shadow-md',
    };

    const paddings = {
      none: 'p-0',
      sm: 'p-4',
      md: 'p-6 sm:p-8',
      lg: 'p-8 sm:p-10',
    };

    const interactiveStyles = interactive
      ? 'transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-sky-brand/50 cursor-pointer'
      : '';

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-xl border',
          variants[variant],
          paddings[padding],
          interactiveStyles,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
