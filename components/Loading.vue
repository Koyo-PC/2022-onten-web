<template>
  <div id="loading" :class="loaded ? ['loaded'] : null">
    <img alt="" src="~assets/image/logo_black.webp" />
    <div class="spinner"></div>
  </div>
</template>

<script>
export default {
  props: ["loaded"],
};
</script>

<style lang="scss" scoped>
#loading {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 0s;
  background-color: floralwhite;
  overflow: hidden;
  z-index: 9999;

  img {
    position: absolute;
    width: 100vmin;
    height: 100vmin;
    top: calc(50vh - 50vmin);
    left: calc(50vw - 50vmin);
    object-fit: contain;
    .spinner {
      width: 100vmin;
      height: 100vmin;
      margin: calc(50vh - 50vmin) calc(50vw - 50vmin);
      background-color: #fff;
      border-radius: 100%;
      animation: sk-scaleout 1s infinite ease-in-out;
      @keyframes sk-scaleout {
        0% {
          transform: scale(0);
        }
        100% {
          transform: scale(1);
          opacity: 0;
        }
      }
    }
  }

  &.loaded {
    opacity: 0;
    visibility: hidden;
    transition: all 1s;
  }
}
</style>
