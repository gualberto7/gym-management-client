<script lang="ts" setup>
import type { PropType } from "vue";

defineProps({
  color: {
    type: String as PropType<
      "primary" | "secondary" | "info" | "danger" | "warning"
    >,
    default: "primary",
  },
});

defineEmits(["close"]);
</script>

<template>
  <div class="p-2 rounded-lg" :class="[color]">
    <div class="flex justify-between">
      <slot />
      <button @click="$emit('close')" class="font-bold">X</button>
    </div>
  </div>
</template>

<style scoped>
.primary {
  @apply bg-blue-400 text-white;
}
.secondary {
  @apply bg-gray-400 text-white;
}
.info {
  @apply bg-green-400 text-white;
}
.danger {
  @apply bg-red-400 text-white;
}
.warning {
  @apply bg-yellow-400 text-white;
}
</style>
