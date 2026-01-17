import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    // Base path for GitHub Pages - replace 'marathaWarriors' with your repo name if different
    base: process.env.NODE_ENV === 'production' ? '/marathaWarriors/' : '/',
})
