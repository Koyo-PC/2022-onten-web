<template>
  <div>
    <CircleHead name="cafe" />
    <p>
      おかえりなさいませ、ご主人様・お嬢様。<br />
      本日限定オープンのメイド喫茶「Maid in Koyo」<br />
      他のメイド喫茶とは一味も二味も違う！<br />
      男茶女（おちゃめ）なメイドさん達が2-C教室であなたをお待ちしております。<br />
      是非来てください！
    </p>
    <div id="menu">
      <h2>メニュー</h2>
      <PDF src="/files/cafe.pdf" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { definePageMeta, useHead } from "#imports";
import circles from "assets/data/circles.json";

useHead({
  title: circles["cafe"].name,
  meta: [
    {
      hid: "og:title",
      property: "og:title",
      content: `宴Joy | ${circles["cafe"].name}`,
    },
  ],
});
definePageMeta({
  layout: "simple-page",
});
</script>
<script lang="ts">
export default {
  name: "cafe",
};
</script>
<style lang="scss" scoped>
#menu {
  h2 {
    text-align: center;
  }
}
</style>
