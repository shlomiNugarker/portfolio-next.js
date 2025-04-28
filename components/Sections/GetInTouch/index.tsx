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
  Flex,
  useColorModeValue,
  Icon,
  VStack,
  HStack,
} from '@chakra-ui/react'
import { motion, Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from 'next-i18next'
import Avatar from 'components/Avatar'
import useThemeStyles from 'hooks/theme/useThemeStyles'
import { CONTACT, SECTION_IDS } from 'constants/app'
import { EmailIcon, PhoneIcon, StarIcon } from '@chakra-ui/icons'

// Motion components
const MotionBox = motion(Box)
const MotionFlex = motion(Flex)
const MotionButton = motion(Button)

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
const ContactInfo = memo(
  ({ email, phone }: { email: string; phone: string }) => {
    const { getPrimaryColor, getSecondaryColor } = useThemeStyles()
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

    const itemVariants: Variants = {
      hidden: { opacity: 0, y: 20 },
      visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.3,
          duration: 0.5,
          ease: 'easeOut',
        },
      }),
    }

    return (
      <VStack spacing={4} align="center" ref={ref} width="100%" maxW="md">
        <MotionFlex
          custom={0}
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          padding={4}
          borderRadius="xl"
          boxShadow="md"
          bg={useColorModeValue('white', 'gray.800')}
          width="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Icon as={EmailIcon} color={getPrimaryColor()} boxSize={6} mr={3} />
          <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold">
            <Link
              href={`mailto:${email}`}
              target="_blank"
              rel="noreferrer"
              color={getPrimaryColor()}
              aria-label={`Send email to ${email}`}
              _hover={{ textDecoration: 'none', color: getSecondaryColor() }}
            >
              {email}
            </Link>
          </Text>
        </MotionFlex>

        <MotionFlex
          custom={1}
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          padding={4}
          borderRadius="xl"
          boxShadow="md"
          bg={useColorModeValue('white', 'gray.800')}
          width="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Icon as={PhoneIcon} color={getSecondaryColor()} boxSize={6} mr={3} />
          <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold">
            <Link
              href={`tel:${phone.replace(/\s/g, '')}`}
              target="_blank"
              rel="noreferrer"
              dir="ltr"
              color={getSecondaryColor()}
              aria-label={`Call ${phone}`}
              _hover={{ textDecoration: 'none', color: getPrimaryColor() }}
            >
              {phone}
            </Link>
          </Text>
        </MotionFlex>
      </VStack>
    )
  }
)

ContactInfo.displayName = 'ContactInfo'

// StarDecoration component
interface StarDecorationProps {
  top: string
  left: string
  size: string | number
  delay: number
}

const StarDecoration = ({ top, left, size, delay }: StarDecorationProps) => {
  const { getPrimaryColor } = useThemeStyles()

  return (
    <MotionBox
      position="absolute"
      top={top}
      left={left}
      zIndex={0}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0.5, 1],
        scale: [0, 1, 0.8, 1],
        rotate: [0, 90, 180, 270, 360],
      }}
      transition={{
        duration: 5,
        delay,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
    >
      <Icon as={StarIcon} color={getPrimaryColor()} boxSize={size} />
    </MotionBox>
  )
}

/**
 * GetInTouch component - Contact section with animated elements
 */
const GetInTouch = () => {
  const { t } = useTranslation('common')
  const {
    getTextColor,
    getPrimaryColor,
    getPrimaryButtonStyles,
    getAccentColor,
    getDividerColor,
    getBgColor,
    constants,
  } = useThemeStyles()

  const bgGradient = useColorModeValue(
    `linear(to-br, white, ${getPrimaryColor()}10, white)`,
    `linear(to-br, gray.900, ${getPrimaryColor()}10, gray.900)`
  )

  const cardBg = useColorModeValue('whiteAlpha.900', 'gray.800')

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <MotionBox
      as="section"
      id={SECTION_IDS.CONTACT}
      role="region"
      width="100%"
      position="relative"
      maxW={{ base: '99%', lg: '60%', xl: '75%' }}
      py={16}
      px={{ base: 4, md: 6 }}
      textAlign="center"
      borderTopWidth={2}
      borderColor={getPrimaryColor()}
      bgGradient={bgGradient}
      borderRadius="3xl"
      overflow="hidden"
      boxShadow={`0 8px 32px -8px ${getPrimaryColor()}40`}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8 }}
      aria-labelledby="contact-heading"
    >
      <Container
        maxW={{ base: '95%', lg: '80%', xl: '75%' }}
        position="relative"
        zIndex={1}
      >
        <Stack spacing={8} alignItems="center">
          <MotionBox
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Heading
              id="contact-heading"
              size="2xl"
              fontWeight="bold"
              letterSpacing="wide"
              color={getTextColor()}
              textShadow={`0 2px 10px ${getPrimaryColor()}30`}
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
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, width: '20%' }}
            animate={
              inView
                ? { opacity: 1, width: '50%' }
                : { opacity: 0, width: '20%' }
            }
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Divider borderColor={getPrimaryColor()} borderWidth={2} />
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.6, delay: 0.6 }}
            padding={6}
            borderRadius="2xl"
            boxShadow="lg"
            bg={cardBg}
          >
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              color={getTextColor()}
              maxW="3xl"
              textAlign="center"
            >
              {t('contact.description')}
            </Text>
          </MotionBox>

          <ContactInfo email={CONTACT.EMAIL} phone={CONTACT.PHONE} />

          <MotionBox
            mt={2}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.5, delay: 1.2 }}
            borderRadius="full"
            boxShadow={`0 4px 20px ${getPrimaryColor()}30`}
            p={1}
            bg={useColorModeValue('white', 'gray.800')}
          >
            <Avatar />
          </MotionBox>

          <MotionButton
            as="a"
            href={`mailto:${CONTACT.EMAIL}`}
            size="lg"
            px={10}
            py={6}
            fontSize="lg"
            fontWeight="bold"
            borderRadius="full"
            aria-label={t('contact.button') + ' ' + CONTACT.EMAIL}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            boxShadow={`0 4px 15px ${getAccentColor()}40`}
            {...getPrimaryButtonStyles()}
            _hover={{
              ...getPrimaryButtonStyles()._hover,
              transform: 'translateY(-2px)',
              boxShadow: `0 6px 20px ${getAccentColor()}60`,
            }}
            transition="all 0.3s ease"
          >
            {t('contact.button')}
          </MotionButton>
        </Stack>
      </Container>
    </MotionBox>
  )
}

export default memo(GetInTouch)
