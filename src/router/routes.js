import Vue from "vue";
import VueRouter from "vue-router";
import InstrumentList from "../components/InstrumentList";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: InstrumentList,
  },
  {
    path: "/List",
    name: "List",
    component: InstrumentList,
  },
  {
    path: "/New",
    name: "New",
    component: () => import("../components/NewInstrument"),
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
  mode: "history",
});

export default router;
