import { createRouter, createWebHistory } from "vue-router";
import routes from "@/router/routes";
import { BASE_URL } from "@/config";
import { applyGuards } from "@/router/events";

const router = createRouter({
  history: createWebHistory(BASE_URL),
  routes,
});

applyGuards(router);

export default router;
