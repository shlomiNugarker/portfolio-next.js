import Document, { Html, Head, Main, NextScript } from 'next/document'
import { i18n } from 'next-i18next'

import { ReactNode } from 'react'

const HtmlWrapper = ({
  locale,
  dir,
  children,
}: {
  locale: string
  dir: string
  children: ReactNode
}) => {
  return (
    <Html lang={locale} dir={dir}>
      {children}
    </Html>
  )
}

class MyDocument extends Document {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    const locale = i18n?.language || 'en'
    const dir = i18n?.dir(locale) || 'ltr'
    return { ...initialProps, locale, dir }
  }

  render() {
    return (
      <HtmlWrapper
        locale={this.props.locale || 'en'}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        dir={(this.props as any).dir}
      >
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,500;0,600;1,100;1,300;1,400;1,500;1,600&display=swap"
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
