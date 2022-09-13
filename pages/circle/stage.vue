<template>
  <div>
    <CircleHead name="stage" />
    <p>
      ダンスや弾き語り､マジックなど様々なパフォーマンスを楽しめます。<br />
      中でも史上最多の22人の候補者から7人に絞られたミスコンには注目です。<br />
      午後の音展を盛り上げますので是非ご覧ください!!
    </p>
    <h2>Ms.コンテスト 出場者</h2>
    <ul>
      <li>山本</li>
      <li>宇野</li>
      <li>石本</li>
      <li>森司</li>
      <li>原田</li>
      <li>田畑</li>
      <li>佐野</li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { definePageMeta, useHead } from "#imports";
import circles from "assets/data/circles.json";
useHead({
  title: circles["stage"].name,
  meta: [
    {
      hid: "og:title",
      property: "og:title",
      content: `宴Joy | ${circles["stage"].name}`,
    },
  ],
});
definePageMeta({
  layout: "simple-page",
});
</script>
<script lang="ts">
export default {
  name: "stage",
};
</script>

<style lang="scss" scoped></style>
