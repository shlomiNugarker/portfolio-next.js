import { useBreakpointValue } from '@chakra-ui/react'
import { useMemo } from 'react'

/**
 * Custom hook for responsive layout values
 * Centralizes responsive values for consistent UI across components
 */
export default function useResponsiveLayout() {
  // Spacing values
  const spacing = useBreakpointValue({
    base: {
      xs: 2,
      sm: 4,
      md: 6,
      lg: 8,
      xl: 12,
    },
    md: {
      xs: 3,
      sm: 5,
      md: 8,
      lg: 12,
      xl: 16,
    },
    lg: {
      xs: 4,
      sm: 6,
      md: 10,
      lg: 16,
      xl: 24,
    },
  }) || {
    xs: 2,
    sm: 4,
    md: 6,
    lg: 8,
    xl: 12,
  }

  // Padding values
  const padding = useBreakpointValue({
    base: {
      xs: 2,
      sm: 4,
      md: 6,
      lg: 8,
    },
    md: {
      xs: 3,
      sm: 6,
      md: 8,
      lg: 12,
    },
    lg: {
      xs: 4,
      sm: 8,
      md: 12,
      lg: 16,
    },
  }) || {
    xs: 2,
    sm: 4,
    md: 6,
    lg: 8,
  }

  // Font sizes
  const fontSize = useBreakpointValue({
    base: {
      xs: 'xs',
      sm: 'sm',
      md: 'md',
      lg: 'lg',
      xl: 'xl',
      '2xl': '2xl',
      '3xl': '3xl',
    },
    md: {
      xs: 'sm',
      sm: 'md',
      md: 'lg',
      lg: 'xl',
      xl: '2xl',
      '2xl': '3xl',
      '3xl': '4xl',
    },
    lg: {
      xs: 'sm',
      sm: 'md',
      md: 'lg',
      lg: 'xl',
      xl: '2xl',
      '2xl': '3xl',
      '3xl': '4xl',
    },
  }) || {
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
    '2xl': '2xl',
    '3xl': '3xl',
  }

  // Border radius
  const borderRadius = useBreakpointValue({
    base: {
      sm: 'sm',
      md: 'md',
      lg: 'lg',
      xl: 'xl',
      '2xl': '2xl',
      full: 'full',
    },
    md: {
      sm: 'sm',
      md: 'md',
      lg: 'lg',
      xl: 'xl',
      '2xl': '2xl',
      full: 'full',
    },
    lg: {
      sm: 'sm',
      md: 'md',
      lg: 'lg',
      xl: 'xl',
      '2xl': '2xl',
      full: 'full',
    },
  }) || {
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
    '2xl': '2xl',
    full: 'full',
  }

  // Grid layouts
  const grid = useMemo(() => ({
    // Projects grid
    projects: {
      columns: {
        base: 1,
        sm: 1,
        md: 2,
        lg: 2,
        xl: 3,
      },
      spacing: {
        base: spacing.md,
        sm: spacing.lg,
        md: spacing.lg,
        lg: spacing.xl,
      },
    },
    // Skills grid
    skills: {
      columns: {
        base: 2,
        sm: 3,
        md: 4,
        lg: 5,
        xl: 6,
      },
      spacing: {
        base: spacing.xs,
        sm: spacing.sm,
        md: spacing.md,
      },
    },
    // Services grid
    services: {
      columns: {
        base: 1,
        sm: 2,
        md: 2,
        lg: 3,
        xl: 3,
      },
      spacing: {
        base: spacing.md,
        sm: spacing.lg,
        md: spacing.lg,
        lg: spacing.xl,
      },
    },
  }), [spacing])

  // Container sizing
  const container = useMemo(() => ({
    maxWidth: {
      base: '100%',
      sm: '540px',
      md: '720px',
      lg: '960px',
      xl: '1140px',
      '2xl': '1320px',
    },
    padding: {
      base: `${padding.sm}px`,
      sm: `${padding.md}px`,
      md: `${padding.lg}px`,
    },
  }), [padding])

  // Section spacing
  const section = useMemo(() => ({
    padding: {
      base: `${padding.md}px`,
      sm: `${padding.lg}px`,
      md: `${padding.lg}px ${padding.md}px`,
      lg: `${padding.xl}px ${padding.lg}px`,
    },
    margin: {
      base: `${spacing.md}px 0`,
      sm: `${spacing.lg}px 0`,
      md: `${spacing.xl}px 0`,
      lg: `${spacing.xl}px 0`,
    },
    gap: {
      base: spacing.md,
      sm: spacing.lg,
      md: spacing.xl,
      lg: spacing.xl,
    },
  }), [spacing, padding])

  // Card styling
  const card = useMemo(() => ({
    padding: {
      base: padding.sm,
      sm: padding.md,
      md: padding.md,
      lg: padding.lg,
    },
    borderRadius: borderRadius.md,
    gap: {
      base: spacing.sm,
      sm: spacing.md,
      md: spacing.md,
      lg: spacing.lg,
    },
  }), [spacing, padding, borderRadius])

  // Button sizing
  const button = useMemo(() => ({
    size: {
      base: 'md',
      sm: 'md',
      md: 'lg',
    },
    iconSize: {
      base: 4,
      sm: 5,
      md: 5,
      lg: 6,
    },
  }), [])

  // Sidebar config
  const sidebar = useMemo(() => ({
    width: {
      base: '100%',
      sm: '100%',
      md: '300px',
      lg: '300px',
      xl: '350px',
    },
    padding: {
      base: `${padding.sm}px`,
      sm: `${padding.md}px`,
      md: `${padding.md}px`,
      lg: `${padding.lg}px`,
    },
  }), [padding])

  // Main content config
  const mainContent = useMemo(() => ({
    padding: {
      base: `${padding.sm}px`,
      sm: `${padding.md}px`,
      md: `${padding.md}px`,
      lg: `${padding.lg}px`,
    },
    maxWidth: {
      base: '100%',
      sm: '100%',
      md: '100%',
      lg: 'calc(100% - 300px)',
      xl: 'calc(100% - 350px)',
    },
  }), [padding])

  // Modal config
  const modal = useMemo(() => ({
    size: {
      base: 'full',
      sm: 'lg',
      md: 'xl',
      lg: '2xl',
      xl: '4xl',
    },
    padding: {
      base: padding.sm,
      sm: padding.md,
      md: padding.lg,
      lg: padding.lg,
    },
  }), [padding])

  // Image sizing
  const image = useMemo(() => ({
    thumbnail: {
      base: '60px',
      sm: '80px',
      md: '100px',
      lg: '120px',
    },
    avatar: {
      base: '60px',
      sm: '80px',
      md: '100px',
      lg: '120px',
      xl: '150px',
    },
    projectCard: {
      height: {
        base: '220px',
        sm: '240px',
        md: '270px',
        lg: '300px',
        xl: '320px',
      },
    },
  }), [])

  // Detect if current viewport is mobile
  const isMobile = useBreakpointValue({ base: true, md: false }) || false

  // Detect if current viewport is tablet
  const isTablet = useBreakpointValue({ base: false, md: true, lg: false }) || false

  // Detect if current viewport is desktop
  const isDesktop = useBreakpointValue({ base: false, lg: true }) || false

  return {
    spacing,
    padding,
    fontSize,
    borderRadius,
    grid,
    container,
    section,
    card,
    button,
    sidebar,
    mainContent,
    modal,
    image,
    isMobile,
    isTablet,
    isDesktop,
  }
}
