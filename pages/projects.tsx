import Head from 'next/head'
import myProjects from '../data/projects.json'
import Image from 'next/image'

import { AiFillGithub } from 'react-icons/ai'
import { CgWebsite } from 'react-icons/cg'
import { useState } from 'react'

export default function Projects() {
  const [viewImg, setViewImg] = useState('')
  const animationsList = [
    'animate__rollIn',
    'animate__jackInTheBox',
    'animate__zoomInDown',
    'animate__zoomInLeft',
    'animate__zoomInRight',
  ]
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
          <section
            key={proj.id}
            className="proj animate__animated animate__zoomIn"
          >
            <h1 className="title">{proj.title}</h1>
            <a onClick={() => setViewImg(proj.imgs[0])}>
              <Image
                loader={() => proj.imgs[0]}
                src={proj.imgs[0]}
                alt={proj.title}
                width={200}
                height={400}
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
      {viewImg && (
        <div
          className="img-viewer-container animate__animated animate__fadeIn"
          onClick={() => setViewImg('')}
        >
          <Image
            className={
              'img-viewer animate__animated ' +
              ` ${
                animationsList[
                  Math.floor(Math.random() * animationsList.length)
                ]
              }`
            }
            loader={() => viewImg}
            src={viewImg}
            alt={viewImg}
            width={400}
            height={400}
          />
        </div>
      )}
    </section>
  )
}
