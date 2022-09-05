<template>
  <footer>
    <img id="footer-logo" src="~assets/image/logo_black.png" alt="" />
    <div id="footer-title">第75回 音楽と展覧の会 &quot;宴Joy&quot;</div>
    <div id="sns-link">
      <a href=""><img src="" alt="" /></a>
    </div>
    <div id="footer-copyright">&copy;2022 甲陽PC同好会</div>
  </footer>
</template>

<script lang="ts">
export default {
  name: "Footer",
};
</script>

<style scoped lang="scss">
footer {
  position: relative;
  display: block;
  width: 100%;
  padding: 50px;
  background-color: #303030;
  color: #e2e2e2;

  #footer-logo {
    display: block;
    height: 200px;
    margin: 0 auto;
    filter: invert(100%);
  }

  #footer-title {
    margin: 15px;
    text-align: center;
  }

  #footer-copyright {
    margin: 15px;
    text-align: center;
    font-size: 12px;
  }
}
</style>
