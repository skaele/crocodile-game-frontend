import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
    server: {
        open: true,
        port: 3000,
    },
    preview: { port: 4000 },
    plugins: [
        react(),
        checker({
            typescript: true,
            eslint: { lintCommand: 'eslint "./src/**/*.{ts,tsx}"' },
        }),
        tsconfigPaths(),
        svgr(),
        splitVendorChunkPlugin(),
    ],
    build: {
        outDir: 'build',
    },
    esbuild: {
        logOverride: { 'this-is-undefined-in-esm': 'silent' },
    },
})
