<template>
  <div>
    <CircleHead name="splatoon" />
    <span style="font-size: 1.5rem; font-weight: 700"
      >皆さんこんにちは甲陽スプラ同好会です。</span
    >
    <p>
      この同好会では、人気ゲーム「スプラトゥーン」シリーズの歴史や魅力について、ゲームをやり込んだメンバーが色んな展示を行っています。<br />
      スプラトゥーンをよく知る人はもちろん、全く知らないという人でも結構楽しめると思いますので、是非立ち寄ってみてください。
    </p>
    <img class="spla-head-img" src="/files/splatoon.pdf" alt="" />
  </div>
</template>
<script setup lang="ts">
import { definePageMeta, useHead } from "#imports";
import circles from "assets/data/circles.json";
useHead({
  title: circles["splatoon"].name,
  meta: [
    {
      hid: "og:title",
      property: "og:title",
      content: `宴Joy | ${circles["splatoon"].name}`,
    },
  ],
});
definePageMeta({
  layout: "simple-page",
});
</script>
<script lang="ts">
export default {
  name: "splatoon",
};
</script>

<style lang="scss" scoped>
.spla-head-img {
  display: block;
  width: 80%;
  margin: 50px auto;
}
</style>
