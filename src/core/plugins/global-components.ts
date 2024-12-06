import type { App } from 'vue';
import Card from '@/core/components/Card.vue';
import Form from '../components/Form.vue';
import FieldContainer from '../components/FieldContainer.vue';
import Label from '../components/Label.vue';
import TextField from '../components/TextField.vue';

export function registerGlobalComponents(app: App) {
  app.component('Card', Card);
  app.component('Form', Form);
  app.component('FieldContainer', FieldContainer);
  app.component('Label', Label);
  app.component('TextField', TextField);
}
