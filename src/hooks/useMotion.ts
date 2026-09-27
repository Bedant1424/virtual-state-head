import { useRef, useEffect, useState, type RefObject } from 'react';

/**
 * Shared motion hooks for scroll-driven choreography.
 * Uses IntersectionObserver for reveal triggers.
 * GSAP ScrollTrigger for the Engine cinematic sequence.
 */

/** Hook: triggers once when element enters viewport */
export function useScrollReveal(
  threshold = 0.15,
  rootMargin = '0px 0px -60px 0px'
): [RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, isVisible];
}

/** Hook: returns scroll progress (0–1) while element is in viewport */
export function useScrollProgress(): [RefObject<HTMLDivElement | null>, number] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      setProgress(1);
      return;
    }

    let rafId: number;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when top enters bottom of viewport, 1 when bottom exits top
      const raw = (vh - rect.top) / (vh + rect.height);
      setProgress(Math.max(0, Math.min(1, raw)));
      rafId = requestAnimationFrame(update);
    };

    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return [ref, progress];
}

/** Stagger delay calculator */
export function staggerDelay(index: number, base = 80): string {
  return `${index * base}ms`;
}

/** Motion variant classes for reveal animations */
export const revealStyles = {
  hidden: 'opacity-0 translate-y-6',
  visible: 'opacity-100 translate-y-0',
  transition: 'transition-all duration-700 ease-out',
  imageHidden: 'opacity-0 scale-105',
  imageVisible: 'opacity-100 scale-100',
  imageTransition: 'transition-all duration-1000 ease-out',
} as const;
