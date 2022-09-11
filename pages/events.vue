<template>
  <div>
    <Header />
    <Footer />
  </div>
</template>
<script setup lang="ts">
import { useHead } from "#imports";

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
</script>
