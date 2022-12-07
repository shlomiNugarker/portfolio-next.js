import { GitHubLogo } from '../assets/imgs/GitHubLogo'
import { LinkedinLogo } from '../assets/imgs/LinkedinLogo'
import { WhatsAppLogo } from '../assets/imgs/WhatsAppLogo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

export const Footer = () => {
  return (
    <section className="footer" id="footer-page">
      <div className="container">
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
          <span className="phone logo">
            <a href="tel:052-952-6762" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={'fa-solid fa-phone' as IconProp} />
            </a>
          </span>
        </div>
      </div>
    </section>
  )
}
