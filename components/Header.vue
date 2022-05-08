<template>
  <header>
    <ul>
      <li v-for="page in pages" :key="page.name">
        <a :href="page.url">{{ page.name }}</a>
      </li>
    </ul>
  </header>
</template>

<script lang="ts">
import pages from "~/assets/pages.json";
export default {
  name: "Header",
  data() {
    return {
      pages,
    };
  },
};
</script>

<style scoped lang="scss">
header {
  display: block;
  width: 100%;
  height: 50px;
  position: sticky;
  top: 0;
  background-color: white;
  ul {
    display: flex;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;

    li {
      display: block;
      width: 100px;
      height: 100%;

      a {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
