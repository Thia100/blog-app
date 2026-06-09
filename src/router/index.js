import { createRouter, createWebHistory } from "vue-router";

import BlogDetails from "../views/BlogDetails.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomePage.vue"),
  },
  {
    path: `/blog-card/:id`,
    name: "BlogDetails",
    component: () => import("../views/BlogDetails.vue"),
  },

  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
