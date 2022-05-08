<template>
  <footer>
    <span class="title">第N回 音楽と展覧の会</span>
    <span class="copyright">パソコン同好会</span>
  </footer>
</template>

<script lang="ts">
export default {
  name: "Footer",
};
</script>

<style scoped lang="scss">
footer {
  display: block;
  width: 100%;
  height: 50px;
  position: relative;

  .title {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  .copyright {
    display: block;
    padding: 5px;
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: 12px;
  }
}
</style>
