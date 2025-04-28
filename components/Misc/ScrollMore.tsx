import {
  Box,
  Icon,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import { RiMouseLine } from 'react-icons/ri'
import { motion, Variants, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import useScrollDirection, { ScrollDirection } from 'hooks/useScrollDirection'
import { mobileBreakpointsMap } from 'config/theme'
import { memo } from 'react'
import useThemeStyles from 'hooks/theme/useThemeStyles'

// Motion variants for the scroll indicator
const scrollMoreVariants: Variants = {
  initial: { opacity: 0, y: 50 },
  hidden: {
    opacity: 1,
    transition: { duration: 0.5, delay: 1, ease: 'easeIn' },
  },
  bounce: {
    y: [0, -18, 0],
    transition: {
      duration: 1.6,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'loop',
    },
  },
}

// Variants for the email animation when scrolling down
const emailVariants: Variants = {
  hidden: { opacity: 0, y: 250 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    y: 250,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const ScrollMore = () => {
  const { i18n } = useTranslation()
  const direction = i18n.dir()
  const isRtl = direction === 'rtl'
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  const scrollDirection = useScrollDirection(false, isMobile)
  const { getTextColor, getPrimaryColor, constants } = useThemeStyles()

  // Consolidated style for the email container
  const emailContainerStyle = {
    writingMode: 'vertical-rl' as const,
    position: 'fixed' as const,
    [isRtl ? 'left' : 'right']: '8%',
    bottom: '0',
  }

  return (
    <Box
      position="fixed"
      bottom="1em"
      right={isRtl ? undefined : '3%'}
      left={isRtl ? '3%' : undefined}
      display={isMobile ? 'none' : 'block'}
      dir="ltr"
    >
      {/* Scroll Indicator */}
      <AnimatePresence>
        {[ScrollDirection.Initial, ScrollDirection.Up].includes(
          scrollDirection
        ) && (
          <motion.div
            initial="initial"
            animate={['hidden', 'bounce']}
            variants={scrollMoreVariants}
          >
            <Icon
              w={6}
              h={6}
              as={RiMouseLine}
              color="currentColor"
              opacity="0.75"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Email link appears when scrolling down */}
      <AnimatePresence>
        {scrollDirection === ScrollDirection.Down && (
          <motion.div
            initial="hidden"
            animate="show"
            exit="exit"
            variants={emailVariants}
            whileHover={{ y: -50 }}
            style={emailContainerStyle}
          >
            <Text
              as="a"
              paddingY={3}
              fontFamily="monospace"
              href={`mailto:${constants.contactEmail}`}
              target="_blank"
              rel="noreferrer"
              color={getTextColor()}
              position="relative"
              letterSpacing={3}
              display="flex"
              alignItems="center"
              justifyContent="center"
              _hover={{
                color: getPrimaryColor(),
                _after: {
                  backgroundColor: getPrimaryColor(),
                  opacity: 1,
                },
              }}
              _after={{
                content: '""',
                flex: 1,
                width: '2px',
                height: { base: '5em', xl: '8em' },
                backgroundColor: getPrimaryColor(),
                opacity: 0.5,
                margin: 'auto',
                marginTop: '10px',
              }}
            >
              {constants.contactEmail}
            </Text>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  )
}

export default memo(ScrollMore)
