<template>
  <div>
    <CircleHead name="physics" />
    <p>
      「いかにして」ということに関する困難な問いから逃れるために、「神」を持ち出すのは、間違いなく知的な怠惰に過ぎない。<br />
      ―ローレンス・クラウス（理論物理学者）
    </p>
    <h2>公式Twitter</h2>
    <Twitter id="koyophysics" />
    <div id="doc">
      <h2>2022年度 部誌</h2>
      <PDF src="/files/physics.pdf" />
      <h2>2022年度 部誌 オンライン限定盤</h2>
      <PDF src="/files/physics_2.pdf" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { definePageMeta, useHead } from "#imports";
import circles from "assets/data/circles.json";
import Twitter from "~/components/sns/Twitter.vue";

useHead({
  title: circles["physics"].name,
  meta: [
    {
      hid: "og:title",
      property: "og:title",
      content: `宴Joy | ${circles["physics"].name}`,
    },
  ],
});
definePageMeta({
  layout: "simple-page",
});
</script>
