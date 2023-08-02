import { VitePWA } from "vite-plugin-pwa"

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      manifest: {
        name: "Comparador de criptomonedas con Vue, Sass y Vite",
        short_name: "CripTranslator",
        description: "Comparador de criptomonedas con Vue, Sass y Vite",
        theme_color: "#f60de3"
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
