<template>
  <div>
    <div id="tiles">
      <CircleTile
        v-for="name in Object.keys(circles)"
        :key="name"
        :name="name"
      ></CircleTile>
    </div>
  </div>
</template>
<script setup lang="ts">
import { definePageMeta } from "#imports";
import circles from "../assets/data/circles.json";

definePageMeta({
  layout: "simple-page",
});
</script>

<style lang="scss" scoped>
#tiles {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 10px;
}
</style>
