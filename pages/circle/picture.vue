<template>
  <div>
    <CircleHead name="picture" />
    <div id="pic-club-img">
      <img src="/img/circle/picture/img_1.webp" alt="" />
      <img src="/img/circle/picture/img_2.webp" alt="" />
    </div>
    <p id="pic-club-text">
      「ねえねえ❗️<br />
      お嬢ちゃん、お坊ちゃん、写真部来てよ〜❗️<br />
      何があるの❓って、️<br />
      それは来てからの️<br />
      お・た・の・し・み♪(´ε｀ )️<br />
      ドキドキさせちゃう、ヨ❗️」️<br />
    </p>
  </div>
</template>
<script setup lang="ts">
import { definePageMeta, useHead } from "#imports";
import circles from "assets/data/circles.json";
useHead({
  title: circles["picture"].name,
  meta: [
    {
      hid: "og:title",
      property: "og:title",
      content: `宴Joy | ${circles["picture"].name}`,
    },
  ],
});
definePageMeta({
  layout: "simple-page",
});
</script>
<script lang="ts">
export default {
  name: "picture",
};
</script>

<style lang="scss" scoped>
#pic-club-img {
  display: flex;
  gap: 10px;
  img {
    width: calc(50% - 5px);
  }
}
#pic-club-text {
  font-size: 1.5rem;
  line-height: 3rem;
  text-align: center;
}
</style>
