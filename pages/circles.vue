<template>
  <div>
    <div id="tools-menu">
      <div id="search-menu">
        <label for="search">検索</label
        ><input type="text" v-model="searchText" id="search" />
      </div>
      <div id="filter-menu">
        <label for="filter">絞り込み</label>
        <span id="filter">
          <input
            type="checkbox"
            id="filter-admin"
            value="admin"
            v-model="searchCategory"
          />
          <label for="filter-class">音展企画</label><br />
          <input
            type="checkbox"
            id="filter-club"
            value="club"
            v-model="searchCategory"
          />
          <label for="filter-club">部活動</label><br />
          <input
            type="checkbox"
            id="filter-party"
            value="party"
            v-model="searchCategory"
          />
          <label for="filter-party">同好会</label><br />
          <input
            type="checkbox"
            id="filter-class"
            value="class"
            v-model="searchCategory"
          />
          <label for="filter-class">クラス企画</label>
        </span>
      </div>
    </div>
    <div id="tiles">
      <CircleTile
        v-for="name in Object.keys(circles).filter(
          (n) =>
            (circles[n].name.toLowerCase().includes(searchText.toLowerCase()) ||
              circles[n].room?.some((r) =>
                r.toLowerCase().includes(searchText.toLowerCase())
              )) &&
            (searchCategory.length === 0 ||
              searchCategory.includes(circles[n].type))
        )"
        :key="name"
        :name="name.toString()"
      ></CircleTile>
    </div>
  </div>
</template>
<script setup lang="ts">
import { definePageMeta, ref, useHead } from "#imports";
import circles from "../assets/data/circles.json";

useHead({
  title: "企画一覧",
  meta: [
    {
      hid: "og:title",
      property: "og:title",
      content: "宴Joy | 企画一覧",
    },
  ],
});

definePageMeta({
  layout: "simple-page",
});
console.log(circles);

const searchText = ref("");
const searchCategory = ref(["admin", "club", "party", "class"]);
</script>

<style lang="scss" scoped>
#tools-menu {
  display: flex;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  div {
    display: flex;
    padding: 5px 1rem;
    align-items: center;
    label {
      margin: 0 0.5rem;
      padding: 0;
      font-size: 1.2rem;
      white-space: nowrap;
    }
  }
  #search-menu {
    #search {
      flex: 1;
      margin: 0;
      padding: 0.25rem;
      border: 1px solid #ccc;
      border-radius: 0.25rem;
      font-size: 1rem;
    }
  }
  #filter-menu {
    #filter {
      flex: 1;
      margin: 0;
      padding: 0.25rem;
      border: 1px solid #ccc;
      border-radius: 0.25rem 0 0 0.25rem;
      font-size: 1rem;
      label {
        font-size: 1rem;
      }
    }
  }
}
#tiles {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 10px;
}
</style>
