import {
  Text,
  TextProps,
  Heading as ChakraHeading,
  HeadingProps as ChakraHeadingProps,
  useColorModeValue,
} from '@chakra-ui/react'
import { headingStyles } from 'styles/shared'

interface TextWithVariantProps extends TextProps {
  variant?:
    | 'normal'
    | 'emphasis'
    | 'description'
    | 'accent'
    | 'muted'
    | 'gradient'
}

interface HeadingProps extends ChakraHeadingProps {
  variant?:
    | 'normal'
    | 'emphasis'
    | 'description'
    | 'accent'
    | 'muted'
    | 'gradient'
  withGradient?: boolean
  translate?: 'yes' | 'no'
}

/**
 * StyledText component for consistent text styling using theme variants
 */
export const StyledText = ({
  variant = 'normal',
  children,
  ...props
}: TextWithVariantProps) => {
  // Always define the gradient colors regardless of variant
  const gradientColors = useColorModeValue(
    'linear(to-r, primary, secondary)',
    'linear(to-r, cyan.200, secondary)'
  )

  // Special case for gradient text
  if (variant === 'gradient') {
    return (
      <Text
        as="span"
        bgGradient={gradientColors}
        backgroundClip="text"
        {...props}
      >
        {children}
      </Text>
    )
  }

  return (
    <Text variant={variant === 'normal' ? undefined : variant} {...props}>
      {children}
    </Text>
  )
}

/**
 * StyledHeading component for consistent heading styling using theme variants
 */
export const StyledHeading = ({
  variant = 'normal',
  withGradient = false,
  children,
  ...props
}: HeadingProps) => {
  // Prepare gradient styling if needed
  const gradientColors = useColorModeValue(
    'linear(to-r, primary, secondary)',
    'linear(to-r, cyan.200, secondary)'
  )

  const gradientProps = withGradient
    ? {
        bgGradient: gradientColors,
        backgroundClip: 'text',
      }
    : {}

  // Create a new props object without the problematic properties
  // This is a brute force approach, but it works around type issues
  const safeProps = { ...props } as any
  // Delete problematic props
  if ('translate' in safeProps) delete safeProps.translate

  return (
    <ChakraHeading
      {...headingStyles}
      variant={variant === 'normal' ? undefined : variant}
      {...gradientProps}
      {...safeProps}
    >
      {children}
    </ChakraHeading>
  )
}

export default {
  Text: StyledText,
  Heading: StyledHeading,
}
