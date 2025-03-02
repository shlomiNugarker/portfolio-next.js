import { memo } from 'react'
import {
  Stack,
  Heading,
  Text,
  Button,
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
  const { t } = useTranslation('common') // 🔹 תמיכה בתרגום
  const { colorMode } = useColorMode()
  const display = useBreakpointValue({ base: 'none', lg: 'block' })

  const MotionBox = motion(Box)
  const MotionStack = motion(Stack)
  const MotionHeading = motion(Heading)
  const MotionText = motion(Text)
  const MotionButton = motion(Button)

  return (
    <MotionBox
      initial="initial"
      animate="animate"
      position={{ xl: 'fixed' }}
      maxWidth={{ xl: '34%' }}
      top={{ lg: 0 }}
    >
      {/* 🔹 מעגל עיצובי */}
      <motion.div
        id="sidebarCircle"
        className={`${styles.sidebar} ${
          colorMode === 'light' ? styles.dark : ''
        }`}
        variants={scaleUp}
        style={{ display }}
        animate={colorMode === 'dark' ? 'animate' : 'lightMode'}
      />

      {/* 🔹 מידע אישי */}
      <Container
        padding={0}
        margin={0}
        height={{ xl: '100vh' }}
        display={{ xl: 'flex' }}
        alignItems={{ xl: 'center' }}
      >
        <MotionStack variants={stagger} spacing={6} w="100%">
          <MotionText variants={fadeInUp} variant="accent" fontWeight="light">
            {t('sidebar.welcome')}
          </MotionText>

          <MotionHeading
            as="h1"
            size="2xl"
            paddingRight={{ lg: '20' }}
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
          >
            {t('sidebar.role')}
          </MotionHeading>

          <MotionText
            variant="description"
            fontSize="md"
            paddingRight={{ lg: '12' }}
            variants={fadeInUp}
            maxWidth={{ base: '100%', lg: '80%' }}
          >
            {t('sidebar.description')}
          </MotionText>

          {/* 🔹 כפתור יצירת קשר */}
          <MotionButton
            size="lg"
            variant="solid"
            bg="teal.500"
            color="white"
            fontWeight="bold"
            fontSize="sm"
            width="180px"
            variants={simpleOpacity}
            as={'a'}
            href="mailto:shlomin1231@gmail.com"
            target="_blank"
            _hover={{ bg: 'teal.600' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {t('sidebar.contact_button')}
          </MotionButton>

          {/* 🔹 קישורים לרשתות חברתיות */}
          <MotionBox display="flex" variants={simpleOpacity}>
            {SocialMedias.map(({ label, href, icon }) => (
              <Link
                key={label}
                aria-label={label}
                rel="noreferrer"
                width={8}
                href={href}
                target="_blank"
                _focus={{ boxShadow: 'none' }}
              >
                <Icon w={6} h={6} as={icon} color="currentColor" />
              </Link>
            ))}
          </MotionBox>
        </MotionStack>
      </Container>
    </MotionBox>
  )
}

export default memo(Sidebar)
