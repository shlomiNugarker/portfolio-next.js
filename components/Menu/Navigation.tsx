import { memo, useCallback, useMemo } from 'react'
import {
  Container,
  Button,
  Flex,
  Box,
  IconButton,
  useColorMode,
  useColorModeValue,
  useBreakpointValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { motion, useCycle } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import styles from './styles.module.css'
import MobileMenu from './toggle'
import { ThemeMode, mobileBreakpointsMap } from 'config/theme'
import { easing, menuAnim } from 'config/animations'
import useScrollDirection, { ScrollDirection } from 'hooks/useScrollDirection'

// Pre-define motion components to prevent re-creation on each render
const MotionContainer = motion(Container)

// Define navigation links as a constant for better maintainability
const NAV_LINKS = [
  { key: 'about', baseHref: '#aboutMe', defaultHref: '#' },
  { key: 'works', baseHref: '#works', defaultHref: '#works' },
  { key: 'contact', baseHref: '#contact', defaultHref: '#contact' },
] as const

/**
 * Navigation component that handles both mobile and desktop navigation
 */
const Navigation = () => {
  const { t, i18n } = useTranslation('common')
  const { toggleColorMode, colorMode } = useColorMode()
  const [isOpen, toggleOpen] = useCycle(false, true)
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  const scrollDirection = useScrollDirection()
  const direction = i18n.dir()
  const isRtl = direction === 'rtl'

  // Responsive and theme values
  const menuButtonSize = useBreakpointValue({ base: 'xl', md: 'sm' })

  const borderColor = useColorModeValue('teal.500', 'cyan.200')
  const isDarkMode = colorMode === ThemeMode.Dark
  const btnClassName = `${styles.blogBtn} ${!isDarkMode && styles.dark}`
  const ThemeIcon = isDarkMode ? SunIcon : MoonIcon

  // Handle navigation item clicks
  const onMenuItemClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      if (isMobile) {
        toggleOpen()
      }
    },
    [isMobile, toggleOpen]
  )

  // Compute navigation layout values based on current state
  const navStyles = useMemo(() => {
    const isScrollingDown = scrollDirection === ScrollDirection.Down

    return {
      width: !isMobile ? (isScrollingDown ? '12%' : '100%') : '100%',
      right: !isMobile ? (isScrollingDown ? '2%' : '3.5%') : undefined,
      top: isMobile ? (isOpen ? undefined : '-100vh') : undefined,
      opacity: isMobile ? (isOpen ? 1 : 0) : 1,
    }
  }, [isMobile, isOpen, scrollDirection])

  return (
    <>
      {/* Mobile menu toggle and theme toggle */}
      <Box
        display={{ base: 'flex', xl: 'none' }}
        alignItems="center"
        paddingTop={1}
        className={`${styles.menuBar} ${isRtl ? styles.rtl : ''}`}
        zIndex={10005}
        top="3%"
      >
        <IconButton
          aria-label={
            isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'
          }
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

      {/* Main navigation container */}
      <MotionContainer
        width={navStyles.width}
        maxWidth={{ base: '100%', sm: '100%', lg: '50%', xl: '60%' }}
        className={`${styles.menu} ${isRtl ? styles.rtl : ''}`}
        right={navStyles.right}
        initial="hide"
        animate={!isMobile || isOpen ? 'show' : 'hide'}
        style={{
          width: navStyles.width,
          top: navStyles.top,
          opacity: navStyles.opacity,
        }}
        borderColor={isOpen && isMobile ? borderColor : undefined}
        borderBottomWidth={isOpen && isMobile ? '1px' : undefined}
        paddingBottom={isOpen && isMobile ? '1px' : undefined}
        ease={easing}
        variants={menuAnim}
        marginTop={0}
        paddingTop={1}
        as="nav"
        aria-expanded={isOpen}
        role="navigation"
        aria-label="Main Navigation"
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
          {/* Navigation links */}
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
                role="menuitem"
                aria-label={t(`nav.${key}`) as string}
              >
                {t(`nav.${key}`)}
              </Button>
            </Box>
          ))}

          {/* Desktop theme toggle */}
          {!isMobile && (
            <Box alignItems="center" display="flex" justifyContent="center">
              <IconButton
                marginX={1}
                aria-label={
                  isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'
                }
                variant="ghost"
                icon={<ThemeIcon />}
                onClick={toggleColorMode}
              />
              <VisuallyHidden>
                {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              </VisuallyHidden>
            </Box>
          )}
        </Flex>
      </MotionContainer>
    </>
  )
}

export default memo(Navigation)
