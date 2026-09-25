import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  background?: 'white' | 'paper' | 'softBlue' | 'navy' | 'deepBlue';
  spacing?: 'none' | 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const SectionWrapper = React.forwardRef<HTMLElement, SectionWrapperProps>(
  (
    {
      id,
      background = 'white',
      spacing = 'md',
      className,
      children,
      ...props
    },
    ref
  ) => {
    const backgrounds = {
      white: 'bg-white text-charcoal',
      paper: 'bg-paper text-charcoal border-y border-gray-200/60',
      softBlue: 'bg-soft-blue text-deep-blue border-y border-sky-brand/20',
      navy: 'bg-navy text-white',
      deepBlue: 'bg-deep-blue text-white',
    };

    const spacings = {
      none: 'py-0',
      sm: 'py-10 sm:py-14',
      md: 'py-16 sm:py-20 lg:py-24',
      lg: 'py-20 sm:py-28 lg:py-32',
    };

    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          'relative w-full overflow-hidden',
          backgrounds[background],
          spacings[spacing],
          className
        )}
        {...props}
      >
        {children}
      </section>
    );
  }
);

SectionWrapper.displayName = 'SectionWrapper';
