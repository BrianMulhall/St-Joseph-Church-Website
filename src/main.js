import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import App from "./App.vue";

const routes = [
  {
    path: "/",
    component: () => import("./components/home-page.vue"),
  },
  {
    path: "/staff",
    component: () => import("./components/our-staff.vue"),
  },
  {
    path: "/priests",
    component: () => import("./components/our-priests.vue"),
  },
  {
    path: "/deacons",
    component: () => import("./components/our-deacons.vue"),
  },
  {
    path: "/history",
    component: () => import("./components/our-history.vue"),
  },
  {
    path: "/information",
    component: () => import("./components/get-information.vue"),
  },
  {
    path: "/schedules",
    component: () => import("./components/staff-schedules.vue"),
  },
  {
    path: "/catholic-resources",
    component: () => import("./components/catholic-resources.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount("#app");
