import { useEffect, memo } from 'react'
import {
  Container,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion, Variants, useAnimation, AnimatePresence } from 'framer-motion'
import styles from './styles.module.css'
import Navigation from './Navigation'
import { mobileBreakpointsMap } from 'config/theme'
import useScrollDirection, { ScrollDirection } from 'hooks/useScrollDirection'

// Animation variants for menu appearance/disappearance
const menuVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -80,
    transition: { 
      ease: [0.1, 0.25, 0.3, 1], // Custom easing curve
      duration: 0.35 
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { 
      ease: [0.1, 0.25, 0.3, 1], 
      duration: 0.28 
    },
  },
}

/**
 * Main navigation menu component
 * Features:
 * - Responsive design (mobile/desktop layouts)
 * - Hide on scroll down on mobile
 * - Smooth animations
 * - Theme-aware styling
 */
const Menu = () => {
  // Theme and responsive values
  const bg = useColorModeValue('gray.100', 'black')
  const boxShadow = useColorModeValue(
    '0 2px 10px rgba(0,0,0,0.05)',
    '0 2px 10px rgba(0,0,0,0.2)'
  )
  const isMobile = useBreakpointValue(mobileBreakpointsMap) || false
  
  // Animation controls
  const controls = useAnimation()
  const scrollDirection = useScrollDirection(true, isMobile)

  // Update animation state based on scroll direction
  useEffect(() => {
    const shouldHide = scrollDirection === ScrollDirection.Down && isMobile
    controls.start(shouldHide ? 'hidden' : 'show')
  }, [isMobile, controls, scrollDirection])

  return (
    <AnimatePresence>
      <motion.nav
        role="navigation"
        aria-label="Main Navigation"
        initial={isMobile ? 'hidden' : false}
        variants={menuVariants}
        animate={controls}
        className={isMobile ? styles.mobileMenuContainer : ''}
        style={{ 
          backgroundColor: isMobile ? bg : 'transparent',
          boxShadow: isMobile ? boxShadow : 'none',
          zIndex: 1000,
        }}
      >
        <Container
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          padding={{ base: 5, lg: 0 }}
          py={{ base: 5, lg: 0 }}
          backgroundColor={isMobile ? bg : 'transparent'}
          width="100%"
          maxWidth="100vw"
          margin={0}
          position={isMobile ? 'fixed' : 'relative'}
          top={0}
          left={0}
          right={0}
        >
          <Navigation />
        </Container>
      </motion.nav>
    </AnimatePresence>
  )
}

export default memo(Menu)