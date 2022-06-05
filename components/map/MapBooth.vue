<template>
  <div
    class="map_link_cover"
    :style="getMapCoverStyle(data)"
    @click="clickBooth(data)"
  >
    <div class="map_link_room">{{ data.room.join(", ") }}</div>
    <div class="map_link_name" v-html="data.name"></div>
  </div>
</template>

<script lang="ts">
import room, { Room } from "@/assets/data/room.json";
import { Booth } from "@/assets/data/booth.json";
export default {
  name: "MapBooth",
  props: ["data"],
  methods: {
    getMapCoverStyle(data: Booth) {
      // console.log(data);
      const rooms: Room[] = [];
      data.room.forEach((roomName) => rooms.push(room[roomName]));
      const begin = rooms.reduce((room_a, room_b) =>
        room_a.loc[0] < room_b.loc[0] ? room_a : room_b
      ).loc[0];
      const end = rooms.reduce((room_a, room_b) =>
        room_a.loc[1] > room_b.loc[1] ? room_a : room_b
      ).loc[1];
      const building = rooms[0]["building"];
      const spread = rooms[0]["spread"] ?? false;
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
    },
    clickBooth(/* data: Booth */) {
      // ポリシーウィンドウ出してdescription書く
      // this.clickedBooth = data;
      // console.log(this.$refs.booth_window);
      // this.$refs.booth_window.open();
    },
  },
};
</script>

<style scoped lang="scss">
.map_link_cover {
  position: absolute;
  background-color: #ccffcc88;
  //display: grid;
  //place-content: center;
  //border: 1px solid #aaa;
  cursor: pointer;
  &:hover {
    background-color: #ccffcccc;
  }
  display: grid;
  place-content: center;
  div {
    text-align: center;
  }
  .map_link_name {
    //white-space: pre-wrap;
    line-height: 1.2;
    font-size: 0.75vw;
  }
  .map_link_room {
    position: absolute;
    padding: 3px 5px;
    overflow: hidden;
    font-size: 10px;
    top: 0;
    left: 0;
    border: 1px dashed #aaa;
    border-top: none;
    border-left: none;
  }
}
</style>
