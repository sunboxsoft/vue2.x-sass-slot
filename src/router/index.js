import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Right from "@/components/modules/Right";
import Left from "@/components/modules/Left";

import Father from "@/components/Father";
import FatherDefault from '@/components/FatherDefault'
import ChildA from "@/components/modules/ChildA";
import ChildB from "@/components/modules/ChildB";
import ChildC from '@/components/modules/ChildC'
Vue.use(Router);

export default new Router({
  mode: "history", // 切换路径模式，变成history模式,不然路径为/#/home
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      components: {
        default:HelloWorld,
        left:Left,
        right:Right
      }
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
          component: ChildB,
          // 别名
          alias:'childb_alias' 
        },
        {
          /*(\\d+) 这是正则，规定category_id只能传入数字*/
          path: "childc/:category_id(\\d+)/:news_id",
          name: "ChildC",
          component: ChildC,
          alias:'childc_alias/:category_id(\\d+)/:news_id'
        },
      ]
    },
    {
      path: "/jiaguoqiang",
      redirect: '/'
    },
    {
      path: "/jia/:category_id(\\d+)/:news_id",
      redirect:"/father/childc/:category_id(\\d+)/:news_id"
    }
  ]
});
