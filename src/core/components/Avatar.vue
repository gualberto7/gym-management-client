<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  avatarUrl: {
    type: String,
    required: false,
  },
});

const avatar = computed(() => {
  return (
    props.avatarUrl ||
    `https://ui-avatars.com/api/?name=${props.name}&background=random`
  );
});
</script>

<template>
  <img class="w-10 h-10 rounded-full" :src="avatar" :alt="name" />
</template>
