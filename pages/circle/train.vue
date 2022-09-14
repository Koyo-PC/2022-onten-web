<template>
  <div>
    <CircleHead name="train" />
    <img id="train-thumb" src="/img/circle/train/DSC_0333.webp" alt="" />
    <h2>はじめに</h2>
    <p class="indent">
      本日は、甲陽学院高等学校音楽と展覧の会・鉄道同好会ウェブサイトにお越しいただき、ありがとうございます。<br />
      この鉄道同好会は、甲陽学院中学校の鉄道研究部を引き継ぐ形で、今年度新たに有志3人によって設立されました。<br />
      普段の活動は、鉄道車両や鉄道模型の研究、鉄道写真の撮影、部員による小旅行などです。部員が増えれば、ジオラマ作成も本格化させようと考えています。
    </p>
    <h2>展示内容</h2>
    <p>
      Nゲージレイアウト、鉄道写真、模造紙展示などを行っています。<br />
      レイアウトでは、部員たちが持っている車両が走る予定です。<br />
      是非、3-A教室までお越しください！
    </p>
    <h2>フォトギャラリー</h2>
    <div id="train-photos">
      <div>
        <img
          v-for="i in Math.ceil(images.length / 2)"
          :key="i"
          :src="`/img/circle/train/${images[2 * i]}`"
          alt=""
        />
      </div>
      <div>
        <img
          v-for="i in Math.floor(images.length / 2)"
          :key="i"
          :src="`/img/circle/train/${images[2 * i + 1]}`"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { definePageMeta, useHead } from "#imports";
import circles from "assets/data/circles.json";
useHead({
  title: circles["train"].name,
  meta: [
    {
      hid: "og:title",
      property: "og:title",
      content: `宴Joy | ${circles["train"].name}`,
    },
  ],
});
definePageMeta({
  layout: "simple-page",
});

const images = [
  "1662499694522.webp",
  "1662499694590.webp",
  "1662721512803.webp",
  "1662624359000.webp",
  "1662499694590.webp",
  "1662721521354.webp",
  "1662624359770.webp",
  "1662499693727.webp",
  "DSC_0925.webp",
  "DSC_1277.webp",
  "DSC_0508.webp",
  "DSC_0145.webp",
  "1662499694280.webp",
  "1662499694058.webp",
  "DIAGONAL_0001_BURST20220823131655495_COVER.webp",
  "DSC_0528.webp",
  "FVnL_5zaQAAnimJ.webp",
  "37e64350-e6da-417a-9841-5f8f60a165c7.webp",
  "3214a562-f9b4-4fbe-b345-c841508076ba_.webp",
];
</script>
<script lang="ts">
export default {
  name: "train",
};
</script>

<style lang="scss" scoped>
#train-thumb {
  display: block;
  width: 80%;
  margin: 0 auto;
}

h2 {
  text-decoration: underline;
}

#train-photos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;

  div {
    width: calc(100% / 2 - 20px);
    img {
      width: 100%;
      margin-bottom: 10px;
    }
  }
}
</style>
