import '../assets/scss/global.scss'
import 'animate.css'
import type { AppProps } from 'next/app'
import Header from '../cmps/Header'
import Footer from '../cmps/Footer'
import { Analytics } from '@vercel/analytics/react'

import Hotjar from '@hotjar/browser'
import { useEffect } from 'react'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  const siteId = Number(process.env.NEXT_PUBLIC_HOTJAR_ID)
  const hotjarVersion = Number(process.env.NEXT_PUBLIC_HOTJAR_SNIPPET_VERSION)

  useEffect(() => {
    Hotjar.init(siteId, hotjarVersion, {
      debug: true,
    })

    const actionName = 'error'
    Hotjar.event(actionName)

    const userId = 'abc_123'
    const firstName = 'John'
    const favoriteColor = 'blue'

    Hotjar.identify(userId, {
      first_name: firstName,
      color: favoriteColor,
    })
  }, [hotjarVersion, siteId])

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />

      <Analytics />
    </>
  )
}
