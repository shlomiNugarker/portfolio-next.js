import { useEffect } from 'react'
import { appWithTranslation } from 'next-i18next'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import theme from 'config/theme'
import FavIconProvider from 'components/Misc/FavIconProvider'

function SNSite({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    document.addEventListener('contextmenu', (event) => event.preventDefault())

    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === 'F12' ||
        (event.ctrlKey && event.shiftKey && event.key === 'I') ||
        (event.ctrlKey && event.shiftKey && event.key === 'J') ||
        (event.ctrlKey && event.key === 'U')
      ) {
        event.preventDefault()
      }
    }
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('contextmenu', (event) =>
        event.preventDefault()
      )
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <AnimatePresence mode="wait">
      <ChakraProvider theme={theme}>
        <FavIconProvider>
          <Component {...pageProps} />
        </FavIconProvider>
      </ChakraProvider>
    </AnimatePresence>
  )
}

export default appWithTranslation(SNSite)
