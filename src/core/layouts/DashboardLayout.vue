<script lang="ts" setup>
import Navbar from "@/core/components/Navbar.vue";
import Sidebar from "@/core/components/Sidebar.vue";
</script>

<template>
  <Navbar />
  <Sidebar />
  <div class="p-5 mt-16 ms-0 sm:ms-64">
    <RouterView />
  </div>
</template>
