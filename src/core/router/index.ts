import { createRouter, createWebHistory } from "vue-router";
import Index from "@/pages/Index.vue";
import { useSessionStore } from "@/areas/auth/store/sessionStore";

const router = createRouter({
  history: createWebHistory("http://localhost:5173"),
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
          path: "memberships",
          name: "memberships",
          component: () => import("@/pages/Membership.vue"),
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  const session = useSessionStore();
  if (
    to.name !== "login" &&
    to.name !== "create-account" &&
    !session.isAuthenticated
  ) {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
