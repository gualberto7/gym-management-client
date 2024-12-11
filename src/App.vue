<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import { useApp } from "./core/composables/useApp";
import Modal from "./core/components/Modal.vue";

const app = useApp();
const loading = ref(true);

onBeforeMount(async () => {
  await app.getAuthenticatedUser();
  loading.value = false;
});
</script>

<template>
  <main>
    <div v-if="loading" class="flex justify-center items-center h-screen">
      <h1>Loading ...</h1>
    </div>
    <div v-else>
      <Modal />
      <router-view />
    </div>
  </main>
</template>

<style scoped></style>
