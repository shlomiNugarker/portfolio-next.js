import { extendTheme, ColorMode } from '@chakra-ui/react'

// Import all theme parts
import {
  colorTokens,
  spaceTokens,
  fontSizeTokens,
  radiusTokens,
  shadowTokens,
  transitionTokens,
} from './tokens'
import { components } from './components'

// Theme Mode interface
interface IThemeMode {
  Light: ColorMode
  Dark: ColorMode
}

export const ThemeMode: IThemeMode = {
  Light: 'light',
  Dark: 'dark',
}

export const mobileBreakpointsMap = {
  base: true,
  md: true,
  lg: true,
  xl: false,
}

// Theme Config
const config = {
  initialColorMode: ThemeMode.Dark,
  useSystemColorMode: false,
}

// Simplified color palette
const colors = {
  black: colorTokens.black,
  white: colorTokens.white,
  gray: colorTokens.gray,
  green: colorTokens.green,
  navy: colorTokens.navy,
  peach: colorTokens.peach,
  // Semantic colors
  primary: colorTokens.green[500],
  secondary: colorTokens.navy[500],
  accent: colorTokens.peach[500],
}

// Global styles
const styles = {
  global: (props: any) => ({
    body: {
      color: props.colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.800',
      bg: props.colorMode === 'dark' ? colors.black : 'gray.100',
      transition: 'background-color 0.2s ease-in-out',
    },
  }),
}

// Create and export the theme
const theme = extendTheme({
  config,
  fonts: {
    body: 'Poppins, sans-serif',
    heading: 'Poppins, sans-serif',
  },
  colors,
  space: spaceTokens,
  fontSizes: fontSizeTokens,
  radii: radiusTokens,
  shadows: shadowTokens,
  transition: transitionTokens,
  styles,
  components,
})

export default theme
