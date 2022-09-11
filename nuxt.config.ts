import { defineNuxtConfig } from "nuxt";

// TODO 本番鯖上げる時変更する!
const url = "https://dev.koyo-onten.net";

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

      htmlAttrs: {
        lang: "ja",
        prefix: "og: http://ogp.me/ns#",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "甲陽学院高等学校 第75回「音楽と展覧の会」公式サイトです。2022/9/23に開催予定。",
        },
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: process.env.npm_package_description || "",
        },
        {
          hid: "og:site_name",
          property: "og:site_name",
          content: "第75回 音楽と展覧の会「宴Joy」公式サイト",
        },
        { hid: "og:type", property: "og:type", content: "website" },
        {
          hid: "og:url",
          property: "og:url",
          content: url,
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "宴Joy",
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "甲陽学院高等学校 第75回「音楽と展覧の会」公式サイトです。2022/9/23に開催予定。",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: `${url}/logo-color.png`,
        },
        { name: "twitter:card", content: "summary" },
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
