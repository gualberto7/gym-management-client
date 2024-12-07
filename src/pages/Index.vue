<script lang="ts" setup>
import { useSessionStore } from "@/areas/auth/store/sessionStore";

const session = useSessionStore();
</script>

<template>
  <h1>Landing page here</h1>
  <div v-if="session.user">
    <router-link to="/dashboard">Go to dashboard</router-link>
  </div>
</template>
