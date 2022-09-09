<template>
  <div>
    <CircleHead name="art" />
    <p>
      美術部です。<br />
      特別教室棟の3階突き当りの美術室にてこの1年で制作した作品を展示しています。<br />
      今年は部員の増加に伴って例年よりも作品の多様性が増しました。<br />
      胸を張って展示できるよう修正に修正を重ねた作品も多くありますので、<br />
      少しでも興味を引いたら、一度でいいので是非、是非見に来てください。
    </p>
    <a
      href="https://docs.google.com/forms/d/1s5CFZXzcqSmz6HUBwGHwNbPwDDRjim8XMGC9vg0pm_A/"
      >１－C安井の作品に関する投票ページ</a
    >
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
  name: "art",
};
</script>

<style lang="scss" scoped></style>
