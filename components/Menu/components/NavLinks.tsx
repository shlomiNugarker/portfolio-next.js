import React, { useCallback } from 'react'
import { Box, Button } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import { MenuState } from '../hooks/useMenuState'
import { MenuStyles } from '../hooks/useMenuStyles'

// Define navigation links as a constant for better maintainability
const NAV_LINKS = [
  { key: 'about', baseHref: '#aboutMe', defaultHref: '#' },
  { key: 'works', baseHref: '#works', defaultHref: '#works' },
  { key: 'contact', baseHref: '#contact', defaultHref: '#contact' },
] as const

interface NavLinksProps {
  menuState: MenuState
  menuStyles: MenuStyles
}

const NavLinks: React.FC<NavLinksProps> = ({ menuState, menuStyles }) => {
  const { t } = useTranslation('common')
  const { isOpen, toggleOpen, isMobile } = menuState
  const { menuItems } = menuStyles

  // Handle navigation item clicks
  const onMenuItemClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      if (isMobile) {
        toggleOpen()

        // Add a small delay to allow the menu to close before scrolling
        const href = e.currentTarget.getAttribute('href')
        if (href && href.startsWith('#')) {
          e.preventDefault()
          setTimeout(() => {
            const targetElement = document.querySelector(href)
            if (targetElement) {
              targetElement.scrollIntoView({ behavior: 'smooth' })
            }
          }, 300)
        }
      }
    },
    [isMobile, toggleOpen]
  )

  return (
    <>
      {NAV_LINKS.map(({ key, baseHref, defaultHref }, index) => (
        <Box
          key={key}
          width={{ base: '100%', lg: 'auto' }}
          textAlign={{ base: 'center' }}
          borderBottom={
            isMobile && index !== NAV_LINKS.length - 1 ? '1px solid' : 'none'
          }
          borderColor={menuItems.borderColor}
          paddingY={isMobile ? 5 : 0}
        >
          <Button
            fontWeight={isMobile ? 'medium' : 'light'}
            variant="ghost"
            fontSize={
              isMobile ? { base: '2xl', sm: 'xl' } : menuItems.buttonSize
            }
            letterSpacing={2}
            className={menuItems.btnClassName}
            padding={isMobile ? 4 : 2}
            marginX={2}
            width={isMobile ? '80%' : 'auto'}
            as="a"
            href={isMobile ? baseHref : defaultHref}
            rel="noreferrer"
            onClick={onMenuItemClick}
            role="menuitem"
            aria-label={t(`nav.${key}`) as string}
            _hover={{
              backgroundColor: isMobile ? menuItems.hoverBg : 'transparent',
              transform: 'scale(1.05)',
            }}
            transition="all 0.3s ease-in-out"
          >
            {t(`nav.${key}`)}
          </Button>
        </Box>
      ))}
    </>
  )
}

export default NavLinks
