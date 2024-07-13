import Head from 'next/head'
const OpenGraphHead = () => (
  <Head>
    <title>Shlomi Nugarker | Fullstack Developer</title>
    <meta name="description" content="My personal solace place on web-earth." />
    <meta property="og:title" content="Shlomi Nugarker | Fullstack developer" />
    <meta property="og:site_name" content="Shlomi Nugarker | Portfolio" />
    <meta
      property="og:url"
      content="https://shlomi-nugarker-portfolio.vercel.app/"
    />
    <meta
      property="og:description"
      content="Ohh you found me?. Howdy! I am Shlomi Nugarker.  I am a Fullstack developer"
    />
    <meta property="og:type" content="profile" />
    <meta
      property="og:image"
      content="https://res.cloudinary.com/duajg3ah1/image/upload/v1660763357/shlomiN_mewit4.jpg"
    ></meta>
  </Head>
)
export default OpenGraphHead
