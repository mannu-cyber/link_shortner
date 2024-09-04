import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  server:{
    proxy:{
      '/api':"https://link-shortner-vphz.onrender.com"
    }
  },

  plugins: [react()],
})
