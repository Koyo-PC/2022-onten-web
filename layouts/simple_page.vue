<template>
  <div>
    <Header />
    <div id="container">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
export default {
  name: "simple-page",
};
</script>

<style lang="scss" scoped>
#container {
  padding: 10px 10%;
  font-weight: 300;
}
</style>
