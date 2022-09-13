<template>
  <footer>
    <img id="footer-logo" src="~assets/image/logo_black.webp" alt="" />
    <div id="footer-title">第75回 音楽と展覧の会 &quot;宴Joy&quot;</div>
    <div id="sns-link">
      <a class="sns-link-button" href="https://twitter.com/koyo_onten2022"
        ><img
          class="sns-link-image"
          src="~assets/image/sns/twitter.svg"
          alt="Twitter icon"
        /><span class="sns-link-text">@koyo_onten2022</span></a
      ><a
        class="sns-link-button"
        href="https://www.instagram.com/koyo.school.fes2022/"
        ><img
          class="sns-link-image"
          src="~assets/image/sns/instagram.svg"
          alt="Instagram icon"
        /><span class="sns-link-text">koyo.school.fes2022</span></a
      >
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

  #sns-link {
    display: flex;
    justify-content: center;
    .sns-link-button {
      width: 120px;
      height: 60px;
      text-align: center;
      display: flex;
      flex-direction: column;
      color: inherit;
      text-decoration: none;
      .sns-link-image {
        display: block;
        height: calc(100% - 14px);
        padding: 5px;
      }
      .sns-link-text {
        font-size: 12px;
      }
    }
  }

  #footer-copyright {
    margin: 15px;
    text-align: center;
    font-size: 12px;
  }
}
</style>
