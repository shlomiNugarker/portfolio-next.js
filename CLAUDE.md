# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Format code with Prettier
npm run format

# Check formatting
npm run format:check
```

## Architecture Overview

This is a multilingual Next.js portfolio website built with TypeScript, Chakra UI, and i18next for internationalization. The project follows a component-driven architecture with a centralized theming system.

### Key Architectural Patterns

- **Component Organization**: Components are organized in `components/` with three main categories:

  - `Core/`: Reusable UI primitives (Typography, Grid, Card, Container, Section)
  - `Sections/`: Page-specific sections (About, FeaturedWorks, GetInTouch)
  - `Layout/` and `Misc/`: Layout helpers and utility components

- **Theming System**: Centralized in `styles/theme/` using Chakra UI's theming:

  - `tokens.ts`: Design tokens (colors, spacing, typography)
  - `components.ts`: Component theme overrides
  - Accessed via `useThemeStyles()` hook, never hardcode colors or spacing

- **Styling Approach**:

  - CSS Modules for component-specific styles (`.module.css`)
  - Chakra UI components with theme tokens
  - `useResponsive()` hook for responsive behavior

- **Internationalization**:
  - Multi-language support via next-i18next
  - Translation files in `public/locales/`
  - Content configuration in `config/projects.ts/` organized by language

### Critical Development Rules

1. **TypeScript**: Always use strong typing with functional components only
2. **No Hardcoded Text**: All UI text must use i18n (`t` function from `react-i18next`)
3. **Theme System**: Use `useThemeStyles()` for colors/spacing, never hardcode values
4. **Responsive Design**: Use `useResponsive()` hook and Chakra's responsive syntax
5. **Component Reuse**: Prefer existing Core components (Typography, Grid, Card)
6. **Accessibility**: Include ARIA attributes and ensure keyboard accessibility
7. **Error Boundaries**: Wrap critical sections with `ErrorBoundary` component

### Configuration Structure

- `config/theme.ts`: Theme configuration and constants
- `config/animations.ts`: Animation patterns and durations
- `config/skills.ts`: Skills data
- `config/sidebar.ts`: Sidebar configuration
- `config/projects.ts/`: Project data organized by language files

### Hook Usage

- `useThemeStyles()`: Access theme colors, styles, and constants
- `useResponsive()`: Handle responsive behavior consistently
- `useScrollDirection()`: Detect scroll direction for animations

### SEO and Performance

- Use `OpenGraphHead` component for SEO meta tags
- Wrap pages in `Container` component when needed
- Components support both light and dark themes automatically

## Project-Specific Notes

- Portfolio content is managed through language-specific config files
- Components use CSS Modules with BEM-like naming
- Animation patterns are defined in `config/animations.ts`
- The project supports 8 languages (en, he, ar, de, es, fr, hi, ru)
- All styling should go through the theme system to maintain consistency
