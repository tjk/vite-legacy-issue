import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import createLegacyPlugin from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createLegacyPlugin(),
  ]
})
