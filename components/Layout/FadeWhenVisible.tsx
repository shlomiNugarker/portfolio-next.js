import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { fadeInUpSlower } from 'config/animations'

interface FadeInWhenVisibleProps {
  children: React.ReactNode
  delay?: number // מאפשר עיכוב באנימציה
  triggerOnce?: boolean // קובע אם להפעיל את האנימציה רק פעם אחת
  threshold?: number // כמה אחוז מהאלמנט צריך להופיע לפני ההפעלה
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
      transition={{ delay }} // מאפשר עיכוב דינמי
    >
      {children}
    </motion.div>
  )
}

export default FadeInWhenVisible
