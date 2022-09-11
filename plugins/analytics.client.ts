import { defineNuxtPlugin } from "#imports";
import VueGTag from "vue-gtag-next";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGTag, {
    property: { id: "G-RLB5PE34KS" },
  });
});
