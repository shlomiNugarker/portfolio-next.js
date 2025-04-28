import { Box, BoxProps, useColorModeValue } from '@chakra-ui/react'
import { cardStyles } from 'styles/shared'

interface CardProps extends BoxProps {
  variant?: 'default' | 'interactive' | 'flat'
  isHoverable?: boolean
}

/**
 * A styled card component that uses theme styles
 * Supports multiple variants and hover effects
 */
const Card = ({
  children,
  variant = 'default',
  isHoverable = true,
  ...rest
}: CardProps) => {
  // Get contextual colors
  const bg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  // Style variants
  const variants = {
    default: {
      bg,
      boxShadow: 'md',
      _hover: isHoverable
        ? { boxShadow: 'lg', transform: 'translateY(-4px)' }
        : {},
    },
    interactive: {
      bg,
      boxShadow: 'md',
      cursor: 'pointer',
      transition: 'all 0.3s ease-in-out',
      _hover: isHoverable
        ? { boxShadow: 'lg', transform: 'translateY(-4px)' }
        : {},
      _active: { transform: 'translateY(0)' },
    },
    flat: {
      bg,
      borderWidth: '1px',
      borderColor,
      _hover: isHoverable
        ? { borderColor: 'primary', transform: 'translateY(-2px)' }
        : {},
    },
  }

  // Filter out problematic props
  const { p, rotate, ...props } = rest

  // Handle p prop separately if needed
  const paddingProps = p !== undefined ? { p: typeof p === 'boolean' ? undefined : p } : {}

  return (
    <Box
      {...cardStyles}
      {...variants[variant]}
      transition="all 0.3s ease-in-out"
      {...props}
      {...paddingProps}
    >
      {children}
    </Box>
  )
}

export default Card
