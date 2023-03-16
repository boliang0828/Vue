import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const constantRoutes = [
  {
    path: "/loading", //路径
    component: () => import("@/views/loading/test"), //组件
    hidden: true,
  },
  {
    path: "/testVuex",
    component: () => import("@/views/practise/testVuex"),
    hidden: true,
  },
  {
    path: "/testTable",
    component: () => import("@/views/practise/testTable"),
    hidden: true,
  },
  {
    path: "/Home",
    component: () => import("@/views/Home/index"),
    hidden: true,
  },
  {
    path: "/",
    redirect: "/Home",
    children: [
      {
        path: "Home",
        component: () => import("@/views/Home/index"),
        name: "Home",
        meta: { title: "Home", icon: "Home", affix: true },
      },
    ],
  },
];

const creatRouter = () =>
  new Router({
    routes: constantRoutes,
  });

const router = creatRouter();

// 路由重置
export function resetRouter() {
  const newRouter = creatRouter();
  router.matcher = newRouter.matcher;
}

export default router;

// 路由前置守卫
router.beforeEach((to, from, next) => {
  // if(to.path == '/vuex'){
  //     next({path:'/loading'})
  // }
  next();
});
