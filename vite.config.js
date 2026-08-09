import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 👇 must match your GitHub repo name exactly, e.g. github.com/you/agrocure-ai
  base: '/agrocure-ai/',
})
