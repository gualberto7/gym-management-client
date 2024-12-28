<script lang="ts" setup>
import type { PropType } from "vue";
import type { Membership } from "../interfaces/Membership";

defineProps({
  membership: {
    type: Object as PropType<Membership>,
    required: true,
  },
});
</script>

<template>
  <Card :title="membership.name">
    <p>Precio: {{ membership.price }} Bs.</p>
    <p>Tiempo: {{ membership.duration }} {{ membership.duration_unit }}</p>
  </Card>
</template>
