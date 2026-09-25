import { useEffect, useRef, type RefObject } from 'react';
import { gsap } from '@/lib/gsap';

/**
 * useScrollTrigger
 * Encapsulates GSAP ScrollTrigger animations in a gsap.context().
 * Guarantees 100% memory-leak-free teardown and scroll-trigger unregistration on unmount.
 *
 * @param setup Callback where GSAP animations & ScrollTriggers are created
 * @param scope Optional container ref to scope selector queries
 * @param dependencies Optional dependency array to re-create triggers
 */
export function useScrollTrigger(
  setup: (context: gsap.Context) => void,
  scope?: RefObject<HTMLElement | null>,
  dependencies: unknown[] = []
): void {
  const setupRef = useRef(setup);
  setupRef.current = setup;

  useEffect(() => {
    // Automatically manage GSAP context & ScrollTrigger instances
    const ctx = gsap.context(() => {
      setupRef.current(ctx);
    }, scope?.current || undefined);

    return () => {
      // Revert removes all animations and ScrollTriggers created within this context
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
}
