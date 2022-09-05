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
          <div id="booth_container">
            <MapBooth
              v-for="booth in currentFloorBooth()"
              :key="booth"
              :data="booth"
            />
          </div>
        </div>
        <div id="floor_button">
          <button
            v-for="floor in 5"
            :key="floor"
            :id="`floor_button_${floor}`"
            @click="changeFloor(floor - 1)"
            @mouseover="onButtonHover"
            @mouseleave="onButtonLeave"
          >
            <span v-if="floor !== 5">南{{ floor }}F</span>
            <span v-if="floor !== 1 && floor !== 5">/</span>
            <span v-if="floor !== 1">北{{ floor - 1 }}F</span>
          </button>
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
import { gsap } from "gsap";

export default {
  mounted() {
    console.log("aaaas");
    console.log("aaaa");
    console.log(sass.compileString("$color: red;"));
  },
  data(this: NuxtConfig): Record<string, string[] | number> {
    return {
      floors: [...Array(5)].map((_, i) => `/img/map/${i + 1}.webp`),
      currentFloor: parseInt(this.$route.query.floor?.toString()) || 0,
    };
  },
  methods: {
    currentFloorBooth(this: { currentFloor: number }): Booth[] {
      // console.log(room);
      return booth.filter(
        (booth: Booth) => room[booth.room[0]].floor === this.currentFloor
      );
    },
    changeFloor(this: { currentFloor: number }, floor: number) {
      this.currentFloor = floor;
    },
    onButtonHover(event: MouseEvent) {
      gsap.to(event.target, {
        // backgroundColor: sass.compileString("mix($main-color, #fff, 50%)").css,
        duration: 0.5,
        ease: "power3.out",
      });
    },
    onButtonLeave(event: MouseEvent) {
      gsap.to(event.target, {
        backgroundColor: "transparent",
        duration: 0.5,
        ease: "power3.out",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
#map {
  //height: 100vh;
  &_image {
    position: relative;
    img {
      width: 100%;
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
  #floor_button {
    margin: 0 10%;
    width: 80%;
    height: 40px;
    button {
      width: calc(100% / 5);
      height: 100%;
      border: 1px solid $main-color;
      text-align: center;
    }
    button:nth-child(1) {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }
    button:not(:last-child) {
      border-right: none;
    }
    button:last-child {
      border-bottom-right-radius: 10px;
      border-top-right-radius: 10px;
    }
  }
}
</style>
