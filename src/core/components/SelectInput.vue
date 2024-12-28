<script setup lang="ts">
import { inject, type PropType } from "vue";
import { get, set } from "lodash";
import type { Form } from "../interfaces/Form";

const props = defineProps({
  options: {
    type: Array as PropType<{ label: string; value: string }[]>,
    required: true,
  },
  label: {
    type: String,
    default: "",
  },
  field: {
    type: String,
    required: false,
  },
});

const form = inject<Form>("form")!;
const field = props.field ?? inject("field")!;

const handleOnChange = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  set(form.model, field, target.value);
};
</script>

<template>
  <select
    :value="get(form.model, field)"
    @input="handleOnChange"
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  >
    <option selected>test</option>
    <template v-for="option in options" :key="option.value">
      <option :value="option.value">{{ option.label }}</option>
    </template>
  </select>
</template>
