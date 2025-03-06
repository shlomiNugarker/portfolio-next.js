import { useEffect } from 'react'
import {
  Container,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion, Variants, useAnimation } from 'framer-motion'
import styles from './styles.module.css'
import Navigation from './Navigation'
import { mobileBreakpointsMap } from 'config/theme'
import useScrollDirection, { ScrollDirection } from 'hooks/useScrollDirection'

const mobileMenuVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -80,
    transition: { ease: 'easeInOut', duration: 0.35 },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { ease: 'easeInOut', duration: 0.28 },
  },
}

const Menu = () => {
  const bg = useColorModeValue('gray.100', 'black')
  const controls = useAnimation()
  const isMobile = Boolean(useBreakpointValue(mobileBreakpointsMap)) || false
  const scrollDirection = useScrollDirection(true, isMobile)

  useEffect(() => {
    controls.start(
      scrollDirection === ScrollDirection.Down && isMobile ? 'hidden' : 'show'
    )
  }, [isMobile, controls, scrollDirection])

  return (
    <motion.div
      initial={isMobile ? 'hidden' : false}
      variants={mobileMenuVariants}
      animate={controls}
      className={isMobile ? styles.mobileMenuContainer : ''}
      style={{ backgroundColor: isMobile ? bg : 'transparent' }}
    >
      <Container
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        padding={{ base: 5, lg: 0 }}
        py={{ base: 5, lg: 0 }}
        backgroundColor={isMobile ? bg : 'transparent'}
        width="100vw"
        maxWidth="100vw"
        margin={0}
      >
        <Navigation />
      </Container>
    </motion.div>
  )
}

export default Menu
