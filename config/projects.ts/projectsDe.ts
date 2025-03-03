const projects = [
  {
    title: 'Travelsdin - Das ultimative soziale Netzwerk für Reisende',
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
      'Travelsdin ist eine moderne Social-Media-Plattform, die Reisenden ermöglicht, sich zu vernetzen, Erfahrungen auszutauschen und gemeinsam Abenteuer zu planen. Mit Echtzeit-Messaging und einer intuitiven Benutzeroberfläche revolutioniert sie die Art und Weise, wie Reisende online interagieren.',
    linkDemo: 'https://travelsdin-express-production.up.railway.app/',
    linkGitHub: 'https://github.com/shlomiNugarker/Social-Network-Front-',
  },
  {
    title: 'Taskday - Intelligentes Projektmanagement und Zusammenarbeit',
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
      'Taskday ist ein intelligentes Projektmanagement-System, das die Teamarbeit durch Echtzeit-Updates, Aufgabenverfolgung und eine benutzerfreundliche Drag-and-Drop-Oberfläche vereinfacht. Es wurde für hohe Effizienz und Produktivität entwickelt.',
    linkDemo: 'https://taskday-monday-production.up.railway.app/',
    linkGitHub: 'https://github.com/shlomiNugarker/sprint-4',
  },
  {
    title: 'Chess Masters - Multiplayer-Schach mit Live-Chat',
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
      'Ein interaktives Multiplayer-Schachspiel mit Live-Chat und flüssigem Gameplay. Es wurde für Schachbegeisterte entwickelt und bietet eine spannende, wettbewerbsorientierte Umgebung mit einer eleganten und reaktionsschnellen Benutzeroberfläche.',
    linkDemo: 'https://chess-v2-backend-production.up.railway.app/',
    linkGitHub: 'https://github.com/shlomiNugarker/Chess-V2-React',
  },
  {
    title: 'AstroMind-AI - KI-gestützte smarte Assistenz',
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
      'AstroMind-AI ist ein KI-gestützter Assistent der nächsten Generation, der sich nahtlos in Machine-Learning-Modelle integriert, um die Produktivität zu steigern, Aufgaben zu automatisieren und in Echtzeit wertvolle Empfehlungen zu geben.',
    linkDemo: 'https://astromind-ai.up.railway.app/#/',
    linkGitHub: 'https://github.com/shlomiNugarker/AstroMind-AI',
  },
]

const projectsWithDynamicIds = projects.map((project, index) => ({
  id: index + 1,
  ...project,
}))

export default projectsWithDynamicIds
