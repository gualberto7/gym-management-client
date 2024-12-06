import type { App } from 'vue';
import router from '@/core/router';
import { createPinia } from 'pinia'
import { registerGlobalComponents } from './global-components';

export function registerPlugins(app: App) {
  app.use(router);
  app.use(createPinia());
  registerGlobalComponents(app);
}
