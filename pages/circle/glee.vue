<template>
  <div>
    <CircleHead name="glee" />
    <p>
      <span style="font-size: 2rem">グ</span>リー部です。<br />
      今年は昨年とは異なり、講堂で合唱ができる運びとなりました。 <br />
      僕たちの歌声を生演奏でお聞きください。
    </p>
    <p>場所: 講堂 開演: 12:20 ~ 12:45</p>
    <h2>～演目～</h2>
    <ul>
      <li>Bohemian Rhapsody</li>
      <li>こころようたえ</li>
      <li>なんでもないや</li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { definePageMeta, useHead } from "#imports";
import circles from "assets/data/circles.json";
useHead({
  title: circles["glee"].name,
  meta: [
    {
      hid: "og:title",
      property: "og:title",
      content: `宴Joy | ${circles["glee"].name}`,
    },
  ],
});
definePageMeta({
  layout: "simple-page",
});
</script>
<script lang="ts">
export default {
  name: "glee",
};
</script>

<style lang="scss" scoped></style>
