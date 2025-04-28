import { SystemStyleObject } from '@chakra-ui/react'

/**
 * Common style objects that can be reused across components
 */

// Section styles - for page sections
export const sectionStyles: SystemStyleObject = {
  width: '100%',
  padding: { base: 4, md: 6, lg: 8 },
  borderRadius: 'lg',
  marginBottom: 8,
  transition: 'all 0.3s ease-in-out',
}

// Card styles - for content cards
export const cardStyles: SystemStyleObject = {
  borderRadius: 'lg',
  boxShadow: 'md',
  padding: { base: 4, md: 6 },
  overflow: 'hidden',
  transition: 'all 0.3s ease-in-out',
  _hover: {
    boxShadow: 'lg',
    transform: 'translateY(-4px)',
  },
}

// Badge styles - for small badges or tags
export const badgeStyles: SystemStyleObject = {
  borderRadius: 'full',
  px: 2,
  py: 1,
  fontSize: 'xs',
  fontWeight: 'bold',
}

// Main heading styles
export const headingStyles: SystemStyleObject = {
  fontWeight: 'bold',
  lineHeight: 1.2,
  marginBottom: 4,
}

// Container styles
export const containerStyles: SystemStyleObject = {
  width: '100%',
  maxWidth: { base: '100%', md: '90%', lg: '1200px' },
  marginX: 'auto',
  padding: { base: 4, md: 0 },
}

// Button base styles
export const buttonBaseStyles: SystemStyleObject = {
  borderRadius: 'lg',
  fontWeight: 'bold',
  transition: 'all 0.2s ease-in-out',
  _hover: {
    transform: 'translateY(-2px)',
    boxShadow: 'md',
  },
  _active: {
    transform: 'translateY(0)',
    boxShadow: 'sm',
  },
}

// Animation related styles
export const transitionStyles = {
  fast: 'all 0.2s ease-in-out',
  medium: 'all 0.3s ease-in-out',
  slow: 'all 0.5s ease-in-out',
}

// Interactive styles - for interactive elements
export const interactiveStyles: SystemStyleObject = {
  cursor: 'pointer',
  transition: transitionStyles.medium,
  _hover: {
    transform: 'scale(1.05)',
  },
  _active: {
    transform: 'scale(0.98)',
  },
}

// Responsive flex container
export const responsiveFlexContainer: SystemStyleObject = {
  display: 'flex',
  flexDirection: { base: 'column', md: 'row' },
  alignItems: { base: 'center', md: 'flex-start' },
  gap: { base: 4, md: 6, lg: 8 },
}

// Responsive grid container
export const responsiveGridContainer: SystemStyleObject = {
  display: 'grid',
  gridTemplateColumns: { 
    base: 'repeat(1, 1fr)', 
    sm: 'repeat(2, 1fr)', 
    md: 'repeat(3, 1fr)',
    lg: 'repeat(4, 1fr)',
  },
  gap: { base: 4, md: 6 },
}

// Section divider
export const sectionDivider: SystemStyleObject = {
  my: 8,
  borderColor: 'gray.400',
  opacity: 0.7,
}

// Glass morphism effect
export const glassMorphism: SystemStyleObject = {
  backdropFilter: 'blur(10px)',
  backgroundColor: 'rgba(255, 255, 255, 0.1)', 
  boxShadow: 'md',
  borderRadius: 'lg',
} 