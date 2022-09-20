<template>
  <div>
    <CircleHead name="band" />
    <p>
      今年は3年振りにバンドの生演奏が学校に帰ってきました！<br />
      さらに今年は事前オーディションを行い、数十年振りに講堂で演奏します！<br />
      熱い音楽を見逃すな！ぜひお越しください！
    </p>
    <Instagram id="koyo.keion" />
    <span>↑ 最新情報、バンド紹介動画等を配信中です！</span>
    <h2>【講堂出演バンド バンド紹介】</h2>
    <ul id="band-list">
      <li>
        <span class="band-name">セントラルドグマ</span>
        We are the rock.<br />
        (Vo. 藤本悠辰 Gt. 宮田瑛太 Ba. 津坂拓輝 Dr. 山田真輝 Key. 福本開)
      </li>
      <li>
        <span class="band-name">The philosopher`s stones</span>
        魂のrock 'n' rollをあなたに...<br />
        (Vo&Gt. 佐田一真 Gt. 竹澤友真 Ba. 田中康太郎 Dr. 木本裕也 Ch. 原英貴)
      </li>
      <li>
        <span class="band-name">The silent picus</span>
        Good music must be an innovation.<br />
        (Vo&Gt. 原英貴 Gt. 玉川稜 Gt. 佐田一真 Ba&Vo. 新堂源太 Dr. 大塚楓月 Key.
        岡本健伸)
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { definePageMeta, useHead } from "#imports";
import circles from "assets/data/circles.json";
import Instagram from "~/components/sns/Instagram.vue";
useHead({
  title: circles["band"].name,
  meta: [
    {
      hid: "og:title",
      property: "og:title",
      content: `宴Joy | ${circles["band"].name}`,
    },
  ],
});
definePageMeta({
  layout: "simple-page",
});
</script>
<script lang="ts">
export default {
  name: "band",
};
</script>

<style lang="scss" scoped>
#band-list {
  margin-top: 20px;
  padding-left: 20px;
  li {
    margin: 20px 0;
    .band-name {
      display: block;
      margin-bottom: 10px;
      font-size: 1.2rem;
      font-weight: 700;
    }
  }
}
</style>
