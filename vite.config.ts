import { defineConfig } from 'vite'
import electron from 'vite-plugin-electron'

export default defineConfig({
  mode: 'development',
  plugins: [
    electron([
      {
        entry: 'electron/index.ts',
      },
      {
        entry: 'preload/preload.ts',
        onstart(options) {
          options.reload()
        },
      },
    ]),
  ],
})
