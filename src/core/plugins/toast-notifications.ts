import type { App } from "vue";
import Vue3Toastify, { type ToastContainerOptions, toast } from "vue3-toastify";

export function registerToastNotifications(app: App) {
  app.use(Vue3Toastify, {
    autoClose: 3000,
    position: toast.POSITION.BOTTOM_CENTER,
  } as ToastContainerOptions);
}
