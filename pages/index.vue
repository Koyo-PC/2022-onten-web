<template>
  <div>
    <Header />
    <div id="container">
      <div id="top">
        <div id="top-title">第75回 音楽と展覧の会</div>
        <div id="top-logo">
          <img
            id="top-background-image"
            src="~assets/image/logo_back.png"
            alt=""
          />
          <img id="top-logo-image" src="~assets/image/logo_black.png" alt="" />
        </div>
      </div>
      <div id="info">
        <div id="date">9.23</div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<style lang="scss" scoped>
#container {
  width: 100%;
  //height: 90vh;
  $stripe-width: 30px;
  $stripe-color-fore: lighten($back-color-primary, 20);
  $stripe-color-back: lighten($back-color-secondary, 10);
  background-color: $stripe-color-back;
  background-image: repeating-linear-gradient(
    -45deg,
    $stripe-color-fore,
    $stripe-color-fore $stripe-width,
    transparent 0,
    transparent $stripe-width * 2
  );

  #top {
    position: relative;
    max-height: 90vh;
    aspect-ratio: 1;
    margin: 0 auto;

    $title-height: 100px;

    #top-title {
      width: 85%;
      height: $title-height;
      margin: 0 auto;
      padding: 10px;
      font-size: min(5vw, 70px);
      @include mobile {
        font-size: 7vw;
      }
      line-height: $title-height;
      font-weight: bold;
      color: #fff;
      text-align: justify;
      text-align-last: justify;
      text-justify: inter-ideograph;
      white-space: nowrap;
    }

    #top-background-image {
      position: absolute;
      top: $title-height;
      display: block;
      width: 100%;
      height: calc(100% - $title-height);
      object-fit: contain;
    }

    #top-logo-image {
      position: absolute;
      top: calc((100% + $title-height) / 2);
      left: 0;
      right: 0;
      display: block;
      width: 90%;
      margin: 0 auto;
      object-fit: contain;
      transform: translateY(-50%);
      filter: invert(100%) drop-shadow(0 0 10px $back-color-secondary);
    }
  }

  #info {
    #date {
      text-align: center;
      font-size: 250px;
      @include mobile {
        font-size: 100px;
      }
      color: #fff;
    }
  }
}
</style>
