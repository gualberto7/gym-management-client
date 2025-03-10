<script lang="ts" setup>
defineProps({
  color: {
    type: String,
    default: "primary",
  },
  text: {
    type: String,
    default: "",
  },
  withSlot: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    class="w-fit text-xs font-medium me-2 px-2.5 py-0.5 rounded"
    :class="color"
  >
    <template v-if="withSlot">
      <slot />
    </template>
    <template v-else>
      {{ text }}
    </template>
  </div>
</template>

<style scoped>
.primary {
  @apply bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300;
}
.danger {
  @apply bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300;
}
.success {
  @apply bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300;
}
.warning {
  @apply bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300;
}
</style>
