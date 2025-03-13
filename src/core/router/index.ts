import { createRouter, createWebHistory } from "vue-router";
import Index from "@/pages/Index.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => Index,
    },
    {
      path: "/auth",
      component: () => import("@/core/layouts/AuthLayout.vue"),
      children: [
        {
          path: "login",
          name: "login",
          component: () => import("@/areas/auth/Login.vue"),
        },
        {
          path: "create-account",
          name: "create-account",
          component: () => import("@/areas/auth/Register.vue"),
        },
      ],
    },
    {
      path: "/dashboard",
      component: () => import("@/core/layouts/DashboardLayout.vue"),
      children: [
        {
          path: "",
          name: "home",
          component: () => import("@/areas/home/Home.vue"),
        },
        {
          path: "users",
          name: "users",
          component: () => import("@/areas/subscription/Subscription.vue"),
        },
        {
          path: "actividad",
          name: "entries",
          component: () => import("@/areas/entry/Index.vue"),
        },
        {
          path: "register",
          name: "register",
          component: () => import("@/areas/subscription/AddSubscription.vue"),
        },
        {
          path: "gimnasio",
          name: "gym",
          component: () => import("@/areas/gym/Index.vue"),
        },
        {
          path: "membresias",
          name: "membership",
          component: () => import("@/areas/membership/Index.vue"),
        },
      ],
    },
  ],
});

export default router;
