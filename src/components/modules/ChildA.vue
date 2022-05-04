<template>
 <div> $route.path:{{$route.path}}
ChildA $route.params.username:{{$route.params.username}}
 </div>
</template>

<script>
export default {
  name: 'ChildA',
  props: { },
  data () {
    return { }
  },
  computed: { },
  watch: { },
  methods: { },
  mounted() { }
}
</script>

<style lang="scss" scoped>
</style>
