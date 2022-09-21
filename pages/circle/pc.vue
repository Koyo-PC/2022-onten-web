<template>
  <div>
    <CircleHead name="pc" />
    <h2>音展公式ホームページ</h2>
    <p>
      毎年の音展のホームページはPC部が作っています。<br />
      Web制作の資格を持っているメンバーが作成していて、去年よりさらに質がよくなっていると思います。<br />
      音展が終わった後も公開しているのでいつでも何度でも帰ってきてください。<br />
      合言葉は、<a href="https://koyo-onten.net">koyo-onten.net</a>!
    </p>
    <h2>サイバーセキュリティ実演</h2>
    <p>
      今年はなんと!<br />
      甲陽の歴史で初となるであろう、「サイバーセキュリティ実演」を行います!<br />
      今ご覧になっている音展HPのサーバー管理者が、ハッキングを実演・解説します。<br />
      サイバー犯罪が一般化するこの時代、その手口を知ることでセキュリティを見直すきっかけになればありがたいです。<br />
      北校舎4階、物理講義室にどうぞ!<br />
      開催時間: (未定)
    </p>
    <h2>学年1位の2ちゃんねる</h2>
    <p>
      105回生成績学年1位の優等生が懐かしの2ちゃんねるを復活させました。<br />
      誰がなんでも書き込んでくれておっけーです。なんたって匿名なので。<br />
      <a href="https://bjcodes.net:1137/wss.html"
        >https://bjcodes.net:1137/wss.html</a
      >からぜひ気楽にどぞー。
    </p>
    <h2>ミニゲーム</h2>
    <p>
      <a href="https://bjcodes.net:1137/list/index.html "
        >https://bjcodes.net:1137/list/index.html </a
      >に、いくつかWebで遊べるミニゲームを用意しています。<br />
      短時間の暇つぶしにはちょうどいいかも!?
    </p>
    <p>
      <b>公式Twitterのフォローもお願いします!</b>
    </p>
    <Twitter id="koyo_pc" />
  </div>
</template>
<script setup lang="ts">
import { definePageMeta, useHead } from "#imports";
import circles from "assets/data/circles.json";
import Twitter from "~/components/sns/Twitter.vue";

useHead({
  title: circles["pc"].name,
  meta: [
    {
      hid: "og:title",
      property: "og:title",
      content: `宴Joy | ${circles["pc"].name}`,
    },
  ],
});
definePageMeta({
  layout: "simple-page",
});
</script>
