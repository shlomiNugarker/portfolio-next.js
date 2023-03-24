import { AiFillLinkedin } from 'react-icons/ai'
import { SiGmail } from 'react-icons/si'
import { AiFillGithub } from 'react-icons/ai'

export default function Footer() {
  return (
    <section className="footer">
      <div className="squere"></div>
      <h4>
        {'©2023'} <br />
        {'Built with '}
        <span>Next.js/TypeSript</span>
      </h4>
      <div className="icons">
        <a
          href="https://www.linkedin.com/in/shlomi-nugarker-b89777155/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="mailto: shlomin1231@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <SiGmail />
        </a>
        <a
          href="https://github.com/shlomiNugarker"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>
      </div>
    </section>
  )
}
