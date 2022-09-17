<template>
  <div id="timeline">
    <h1>タイムライン</h1>
    <div>
      <div id="scroll-x">
        <div id="event-name-container">
          <h1
            :style="{ width: 100.0 / Object.keys(events).length + '%' }"
            v-for="(event, name) of events"
            :key="name"
          >
            {{ name }}
          </h1>
        </div>
        <div
          id="scroll-y"
          :style="{ minWidth: 200 * Object.keys(events).length + 'px' }"
        >
          <div
            id="line-container"
            :style="{
              height: (endTime - startTime) * zoomrate + 'px',
            }"
          >
            <div
              class="timeline-line"
              v-for="t of [
                ...Array(Math.floor((endTime - startTime) / borderrate)).keys(),
              ]"
              :key="t"
              :style="{ top: t * borderrate * zoomrate + 'px' }"
            ></div>
          </div>
          <div id="events-container">
            <div
              class="event-timeline"
              :style="{
                width: 100.0 / Object.keys(events).length + '%',
                height: (endTime - startTime) * zoomrate + 'px',
              }"
              v-for="(event, name) of events"
              :key="name"
            >
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
                <span class="event-note-start">{{ data.time[0] }}〜</span>
                <span class="event-note-title">{{ data.name }}</span>
                <span class="event-note-end">〜{{ data.time[1] }}</span>
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
/*
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
      //overflow-y: visible;
      top: 100px;
      width: 100%;
      height: 60vh;
      #timeline-event-name-container {
        display: flex;
        text-align: center;
        h1 {
          display: block;
          min-width: 200px;
          font-size: 1.25rem;
          z-index: 1000000000000;
        }
      }
      #timeline-container {
        overflow-y: scroll;
        .event-timeline {
          position: relative;
          display: flex;
          margin-top: 100px;
          min-width: 200px;

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
 */
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
      .timeline-line {
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
      left: 0;
      right: 0;
      display: flex;
      .event-timeline {
        position: relative;
        min-width: 200px;

        .timeline-event-note {
          position: absolute;
          left: 25%;
          width: 50%;
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
        }
      }
    }
  }
}
</style>
