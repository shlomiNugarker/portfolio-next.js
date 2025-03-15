import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { memo } from 'react'

interface OpenGraphHeadProps {
  title?: string
  description?: string
  url?: string
  image?: string
}

const DEFAULT_OG_IMAGE =
  'https://res.cloudinary.com/duajg3ah1/image/upload/v1741872339/myPortfolio/hwj1rvjunnmiszropyjb.png'
const DEFAULT_URL = 'https://www.shlomi.dev/'

/**
 * OpenGraphHead component sets up meta tags for Open Graph, Twitter Cards, and general SEO.
 * You can override the default title, description, url, and image.
 */
const OpenGraphHead = ({
  title,
  description,
  url,
  image,
}: OpenGraphHeadProps) => {
  const { t } = useTranslation('common')

  const ogTitle = title || t('opengraph.title')
  const ogDescription = description || t('opengraph.description')
  const ogUrl = url || DEFAULT_URL
  const ogImage = image || DEFAULT_OG_IMAGE

  return (
    <Head>
      {/* General Metadata */}
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <title>{ogTitle}</title>
      <meta name="description" content={ogDescription || ''} />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={ogTitle || ''} />
      <meta property="og:site_name" content={ogTitle || ''} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:description" content={ogDescription || ''} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={ogTitle || ''} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || ''} />
      <meta name="twitter:description" content={ogDescription || ''} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@shlomi_nugarker" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default memo(OpenGraphHead)
