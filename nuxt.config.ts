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
  app: {
    head: {
      title: "宴Joy",
      titleTemplate: "宴Joy | %s",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "甲陽学院高等学校 第75回「音楽と展覧の会」公式サイトです。2022/9/23に開催予定。",
        },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    },
  },
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
