<template>
  <div>
    <Loading :loaded="loaded" />
    <Header />
    <div id="container">
      <slot />
    </div>
    <Footer />
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "#imports";

const loaded = ref(false);

onMounted(() => {
  loaded.value = true;
});
</script>
<script lang="ts">
export default {
  name: "simple-page",
};
</script>

<style lang="scss" scoped>
#container {
  position: relative;
  padding: 50px 10%;
  font-weight: 400;
  overflow-x: hidden;
}
</style>
