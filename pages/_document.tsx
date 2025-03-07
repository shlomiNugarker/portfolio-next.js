import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'
import { ReactNode } from 'react'

type MyDocumentProps = DocumentInitialProps & {
  locale: string
}

class MyDocument extends Document<MyDocumentProps> {
  static async getInitialProps(ctx: DocumentContext): Promise<MyDocumentProps> {
    const initialProps = await Document.getInitialProps(ctx)
    let locale = 'en'

    if (ctx.query && ctx.query.asPath) {
      locale = Array.isArray(ctx.query.asPath)
        ? ctx.query.asPath[0].split('/')[1]
        : ctx.query.asPath.split('/')[1]
    } else if (ctx.req && ctx.req.url) {
      const segments = ctx.req.url.split('/')
      if (segments[1]) {
        locale = segments[1]
      }
    }

    return { ...initialProps, locale }
  }

  render(): ReactNode {
    const { locale } = this.props
    const dir = ['he', 'ar'].includes(locale) ? 'rtl' : 'ltr'

    return (
      <Html lang={locale} dir={dir}>
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
      </Html>
    )
  }
}

export default MyDocument
