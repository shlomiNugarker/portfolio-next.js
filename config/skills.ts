import { IconType } from 'react-icons'
import {
  SiJavascript,
  SiTypescript,
  SiNodeDotJs,
  SiReact,
  SiNextDotJs,
  SiRedux,
  SiVueDotJs,
  SiDocker,
  SiMongodb,
  SiSocketDotIo,
  SiGit,
  SiVisualstudiocode,
} from 'react-icons/si'

export type SkillCategory =
  | 'backend'
  | 'frontend'
  | 'cicd'
  | 'database'
  | 'ui frameworks'
  | 'productivity boost'
  | 'mobile'
  | 'games'
  | 'desktop'

export type Skill = {
  name: string
  icon: IconType
}

export const Skills: {
  [key in SkillCategory]: Skill[]
} = {
  backend: [
    {
      name: 'Node.js',
      icon: SiNodeDotJs,
    },
    {
      name: 'Javascript (ES6+)',
      icon: SiJavascript,
    },
    {
      name: 'Typescript',
      icon: SiTypescript,
    }, 
    {
      name: 'SocketIO',
      icon: SiSocketDotIo,
    },
  ],
  frontend: [
    {
      name: 'React',
      icon: SiReact,
    },
    {
      name: 'NextJS',
      icon: SiNextDotJs,
    },

    {
      name: 'Redux',
      icon: SiRedux,
    },
    {
      name: 'VueJS',
      icon: SiVueDotJs,
    },
  ],
  database: [
    {
      name: 'MongoDb',
      icon: SiMongodb,
    },
  
  ],
  cicd: [
    {
      name: 'Docker',
      icon: SiDocker,
    },
  ],
  'ui frameworks': [],
  'productivity boost': [
    {
      name: 'VSCode',
      icon: SiVisualstudiocode,
    },
    {
      name: 'Git',
      icon: SiGit,
    },
  ],
  mobile: [],
  games: [],
  desktop: [],
}

export const splitSkills = (srcArray: Skill[]) => {
  const arrLength = srcArray.length
  const isEvenChunk = arrLength % 2 === 0

  let chunk = 4
  if (isEvenChunk) {
    chunk = arrLength / 2
  } else if (arrLength <= 5 && arrLength > 2) {
    chunk = 3
  }

  let i = 0
  let j = 0
  const temporary = []
  for (i = 0, j = srcArray.length; i < j; i += chunk) {
    temporary.push(srcArray.slice(i, i + chunk))
  }
  return temporary
}
