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
      'Travelsdin – это современная социальная платформа для путешественников, где можно находить единомышленников, делиться впечатлениями и планировать приключения вместе. Благодаря чату в реальном времени и интуитивному интерфейсу, она меняет способ общения между путешественниками онлайн.',
    linkDemo: 'https://travelsdin-express-production.up.railway.app/',
    linkGitHub: 'https://github.com/shlomiNugarker/Social-Network-Front-',
  },
  {
    title: 'Taskday - умное управление проектами и совместная работа',
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
      'Taskday – это интеллектуальная система управления проектами, которая оптимизирует командное взаимодействие с помощью обновлений в реальном времени, отслеживания задач и удобного интерфейса Drag-and-Drop. Разработана для максимальной эффективности и продуктивности.',
    linkDemo: 'https://taskday-monday-production.up.railway.app/',
    linkGitHub: 'https://github.com/shlomiNugarker/sprint-4',
  },
  {
    title: "Chess Masters - многопользовательские шахматы с живым чатом",
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
      "Интерактивная многопользовательская шахматная игра с чатом в реальном времени и плавным игровым процессом. Подходит для любителей шахмат, предлагая конкурентную и увлекательную среду с адаптивным и элегантным интерфейсом.",
    linkDemo: 'https://chess-v2-backend-production.up.railway.app/',
    linkGitHub: 'https://github.com/shlomiNugarker/Chess-V2-React',
  },
  {
    title: 'AstroMind-AI - интеллектуальный помощник на основе ИИ',
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
      'AstroMind-AI – это интеллектуальный помощник нового поколения, который интегрируется с моделями машинного обучения для повышения продуктивности, автоматизации процессов и предоставления глубоких аналитических рекомендаций в реальном времени.',
    linkDemo: 'https://astromind-ai.up.railway.app/#/',
    linkGitHub: 'https://github.com/shlomiNugarker/AstroMind-AI',
  },
]

const projectsWithDynamicIds = projects.map((project, index) => ({
  id: index + 1,
  ...project,
}))

export default projectsWithDynamicIds
