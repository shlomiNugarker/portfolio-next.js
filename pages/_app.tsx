import '../assets/scss/global.scss'
import 'animate.css'
import type { AppProps } from 'next/app'
import Header from '../cmps/Header'
import Footer from '../cmps/Footer'
import { Analytics } from '@vercel/analytics/react'

import Hotjar from '@hotjar/browser'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const siteId = Number(process.env.NEXT_PUBLIC_HOTJAR_ID)
    const hotjarVersion = Number(process.env.NEXT_PUBLIC_HOTJAR_SNIPPET_VERSION)

    Hotjar.init(siteId, hotjarVersion)
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
