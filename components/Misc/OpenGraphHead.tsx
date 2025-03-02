import Head from 'next/head'

const OpenGraphHead = () => (
  <Head>
    {/* General Metadata */}
    <meta charSet="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <title>Shlomi Nugarker | Fullstack Developer</title>
    <meta
      name="description"
      content="My personal solace place on web-earth. Explore my work and projects."
    />
    <meta name="author" content="Shlomi Nugarker" />

    {/* Open Graph / Facebook */}
    <meta property="og:title" content="Shlomi Nugarker | Fullstack Developer" />
    <meta property="og:site_name" content="Shlomi Nugarker | Portfolio" />
    <meta property="og:url" content="https://shlomi-nugarker.vercel.app/" />
    <meta
      property="og:description"
      content="Howdy! I am Shlomi Nugarker, a passionate Fullstack Developer. Explore my work here!"
    />
    <meta property="og:type" content="profile" />
    <meta
      property="og:image"
      content="https://res.cloudinary.com/duajg3ah1/image/upload/v1660763357/shlomiN_mewit4.jpg"
    />
    <meta
      property="og:image:alt"
      content="Shlomi Nugarker - Fullstack Developer"
    />

    {/* Twitter Card */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="Shlomi Nugarker | Fullstack Developer"
    />
    <meta
      name="twitter:description"
      content="Discover my projects, blog, and skills in Fullstack Development."
    />
    <meta
      name="twitter:image"
      content="https://res.cloudinary.com/duajg3ah1/image/upload/v1660763357/shlomiN_mewit4.jpg"
    />
    <meta name="twitter:creator" content="@YourTwitterHandle" />

    {/* Favicon */}
    <link rel="icon" href="/favicon.ico" />
  </Head>
)

export default OpenGraphHead
