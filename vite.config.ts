import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from https://dariagiotina.github.io/Personal-cv-website/ on GitHub Pages
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/Personal-cv-website/' : '/',
}))
