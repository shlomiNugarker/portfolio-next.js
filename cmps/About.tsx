import Image from 'next/image'

import { GitHubLogo } from '../assets/imgs/GitHubLogo'
import { LinkedinLogo } from '../assets/imgs/LinkedinLogo'
import { WhatsAppLogo } from '../assets/imgs/WhatsAppLogo'

export const About = () => {
  return (
    <section className="about" id="about-page">
      <div className="container">
        <div className="title">
          <h2>ABOUT ME</h2>
          <p>HOPE TO KNOW YOU AFTER</p>
        </div>

        <div className="divider"></div>

        <div className="img-container">
          <Image
            loader={() =>
              'https://res.cloudinary.com/duajg3ah1/image/upload/v1660763357/shlomiN_mewit4.jpg'
            }
            src={
              'https://res.cloudinary.com/duajg3ah1/image/upload/v1660763357/shlomiN_mewit4.jpg'
            }
            alt=""
            className="img"
            width={'200'}
            height={'200'}
          />
        </div>

        <div className="details-container">
          <div className="description">
            <div className="subtitle">
              <h3>WHO AM I ?</h3>
            </div>

            <p>
              I&apos;m a junior Full-Stack / Frontend Web Developer with
              knowledge and experience in writing single-page applications using
              the latest WEB technologies such as Node.js, Vue.js, Vuex,
              React.js, Redux, and more.
            </p>
            <br />

            <p>
              A graduate of the Coding Academy - An intensive coding Bootcamp
              (640 hours) that qualifies Full Stack developers. <br /> I am
              highly motivated, and currently seeking a Frontend/ Backend
              Developer position.
              <br /> <br />
              Feel free to review my CV and contact me if you think I&apos;d be
              a good fit for your team.
            </p>

            <div className="cv-container">
              <a className="cv" href={'Shlomi_Nugarker_CV.pdf'} download>
                My CV
              </a>
            </div>
          </div>

          <div className="my-details">
            <div className="fullname">
              <h2>Shlomi Nugarker</h2>
            </div>

            <div className="email">
              <span></span>
              <a
                href="mailto: shlomin1231@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <p>E-mail: shlomin1231@gmail.com</p>
              </a>
            </div>

            <div className="phone">
              <span></span>
              <a href="tel:052-952-6762">
                <p>Phone: 0529526762</p>
              </a>
            </div>

            <div className="social-bar">
              <span className="linkedin logo">
                <a
                  href="https://www.linkedin.com/in/shlomi-nugarker-b89777155/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedinLogo />
                </a>
              </span>

              <span className="github logo">
                <a
                  href="https://github.com/shlomiNugarker"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubLogo />
                </a>
              </span>
              <span className="whatsapp logo">
                <a
                  href="https://wa.me/972529526762?text=Hey Shlomi, "
                  target="_blank"
                  rel="noreferrer"
                >
                  <WhatsAppLogo />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
