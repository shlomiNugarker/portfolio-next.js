import Head from 'next/head'
import { useTranslation } from 'next-i18next'

const OpenGraphHead = () => {
  const { t } = useTranslation('common')

  const ogTitle = t('opengraph.title')
  const ogDescription = t('opengraph.description')

  return (
    <Head>
      {/* General Metadata */}
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <title>{ogTitle}</title>
      <meta name="description" content={ogDescription} />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={ogTitle} />
      <meta property="og:site_name" content={ogTitle} />
      <meta property="og:url" content="https://www.shlomi.dev/" />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/duajg3ah1/image/upload/v1741603146/myPortfolio/iutzwm6lw1acexexy0gs.png"
      />
      <meta property="og:image:alt" content={ogTitle} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <meta
        name="twitter:image"
        content="https://res.cloudinary.com/duajg3ah1/image/upload/v1741603146/myPortfolio/iutzwm6lw1acexexy0gs.png"
      />
      <meta name="twitter:creator" content="@shlomi_nugarker" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default OpenGraphHead
