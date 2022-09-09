<template>
  <div>
    <Header />
    <div id="container">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
export default {
  name: "simple-page",
};
</script>

<style lang="scss" scoped>
#container {
  padding: 10px 10%;
  font-weight: 400;
}
</style>
<style lang="scss">
h1 {
  margin: 10px 0;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
}

h2 {
  margin: 20px 0 10px;
}

p {
  margin: 10px 0;

  &.center {
    text-align: center;
  }

  strong {
    font-size: 1.5rem;
    font-weight: 500;
  }
}

img {
  &.center {
    display: block;
    margin: 0 auto;
  }
}

table {
  width: 100%;
  margin: 10px 0;

  td {
    padding: 5px 0;
  }
}

b {
  font-weight: 500;
}
</style>
