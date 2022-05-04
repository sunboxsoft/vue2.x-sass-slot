<template>
 <div>
ChildC<br/>>
$route.params.category_id:
{{$route.params.category_id}}
$route.params.news_id:
{{$route.params.news_id}}
 </div>
</template>

<script>
export default {
  name: 'ChildC',
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
