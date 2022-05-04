import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Father from "@/components/Father";
import FatherDefault from '@/components/FatherDefault'
import ChildA from "@/components/modules/ChildA";
import ChildB from "@/components/modules/ChildB";

Vue.use(Router);

export default new Router({
  mode: "history", // 切换路径模式，变成history模式,不然路径为/#/home
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/father",
      component: Father,
      children: [
        {
          path: "/",
          name: "Father",
          component: FatherDefault,
        }
        ,
        {
          path: "childa",
          name: "ChildA",
          component: ChildA
        },
        {
          path: "childb",
          name: "ChildB",
          component: ChildB
        }
      ]
    }
  ]
});
