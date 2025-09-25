import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss()],
  server: {
    host: true,  // អនុញ្ញាតឲ្យចូលពីខាងក្រៅ
    port: 5173
  }
})
