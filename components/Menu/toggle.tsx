import * as React from 'react'
import { motion } from 'framer-motion'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Path = ({ isDarkMode, ...props }: { isDarkMode?: boolean } & any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke={isDarkMode ? 'hsl(240, 100%, 94%)' : 'hsl(0, 0%, 7%)'}
    strokeLinecap="round"
    {...props}
  />
)

export const MenuToggle = ({
  toggle,
  isDarkMode = false,
}: {
  toggle(): void
  isDarkMode?: boolean
}) => (
  <button
    onClick={toggle}
    style={{
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
    }}
  >
    <svg width="23" height="23" viewBox="0 0 23 18">
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
        transition={{ duration: 0.1 }}
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

const MobileMenu = ({ isDarkMode = false }: { isDarkMode: boolean }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const menuRef = React.useRef<HTMLDivElement>(null)

  const toggle = React.useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <motion.nav
      ref={menuRef}
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <MenuToggle toggle={toggle} isDarkMode={isDarkMode} />
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'absolute',
          top: '50px',
          right: 0,
          width: '200px',
          background: isDarkMode ? '#333' : '#fff',
          color: isDarkMode ? '#fff' : '#000',
          padding: '10px',
          borderRadius: '5px',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          display: isOpen ? 'block' : 'none',
        }}
      >
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{ padding: '10px 0', borderBottom: '1px solid #ccc' }}>
            <a href="#">Home</a>
          </li>
          <li style={{ padding: '10px 0', borderBottom: '1px solid #ccc' }}>
            <a href="#">About</a>
          </li>
          <li style={{ padding: '10px 0' }}>
            <a href="#">Contact</a>
          </li>
        </ul>
      </motion.div>
    </motion.nav>
  )
}

export default MobileMenu
