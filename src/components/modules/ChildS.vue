<template>
  <div>ChildS---{{ fullName }}</div>
</template>

<script>
export default {
  name: "ChildS",
  props: {},
  data() {
    return {
      firstName: "jia",
      middleName: "guo",
      lastName: "qiang",
    };
  },
  computed: {
    // 整行写法
    // fullName:{
    //   get(){
    //     return this.firstName+this.middleName+this.lastName
    //   },
    //   set(value){
    //     this.firstName= value
    //   }
    // }

    //简写 第一次
    // fullName: function () {
    //   return this.firstName + this.middleName + this.lastName;
    // },
    //简写 第二次
    fullName() {
      return this.firstName + this.middleName + this.lastName;
    },
  },
  watch: {},
  methods: {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
div {
  background-color: pink;
}
</style>
