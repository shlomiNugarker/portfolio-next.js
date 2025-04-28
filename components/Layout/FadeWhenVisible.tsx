import React, { useEffect, memo } from 'react'
import { useInView } from 'react-intersection-observer'
import {
  motion,
  useAnimation,
  Variants,
  AnimationControls,
} from 'framer-motion'
import { fadeInUp } from 'components/Core/Animated'
import { Box } from '@chakra-ui/react'
import useThemeStyles from 'hooks/theme/useThemeStyles'

interface FadeInWhenVisibleProps {
  children: React.ReactNode
  delay?: number
  triggerOnce?: boolean
  threshold?: number
  rootMargin?: string
  variants?: Variants
  className?: string
  style?: React.CSSProperties
  onVisible?: () => void
  id?: string
  as?: React.ElementType
}

/**
 * Component that animates its children when they enter the viewport
 * Uses Intersection Observer API and Framer Motion for smooth animations
 *
 * @deprecated Consider using the newer AnimatedBox from components/Core/Animated
 * which provides a more consistent API and better theme integration
 */
const FadeInWhenVisible: React.FC<FadeInWhenVisibleProps> = ({
  children,
  delay = 0,
  triggerOnce = true,
  threshold = 0.3,
  rootMargin = '0px',
  variants = fadeInUp,
  className = '',
  style = {},
  onVisible,
  id,
  as,
}) => {
  const controls: AnimationControls = useAnimation()
  const { theme } = useThemeStyles()
  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
    rootMargin,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
      onVisible?.()
    } else if (!triggerOnce) {
      controls.start('hidden')
    }
  }, [controls, inView, onVisible, triggerOnce])

  // Convert to a boxed element if as prop is provided
  const Element = as ? motion(Box) : motion.div

  // Use styling from our theme
  const elementStyle = {
    margin: 0,
    ...style,
  }

  // Default easing function
  const defaultEasing = [0.6, 0.05, -0.01, 0.9]

  return (
    <Element
      id={id}
      className={className}
      style={elementStyle}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      transition={{
        delay,
        duration: 0.5,
        ease: defaultEasing,
      }}
      data-testid="fade-in-container"
      as={as}
    >
      {children}
    </Element>
  )
}

// Use memo to prevent unnecessary re-renders
export default memo(FadeInWhenVisible)
