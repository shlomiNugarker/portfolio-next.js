import { useEffect } from 'react'
import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import Head from 'next/head'
import theme from 'config/theme'
import FavIconProvider from 'components/Misc/FavIconProvider'
import ErrorBoundary from 'components/Misc/ErrorBoundary'
import '../styles/globals.css'

// Security configuration
const BLOCKED_KEYS = [
  { key: 'F12', ctrl: false, shift: false },
  { key: 'I', ctrl: true, shift: true },
  { key: 'J', ctrl: true, shift: true },
  { key: 'U', ctrl: true, shift: false },
] as const

interface SecurityConfig {
  enableContextMenu: boolean
  enableDevTools: boolean
}

const SECURITY_CONFIG: SecurityConfig = {
  enableContextMenu: false,
  enableDevTools: process.env.NODE_ENV === 'development',
}

function SNSite({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => {
      if (!SECURITY_CONFIG.enableContextMenu) {
        event.preventDefault()
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!SECURITY_CONFIG.enableDevTools) {
        const isBlockedKey = BLOCKED_KEYS.some(
          (combo) =>
            event.key === combo.key &&
            event.ctrlKey === combo.ctrl &&
            event.shiftKey === combo.shift
        )

        if (isBlockedKey) {
          event.preventDefault()
        }
      }
    }

    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu)
    document.addEventListener('keydown', handleKeyDown)

    // Cleanup function
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="theme-color"
          content={
            theme.config.initialColorMode === 'dark' ? '#1A202C' : '#FFFFFF'
          }
        />
        <meta name="description" content="Shlomi's Portfolio" />
      </Head>

      <ErrorBoundary>
        <AnimatePresence mode="wait" initial={false}>
          <ChakraProvider theme={theme} resetCSS>
            <FavIconProvider>
              <Component {...pageProps} />
            </FavIconProvider>
          </ChakraProvider>
        </AnimatePresence>
      </ErrorBoundary>
    </>
  )
}

export default appWithTranslation(SNSite)
