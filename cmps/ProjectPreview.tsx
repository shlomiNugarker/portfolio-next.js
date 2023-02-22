import Image from 'next/image'

import { GitHubLogo } from '../assets/imgs/GitHubLogo'
import { utilService } from '../services/utilService'

import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

export const ProjectPreview = ({ project }: { project: any }) => {
  return (
    <section className="project-preview" id={project.title}>
      <div className="container">
        <div className="title">
          <div className="divider"></div>
          <h4>{project.title}</h4>
          <div className="divider"></div>
        </div>

        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          onClickItem={() =>
            window.open(project.linkDemo || project.linkGitHub)
          }
          showArrows={false}
          stopOnHover={true}
          interval={4000}
          showThumbs={false}
        >
          {project.imgs.map((img: string) => (
            <div className="imgs" key={utilService.makeId()}>
              <a
                href={project.linkDemo || project.linkGitHub}
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  loader={() => img}
                  src={img}
                  alt=""
                  className="img"
                  style={{
                    width: '60%',
                    height: '100%',
                    position: 'relative',
                  }}
                  width="570"
                  height="270"
                />
              </a>
            </div>
          ))}
        </Carousel>

        <div className="tags">
          {project.tags.map((tag: string) => (
            <p key={utilService.makeId()}>{tag}</p>
          ))}
        </div>

        <div className="details">
          <div className="container-links">
            {project.linkGitHub && (
              <div className="githun-link">
                <a href={project.linkGitHub} target="_blank" rel="noreferrer">
                  {/* <GitHubLogo /> */}
                  <p>Code</p>
                </a>
              </div>
            )}

            {project.linkDemo && (
              <div className="demo-link">
                <a href={project.linkDemo} target="_blank" rel="noreferrer">
                  <p>Demo</p>
                </a>
              </div>
            )}
          </div>

          <div className="description">
            <p>{project.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
