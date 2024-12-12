<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";

onMounted(() => console.log("Component mounted"));
onUnmounted(() => console.log("Component unmounted"));
</script>

<template>
  <div>
    <h1>Create member</h1>
  </div>
</template>
