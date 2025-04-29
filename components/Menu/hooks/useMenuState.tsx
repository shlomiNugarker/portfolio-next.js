import { useCycle } from 'framer-motion'
import { useCallback, useEffect } from 'react'
import { useBreakpointValue } from '@chakra-ui/react'
import { mobileBreakpointsMap } from 'config/theme'
import useScrollDirection, { ScrollDirection } from 'hooks/useScrollDirection'

export interface MenuState {
  isOpen: boolean
  toggleOpen: () => void
  isMobile: boolean
  scrollDirection: ScrollDirection
  isScrollingDown: boolean
}

/**
 * Custom hook to manage menu state and responsive behavior
 */
export const useMenuState = (preventScrollWhenOpen = true): MenuState => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const isMobile = useBreakpointValue(mobileBreakpointsMap) || false
  const scrollDirection = useScrollDirection(
    false,
    isMobile,
    preventScrollWhenOpen ? !isOpen : true
  )

  const isScrollingDown = scrollDirection === ScrollDirection.Down

  // Add effect to prevent body scrolling when menu is open on mobile
  useEffect(() => {
    if (isMobile && isOpen) {
      // Prevent scrolling on body when menu is open
      document.body.style.overflow = 'hidden'
    } else {
      // Re-enable scrolling when menu is closed
      document.body.style.overflow = ''
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobile, isOpen])

  // Special handling for mobile menu - ensure it doesn't block interactions when closed
  useEffect(() => {
    if (isMobile) {
      const navElement = document.querySelector('nav[role="navigation"]')
      if (navElement) {
        if (isOpen) {
          navElement.setAttribute(
            'style',
            'pointer-events: auto; visibility: visible;'
          )
        } else {
          navElement.setAttribute(
            'style',
            'pointer-events: none; visibility: hidden;'
          )
        }
      }
    }
  }, [isMobile, isOpen])

  const handleToggle = useCallback(() => {
    toggleOpen()
  }, [toggleOpen])

  return {
    isOpen,
    toggleOpen: handleToggle,
    isMobile,
    scrollDirection,
    isScrollingDown,
  }
}
