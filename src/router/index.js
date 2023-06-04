import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DataTypeView from "@/views/DataTypeView.vue";
import EmitView from "@/views/EmitView.vue";
import SlotView from "@/views/SlotView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/data-type",
    name: "data-type",
    component: DataTypeView,
  },
  {
    path: "/emit",
    name: "emit",
    component: EmitView,
  },
  {
    path: "/slot",
    name: "slot",
    component: SlotView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
