import Head from 'next/head'
import { MouseEvent, useState } from 'react'

//cmps
import { LandingPage } from '../cmps/LandingPage'
import { About } from '../cmps/About'
import { Skills } from '../cmps/Skills'
import { MyProjects } from '../cmps/MyProjects'
import { Footer } from '../cmps/Footer'

export default function Home() {
  const [pageIds, setPageIds] = useState([
    '#land-page',
    '#about-page',
    '#skills-page',
    '#projects-page',
    '#Taskday',
    '#Monopoly',
    '#Mine-Sweeper',
    '#Meme-Generator',
    '#Social-Netwotk',
    '#footer-page',
  ])

  let [pageIdx, setPageIdx] = useState(0)

  const onClickNav = (
    _ev: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
    idx: number
  ) => {
    setPageIdx(idx)
  }
  return (
    <section className="home-page">
      <Head>
        <title>Shlomi Mugarker - Portfolio</title>
        <meta
          name="description"
          content="Full-Stack / Frontend Web Developer with knowledge and experience writing single-page applications
 using the latest WEB technologies such as Node.js, Vue.js, Vuex, React.js, and  Redux."
        />
      </Head>

      <LandingPage />
      <About />
      <Skills />
      <MyProjects />
      <Footer />

      <div className="nav">
        <div className={'btn '} onClick={(ev) => onClickNav(ev, 0)}>
          <a href={pageIds[pageIdx]}>Home</a>
        </div>
        <div className={'btn '} onClick={(ev) => onClickNav(ev, 1)}>
          <a href={pageIds[pageIdx]}>About</a>
        </div>
        <div className={'btn '} onClick={(ev) => onClickNav(ev, 2)}>
          <a href={pageIds[pageIdx]}>Skills</a>
        </div>
        <div className={'btn '} onClick={(ev) => onClickNav(ev, 3)}>
          <a href={pageIds[pageIdx]}>Projects</a>
        </div>
      </div>
    </section>
  )
}
