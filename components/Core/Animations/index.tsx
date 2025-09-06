import { ReactNode, forwardRef } from 'react'
import { Box, BoxProps } from '@chakra-ui/react'
import { motion, AnimatePresence, MotionProps } from 'framer-motion'
import { fadeInUp, fadeIn, staggerContainer, scaleUp } from 'config/animations'

// Base motion components
export const MotionBox = motion(Box)
export const MotionBoxWithRef = forwardRef<
  HTMLDivElement,
  BoxProps & MotionProps
>((props, ref) => <MotionBox ref={ref} {...props} />)
MotionBoxWithRef.displayName = 'MotionBoxWithRef'

// Animation wrapper components
interface AnimationWrapperProps extends BoxProps {
  children: ReactNode
  delay?: number
  duration?: number
  animation?: 'fadeIn' | 'fadeInUp' | 'scaleUp' | 'none'
  once?: boolean
}

export const AnimatedElement = ({
  children,
  delay = 0,
  duration = 0.5,
  animation = 'fadeIn',
  once = true,
  ...rest
}: AnimationWrapperProps) => {
  const getAnimationVariant = () => {
    switch (animation) {
      case 'fadeInUp':
        return fadeInUp
      case 'scaleUp':
        return scaleUp
      case 'fadeIn':
        return fadeIn
      case 'none':
        return {}
      default:
        return fadeIn
    }
  }

  return (
    <MotionBox
      initial="initial"
      whileInView="animate"
      viewport={{ once }}
      variants={getAnimationVariant()}
      transition={{ delay, duration, ease: 'easeOut' }}
      {...rest}
    >
      {children}
    </MotionBox>
  )
}

// Staggered children animation
interface StaggeredContainerProps extends BoxProps {
  children: ReactNode
  staggerDelay?: number
  containerDelay?: number
  staggerAmount?: number
  animation?: 'fadeIn' | 'fadeInUp' | 'scaleUp'
}

export const StaggeredContainer = ({
  children,
  staggerDelay = 0.1,
  containerDelay = 0,
  staggerAmount = 0.1,
  animation = 'fadeIn',
  ...rest
}: StaggeredContainerProps) => {
  const childVariant =
    animation === 'fadeInUp'
      ? fadeInUp
      : animation === 'scaleUp'
      ? scaleUp
      : fadeIn

  return (
    <MotionBox
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{ delay: containerDelay, staggerChildren: staggerAmount }}
      {...rest}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <MotionBox
              key={`staggered-child-${index}`}
              variants={childVariant}
              transition={{
                delay: staggerDelay * index,
                duration: 0.5,
                ease: 'easeOut',
              }}
            >
              {child}
            </MotionBox>
          ))
        : children}
    </MotionBox>
  )
}

// Animated presence wrapper for elements that need to animate in/out
interface AnimatedPresenceWrapperProps {
  children: ReactNode
  isVisible: boolean
  presenceKey?: string
  exitBeforeEnter?: boolean
}

export const AnimatedPresenceWrapper = ({
  children,
  isVisible,
  presenceKey = 'unique-key',
  exitBeforeEnter = true,
}: AnimatedPresenceWrapperProps) => (
  <AnimatePresence mode={exitBeforeEnter ? 'wait' : 'sync'}>
    {isVisible && (
      <MotionBox
        key={presenceKey}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </MotionBox>
    )}
  </AnimatePresence>
)

// Hover animation wrapper
interface HoverAnimationProps extends BoxProps {
  children: ReactNode
  scale?: number
  y?: number
  duration?: number
}

export const HoverAnimation = ({
  children,
  scale = 1.05,
  y = -5,
  duration = 0.3,
  ...rest
}: HoverAnimationProps) => (
  <MotionBox
    whileHover={{
      scale,
      y,
      transition: { duration, ease: 'easeOut' },
    }}
    {...rest}
  >
    {children}
  </MotionBox>
)

// Scroll triggered animation
interface ScrollAnimationProps extends BoxProps {
  children: ReactNode
  threshold?: number
  animation?: 'fadeIn' | 'fadeInUp' | 'scaleUp'
  delay?: number
  duration?: number
}

export const ScrollAnimation = ({
  children,
  threshold = 0.1,
  animation = 'fadeIn',
  delay = 0,
  duration = 0.5,
  ...rest
}: ScrollAnimationProps) => {
  const getAnimationVariant = () => {
    switch (animation) {
      case 'fadeInUp':
        return fadeInUp
      case 'scaleUp':
        return scaleUp
      case 'fadeIn':
      default:
        return fadeIn
    }
  }

  return (
    <MotionBox
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, threshold }}
      variants={getAnimationVariant()}
      transition={{ delay, duration, ease: 'easeOut' }}
      {...rest}
    >
      {children}
    </MotionBox>
  )
}

// Export all animations
export { fadeIn, fadeInUp, staggerContainer, scaleUp }
