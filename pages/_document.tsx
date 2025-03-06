import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document'
import { i18n } from 'next-i18next'
import { ReactNode } from 'react'

interface MyDocumentProps extends DocumentInitialProps {
  locale: string
  dir: 'ltr' | 'rtl'
}

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

class MyDocument extends Document<MyDocumentProps> {
  static async getInitialProps(ctx: DocumentContext): Promise<MyDocumentProps> {
    const initialProps = await Document.getInitialProps(ctx)

    const locale = ctx.locale || i18n?.language || 'en'
    const dir: 'ltr' | 'rtl' =
      locale === 'he' || locale === 'ar' ? 'rtl' : 'ltr'

    return { ...initialProps, locale, dir }
  }

  render() {
    return (
      <HtmlWrapper locale={this.props.locale} dir={this.props.dir}>
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
