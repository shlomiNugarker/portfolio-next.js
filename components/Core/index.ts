import Card from './Card'
import Container from './Container'
import Section from './Section'
import { StyledText, StyledHeading } from './Typography'
import { ResponsiveGrid, GridCard } from './Grid'
import {
  AnimatedBox,
  AnimatedContainer,
  fadeIn,
  fadeInUp,
  fadeInDown,
  scaleIn,
  slideInLeft,
  slideInRight,
  staggerContainer,
} from './Animated'

// Export components
export {
  // Layout components
  Card,
  Container,
  Section,

  // Typography
  StyledText as Text,
  StyledHeading as Heading,

  // Grid components
  ResponsiveGrid as Grid,
  GridCard,

  // Animation components
  AnimatedBox,
  AnimatedContainer,

  // Animation variants
  fadeIn,
  fadeInUp,
  fadeInDown,
  scaleIn,
  slideInLeft,
  slideInRight,
  staggerContainer,
}

// Default export for all components
export default {
  Card,
  Container,
  Section,
  Text: StyledText,
  Heading: StyledHeading,
  Grid: ResponsiveGrid,
  GridCard,
  AnimatedBox,
  AnimatedContainer,
}
