<template>
  <div id="circle_root">
    <CircleHead :name="name" />
    <p id="circle_description">{{ circles[name].description }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed, definePageMeta, useHead, useRoute } from "#imports";
import circles from "../../assets/data/circles.json";
import "../../assets/style/text.scss";
import CircleHead from "~/components/CircleHead.vue";
const route = useRoute();
const name = route.params.circle_name as string;
useHead({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  title: circles[name].name,
  meta: [
    {
      hid: "og:title",
      property: "og:title",
      content: `宴Joy | ${circles[name].name}`,
    },
  ],
});
definePageMeta({
  layout: "simple-page",
});
</script>

<style lang="scss" scoped>
#circle_root {
  #circle_description {
    margin: 50px auto;
    white-space: pre-wrap;
  }
}
</style>
