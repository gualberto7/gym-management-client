<script lang="ts" setup>
import { useModalStore } from "@/core/store/modal";

const { show } = useModalStore();
</script>

<template>
  <div>
    <PageHeader title="Inicio" />
    <button @click="show('SubscriptionInfoModal', 'Subscription', {})">
      Open Subscription Info Modal
    </button>
  </div>
</template>
