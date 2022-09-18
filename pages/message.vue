<template>
  <div id="message">
    <h1>あいさつ</h1>
    <p>
      愛を告げるとき西洋の人ならば「I LOVE YOU」の文型で語るでしょう。
      主体(I)と客体(YOU)が独立していて両者をLOVEがつなぐ。
      かたや関西人なら「好きやねん」と囁きます。
      そのとき主体と客体は溶けあって一つの「場」が共有されます。
      コロナ以来かろうじて開催できた音展も、残念ながら主体が客体に発信する発表会が精一杯だった。
      今年こそは、発信者と受信者が、つまり主体と客体が一体となって盛り上がる「場」を創りたい。
      「宴joy」という一見ダジャレか語呂合わせのようなテーマには、そういった実行委員会の熱い思いが込められているように感じます。
      それでは、Enjoy Your Day!
    </p>
    <span class="writer">甲陽学院高等学校校長 今西 昭</span>
    <p>
      甲陽では文化祭と言わずに音楽と展覧の会と呼ぶ伝統がありますが、今年は「宴joy」をテーマによりカジュアルに、
      生徒と来場者の皆様が共に楽しむことを目標にしてきました。甲陽生が作り上げる宴をどうぞお楽しみください!!
    </p>
    <span class="writer">音楽と展覧の会 実行委員長 山本 柊憂</span>
    <p>
      2年前、僕らが主役を務めた中学校の音展はコロナ1年目であり、開催自体が危ぶまれた音展でした。
      「誰も来ないなら音展なんていらないじゃないか!」そんな声に何度心を痛めたことでしょう。
      しかし今年は音展委員や先生方の尽力により3年振りに「開かれた音展」が実現しました!
      その高揚感が今年のテーマ「宴joy」にも溢れ出しています。
      今年の音展が、画面の前の皆さん1人1人にとって「音楽と展覧」などという堅苦しい枠を超えた、
      楽しく有意義で感動的な「宴」になることを願ってやみません。
    </p>
    <span class="writer">生徒会長 佐田 一真</span>
  </div>
</template>
<script setup lang="ts">
import { definePageMeta, useHead } from "#imports";

useHead({
  title: "あいさつ",
  meta: [
    {
      hid: "og:title",
      property: "og:title",
      content: "宴Joy | あいさつ",
    },
  ],
});

definePageMeta({
  layout: "simple-page",
});
</script>
<style lang="scss" scoped>
#message {
  p {
    width: 80%;
    margin: 0 auto;
    line-height: 1.6;
    //.writer::before {
    //  content: "";
    //  display: inline-block;
    //  width: 2em;
    //  height: calc(0.8em / 2 - 0.5px);
    //  border-top: 1px solid #000;
    //  margin: 0 3px;
    //}
  }
  .writer {
    display: block;
    width: 80%;
    font-size: 1.5rem;
    margin: 20px auto 50px;
  }
}
</style>
