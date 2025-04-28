import React from 'react'
import { Container, Flex, Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import styles from '../styles.module.css'
import { menuAnim, easing } from 'config/animations'
import { MenuState } from '../hooks/useMenuState'
import { MenuStyles } from '../hooks/useMenuStyles'
import NavLinks from './NavLinks'
import ThemeToggle from './ThemeToggle'

// Pre-define motion components to prevent re-creation on each render
const MotionContainer = motion(Container)

interface NavigationContainerProps {
  menuState: MenuState
  menuStyles: MenuStyles
  isRtl: boolean
}

/**
 * Main navigation container component that holds all navigation links
 */
const NavigationContainer: React.FC<NavigationContainerProps> = ({
  menuState,
  menuStyles,
  isRtl,
}) => {
  const { isOpen, toggleOpen, isMobile } = menuState
  const { navigation: navStyles } = menuStyles

  return (
    <MotionContainer
      width={navStyles.width}
      maxWidth={
        !isMobile ? { base: '100%', sm: '100%', lg: '50%', xl: '60%' } : '100%'
      }
      className={`${styles.menu} ${isRtl ? styles.rtl : ''}`}
      right={navStyles.right}
      left={navStyles.left}
      initial="hide"
      animate={!isMobile || isOpen ? 'show' : 'hide'}
      style={{
        width: navStyles.width,
        top: navStyles.top,
        left: navStyles.left,
        opacity: navStyles.opacity,
        position: 'fixed',
        zIndex: navStyles.zIndex,
      }}
      borderColor={navStyles.borderColor}
      borderBottomWidth={navStyles.borderBottomWidth}
      paddingBottom={navStyles.paddingBottom}
      ease={easing}
      variants={menuAnim}
      marginTop={0}
      marginLeft={0}
      marginRight={0}
      paddingTop={isMobile ? 20 : 1}
      paddingX={0}
      as="nav"
      aria-expanded={isOpen}
      role="navigation"
      aria-label="Main Navigation"
      backgroundColor={navStyles.backgroundColor}
      backdropFilter={navStyles.backdropFilter}
      transition="all 0.3s ease-in-out"
      boxShadow={navStyles.boxShadow}
    >
      <Flex
        justifyContent={{ base: 'center', lg: 'flex-end' }}
        direction={{
          base: 'column',
          lg: menuState.isScrollingDown ? 'column' : 'row',
        }}
        paddingX={{ base: '0', sm: '0', lg: '0' }}
        paddingY={{
          base: '10',
          lg: menuState.isScrollingDown ? '10' : '3',
        }}
        height={{ base: '100vh', lg: 'auto' }}
        width="100%"
        paddingBottom={isMobile ? 10 : '0'}
        onClick={() => isMobile && toggleOpen()}
        gap={isMobile ? 6 : 0}
        alignItems="center"
      >
        {/* Navigation links */}
        <NavLinks menuState={menuState} menuStyles={menuStyles} />

        {/* Desktop theme toggle */}
        {!isMobile && (
          <Box alignItems="center" display="flex" justifyContent="center">
            <ThemeToggle />
          </Box>
        )}
      </Flex>
    </MotionContainer>
  )
}

export default NavigationContainer
