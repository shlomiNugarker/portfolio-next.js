import { Box, BoxProps } from '@chakra-ui/react'
import { containerStyles } from 'styles/shared'

interface ContainerProps extends BoxProps {
  fluid?: boolean
}

/**
 * A styled container component with responsive sizing
 * Provides consistent container sizing across the app
 */
const Container = ({ children, fluid = false, ...props }: ContainerProps) => {
  return (
    <Box
      {...containerStyles}
      maxWidth={fluid ? '100%' : containerStyles.maxWidth}
      {...props}
    >
      {children}
    </Box>
  )
}

export default Container
