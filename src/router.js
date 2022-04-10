import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/home";
import Signup from "@/components/signup";
import Signin from "@/components/signin";
import User from "@/components/user";
import Messaging from "@/components/messaging";

import What from "@/components/what";
import How from "@/components/how";
import About from "@/components/about";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup,
    },
    {
      path: "/signin",
      name: "signin",
      component: Signin,
    },
    {
      path: "/u/:address",
      name: "user",
      component: User,
    },
    {
      path: "/m",
      name: "messaging",
      component: Messaging,
    },
    {
      path: "/m/:address",
      name: "messaging",
      component: Messaging,
    },
    {
      path: "/what",
      name: "what",
      component: What,
    },
    {
      path: "/how",
      name: "how",
      component: How,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
  ],
});
