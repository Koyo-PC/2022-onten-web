<template>
  <div class="circle-tile">
    <img
      :src="`/img/circle/${name}/logo.webp`"
      :alt="`${circles[name].name}ロゴ`"
    />
    <h1>{{ circles[name].name }}</h1>
    <span>団体ページへ→</span>

    <a :href="`/circle/${name}`" />
  </div>
</template>
<script setup lang="ts">
import circles from "../assets/data/circles.json";
</script>
<script lang="ts">
export default {
  name: "CircleTile",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.circle-tile {
  position: relative;
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  box-shadow: 0 0 10px #ccc;
  transition: 0.2s;

  a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: inherit;
    text-decoration: none;
  }
  &:hover {
    box-shadow: 0 0 10px #aaa;
  }

  img {
    display: block;
    width: 100%;
    aspect-ratio: 1;
    object-fit: contain;
  }
}
</style>
