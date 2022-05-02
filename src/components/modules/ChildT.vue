<template>
  <div>
    <h3>测试 scoped</h3>
    <slot></slot>
    <br />
    <slot name="default" :msg="msg"></slot>
    <hr />
    <slot name="left" :msg="leftmsg"></slot>

    <slot name="right" :msg="rightmsg"></slot>
  </div>
</template>

<script>
export default {
  name: "ChildT",
  props: {},
  data() {
    return {
      msg: "我来自子组件ChildT的msg",
      leftmsg: "leftmsg",
      rightmsg: "rightmsg",
    };
  },
  computed: {},
  watch: {},
  methods: {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
h3 {
  color: red;
}
</style>
