import "./assets/main.css";
import { registerPlugins } from "./core/plugins";
import Vue3Toastify, { type ToastContainerOptions, toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

import { createApp } from "vue";

import App from "./App.vue";

const app = createApp(App);

registerPlugins(app);
app.use(Vue3Toastify, {
  autoClose: 3000,
  position: toast.POSITION.BOTTOM_CENTER,
} as ToastContainerOptions);

app.mount("#app");
