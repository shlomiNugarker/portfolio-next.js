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
} from '@chakra-ui/react'
import { motion, Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from 'next-i18next'
import Avatar from 'components/Avatar'
import useThemeStyles from 'hooks/theme/useThemeStyles'

/**
 * Emoji animation component with accessibility features
 */
const AnimatedEmoji = memo(() => {
  const { constants } = useThemeStyles()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 })

  const emojiVariants: Variants = useMemo(
    () => ({
      shake: {
        rotate: [0, 15, 0, -15, 0],
        transition: {
          delay: constants.animation.delay.shake,
          duration: 0.5,
          repeat: 2,
          ease: 'easeInOut',
        },
      },
      jump: {
        y: [0, -25, 0],
        transition: {
          delay: constants.animation.delay.jump,
          duration: 0.5,
          repeat: 2,
          ease: 'easeInOut',
        },
      },
    }),
    [constants.animation.delay]
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
  const { getPrimaryColor, getSecondaryColor, constants } = useThemeStyles()

  return (
    <Box mt={4}>
      <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold">
        <Link
          href={`mailto:${constants.contactEmail}`}
          target="_blank"
          rel="noreferrer"
          color={getPrimaryColor()}
          aria-label="Send email to Shlomi"
        >
          {constants.contactEmail}
        </Link>
      </Text>
      <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold" mt={2}>
        <Link
          href={`tel:${constants.contactPhone.replace(/\s/g, '')}`}
          target="_blank"
          rel="noreferrer"
          dir="ltr"
          color={getSecondaryColor()}
          aria-label="Call Shlomi"
        >
          {constants.contactPhone}
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
  const { getTextColor, getPrimaryColor, constants, getPrimaryButtonStyles } =
    useThemeStyles()

  return (
    <Box
      as="section"
      id="contact-section"
      width="100%"
      maxW={{ base: '99%', lg: '60%', xl: '75%' }}
      py={10}
      textAlign="center"
      borderTopWidth={2}
      borderColor={getPrimaryColor()}
      backgroundSize="cover"
      backgroundPosition="center"
      aria-labelledby="contact-heading"
    >
      <Container
        maxW={{ base: '99%', lg: '60%', xl: '75%' }}
        px={{ base: 4, md: 6, lg: 8 }}
      >
        <Stack spacing={5} alignItems="center">
          <Heading
            id="contact-heading"
            size="2xl"
            fontWeight="bold"
            letterSpacing="wide"
            color={getTextColor()}
          >
            {t('contact.title')}{' '}
            <Text
              as="span"
              fontSize="2xl"
              fontWeight="normal"
              color={getPrimaryColor()}
            >
              <AnimatedEmoji />
            </Text>
          </Heading>

          <Divider borderColor={getPrimaryColor()} w="50%" />

          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            color={getTextColor()}
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
            href={`mailto:${constants.contactEmail}`}
            size="lg"
            px={10}
            py={2}
            fontSize="lg"
            fontWeight="bold"
            borderRadius="12px"
            aria-label={t('contact.button') as string}
            {...getPrimaryButtonStyles()}
          >
            {t('contact.button')}
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}

export default memo(GetInTouch)
