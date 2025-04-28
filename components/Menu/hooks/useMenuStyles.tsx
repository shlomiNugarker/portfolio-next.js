import {
  useColorMode,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react'
import { useMemo } from 'react'
import { ScrollDirection } from 'hooks/useScrollDirection'
import { ThemeMode } from 'config/theme'
import styles from '../styles.module.css'
import { MenuState } from './useMenuState'

export interface MenuStyles {
  // Mobile menu bar styles
  menuBar: {
    backgroundColor: string
    boxShadow: string
  }
  // Main navigation styles
  navigation: {
    width: string
    right?: string
    left?: string | number
    top?: string | number
    opacity: number
    zIndex: number
    backgroundColor: string
    boxShadow: string
    backdropFilter: string
    borderColor?: string
    borderBottomWidth?: string
    paddingBottom?: string
  }
  // Menu items styling
  menuItems: {
    buttonSize: string | Record<string, string> | undefined
    borderColor: string
    hoverBg: string
    btnClassName: string
  }
}

/**
 * Custom hook to generate menu styling based on current state
 */
export const useMenuStyles = (menuState: MenuState): MenuStyles => {
  const { colorMode } = useColorMode()
  const { isOpen, isMobile, scrollDirection, isScrollingDown } = menuState

  // Responsive values
  const menuButtonSize = useBreakpointValue({ base: 'xl', md: 'sm' })

  // Color theme values
  const borderColor = useColorModeValue('teal.500', 'cyan.200')
  const menuItemBorderColor = useColorModeValue('gray.200', 'gray.700')
  const menuItemHoverBg = useColorModeValue('gray.100', 'gray.700')
  const isDarkMode = colorMode === ThemeMode.Dark

  // Menu button styling
  const btnClassName = `${styles.blogBtn} ${!isDarkMode && styles.dark}`

  // Mobile menu background colors
  const mobileLightBg = 'rgba(240, 240, 240, 0.97)'
  const mobileDarkBg = 'rgba(10, 10, 10, 0.97)'
  const mobileMenuBg = useColorModeValue(mobileLightBg, mobileDarkBg)

  // Menu bar styles
  const menuBarBg = useColorModeValue(
    'rgba(255, 255, 255, 0.8)',
    'rgba(0, 0, 0, 0.6)'
  )

  // Navigation container styles
  const navigationStyles = useMemo(() => {
    return {
      width: !isMobile ? (isScrollingDown ? '12%' : '100%') : '100vw',
      right: !isMobile ? (isScrollingDown ? '2%' : '3.5%') : undefined,
      left: isMobile ? 0 : undefined,
      top: isMobile ? (isOpen ? 0 : '-100vh') : undefined,
      opacity: isMobile ? (isOpen ? 1 : 0) : 1,
      // Using a higher z-index to ensure it appears above all content
      zIndex: 9999,
      backgroundColor: isMobile ? mobileMenuBg : 'transparent',
      boxShadow: isMobile ? '0 0 30px rgba(0, 0, 0, 0.2)' : 'none',
      backdropFilter: isMobile ? 'blur(15px)' : 'none',
      borderColor: isOpen && isMobile ? borderColor : undefined,
      borderBottomWidth: isOpen && isMobile ? '1px' : undefined,
      paddingBottom: isOpen && isMobile ? '1px' : undefined,
    }
  }, [isMobile, isOpen, isScrollingDown, mobileMenuBg, borderColor])

  return {
    menuBar: {
      backgroundColor: menuBarBg,
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    },
    navigation: navigationStyles,
    menuItems: {
      buttonSize: menuButtonSize,
      borderColor: menuItemBorderColor,
      hoverBg: menuItemHoverBg,
      btnClassName,
    },
  }
}
