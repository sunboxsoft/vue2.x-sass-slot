<template>
  <div class="hello">
    <h3>{{ msg }}</h3>
    <!-- <child-t> -->
    <!-- 父组件 中 默认插槽的4种写法 -->
    <!-- <template>默认插槽 </template>
      <template slot="default"> 默认插槽 slot="default"</template>
      <template v-slot:default> 默认插槽v-slot:default</template>
      <template #default> 默认插槽#default</template> -->

    <!-- 父组件 中 具名插槽的4种写法 -->
    <!-- <template slot="left">左边插槽 slot="left"</template> -->
    <!-- <template v-slot:left>左边插槽  v-slot:left</template>-->
    <!-- <template #left>左边插槽  #left</template> -->

    <!-- 父组件调用子组件中的属性 -->
    <!-- <template #default="{msg}"> 默认插槽 {{msg}}</template> -->
    <!--<template v-slot:default="{msg}"> 默认插槽v-slot:default {{msg}}</template> -->
    <!-- </child-t> -->
    {{ dynamicSlot }}
    <button @click="changeSlot">切换插槽 动态插槽演示</button>

    <child-t>
      <template v-slot:[dynamicSlot]>
        {{ dynamicSlot }}
      </template>
    </child-t>

    <child-t>
      <template v-slot:[dynamicSlot]="{ msg }">
        {{ dynamicSlot }}---{{ msg }}
      </template>
    </child-t>
  </div>
</template>

<script>
import ChildT from "./modules/ChildT.vue";
export default {
  components: { ChildT },
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      dynamicSlot: "left",
    };
  },
  methods: {
    changeSlot() {
      switch (this.dynamicSlot) {
        case "right":
          this.dynamicSlot = "left";
          break;
        default:
          this.dynamicSlot = "right";
          break;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
