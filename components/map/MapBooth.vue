<template>
  <div
    class="map_link_cover"
    :style="getMapCoverStyle(rooms)"
    @click="clickBooth(circle)"
  >
    <div class="map_link_room">{{ rooms.join(",") }}</div>
    <div class="map_link_name" v-html="circle"></div>
  </div>
</template>

<script setup lang="ts">
import roomList, { Room } from "assets/data/room.json";

const getMapCoverStyle = (rooms: string[]) => {
  const begin = rooms
    .map((s) => roomList[s])
    .reduce((room_a, room_b) =>
      room_a.loc[0] < room_b.loc[0] ? room_a : room_b
    ).loc[0];
  const end = rooms
    .map((s) => roomList[s])
    .reduce((room_a, room_b) =>
      room_a.loc[1] > room_b.loc[1] ? room_a : room_b
    ).loc[1];
  const building = roomList[rooms[0]]["building"];
  const spread = roomList[rooms[0]]["spread"] ?? false;
  // if (this.isLandscape) {
  return {
    top: building === 0 ? 0 : null,
    bottom: building === 1 ? (spread ? "0" : "5%") : null,
    left: `${begin * (100.0 / 17)}%`,
    width: `${(end - begin) * (100.0 / 17)}%`,
    height: spread ? "21%" : "16%",
  };
  // } else {
  // return {
  //   right: building === 0 ? "0" : null,
  //   left: building === 1 ? (spread ? "0" : "4.6%") : null,
  //   top: `${begin * (100.0 / 17)}%`,
  //   height: `${(end - begin) * (100.0 / 17)}%`,
  //   width: spread ? "21%" : "16.25%",
  // };
  // }
};
const clickBooth = (circle: string) => {
  // ポリシーウィンドウ出してdescription書く
  // this.clickedBooth = data;
  // console.log(this.$refs.booth_window);
  // this.$refs.booth_window.open();
};
</script>
<script lang="ts">
export default {
  props: ["circle", "rooms"],
};
</script>

<style scoped lang="scss">
.map_link_cover {
  position: absolute;
  background-color: #000b;
  //display: grid;
  //place-content: center;
  //border: 1px solid #aaa;
  cursor: pointer;
  &:hover {
    background-color: #0008;
  }
  display: grid;
  place-content: center;
  color: #e2e2e2;
  div {
    text-align: center;
  }
  .map_link_name {
    //white-space: pre-wrap;
    line-height: 1.2;
    font-size: 0.75vw;
    word-wrap: break-word;
  }
  .map_link_room {
    position: absolute;
    padding: 5px 8px;
    overflow: hidden;
    font-size: 10px;
    top: 0;
    left: 0;
    //border: 1px dashed #aaa;
    border-top: none;
    border-left: none;
  }
}
</style>
