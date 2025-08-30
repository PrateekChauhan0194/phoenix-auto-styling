/// <reference types="node" />
import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
const rootDir = dirname(fileURLToPath(import.meta.url))
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: resolve(rootDir, 'src/components'),
      data: resolve(rootDir, 'src/data'),
      pages: resolve(rootDir, 'src/pages'),
    }
  }
})
