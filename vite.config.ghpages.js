import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/proyecto-cv/', // Cambia esto al nombre de tu repositorio
  build: {
    outDir: 'dist',
  }
})
