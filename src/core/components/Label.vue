<script lang="ts" setup>
import { computed, inject } from "vue";
import type { Form } from "../interfaces/Form";

const props = defineProps({
  label: {
    type: String,
    required: false,
  },
});

const form = inject<Form>("form")!;
const field = props.label ?? inject("field")!;

const label = computed(() => {
  return form.labels[field] ?? field;
});

const isRequired = computed(() => {
  if (!form.rules[field]) return false;
  return form.rules[field].includes("required");
});
</script>

<template>
  <label
    :for="form.model[field]"
    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  >
    {{ label }}
    <span v-if="isRequired" class="text-red-500">*</span>
  </label>
</template>
