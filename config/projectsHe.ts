const projects = [
  {
    title: 'Travelsdin - הרשת החברתית האולטימטיבית למטיילים',
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
      'Travelsdin היא פלטפורמה חברתית מודרנית, המיועדת למטיילים להתחבר, לשתף חוויות ולתכנן הרפתקאות יחד. עם מסרים בזמן-אמת וממשק אינטואיטיבי, היא משנה את האופן שבו מטיילים מתקשרים אונליין.',
    linkDemo: 'https://travelsdin-express-production.up.railway.app/',
    linkGitHub: 'https://github.com/shlomiNugarker/Social-Network-Front-',
  },
  {
    title: 'Taskday - ניהול פרויקטים חכם ושיתוף פעולה',
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
      'Taskday היא מערכת ניהול פרויקטים חכמה, המייעלת את שיתוף הפעולה הצוותי באמצעות עדכונים בזמן-אמת, מעקב משימות וממשק Drag-and-Drop ידידותי למשתמש. מיועדת ליעילות ותפוקה מרבית.',
    linkDemo: 'https://taskday-monday-production.up.railway.app/',
    linkGitHub: 'https://github.com/shlomiNugarker/sprint-4',
  },
  {
    title: "Chess Masters - שחמט מרובה משתתפים עם צ'אט חי",
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
      "משחק שחמט אינטראקטיבי מרובה משתתפים עם צ'אט בזמן-אמת וחוויית משחק חלקה. מיועד לחובבי שחמט, ומציע סביבה תחרותית ומרתקת עם ממשק רספונסיבי ואלגנטי.",
    linkDemo: 'https://chess-v2-backend-production.up.railway.app/',
    linkGitHub: 'https://github.com/shlomiNugarker/Chess-V2-React',
  },
  {
    title: 'AstroMind-AI - עוזר חכם מבוסס AI',
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
      'AstroMind-AI הוא עוזר חכם מהדור הבא המבוסס AI, שמשתלב בצורה חלקה עם מודלי Machine Learning כדי להגביר פרודוקטיביות, לאוטומט תהליכים ולהציע המלצות מעמיקות בזמן-אמת.',
    linkDemo: 'https://astromind-ai.up.railway.app/#/',
    linkGitHub: 'https://github.com/shlomiNugarker/AstroMind-AI',
  },
]

const projectsWithDynamicIds = projects.map((project, index) => ({
  id: index + 1,
  ...project,
}))

export default projectsWithDynamicIds
