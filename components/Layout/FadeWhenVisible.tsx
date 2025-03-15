import React, { useEffect, memo } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation, Variants, AnimationControls } from 'framer-motion'
import { fadeInUpSlower } from 'config/animations'

interface FadeInWhenVisibleProps {
  children: React.ReactNode;
  delay?: number;
  triggerOnce?: boolean;
  threshold?: number;
  rootMargin?: string;
  variants?: Variants;
  className?: string;
  style?: React.CSSProperties;
  onVisible?: () => void;
  id?: string;
}

/**
 * Component that animates its children when they enter the viewport
 * Uses Intersection Observer API and Framer Motion for smooth animations
 */
const FadeInWhenVisible: React.FC<FadeInWhenVisibleProps> = ({
  children,
  delay = 0,
  triggerOnce = true,
  threshold = 0.3,
  rootMargin = "0px",
  variants = fadeInUpSlower,
  className = "",
  style = {},
  onVisible,
  id,
}) => {
  const controls: AnimationControls = useAnimation()
  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
    rootMargin,
  })

  useEffect(() => {
    if (inView) {
      controls.start('animate')
      onVisible?.()
    } else if (!triggerOnce) {
      controls.start('initial')
    }
  }, [controls, inView, onVisible, triggerOnce])

  return (
    <motion.div
      id={id}
      className={className}
      style={{ margin: 0, ...style }}
      ref={ref}
      animate={controls}
      initial="initial"
      variants={variants}
      transition={{ 
        delay, 
        duration: 0.5,
        ease: [0.6, 0.05, -0.01, 0.9] 
      }}
      data-testid="fade-in-container"
    >
      {children}
    </motion.div>
  )
}

// Use memo to prevent unnecessary re-renders
export default memo(FadeInWhenVisible)