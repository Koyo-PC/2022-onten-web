<template>
  <div>
    <CircleHead name="literature" />
    <p>
      今年の文芸部は部誌展示だけじゃない！<br />
      小説にまつわるクイズ大会を実施します！<br />
      優勝者にはここでしか手に入らない素敵なプレゼントも！<br />
      さらに今回発行の部誌は音展公式ホームページに掲載される通常版と、図書室にて150部限定で頒布される来場者特典小説の二本立て！<br />
      「世界はペンで、出来ている」をキャッチフレーズに図書室にて活動中！<br />
      部員一同、お待ちしております！
    </p>
    <div id="doc">
      <h2>部誌(通常版)</h2>
      <PDF src="/files/literature.pdf" />
      <h2>部誌(来場者限定特典)</h2>
      <PDF src="/files/literature_2.pdf" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { definePageMeta, useHead } from "#imports";
import circles from "assets/data/circles.json";

useHead({
  title: circles["literature"].name,
  meta: [
    {
      hid: "og:title",
      property: "og:title",
      content: `宴Joy | ${circles["literature"].name}`,
    },
  ],
});
definePageMeta({
  layout: "simple-page",
});
</script>
<style lang="scss" scoped>
#menu {
  h2 {
    text-align: center;
  }
}
</style>
