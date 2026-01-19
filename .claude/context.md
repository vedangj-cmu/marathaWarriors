# Maratha Warriors - Project Context

## Project Overview

**The Vanguard of Swarajya** is a mobile-first, immersive scrolling website that showcases the lives and key contributions of 6 legendary warriors of Shivaji Maharaj. The website provides an engaging narrative experience about the heroes behind the Maratha Empire.

### User Experience
- **Mobile-first design**: Built exclusively for mobile viewing with an optimized vertical scroll experience
- **Immersive scroll interactions**: Users scroll through warrior profiles with smooth transitions and background effects
- **Two-stage reveal**: Each warrior section starts with their name and title against a dramatic background effect, then reveals detailed biography as user continues scrolling
- **Bilingual support**: Sticky language toggle button allows switching between English and Hindi (defaults to English)
- **6 Warriors Featured**:
  1. Tanaji Malusare - The Lion of Sinhagad
  2. Kondaji Farzand - Master of Covert Warfare
  3. Hambirrao Mohite - The Constitutional Defender
  4. Shiva Kashid - The Royal Doppelganger
  5. Dhangar Mavala - Indigenous Intelligence
  6. Baji Prabhu Deshpande - Defender of Pavan Khind

## Tech Stack

### Frontend Framework
- **React 18.3.1**: Modern React with hooks (useState, useEffect, useRef)
- **React DOM 18.3.1**: Client-side rendering

### Build Tool
- **Vite 6.0.1**: Fast build tool and dev server
  - Configuration: [vite.config.js](vite.config.js)
  - Base path configured for GitHub Pages deployment (`/marathaWarriors/`)
  - React plugin: `@vitejs/plugin-react` ^4.3.4

### Styling
- **Tailwind CSS 3.4.15**: Utility-first CSS framework
  - Configuration: [tailwind.config.js](tailwind.config.js)
  - PostCSS: 8.4.49
  - Autoprefixer: 10.4.20
  - Custom classes used: gradient backgrounds, transitions, transforms, backdrop blur
  - Color scheme: Orange/Red theme (`from-orange-500`, `to-red-600`, etc.)

### UI Components & Icons
- **Lucide React ^0.460.0**: Icon library
  - Icons used: ChevronDown, Globe, BookOpen, Shield, Mountain, Award, Users, Scissors, Sword

### Deployment
- **gh-pages ^6.3.0**: Automated GitHub Pages deployment
  - Scripts: `npm run predeploy` → `npm run build`
  - Deploy: `npm run deploy` (publishes dist folder to gh-pages branch)

## Project Structure

```
marathaWarriors/
├── index.html                 # Entry HTML file with meta tags
├── vite.config.js             # Vite configuration with GitHub Pages base path
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
├── package.json               # Dependencies and scripts
└── src/
    ├── main.jsx               # React root render with StrictMode
    ├── App.jsx                # Main application component with warrior data
    └── index.css              # Tailwind directives (@tailwind base, components, utilities)
```

## Key Components

### App Component ([src/App.jsx](src/App.jsx))
- Main application container
- Language state management (English/Hindi toggle)
- Intro header section with title and scroll prompt
- Maps through `warriorsData` array to render warrior sections
- Footer with traditional greeting
- Sticky language toggle button (bottom-right)

### WarriorSection Component ([src/App.jsx:237](src/App.jsx#L237))
- Scroll-driven state transitions using IntersectionObserver and scroll events
- **Two stages**:
  - Stage 0 (Title): Full-screen display with warrior name, title, icon, and background image
  - Stage 1 (Details): Background blurs and details card slides up from bottom
- Height: 180vh container with sticky viewport
- Features:
  - Background image with gradient overlay and blend modes
  - Smooth opacity and transform transitions (700ms duration)
  - Animated icon (pulse) and scroll indicator (bounce)
  - Scrollable details card with backdrop blur effect

### Warrior Data Structure ([src/App.jsx:6](src/App.jsx#L6))
Each warrior object contains:
- `id`: Unique identifier
- `name`: { en, hi } - Bilingual names
- `title`: { en, hi } - Bilingual titles
- `icon`: Lucide React icon component
- `color`: Tailwind gradient classes
- `imgPlaceholder`: Unsplash image URL
- `details`: { en, hi } - JSX content with role, key battle/feat, and historical narrative

## Visual Design

### Color Palette
- Primary: Orange/Red gradients (`from-orange-500`, `to-red-600`, etc.)
- Background: Orange-50 (`bg-orange-50`)
- Text: White on colored backgrounds, Gray-800/900 on light backgrounds
- Accents: Orange-100, Orange-200 for highlights

### Typography
- Headers: Font-serif, bold/extrabold, drop-shadows
- Body: Font-sans (default), font-medium for details
- Font sizes: Responsive (base → md breakpoint)

### Interactive Elements
- Language toggle: Rounded-full button with hover scale effect
- Smooth transitions: 700ms-1000ms duration
- Bounce animations for scroll indicators
- Pulse animation for warrior icons

## Development Scripts

```bash
npm run dev      # Start Vite dev server
npm run build    # Production build
npm run preview  # Preview production build
npm run deploy   # Build and deploy to GitHub Pages
```

## Data Source
Historical content sourced from "The Vanguard of Swarajya: A Historiographical Analysis of the Maratha Military Ethos (1645–1689)"

## Browser Compatibility
- Modern browsers with ES6+ support
- CSS Grid and Flexbox
- IntersectionObserver API
- Scroll event listeners

## Performance Considerations
- Single-page application (SPA)
- Unsplash CDN for images with auto-formatting
- Tailwind CSS tree-shaking in production
- Vite's code splitting and minification

## Future Enhancement Opportunities
- Add loading states for images
- Implement lazy loading for warrior sections
- Add touch gestures for mobile navigation
- Include audio narration option
- Add social sharing capabilities
- Implement analytics tracking for scroll depth
