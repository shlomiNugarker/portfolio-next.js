import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'
import { ReactNode } from 'react'

// Constants - moved to their own file for reusability across the app
export const SUPPORTED_LOCALES = ['en', 'he', 'ar', 'ru', 'fr', 'es', 'de', 'hi'] as const
export const RTL_LOCALES = ['he', 'ar'] as const
export const DEFAULT_LOCALE = 'en'

export type SupportedLocale = typeof SUPPORTED_LOCALES[number]
export type RTLLocale = typeof RTL_LOCALES[number]

interface MyDocumentProps extends DocumentInitialProps {
  locale: SupportedLocale
}

class MyDocument extends Document<MyDocumentProps> {
  /**
   * Gets initial props with locale information
   * @param ctx - Document context
   * @returns Document props with locale
   */
  static async getInitialProps(ctx: DocumentContext): Promise<MyDocumentProps> {
    try {
      const initialProps = await Document.getInitialProps(ctx)
      
      // Extract locale from URL
      const locale = this.extractLocaleFromContext(ctx)

      return {
        ...initialProps,
        locale: this.validateLocale(locale),
      }
    } catch (error) {
      console.error('Error in document getInitialProps:', 
        error instanceof Error ? error.message : String(error))
      
      // Fallback gracefully with default locale
      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        locale: DEFAULT_LOCALE,
      }
    }
  }

  /**
   * Extracts locale from request context
   * @param ctx - Document context
   * @returns Extracted locale string
   */
  private static extractLocaleFromContext(ctx: DocumentContext): string {
    // First try the asPath from query (most reliable for client navigation)
    if (ctx.query?.asPath) {
      const path = Array.isArray(ctx.query.asPath)
        ? ctx.query.asPath[0]
        : ctx.query.asPath
      const locale = path.split('/')[1]
      if (locale) return locale
    }

    // Then try the direct URL from request (for initial server-side load)
    if (ctx.req?.url) {
      const locale = ctx.req.url.split('/')[1]
      if (locale) return locale
    }

    // Default fallback
    return DEFAULT_LOCALE
  }

  /**
   * Validates that the locale is supported
   * @param locale - Locale to validate
   * @returns Valid supported locale
   */
  private static validateLocale(locale: string): SupportedLocale {
    return SUPPORTED_LOCALES.includes(locale as SupportedLocale)
      ? (locale as SupportedLocale)
      : DEFAULT_LOCALE
  }

  /**
   * Determines if a locale is RTL
   * @param locale - Locale to check
   * @returns True if RTL layout should be used
   */
  private static isRTL(locale: SupportedLocale): boolean {
    return RTL_LOCALES.includes(locale as RTLLocale)
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
          <meta name="format-detection" content="telephone=no, date=no, address=no, email=no" />
          
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