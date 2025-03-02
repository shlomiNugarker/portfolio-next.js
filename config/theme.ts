import {
  extendTheme,
  ColorMode,
  ChakraTheme,
  ThemeComponentProps,
} from '@chakra-ui/react'
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'
import { Dict } from '@chakra-ui/utils'

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

const colors = {
  black: '#121212',
  primary: '#12946c', // Custom Green
  secondary: '#313760', // Custom Navy
  accent: '#ffdbb6', // Custom Peach
}

const styles = {
  global: (props: any) => ({
    body: {
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('gray.100', colors.black)(props),
    },
  }),
}

const textVariants = {
  emphasis: (props: ThemeComponentProps<ChakraTheme>) => ({
    color: mode(colors.primary, 'cyan.200')(props),
  }),
  description: (props: ThemeComponentProps<ChakraTheme>) => ({
    color: mode('gray.700', 'gray.300')(props),
  }),
  accent: (props: ThemeComponentProps<ChakraTheme>) => ({
    color: mode(colors.secondary, 'cyan.300')(props),
  }),
  muted: (props: ThemeComponentProps<ChakraTheme>) => ({
    color: mode('#595959', '#A6A6A6')(props),
  }),
}

const theme = extendTheme({
  config,
  fonts: {
    body: 'Poppins, sans-serif',
    heading: 'Poppins, sans-serif',
  },
  colors,
  styles,
  components: {
    Link: {
      baseStyle: (props: Dict | StyleFunctionProps) => ({
        color: mode(colors.primary, 'cyan.200')(props),
        _hover: {
          textDecoration: 'underline',
        },
      }),
      variants: {
        ...textVariants,
        description: (props: ThemeComponentProps<ChakraTheme>) => ({
          color: mode('gray.700', 'gray.300')(props),
          _hover: {
            color: mode(colors.primary, 'cyan.200')(props),
            textDecoration: 'none',
          },
        }),
      },
    },
    Text: {
      variants: textVariants,
    },
    Heading: {
      variants: textVariants,
    },
    Button: {
      baseStyle: {
        borderRadius: '8px',
        fontWeight: 'bold',
      },
      variants: {
        solid: (props: Dict | StyleFunctionProps) => ({
          bg: mode(colors.primary, colors.secondary)(props),
          color: 'white',
          _hover: {
            bg: mode('#0f7d5a', '#272d4a')(props),
          },
        }),
        outline: (props: Dict | StyleFunctionProps) => ({
          borderColor: mode(colors.primary, 'cyan.200')(props),
          color: mode(colors.primary, 'cyan.200')(props),
          _hover: {
            bg: mode(
              'rgba(49, 151, 149, 0.06)',
              'rgba(157, 236, 249, 0.06)'
            )(props),
          },
        }),
      },
    },
    Divider: {
      baseStyle: {
        borderColor: 'gray.400',
        opacity: 0.7,
      },
    },
  },
})

export default theme
