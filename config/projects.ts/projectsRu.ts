const projects = [
  {
    title: 'Travelsdin - идеальная социальная сеть для путешественников',
    tags: [
      'JavaScript (ES6)',
      'MongoDB',
      'React.js',
      'Redux',
      'Rest API',
      'Node.js',
      'Live Chat',
      'Socket.io',
    ],
    imgs: [
      'https://res.cloudinary.com/duajg3ah1/image/upload/v1662386727/ctivc99rxpjymdn0za1n.png',
    ],
    videoUrl: 'https://youtu.be/HUv5xN5qTS4',
    description:
      'Travelsdin — современная социальная платформа, созданная для путешественников, чтобы общаться, делиться впечатлениями и планировать приключения вместе. Благодаря сообщениям в реальном времени и интуитивному интерфейсу, она меняет способ взаимодействия путешественников в сети.',
    linkDemo: 'https://travelsdin-express-production.up.railway.app/',
    linkGitHub: 'https://github.com/shlomiNugarker/Social-Network-Front-',
  },
  {
    title: 'Taskday — умное управление проектами и совместная работа',
    tags: [
      'MongoDB',
      'JavaScript (ES6)',
      'Rest API',
      'Socket.io',
      'Vue.js',
      'SCSS',
      'Vuex',
      'MVC',
      'Single Page Application',
      'Drag and Drop',
      'Node.js',
    ],
    imgs: [
      'https://res.cloudinary.com/duajg3ah1/image/upload/v1660916126/myPortfolio/qdtzolm9ldd5qlquq2aj.png',
    ],
    videoUrl: 'https://www.youtube.com/watch?v=49DkbR-cJis',
    description:
      'Taskday — интеллектуальная система управления проектами, упрощающая командное взаимодействие благодаря обновлениям в реальном времени, трекингу задач и удобному интерфейсу перетаскивания (drag-and-drop). Создана для высокой эффективности и продуктивности.',
    linkDemo: 'https://taskday-monday-production.up.railway.app/',
    linkGitHub: 'https://github.com/shlomiNugarker/sprint-4',
  },
  {
    title: 'Chess Masters — многопользовательские шахматы с живым чатом',
    tags: [
      'TypeScript',
      'React',
      'Redux Toolkit',
      'Node.js',
      'Live Chat',
      'MongoDB',
    ],
    imgs: [
      'https://res.cloudinary.com/duajg3ah1/image/upload/v1668701783/myPortfolio/dg6pkn0oxvpgrtjn998y.png',
    ],
    videoUrl: 'https://youtu.be/I90vJUsZzFU',
    description:
      'Интерактивная многопользовательская шахматная игра с чатом в реальном времени и плавным геймплеем. Создана для любителей шахмат, она предлагает увлекательную соревновательную среду с элегантным и отзывчивым интерфейсом.',
    linkDemo: 'https://chess-v2-backend-production.up.railway.app/',
    linkGitHub: 'https://github.com/shlomiNugarker/Chess-V2-React',
  },
  {
    title: 'AstroMind-AI — интеллектуальный помощник на базе AI',
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
      'https://res.cloudinary.com/duajg3ah1/image/upload/v1740232455/ax7kjnkrg75ptdatwvrf.png',
    ],
    videoUrl: 'https://www.youtube.com/watch?v=Ypg4isxvXpk',
    description:
      'AstroMind-AI — помощник нового поколения на базе AI, который бесшовно интегрируется с моделями Machine Learning, повышая продуктивность, автоматизируя задачи и предоставляя полезные рекомендации в режиме реального времени.',
    linkDemo: 'https://astromind-ai.up.railway.app/#/',
    linkGitHub: 'https://github.com/shlomiNugarker/AstroMind-AI',
  },
]

const projectsWithDynamicIds = projects.map((project, index) => ({
  id: index + 1,
  ...project,
}))

export default projectsWithDynamicIds
