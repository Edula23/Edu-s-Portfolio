import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' 
import { ghPages } from 'vite-plugin-gh-pages'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),ghPages()],
   server: {
    host: '0.0.0.0',
    port: 3003,
  },
  base: '/Edu\'s-Portfolio/'
})
