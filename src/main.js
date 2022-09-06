import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

import App from './App.vue'

const routes = [
  { path: "/",     component: () => import("./components/Home.vue") },
  { path: "/about", component: () => import("./components/Home.vue") },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes, 
});

const app = createApp(App);

app.use(router);

app.mount("#app");
