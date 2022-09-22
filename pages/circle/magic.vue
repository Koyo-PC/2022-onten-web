<template>
  <div>
    <CircleHead name="magic" />
    <p>
      昨年、多くの人を熱狂の渦に巻き込んだ「マジックショー」が今年もやってくる！！！<br />
      目の前30㎝の距離で繰り広げられる超常現象の数々に、思わず息を呑んでしまうに違いない！！<br />
      日常生活に刺激が足りないそこのあなた！9人の甲陽生マジシャンによる不思議な世界にぜひお越しください！！
    </p>
    <p>
      <Instagram id="koyo.magic" />
      甲陽奇術同好会公式アカウントです！
      音展の最新情報はもちろん、日頃の活動の様子なども投稿してるので是非ご覧ください！
    </p>
    <p>
      <img
        class="poster"
        alt="マジック同好会ポスター"
        src="/img/circle/magic/poster.webp"
      />
    </p>
  </div>
</template>
<script setup lang="ts">
import { definePageMeta, useHead } from "#imports";
import circles from "assets/data/circles.json";
import Instagram from "~/components/sns/Instagram.vue";
useHead({
  title: circles["magic"].name,
  meta: [
    {
      hid: "og:title",
      property: "og:title",
      content: `宴Joy | ${circles["magic"].name}`,
    },
  ],
});
definePageMeta({
  layout: "simple-page",
});
</script>
<script lang="ts">
export default {
  name: "art",
};
</script>

<style lang="scss" scoped>
p {
  margin: 50px 0;
  .poster {
    height: 70vh;
  }
}
</style>
