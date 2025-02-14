import type { App } from "vue";
import router from "@/core/router";
import { createPinia } from "pinia";
import { registerGlobalComponents } from "./global-components";
import { registerToastNotifications } from "./toast-notifications";

export function registerPlugins(app: App) {
  app.use(router);
  app.use(createPinia());
  registerToastNotifications(app);

  registerGlobalComponents(app);
}
