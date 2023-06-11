import Head from 'next/head'
import myProjects from '../data/projects.json'
import Image from 'next/image'

import { AiFillGithub } from 'react-icons/ai'
import { CgWebsite } from 'react-icons/cg'
import { FaVideo } from 'react-icons/fa'
import { useState } from 'react'

import dynamic from 'next/dynamic'

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

export default function Projects() {
  const [viewImgURL, setViewImgURL] = useState('')
  const [viewVideoURL, setViewVideoURL] = useState('')
  const animationsList = [
    // 'animate__rollIn',
    'animate__jackInTheBox',
    // 'animate__zoomInDown',
    // 'animate__zoomInLeft',
    // 'animate__zoomInRight',
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
            <a>
              <Image
                loader={() => proj.imgs[0]}
                onClick={() => {
                  setViewVideoURL('')
                  setViewImgURL(proj.imgs[0])
                }}
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
              {proj.videoUrl && (
                <span>
                  <a
                    onClick={() => {
                      setViewImgURL('')
                      setViewVideoURL(proj.videoUrl)
                    }}
                    rel="noreferrer"
                  >
                    <FaVideo></FaVideo>
                    <p>Video</p>
                  </a>
                </span>
              )}
            </div>
          </section>
        ))}
      </div>
      {viewImgURL && (
        <div
          className="img-viewer-container animate__animated animate__fadeIn"
          onClick={() => setViewImgURL('')}
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
            loader={() => viewImgURL}
            src={viewImgURL}
            alt={viewImgURL}
            width={400}
            height={400}
          />
        </div>
      )}
      {viewVideoURL && (
        <div
          className="video-viewer-container animate__animated animate__fadeIn"
          onClick={() => {
            setViewImgURL('')
            setViewVideoURL('')
          }}
        >
          <ReactPlayer
            // loop={true}
            playing={true}
            muted={true}
            width="90%"
            height={'90%'}
            url={viewVideoURL}
          />
        </div>
      )}
    </section>
  )
}
