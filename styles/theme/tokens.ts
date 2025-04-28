import { ThemeMode } from 'config/theme'

// Color tokens
export const colorTokens = {
  black: '#121212',
  white: '#FFFFFF',
  green: {
    50: '#E6F5F0',
    100: '#C4E8DC',
    200: '#9FDAC8',
    300: '#7ACBB3',
    400: '#54BD9F',
    500: '#12946c', // Primary
    600: '#0E7656',
    700: '#0A5941',
    800: '#073B2B',
    900: '#031E16',
  },
  navy: {
    50: '#E8E9EF',
    100: '#C6C9D7',
    200: '#A4A9BF',
    300: '#8188A7',
    400: '#5F688F',
    500: '#313760', // Secondary
    600: '#272C4D',
    700: '#1D213A',
    800: '#141627',
    900: '#0A0B13',
  },
  peach: {
    50: '#FEFAF5',
    100: '#FDF2E6',
    200: '#FCE9D6',
    300: '#FADFC6',
    400: '#F9D6B6',
    500: '#ffdbb6', // Accent
    600: '#F7C28C',
    700: '#F5B87D',
    800: '#F3AE6D',
    900: '#F1A45E',
  },
  gray: {
    50: '#F7F7F7',
    100: '#EFEFEF',
    200: '#DFDFDF',
    300: '#CACACA',
    400: '#A6A6A6',
    500: '#595959',
    600: '#2C2C2C',
    700: '#1A1A1A',
    800: '#121212',
    900: '#0A0A0A',
  },
}

// Semantic colors
export const semanticColors = {
  primary: colorTokens.green[500],
  secondary: colorTokens.navy[500],
  accent: colorTokens.peach[500],
}

// Spacing tokens (using Chakra's default spacing scale)
export const spaceTokens = {
  // Chakra's defaults are used, adding only custom ones if needed
  sidebar: { base: '1.25rem', md: '2rem', lg: '3.5rem' },
  section: { base: '1.25rem', md: '3.5rem', lg: '3.5rem', xl: '0' },
}

// Typography scale
export const fontSizeTokens = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
  '6xl': '3.75rem',
  '7xl': '4.5rem',
  '8xl': '6rem',
}

// Border radius
export const radiusTokens = {
  none: '0',
  sm: '0.125rem',
  base: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  '3xl': '1.5rem',
  full: '9999px',
}

// Shadow tokens
export const shadowTokens = {
  sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  outline: '0 0 0 3px rgba(18, 148, 108, 0.6)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  none: 'none',
}

// Transition tokens
export const transitionTokens = {
  property: {
    common:
      'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
    colors: 'background-color, border-color, color, fill, stroke',
    dimensions: 'width, height',
    position: 'left, right, top, bottom',
    background: 'background-color, background-image, background-position',
  },
  easing: {
    'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
    'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
    'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  duration: {
    'ultra-fast': '50ms',
    faster: '100ms',
    fast: '150ms',
    normal: '200ms',
    slow: '300ms',
    slower: '400ms',
    'ultra-slow': '500ms',
  },
}

// Responsive breakpoints
export const breakpoints = {
  sm: '30em', // 480px
  md: '48em', // 768px
  lg: '62em', // 992px
  xl: '80em', // 1280px
  '2xl': '96em', // 1536px
}

// Responsive layout configurations
export const layoutConfig = {
  sideBarPadding: { base: '5', md: '8', lg: '14' },
  mainContent: { base: '5', md: '14', lg: '14', xl: '0' },
  topPadding: { base: '20', sm: '20', md: '20' },
  gridColumns: {
    base: 'repeat(1, 1fr)',
    lg: 'repeat(3, 1fr)',
    xl: 'repeat(5, 1fr)',
  },
  gridRows: {
    sm: 'repeat(1, 0)',
    lg: 'repeat(2, 1fr)',
  },
}

// Z-index layers
export const zIndices = {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
}
