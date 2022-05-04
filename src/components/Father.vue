<template>
  <div>
    <router-link to="/father">Father</router-link>
    <router-link :to="{name:'ChildA',params:{username:'jiaguoqiang'}}">ChildA</router-link>
    <router-link to="/father/childb">ChildB</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Father",
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
</style>
