import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentInitialProps,
} from 'next/document'
import { ReactNode } from 'react'

const HtmlWrapper = ({
  locale,
  dir,
  children,
}: {
  locale: string
  dir: 'ltr' | 'rtl'
  children: ReactNode
}) => {
  return (
    <Html lang={locale} dir={dir}>
      {children}
    </Html>
  )
}

class MyDocument extends Document<DocumentInitialProps> {
  render() {
    return (
      <HtmlWrapper locale={'en'} dir={'ltr'}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </HtmlWrapper>
    )
  }
}

export default MyDocument
