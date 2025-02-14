import "./assets/main.css";
import { registerPlugins } from "./core/plugins";
import "vue3-toastify/dist/index.css";

import { createApp } from "vue";

import App from "./App.vue";

const app = createApp(App);

registerPlugins(app);

app.mount("#app");
