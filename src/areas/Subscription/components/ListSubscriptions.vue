<script lang="ts" setup>
import { onMounted, reactive } from "vue";
import type { Subscription } from "../interfaces/Subscription";
import api from "@/core/api";

const subscriptions = reactive<Subscription[]>([]);

onMounted(async () => {
  const { data } = await api.get<Subscription[]>("api/subscribed-members");
  subscriptions.push(...data);
});
</script>

<template>
  <div>
    <h1>Subscription</h1>
  </div>
</template>
