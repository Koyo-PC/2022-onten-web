<template>
  <div>
    <CircleHead name="concert" />
    <p>
      今年の音楽会は、例年通りの個人演奏に加えて、3年ぶりの合唱コンクールを行います。<br />
      合唱コンクールでは、皆が休み時間や放課後の時間を削って練習に励んだ成果をお聴きください。<br />
      また、個人演奏も、例年以上に倍率が高かった予選を勝ち抜いた生徒たちによる、とても聴きごたえのある演奏となること間違いありません。<br />
      さらに、その後にはグリー部による合唱とアンサンブル部による合奏までございますので、ぜひ最後までお聴きください。
    </p>
    <h2>プログラム</h2>
    <PDF src="/files/concert.pdf" />
  </div>
</template>
<script setup lang="ts">
import { definePageMeta, useHead } from "#imports";
import circles from "assets/data/circles.json";
import PdfEmbed from "~/components/PDF.vue";
useHead({
  title: circles["concert"].name,
  meta: [
    {
      hid: "og:title",
      property: "og:title",
      content: `宴Joy | ${circles["concert"].name}`,
    },
  ],
});
definePageMeta({
  layout: "simple-page",
});
</script>

<style lang="scss" scoped></style>
