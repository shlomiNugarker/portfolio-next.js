// Define a type for animation variants (partial, as Framer Motion accepts many properties)
export type MotionVariant = {
  initial?: object
  animate?: object
  exit?: object
  [key: string]: any
}

/**
 * Predefined durations for animations.
 */
const DURATIONS = {
  VeryFast: 0.3,
  Fast: 0.6,
  Normal: 0.8,
  Slow: 1.2,
  VerySlow: 1.8,
}

/**
 * Easing curve used across animations.
 */
const easing = [0.6, -0.05, 0.01, 0.99]

/**
 * Fade in and move up animation.
 */
const fadeInUp: MotionVariant = {
  initial: { y: 60, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: DURATIONS.Fast, ease: easing },
  },
}

/**
 * A slower version of fadeInUp animation.
 */
const fadeInUpSlower: MotionVariant = {
  initial: { y: 80, opacity: 1 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: DURATIONS.Normal, ease: easing },
  },
}

/**
 * Animation for letter spacing effect.
 */
const letterSpace: MotionVariant = {
  initial: { opacity: 0 },
  animate: {
    letterSpacing: ['0px', '-10px', '0px'],
    opacity: 1,
    transition: { duration: DURATIONS.Slow, ease: easing },
  },
}

/**
 * Simple opacity fade in animation.
 */
const simpleOpacity: MotionVariant = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: DURATIONS.Fast, ease: easing },
  },
}

/**
 * Scale-up animation with a subtle bounce effect.
 */
const scaleUp: MotionVariant = {
  initial: { scale: 0, opacity: 0 },
  animate: {
    opacity: [0, 1],
    scale: [1, 1.05, 1],
    transition: { duration: DURATIONS.VerySlow, ease: easing },
  },
  // Alternative variant for light mode if needed.
  lightMode: {
    opacity: [0, 1],
    scale: [0.99, 1.05, 1],
    transition: { duration: DURATIONS.VerySlow, ease: easing },
  },
}

/**
 * Animation for menu open/close.
 */
const menuAnim: MotionVariant = {
  show: {
    y: 0,
    opacity: 1,
    transition: { ease: easing, duration: DURATIONS.VeryFast },
  },
  hide: {
    opacity: 0,
    y: -100,
    transition: { ease: easing, duration: DURATIONS.VeryFast },
  },
}

/**
 * Animation for the avatar component.
 */
const avatarAnimation: MotionVariant = {
  initial: { opacity: 0, y: 60 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: DURATIONS.Fast, ease: easing },
  },
  exit: { opacity: 0 },
}

/**
 * Stagger children animation with a 0.1-second gap.
 */
const stagger: MotionVariant = {
  animate: { transition: { staggerChildren: 0.1 } },
}

/**
 * Gallery stagger animation with a 0.2-second gap.
 */
const galleryStagger: MotionVariant = {
  animate: { transition: { staggerChildren: 0.2 } },
}

// Exporting all defined animations
export {
  DURATIONS,
  easing,
  fadeInUp,
  fadeInUpSlower,
  letterSpace,
  stagger,
  galleryStagger,
  simpleOpacity,
  menuAnim,
  scaleUp,
  avatarAnimation,
}
