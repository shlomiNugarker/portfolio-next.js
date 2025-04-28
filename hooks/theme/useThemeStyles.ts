import { useColorMode, useTheme } from '@chakra-ui/react'
import {
  colorTokens,
  semanticColors,
  animationTokens,
  fontWeightTokens,
  lineHeightTokens,
  appConstants,
} from 'styles/theme/tokens'
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
  const getPrimaryColor = () =>
    getColorValue(semanticColors.primary, 'cyan.200')
  const getSecondaryColor = () =>
    getColorValue(semanticColors.secondary, 'cyan.300')
  const getAccentColor = () =>
    getColorValue(semanticColors.accent, 'orange.300')
  const getTextColor = () =>
    getColorValue(semanticColors.text.light, semanticColors.text.dark)
  const getMutedTextColor = () =>
    getColorValue(semanticColors.mutedText.light, semanticColors.mutedText.dark)
  const getBgColor = () =>
    getColorValue(
      semanticColors.background.light,
      semanticColors.background.dark
    )
  const getCardBgColor = () =>
    getColorValue(semanticColors.card.light, semanticColors.card.dark)
  const getDividerColor = () =>
    getColorValue(semanticColors.divider.light, semanticColors.divider.dark)

  // Button style getters
  const getPrimaryButtonStyles = () => ({
    bg: getColorValue(
      semanticColors.button.primary.bg.light,
      semanticColors.button.primary.bg.dark
    ),
    _hover: {
      bg: getColorValue(
        semanticColors.button.primary.hover.light,
        semanticColors.button.primary.hover.dark
      ),
    },
  })

  const getSecondaryButtonStyles = () => ({
    bg: getColorValue(
      semanticColors.button.secondary.bg.light,
      semanticColors.button.secondary.bg.dark
    ),
    _hover: {
      bg: getColorValue(
        semanticColors.button.secondary.hover.light,
        semanticColors.button.secondary.hover.dark
      ),
    },
  })

  const getAccentButtonStyles = () => ({
    bg: getColorValue(
      semanticColors.button.accent.bg.light,
      semanticColors.button.accent.bg.dark
    ),
    _hover: {
      bg: getColorValue(
        semanticColors.button.accent.hover.light,
        semanticColors.button.accent.hover.dark
      ),
    },
  })

  // Animation delay getters
  const getAnimationDelay = (type: keyof typeof animationTokens.delay) =>
    animationTokens.delay[type]

  return {
    // Theme access
    theme,
    isDarkMode,
    colorMode,

    // Color tokens
    colors: colorTokens,
    semanticColors,

    // Typography tokens
    fontWeights: fontWeightTokens,
    lineHeights: lineHeightTokens,

    // Color getters
    getColorValue,
    getPrimaryColor,
    getSecondaryColor,
    getAccentColor,
    getTextColor,
    getMutedTextColor,
    getBgColor,
    getCardBgColor,
    getDividerColor,

    // Button style getters
    getPrimaryButtonStyles,
    getSecondaryButtonStyles,
    getAccentButtonStyles,

    // Animation helpers
    getAnimationDelay,

    // Application constants
    constants: appConstants,

    // Shared styles
    styles: sharedStyles,
  }
}

export default useThemeStyles
