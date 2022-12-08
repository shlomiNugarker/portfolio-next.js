import { SaasLogo } from '../assets/imgs/SaasLogo'
import { HtmlLogo } from '../assets/imgs/HtmlLogo'
import { MongoLogo } from '../assets/imgs/MongoLogo'
import { NodeJsLogo } from '../assets/imgs/NodeJsLogo'
import { ReactLogo } from '../assets/imgs/ReactLogo'
import { ReduxLogo } from '../assets/imgs/ReduxLogo'
import { VueLogo } from '../assets/imgs/VueLogo'
import { Typescript } from '../assets/imgs/Typescript'
import vuex from '../assets/imgs/vuex.png'
import sass from '../assets/imgs/sass.png'
import css from '../assets/imgs/CSS3.svg.png'

import Image from 'next/image'

export const Skills = () => {
  return (
    <section className="skills" id="skills-page">
      <div className="title">
        <h1>SKILLS</h1>
        <p>HERE IS MY ARMAMENT</p>
      </div>

      <div className="divider"></div>

      <div className="container">
        <span>
          <NodeJsLogo />
          <p>Node.js</p>
        </span>

        <span>
          <VueLogo />
          <p>Vue.js</p>
        </span>

        <span>
          <ReactLogo />
          <p>React.js</p>
        </span>

        <span>
          <ReduxLogo />
          <p>Redux</p>
        </span>

        <span>
          <MongoLogo />
          <p>MongoDB</p>
        </span>

        <span>
          <HtmlLogo />
          <p>Html</p>
        </span>

        <span>
          <Typescript />
          <p>Typescript</p>
        </span>

        <span>
          <Image src={sass} alt="" width={'150'} height={'150'} />
          <p>Sass</p>
        </span>

        <span>
          <Image src={css} alt="" width={'150'} height={'150'} />

          <p>Css</p>
        </span>
        <span>
          <Image src={vuex} alt="" width={'150'} height={'150'} />

          <p>Vuex</p>
        </span>
      </div>
    </section>
  )
}
