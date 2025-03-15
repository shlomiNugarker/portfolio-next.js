import * as React from 'react'
import { motion, SVGMotionProps, Transition } from 'framer-motion'

// Define proper typings for the Path component
interface PathProps extends SVGMotionProps<SVGPathElement> {
  isDarkMode?: boolean
  d?: string
}

// Constants for better maintainability
const TOGGLE_BUTTON_SIZE = 40
const TOGGLE_ICON_SIZE = 23
const STROKE_WIDTH = 3
const ANIMATION_DURATION = 0.2

// Custom transition for smoother animations
const toggleTransition: Transition = {
  duration: ANIMATION_DURATION,
  ease: [0.6, 0.05, -0.01, 0.9],
}

/**
 * Animated SVG path component for menu toggle icon
 */
const Path: React.FC<PathProps> = ({ isDarkMode, ...props }) => (
  <motion.path
    fill="transparent"
    strokeWidth={STROKE_WIDTH}
    stroke={isDarkMode ? 'hsl(240, 100%, 94%)' : 'hsl(0, 0%, 7%)'}
    strokeLinecap="round"
    transition={toggleTransition}
    {...props}
  />
)

interface MenuToggleProps {
  toggle: () => void
  isDarkMode?: boolean
}

/**
 * Hamburger button component that animates between open/close states
 */
export const MenuToggle: React.FC<MenuToggleProps> = ({
  toggle,
  isDarkMode = false,
}) => (
  <button
    onClick={toggle}
    aria-label={`Toggle navigation menu`}
    aria-expanded={false}
    style={{
      width: `${TOGGLE_BUTTON_SIZE}px`,
      height: `${TOGGLE_BUTTON_SIZE}px`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0,
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      position: 'relative',
      outline: 'none',
    }}
    type="button"
  >
    <svg
      width={TOGGLE_ICON_SIZE}
      height={TOGGLE_ICON_SIZE}
      viewBox="0 0 23 18"
      aria-hidden="true"
    >
      <Path
        isDarkMode={isDarkMode}
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <Path
        isDarkMode={isDarkMode}
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
      />
      <Path
        isDarkMode={isDarkMode}
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  </button>
)

interface MobileMenuProps {
  isOpen: boolean
  toggle: () => void
  isDarkMode: boolean
}

/**
 * Mobile menu toggle component that handles the hamburger button
 * and its animation states
 */
const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  toggle,
  isDarkMode = false,
}) => (
  <motion.nav
    initial={false}
    animate={isOpen ? 'open' : 'closed'}
    style={{
      alignItems: 'center',
      display: 'flex',
      zIndex: 100,
    }}
    aria-label="Mobile navigation toggle"
  >
    <MenuToggle toggle={toggle} isDarkMode={isDarkMode} />
  </motion.nav>
)

export default MobileMenu
