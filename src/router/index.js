import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DataTypeView from "@/views/DataTypeView.vue";
import EmitView from "@/views/EmitView.vue";
import SlotView from "@/views/SlotView.vue";
import VModel from "@/views/VModel.vue";
import MyStore from "@/views/MyStore.vue";
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
  {
    path: "/v-model",
    name: "v-model",
    component: VModel,
  },
  {
    path: "/products",
    name: "products",
    component: MyStore,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
