<template>
  <div>
    <CircleHead name="ensemble" />
    <p class="indent">
      アンサンブル部は、総勢３４名でクラッシック、ポップスを演奏しています。音楽と展覧の会では、１２：００頃から講堂にてクラッシック曲を演奏し、１３：４０頃から合併教室にてポップスを中心に演奏するルームコンサートを開催いたします。
    </p>
    <p class="indent">
      甲陽学院において、講堂は、「儀式を行い、音楽鑑賞をする場」と考えられており、それに適した環境になっています。僕たちアンサンブル部は音楽のための場所に適した演奏をします。心を込めて繊細で優雅な演奏をし、作曲者の表現したい「時間的芸術」を表現してみせます。
    </p>
    <p class="indent">
      ルームコンサートでは、講堂のような音楽に適した場所ではなく、あえて普段授業で使っている合併教室で演奏します。これは、講堂での演奏とは違い、近い距離で音楽を楽しみながら聴いてほしい、という思いがあるからです。皆さんに楽しんでもらえるよう、僕たち演奏者も楽しむことを心掛けます。
    </p>
    <p class="indent">
      同じメンバーで演奏していても、講堂とルームコンサートでは全く違った顔を見せます。是非、僕たちの音楽を聴きに来て下さい！！
    </p>
    <h2>部誌</h2>
    <PDF src="/files/ensemble.pdf" />
  </div>
</template>
<script setup lang="ts">
import { definePageMeta, useHead } from "#imports";
import circles from "assets/data/circles.json";
useHead({
  title: circles["ensemble"].name,
  meta: [
    {
      hid: "og:title",
      property: "og:title",
      content: `宴Joy | ${circles["ensemble"].name}`,
    },
  ],
});
definePageMeta({
  layout: "simple-page",
});
</script>

<style lang="scss" scoped>
h2 {
  text-align: center;
}
</style>
