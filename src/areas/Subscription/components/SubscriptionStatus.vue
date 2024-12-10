<script lang="ts" setup>
import { get } from "lodash";
import type { Subscription } from "../interfaces/Subscription";
import { computed } from "vue";

const props = defineProps({
  subscription: {
    type: Object as () => Subscription,
    required: true,
  },
});

const getDiffInDays = (date: string) => {
  const diff = new Date(date).getTime() - new Date().getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
};

const badgeData = computed(() => {
  const daysLefts = getDiffInDays(props.subscription.end_date);
  if (daysLefts < 1) return { color: "danger", text: "Vence hoy" };
  if (daysLefts < 3)
    return { color: "warning", text: `Vence en ${daysLefts} dias` };
  return { color: "success", text: `Activo` };
});
</script>

<template>
  <div class="flex flex-col">
    <Badge :color="badgeData.color" withSlot>
      {{ subscription.end_date }}
    </Badge>
    <span class="text-xs text-gray-500 dark:text-gray-400">
      {{ badgeData.text }}
    </span>
  </div>
</template>
