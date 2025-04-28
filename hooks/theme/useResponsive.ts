import { useBreakpointValue } from '@chakra-ui/react'
import { layoutConfig } from 'styles/theme/tokens'

/**
 * Custom hook for responsive design utilities
 * Provides easy access to responsive values and layout configurations
 */
export const useResponsive = () => {
  // Get breakpoint values for various layout configurations
  const sideBarPadding = useBreakpointValue(layoutConfig.sideBarPadding)
  const mainContent = useBreakpointValue(layoutConfig.mainContent)
  const topPadding = useBreakpointValue(layoutConfig.topPadding)
  const gridColumns = useBreakpointValue(layoutConfig.gridColumns)
  const gridRows = useBreakpointValue(layoutConfig.gridRows)

  // Determine if we're on mobile/tablet based on breakpoints
  const isMobile = useBreakpointValue({ base: true, md: true, lg: false })
  const isTablet = useBreakpointValue({ base: false, md: true, lg: false })
  const isDesktop = useBreakpointValue({ base: false, md: false, lg: true })

  // Responsive value presets
  const titleFontSize = useBreakpointValue({ base: '2xl', md: '3xl', lg: '4xl' })
  const subtitleFontSize = useBreakpointValue({ base: 'lg', md: 'xl', lg: '2xl' })
  const bodyFontSize = useBreakpointValue({ base: 'md', md: 'md', lg: 'lg' })
  const smallFontSize = useBreakpointValue({ base: 'sm', md: 'sm', lg: 'md' })
  
  const smSpacing = useBreakpointValue({ base: 2, md: 3, lg: 4 })
  const mdSpacing = useBreakpointValue({ base: 4, md: 6, lg: 8 })
  const lgSpacing = useBreakpointValue({ base: 6, md: 8, lg: 12 })
  const xlSpacing = useBreakpointValue({ base: 8, md: 12, lg: 16 })
  
  const containerPadding = useBreakpointValue({ base: 4, md: 6, lg: 8, xl: 10 })
  const sectionMargin = useBreakpointValue({ base: 8, md: 12, lg: 16, xl: 20 })

  return {
    // Device detection
    isMobile,
    isTablet,
    isDesktop,
    
    // Layout configurations
    sideBarPadding,
    mainContent,
    topPadding,
    gridColumns,
    gridRows,
    
    // Common responsive values
    spacing: {
      sm: smSpacing,
      md: mdSpacing,
      lg: lgSpacing,
      xl: xlSpacing,
    },
    
    // Text sizing
    fontSize: {
      title: titleFontSize,
      subtitle: subtitleFontSize,
      body: bodyFontSize,
      small: smallFontSize,
    },
    
    // Layout sizing
    containerPadding,
    sectionMargin,
  }
}

export default useResponsive 