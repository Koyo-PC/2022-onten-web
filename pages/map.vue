<template>
  <div>
    <h1>校内地図</h1>
    <div id="map">
      <div id="map_scroll">
        <div id="map_image">
          <img
            :src="floors[currentFloor]"
            :alt="`F${currentFloor + 1}の地図`"
          />
          <div id="booth_container">
            <MapBooth
              v-for="(circles, room) in getBoothList(currentFloor)"
              :id="`room_${circles.map((c) => c.name).join('_')}`"
              :key="room"
              :circles="circles"
              :room="room"
            />
          </div>
        </div>
      </div>
      <div id="floor_button">
        <button
          v-for="floor in 5"
          :key="floor"
          :id="`floor_button_${floor}`"
          @click="changeFloor(floor - 1)"
          @mouseover="onButtonHover(floor)"
          @mouseleave="onButtonLeave(floor)"
          :class="{ selected: currentFloor === floor - 1 }"
        >
          <span v-if="floor !== 5">南{{ floor }}F</span>
          <span v-if="floor !== 1 && floor !== 5">/</span>
          <span v-if="floor !== 1">北{{ floor - 1 }}F</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  definePageMeta,
  nextTick,
  onMounted,
  ref,
  useHead,
  useRoute,
  useRouter,
  watch,
} from "#imports";
import circles, { Circle } from "assets/data/circles.json";
import room, { Room } from "assets/data/room.json";
import { gsap } from "gsap";
import { onBeforeRouteUpdate } from "vue-router";
import { List } from "immutable";

const floors = [...Array(5)].map((_, i) => `/img/map/${i + 1}.webp`);

useHead({
  title: "校内マップ",
  meta: [
    {
      hid: "og:title",
      property: "og:title",
      content: "宴Joy | 校内マップ",
    },
  ],
  link: floors.map((img) => ({ rel: "preload", href: img, as: "image" })),
});

definePageMeta({
  layout: "simple-page",
});

const currentFloor = ref(parseInt(useRoute().query.floor?.toString() ?? "1"));

const getBoothList = (floor: number): Record<string, Circle[]> => {
  const currentFloorCircles = Object.values(circles).filter(
    (c: Circle) =>
      c.room != undefined && room[c.room[0]].floor === currentFloor.value
  );
  const currentFloorRooms = Object.keys(room).filter(
    (n) => room[n].floor === currentFloor.value
  );
  // const roomCircleMap: Record<string, string[]> = {};
  // currentFloorCircles.forEach((c: Circle) => {
  //   if (c.room != undefined) {
  //     if ((roomCircleMap[c.room[0]]?.length ?? 0) < 1) {
  //       roomCircleMap[c.room[0]] = [c.name];
  //     } else {
  //       roomCircleMap[c.room[0]].push(c.name);
  //     }
  //   }
  // });

  // circleMap : <roomname : CircleName[]>
  const circleMap: Record<string, Circle[]> = {};

  currentFloorRooms.forEach((n) => (circleMap[n] = []));

  // Object.keys(roomCircleMap).forEach((r: string) => {
  //   if (roomCircleMap[r].length > 0) {
  //     const cs = roomCircleMap[r].map(
  //       (c: string) => `<span style="display: inline-block;">${c}</span>`
  //     );
  //     if (circleRoomsMap[cs.join(", ")] == undefined) {
  //       circleRoomsMap[cs.join(", ")] = [r];
  //     } else {
  //       circleRoomsMap[cs.join(", ")]?.push(r);
  //     }
  //   }
  // });

  currentFloorCircles.forEach((c: Circle) => {
    c.room?.forEach((r: string) => {
      circleMap[r].push(c);
    });
  });

  return circleMap;
};

const changeFloor = (floor: number) => {
  // useRoute().query.floor = floor.toString();
  useRouter().push({
    query: { floor: floor.toString(), room: useRoute().query.room?.toString() },
  });
  currentFloor.value = floor;
};
const onButtonHover = (floor: number) => {
  gsap.to(`#floor_button_${floor}`, {
    // backgroundColor: sass.compileString("mix($main-color, #fff, 50%)").css,
    // backgroundColor: "var(--highlight-color)",
    backgroundColor: "#aaa",
    duration: 0.5,
    ease: "power3.out",
  });
};
const onButtonLeave = (floor: number) => {
  gsap.to(`#floor_button_${floor}`, {
    backgroundColor: "#aaaaaa00",
    duration: 0.5,
    ease: "power3.out",
  });
};

const lightRoom = (name: string, force = false) => {
  if (force && name) {
    currentFloor.value = room[name as string].floor;
  }
  nextTick(() => {
    for (const elem of document.getElementsByClassName("light")) {
      elem.classList.remove("light");
    }
    document.getElementById(`room_${name}`)?.classList.add("light");
  });
};

watch(
  () => useRoute().query.room,
  (name) => lightRoom(name?.toString() ?? "")
);

onMounted(() => {
  lightRoom(useRoute().query.room?.toString() ?? "", true);
  useRouter().afterEach((to) => {
    lightRoom(to.query.room?.toString() ?? "");
  });
});
// lightRoom(useRoute().query.room?.toString() ?? "");
</script>
<style lang="scss" scoped>
#map {
  margin: 0 -5vw;
  @include mobile {
    margin: 0 -20vw;
  }
  //height: 100vh;
  padding: 20px;
  &_scroll {
    overflow: auto;
    #map_image {
      position: relative;
      width: 100%;
      height: 100%;
      @include mobile {
        width: 200%;
      }
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
      @include mobile {
        font-size: 0.8rem;
      }
      &.selected {
        background-color: #000000 !important;
        color: #fff;
      }
    }
    button:not(:last-child) {
      border-right: none;
    }
  }
}
</style>
