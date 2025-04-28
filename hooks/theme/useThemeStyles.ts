import { useColorMode, useTheme } from '@chakra-ui/react'
import { colorTokens, semanticColors } from 'styles/theme/tokens'
import * as sharedStyles from 'styles/shared'

/**
 * Custom hook to access theme styles and tokens
 * Provides access to color modes, theme tokens, and shared styles
 */
export const useThemeStyles = () => {
  const { colorMode } = useColorMode()
  const isDarkMode = colorMode === 'dark'
  const theme = useTheme()

  // Color getters based on current mode
  const getColorValue = (lightColor: string, darkColor: string) => {
    return isDarkMode ? darkColor : lightColor
  }

  // Get semantic colors with mode awareness
  const getPrimaryColor = () => getColorValue(semanticColors.primary, 'cyan.200')
  const getSecondaryColor = () => getColorValue(semanticColors.secondary, 'cyan.300')
  const getAccentColor = () => getColorValue(semanticColors.accent, 'orange.300')
  const getTextColor = () => getColorValue('gray.800', 'whiteAlpha.900')
  const getMutedTextColor = () => getColorValue('gray.500', 'gray.400')
  const getBgColor = () => getColorValue('white', 'gray.800')
  const getCardBgColor = () => getColorValue('white', 'gray.800')

  return {
    // Theme access
    theme,
    isDarkMode,
    colorMode,
    
    // Color tokens
    colors: colorTokens,
    semanticColors,
    
    // Color getters
    getColorValue,
    getPrimaryColor,
    getSecondaryColor,
    getAccentColor,
    getTextColor,
    getMutedTextColor,
    getBgColor,
    getCardBgColor,
    
    // Shared styles
    styles: sharedStyles,
  }
}

export default useThemeStyles 