<template>
  <div>
    <div id="tools-menu">
      <div id="search-menu">
        <label for="search"
          >検索 <input type="text" v-model="searchText" id="search"
        /></label>
      </div>
      <div id="filter-menu">
        <label for="filter"
          >絞り込み
          <select name="kind" id="filter" v-model="searchCategory" multiple>
            <option value="admin">本部企画</option>
            <option value="club">部活動</option>
            <option value="party">同好会</option>
            <option value="class">クラス企画</option>
          </select></label
        >
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

const searchText = ref("");
const searchCategory = ref(["admin", "club", "party", "class"]);
</script>

<style lang="scss" scoped>
#tools-menu {
  display: flex;
  width: 50%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  div {
    vertical-align: middle;
    label {
      margin: 0 0.5rem;
      padding: 0;
      font-size: 1.5rem;
      white-space: nowrap;
    }
  }
  #search-menu {
    display: flex;
    width: 100%;
    padding: 0 1rem;
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
    display: flex;
    padding: 0 1rem;
    #filter {
      flex: 1;
      margin: 0;
      padding: 0.25rem;
      border: 1px solid #ccc;
      border-radius: 0.25rem 0 0 0.25rem;
      font-size: 1rem;
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
