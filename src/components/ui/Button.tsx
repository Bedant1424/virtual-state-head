import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'contrast';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      className,
      disabled,
      children,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-bold tracking-tight rounded-md transition-all duration-200 cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-brand focus-visible:ring-offset-2 active:scale-[0.98]';

    const variants = {
      primary:
        'bg-deep-blue text-white hover:bg-navy border border-deep-blue hover:border-sky-brand shadow-sm hover:shadow',
      secondary:
        'bg-soft-blue text-deep-blue hover:bg-white border border-sky-brand/40 hover:border-sky-brand',
      outline:
        'bg-transparent text-deep-blue border border-deep-blue/30 hover:border-deep-blue hover:bg-soft-blue/50',
      ghost:
        'bg-transparent text-charcoal hover:text-deep-blue hover:bg-soft-blue/40 border border-transparent',
      contrast:
        'bg-white text-navy hover:bg-soft-blue border border-white/80 shadow-sm',
    };

    const sizes = {
      sm: 'text-xs px-3.5 py-1.5 gap-1.5',
      md: 'text-sm px-5 py-2.5 gap-2',
      lg: 'text-base px-6 py-3.5 gap-2.5',
    };

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
