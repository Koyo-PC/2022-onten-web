<template>
  <div id="access">
    <h1>アクセス</h1>
    <div id="access-container">
      <ul style="text-align: center">
        <li>阪急電鉄「甲陽園」駅下車、徒歩約20分</li>
        <li>阪急/阪神バス「柏堂町」駅下車、南へ徒歩約5分</li>
      </ul>
      <ul>
        <li>校内への車の乗り入れは全面禁止にしております</li>
        <li>
          学校周辺はすべて駐車禁止ですので、公共の交通機関をご利用ください
        </li>
        <li>
          例年、北山緑化植物園より「利用者が駐車できない」との苦情があります。植物園への駐車もご遠慮ください
        </li>
      </ul>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26227.604969780583!2d135.30494707561803!3d34.74423984707946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000f36ab1b8e56b%3A0x41b0ac08629de653!2z55Sy6Zm95a2m6Zmi6auY562J5a2m5qCh!5e0!3m2!1sja!2sjp!4v1662826217343!5m2!1sja!2sjp"
        width="800"
        height="600"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>
<script setup lang="ts">
import { definePageMeta, useHead } from "#imports";

useHead({
  title: "アクセス",
  meta: [
    {
      hid: "og:title",
      property: "og:title",
      content: "宴Joy | アクセス",
    },
  ],
});

definePageMeta({
  layout: "simple-page",
});
</script>
<style lang="scss" scoped>
#access {
  text-align: center;
  #access-container {
    display: inline-block;
    max-width: 90%;
    margin: 0 auto;
    iframe {
      display: block;
      max-width: 100%;
      max-height: 600px;
    }
    ul {
      text-align: left;
      padding: 30px 0;
    }
  }
}
</style>
