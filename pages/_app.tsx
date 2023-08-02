import '../assets/scss/global.scss'
import 'animate.css'
import type { AppProps } from 'next/app'
import Header from '../cmps/Header'
import Footer from '../cmps/Footer'
import { Analytics } from '@vercel/analytics/react'

import { hotjar } from 'react-hotjar'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (hotjar.initialized()) {
      hotjar.identify(process.env.HOTJAR_ID as string, {
        userProperty: process.env.HOTJAR_SNIPPET_VERSION as string,
      })
    }
  }, [])

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <Analytics />
    </>
  )
}
