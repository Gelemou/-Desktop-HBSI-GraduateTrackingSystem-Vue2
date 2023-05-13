import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/show",
    name: "show",
    component: () => import("../views/showView.vue"),
  },
  {
    path: "/active",
    name: "active",
    component: () => import("../views/activeView.vue"),
  },
  {
    path: "/memory",
    name: "memory",
    component: () => import("../views/memoryView.vue"),
  },
  {
    path: "/more",
    name: "more",
    component: () => import("../views/moreView.vue"),
  },
  // 通知详情路由
  {
    path: "/noticedetail/:id",
    name: "noticedetail",
    component: () => import("../views/NoticeDetailView.vue"),
  },
  // 活动详情路由
  {
    path: "/activitydetail/:id",
    name: "activitydetail",
    component: () => import("../views/ActivityDetailView.vue"),
  },
  // 新闻中心二级页面路由
  {
    path: "/newsCenter",
    name: "newsCenter",
    component: () => import("../views/newsCenterView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
