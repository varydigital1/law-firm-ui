import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  // base: "/law-firm-ui/", // បន្ថែមបន្ទាត់នេះ ដើម្បីកំណត់ base path សម្រាប់ GitHub Pages
  server: {
    host: true,  // អនុញ្ញាតឲ្យចូលពីខាងក្រៅ
    port: 5173
  }
})
