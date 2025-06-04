import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    assetsInlineLimit: 0 // Disables base64 encoding for all assets
  },
  assetsInclude: ['**/*.docx'], // Add this line to include .docx files as assets
})
