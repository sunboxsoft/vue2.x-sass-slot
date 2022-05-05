<template>
  <div>ChildB
<hr/>
      {{$route.name}}
      {{$route.path}}
  </div>
</template>

<script>
export default {
  name: "ChildB",
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  mounted() {},
  beforeRouteEnter (to, from, next) {
    // ...
    console.log(to, from, next,'beforeRouteEnter (to, from, next) {  ChildB.vue')
    next()
  },
  beforeRouteLeave (to, from, next) {
    // ...
    console.log(to, from, next,'beforeRouteLeave (to, from, next) {  ChildB.vue')
    next()
  }
};
</script>

<style lang="scss" scoped>
</style>
