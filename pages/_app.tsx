import { appWithTranslation } from 'next-i18next'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import theme from 'config/theme'
import FavIconProvider from 'components/Misc/FavIconProvider'

function SNSite({ Component, pageProps }: AppProps): JSX.Element {
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
