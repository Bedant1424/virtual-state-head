import { useRef, useEffect, useState, type RefObject } from 'react';

/**
 * Shared motion hooks for purposeful, performant choreography.
 * LEVEL 1: GlobalSalesSignal (atmospheric, CSS)
 * LEVEL 2: Sales Performance Engine (cinematic scroll scrub)
 * LEVEL 3: Major photography (subtle parallax / scale / crop reveal)
 * LEVEL 4: Typography (restrained one-time reveals)
 * LEVEL 5: Interactions (FAQ drawer, buttons)
 */

/** Hook: triggers once when element enters viewport */
export function useScrollReveal(
  threshold = 0.12,
  rootMargin = '0px 0px -40px 0px'
): [RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

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
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        rafId = requestAnimationFrame(() => {
          if (el) {
            const rect = el.getBoundingClientRect();
            const vh = window.innerHeight;
            const raw = (vh - rect.top) / (vh + rect.height);
            setProgress(Math.max(0, Math.min(1, raw)));
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // initial check

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return [ref, progress];
}

/** Hook: subtle scroll-linked image crop & translation (Level 3 photography motion) */
export function useImageParallax(
  maxScale = 1.04,
  maxTranslateY = 20
): [RefObject<HTMLDivElement | null>, { transform: string; willChange: string }] {
  const [ref, progress] = useScrollProgress();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // On mobile, keep transform lightweight
  if (isMobile) {
    return [ref, { transform: 'scale(1)', willChange: 'auto' }];
  }

  const scale = 1.0 + progress * (maxScale - 1.0);
  const translateY = (progress - 0.5) * -maxTranslateY;

  return [
    ref,
    {
      transform: `scale(${scale.toFixed(3)}) translateY(${translateY.toFixed(1)}px)`,
      willChange: 'transform',
    },
  ];
}

/** Stagger delay calculator: crisp, tight micro-delays (30–50ms) */
export function staggerDelay(index: number, base = 40): string {
  return `${index * base}ms`;
}

/** Motion variant classes for crisp, restrained reveals */
export const revealStyles = {
  hidden: 'opacity-0 translate-y-4',
  visible: 'opacity-100 translate-y-0',
  transition: 'transition-all duration-500 ease-out',
  imageHidden: 'opacity-0 scale-[1.04]',
  imageVisible: 'opacity-100 scale-100',
  imageTransition: 'transition-all duration-700 ease-out',
  clipMaskContainer: 'overflow-hidden',
  clipMaskHidden: 'translate-y-full opacity-0',
  clipMaskVisible: 'translate-y-0 opacity-100',
  clipMaskTransition: 'transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]',
} as const;
