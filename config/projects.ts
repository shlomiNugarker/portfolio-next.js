const projects = [
  {
    title: 'Travelsdin - The Ultimate Social Network for Travelers',
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
    description:
      'Travelsdin is a cutting-edge social network designed for travelers worldwide! Share experiences, find new travel buddies, and chat in real time – all in one advanced platform.',
    linkDemo: 'https://travelsdin-express-production.up.railway.app/',
    linkGitHub: 'https://github.com/shlomiNugarker/Social-Network-Front-',
  },
  {
    title: 'Taskday - Smart Project Management & Collaboration',
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
    description:
      'Taskday is an advanced project management system that enhances collaboration and efficiency. With real-time updates, task tracking, and an intuitive drag-and-drop interface, it’s the perfect tool for teams.',
    linkDemo: 'https://taskday-monday-production.up.railway.app/',
    linkGitHub: 'https://github.com/shlomiNugarker/sprint-4',
  },
  {
    title: 'Chess Masters - Multiplayer Chess with Live Chat',
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
    description:
      'Challenge players worldwide in an interactive multiplayer chess game. Enjoy real-time gameplay with live chat, enhanced by a sleek and responsive design.',
    linkDemo: 'https://chess-v2-backend-production.up.railway.app/',
    linkGitHub: 'https://github.com/shlomiNugarker/Chess-V2-React',
  },
  {
    title: 'AstroMind-AI - The Future of AI-Powered Assistance',
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
      'https://res.cloudinary.com/duajg3ah1/image/upload/v1740161650/dkkezgesahgihwmgzmcp.png',
    ],
    videoUrl: 'https://www.youtube.com/watch?v=Ypg4isxvXpk',
    description:
      'AstroMind-AI is a next-generation AI-powered web application designed for seamless integration with cutting-edge machine learning models. Engage with an interactive AI assistant in real time for enhanced productivity and automation.',
    linkDemo: 'https://astromind-ai.up.railway.app/#/',
    linkGitHub: 'https://github.com/shlomiNugarker/AstroMind-AI',
  },
  {
    title: 'AchcchApp - The Ultimate WhatsApp Clone',
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
    description:
      'AchcchApp is a full-featured WhatsApp clone built with Angular and Node.js, offering real-time messaging, group chats, and a sleek UI experience.',
    linkDemo: 'https://achchhapp.onrender.com/main-page',
    linkGitHub: 'https://github.com/shlomiNugarker/Whatsapp-clone-Angular',
  },
  {
    title: 'Video+ - Your Personal Streaming Hub',
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
    description:
      'Video+ is the ultimate streaming platform, seamlessly integrating TMDB and YouTube APIs to bring you a world of entertainment.',
    linkDemo: 'https://videoplus.vercel.app/',
    linkGitHub: 'https://github.com/shlomiNugarker/video-plus',
  },
]

const projectsWithDynamicIds = projects.map((project, index) => ({
  id: index + 1,
  ...project,
}))

export default projectsWithDynamicIds
