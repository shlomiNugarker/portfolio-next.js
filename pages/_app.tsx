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

    Hotjar.init(siteId, hotjarVersion, {
      debug: true,
    })
    //
    ;(function (
      h: any,
      o: any,
      t: any,
      j: any,
      a?: { appendChild: (v: any) => any },
      r?: { async?: number; src?: any }
    ) {
      h.hj =
        h.hj ||
        function () {
          ;(h.hj.q = h.hj.q || []).push(arguments)
        }
      h._hjSettings = { hjid: 3598136, hjsv: 6 }
      a = o.getElementsByTagName('head')[0]
      r = o.createElement('script')
      if (!!r) {
        r.async = 1
        r.src = t + siteId.toString() + j + hotjarVersion.toString()
        a?.appendChild(r)
      }
    })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=')

    const actionName = 'error'
    Hotjar.event(actionName)

    const userId = 'abc_123'
    const firstName = 'John'
    const favoriteColor = 'blue'

    Hotjar.identify(userId, {
      first_name: firstName,
      color: favoriteColor,
    })
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
