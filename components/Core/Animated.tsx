import { Box, BoxProps } from '@chakra-ui/react'
import { motion, MotionProps, Variants } from 'framer-motion'
import { ReactNode } from 'react'
import { useInView } from 'react-intersection-observer'

// Pre-defined animation variants
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
}

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
}

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
}

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
}

// Animation with staggered children
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}
// Combine only the props we need to avoid type conflicts
interface AnimatedBoxProps extends Omit<BoxProps, keyof MotionProps> {
  children: ReactNode
  animationVariant?: Variants
  delay?: number
  threshold?: number
  triggerOnce?: boolean
  // Add motion props we need explicitly
  initial?: MotionProps['initial']
  animate?: MotionProps['animate']
  exit?: MotionProps['exit']
  transition?: MotionProps['transition']
  variants?: MotionProps['variants']
  whileHover?: MotionProps['whileHover']
  whileTap?: MotionProps['whileTap']
}

// Create motion components
const MotionBox = motion(Box)

/**
 * AnimatedBox component for adding animations to content
 * Uses Framer Motion and Intersection Observer for scroll-based animations
 */
export const AnimatedBox = ({
  children,
  animationVariant = fadeInUp,
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
  ...props
}: AnimatedBoxProps) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  })

  return (
    <MotionBox
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={animationVariant}
      transition={{ delay }}
      spacing={{ base: 6, xl: 8 }}
      {...props}
    >
      {children}
    </MotionBox>
  )
}

/**
 * AnimatedContainer component for staggered children animations
 */
export const AnimatedContainer = ({
  children,
  animationVariant = staggerContainer,
  threshold = 0.1,
  triggerOnce = true,
  ...props
}: AnimatedBoxProps) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  })

  return (
    <MotionBox
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={animationVariant}
      {...props}
    >
      {children}
    </MotionBox>
  )
}

export default {
  Box: AnimatedBox,
  Container: AnimatedContainer,
}
