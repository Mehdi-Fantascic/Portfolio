# My Portfolio

A minimal, dark editorial developer portfolio built with React + Vite.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed ([nodejs.org](https://nodejs.org))

### Install & Run

```bash
# Install dependencies
npm install

# Start dev server (opens at http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## ✏️ Personalizing Your Portfolio

Everything is centralized in **`src/App.jsx`** at the top — just edit the data objects:

### 1. Your Info (`ME` object)
```js
const ME = {
  name: 'Your Name',        // ← your full name
  initials: 'YN',           // ← used in the nav logo
  title: 'Junior Developer',
  location: 'Morocco',
  tagline: '...',           // ← hero subtitle
  about: ['...', '...'],    // ← 2-3 paragraphs, supports <strong> tags
  email: 'your@email.com',
  github: 'https://github.com/...',
  linkedin: 'https://linkedin.com/in/...',
  twitter: 'https://twitter.com/...',
  available: true,          // ← shows green "open to work" dot
}
```

### 2. Projects (`PROJECTS` array)
Add, remove, or edit your projects:
```js
{
  num: '01',
  name: 'Project Name',
  desc: 'Short description of what it does and why you built it.',
  tags: ['React', 'Node.js'],    // tech stack
  live: 'https://your-live-site.com',
  github: 'https://github.com/you/repo',
}
```

### 3. Skills (`SKILLS` array)
Update with your actual skills:
```js
{ category: 'Frontend', items: ['React', 'TypeScript', 'CSS'] },
{ category: 'Backend',  items: ['Node.js', 'Express', 'PostgreSQL'] },
```

### 4. Colors & Theme (`src/index.css`)
Change the accent color (currently electric yellow-green):
```css
:root {
  --accent: #DCFF50;   /* ← change this to any color you like */
}
```

## 📁 Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── App.jsx       ← main component + all your data
│   ├── index.css     ← global styles & design tokens
│   └── main.jsx      ← React entry point
├── index.html
├── package.json
└── vite.config.js
```

## 🌐 Deploying

### Vercel (easiest)
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → Import project
3. Deploy — it auto-detects Vite

### Netlify
1. `npm run build`
2. Drag & drop the `dist/` folder to [netlify.com/drop](https://app.netlify.com/drop)

### GitHub Pages
```bash
npm install --save-dev gh-pages
```
Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "deploy": "gh-pages -d dist"
}
```
Then: `npm run build && npm run deploy`

## 🎨 Customization Tips

- **Fonts**: Edit the Google Fonts `<link>` in `index.html` and update `font-family` in `index.css`
- **Add sections**: Create a new component in `App.jsx` and add it inside `<main>`
- **Animations**: All animations use CSS keyframes — edit them in `index.css`
- **Mobile menu**: The hamburger button is wired up but not expanded — a great first feature to add!
