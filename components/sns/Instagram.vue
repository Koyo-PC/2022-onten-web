<template>
  <div>
    <a class="insta-link" :href="`https://www.instagram.com/${id}/`"
      ><img
        class="insta-image"
        src="~assets/image/sns/instagram.svg"
        alt="Instagram icon"
      /><span class="insta-link-text">{{ id }}</span></a
    >
  </div>
</template>

<script setup lang="ts"></script>
<script lang="ts">
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.insta-link {
  width: 180px;
  height: 90px;
  margin: 20px;
  @include mobile {
    margin: 20px auto;
  }
  text-align: center;
  display: flex;
  flex-direction: column;
  color: inherit;
  text-decoration: none;
  .insta-image {
    display: block;
    height: calc(100% - 24px);
    padding: 5px;
    filter: invert(100%);
  }
  .insta-link-text {
    font-size: 20px;
  }
}
</style>
