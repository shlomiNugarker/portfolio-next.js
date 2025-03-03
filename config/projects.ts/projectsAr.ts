const projects = [
  {
    title: 'Travelsdin - الشبكة الاجتماعية المثالية للمسافرين',
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
      'Travelsdin هي منصة اجتماعية عصرية مصممة خصيصًا للمسافرين، تتيح لهم التواصل، تبادل الخبرات، والتخطيط للرحلات معًا. توفر رسائل فورية وواجهة سهلة الاستخدام، مما يغيّر طريقة تفاعل المسافرين عبر الإنترنت.',
    linkDemo: 'https://travelsdin-express-production.up.railway.app/',
    linkGitHub: 'https://github.com/shlomiNugarker/Social-Network-Front-',
  },
  {
    title: 'Taskday - إدارة مشروعات ذكية وتعاون فعّال',
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
      'Taskday هو نظام إدارة مشروعات ذكي يسهّل التعاون بين أعضاء الفريق من خلال التحديثات الفورية، وتتبع المهام، وواجهة سحب وإفلات سهلة الاستخدام. مصمم لزيادة الكفاءة والإنتاجية.',
    linkDemo: 'https://taskday-monday-production.up.railway.app/',
    linkGitHub: 'https://github.com/shlomiNugarker/sprint-4',
  },
  {
    title: 'Chess Masters - لعبة شطرنج متعددة اللاعبين مع دردشة مباشرة',
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
      'لعبة شطرنج تفاعلية متعددة اللاعبين توفر دردشة مباشرة وأسلوب لعب سلس. صُممت لمحبي الشطرنج، وتقدم بيئة تنافسية وجذابة مع واجهة مستخدم أنيقة ومتجاوبة.',
    linkDemo: 'https://chess-v2-backend-production.up.railway.app/',
    linkGitHub: 'https://github.com/shlomiNugarker/Chess-V2-React',
  },
  {
    title: 'AstroMind-AI - مساعدة ذكية معتمدة على الذكاء الاصطناعي',
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
      'AstroMind-AI هو مساعد من الجيل الجديد يعتمد على الذكاء الاصطناعي، يتكامل بسلاسة مع نماذج Machine Learning لزيادة الإنتاجية، وأتمتة المهام، وتقديم توصيات مفيدة في الوقت الفعلي.',
    linkDemo: 'https://astromind-ai.up.railway.app/#/',
    linkGitHub: 'https://github.com/shlomiNugarker/AstroMind-AI',
  },
]

const projectsWithDynamicIds = projects.map((project, index) => ({
  id: index + 1,
  ...project,
}))

export default projectsWithDynamicIds
