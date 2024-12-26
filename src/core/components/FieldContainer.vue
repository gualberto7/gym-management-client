<script lang="ts" setup>
import { provide } from "vue";

const props = defineProps({
  field: {
    type: String,
    required: true,
  },
});

provide("field", props.field);
</script>

<template>
  <div>
    <slot></slot>
  </div>
</template>
