const projects = [
  {
    title: 'Travelsdin - הרשת החברתית המושלמת למטיילים',
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
      'Travelsdin היא פלטפורמה חברתית חדשנית שמחברת מטיילים מכל העולם. שתפו חוויות, תכננו מסלולים יחד וצרו קשרים חדשים – הכל במקום אחד, עם צ’אט בזמן אמת וממשק חכם ונוח.',
    linkDemo: 'https://travelsdin-express-production.up.railway.app/',
    linkGitHub: 'https://github.com/shlomiNugarker/Social-Network-Front-',
  },
  {
    title: 'Taskday - ניהול פרויקטים חכם ושיתוף פעולה יעיל',
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
      'Taskday היא מערכת לניהול משימות ופרויקטים שמייעלת שיתוף פעולה בין צוותים עם עדכונים בזמן אמת, מעקב חכם אחר משימות וממשק Drag-and-Drop אינטואיטיבי. מושלמת לניהול יעיל ותפוקה גבוהה.',
    linkDemo: 'https://taskday-monday-production.up.railway.app/',
    linkGitHub: 'https://github.com/shlomiNugarker/sprint-4',
  },
  {
    title: "Chess Masters - משחק שחמט אונליין עם צ'אט בזמן אמת",
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
      "משחק שחמט אינטראקטיבי מרובה משתתפים עם צ’אט חי, חוויית משחק חלקה וממשק מתקדם. מיועד לחובבי שחמט שמחפשים אתגר בסביבה תחרותית ומהנה.",
    linkDemo: 'https://chess-v2-backend-production.up.railway.app/',
    linkGitHub: 'https://github.com/shlomiNugarker/Chess-V2-React',
  },
  {
    title: 'AstroMind-AI - עוזר חכם מבוסס בינה מלאכותית',
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
      'AstroMind-AI הוא עוזר דיגיטלי חכם שמשתמש בבינה מלאכותית ולמידת מכונה כדי לשפר פרודוקטיביות, לאוטומט תהליכים ולהציע תובנות מדויקות בזמן אמת.',
    linkDemo: 'https://astromind-ai.up.railway.app/#/',
    linkGitHub: 'https://github.com/shlomiNugarker/AstroMind-AI',
  },
]

const projectsWithDynamicIds = projects.map((project, index) => ({
  id: index + 1,
  ...project,
}))

export default projectsWithDynamicIds
