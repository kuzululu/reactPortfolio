import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config()

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    base: "/reactPortfolio",
    base: process.env.VITE_BASE_PATH || "/reactPortfolio",
  }
})
