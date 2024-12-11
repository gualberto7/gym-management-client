<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="mb-3">
    <h2 class="text-xl font-semibold text-gray-600">{{ title }}</h2>
  </div>
</template>
