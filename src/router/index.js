import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { auth } from "../firebase";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("../views/SignUp.vue"),
  },
  {
    path: "/feed",
    name: "feed",
    component: () => import("../views/FeedView.vue"),
    meta: {
      requireAuth: true,
    },
  },
];

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path === "/login" && auth.currentUser) {
    next("/");
    return;
  }

  if (
    to.matched.some((record) => record.meta.requireAuth) &&
    !auth.currentUser
  ) {
    next("/login");
    return;
  }

  next();
});

export default router;
