import type { App } from 'vue';
import Card from '@/components/Card.vue';

export function registerGlobalComponents(app: App) {
  app.component('Card', Card);
}
