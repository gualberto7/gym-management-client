<script lang="ts" setup>
import { provide } from "vue";

const props = defineProps({
  search: {
    type: Object,
    default: "",
  },
});

provide("search", props.search);
</script>

<template>
  <slot></slot>
</template>
