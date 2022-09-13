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
      <div class="pdf">
        <embed
          id="menu-content"
          src="/files/cafe.pdf#toolbar=0&navpanes=0&scrollbar=0"
          type="application/pdf"
          top-toolbar-height="0"
          frameBorder="0"
        />
        <a href="/files/cafe.pdf"></a>
      </div>
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
  .pdf {
    position: relative;
    height: 60vh;
    aspect-ratio: calc(1 / math.sqrt(2));
    margin: 0 auto;
    #menu-content {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    a {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
