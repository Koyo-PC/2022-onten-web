<template>
  <div id="timeline">
    <h1>タイムライン</h1>
    <div>
      <div id="timeline-line-container">
        <div
          class="timeline-line"
          v-for="t of [...Array((endTime - startTime) / borderrate).keys()]"
          :key="t"
          :style="{ top: t * borderrate * zoomrate + 'px' }"
        >
          {{ Math.floor((startTime + t * borderrate) / 60) }}:{{
            ((startTime + t * borderrate) % 60).toString().padStart(2, "0")
          }}
        </div>
      </div>
      <div id="timeline-scroll-x">
        <div
          id="timeline-container"
          :style="{ height: (endTime - startTime) * zoomrate + 'px' }"
        >
          <div
            class="timeline-event"
            :style="{ width: 100.0 / Object.keys(events).length + '%' }"
            v-for="(event, name) of events"
            :key="name"
          >
            <h1>{{ name }}</h1>

            <div
              class="timeline-event-note"
              v-for="data of event"
              :key="data.name"
              :style="{
                top: (getTime(data.time[0]) - startTime) * zoomrate + 'px',
                height:
                  (getTime(data.time[1]) - getTime(data.time[0])) * zoomrate +
                  'px',
              }"
            >
              <span>{{ data.name }}</span>
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
  title: "タイムライン",
  meta: [
    {
      hid: "og:title",
      property: "og:title",
      content: "宴Joy | タイムライン",
    },
  ],
});

definePageMeta({
  layout: "simple-page",
});

const zoomrate = 5;
const borderrate = 15;

const getTime = (strTime: string) => {
  const [hour, minute] = strTime.split(":");
  return parseInt(hour) * 60 + parseInt(minute);
};

const startTime = getTime("9:00");
const endTime = getTime("15:30");
</script>
<style lang="scss" scoped>
#timeline {
  position: relative;
  div {
    position: relative;
    #timeline-line-container {
      position: absolute;
      top: 200px;
      left: 0;
      width: 100%;
      .timeline-line {
        position: absolute;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: black;
        line-height: 20px;
      }
    }
    #timeline-scroll-x {
      position: relative;
      overflow-x: scroll;
      overflow-y: hidden;
      top: 100px;
      width: 100%;
      height: 60vh;
      #timeline-container {
        position: relative;
        display: flex;
        margin-top: 100px;

        .timeline-event {
          position: relative;
          text-align: center;
          min-width: 200px;
          height: 100%;
          h1 {
            top: -200px;
            margin-top: -50px;
            font-size: 1.25rem;
            z-index: 1000000000000;
          }
          .timeline-event-note {
            position: absolute;
            left: 25%;
            width: 50%;
            background-color: #00dc82;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
  }
}
</style>
