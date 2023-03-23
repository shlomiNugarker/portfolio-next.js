import Head from 'next/head'
import myProjects from '../data/projects.json'
import Image from 'next/image'

import { AiFillGithub } from 'react-icons/ai'
import { CgWebsite } from 'react-icons/cg'

import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { spawn } from 'child_process'

export default function Projects() {
  return (
    <section className="projects-page">
      <Head>
        <title>Shlomi Nugarker - Portfolio</title>
        <meta
          name="description"
          content="Full-Stack / Frontend Web Developer with knowledge and experience writing single-page applications
                     using the latest WEB technologies such as Node.js, Vue.js, Vuex, React.js, and  Redux."
        />
      </Head>

      <div className="list ">
        {myProjects.map((proj) => (
          <section key={proj.id} className="proj">
            <h1 className="title">{proj.title}</h1>
            <a
              href={proj.linkDemo || proj.linkGitHub}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                loader={() => proj.imgs[0]}
                src={proj.imgs[0]}
                alt={proj.title}
                width={200}
                height={200}
              />
            </a>

            <p>{proj.description}</p>

            <p className="tags">
              {proj.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </p>
            <div className="links">
              <span>
                <a href={proj.linkGitHub} target="_blank" rel="noreferrer">
                  <AiFillGithub></AiFillGithub>
                  <p>Code</p>
                </a>
              </span>

              <span>
                <a href={proj.linkDemo} target="_blank" rel="noreferrer">
                  <CgWebsite></CgWebsite>
                  <p>Demo</p>
                </a>
              </span>
            </div>
          </section>
        ))}
      </div>
    </section>
  )
}
