import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const vueApp = createApp(App);
vueApp.use(router).mount("#app");

// Global Directives
vueApp.directive("fontSize", (el, cmd) => {
  el.style.fontSize = cmd.value + "px";
});

vueApp.directive("fontColor", (el, cmd) => {
  el.style.color = cmd.value;
});
