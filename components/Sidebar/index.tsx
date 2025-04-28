import { memo, useEffect, useMemo, useState } from 'react'
import {
  Stack,
  Heading,
  Text,
  Container,
  Link,
  Box,
  Icon,
  useBreakpointValue,
  StackProps,
} from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './styles.module.css'
import { fadeInUp, simpleOpacity, stagger } from 'config/animations'
import { SocialMedias } from 'config/sidebar'
import { useTranslation } from 'next-i18next'
import useThemeStyles from 'hooks/theme/useThemeStyles'

// Custom animations
const scaleUpWithGlow = {
  initial: { scale: 0.95, opacity: 0, filter: 'blur(10px)' },
  animate: {
    scale: 1,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.9,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  lightMode: {
    scale: 1.02,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.9,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

// const floatKeyframes = keyframes`
//   0% { transform: translateY(0px); }
//   50% { transform: translateY(-10px); }
//   100% { transform: translateY(0px); }
// `

// Enhanced fade-in animation
const enhancedFadeInUp = {
  initial: { y: 30, opacity: 0, filter: 'blur(5px)' },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
}

// Pre-define motion components outside the component to prevent recreation on each render
const MotionBox = motion(Box)
const MotionStack = motion(Stack)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)

/**
 * Sidebar component displays personal information and social media links
 * Features responsive design and animations
 */
const Sidebar = () => {
  const { t, i18n } = useTranslation('common')
  const { isDarkMode, getPrimaryColor, getSecondaryColor, getAccentColor } =
    useThemeStyles()
  const display = useBreakpointValue({ base: 'none', lg: 'block' })
  const direction = i18n.dir()
  const isRtl = direction === 'rtl'
  const [loaded, setLoaded] = useState(false)

  // Extract stack props for better readability
  const stackProps: StackProps = useMemo(
    () => ({
      spacing: 6,
      width: '100%',
      textAlign: { base: 'center', lg: 'start' },
    }),
    []
  )

  // Add and remove sidebar circle class safely
  useEffect(() => {
    const sidebarCircle = document.getElementById('sidebarCircle')
    if (sidebarCircle) {
      sidebarCircle.classList.add('show')
    }

    // Set loaded state after a delay to stagger animations
    const timer = setTimeout(() => {
      setLoaded(true)
    }, 300)

    // Cleanup function
    return () => {
      clearTimeout(timer)
      const circle = document.getElementById('sidebarCircle')
      if (circle) {
        circle.classList.remove('show')
      }
    }
  }, [])

  // Animation for floating effect
  // const floatAnimation = `${floatKeyframes} 6s ease-in-out infinite`

  return (
    <MotionBox
      initial="initial"
      animate="animate"
      position={{ xl: 'fixed' }}
      maxWidth={{ xl: '34%' }}
      top={{ lg: 0 }}
    >
      {/* Animated background circle */}
      <motion.div
        id="sidebarCircle"
        className={`
          ${styles.sidebar} 
          ${!isDarkMode ? styles.dark : styles.light} 
          ${isRtl ? styles.rtl : ''}
        `}
        variants={scaleUpWithGlow}
        style={{ display }}
        animate={isDarkMode ? 'animate' : 'lightMode'}
        aria-hidden="true" // This is decorative, so hide from screen readers
      />

      <Container
        padding={0}
        margin={0}
        height={{ xl: '100vh' }}
        display="flex"
        alignItems="center"
      >
        <AnimatePresence>
          {loaded && (
            <MotionStack
              variants={stagger}
              {...stackProps}
              initial="initial"
              animate="animate"
              position="relative"
              zIndex={1}
            >
              {/* Decorative accent element */}
              <Box
                position="absolute"
                top="-35px"
                left={isRtl ? 'auto' : { base: '50%', lg: '-15px' }}
                right={isRtl ? { base: '50%', lg: '-15px' } : 'auto'}
                transform={{ base: 'translateX(-50%)', lg: 'none' }}
                width="30px"
                height="4px"
                bgGradient={`linear(to-r, ${getPrimaryColor()}, transparent)`}
                borderRadius="full"
              />

              {/* Welcome text */}
              <MotionText
                custom={0}
                variants={enhancedFadeInUp}
                variant="accent"
                fontWeight="light"
                width="100%"
                color={getPrimaryColor()}
                className={styles.glowText}
              >
                {t('sidebar.welcome')}
              </MotionText>

              {/* Name heading */}
              <MotionHeading
                custom={1}
                as="h1"
                size="2xl"
                paddingInlineEnd={{ lg: '20' }}
                textTransform="uppercase"
                variants={enhancedFadeInUp}
                letterSpacing="wider"
                fontWeight="extrabold"
                position="relative"
                _after={{
                  content: '""',
                  position: 'absolute',
                  bottom: '-8px',
                  left: isRtl ? 'auto' : { base: '50%', lg: '0' },
                  right: isRtl ? { base: '50%', lg: '0' } : 'auto',
                  transform: {
                    base: 'translateX(-50%)',
                    lg: isRtl ? 'translateX(0)' : 'translateX(0)',
                  },
                  height: '2px',
                  width: { base: '60%', lg: '100px' },
                  background: `linear-gradient(90deg, ${getPrimaryColor()} 0%, transparent 100%)`,
                  borderRadius: 'full',
                }}
              >
                {t('sidebar.name')}
              </MotionHeading>

              {/* Role heading */}
              <MotionHeading
                custom={2}
                as="h2"
                size="xl"
                variant="emphasis"
                className={styles.marginTopSmall}
                variants={enhancedFadeInUp}
                color={getPrimaryColor()}
                position="relative"
                _after={{
                  content: '""',
                  position: 'absolute',
                  bottom: '-8px',
                  left: isRtl ? 'auto' : { base: '50%', lg: '0' },
                  right: isRtl ? { base: '50%', lg: '0' } : 'auto',
                  transform: {
                    base: 'translateX(-50%)',
                    lg: isRtl ? 'translateX(0)' : 'translateX(0)',
                  },
                  height: '3px',
                  width: { base: '40%', lg: '100px' },
                  background: `linear-gradient(90deg, ${getSecondaryColor()} 0%, transparent 100%)`,
                  borderRadius: 'full',
                }}
              >
                {t('sidebar.role')}
              </MotionHeading>

              {/* Description text */}
              <MotionText
                custom={3}
                variant="description"
                fontSize="md"
                paddingInlineEnd={{ lg: '12' }}
                variants={enhancedFadeInUp}
                maxWidth={{ base: '100%', lg: '80%' }}
                lineHeight="taller"
                className={`${styles.glassCard}`}
                p={4}
                borderRadius="md"
              >
                {t('sidebar.description')}
              </MotionText>

              {/* Social media links */}
              <MotionBox
                custom={4}
                display="flex"
                justifyContent={{
                  base: 'center',
                  lg: isRtl ? 'flex-start' : 'flex-start',
                }}
                variants={enhancedFadeInUp}
                width="100%"
                mt={4}
              >
                {SocialMedias.map(({ label, href, icon }, index) => (
                  <MotionBox
                    key={label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.7 + index * 0.1, duration: 0.5 },
                    }}
                  >
                    <Link
                      aria-label={`Visit ${label} profile`}
                      rel="noreferrer noopener"
                      width={14}
                      href={href}
                      target="_blank"
                      _hover={{
                        color: getSecondaryColor(),
                      }}
                    >
                      <Icon
                        as={icon}
                        display="block"
                        mx={2}
                        fontSize="xl"
                        className={styles.socialIcon}
                      />
                    </Link>
                  </MotionBox>
                ))}
              </MotionBox>

              {/* Decorative element at the bottom */}
              <Box
                position="absolute"
                bottom="-35px"
                left={isRtl ? 'auto' : { base: '50%', lg: '0' }}
                right={isRtl ? { base: '50%', lg: '0' } : 'auto'}
                transform={{ base: 'translateX(-50%)', lg: 'none' }}
                width={{ base: '50%', lg: '70%' }}
                height="2px"
                bgGradient={`linear(to-r, ${getSecondaryColor()}, transparent)`}
                borderRadius="full"
                opacity={0.7}
              />
            </MotionStack>
          )}
        </AnimatePresence>
      </Container>
    </MotionBox>
  )
}

export default memo(Sidebar)
