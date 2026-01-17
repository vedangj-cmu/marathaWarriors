# Maratha Warriors - The Vanguard of Swarajya

A beautiful, interactive website showcasing the legendary warriors of the Maratha Empire.

## Tech Stack

- **React 18** - UI library
- **Vite 6** - Build tool & dev server
- **Tailwind CSS 3** - Utility-first CSS framework
- **Lucide React** - Icon library

## Prerequisites

- Node.js (v18 or higher recommended)
- npm

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Navigate to [http://localhost:5173](http://localhost:5173)

## Build for Production

```bash
npm run build
```

The production files will be generated in the `dist/` folder.

## Preview Production Build

```bash
npm run preview
```

---

## Deploy to GitHub Pages

### One-time Setup on GitHub

1. **Push your code to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/marathaWarriors.git
   git push -u origin main
   ```

2. **Configure GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **Deploy from a branch**
   - Under **Branch**, select `gh-pages` and `/ (root)`
   - Click **Save**

3. **Update base path** (if your repo name is different):
   - Open `vite.config.js`
   - Change `/marathaWarriors/` to match your repository name

### Deploy

Run the following command to build and deploy:

```bash
npm run deploy
```

This will:
1. Build the production bundle
2. Push the `dist/` folder to the `gh-pages` branch
3. GitHub Pages will automatically serve your site

### Access Your Site

After deployment, your site will be available at:
```
https://YOUR_USERNAME.github.io/marathaWarriors/
```

> **Note:** It may take a few minutes for the site to be available after the first deployment.
