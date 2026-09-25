import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * AUTHORITATIVE GSAP & SCROLLTRIGGER INITIALIZATION
 * Level 3 Animation Engine: reserved exclusively for pinned scenes,
 * scrubbed timelines, and multi-stage scroll storytelling.
 */
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
