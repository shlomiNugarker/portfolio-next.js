# Styling Guide for Portfolio Website

## Overview

This document outlines the styling approach used in this portfolio website. The project follows a modular, theme-based styling system using Chakra UI, with careful attention to avoid hard-coded values and to promote reusability.

## Core Principles

1. **Theme Centralization**: All colors, spacing, typography, and animation values are defined in theme tokens.
2. **Responsive Design**: All components are built to be responsive using Chakra UI's responsive syntax.
3. **Dark/Light Mode**: Theme supports both dark and light modes seamlessly.
4. **Modularity**: Styles are organized into reusable chunks.
5. **Accessibility**: Design choices prioritize accessibility.

## Directory Structure

```
styles/
  ├── theme/
  │   ├── index.ts        # Theme creation and configuration
  │   ├── tokens.ts       # Tokens for colors, spacing, typography, etc.
  │   └── components.ts   # Theme overrides for Chakra components
  │
  ├── shared/
  │   └── index.ts        # Shared style objects and utilities
  │
  └── globals.css         # Global CSS (minimal usage)

hooks/
  └── theme/
      ├── useThemeStyles.ts   # Hook for accessing theme values
      └── useResponsive.ts    # Hook for responsive utilities

constants/
  └── app.ts              # Application-wide constants
```

## Theme Structure

The theme is structured using tokens that follow a clear naming convention:

- **Color Tokens**: Base colors and semantic color assignments
- **Space Tokens**: Spacing units and layout spacings
- **Typography Tokens**: Font sizes, weights, line heights
- **Animation Tokens**: Durations, delays, easings

## How to Use the Theme System

### 1. Accessing Theme Values

Use the `useThemeStyles` hook to access theme values:

```tsx
import useThemeStyles from 'hooks/theme/useThemeStyles'

const Component = () => {
  const { getPrimaryColor, getTextColor, getPrimaryButtonStyles, constants } =
    useThemeStyles()

  return (
    <Box color={getTextColor()}>
      <Text color={getPrimaryColor()}>Themed text</Text>
      <Button {...getPrimaryButtonStyles()}>Click me</Button>
      <Link href={`mailto:${constants.contactEmail}`}>
        {constants.contactEmail}
      </Link>
    </Box>
  )
}
```

### 2. Using Shared Styles

Shared styles provide reusable style objects:

```tsx
import useThemeStyles from 'hooks/theme/useThemeStyles'

const Component = () => {
  const { styles } = useThemeStyles()

  return <Box {...styles.cardStyles}>Card content</Box>
}
```

### 3. Responsive Layouts

Use Chakra UI's responsive syntax and our spacing tokens:

```tsx
<Container
  maxW={{ base: '100%', md: '90%', lg: '1200px' }}
  px={{ base: 4, md: 6, lg: 8 }}
>
  Content
</Container>
```

### 4. Using Constants

Application-wide constants are available from both constants file and the theme system:

```tsx
import useThemeStyles from 'hooks/theme/useThemeStyles'

const Component = () => {
  const { constants } = useThemeStyles()

  return (
    <Link href={`mailto:${constants.contactEmail}`}>
      {constants.contactEmail}
    </Link>
  )
}
```

## Best Practices

1. **Avoid Inline Styles**: Always use the theme system or styled components
2. **Avoid Hard-coded Values**: Use theme tokens for colors, spacing, etc.
3. **Prefer Theme Getters**: Use theme getter methods rather than direct color names
4. **Consistent Naming**: Follow the established naming conventions
5. **Responsive First**: Always consider all viewport sizes
6. **Accessibility**: Ensure sufficient color contrast and keyboard navigation

## Adding New Styles

When adding new styles:

1. For **component-specific styles**, add them to the component file
2. For **reusable styles**, add them to the appropriate file in `styles/shared/`
3. For **new tokens**, add them to `styles/theme/tokens.ts`
4. For **new constants**, add them to `constants/app.ts`

## Dark/Light Mode

The theme system handles dark/light mode automatically. Use the `getColorValue` helper:

```tsx
const backgroundColor = getColorValue('white', 'gray.800')
```

Or use the mode-aware getters:

```tsx
const textColor = getTextColor() // Returns appropriate color for the current mode
```

---

By following these guidelines, we maintain a consistent, maintainable, and theme-based approach to styling across the project.
