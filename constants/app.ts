/**
 * Application-wide constants that can be reused throughout the codebase
 */

// Contact information
export const CONTACT = {
  EMAIL: 'shlomin1231@gmail.com',
  PHONE: '+972 52-952-6762',
}

// Social media links
export const SOCIAL_MEDIA = {
  GITHUB: 'https://github.com/yourusername',
  LINKEDIN: 'https://linkedin.com/in/yourusername',
  TWITTER: 'https://twitter.com/yourusername',
}

// Animation settings
export const ANIMATION = {
  DELAY: {
    SHORT: 0.3,
    MEDIUM: 0.6,
    LONG: 1.2,
    SHAKE: 1.2, // For emoji animations
    JUMP: 1.8, // For emoji animations
  },
  DURATION: {
    SHORT: 0.3,
    MEDIUM: 0.5,
    LONG: 0.8,
  },
  STAGGER: {
    FAST: 0.1,
    NORMAL: 0.2,
    SLOW: 0.3,
  },
}

// Page sections IDs for navigation
export const SECTION_IDS = {
  HOME: 'home-section',
  ABOUT: 'about-section',
  SKILLS: 'skills-section',
  PROJECTS: 'projects-section',
  CONTACT: 'contact-section',
}

// Responsive breakpoints (matching theme)
export const BREAKPOINTS = {
  SM: '30em', // 480px
  MD: '48em', // 768px
  LG: '62em', // 992px
  XL: '80em', // 1280px
  XXL: '96em', // 1536px
}

// Common values for spacing, sizing etc.
export const LAYOUT = {
  SIDEBAR_WIDTH: { BASE: '100%', LG: '30%', XL: '34%' },
  CONTENT_WIDTH: { BASE: '100%', LG: '70%', XL: '66%' },
  CONTAINER_PADDING: { BASE: 4, MD: 6, LG: 8 },
  SECTION_MARGIN: { BASE: 8, MD: 12, LG: 16 },
}
