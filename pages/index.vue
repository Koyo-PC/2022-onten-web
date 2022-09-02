<template>
  <div>
    <Header />
    <div id="container">
      <div id="main-logo">
        <img class="main-background-image" src="~assets/image/logo_back.png" alt="">
        <img class="main-logo-image" src="~assets/image/logo_black.png" alt="">
      </div>
    </div>
    <Footer />
  </div>
</template>
<style lang="scss" scoped>
#container {
  width: 100%;
  height: 90vh;
  background-color: $back-color-secondary;

  #main-logo {
    position: relative;
    max-height: 100%;
    aspect-ratio: 1;
    margin: 0 auto;

    .main-background-image {
      position: absolute;
      top: 0;
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .main-logo-image {
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      display: block;
      width: 90%;
      margin: 0 auto;
      object-fit: contain;
      transform: translateY(-50%);
      filter: invert(100%) drop-shadow(0 0 10px $back-color-primary);
    }
  }
}
</style>