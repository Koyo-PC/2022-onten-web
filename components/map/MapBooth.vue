<template>
  <div
    class="map_link_cover"
    :style="getMapCoverStyle(room, circles)"
    @click="clickBooth(circles)"
  >
    <div class="map_link_room" :style="getRoomNameStyle(room, circles)">
      {{ room }}
    </div>
    <div
      v-if="isVisible(room, circles)"
      class="map_link_name"
      v-html="circles.map((c) => c.name).join(', ')"
    ></div>
  </div>
</template>

<script setup lang="ts">
import roomList, { Room } from "assets/data/room.json";
import { Circle } from "assets/data/circles.json";

const getMapCoverStyle = (room: string, circles: Circle[]) => {
  const defaultCircle = circles[0];
  const defaultRoom = defaultCircle.room?.[0];
  if (defaultRoom == undefined) return;

  if (!circles.some((circle) => circle.room?.[0] === room)) {
    const begin = roomList[room].loc[0];
    const end = roomList[room].loc[1];
    const building = roomList[defaultRoom]["building"];
    const spread = roomList[defaultRoom]["spread"] ?? false;
    return {
      top: building === 0 ? 0 : null,
      bottom: building === 1 ? (spread ? "0" : "5%") : null,
      left: `${begin * (100.0 / 17)}%`,
      width: `${(end - begin) * (100.0 / 17)}%`,
      height: spread ? "21%" : "16%",
      backgroundColor: "transparent",
    };
  }

  const begin = defaultCircle.room
    ?.map((s) => roomList[s])
    .reduce((room_a, room_b) =>
      room_a.loc[0] < room_b.loc[0] ? room_a : room_b
    ).loc[0];
  const end = defaultCircle.room
    ?.map((s) => roomList[s])
    .reduce((room_a, room_b) =>
      room_a.loc[1] > room_b.loc[1] ? room_a : room_b
    ).loc[1];
  const building = roomList[defaultRoom]["building"];
  const spread = roomList[defaultRoom]["spread"] ?? false;
  // if (this.isLandscape) {
  return {
    top: building === 0 ? 0 : null,
    bottom: building === 1 ? (spread ? "0" : "5%") : null,
    left: `${begin * (100.0 / 17)}%`,
    width: `${(end - begin) * (100.0 / 17)}%`,
    height: spread ? "21%" : "16%",
  };
};
const getRoomNameStyle = (room: string, circles: Circle[]) => {
  const defaultCircle = circles[0];
  const defaultRoom = defaultCircle.room?.[0];
  if (defaultRoom == undefined) return;

  const circle_begin = defaultCircle.room
    ?.map((s) => roomList[s])
    .reduce((room_a, room_b) =>
      room_a.loc[0] < room_b.loc[0] ? room_a : room_b
    ).loc[0];
  const circle_end = defaultCircle.room
    ?.map((s) => roomList[s])
    .reduce((room_a, room_b) =>
      room_a.loc[1] > room_b.loc[1] ? room_a : room_b
    ).loc[1];
  const circle_length = circle_end - circle_begin;
  const room_begin = roomList[room].loc[0];
  return {
    left: `${(room_begin - circle_begin) * (100.0 / circle_length)}%`,
  };
};
const isVisible = (room: string, circles: Circle[]) => {
  const defaultCircle = circles[0];
  const defaultRoom = defaultCircle.room?.[0];
  if (defaultRoom == undefined) return false;

  return circles.some((circle) => circle.room?.[0] === room);
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
  props: ["circles", "room"],
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
  &.light {
    background-color: #4008;
  }
  div {
    text-align: center;
  }
  .map_link_name {
    //white-space: pre-wrap;
    line-height: 1.2;
    font-size: 10px;
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
