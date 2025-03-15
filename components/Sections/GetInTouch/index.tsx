import { memo, useMemo } from 'react'
import {
  Heading,
  Text,
  Stack,
  Link,
  Box,
  Container,
  Divider,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion, Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from 'next-i18next'
import Avatar from 'components/Avatar'

// Constants
const CONTACT_EMAIL = 'shlomin1231@gmail.com'
const CONTACT_PHONE = '+972 52-952-6762'
const ANIMATION_DELAY = { SHAKE: 1.2, JUMP: 1.8 }

/**
 * Emoji animation component with accessibility features
 */
const AnimatedEmoji = memo(() => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 })

  const emojiVariants: Variants = useMemo(
    () => ({
      shake: {
        rotate: [0, 15, 0, -15, 0],
        transition: {
          delay: ANIMATION_DELAY.SHAKE,
          duration: 0.5,
          repeat: 2,
          ease: 'easeInOut',
        },
      },
      jump: {
        y: [0, -25, 0],
        transition: {
          delay: ANIMATION_DELAY.JUMP,
          duration: 0.5,
          repeat: 2,
          ease: 'easeInOut',
        },
      },
    }),
    []
  )

  return (
    <motion.span
      style={{ display: 'inline-block' }}
      variants={emojiVariants}
      ref={ref}
      animate={inView ? ['shake', 'jump'] : false}
      aria-hidden="true" // Hide from screen readers as it's decorative
    >
      (⁀ᗢ⁀)
    </motion.span>
  )
})

AnimatedEmoji.displayName = 'AnimatedEmoji'

/**
 * ContactInfo component for displaying email and phone
 */
const ContactInfo = memo(() => {
  const linkColor = useColorModeValue('customGreen', 'cyan.200')
  const phoneColor = useColorModeValue('teal.500', 'teal.300')

  return (
    <Box mt={4}>
      <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold">
        <Link
          href={`mailto:${CONTACT_EMAIL}`}
          target="_blank"
          rel="noreferrer"
          color={linkColor}
          aria-label="Send email to Shlomi"
        >
          {CONTACT_EMAIL}
        </Link>
      </Text>
      <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold" mt={2}>
        <Link
          href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}
          target="_blank"
          rel="noreferrer"
          dir="ltr"
          color={phoneColor}
          aria-label="Call Shlomi"
        >
          {CONTACT_PHONE}
        </Link>
      </Text>
    </Box>
  )
})

ContactInfo.displayName = 'ContactInfo'

/**
 * GetInTouch component - Contact section with animated elements
 */
const GetInTouch = () => {
  const { t } = useTranslation('common')

  // Theme values
  const navyColor = useColorModeValue('customNavy', 'gray.800')
  const greenColor = useColorModeValue('customGreen', 'cyan.200')
  const bgColor = useColorModeValue('customPeach', 'gray.700')
  const textColor = useColorModeValue('customNavy', 'white')
  const buttonBg = useColorModeValue('teal.500', 'teal.400')
  const buttonHoverBg = useColorModeValue('teal.600', 'teal.500')

  return (
    <Box
      as="section"
      id="contact-section"
      width="100%"
      maxW={{ base: '99%', lg: '60%', xl: '75%' }}
      py={10}
      bg={bgColor}
      textAlign="center"
      borderTopWidth={2}
      borderColor={navyColor}
      backgroundSize="cover"
      backgroundPosition="center"
      aria-labelledby="contact-heading"
    >
      <Container maxW={{ base: '99%', lg: '60%', xl: '75%' }}>
        <Stack spacing={5} alignItems="center">
          <Heading
            id="contact-heading"
            size="2xl"
            fontWeight="bold"
            letterSpacing="wide"
            color={navyColor}
          >
            {t('contact.title')}{' '}
            <Text
              as="span"
              fontSize="2xl"
              fontWeight="normal"
              color={greenColor}
            >
              <AnimatedEmoji />
            </Text>
          </Heading>

          <Divider borderColor={greenColor} w="50%" />

          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            color={textColor}
            px={6}
            maxW="3xl"
            textAlign="center"
          >
            {t('contact.description')}
          </Text>

          <ContactInfo />

          <Box mt={2}>
            <Avatar />
          </Box>

          <Button
            as="a"
            href={`mailto:${CONTACT_EMAIL}`}
            size="lg"
            bg={buttonBg}
            px={10}
            py={2}
            fontSize="lg"
            fontWeight="bold"
            borderRadius="12px"
            _hover={{ bg: buttonHoverBg }}
            aria-label={t('contact.button') as string}
          >
            {t('contact.button')}
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}

export default memo(GetInTouch)
