<template>
  <div id="circle_root">
    <CircleHead :name="name" />
    <p id="circle_description">{{ circles[name].description }}</p>
  </div>
</template>

<script setup lang="ts">
import { definePageMeta, useRoute } from "#imports";
import circles from "../../assets/data/circles.json";
import "../../assets/style/text.scss";
import CircleHead from "~/components/CircleHead.vue";

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
  #circle_description {
    margin: 50px auto;
    white-space: pre-wrap;
  }
}
</style>
