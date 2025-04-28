# Next.js Portfolio

A modern, responsive portfolio website built with Next.js, Chakra UI, and TypeScript.

## 🌟 Features

- **Responsive Design**: Adapts to all screen sizes
- **Internationalization**: Multi-language support
- **Modern Animation**: Smooth page transitions and scroll effects
- **Theming**: Light and dark mode support
- **Reusable Components**: Modular component architecture
- **High Performance**: Optimized for speed and SEO

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio-next.js.git

# Navigate to the project directory
cd portfolio-next.js

# Install dependencies
npm install
# or
yarn install

# Start the development server
npm run dev
# or
yarn dev
```

Visit `http://localhost:3000` to see the live site.

## 📂 Project Structure

```
portfolio-next.js/
├── components/            # Reusable components
│   ├── Core/              # Core UI components
│   ├── Layout/            # Layout-related components
│   ├── Sections/          # Page sections
│   └── ...
├── config/                # Configuration files
├── hooks/                 # Custom React hooks
├── pages/                 # Next.js pages
├── public/                # Static assets
├── styles/                # Styling system
│   ├── theme/             # Theme configuration
│   ├── shared/            # Shared styles
│   └── globals.css        # Global styles
├── utils/                 # Utility functions
└── types/                 # TypeScript type definitions
```

## 🎨 Styling System

The project uses a modular styling system built on Chakra UI. See [styles/README.md](styles/README.md) for detailed documentation.

Key features:

- Design tokens system
- Reusable style patterns
- Core components library
- Responsive utilities

## 🔧 Customization

### Theme

Modify the theme in `styles/theme/tokens.ts` to change colors, typography, spacing, etc.

### Content

Update the content in the appropriate components in `components/Sections/`.

### Localization

Add or modify translations in `public/locales/` directory.

## 📚 Documentation

- [Component Documentation](docs/components.md)
- [Styling System](styles/README.md)
- [Hooks Documentation](docs/hooks.md)

## 📱 Responsive Design

The portfolio is fully responsive with custom breakpoints:

- Mobile: Up to 479px
- Tablet: 480px - 767px
- Desktop: 768px+

The responsive behavior is managed through the `useResponsive` hook for consistent handling across components.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/portfolio-next.js](https://github.com/yourusername/portfolio-next.js)
