import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig(() => {
  const isGhPages = process.env.GITHUB_PAGES === 'true'
  return {
    plugins: [vue()],
    // Use repo base only for GitHub Pages, root for Firebase
    base: isGhPages ? '/L2-LICENCE/' : '/',
  }
})
