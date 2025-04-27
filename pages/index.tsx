import { GetServerSideProps } from 'next'
import { NextPage } from 'next'

// Define supported locales as a constant to reuse across the application
const SUPPORTED_LOCALES = [
  'en',
  'he',
  'ar',
  'ru',
  'fr',
  'es',
  'de',
  'hi',
] as const
type SupportedLocale = (typeof SUPPORTED_LOCALES)[number]
const DEFAULT_LOCALE: SupportedLocale = 'en'

/**
 * Root page that redirects to the appropriate locale-based route
 * Uses the user's browser language preference if available and supported
 */
export const getServerSideProps: GetServerSideProps = async ({ req, resolvedUrl }) => {
  try {
    // בדוק אם ה-URL כבר מכיל locale
    const path = req.url || '';
    const pathSegments = path.split('/').filter(Boolean);
    
    // אם הנתיב כבר מכיל locale, לא נבצע הפניה
    if (pathSegments.length > 0 && SUPPORTED_LOCALES.includes(pathSegments[0] as SupportedLocale)) {
      return { props: {} };
    }
    
    // Extract accept-language header and parse preferred language
    const acceptLanguage = req.headers['accept-language'] || ''

    // Better parsing of the Accept-Language header
    const preferredLocales = acceptLanguage
      .split(',')
      .map((item) => {
        const [locale, priority] = item.trim().split(';q=')
        return {
          locale: locale.split('-')[0],
          priority: priority ? parseFloat(priority) : 1.0,
        }
      })
      .sort((a, b) => b.priority - a.priority)
      .map((item) => item.locale)

    // Find the first locale from the user's preferences that we support
    const locale =
      preferredLocales.find((loc) =>
        SUPPORTED_LOCALES.includes(loc as SupportedLocale)
      ) || DEFAULT_LOCALE

    console.log(`Redirecting to locale: ${locale} based on browser preference`)

    return {
      redirect: {
        destination: `/${locale}/`,
        permanent: false,
      },
    }
  } catch (error) {
    console.error(
      'Error determining locale:',
      error instanceof Error ? error.message : String(error)
    )
    return {
      redirect: {
        destination: `/${DEFAULT_LOCALE}/`,
        permanent: false,
      },
    }
  }
}

/**
 * Home page component - not rendered directly as we redirect in getServerSideProps
 */
const Home: NextPage = () => null

export default Home
