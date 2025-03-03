import { memo, useCallback } from 'react'
import {
  Container,
  Button,
  Flex,
  Box,
  IconButton,
  useColorMode,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { motion, useCycle } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import styles from './styles.module.css'
import MobileMenu from './toggle'
import { ThemeMode, mobileBreakpointsMap } from 'config/theme'
import { easing, menuAnim } from 'config/animations'
import useScrollDirection, { ScrollDirection } from 'hooks/useScrollDirection'

const MotionContainer = motion(Container)

const NAV_LINKS = [
  { key: 'about', baseHref: '#aboutMe', defaultHref: '#' },
  { key: 'works', baseHref: '#works', defaultHref: '#works' },
  { key: 'contact', baseHref: '#contact', defaultHref: '#contact' },
]

const Navigation = () => {
  const { t, i18n } = useTranslation('common')
  const { toggleColorMode, colorMode } = useColorMode()
  const [isOpen, toggleOpen] = useCycle(false, true)
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  const scrollDirection = useScrollDirection()
  const direction = i18n.dir()
  const isRtl = direction === 'rtl'

  const menuButtonSize = useBreakpointValue({ base: 'xl', md: 'sm' })
  const bg = useColorModeValue(
    'rgba(237, 242, 247, 0.95)',
    'rgba(18, 18, 18, 0.9)'
  )
  const borderColor = useColorModeValue('teal.500', 'cyan.200')
  const isDarkMode = colorMode === ThemeMode.Dark
  const btnClassName = `${styles.blogBtn} ${!isDarkMode && styles.dark}`
  const ThemeIcon = isDarkMode ? SunIcon : MoonIcon

  const onMenuItemClick = useCallback(
    (e) => {
      e.stopPropagation()
      if (isMobile) {
        toggleOpen()
      }
    },
    [isMobile, toggleOpen]
  )

  return (
    <>
      <Box
        display={{ base: 'flex', xl: 'none' }}
        alignItems="center"
        paddingTop={1}
        className={`${styles.menuBar} ${isRtl ? styles.rtl : ''}`}
        zIndex={100}
        top="3%"
      >
        <IconButton
          aria-label="Color Mode"
          variant="ghost"
          icon={<ThemeIcon />}
          onClick={toggleColorMode}
          padding={0}
        />
        <MobileMenu
          isDarkMode={isDarkMode}
          toggle={toggleOpen}
          isOpen={isOpen}
        />
      </Box>

      <MotionContainer
        width="100%"
        backgroundColor={bg}
        maxWidth={{ base: '100%', sm: '100%', lg: '50%', xl: '60%' }}
        className={`${styles.menu} ${isRtl ? styles.rtl : ''}`}
        right={scrollDirection === ScrollDirection.Down ? '2%' : '3.5%'}
        initial="hide"
        animate={(!isMobile || isOpen) && 'show'}
        style={{
          width: scrollDirection === ScrollDirection.Down ? '12%' : '100%',
          top: !isOpen && isMobile ? '-100vh' : undefined,
          opacity: !isOpen && isMobile ? '0' : undefined,
          left: isOpen && isMobile ? 0 : undefined,
        }}
        borderColor={isOpen && isMobile ? borderColor : undefined}
        borderBottomWidth={isOpen && isMobile ? '1px' : undefined}
        paddingBottom={isOpen && isMobile ? '1px' : undefined}
        ease={easing}
        variants={menuAnim}
        marginTop={0}
        paddingTop={1}
        as="nav"
      >
        <Flex
          justifyContent={{ base: 'center', lg: 'flex-end' }}
          direction={{
            base: 'column',
            lg: scrollDirection === ScrollDirection.Down ? 'column' : 'row',
          }}
          paddingX={{ sm: '10', lg: '0' }}
          paddingY={{
            base: '10',
            lg: scrollDirection === ScrollDirection.Down ? '10' : '3',
          }}
          height={{ base: '100vh', lg: 'auto' }}
          paddingBottom={isMobile ? 10 : '0'}
          onClick={() => isMobile && toggleOpen()}
        >
          {NAV_LINKS.map(({ key, baseHref, defaultHref }) => (
            <Box
              key={key}
              width={{ base: '100%', lg: 'auto' }}
              textAlign={{ base: 'center' }}
            >
              <Button
                fontWeight="light"
                variant="ghost"
                fontSize={menuButtonSize}
                letterSpacing={2}
                className={btnClassName}
                padding={2}
                marginX={2}
                as="a"
                href={isMobile ? baseHref : defaultHref}
                rel="noreferrer"
                onClick={onMenuItemClick}
              >
                {t(`nav.${key}`)}
              </Button>
            </Box>
          ))}

          {!isMobile && (
            <Box alignItems="center" display="flex" justifyContent="center">
              <IconButton
                marginX={1}
                aria-label="Color Mode"
                variant="ghost"
                icon={<ThemeIcon />}
                onClick={toggleColorMode}
              />
            </Box>
          )}
        </Flex>
      </MotionContainer>
    </>
  )
}

export default memo(Navigation)
