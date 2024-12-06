<script lang="ts" setup>
import { computed, inject, ref } from "vue";
import type { Form } from "../interfaces/Form";
import { get, set } from "lodash";

const props = defineProps({
  field: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    default: "text",
  },
});

const form = inject<Form>("form")!;
const field = props.field ?? inject("field")!;
const wasTouched = ref(false);

const errorMessage = computed(() => {
  if (!wasTouched.value) return "";
  return form.errors[field] ?? "";
});

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  set(form.model, field, target.value);
};
</script>

<template>
  <input
    :value="get(form.model, field)"
    :id="field"
    @blur="wasTouched = true"
    @input="handleInput"
    :type="type"
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    :class="{
      'border-red-500 focus:ring-red-500 focus:border-red-500': errorMessage,
    }"
  />
  <span :id="`${field}-error`" class="text-red-500 text-xs">{{
    errorMessage
  }}</span>
</template>
