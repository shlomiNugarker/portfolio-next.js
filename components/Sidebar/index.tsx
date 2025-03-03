import { memo, useEffect } from 'react'
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
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import styles from './styles.module.css'
import { fadeInUp, simpleOpacity, stagger, scaleUp } from 'config/animations'
import { SocialMedias } from 'config/sidebar'
import { useTranslation } from 'next-i18next'

const Sidebar = () => {
  const { t, i18n } = useTranslation('common')
  const { colorMode } = useColorMode()
  const display = useBreakpointValue({ base: 'none', lg: 'block' })

  const MotionBox = motion(Box)
  const MotionStack = motion(Stack)
  const MotionHeading = motion(Heading)
  const MotionText = motion(Text)

  const direction = i18n.dir()
  const isRtl = direction === 'rtl'

  useEffect(() => {
    const sidebarCircle = document.getElementById('sidebarCircle')
    if (sidebarCircle) {
      sidebarCircle.classList.add('show')
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
      />

      <Container
        padding={0}
        margin={0}
        height={{ xl: '100vh' }}
        display={{ base: 'flex' }}
        alignItems={{ base: 'center' }}
        justifyContent={{ base: 'center' }}
      >
        <MotionStack
          variants={stagger}
          spacing={6}
          w="100%"
          textAlign={{ base: 'center', lg: 'start' }}
        >
          <MotionText
            variants={fadeInUp}
            variant="accent"
            fontWeight="light"
            width="100%"
          >
            {t('sidebar.welcome')}
          </MotionText>

          <MotionHeading
            as="h1"
            size="2xl"
            paddingRight={{ lg: isRtl ? '0' : '20' }}
            paddingLeft={{ lg: isRtl ? '20' : '0' }}
            textTransform="uppercase"
            variants={fadeInUp}
          >
            {t('sidebar.name')}
          </MotionHeading>

          <MotionHeading
            as="h3"
            size="xl"
            variant="emphasis"
            className={styles.marginTopSmall}
            variants={fadeInUp}
            color="teal.500"
          >
            {t('sidebar.role')}
          </MotionHeading>

          <MotionText
            variant="description"
            fontSize="md"
            paddingRight={{ lg: isRtl ? '0' : '12' }}
            paddingLeft={{ lg: isRtl ? '12' : '0' }}
            variants={fadeInUp}
            maxWidth={{ base: '100%', lg: '80%' }}
          >
            {t('sidebar.description')}
          </MotionText>

          <MotionBox display="flex" variants={simpleOpacity}>
            {SocialMedias.map(({ label, href, icon }) => (
              <Link
                key={label}
                aria-label={label}
                rel="noreferrer"
                width={14}
                href={href}
                target="_blank"
                _focus={{ boxShadow: 'none' }}
                color="teal.500"
                className={styles.socialIcon}
              >
                <Icon
                  w={9}
                  h={9}
                  as={icon}
                  color="currentColor"
                  margin={{ base: '0 2', lg: '0 4' }}
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
