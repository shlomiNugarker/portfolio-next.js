import { memo } from 'react'
import { useTranslation } from 'next-i18next'
import { useMenuState } from './hooks/useMenuState'
import { useMenuStyles } from './hooks/useMenuStyles'
import MobileMenuBar from './components/MobileMenuBar'
import NavigationContainer from './components/NavigationContainer'

/**
 * Navigation component that handles both mobile and desktop navigation
 */
const Navigation = () => {
  const { i18n } = useTranslation('common')
  const direction = i18n.dir()
  const isRtl = direction === 'rtl'

  // Use custom hooks to manage menu state and styling
  const menuState = useMenuState()
  const menuStyles = useMenuStyles(menuState)

  return (
    <>
      {/* Mobile menu bar */}
      <MobileMenuBar
        menuState={menuState}
        menuStyles={menuStyles}
        isRtl={isRtl}
      />

      {/* Main navigation container */}
      <NavigationContainer
        menuState={menuState}
        menuStyles={menuStyles}
        isRtl={isRtl}
      />
    </>
  )
}

export default memo(Navigation)
