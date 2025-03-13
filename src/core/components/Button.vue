<script lang="ts" setup>
import { computed, type PropType } from "vue";

const props = defineProps({
  color: {
    type: String as PropType<
      | "primary"
      | "secondary"
      | "info"
      | "danger"
      | "warning"
      | "success"
      | "default"
    >,
    default: "primary",
  },
  size: {
    type: String,
    default: "md",
  },
  type: {
    type: String as PropType<"button" | "submit" | "reset">,
    default: "button",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const styles = computed(() => {
  return {
    disabled: props.disabled,
  };
});
</script>

<template>
  <button
    class="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
    :class="[color, size, styles]"
    :type="type"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<style scoped>
.primary {
  @apply bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700;
}
.secondary {
  @apply bg-gray-700 hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700;
}
.success {
  @apply bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700;
}
.danger {
  @apply bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700;
}
.warning {
  @apply bg-yellow-700 hover:bg-yellow-800 dark:bg-yellow-600 dark:hover:bg-yellow-700;
}
.default {
  @apply text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700;
}

.xs {
  @apply text-xs px-0.5 py-0.5;
}
.sm {
  @apply text-xs px-3 py-1.5;
}
.md {
  @apply text-sm px-5 py-2.5;
}
.lg {
  @apply text-lg px-6 py-3;
}

.disabled {
  @apply bg-gray-400 hover:bg-gray-400 cursor-not-allowed;
}
</style>
