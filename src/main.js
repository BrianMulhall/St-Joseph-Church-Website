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
    path: "/basic-christian-living-series",
    component: () => import("./components/basic-christian-living-series.vue"),
  },
  {
    path: "/contact",
    component: () => import("./components/contact-information.vue"),
  },
  {
    path: "/directions",
    component: () => import("./components/getting-directions.vue"),
  },
  {
    path: "/history",
    component: () => import("./components/our-history.vue"),
  },
  {
    path: "/homily",
    component: () => import("./components/weekly-homily.vue"),
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
