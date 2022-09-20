<template>
  <div id="timetable">
    <h1>タイムライン</h1>
    <div>
      <div id="scroll-x">
        <div id="event-name-container">
          <h1
            :style="{
              width: `calc((100% - 60px) / ${Object.keys(events).length})`,
            }"
            v-for="name of Object.keys(events)"
            :key="name"
          >
            {{ name }}
          </h1>
        </div>
        <div
          id="scroll-y"
          :style="{ minWidth: 200 * Object.keys(events).length + 60 + 'px' }"
        >
          <div
            id="line-container"
            :style="{
              height: (endTime - startTime) * zoomrate + 'px',
            }"
          >
            <div
              class="timetable-line"
              v-for="t of [
                ...Array(Math.floor((endTime - startTime) / borderrate)).keys(),
              ]"
              :key="t"
              :style="{ top: t * borderrate * zoomrate + 'px' }"
            >
              <span
                style="float: left"
                v-text="getTimeStr(startTime + t * borderrate)"
              ></span
              ><span v-text="getTimeStr(startTime + t * borderrate)"></span
              ><span
                style="float: right"
                v-text="getTimeStr(startTime + t * borderrate)"
              ></span>
            </div>
          </div>
          <div id="events-container">
            <div
              class="event-timetable"
              :style="{
                width: `${100.0 / Object.keys(events).length}%`,
                height: (endTime - startTime) * zoomrate + 'px',
              }"
              v-for="(event, name) of events"
              :key="name"
            >
              <div
                class="timetable-event-note"
                v-for="data of event.events"
                :key="data.name"
                :style="{
                  top:
                    (getTime(data.time[0]) - startTime) * zoomrate + 1 + 'px',
                  height:
                    (getTime(data.time[1]) - getTime(data.time[0])) * zoomrate -
                    1 +
                    'px',
                }"
              >
                <span class="event-note-start">{{ data.time[0] }}〜</span>
                <span class="event-note-title">{{ data.name }}</span>
                <span class="event-note-end">〜{{ data.time[1] }}</span>
                <a
                  v-if="data.circle !== undefined"
                  :href="`/circle/${data.circle}`"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { definePageMeta, useHead } from "#imports";
import events from "../assets/data/events.json";

useHead({
  title: "タイムテーブル",
  meta: [
    {
      hid: "og:title",
      property: "og:title",
      content: "宴Joy | タイムテーブル",
    },
  ],
});

definePageMeta({
  layout: "simple-page",
});

const zoomrate = 5;
const borderrate = 30;

const getTime = (strTime: string) => {
  const [hour, minute] = strTime.split(":");
  return parseInt(hour) * 60 + parseInt(minute);
};
const startTime = getTime("9:00");
const endTime = getTime("15:30");
const getTimeStr = (time: number) => {
  const hour = Math.floor(time / 60);
  const minute = time % 60;
  return `${hour}:${String(minute).padStart(2, "0")}`;
};
</script>
<style lang="scss" scoped>
#scroll-x {
  display: inline-block;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  #event-name-container {
    display: flex;
    text-align: center;
    h1 {
      display: block;
      min-width: 200px;
      font-size: 1.25rem;
      &:first-child {
        margin-left: 30px;
      }
      &:last-child {
        margin-right: 30px;
      }
    }
  }
  #scroll-y {
    position: relative;
    overflow-y: auto;
    overflow-x: hidden;
    width: 100%;
    height: 60vh;
    padding: 0;
    #line-container {
      //position: relative;
      //top: 0;
      //left: 0;
      width: 100%;
      .timetable-line {
        position: absolute;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #5d5d5d;
        line-height: 20px;
        text-align: center;
      }
    }
    #events-container {
      position: absolute;
      top: 0;
      left: 30px;
      right: 30px;
      display: flex;
      .event-timetable {
        position: relative;
        min-width: 200px;

        .timetable-event-note {
          position: absolute;
          left: 5%;
          width: 90%;
          padding: 5px;
          background-color: #00dc82cc;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          backdrop-filter: blur(1px);
          .event-note-start {
            position: absolute;
            top: 0;
            left: 0;
            padding: 5px;
            font-size: 0.75rem;
          }
          .event-note-end {
            position: absolute;
            bottom: 0;
            right: 0;
            padding: 5px;
            font-size: 0.75rem;
          }
          a {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
          }
        }
      }
    }
  }
}
</style>
