import { useEffect } from 'react'
import {
  Box,
  Icon,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import { RiMouseLine } from 'react-icons/ri'
import { motion, Variants, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import useScrollDirection, { ScrollDirection } from 'hooks/useScrollDirection'
import { mobileBreakpointsMap } from 'config/theme'

const scrollMoreVariants: Variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  hidden: {
    opacity: [0, 1],
    transition: {
      duration: 0.5,
      delay: 1,
      ease: 'easeIn',
    },
  },
  bounce: {
    y: [0, -18, 0],
    transition: {
      duration: 1.6,
      ease: 'easeInOut',
      repeatType: 'loop',
    },
  },
}

const emailVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 250,
  },
  show: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: [1, 0],
    y: [0, 250],
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

const ScrollMore = () => {
  const { i18n } = useTranslation()
  const direction = i18n.dir() // "rtl" או "ltr"
  const isRtl = direction === 'rtl' // משתנה לבדיקת RTL
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  const scrollDirection = useScrollDirection(false, isMobile)
  const emailColor = useColorModeValue('gray.800', 'gray.400')
  const emailLine = useColorModeValue('teal.500', 'cyan.200')

  return (
    <Box
      position="fixed"
      bottom="1em"
      right={isRtl ? undefined : '3%'}
      left={isRtl ? '3%' : undefined}
      display={isMobile ? 'none' : 'block'}
      dir="ltr"
    >
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

      <AnimatePresence>
        {scrollDirection === ScrollDirection.Down && (
          <motion.div
            initial="hidden"
            animate="show"
            exit="exit"
            variants={emailVariants}
            whileHover={{ y: -50 }}
            style={{
              writingMode: 'vertical-rl',
              position: 'fixed',
              [isRtl ? 'left' : 'right']: '8%',
              bottom: '0',
            }}
          >
            <Text
              as="a"
              paddingY={3}
              fontFamily="monospace"
              href="mailto:shlomin1231@gmail.com"
              target="_blank"
              rel="noreferrer"
              color={emailColor}
              _hover={{
                color: emailLine,
                _after: {
                  backgroundColor: emailLine,
                  opacity: 1,
                },
              }}
              position="relative"
              letterSpacing={3}
              display="flex"
              alignItems="center"
              justifyContent="center"
              _after={{
                backgroundColor: emailLine,
                width: '2px',
                opacity: 0.5,
                content: '""',
                flex: 1,
                height: { base: '5em', xl: '8em' },
                margin: 'auto',
                marginTop: '10px',
              }}
            >
              shlomin1231@gmail.com
            </Text>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  )
}

export default ScrollMore
