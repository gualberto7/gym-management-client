import type { App } from 'vue';
import Card from '@/core/components/Card.vue';

export function registerGlobalComponents(app: App) {
  app.component('Card', Card);
}
