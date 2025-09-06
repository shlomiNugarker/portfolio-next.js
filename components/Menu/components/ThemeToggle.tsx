import React from 'react'
import { IconButton, VisuallyHidden, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { ThemeMode } from 'config/theme'

interface ThemeToggleProps {
  isMobile?: boolean
  size?: string
}

/**
 * Theme toggle component that switches between light and dark mode
 */
const ThemeToggle: React.FC<ThemeToggleProps> = ({
  isMobile = false,
  size = 'md',
}) => {
  const { toggleColorMode, colorMode } = useColorMode()
  const isDarkMode = colorMode === ThemeMode.Dark
  const ThemeIcon = isDarkMode ? SunIcon : MoonIcon

  return (
    <>
      <IconButton
        marginX={isMobile ? 0 : 1}
        aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        variant="ghost"
        icon={<ThemeIcon />}
        onClick={toggleColorMode}
        size={size}
      />
      <VisuallyHidden>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </VisuallyHidden>
    </>
  )
}

export default ThemeToggle
