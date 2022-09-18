<template>
  <header>
    <ul id="header-big">
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
    <div id="header-small">
      <div id="header-small-content">
        <li v-for="page in pages" :key="page.name">
          <a :href="page.url">{{ page.name }}</a>
        </li>
      </div>
      <button id="header-toggle" @click="toggleMenu">
        <span class="material-symbols-outlined open" v-if="!menuOpen"
          >menu</span
        >
        <span class="material-symbols-outlined close" v-else>close</span>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "#imports";
import { gsap } from "gsap";

const menuOpen = ref(false);
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
  gsap.to("#header-small-content", {
    duration: 0.25,
    ease: "power3.out",
    top: menuOpen.value ? 0 : "-100vh",
  });
};
</script>

<script lang="ts">
import pages from "~/assets/data/pages.json";

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
  @include mobile {
    height: 0;
  }
  z-index: 9999;
  background-color: white;

  #header-big {
    display: flex;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 50px;

    @include mobile {
      display: none;
    }

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
        text-decoration: none;
        color: inherit;
      }
    }
  }
  #header-small {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 70px;
    height: 70px;
    border: none;
    color: $main-color;
    background-color: #fff8;
    @include mobile {
      display: block;
    }
    button {
      position: relative;
      padding: 10px;
      z-index: 1;
      cursor: pointer;
      .material-symbols-outlined {
        display: block;
        width: 100%;
        height: 100%;
        font-size: 50px;
        &.close {
          color: white;
        }
      }
    }
    #header-small-content {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: -100vh;
      padding: 70px 20px 20px 70px;
      overflow: hidden;
      backdrop-filter: blur(5px);
      background-color: rgba(150, 137, 137, 0.53);
      li {
        display: block;
        height: 50px;
        &:after {
          content: "";
          display: block;
        }
        a {
          display: inline-block;
          height: calc(100% - 10px);
          padding-bottom: 10px;
          font-size: 30px;
          text-decoration: none;
          color: white;
          text-shadow: #d9d9d9 0 0 10px;
        }
      }
    }
  }
}
</style>
