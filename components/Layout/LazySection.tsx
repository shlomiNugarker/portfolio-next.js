import { ReactNode, useEffect, useState, useRef } from 'react'
import { Box, BoxProps, Skeleton } from '@chakra-ui/react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

interface LazySectionProps extends BoxProps {
  children: ReactNode
  threshold?: number
  triggerOnce?: boolean
  placeholder?: ReactNode
  delay?: number
  animation?: 'fadeIn' | 'fadeUp' | 'none'
}

/**
 * LazySection component that renders content only when it comes into view
 * Improves performance by deferring the rendering of off-screen content
 */
const LazySection = ({
  children,
  threshold = 0.1,
  triggerOnce = true,
  placeholder,
  delay = 0,
  animation = 'fadeIn',
  ...rest
}: LazySectionProps) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  })

  // Load content with delay when in view
  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setIsLoaded(true)
      }, delay)
      return () => clearTimeout(timer)
    }
    return undefined
  }, [inView, delay])

  // Define animation variants
  const getAnimationVariant = () => {
    switch (animation) {
      case 'fadeIn':
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.6 } },
        }
      case 'fadeUp':
        return {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }
      case 'none':
      default:
        return {
          hidden: {},
          visible: {},
        }
    }
  }

  const variants = getAnimationVariant()

  return (
    <Box ref={ref} {...rest}>
      {isLoaded ? (
        <MotionBox
          initial="hidden"
          animate="visible"
          variants={variants}
          width="100%"
        >
          {children}
        </MotionBox>
      ) : (
        placeholder || (
          <Skeleton
            startColor="gray.100"
            endColor="gray.200"
            height="200px"
            width="100%"
            borderRadius="md"
            fadeDuration={1}
          />
        )
      )}
    </Box>
  )
}

export default LazySection
