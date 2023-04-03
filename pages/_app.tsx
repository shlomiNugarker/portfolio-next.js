import '../assets/scss/global.scss'
import 'animate.css'
import type { AppProps } from 'next/app'
import Header from '../cmps/Header'
import Footer from '../cmps/Footer'
import { Analytics } from '@vercel/analytics/react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <Analytics />
    </>
  )
}
