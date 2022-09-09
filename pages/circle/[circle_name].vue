<template>
  <div id="circle_root">
    <img id="circle_logo" :src="`/img/circle/${name}/logo.png`" alt="" />
    <h1 id="circle_title">{{ circles[name].name }}</h1>
    <p id="circle_description">{{ circles[name].description }}</p>
  </div>
</template>

<script setup lang="ts">
import { definePageMeta, useRoute } from "#imports";
import circles from "../../assets/data/circles.json";
import "../../assets/style/text.scss";

definePageMeta({
  layout: "simple-page",
});
const route = useRoute();
const name = route.params.circle_name;
</script>
<script lang="ts">
export default {
  name: "[circle_name].vue",
};
</script>

<style lang="scss" scoped>
#circle_root {
  #circle_logo {
    display: block;
    max-width: 300px;
    margin: 0 auto;
  }
  #circle_title {
    margin: 50px auto;
  }
  #circle_description {
    margin: 50px auto;
    white-space: pre-wrap;
  }
}
</style>
