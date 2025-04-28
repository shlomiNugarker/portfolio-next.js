# Styling System Documentation

This document outlines the styling and theming approach used in the Portfolio project.

## 📚 Table of Contents

- [Overview](#overview)
- [Directory Structure](#directory-structure)
- [Theme Tokens](#theme-tokens)
- [Component Styles](#component-styles)
- [Shared Styles](#shared-styles)
- [Core Components](#core-components)
- [Hooks](#hooks)

## Overview

The styling system is built on top of Chakra UI with customizations to provide:

- Consistent design language across the application
- Responsive layouts with predefined breakpoints
- Dark and light mode support
- Reusable style patterns and components
- Type-safe theme configuration

## Directory Structure

```
styles/
├── globals.css         # Global CSS styles
├── shared/             # Shared style objects
│   └── index.ts        # Exported style objects
├── theme/              # Theme configuration
│   ├── components.ts   # Component-specific styles
│   ├── index.ts        # Main theme export
│   └── tokens.ts       # Design tokens (colors, spacing, etc.)
```

## Theme Tokens

Theme tokens in `tokens.ts` define the foundational design elements:

- **Colors**: Brand colors, semantic colors, and color scales
- **Typography**: Font sizes, families, and weights
- **Spacing**: Margin and padding values
- **Borders**: Border radius values
- **Shadows**: Box-shadow definitions
- **Transitions**: Timing and easing
- **Z-indices**: Layer management
- **Breakpoints**: Screen size definitions

## Component Styles

Component styles in `components.ts` define how theme tokens are applied to specific components:

- **Variants**: Different visual styles for components
- **Base Styles**: Default styling for components
- **Sizes**: Size variations of components
- **Parts**: Styles for multi-part components

## Shared Styles

Shared styles in `shared/index.ts` provide reusable style objects for common patterns:

- **Section styles**: For page sections
- **Card styles**: For content cards
- **Badge styles**: For small badges or tags
- **Heading styles**: For consistent heading appearance
- **Container styles**: For content containers
- **Responsive layouts**: Flex and grid containers
- **Animation styles**: Common transitions and animations

## Core Components

Core components in `components/Core/` provide themed UI building blocks:

- **Section**: Page section container
- **Card**: Styled card component
- **Container**: Content container
- **Typography**: Text and Heading components
- **Grid**: Responsive grid components
- **Animated**: Animation wrapper components

## Hooks

Custom hooks provide easy access to the styling system:

- **useThemeStyles**: Access to theme colors and tokens with dark/light mode awareness
- **useResponsive**: Responsive utilities and breakpoint-aware values

## Usage Examples

### Using the Theme in Components

```tsx
import { Box, Text } from '@chakra-ui/react'

function MyComponent() {
  return (
    <Box bg="primary" color="white" p={4} borderRadius="lg">
      <Text variant="emphasis">Styled text using theme</Text>
    </Box>
  )
}
```

### Using Shared Styles

```tsx
import { Box } from '@chakra-ui/react'
import { cardStyles } from 'styles/shared'

function MyCard() {
  return (
    <Box {...cardStyles} bg="white">
      Card content
    </Box>
  )
}
```

### Using Core Components

```tsx
import { Card, Text, Heading } from 'components/Core'

function MySection() {
  return (
    <Card variant="interactive">
      <Heading variant="emphasis">Card Title</Heading>
      <Text>Card content</Text>
    </Card>
  )
}
```

### Using Theme Hooks

```tsx
import { Box } from '@chakra-ui/react'
import useThemeStyles from 'hooks/theme/useThemeStyles'

function MyComponent() {
  const { getPrimaryColor, isDarkMode } = useThemeStyles()
  
  return (
    <Box color={getPrimaryColor()}>
      {isDarkMode ? 'Dark mode content' : 'Light mode content'}
    </Box>
  )
}
``` 