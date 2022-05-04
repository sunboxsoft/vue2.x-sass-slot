<template>
  <div id="app">
    <router-link to="/">首页</router-link>&nbsp;
    <router-link to="/News">新闻</router-link>
    <hr />
    {{ $route.path }}
    <br />
    <router-view />
    AAA
    <child-s></child-s>BBB
  </div>
</template>

<script>
import ChildS from "./components/modules/ChildS.vue";

export default {
  name: "App",
  components: { ChildS },
  watch: {
    "$route.path": function (newVal, oldValue) {
      console.log(newVal, oldValue);
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
