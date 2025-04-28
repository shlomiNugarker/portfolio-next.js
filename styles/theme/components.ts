import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'
import { Dict } from '@chakra-ui/utils'
import { ThemeComponentProps, ChakraTheme } from '@chakra-ui/react'
import { colorTokens } from './tokens'

// Text variants that can be used across different components
export const textVariants = {
  emphasis: (props: ThemeComponentProps<ChakraTheme>) => ({
    color: mode('primary', 'cyan.200')(props),
  }),
  description: (props: ThemeComponentProps<ChakraTheme>) => ({
    color: mode('gray.700', 'gray.300')(props),
  }),
  accent: (props: ThemeComponentProps<ChakraTheme>) => ({
    color: mode('secondary', 'cyan.300')(props),
  }),
  muted: (props: ThemeComponentProps<ChakraTheme>) => ({
    color: mode('gray.500', 'gray.400')(props),
  }),
}

// Link component
export const Link = {
  baseStyle: (props: Dict | StyleFunctionProps) => ({
    color: mode('primary', 'cyan.200')(props),
    _hover: {
      textDecoration: 'underline',
    },
    transition: 'color 0.2s ease-in-out',
  }),
  variants: {
    ...textVariants,
    description: (props: ThemeComponentProps<ChakraTheme>) => ({
      color: mode('gray.700', 'gray.300')(props),
      _hover: {
        color: mode('primary', 'cyan.200')(props),
        textDecoration: 'none',
      },
    }),
    nav: (props: ThemeComponentProps<ChakraTheme>) => ({
      color: mode('gray.700', 'gray.200')(props),
      fontWeight: 'medium',
      _hover: {
        color: mode('primary', 'cyan.200')(props),
        textDecoration: 'none',
      },
    }),
  },
}

// Text component
export const Text = {
  variants: textVariants,
}

// Heading component
export const Heading = {
  variants: textVariants,
}

// Button component
export const Button = {
  baseStyle: {
    borderRadius: 'lg',
    fontWeight: 'bold',
    transition: 'all 0.2s ease-in-out',
  },
  variants: {
    solid: (props: Dict | StyleFunctionProps) => ({
      bg: mode('primary', 'secondary')(props),
      color: 'white',
      _hover: {
        bg: mode('green.600', 'navy.400')(props),
        transform: 'translateY(-2px)',
        boxShadow: 'md',
      },
      _active: {
        transform: 'translateY(0)',
        boxShadow: 'sm',
      },
    }),
    outline: (props: Dict | StyleFunctionProps) => ({
      borderColor: mode('primary', 'cyan.200')(props),
      color: mode('primary', 'cyan.200')(props),
      _hover: {
        bg: mode('green.50', 'rgba(157, 236, 249, 0.06)')(props),
        transform: 'translateY(-2px)',
        boxShadow: 'md',
      },
      _active: {
        transform: 'translateY(0)',
        boxShadow: 'sm',
      },
    }),
    ghost: (props: Dict | StyleFunctionProps) => ({
      color: mode('primary', 'cyan.200')(props),
      _hover: {
        bg: mode('green.50', 'rgba(157, 236, 249, 0.06)')(props),
      },
    }),
  },
}

// Card component (custom)
export const Card = {
  baseStyle: (props: Dict | StyleFunctionProps) => ({
    bg: mode('white', 'gray.800')(props),
    borderRadius: 'lg',
    boxShadow: 'md',
    overflow: 'hidden',
    transition: 'all 0.3s ease-in-out',
    _hover: {
      boxShadow: 'lg',
      transform: 'translateY(-4px)',
    },
  }),
}

// Badge component
export const Badge = {
  baseStyle: {
    borderRadius: 'full',
    px: 2,
    py: 1,
  },
  variants: {
    solid: (props: Dict | StyleFunctionProps) => ({
      bg: mode('primary', 'secondary')(props),
      color: 'white',
    }),
    outline: (props: Dict | StyleFunctionProps) => ({
      border: '1px solid',
      borderColor: mode('primary', 'cyan.200')(props),
      color: mode('primary', 'cyan.200')(props),
    }),
  },
}

// Container component
export const Container = {
  baseStyle: {
    px: { base: 4, md: 6, lg: 8 },
    maxW: { 
      base: 'container.sm',
      md: 'container.md',
      lg: 'container.lg',
      xl: 'container.xl',
    },
  },
}

// Divider component
export const Divider = {
  baseStyle: {
    borderColor: 'gray.400',
    opacity: 0.7,
  },
}

// Box component for section containers
export const Box = {
  variants: {
    section: (props: Dict | StyleFunctionProps) => ({
      bg: mode('white', 'gray.800')(props),
      borderRadius: 'lg',
      boxShadow: 'md',
      p: { base: 4, md: 6 },
      mb: 8,
    }),
    card: (props: Dict | StyleFunctionProps) => ({
      bg: mode('white', 'gray.800')(props),
      borderRadius: 'lg',
      boxShadow: 'md',
      overflow: 'hidden',
      transition: 'all 0.3s ease-in-out',
      _hover: {
        boxShadow: 'lg',
        transform: 'translateY(-4px)',
      },
    }),
  },
}

// Input component
export const Input = {
  variants: {
    outline: (props: Dict | StyleFunctionProps) => ({
      field: {
        borderColor: mode('gray.300', 'gray.600')(props),
        _hover: {
          borderColor: mode('primary', 'cyan.200')(props),
        },
        _focus: {
          borderColor: mode('primary', 'cyan.200')(props),
          boxShadow: `0 0 0 1px ${mode('primary', 'cyan.200')(props)}`,
        },
      },
    }),
  },
}

// Stack component
export const Stack = {
  baseStyle: {
    spacing: { base: 4, md: 6 },
  },
}

// Export all components together
export const components = {
  Link,
  Text,
  Heading,
  Button,
  Card,
  Badge,
  Container,
  Divider,
  Box,
  Input,
  Stack,
} 