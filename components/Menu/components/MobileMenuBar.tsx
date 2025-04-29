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
  const { isOpen, toggleOpen } = menuState
  const { menuBar, menuItems } = menuStyles

  return (
    <Box
      display={{ base: 'flex', xl: 'none' }}
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      paddingX={4}
      paddingY={2}
      className={`${styles.menuBar} ${isRtl ? styles.rtl : ''}`}
      zIndex={10000}
      top={0}
      left={0}
      position="fixed"
      backdropFilter="blur(5px)"
      backgroundColor={menuBar.backgroundColor}
      boxShadow={menuBar.boxShadow}
      opacity={1}
      visibility="visible"
      pointerEvents="auto"
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
