import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
  css: [
    "destyle.css",
    "@/assets/style/default.scss",
    "@/assets/style/fonts.scss",
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@import "@/assets/style/colors.scss"; @import "@/assets/style/responsive.scss";',
        },
      },
    },
  },
});
