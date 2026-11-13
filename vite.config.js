import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' : fonctionne sur GitHub Pages (sous-dossier /nom-du-depot/) comme sur Vercel
export default defineConfig({ plugins: [react()], base: './' })
