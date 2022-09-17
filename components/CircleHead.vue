<template>
  <div>
    <img id="circle_logo" :src="`/img/circle/${name}/logo.webp`" alt="" />
    <h1 id="circle_title">{{ circles[name].name }}</h1>
    <span v-if="circles[name].room !== undefined">
      開催場所: {{ circles[name].room[0] }}
      <a :href="`/map?room=${circles[name].room[0]}`"> マップ上で確認</a>
    </span>
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
#circle_logo {
  display: block;
  max-width: 300px;
  margin: 0 auto;
}
#circle_title {
  margin: 50px auto;
}
</style>
