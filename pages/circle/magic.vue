<template>
  <div>
    <CircleHead name="magic" />
    <p>
      昨年、多くの人を熱狂の渦に巻き込んだ「マジックショー」が今年もやってくる！！！<br />
      目の前30㎝の距離で繰り広げられる超常現象の数々に、思わず息を呑んでしまうに違いない！！<br />
      日常生活に刺激が足りないそこのあなた！9人の甲陽生マジシャンによる不思議な世界にぜひお越しください！！
    </p>
    <p>
      <a class="insta-link" href="https://www.instagram.com/koyo.magic/"
        ><img
          class="insta-image"
          src="~assets/image/sns/instagram.svg"
          alt="Instagram icon"
        /><span class="insta-link-text">koyo.magic</span></a
      >
      甲陽奇術同好会公式アカウントです！
      音展の最新情報はもちろん、日頃の活動の様子なども投稿してるので是非ご覧ください！
    </p>
  </div>
</template>
<script setup lang="ts">
import { definePageMeta, useHead } from "#imports";
import circles from "assets/data/circles.json";
useHead({
  title: circles["magic"].name,
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
}
.insta-link {
  width: 180px;
  height: 90px;
  margin: 20px auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  color: inherit;
  text-decoration: none;
  .insta-image {
    display: block;
    height: calc(100% - 24px);
    padding: 5px;
    filter: invert(100%);
  }
  .insta-link-text {
    font-size: 20px;
  }
}
</style>
