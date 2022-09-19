<template>
  <div class="pdf">
    <iframe
      id="pdf-content"
      :src="`/lib/pdfjs-2.16.105-dist/web/viewer.html?file=${src}&zoom=page-fit`"
    />
  </div>
</template>
<script setup lang="ts"></script>

<script lang="ts">
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.pdf {
  position: relative;
  height: 60vh;
  aspect-ratio: calc(1 / math.sqrt(2));
  margin: 0 auto;
  #pdf-content {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
