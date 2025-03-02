import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { fadeInUpSlower } from 'config/animations'

interface FadeInWhenVisibleProps {
  children: React.ReactNode
  delay?: number
  triggerOnce?: boolean
  threshold?: number
}

const FadeInWhenVisible: React.FC<FadeInWhenVisibleProps> = ({
  children,
  delay = 0,
  triggerOnce = true,
  threshold = 0.3,
}) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
  })

  useEffect(() => {
    if (inView) {
      controls.start('animate')
    }
  }, [controls, inView])

  return (
    <motion.div
      style={{ margin: 0 }}
      ref={ref}
      animate={controls}
      initial="initial"
      variants={fadeInUpSlower}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

export default FadeInWhenVisible
