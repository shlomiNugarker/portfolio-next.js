const projects = [
  {
    title: 'Travelsdin - यात्रियों के लिए अंतिम सोशल नेटवर्क',
    tags: [
      'जावास्क्रिप्ट (ES6)',
      'MongoDB',
      'React.js',
      'Redux',
      'Rest API',
      'Node.js',
      'लाइव चैट',
      'Socket.io',
    ],
    imgs: [
      'https://res.cloudinary.com/duajg3ah1/image/upload/v1662386727/ctivc99rxpjymdn0za1n.png',
    ],
    videoUrl: 'https://youtu.be/HUv5xN5qTS4',
    description:
      'Travelsdin एक आधुनिक सोशल प्लेटफ़ॉर्म है जिसे यात्रियों को जोड़ने, अनुभव साझा करने और एक साथ यात्रा योजनाओं को सरल बनाने के लिए डिज़ाइन किया गया है। वास्तविक समय की मैसेजिंग और सहज इंटरफ़ेस के साथ, यह यात्रियों के ऑनलाइन संवाद को नया रूप देता है।',
    linkDemo: 'https://travelsdin-express-production.up.railway.app/',
    linkGitHub: 'https://github.com/shlomiNugarker/Social-Network-Front-',
  },
  {
    title: 'Taskday - स्मार्ट प्रोजेक्ट प्रबंधन और सहयोग',
    tags: [
      'MongoDB',
      'जावास्क्रिप्ट (ES6)',
      'Rest API',
      'Socket.io',
      'Vue.js',
      'SCSS',
      'Vuex',
      'MVC',
      'सिंगल पेज एप्लिकेशन',
      'ड्रैग और ड्रॉप',
      'Node.js',
    ],
    imgs: [
      'https://res.cloudinary.com/duajg3ah1/image/upload/v1660916126/myPortfolio/qdtzolm9ldd5qlquq2aj.png',
    ],
    videoUrl: 'https://www.youtube.com/watch?v=49DkbR-cJis',
    description:
      'Taskday एक बुद्धिमान परियोजना प्रबंधन प्रणाली है जो टीम के सहयोग को वास्तविक समय में अपडेट, कार्य ट्रैकिंग और उपयोगकर्ता-अनुकूल ड्रैग-एंड-ड्रॉप इंटरफ़ेस के साथ सरल बनाती है। इसे उच्च दक्षता और उत्पादकता के लिए डिज़ाइन किया गया है।',
    linkDemo: 'https://taskday-monday-production.up.railway.app/',
    linkGitHub: 'https://github.com/shlomiNugarker/sprint-4',
  },
  {
    title: 'Chess Masters - मल्टीप्लेयर शतरंज लाइव चैट के साथ',
    tags: [
      'TypeScript',
      'React',
      'Redux Toolkit',
      'Node.js',
      'लाइव चैट',
      'MongoDB',
    ],
    imgs: [
      'https://res.cloudinary.com/duajg3ah1/image/upload/v1668701783/myPortfolio/dg6pkn0oxvpgrtjn998y.png',
    ],
    videoUrl: 'https://youtu.be/I90vJUsZzFU',
    description:
      'एक इंटरएक्टिव मल्टीप्लेयर शतरंज खेल जिसमें वास्तविक समय की चैट और सहज गेमप्ले है। शतरंज प्रेमियों के लिए डिज़ाइन किया गया, यह एक आकर्षक, प्रतिस्पर्धात्मक वातावरण प्रदान करता है जिसमें एक सुंदर और उत्तरदायी UI है।',
    linkDemo: 'https://chess-v2-backend-production.up.railway.app/',
    linkGitHub: 'https://github.com/shlomiNugarker/Chess-V2-React',
  },
  {
    title: 'AstroMind-AI - AI-संचालित स्मार्ट सहायक',
    tags: [
      'AI',
      'मशीन लर्निंग',
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
      'AstroMind-AI एक अगली पीढ़ी का AI-संचालित सहायक है जो मशीन लर्निंग मॉडल के साथ सहजता से एकीकृत होता है ताकि उत्पादकता बढ़ाई जा सके, कार्य स्वचालित किए जा सकें, और वास्तविक समय में मूल्यवान सिफारिशें प्रदान की जा सकें।',
    linkDemo: 'https://astromind-ai.up.railway.app/#/',
    linkGitHub: 'https://github.com/shlomiNugarker/AstroMind-AI',
  },
]

const projectsWithDynamicIds = projects.map((project, index) => ({
  id: index + 1,
  ...project,
}))

export default projectsWithDynamicIds
