/**
 * MOTION CONFIGURATION & PRESETS
 * Respects prefers-reduced-motion and prioritizes transform/opacity animations
 * to ensure 60fps performance without triggering browser layout recalculations.
 */

export const motionTransitions = {
  snappy: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
  smooth: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] },
  gentle: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  spring: { type: 'spring', damping: 25, stiffness: 300 },
} as const;

export const createFadeUp = (reducedMotion: boolean = false) => ({
  initial: reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: reducedMotion ? { duration: 0 } : motionTransitions.smooth,
});

export const createFadeIn = (reducedMotion: boolean = false) => ({
  initial: reducedMotion ? { opacity: 1 } : { opacity: 0 },
  animate: { opacity: 1 },
  transition: reducedMotion ? { duration: 0 } : motionTransitions.smooth,
});

export const createStaggerContainer = (
  staggerChildren: number = 0.08,
  delayChildren: number = 0
) => ({
  initial: {},
  animate: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const interactiveHover = {
  hover: {
    y: -2,
    transition: motionTransitions.snappy,
  },
  tap: {
    scale: 0.98,
    transition: { duration: 0.1 },
  },
};
