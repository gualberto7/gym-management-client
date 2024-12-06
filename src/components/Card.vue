<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: false,
    default: "",
  },
});
</script>

<template>
  <div class="bg-white rounded-lg shadow-lg p-6">
    <div v-if="title" class="mb-5 text-center">
      <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
        {{ title }}
      </h2>
    </div>
    <slot></slot>
  </div>
</template>
