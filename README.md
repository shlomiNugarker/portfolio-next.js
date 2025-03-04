# Portfolio Next.js

## 📌 Overview
This is a **Next.js** portfolio website built using **TypeScript**, **Tailwind CSS**, and **framer-motion** for smooth animations. The project supports multiple languages, dynamic project displays, and modern UI design.

## 🚀 Features
- **Multi-language Support** (`next-i18next` for i18n)
- **Smooth Animations** (`framer-motion` for transitions and effects)
- **Modular Components** (Re-usable and scalable design)
- **Optimized Performance** (Fast loading and lightweight structure)
- **Tailwind CSS** (For modern styling and responsiveness)

## 📂 Project Structure
```
/portfolio-next.js-main
│── /components        # Reusable UI components
│── /config            # Configuration files (projects, skills, sidebar, theme)
│── /pages             # Main pages (index.tsx, projects.tsx, contact.tsx)
│── /types             # TypeScript interfaces
│── next.config.js     # Next.js configuration
│── package.json       # Dependencies and scripts
│── tsconfig.json      # TypeScript settings
```

## 🛠 Tech Stack
- **Frontend**: Next.js, React, TypeScript
- **Styling**: Tailwind CSS, CSS Modules
- **Animations**: framer-motion
- **Internationalization**: next-i18next
- **State Management**: Configuration-based data loading

## ⚡ Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/portfolio-next.js-main.git
   ```
2. Navigate into the project directory:
   ```sh
   cd portfolio-next.js-main
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
   or using yarn:
   ```sh
   yarn install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```
   or using yarn:
   ```sh
   yarn dev
   ```
5. Open `http://localhost:3000` in your browser.

## 🏗 Deployment
To deploy on **Vercel**, run:
```sh
vercel
```
Alternatively, for static export:
```sh
npm run build && npm run export
```

## 🔧 Customization
- Modify **projects** and **skills** in `/config/`.
- Edit **theme settings** in `/config/theme.ts`.
- Add new **translations** in `/config/projects.ts/`.

## 📜 License
This project is licensed under the MIT License.

---

💡 **Contributions & Feedback** are always welcome!

