<template>
  <div>
    <h1>COMING SOON...</h1>
    <a id="to-top" href="/">トップページへ</a>
  </div>
</template>
<script setup lang="ts">
import { definePageMeta, useHead } from "#imports";

useHead({
  title: "イベント",
  meta: [
    {
      hid: "og:title",
      property: "og:title",
      content: "宴Joy | イベント",
    },
  ],
});

definePageMeta({
  layout: "simple-page",
});
</script>
<style lang="scss" scoped>
#to-top {
  display: block;
  width: 300px;
  margin: 100px auto;
  padding: 20px;
  background-color: #303030;
  text-align: center;
  font-size: 1.5rem;
  color: #fff;
  text-decoration: none;
}
</style>
