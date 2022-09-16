<template>
  <div>
    <CircleHead name="ice" />
    <p>
      1年B組では、かき氷を販売しています！<br />
      登山の後にキンキンに冷えたかき氷はいかがでしょうか！<br />
      おいしさも売上も1位を目指してアイコンはエベレストをモチーフにしています！
    </p>
    <p>
      画像はマンゴー味のものです。他にもいちご味とメロン味を販売します。お好みでソーダをかけてお召し上がりください！
    </p>
    <img src="/img/circle/ice/ice_1.webp" alt="かき氷写真1" width="50%" />
    <img src="/img/circle/ice/ice_2.webp" alt="かき氷写真2" width="50%" />
    <small
      >新型コロナウイルス感染予防対策のため、かき氷の盛り付けはセルフサービスとなっております。あらかじめご了承ください。</small
    >
  </div>
</template>
<script setup lang="ts">
import { definePageMeta, useHead } from "#imports";
import circles from "assets/data/circles.json";
useHead({
  title: circles["ice"].name,
  meta: [
    {
      hid: "og:title",
      property: "og:title",
      content: `宴Joy | ${circles["ice"].name}`,
    },
  ],
});
definePageMeta({
  layout: "simple-page",
});
</script>

<style lang="scss" scoped></style>
