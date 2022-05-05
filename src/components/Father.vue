<template>
  <div>
    <router-link to="/father">Father</router-link>
    <router-link :to="{ name: 'ChildA', params: { username: 'jiaguoqiang' } }"
      >ChildA</router-link
    >
    <router-link to="/father/childb">ChildB</router-link>
    <router-link to="/father/childc/123/news_id123"> ChildC</router-link>
    <button @click="$router.go(1)">前进</button>
    <button  @click="$router.go(-1)">后退</button>
    <button  @click="$router.push('/')">编程式导航跳转</button>
    <transition name="fade" mode="in-out"> <router-view /></transition>
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
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter {
  transform: translateX(-200%);
}
.fade-enter-to {
  transform: translateX(-100%);
}
.fade-leave {
  transform: translateX(0);
}
.fade-leave-to {
  transform: translateX(100%);
}
</style>
