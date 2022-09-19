<template>
  <div>
    <a class="twitter-link" :href="`https://twitter.com/${id}/`"
      ><img
        class="twitter-image"
        src="~assets/image/sns/twitter.svg"
        alt="Twitter icon"
      /><span class="twitter-link-text">@{{ id }}</span></a
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
.twitter-link {
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
  .twitter-image {
    display: block;
    height: calc(100% - 24px);
    padding: 5px;
    filter: invert(100%);
  }
  .twitter-link-text {
    font-size: 20px;
  }
}
</style>
