import Head from 'next/head'
import { MouseEvent, useState } from 'react'
import Image from 'next/image'

// React icons:
import { TbBrandNextjs } from 'react-icons/tb'
import { DiReact } from 'react-icons/di'
import { DiNodejsSmall } from 'react-icons/di'
import { FaVuejs } from 'react-icons/fa'
import { DiMongodb } from 'react-icons/di'
import { DiSass } from 'react-icons/di'
import { DiVisualstudio } from 'react-icons/di'
import { DiAngularSimple } from 'react-icons/di'
import { DiNpm } from 'react-icons/di'
import { SiRedux } from 'react-icons/si'
import { SiTypescript } from 'react-icons/si'
import { SiCss3 } from 'react-icons/si'
import { AiFillHtml5 } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { BsGit } from 'react-icons/bs'
import { IoLogoJavascript } from 'react-icons/io'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiOutlineWhatsApp } from 'react-icons/ai'

import { HiDocumentDownload } from 'react-icons/hi'

export default function Home() {
  return (
    <section className="home-page">
      <Head>
        <title>Shlomi Nugarker - Portfolio</title>
        <meta
          name="description"
          content="Full-Stack / Frontend Web Developer with knowledge and experience writing single-page applications
                   using the latest WEB technologies such as Node.js, Vue.js, Vuex, React.js, and  Redux."
        />
      </Head>

      {/* About: */}
      <div className="about" id="about">
        <div className="about-container">
          <h1>Hello! , I&apos;m Shlomi </h1>
          <h2>
            I&apos;m a junior Full-Stack / Frontend Web Developer with knowledge
            and experience in writing single-page applications using the latest
            WEB technologies such as Node.js, Vue.js, Vuex, React.js, Redux, and
            more. <br />
            <br /> A graduate of the Coding Academy - An intensive coding
            Bootcamp (640 hours) that qualifies Full Stack developers. <br />
            <br /> I am highly motivated, and currently seeking a Frontend/
            Backend Developer position. <br />
            <br /> Feel free to review my CV and contact me if you think
            I&apos;d be a good fit for your team.
          </h2>
          <span>
            <HiDocumentDownload />
            <a
              className="cv"
              href={'Shlomi_Nugarker_CV.pdf'}
              download
              rel="noreferrer"
            >
              My CV
            </a>
          </span>
        </div>
        <div className="container">
          <Image
            loader={() =>
              'https://res.cloudinary.com/duajg3ah1/image/upload/v1660763357/shlomiN_mewit4.jpg'
            }
            src="https://res.cloudinary.com/duajg3ah1/image/upload/v1660763357/shlomiN_mewit4.jpg"
            alt="Picture of the author"
            width={200}
            height={200}
          />
          <div className="details">
            <p>
              <a
                href="mailto: shlomin1231@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                E-mail: shlomin1231@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:052-952-6762">Phone: 0529526762</a>
            </p>
          </div>

          <div className="social-links">
            <span className="linkedin">
              <a
                href="https://www.linkedin.com/in/shlomi-nugarker-b89777155/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin />
              </a>
            </span>
            <span className="whatsapp">
              <a
                href="https://wa.me/972529526762?text=Hey Shlomi, "
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineWhatsApp />
              </a>
            </span>
            <span className="github">
              <a
                href="https://github.com/shlomiNugarker"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub />
              </a>
            </span>
          </div>
        </div>
        {/* <span className="arrow-down">
          <a href="#technologies">
            <AiOutlineArrowDown />
          </a>
        </span> */}
      </div>

      {/* Technologies: */}
      <div className="technologies" id="technologies">
        <h1>Technologies & Tools I work with</h1>
        <ul>
          <li title="Next.js">
            <TbBrandNextjs />
            <p>Next.js</p>
          </li>
          <li title="React.js">
            <DiReact />
            <p>React.js</p>
          </li>
          <li title="Angular">
            <DiAngularSimple />
            <p>Angular</p>
          </li>
          <li title="Node.js">
            <DiNodejsSmall />
            <p>Node.js</p>
          </li>
          <li title="Vue.js">
            <FaVuejs />
            <p>Vue.js</p>
          </li>
          <li title="Mongodb">
            <DiMongodb />
            <p>Mongodb</p>
          </li>
          <li title="Redux">
            <SiRedux />
            <p>Redux</p>
          </li>
          <li title="Html">
            <AiFillHtml5 />
            <p>Html</p>
          </li>
          <li title="typescript">
            <SiTypescript />
            <p>typescript</p>
          </li>
          <li title="Javascript">
            <IoLogoJavascript />
            <p>Javascript</p>
          </li>
          <li title="Scss">
            <DiSass />
            <p>Scss</p>
          </li>
          <li title="Css">
            <SiCss3 />
            <p>Css</p>
          </li>
          <li title="Visual Studio Code">
            <DiVisualstudio />
            <p>Visual Studio Code</p>
          </li>
          <li title="Node Package Manager">
            <DiNpm />
            <p>Node Package Manager</p>
          </li>
          <li title="Github">
            <AiFillGithub />
            <p>Github</p>
          </li>
          <li title="Git">
            <BsGit />
            <p>Git</p>
          </li>
        </ul>
      </div>
      <span>
        <a href="#about" className="arrow-up">
          <AiOutlineArrowUp />
        </a>
      </span>
    </section>
  )
}
