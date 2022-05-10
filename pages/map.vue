<template>
  <div>
    <Header />
    <div class="container">
      <div id="map">
        <div id="map_image">
          <img
            :src="floors[currentFloor]"
            :alt="`F${currentFloor + 1}の地図`"
          />
        </div>
        <div id="booth_container">
          <MapBooth
            v-for="booth in currentFloorBooth()"
            :key="booth"
            :data="booth"
          />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script lang="ts">
import booth, { Booth } from "@/assets/data/booth.json";
import room from "@/assets/data/room.json";
import { NuxtConfig } from "nuxt";

export default {
  data(this: NuxtConfig): Record<string, string[] | number> {
    return {
      floors: [...Array(5)].map((_, i) => `/img/map/${i + 1}.webp`),
      currentFloor: parseInt(this.$route.query.floor?.toString()) || 0,
    };
  },
  methods: {
    currentFloorBooth(this: { currentFloor: number }): Booth[] {
      console.log(room);
      return booth.filter(
        (booth: Booth) => room[booth.room[0]].floor === this.currentFloor
      );
    },
  },
};
</script>
<style lang="scss" scoped>
#map {
  position: relative;
  //height: 100vh;
  &_image {
    img {
      width: 100%;
    }
  }
  #booth_container {
    position: absolute;
    top: 15%;
    bottom: 15%;
    left: 12.75%;
    right: 12.75%;
    //background-color: #f008;
  }
}
</style>
