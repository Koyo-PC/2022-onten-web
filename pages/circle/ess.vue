<template>
  <div>
    <CircleHead name="ess" />
    <p>
      今年、Typhonsとして生まれ変わった新生ESS。<br />
      今年は、スピーチ＆ディベート大会を実施します。<br />
      新たな発見や学びを得られること間違いなし！<br />
      It’s now or never !!
    </p>
    <table>
      <thead>
        <tr>
          <th>Timetable</th>
          <th>Event</th>
          <th>Performer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>11:00-11:05</td>
          <td>Opening</td>
          <td>T.Yoshida</td>
        </tr>
        <tr>
          <td>11:05-11:15</td>
          <td>Debate part1</td>
          <td>Y.Makino, S.Kitani, S.Nakayasu, K.Ikuta, Y.Kido, M.Inoue</td>
        </tr>
        <tr>
          <td>11:20-11:45</td>
          <td>Debate part2</td>
          <td>Y.Makino, S.Kitani, S. Nakayasu, K.Ikuta, Y.Kido, M.Inoue</td>
        </tr>
        <tr>
          <td>11:50-11:55</td>
          <td>Speech</td>
          <td>K.Oki</td>
        </tr>
        <tr>
          <td>12:00-12:05</td>
          <td>Ending</td>
          <td>T.Yoshida</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup lang="ts">
import { definePageMeta, useHead } from "#imports";
import circles from "assets/data/circles.json";

useHead({
  title: circles["ess"].name,
  meta: [
    {
      hid: "og:title",
      property: "og:title",
      content: `宴Joy | ${circles["ess"].name}`,
    },
  ],
});
definePageMeta({
  layout: "simple-page",
});
</script>
<style lang="scss" scoped>
table {
  border-collapse: collapse;
  margin: 0 auto;
  th,
  td {
    padding: 5px;
    border: solid 1px;
  }
}
</style>
