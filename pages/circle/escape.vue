<template>
  <div>
    <h1>脱出ゲーム</h1>
    <p class="center">
      あなたの小さな<strong>&quot;ひらめき&quot;</strong>と<strong>&quot;気づき&quot;</strong>が脱出成功へと導く<br />
      あなたは<strong>最大の謎</strong>を解き、脱出することができるのか
    </p>
    <p class="center">
      ヒントもあるので初めての人でも楽しめます! 脱出成功者には景品も!
    </p>
    <h2>参加方法</h2>
    <p>
      <b>参加するには<u>実施教室前にある受付</u>で予約してください。</b><br />
      <b><u>何人からでも</u>予約出来ますが、</b
      >人数が多い場合は分かれたり、少ない場合は別の人と同じグループになったりすることがあります。<br />
      予約の関しては時間指定が出来ますが、時間帯によって埋まっている場合がありますので予約する場合は早めにお願いします。<br />
      キャンセルすることは可能です。<br />
      <small
        >※保護者を優先的に予約出来るようにしています。その影響で生徒の体験時間がずれる場合があります。</small
      >
    </p>
    <p class="center">
      このページの下の方に準備問題があります！参加する前にぜひ解いてみてください！
    </p>
    <div class="story">
      <img class="story-img" src="/img/circle/escape/story_1.png" alt="" />
      <div class="story-content">
        <h3>燃え上がる宴からの脱出</h3>
        <p>
          あなたは、ある会社の新年会に参加している。<br />
          いざ、宴を始めようとすると、突然、爆破予告が届く...
        </p>
        <table>
          <tbody>
            <tr>
              <td>実施教室</td>
              <td>1-B教室 (南館4階)</td>
            </tr>
            <tr>
              <td>1チーム</td>
              <td>基本4人</td>
            </tr>
            <tr>
              <td>実施時間</td>
              <td>
                約40分間 (謎解き時間 30分、解説等 10分)<br />
                1回目 9:30~10:10<br />
                2回目 10:30~11:10<br />
                3回目 11:30~12:10<br />
                4回目 13:00~13:40<br />
                5回目 14:00~14:40<br />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="story">
      <img class="story-img" src="/img/circle/escape/story_2.png" alt="" />
      <div class="story-content">
        <h3>謎めいた牢屋からの脱出</h3>
        <p>
          通りの少ない夜道を歩いていると、急に口を塞がれそのまま気を失った。目が覚めると牢屋の中に...
        </p>
        <table>
          <tbody>
            <tr>
              <td>実施教室</td>
              <td>1-C教室 (南館4階)</td>
            </tr>
            <tr>
              <td>1チーム</td>
              <td>基本4人</td>
            </tr>
            <tr>
              <td>実施時間</td>
              <td>
                約25分間 (謎解き時間 15分、解説等 10分)<br />
                1回目 9:30~9:55<br />
                2回目 10:05~10:30<br />
                3回目 10:40~11:05<br />
                4回目 11:15~11:40<br />
                5回目 11:50~12:00<br />
                6回目 12:10~12:35<br />
                7回目 13:15~13:40<br />
                8回目 13:50~14:15<br />
                9回目 14:25~14:50<br />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <h2>注意事項</h2>
    <p>
      私物(時計、文房具含む)の使用は出来ません。
      同じ脱出ゲームを２回以上体験することは出来ません。
      予約に関しては保護者が優先となります。
      1グループが少ない場合、別の人とグループになることがあります。
      予告なく上記の内容が変更になる場合があります。
    </p>
    <p>ご不明なことがあれば、脱出ゲーム担当の生徒にお尋ねください。</p>
    <h2>脱出ゲーム担当</h2>
    <table>
      <tbody>
        <tr>
          <td>謎制作</td>
          <td>西坂崇雅 柴田峻佑 福﨑誉也 矢木陽太</td>
        </tr>
        <tr>
          <td>ポスター作成</td>
          <td>岡田一真</td>
        </tr>
        <tr>
          <td>小道具製作</td>
          <td>
            大谷淳 大野舜悉希 小河友毅 黒田城太郎 香山卓仁 阪本颯汰<br />
            島村多聞 下條倫太郎 新保飛龍 田中大智 中野太貴 吉山隼太朗
          </td>
        </tr>
        <tr>
          <td>顧問</td>
          <td>日置先生 山田先生</td>
        </tr>
      </tbody>
    </table>
    <h2>準備問題</h2>
    <img
      class="center"
      src="/img/circle/escape/sample.svg"
      alt=""
      width="50%"
    />
    <p class="center">答えが分かったら脱出ゲーム担当の生徒に！</p>
  </div>
</template>

<script setup lang="ts">
import { definePageMeta } from "#imports";
import "../../assets/style/text.scss";

definePageMeta({
  layout: "simple-page",
});
</script>
<script lang="ts">
export default {
  name: "escape",
};
</script>

<style lang="scss" scoped>
h2 {
  &:before {
    content: "〘";
  }

  &:after {
    content: "〙";
  }
}

.story {
  display: flex;
  margin: 10px 0;

  .story-img {
    display: block;
    max-width: 20%;
    max-height: 100%;
    object-fit: cover;
  }

  .story-content {
    width: 70%;
    padding: 0 10px;

    h3 {
      &:before {
        content: "《";
      }

      &:after {
        content: "》";
      }
    }
  }
}
</style>
