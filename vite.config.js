import { join } from 'node:path'
import { fileURLToPath, URL } from 'node:url'
import { readdir, rm } from 'node:fs/promises'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '',
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: false
  },
  publicDir: 'public',
  server: {
    port: 3839,
    host: true
  },
  plugins: [
    react(),
    {
      name: 'Cleaning dist folder',
      async buildStart() {
        const __dirname = fileURLToPath(new URL('.', import.meta.url));
        let filePaths = []
        try {
          filePaths = await readdir(join(__dirname, 'dist'))
        } catch (err) {
          if (err.code !== 'ENOENT') {
            throw err
          }
        }
        for (const filePath of filePaths) {
          if (filePath === '.git') {
            continue
          }
          const fullFilePath = join(__dirname, 'dist', filePath)
          await rm(fullFilePath, { recursive: true })
        }
      }
    },
  ]
})
