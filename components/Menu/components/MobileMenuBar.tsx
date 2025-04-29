import React from 'react'
import { Box } from '@chakra-ui/react'
import MobileMenu from '../toggle'
import ThemeToggle from './ThemeToggle'
import styles from '../styles.module.css'
import { MenuState } from '../hooks/useMenuState'
import { MenuStyles } from '../hooks/useMenuStyles'

interface MobileMenuBarProps {
  menuState: MenuState
  menuStyles: MenuStyles
  isRtl: boolean
}

/**
 * Mobile menu bar component that appears at the top of the screen on mobile devices
 */
const MobileMenuBar: React.FC<MobileMenuBarProps> = ({
  menuState,
  menuStyles,
  isRtl,
}) => {
  const { isOpen, toggleOpen, isScrollingDown } = menuState
  const { menuBar, menuItems } = menuStyles

  // Determine if the menu bar should be visible
  // It should always be visible when menu is open or when scrolling up
  const shouldBeVisible = isOpen || !isScrollingDown

  return (
    <Box
      display={{ base: 'flex', xl: 'none' }}
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      paddingX={4}
      paddingY={2}
      className={`${styles.menuBar} ${isRtl ? styles.rtl : ''} ${
        !shouldBeVisible ? styles.menuBarHidden : ''
      }`}
      zIndex={10000}
      top={0}
      left={0}
      position="fixed"
      backdropFilter="blur(5px)"
      backgroundColor={menuBar.backgroundColor}
      boxShadow={menuBar.boxShadow}
      opacity={shouldBeVisible ? 1 : 0}
      visibility={shouldBeVisible ? 'visible' : 'hidden'}
      pointerEvents={shouldBeVisible ? 'auto' : 'none'}
      transition="all 0.3s ease"
      transform={shouldBeVisible ? 'translateY(0)' : 'translateY(-100%)'}
    >
      <Box>
        <ThemeToggle isMobile={true} />
      </Box>
      <Box>
        <MobileMenu
          isDarkMode={menuItems.btnClassName.includes('dark')}
          toggle={toggleOpen}
          isOpen={isOpen}
        />
      </Box>
    </Box>
  )
}

export default MobileMenuBar
