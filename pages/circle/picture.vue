<template>
  <div>
    <CircleHead name="picture" />
    <div id="pic-club-img">
      <img src="/img/circle/picture/img_1.jpeg" alt="" />
      <img src="/img/circle/picture/img_2.jpeg" alt="" />
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
import { definePageMeta } from "#imports";

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
