import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import App from "./App.vue";

const routes = [
  {
    path: "/",
    component: () => import("./components/Home.vue"),
  },
  {
    path: "/basic-christian-living-series",
    component: () => import("./components/BCLS.vue"),
  },
  {
    path: "/contact",
    component: () => import("./components/Contact.vue"),
  },
  {
    path: "/directions",
    component: () => import("./components/Directions.vue"),
  },
  {
    path: "/history",
    component: () => import("./components/History.vue"),
  },
  {
    path: "/homily",
    component: () => import("./components/Homily.vue"),
  },
  {
    path: "/information",
    component: () => import("./components/Information.vue"),
  },
  {
    path: "/schedules",
    component: () => import("./components/Schedules.vue"),
  },
  {
    path: "/catholic-resources",
    component: () => import("./components/CatholicResources.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount("#app");
