<template>
  <div>
    <img class="circle-logo" :src="`/img/circle/${name}/logo.webp`" alt="" />
    <h1 class="circle-title">{{ circles[name].name }}</h1>
    <div class="circle-location" v-if="circles[name].room !== undefined">
      <span class="meta-title">開催場所:</span>
      <span class="meta-loc" v-text="circles[name].room.join('、')" />
      <a class="meta-button" :href="`/map?room=${circles[name].room[0]}`">
        マップ上で確認</a
      >
    </div>
  </div>
</template>
<script setup lang="ts">
import circles from "../assets/data/circles.json";
</script>
<script lang="ts">
export default {
  name: "CircleHead",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.circle-logo {
  display: block;
  max-width: 300px;
  margin: 0 auto;
}
.circle-title {
  margin: 50px auto;
}
.circle-location {
  display: flex;
  justify-content: center;
  align-items: center;

  .meta-title {
    display: block;
    margin-right: 10px;
    font-size: 1.2rem;
  }
  .meta-loc {
    display: block;
    margin-right: 40px;
    font-size: 1.5rem;
  }
  .meta-button {
    display: block;
    font-size: 1.2rem;
    color: unset;
    text-decoration: none;
    border: gray solid 2px;
    border-radius: 15px;
    padding: 10px;
  }
}
</style>
