const projects = [
  {
    title: 'Travelsdin',
    tags: [
      'Javascript(ES6)',
      'MongoDB',
      'React.js',
      'Redux',
      'Rest API',
      'Node.js',
      'Live chat',
      'Socket.io',
    ],
    imgs: [
      'https://res.cloudinary.com/duajg3ah1/image/upload/v1662386727/ctivc99rxpjymdn0za1n.png',
    ],
    videoUrl: 'https://youtu.be/HUv5xN5qTS4',
    description: 'A social network project.',
    linkDemo: 'https://travelsdin-express-production.up.railway.app/',
    linkGitHub: 'https://github.com/shlomiNugarker/Social-Network-Front-',
  },
  {
    title: 'Taskday',
    tags: [
      'MongoDb',
      'Javascript(ES6)',
      'Rest API',
      'Socket.io',
      'Vue.js',
      'SCSS',
      'Vuex',
      'MVC',
      'Single-Page-Application',
      'Drag and drop',
      'Node.js',
    ],
    imgs: [
      'https://res.cloudinary.com/duajg3ah1/image/upload/v1660916126/myPortfolio/qdtzolm9ldd5qlquq2aj.png',
      'https://res.cloudinary.com/duajg3ah1/image/upload/v1661076854/myPortfolio/fzewgnsmyharf6r7la8m.png',
      'https://res.cloudinary.com/duajg3ah1/image/upload/v1660916124/myPortfolio/z1stcuqxhfmapn4igopo.png',
      'https://res.cloudinary.com/duajg3ah1/image/upload/v1660916123/myPortfolio/ni1pvrzgoxeu71fr157e.png',
    ],
    videoUrl: 'https://www.youtube.com/watch?v=49DkbR-cJis',
    description: 'Taskday is a project management system for collaboration.',
    linkDemo: 'https://taskday-monday-production.up.railway.app/',
    linkGitHub: 'https://github.com/shlomiNugarker/sprint-4',
  },

  {
    title: 'Chess',
    tags: [
      'Typescript',
      'React',
      'Redux-Toolkit',
      'Node.js',
      'Chat',
      'MongoDb',
    ],
    imgs: [
      'https://res.cloudinary.com/duajg3ah1/image/upload/v1668701783/myPortfolio/dg6pkn0oxvpgrtjn998y.png',
    ],
    videoUrl: 'https://youtu.be/I90vJUsZzFU',
    description: 'Play chess with other people.',
    linkDemo: 'https://chess-v2-backend-production.up.railway.app/',
    linkGitHub: 'https://github.com/shlomiNugarker/Chess-V2-React',
  },

  {
    title: 'AstroMind-AI',
    tags: [
      'AI',
      'Machine Learning',
      'React',
      'Vite',
      'TypeScript',
      'Node.js',
      'Express',
      'MongoDB',
    ],
    imgs: [
      'https://res.cloudinary.com/duajg3ah1/image/upload/v1740161650/dkkezgesahgihwmgzmcp.png',
    ],
    videoUrl: '',
    description:
      'AstroMind-AI is an AI-powered web application designed for seamless integration with modern ML models. Built with Next.js, React, and Vite, the platform provides an interactive AI assistant with real-time capabilities.',
    linkDemo: 'https://astromind-ai-production.up.railway.app/#/',
    linkGitHub: 'https://github.com/shlomiNugarker/AstroMind-AI',
  },

  {
    title: 'Monopoly',
    tags: ['Javascript(ES6)', 'Vue.js', 'SCSS', 'Vuex', 'MVC'],
    imgs: [
      'https://res.cloudinary.com/duajg3ah1/image/upload/v1660923765/myPortfolio/oxf2ncafrtmiwushbjg2.png',
      'https://res.cloudinary.com/duajg3ah1/image/upload/v1661077030/myPortfolio/ypvbcwolwot13zpj83m1.png',
      'https://res.cloudinary.com/duajg3ah1/image/upload/v1661077094/myPortfolio/lxbklxfub6ar4b1gpuin.png',
    ],
    videoUrl: '',
    description: 'The most favorite game.',
    linkDemo: 'https://shlominugarker.github.io/monopoly-demo/#/',
    linkGitHub: 'https://github.com/shlomiNugarker/Monoploly-Vue.js',
  },
  {
    title: 'AchcchApp',
    tags: [
      'Angular',
      'Typescript',
      'SCSS',
      'Node.js',
      'SQL',
      'Rxjs',
      'Express',
    ],
    imgs: [
      'https://res.cloudinary.com/duajg3ah1/image/upload/v1676543241/ozyskbfzcp6djkoukdot.png',
    ],
    videoUrl: 'https://youtu.be/qPtmhtzC4iE',
    description: '',
    linkDemo: 'https://achchhapp.onrender.com/main-page',
    linkGitHub: 'https://github.com/shlomiNugarker/Whatsapp-clone-Angular',
  },
  {
    title: 'Video+',
    tags: [
      'Next.js',
      'TypeScript',
      'Server side rendering',
      'SASS',
      'TMDB api',
      'Youtube api',
    ],
    imgs: [
      'https://res.cloudinary.com/duajg3ah1/image/upload/v1677753084/v9zqwmvbztuh7mahocml.png',
    ],
    videoUrl: 'https://youtu.be/Z0BX4PcLgO4',
    description: '',
    linkDemo: 'https://videoplus.vercel.app/',
    linkGitHub: 'https://github.com/shlomiNugarker/video-plus',
  },
  {
    title: 'Sudoku',
    tags: [
      '2d-game',
      'Vanilla-ts',
      'Backtracking algorithm',
      'Sudoku-solver',
      'Vite',
    ],
    imgs: [
      'https://res.cloudinary.com/duajg3ah1/image/upload/v1680208679/myPortfolio/ee0lwcsjknfrlqcgrhwc.png',
    ],
    videoUrl: 'https://youtu.be/4FOKfBzdb-8',
    description: 'Sudoku is one of the most popular puzzle games of all time.',
    linkDemo: 'https://shlominugarker.github.io/sudoku-vannila-ts/',
    linkGitHub: 'https://github.com/shlomiNugarker/Sudoku',
  },
  {
    title: 'Checkers',
    tags: ['2d-game', 'Vue', 'Vite', 'Typescript', 'Canvas'],
    imgs: [
      'https://res.cloudinary.com/duajg3ah1/image/upload/v1706823249/myPortfolio/pi9zxju7u2qkc1gl0clr.png',
    ],
    videoUrl: '',
    description: 'Checkers game',
    linkDemo: 'https://shlominugarker.github.io/checkers-vue-js/',
    linkGitHub: 'https://github.com/shlomiNugarker/checkers-vue-js',
  },
  {
    title: 'Tetris',
    tags: ['2d-game', 'Vite', 'Typescript', 'Canvas'],
    imgs: [
      'https://res.cloudinary.com/duajg3ah1/image/upload/v1707876390/myPortfolio/iyhj3ijbrdrsivwat39b.png',
    ],
    videoUrl: '',
    description: 'Tetris game',
    linkDemo: 'https://shlominugarker.github.io/tetris-vannila-ts/',
    linkGitHub: 'https://github.com/shlomiNugarker/tetris',
  },
]

const projectsWithDynamicIds = projects.map((project, index) => ({
  id: index + 1,
  ...project,
}))

export default projectsWithDynamicIds
