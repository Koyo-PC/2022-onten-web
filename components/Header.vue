<template>
  <header>
    <ul>
      <li
        v-for="page in pages"
        :key="page.name"
        :style="{ width: 100.0 / pages.length + '%' }"
      >
        <a :href="page.url" @mouseover="onHover" @mouseleave="onLeave">{{
          page.name
        }}</a>
      </li>
    </ul>
  </header>
</template>

<script lang="ts">
import pages from "~/assets/data/pages.json";
import { gsap } from "gsap";

export default {
  name: "Header",
  data() {
    return {
      pages,
    };
  },
  methods: {
    onHover(event: MouseEvent) {
      gsap.to(event.target, {
        borderBottomWidth: 5,
        borderBottomColor: "",
        duration: 0.5,
        ease: "power3.out",
      });
    },
    onLeave(event: MouseEvent) {
      gsap.to(event.target, {
        borderBottomWidth: 0,
        borderBottomColor: "transparent",
        duration: 0.5,
        ease: "power3.out",
      });
    },
  },
};
</script>

<style scoped lang="scss">
header {
  position: sticky;
  top: 0;
  display: block;
  width: 100%;
  height: 50px;
  z-index: 9999;
  background-color: white;

  ul {
    display: flex;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;

    li {
      display: block;
      width: calc(100% / var(--element-count));
      height: 100%;

      a {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        border-bottom-color: $main-color;
      }
    }
  }
}
</style>
