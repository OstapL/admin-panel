// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default defineNuxtConfig({
  app: {
    rootId: 'admin-panel',
    head: {
      title: 'Admin Panel',
      meta: [
        {
          name: 'description',
          content: 'Admin Panel for simple page management',
        },
      ],
    },
  },
  build: {
    transpile: ['vuetify'],
  },
  devtools: { enabled: true },
  alias: {
    "@": resolve(__dirname, '/'),
  },
  css: ["~/assets/styles/index.sass", "vuetify/lib/styles/main.sass"],
  modules: ['@pinia/nuxt',],
  postcss: {
    plugins: {
      autoprefixer: {},
    }
  },
  // цікава штука з редіректом і налаштуваннями ssr
  routeRules: {
    // Homepage pre-rendered at build time
    '/': { prerender: true },
    // Admin dashboard renders only on client-side
    '/admin/**': { ssr: false },
  },
  runtimeConfig: {
    public: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    },
  }
})
