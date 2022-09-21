<template>
  <div class="pdf">
    <iframe
      id="pdf-content"
      :src="`/lib/pdfjs-2.16.105-dist/web/viewer.html?file=${src}&zoom=page-fit`"
    />
    <a class="pdf-download" :href="src" download>ダウンロード</a>
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
  width: 100%;
  height: 60vh;
  #pdf-content {
    width: 100%;
    height: calc(100% - 40px);
    object-fit: contain;
  }
  .pdf-download {
    display: block;
    width: 10em;
    height: 40px;
    color: black;
    text-align: center;
    background-color: #e5e5e5;
    padding: 10px;
    margin: 10px auto;
    text-decoration: none;
  }
}
</style>
