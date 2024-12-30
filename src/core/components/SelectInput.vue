<script setup lang="ts">
import type { Form } from "../interfaces/Form";
import { computed, inject, type PropType } from "vue";

const props = defineProps({
  options: {
    type: Array as PropType<{ label: string; value: string }[]>,
    required: true,
  },
  noSelectionText: {
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

// Events ----
const emit = defineEmits(["change"]);

const value = computed({
  get() {
    return form.getValue(field);
  },
  set(value) {
    form.setValue(field, value);
    emit("change", value);
  },
});
</script>

<template>
  <select
    id="select"
    v-model="value"
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  >
    <option v-if="noSelectionText" value="0" selected>
      {{ noSelectionText }}
    </option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>
