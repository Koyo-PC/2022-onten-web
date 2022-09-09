<template>
  <div>
    <h1>生物部</h1>
    <h2>部長挨拶</h2>
    <p>
      今年は去年よりもさらに部員が増え、２年生６人、１年生８人となりました。
      ２年生は他の部活と兼部している人が多く、生物部に集中できないこともありましたが、それぞれが自分の興味があること、好きなことに取り組めたように感じます。
      また、夏休みには昆虫が好きな部員が生物室で一泊して、灯火採集を行いました。多くの昆虫がライトトラップに飛来し、普段見ることのできない良い体験をできたと思います。
      合宿の成果については部誌にしっかり書いておりますので、そちらもぜひ読んでみてください。
      部誌には実験の説明と展示物の解説も載っています。
      皆様、ぜひお越しください。
    </p>
    <h2>生物室案内図</h2>
    <img id="bio-map" src="/img/circle/biology/map.png" alt="" />
    <h2>合宿風景</h2>
    <div class="bio-photo" id="bio-photo-1">
      <img src="/img/circle/biology/img_1.jpg" alt="" />
      <div>←やる気満々の部員T<br />後ろは作業中のI氏とU氏</div>
    </div>
    <div class="bio-photo-container">
      <div class="bio-photo" id="bio-photo-2">
        <img src="/img/circle/biology/img_2.jpg" alt="" />
        <div>
          ←灯火採集の様子<br />
          ブラックライトと白熱球を用いています。
        </div>
      </div>
      <div class="bio-photo" id="bio-photo-4">
        <img src="/img/circle/biology/img_4.jpg" alt="" />
        <div>HIDライトで山の斜面を照らしている様子。→</div>
      </div>
    </div>
    <div class="bio-photo-container">
      <div class="bio-photo" id="bio-photo-3">
        <img src="/img/circle/biology/img_3.jpg" alt="" />
        <div>
          ↑甲虫屋の３人<br />
          何をみているのかは不明
        </div>
      </div>
      <div class="bio-photo" id="bio-photo-5">
        <img src="/img/circle/biology/img_5.jpg" alt="" />
        <div>↑先生同伴の植物園内での採集。目立った成果は無かった模様。</div>
      </div>
    </div>
    <div class="bio-photo-container">
      <div class="bio-photo" id="bio-photo-67">
        <img src="/img/circle/biology/img_6.jpg" alt="" />
        <img src="/img/circle/biology/img_7.jpg" alt="" />
        <div>↑校舎からの夜景と日の出前↑</div>
      </div>
    </div>
    <div class="bio-photo" id="bio-photo-89">
      <img src="/img/circle/biology/img_8.jpg" alt="" />
      <img src="/img/circle/biology/img_9.jpg" alt="" />
      <div>
        ↑疲れてお休みになるI氏とM氏<br />
        筆者も寝てみたが、固すぎて身体中が痛かった。
      </div>
    </div>
    <p>
      <u
        >合宿での昆虫の写真は生物室に標本と共に展示してあります。
        ご興味のある方はぜひお越しください。</u
      >
    </p>
  </div>
</template>

<script setup lang="ts">
import { definePageMeta } from "#imports";

definePageMeta({
  layout: "simple-page",
});
</script>
<script lang="ts">
export default {
  name: "biology",
};
</script>

<style lang="scss" scoped>
h2 {
  &:before,
  &:after {
    content: "～";
  }
}

#bio-map {
  display: block;
  max-width: 100%;
  max-height: 100vh;
}

.bio-photo {
  display: flex;

  img {
    display: block;
  }

  div {
    padding: 10px;
  }
}

.bio-photo-container {
  position: relative;
}

#bio-photo-1 {
  img {
    width: 70%;
  }

  div {
    width: 30%;
    margin-top: 10%;
  }
}

#bio-photo-2 {
  img {
    width: 40%;
  }

  div {
    width: 20%;
    margin-top: 20%;
  }
}

#bio-photo-4 {
  img {
    position: absolute;
    top: 0;
    right: 0;
    width: 40%;
  }

  div {
    position: absolute;
    bottom: 20%;
    right: 40%;
    width: 20%;
    padding-top: 30px;
  }
}

#bio-photo-3 {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  img {
    width: 60%;
  }

  div {
    width: 20%;
  }
}

#bio-photo-5 {
  display: block;
  width: 40%;
  margin-left: 60%;

  img {
    width: 100%;
  }

  div {
    width: 100%;
  }
}

#bio-photo-67 {
  display: block;
  width: 100%;

  img {
    display: inline-block;
    width: 50%;
  }

  div {
    width: 100%;
    text-align: center;
  }
}

#bio-photo-89 {
  display: block;
  width: 60%;

  img {
    display: inline-block;
    width: 50%;
  }

  div {
    width: 100%;
    text-align: center;
  }
}
</style>
