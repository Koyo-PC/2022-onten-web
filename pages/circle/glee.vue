<template>
  <div>
    <CircleHead name="glee" />
    <p>
      <span style="font-size: 2rem">グ</span>リー部です。<br />
      今年は昨年とは異なり、講堂で合唱ができる運びとなりました。 <br />
      僕たちの歌声を生演奏でお聞きください。
    </p>
    <p>場所: 講堂 開演:</p>
    <h2>～演目～</h2>
    <ul>
      <li>こころようたえ</li>
      <li>Bohemian Rhapsody</li>
      <li>なんでもないや</li>
    </ul>
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
  name: "glee",
};
</script>

<style lang="scss" scoped></style>
