import { memo, useEffect, useMemo } from 'react'
import {
  Stack,
  Heading,
  Text,
  useColorMode,
  Container,
  Link,
  Box,
  Icon,
  useBreakpointValue,
  StackProps,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import styles from './styles.module.css'
import { fadeInUp, simpleOpacity, stagger, scaleUp } from 'config/animations'
import { SocialMedias } from 'config/sidebar'
import { useTranslation } from 'next-i18next'

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
  const { colorMode } = useColorMode()
  const display = useBreakpointValue({ base: 'none', lg: 'block' })
  const direction = i18n.dir()
  const isRtl = direction === 'rtl'

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

    // Cleanup function
    return () => {
      const circle = document.getElementById('sidebarCircle')
      if (circle) {
        circle.classList.remove('show')
      }
    }
  }, [])

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
          ${colorMode === 'light' ? styles.dark : styles.light} 
          ${isRtl ? styles.rtl : ''}
        `}
        variants={scaleUp}
        style={{ display }}
        animate={colorMode === 'dark' ? 'animate' : 'lightMode'}
        aria-hidden="true" // This is decorative, so hide from screen readers
      />

      <Container
        padding={0}
        margin={0}
        height={{ xl: '100vh' }}
        display="flex"
        alignItems="center"
      >
        <MotionStack variants={stagger} {...stackProps}>
          {/* Welcome text */}
          <MotionText
            variants={fadeInUp}
            variant="accent"
            fontWeight="light"
            width="100%"
          >
            {t('sidebar.welcome')}
          </MotionText>

          {/* Name heading */}
          <MotionHeading
            as="h1"
            size="2xl"
            paddingInlineEnd={{ lg: '20' }}
            textTransform="uppercase"
            variants={fadeInUp}
          >
            {t('sidebar.name')}
          </MotionHeading>

          {/* Role heading */}
          <MotionHeading
            as="h2"
            size="xl"
            variant="emphasis"
            className={styles.marginTopSmall}
            variants={fadeInUp}
            color="teal.500"
          >
            {t('sidebar.role')}
          </MotionHeading>

          {/* Description text */}
          <MotionText
            variant="description"
            fontSize="md"
            paddingInlineEnd={{ lg: '12' }}
            variants={fadeInUp}
            maxWidth={{ base: '100%', lg: '80%' }}
          >
            {t('sidebar.description')}
          </MotionText>

          {/* Social media links */}
          <MotionBox
            display="flex"
            justifyContent={{
              base: 'center',
              lg: isRtl ? 'flex-start' : 'flex-start',
            }}
            variants={simpleOpacity}
            width="100%"
          >
            {SocialMedias.map(({ label, href, icon }) => (
              <Link
                key={label}
                aria-label={`Visit ${label} profile`}
                rel="noreferrer noopener"
                width={14}
                href={href}
                target="_blank"
                _hover={{ color: 'teal.400', transform: 'scale(1.1)' }}
                transition="all 0.3s ease"
                color="teal.500"
              >
                <Icon
                  w={9}
                  h={9}
                  as={icon}
                  color="currentColor"
                  margin={{ base: '0 2', lg: '0 4' }}
                  aria-hidden="true"
                />
              </Link>
            ))}
          </MotionBox>
        </MotionStack>
      </Container>
    </MotionBox>
  )
}

export default memo(Sidebar)
