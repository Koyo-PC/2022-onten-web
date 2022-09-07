<template>
  <div class="circle-tile">
    <img :src="`/img/circle/${name}/logo.png`" alt="" />
    {{ circles[name] }}
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
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  box-shadow: 0 0 10px #ccc;
  transition: 0.2s;
  &:hover {
    box-shadow: 0 0 10px #aaa;
  }
  img {
    display: block;
    width: 100%;
    aspect-ratio: 1;
    object-fit: contain;
  }
  background-color: red;
}
</style>
