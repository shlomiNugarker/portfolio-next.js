import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const acceptLanguage = req.headers['accept-language']
  const preferredLocale = acceptLanguage?.split(',')[0].split('-')[0] || 'en'

  const supportedLocales = ['en', 'he', 'ar', 'ru', 'fr', 'es', 'de', 'hi']
  const locale = supportedLocales.includes(preferredLocale)
    ? preferredLocale
    : 'en'

  return {
    redirect: {
      destination: `/${locale}`,
      permanent: false,
    },
  }
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function Home() {
  return null
}
