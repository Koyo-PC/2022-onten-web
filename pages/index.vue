<template>
  <div>
    <div id="background">
      <div id="top">
        <div id="top-title">第75回 音楽と展覧の会</div>
        <div id="top-logo">
          <img
            id="top-background-image-back"
            src="~assets/image/logo_background/background.png"
            alt=""
          />
          <img
            id="top-background-image-main"
            src="~assets/image/logo_back.png"
            alt=""
          />
          <img
            id="top-background-image-man-1"
            src="~assets/image/logo_background/man_1.png"
            alt=""
          />
          <img
            id="top-background-image-man-1-mask"
            src="~assets/image/logo_background/man_1_mask.png"
            alt=""
          />
          <img
            id="top-background-image-man-2"
            src="~assets/image/logo_background/man_2.png"
            alt=""
          />
          <img
            id="top-background-image-man-2-mask"
            src="~assets/image/logo_background/man_2_mask.png"
            alt=""
          />
          <img id="top-logo-image" src="~assets/image/logo_black.png" alt="" />
        </div>
      </div>
    </div>
    <div id="info">
      <div id="date">9.23</div>
      <div id="time">9:00〜15:00<br />(講堂, 中央ステージ 〜15:30)</div>
      {{ nowTime.value }}
      <div id="date-counter" v-if="nowTime < beginTime">
        {{ date_counter_content() }}
      </div>
    </div>
    <div id="ticket">
      <h1>＜＜ 重要なお知らせ ＞＞</h1>
      <p>
        今年の音楽と展覧の会では、保護者以外は入場にチケットが必要です。<br />
        下記リンクからダウンロード・プリントアウトし、必要事項を記入した上で受付に提出をお願いします。
      </p>
      <a href="/files/ticket.pdf" download="第75回音展_入場チケット.pdf"
        >チケットをダウンロード</a
      >
    </div>
    <div>
      <a
        class="twitter-timeline"
        href="https://twitter.com/koyo_onten2022?ref_src=twsrc%5Etfw"
        data-chrome="noheader, nofooter"
        data-width="80%"
        data-height="500"
        >Tweets by koyo_onten2022</a
      >
    </div>
    <h2>アクセス</h2>
    <div id="access">
      <div id="access-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26227.604969780583!2d135.30494707561803!3d34.74423984707946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000f36ab1b8e56b%3A0x41b0ac08629de653!2z55Sy6Zm95a2m6Zmi6auY562J5a2m5qCh!5e0!3m2!1sja!2sjp!4v1662826217343!5m2!1sja!2sjp"
          width="800"
          height="600"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <ul>
          <li>阪急電鉄「甲陽園」駅下車、徒歩約20分</li>
          <li>阪急/阪神バス「柏堂町」駅下車、南へ徒歩約5分</li>
          <li>校内への車の乗り入れは全面禁止にしております</li>
          <li>
            学校周辺はすべて駐車禁止ですので、公共の交通機関をご利用ください
          </li>
          <li>
            例年、北山緑化植物園より「利用者が駐車できない」との苦情があります。植物園への駐車もご遠慮ください
          </li>
        </ul>
      </div>
    </div>
    <div id="note">
      <h2>お知らせ</h2>
      <ul>
        <li>
          <h1>呼び出し・問い合わせ</h1>
          <ul>
            <li>
              放送によるお呼び出しは北館一階西寄りの放送室前で受け付けています。
            </li>
            <li>ご不明な点がございましたら、受付でお尋ねください。</li>
          </ul>
        </li>
        <li>
          <h1>お手洗い</h1>
          <ul>
            <li>
              男性用お手洗いは南館全階西側、北館二四階および講堂にございます。
            </li>
            <li>
              女性用お手洗いは南館全階東側、北館三階および講堂、ピロティにございます。
            </li>
            <li>
              北館一階のお手洗いは教職員・来賓専用のため、ご利用になれません。
            </li>
          </ul>
        </li>
        <li>
          <h1>金券販売</h1>
          <ul>
            <li>
              食堂を除きすべての販売は金券を通して行います。現金はご利用いただけません。
            </li>
            <li>
              食堂では食券をお買い求めください。金券はご利用いただけません。
            </li>
            <li>
              未使用の金券の払い戻しは、金券販売所にて、14時30分から15時30分に行います。
            </li>
          </ul>
        </li>
        <li>
          <h1>そのほか</h1>
          <ul>
            <li>校内は全面禁煙です。喫煙はお控えください。</li>
            <li>講堂、校舎には、上履きに履き替えてご入場ください。</li>
            <li>講堂では携帯電話等の電源をお切りください。</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import { definePageMeta, onMounted, ref, useHead } from "#imports";

useHead({
  title: "トップページ",
  script: [
    {
      type: "text/javascript",
      async: true,
      src: "https://platform.twitter.com/widgets.js",
      charset: "utf-8",
    },
  ],
});

definePageMeta({
  layout: "simple-page",
});

const beginTime = new Date("2022/9/23 9:00:00").valueOf();
const nowTime = ref(Date.now().valueOf());
const date_counter_content = () => {
  if (beginTime - nowTime.value > 1000 * 60 * 60 * 24) {
    return `開催まであと${Math.floor(
      (beginTime - nowTime.value) / 1000 / 60 / 60 / 24
    )}日`;
  } else if (beginTime - nowTime.value > 1000 * 60 * 60) {
    return `開催まであと${Math.floor(
      (beginTime - nowTime.value) / 1000 / 60 / 60
    )}時間`;
  } else {
    return `開催まであと${Math.floor(
      (beginTime - nowTime.value) / 1000 / 60
    )}分`;
  }
};
onMounted(() => {
  window.setInterval(() => {
    nowTime.value = Date.now().valueOf();
  }, 1000);
  const man_1 = document.getElementById("top-background-image-man-1");
  const man_2 = document.getElementById("top-background-image-man-2");
  if (man_1 != null && man_2 != null) {
    window.addEventListener("mousemove", (e) => {
      if (man_1.style.getPropertyValue("--isautomove") == "true") return;
      man_1.style.transform = `rotate(${-(
        6 *
        (1 - e.x / window.outerWidth) *
        (e.y / window.outerHeight)
      )}deg)`;
      man_2.style.transform = `rotate(${
        4 * (e.x / window.outerWidth) * (1 - e.y / window.outerHeight)
      }deg)`;
    });
  }
});
</script>
<style lang="scss" scoped>
#background {
  margin: -50px -10vw 50px;
  //height: 90vh;
  $stripe-width: 30px;
  $stripe-color-fore: lighten($back-color-primary, 20);
  $stripe-color-back: lighten($back-color-secondary, 10);
  background-color: $stripe-color-back;
  background-image: repeating-linear-gradient(
    -45deg,
    $stripe-color-fore,
    $stripe-color-fore $stripe-width,
    transparent 0,
    transparent $stripe-width * 2
  );
  padding-bottom: 50px;

  #top {
    position: relative;
    max-height: 100vh;
    aspect-ratio: 1;
    margin: 0 auto;

    $title-height: 100px;

    #top-title {
      width: 85%;
      height: $title-height;
      margin: 0 auto;
      padding: 10px;
      font-size: min(5vw, 70px);
      @include mobile {
        font-size: 7vw;
      }
      line-height: $title-height;
      font-weight: bold;
      color: #fff;
      text-align: justify;
      text-align-last: justify;
      text-justify: inter-ideograph;
      white-space: nowrap;
      filter: drop-shadow(0 0 10px $back-color-secondary);
    }

    #top-background-image-back,
    #top-background-image-man-1,
    #top-background-image-man-1-mask,
    #top-background-image-man-2,
    #top-background-image-man-2-mask,
    #top-background-image-main {
      position: absolute;
      top: $title-height;
      display: block;
      width: 100%;
      height: calc(100% - $title-height - 50px);
      object-fit: contain;
    }
    #top-background-image-man-1 {
      transform-origin: 76.5% 60.3%;
      --isautomove: "false";

      @include mobile {
        --isautomove: "true";
        animation: m1 3.51s steps(1000) infinite;
        animation-timing-function: ease-out;
        @keyframes m1 {
          0%,
          100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(-6deg);
          }
        }
      }
    }

    #top-background-image-man-2 {
      transform-origin: 72.4% 60.3%;
      @include mobile {
        animation: m2 4s steps(1000) infinite;
        animation-timing-function: ease-out;
        @keyframes m2 {
          0%,
          100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(4deg);
          }
        }
      }
    }
    #top-logo-image {
      position: absolute;
      top: calc((100% + $title-height) / 2);
      left: 0;
      right: 0;
      display: block;
      width: 90%;
      margin: 0 auto;
      object-fit: contain;
      transform: translateY(-50%);
      filter: invert(100%) drop-shadow(0 0 10px $back-color-secondary);
    }
  }
}
#info {
  margin-bottom: 100px;
  @include mobile {
    margin-bottom: 60px;
  }
  text-align: center;
  #date {
    text-align: center;
    font-size: 250px;
    margin-bottom: -60px;
    @include mobile {
      font-size: 100px;
      margin-bottom: -20px;
    }
  }
  #time {
    margin-bottom: 60px;
    font-size: 30px;
    @include mobile {
      font-size: 20px;
      margin-bottom: 40px;
    }
  }
  #date-counter {
    display: inline-block;
    //width: 70%;
    margin: 0 auto;
    padding: 20px;
    @include mobile {
      padding: 10px;
    }
    border: #303030 solid 2px;
    border-radius: 10px;
    text-align: center;
    font-size: 50px;
    @include mobile {
      font-size: 25px;
    }
    font-weight: 300;
    color: black;
  }
}
h2 {
  text-align: center;
  font-weight: 700;
  font-size: 3rem;
}
:deep(.twitter-timeline) {
  display: block;
  width: 80%;
  height: 500px;
  margin: 0 auto 50px;
  &:not(.twitter-timeline-rendered) {
    visibility: hidden;
  }
}
#ticket {
  max-width: 90%;
  margin: 50px auto;
  padding: 20px;
  text-align: center;
  background-color: $back-color-primary;
  a {
    display: inline-block;
    padding: 20px;
    background-color: white;
    color: black;
    font-weight: 700;
    text-decoration: none;
  }
}
#access {
  text-align: center;
  #access-container {
    display: inline-block;
    max-width: 90%;
    margin: 0 auto;
    iframe {
      display: block;
      max-width: 100%;
      max-height: 600px;
    }
    ul {
      text-align: left;
      padding: 30px 0;
    }
  }
}
#note {
  max-width: 80%;
  margin: 0 auto;
  ul {
    padding: 30px 0;
    li {
      h1 {
        text-align: left;
        font-size: 1.2rem;
      }
    }
  }
}
</style>
