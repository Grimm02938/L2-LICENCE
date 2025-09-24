import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Use relative base so it works on Firebase root and GitHub Pages subpath
export default defineConfig({
  plugins: [vue()],
  base: './',
})
