import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'
import { ReactNode } from 'react'

// Constants
const SUPPORTED_LOCALES = ['en', 'he', 'ar', 'ru', 'fr', 'es', 'de', 'hi'] as const
const RTL_LOCALES = ['he', 'ar'] as const
const DEFAULT_LOCALE = 'en'

type SupportedLocale = typeof SUPPORTED_LOCALES[number]

interface MyDocumentProps extends DocumentInitialProps {
  locale: SupportedLocale
}

class MyDocument extends Document<MyDocumentProps> {
  static async getInitialProps(ctx: DocumentContext): Promise<MyDocumentProps> {
    try {
      const initialProps = await Document.getInitialProps(ctx)
      
      // Extract locale from URL
      const locale = MyDocument.extractLocaleFromContext(ctx)

      return {
        ...initialProps,
        locale: MyDocument.validateLocale(locale),
      }
    } catch (error) {
      console.error('Error in document getInitialProps:', error)
      return {
        ...await Document.getInitialProps(ctx),
        locale: DEFAULT_LOCALE,
      }
    }
  }

  private static extractLocaleFromContext(ctx: DocumentContext): string {
    if (ctx.query?.asPath) {
      const path = Array.isArray(ctx.query.asPath)
        ? ctx.query.asPath[0]
        : ctx.query.asPath
      return path.split('/')[1] || DEFAULT_LOCALE
    }

    if (ctx.req?.url) {
      return ctx.req.url.split('/')[1] || DEFAULT_LOCALE
    }

    return DEFAULT_LOCALE
  }

  private static validateLocale(locale: string): SupportedLocale {
    return SUPPORTED_LOCALES.includes(locale as SupportedLocale)
      ? (locale as SupportedLocale)
      : DEFAULT_LOCALE
  }

  private static isRTL(locale: SupportedLocale): boolean {
    return RTL_LOCALES.includes(locale as typeof RTL_LOCALES[number])
  }

  render(): ReactNode {
    const { locale } = this.props
    const dir = MyDocument.isRTL(locale) ? 'rtl' : 'ltr'

    return (
      <Html lang={locale} dir={dir}>
        <Head>
          {/* Preload fonts */}
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
            crossOrigin="anonymous"
          />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600&display=swap"
            rel="stylesheet"
            crossOrigin="anonymous"
          />
          
          {/* Security headers */}
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="format-detection" content="date=no" />
          <meta name="format-detection" content="address=no" />
          <meta name="format-detection" content="email=no" />
          
          {/* PWA related tags */}
          <meta name="application-name" content="Shlomi's Portfolio" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="mobile-web-app-capable" content="yes" />
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