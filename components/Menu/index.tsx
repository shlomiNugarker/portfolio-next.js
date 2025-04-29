import { memo, useEffect } from 'react'
import { Container } from '@chakra-ui/react'
import { motion, Variants, useAnimation, AnimatePresence } from 'framer-motion'
import styles from './styles.module.css'
import Navigation from './Navigation'
import { useMenuState } from './hooks/useMenuState'
import { ScrollDirection } from 'hooks/useScrollDirection'

// Animation variants for menu appearance/disappearance
const menuVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -80,
    transition: {
      ease: [0.1, 0.25, 0.3, 1], // Custom easing curve
      duration: 0.35,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.1, 0.25, 0.3, 1],
      duration: 0.28,
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
  // Use our custom menu state hook
  const menuState = useMenuState(true)
  const { isMobile, scrollDirection, isOpen } = menuState

  // Animation controls
  const controls = useAnimation()

  // Update animation state based on scroll direction
  useEffect(() => {
    // Only hide when scrolling down AND menu is not open
    const shouldHide =
      scrollDirection === ScrollDirection.Down && isMobile && !isOpen
    controls.start(shouldHide ? 'hidden' : 'show')
  }, [isMobile, controls, scrollDirection, isOpen])

  return (
    <AnimatePresence>
      <motion.nav
        width="100%"
        role="navigation"
        aria-label="Main Navigation"
        initial={isMobile ? 'hidden' : false}
        variants={menuVariants}
        animate={controls}
        className={isMobile ? styles.mobileMenuContainer : ''}
        style={{
          zIndex: 9998, // Ensure proper stacking
          pointerEvents: isMobile && !isOpen ? 'none' : 'auto', // Disable pointer events when menu is closed
        }}
      >
        <Container
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          padding={{ base: 5, lg: 0 }}
          py={{ base: 5, lg: 0 }}
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
