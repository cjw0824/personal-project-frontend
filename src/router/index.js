import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

import MapMarkerTestPage from "../views/MapMarkerTestPage.vue";

import LoginPage from "../views/LoginPage.vue";
import SignupPage from "../views/SignupPage.vue";

import BoardRegisterPage from "../views/Board/BoardRegisterPage.vue";
import BoardListPage from "../views/Board/BoardListPage.vue";
import BoardReadPage from "../views/Board/BoardReadPage.vue";
import BoardModifyPage from "../views/Board/BoardModifyPage.vue";

import ReviewRegisterPage from "../views/reviewBoard/ReviewRegisterPage.vue";
import ReviewListPage from "../views/reviewBoard/ReviewListPage.vue";
import ReviewReadPage from "../views/reviewBoard/ReviewReadPage.vue";

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
    path: "/mapMarkerTestPage",
    name: "MapMarkerTestPage",
    component: MapMarkerTestPage,
  },
  {
    path: "/loginPage",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/signupPage",
    name: "SignupPage",
    component: SignupPage,
  },
  {
    path: "/boardRegisterPage",
    name: "BoardRegisterPage",
    component: BoardRegisterPage,
  },
  {
    path: "/reviewRegisterPage",
    name: "ReviewRegisterPage",
    component: ReviewRegisterPage,
    props: true
  },
  {
    path: "/boardListPage",
    name: "BoardListPage",
    component: BoardListPage,
    props: true
  },
  {
    path: "/reviewListPage",
    name: "ReviewListPage",
    component: ReviewListPage,
    props: true
  },
  {
    path: '/boardReadPage/:boardId',
    name: 'BoardReadPage',
    components: { default: BoardReadPage },
    props: true
    // props: { default: true },
  },
  {
    path: '/reviewReadPage/:id',
    name: 'ReviewReadPage',
    components: { default: ReviewReadPage },
    props: true
  },
  {
    path: "/boardModifyPage",
    name: "BoardModifyPage",
    component: BoardModifyPage,
    props: true
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
