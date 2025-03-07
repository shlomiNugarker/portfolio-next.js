const projects = [
  {
    title: 'Travelsdin - The Ultimate Social Network for Travelers',
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
      'Travelsdin is a modern social platform designed for travelers to connect, share experiences, and plan adventures together. With real-time messaging and an intuitive interface, it revolutionizes how travelers interact online.',
    features: [
      'User authentication with JWT (Signup/Login)',
      'Dynamic post feed with infinite scrolling',
      'Real-time chat with WebSockets',
      'Likes, comments, and replies on posts',
      'Friend connection system with requests & approvals',
      'Profile management with image upload',
      'Interactive map with user locations',
      'Notification system for likes, comments, and connections',
      'Secure REST API with Express.js',
      'Cloudinary integration for image hosting',
    ],
    linkDemo: 'https://travelsdin-express-production.up.railway.app/',
    linkGitHub: 'https://github.com/shlomiNugarker/Social-Network-Front-',
  },
  {
    title: 'Taskday - Smart Project Management & Collaboration',
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
      'Taskday is an intelligent project management system that enhances teamwork with real-time updates, task tracking, and a user-friendly drag-and-drop interface. Designed for maximum efficiency and productivity.',
    features: [
      'User authentication with Sessions',
      'Task board management (CRUD)',
      'Real-time task updates using WebSockets',
      'User management and permissions',
      'Middleware for security and access control',
      'User-friendly task management interface',
    ],
    linkDemo: 'https://taskday-monday-production.up.railway.app/',
    linkGitHub: 'https://github.com/shlomiNugarker/sprint-4',
  },
  {
    title: 'Chess Masters - Multiplayer Chess with Live Chat',
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
      'An interactive multiplayer chess game with real-time chat and smooth gameplay. Designed for chess enthusiasts, it offers a competitive and engaging environment with a sleek, responsive interface.',
    features: [
      'Checkmate and Castling support',
      'Modern design with SCSS',
      'React + TypeScript-based',
    ],
    linkDemo: 'https://chess-v2-backend-production.up.railway.app/',
    linkGitHub: 'https://github.com/shlomiNugarker/Chess-V2-React',
  },
  {
    title: 'AstroMind-AI - Smart AI-Powered Assistant',
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
      'AstroMind-AI is a next-generation AI-powered assistant that seamlessly integrates with machine learning models to boost productivity, automate workflows, and provide deep insights in real time.',
    features: [
      'Integration with OpenAI API for AI-generated astrological insights',
      'Advanced user authentication system with JWT',
      'Multilingual support (Hebrew & English) using i18n',
      'Smart chatbot with real-time interaction and responsive UI',
      'Secure connection to MongoDB database',
      'Modern user interface built with React and Tailwind CSS',
      'Data security with advanced role-based access control',
      'User management with different access levels (Admin / User)',
    ],
    linkDemo: 'https://astromind-ai.up.railway.app/#/',
    linkGitHub: 'https://github.com/shlomiNugarker/AstroMind-AI',
  },
  {
    title: 'Tetris - Classic Game in TypeScript',
    tags: [
      'Game Development',
      'TypeScript',
      'Canvas API',
      'Vite',
      'Vanilla JavaScript',
    ],
    imgs: [
      'https://res.cloudinary.com/duajg3ah1/image/upload/v1741333933/hcft00ztvoddagepecqd.jpg',
    ],
    videoUrl: '',
    description:
      'A modern, lightweight Tetris game built with TypeScript and the Canvas API. The game features smooth animations, dynamic difficulty adjustment, and a clean user interface.',
    linkDemo: 'https://shlominugarker.github.io/tetris-vannila-ts/',
    linkGitHub: 'https://github.com/shlomiNugarker/tetris-vannila-ts',
  },
  {
    title: 'Todo List - Task Management App',
    tags: [
      'Task Management',
      'React',
      'Vite',
      'TypeScript',
      'Tailwind CSS',
      'LocalStorage',
      'State Management',
    ],
    imgs: [
      'https://res.cloudinary.com/duajg3ah1/image/upload/v1741334749/m7tjy3w64of8myg4zzhf.jpg',
    ],
    videoUrl: '',
    description:
      'A modern and efficient Todo List application built with React and TypeScript. The app features task creation, editing, filtering by assignee and priority, and local storage persistence.',
    linkDemo: 'https://shlominugarker.github.io/todo-list-react-application/',
    linkGitHub: 'https://github.com/shlomiNugarker/todo-list-react-application',
  },
  {
    title: 'Jpeg-to-PDF - Convert Images to PDF with OCR',
    tags: [
      'OCR',
      'Image Processing',
      'React',
      'Next.js',
      'Tailwind CSS',
      'TypeScript',
      'Node.js',
      'Express',
      'Tesseract.js',
      'pdf-lib',
      'MongoDB',
    ],
    imgs: [
      'https://res.cloudinary.com/duajg3ah1/image/upload/v1741335295/q9yen9arwacqz2l1m7if.jpg',
    ],
    videoUrl: '',
    description:
      'Jpeg-to-PDF is an advanced web application for converting images into PDF files. It supports OCR technology via Tesseract.js, allowing text extraction from images and embedding it into the generated PDF. Built with Next.js on the frontend and Node.js with Express on the backend, this app enables users to upload images, convert them into high-quality PDFs, and download the results seamlessly.',
    features: [
      '💡 Fast and efficient image-to-PDF conversion',
      '🔍 OCR support to extract text from images',
      '📤 User-friendly interface for uploading images',
      '📥 Download the generated PDF file',
      '🗑️ Automatic cleanup of temporary files after processing',
      '🚀 Modern frontend using Next.js and Tailwind CSS',
      '⚙️ Robust backend with Express and MongoDB',
    ],
    linkDemo: 'https://image-to-pdf-free.vercel.app/',
    linkGitHub: 'https://github.com/shlomiNugarker/jpeg-to-pdf-nextjs',
  },
  {
    title: 'WhatsApp Clone - Real-time Chat Application',
    tags: [
      'Real-time Communication',
      'Chat Application',
      'Angular',
      'TypeScript',
      'SCSS',
      'Node.js',
      'Express',
      'MongoDB',
      'Socket.io',
      'JWT Authentication',
    ],
    imgs: [
      'https://res.cloudinary.com/duajg3ah1/image/upload/v1741336608/mrx5om1pnkozrla5bpsm.jpg',
    ],
    videoUrl: '',
    description:
      'WhatsApp Clone is a full-featured chat application that replicates core functionalities of WhatsApp, enabling real-time messaging between users. Built with Angular for the frontend and Node.js with Express for the backend, it leverages MongoDB for data storage and Socket.io for real-time updates. The application includes user authentication, message encryption, and an intuitive chat interface.',
    features: [
      '💡 Secure and real-time messaging with Socket.io',
      '🔐 User authentication with JWT',
      '📤 Seamless user registration and login system',
      '📥 MongoDB-powered chat history and user data storage',
      '🎨 Modern UI built with Angular and SCSS',
      '🚀 Scalable and efficient backend using Express.js',
      '🗑️ Automatic cleanup of temporary chat logs',
    ],
    linkDemo: 'https://achchhapp.onrender.com/',
    linkGitHub: 'https://github.com/shlomiNugarker/whatsapp-clone-angular',
  },
  {
    title: 'Snake Game - Classic Browser Game',
    tags: [
      'Web Game',
      'JavaScript',
      'HTML',
      'CSS',
      'Vanilla JS',
      'Game Development',
    ],
    imgs: [
      'https://res.cloudinary.com/duajg3ah1/image/upload/v1741336903/hwdhzecww9joudezoyrn.jpg',
    ],
    videoUrl: '',
    description:
      'A classic Snake game built using pure JavaScript (Vanilla JS) and playable directly in the browser. The player controls the snake using the arrow keys, aiming to eat as much food as possible without hitting the screen borders or its own body. The game features a scoring system, sound effects, and increasing speed as the snake grows.',
    features: [
      '🎮 Classic Snake game experience',
      '⌨️ Arrow key controls for smooth gameplay',
      '🔊 Sound effects for movement and food consumption',
      '📈 Real-time score tracking',
      '🚀 Lightweight and expandable Vanilla JS code',
      '🎨 Simple CSS styling for a clean user experience',
    ],
    linkDemo: 'https://shlominugarker.github.io/snake-vannila-js/',
    linkGitHub: 'http://github.com/shlomiNugarker/snake-vannila-js',
  },
  {
    title: 'Checkers Game - Vue.js-Based Classic Board Game',
    tags: [
      'Web Game',
      'Vue.js',
      'TypeScript',
      'Vite',
      'CSS',
      'Game Development',
    ],
    imgs: [
      'https://res.cloudinary.com/duajg3ah1/image/upload/v1741337246/gxxqlgeuaqbk67qrdhge.jpg',
    ],
    videoUrl: '',
    description:
      'A classic Checkers game built with Vue.js and TypeScript, featuring a modern user interface and full adherence to standard game rules.',
    features: [
      '🎮 Interactive Checkers game with an intuitive UI',
      '🔄 Two-player mode for competitive play',
      '🎨 Modern Vue.js-powered interface',
      '🖱️ Smooth user experience with animations',
      '📈 Score tracking and move history',
      '🚀 Optimized with Vite for fast loading and high performance',
    ],
    linkDemo: 'https://shlominugarker.github.io/checkers-vue-js/',
    linkGitHub: 'https://github.com/shlomiNugarker/checkers-vue-js',
  },
  {
    title: 'Sudoku Game - Advanced TypeScript-Based Web Game',
    tags: [
      'Web Game',
      'TypeScript',
      'HTML',
      'CSS',
      'Vite',
      'Game Development',
      'Local Storage',
      'Algorithmic Optimization',
      'OOP',
    ],
    imgs: [
      'https://res.cloudinary.com/duajg3ah1/image/upload/v1741337655/szym9lrspw75mtysoya2.jpg',
    ],
    videoUrl: '',
    description:
      'A feature-rich Sudoku game built with TypeScript and optimized for fast, seamless gameplay in the browser. The game includes real-time move validation, dynamically generated puzzles, difficulty level selection, and a sleek modern UI. Implemented using Object-Oriented Programming principles, it ensures a scalable and efficient architecture. Progress is saved automatically via Local Storage, allowing players to resume their game at any time.',
    features: [
      '🎮 Fully interactive and dynamic Sudoku gameplay',
      '🔢 Intelligent board generation with adjustable difficulty',
      '✔️ Real-time move validation and correctness checks',
      '💾 Automatic progress saving using Local Storage',
      '📊 Multiple difficulty levels: Easy, Medium, Hard, Expert',
      '⚡ Optimized performance with Vite for fast loading',
      '🖥️ Responsive design with an adaptive grid layout',
      '🎨 Elegant UI with customizable themes (light & dark mode)',
      '🚀 Scalable architecture using TypeScript and OOP principles',
    ],
    linkDemo: 'https://shlominugarker.github.io/sudoku-vannila-ts/',
    linkGitHub: 'https://github.com/shlomiNugarker/sudoku-vannila-ts',
  },
  {
    title: '2D Action Game - TypeScript Game Development',
    tags: [
      'Game Development',
      'TypeScript',
      'Canvas',
      'Web Game',
      'Webpack',
      'Object-Oriented Programming',
      'Animations',
      'Physics',
    ],
    imgs: [
      'https://res.cloudinary.com/duajg3ah1/image/upload/v1741337983/fyerm3gsrfvkzdungm6j.jpg',
    ],
    videoUrl: '',
    description:
      'A fast-paced 2D action game built using TypeScript, designed to run directly in the browser. The game features a player-controlled character that can move, jump, and attack enemies. With advanced physics interactions, collision animations, and layered background effects, it showcases cutting-edge game development techniques using modern JavaScript and OOP principles.',
    features: [
      '🎮 Dynamic 2D action gameplay with full player control',
      '🕹️ Keyboard-controlled movement with real-time physics',
      '👾 Advanced AI system for enemies with varied attack patterns',
      '💥 Collision detection and particle-based visual effects',
      '🖥️ Layered parallax backgrounds for an immersive experience',
      '⚡ Optimized game loop for smooth performance',
      '🎨 Fully animated player and enemy sprites',
      '🚀 Scalable and modular architecture using TypeScript and OOP',
    ],
    linkDemo: 'https://shlominugarker.github.io/game-development-tutorial/',
    linkGitHub: 'https://github.com/shlomiNugarker/game-development-tutorial',
  },
  {
    title: 'Minesweeper - The Classic JavaScript Minesweeper Game',
    tags: [
      'Web Game',
      'JavaScript',
      'HTML',
      'CSS',
      'Game Development',
      'Algorithms',
      'UI/UX',
      'Animations',
      'Audio Effects',
    ],
    imgs: [
      'https://res.cloudinary.com/duajg3ah1/image/upload/v1741338893/noxnpv9mpekeoyilpibj.jpg',
    ],
    videoUrl: '',
    description:
      'A modernized version of the classic Minesweeper game built with JavaScript, HTML, and CSS. It features dynamic board generation, intelligent cell reveal mechanics, mine flagging, win/loss conditions, and interactive sound effects for an enhanced gaming experience.',
    features: [
      '🎮 Classic Minesweeper gameplay with a modern design',
      '🛠️ Customizable board size and difficulty levels',
      '🔍 Smart cell reveal for uncovering empty areas',
      '🚩 Flagging system to mark suspected mines',
      '🎵 Interactive sound effects for an immersive experience',
      '⏳ Real-time timer to track game duration',
      '⚡ Smooth animations and responsive design',
      '🚀 Optimized game logic for fast performance',
    ],
    linkDemo: 'https://shlominugarker.github.io/minesweeper-sprint-1/',
    linkGitHub: 'https://github.com/shlomiNugarker/minesweeper-sprint-1',
  },
  {
    title: 'Remote Sessions - Live Code Collaboration Platform',
    tags: [
      'Web Application',
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'MongoDB',
      'WebSockets',
      'JWT Authentication',
      'Real-Time Collaboration',
      'Code Editor',
    ],
    imgs: [
      'https://res.cloudinary.com/duajg3ah1/image/upload/v1673381405/myPortfolio/cztl69dtpc1xxt5j6sf0.png',
    ],
    videoUrl: '',
    description:
      'Remote Sessions is a web-based platform enabling real-time code collaboration and remote programming sessions. Multiple users can edit code simultaneously with live updates powered by WebSockets. Built with React and TypeScript on the frontend, and Node.js with Express and MongoDB on the backend, it offers a seamless experience for collaborative development.',
    features: [
      '💻 Real-time collaborative code editing',
      '🔐 Secure user authentication using JWT',
      '⚡ Instant updates via WebSockets',
      '📁 Modular REST API architecture',
      '🗄️ Efficient data storage with MongoDB',
      '🚀 Modern UI built with React and TypeScript',
      '🔄 Seamless state management with custom hooks',
      '🎨 Fully responsive design for all devices',
    ],
    linkDemo: 'https://remote-sessions-production.up.railway.app/',
    linkGitHub: 'https://github.com/shlomiNugarker/remote-sessions-react',
  },
  {
    title: 'Monopoly - Vue.js-Based Digital Board Game',
    tags: [
      'Web Game',
      'Vue.js',
      'Vite',
      'JavaScript',
      'Game Development',
      'WebSockets',
      'State Management',
      'UI/UX',
      'Multiplayer',
    ],
    imgs: [
      'https://res.cloudinary.com/duajg3ah1/image/upload/v1661077030/myPortfolio/ypvbcwolwot13zpj83m1.png',
    ],
    videoUrl: '',
    description:
      'A modern digital adaptation of the classic Monopoly board game built with Vue.js and Vite. Featuring real-time multiplayer support via WebSockets, interactive modals, dynamic board management, and responsive UI elements, players can buy properties, trade assets, and compete in an immersive digital Monopoly experience.',
    features: [
      '🎲 Fully interactive Monopoly board game',
      '🌐 Multiplayer support via WebSockets',
      '🛠️ Dynamic game board with custom tile management',
      '💳 Property cards and player transactions',
      '📊 Seamless state management with Vuex',
      '⚡ Fast performance with Vite and optimized rendering',
      '🎨 Modern and responsive UI design',
      '🔄 Live updates for player movements and events',
    ],
    linkDemo: 'https://github.com/shlomiNugarker/monoploly-vue.js',
    linkGitHub: 'https://shlominugarker.github.io/monopoly-demo/#/',
  },
  {
    title: 'Ultimate Meme Generator - JavaScript Web App',
    tags: [
      'Web Application',
      'JavaScript',
      'HTML',
      'CSS',
      'Canvas',
      'Image Processing',
      'UI/UX',
      'Local Storage',
    ],
    imgs: [
      'https://res.cloudinary.com/duajg3ah1/image/upload/v1741339981/myPortfolio/b5ot6xjlgir4baq0fz62.jpg',
    ],
    videoUrl: '',
    description:
      'The Ultimate Meme Generator is a web-based application that allows users to effortlessly create and customize memes. Users can choose an image from a rich gallery, add multiple text layers, adjust text styles, and download their creations as images. The app also supports saving projects in Local Storage for later editing.',
    features: [
      '🖼️ Rich meme image gallery',
      '✏️ Multiple customizable text layers',
      '📏 Adjustable text size, position, and alignment',
      '💾 Save meme projects in Local Storage',
      '📥 Download memes as image files',
      '🎨 Intuitive and responsive user interface',
      '⚡ Optimized rendering with the HTML Canvas API',
    ],
    linkDemo:
      'https://shlominugarker.github.io/ultimate-meme-generator-sprint-2/',
    linkGitHub:
      'https://github.com/shlomiNugarker/ultimate-meme-generator-sprint-2',
  },
]

const projectsWithDynamicIds = projects.map((project, index) => ({
  id: index + 1,
  ...project,
}))

export default projectsWithDynamicIds
