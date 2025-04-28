import { Box, BoxProps, useColorModeValue } from '@chakra-ui/react'
import { sectionStyles } from 'styles/shared'

interface SectionProps extends BoxProps {
  variant?: 'default' | 'primary' | 'secondary' | 'dark'
}

/**
 * A styled section component for page content sections
 * Supports different color variants and inherits theme styles
 */
const Section = ({
  children,
  variant = 'default',
  ...props
}: SectionProps) => {
  // Get contextual colors
  const defaultBg = useColorModeValue('white', 'gray.800')
  const primaryBg = useColorModeValue('green.50', 'green.900')
  const secondaryBg = useColorModeValue('navy.50', 'navy.900')
  const darkBg = useColorModeValue('gray.100', 'gray.900')

  // Style variants
  const variants = {
    default: {
      bg: defaultBg,
    },
    primary: {
      bg: primaryBg,
    },
    secondary: {
      bg: secondaryBg,
    },
    dark: {
      bg: darkBg,
    },
  }

  return (
    <Box
      as="section"
      {...sectionStyles}
      {...variants[variant]}
      {...props}
    >
      {children}
    </Box>
  )
}

export default Section 