<script lang="ts" setup>
import type { PropType } from "vue";
import type { Membership } from "../interfaces/Membership";

defineProps({
  arg: {
    type: Object as PropType<Membership>,
    required: true,
  },
});
</script>
<template>
  <div class="p-4 grid grid-cols-2 gap-3">
    <div class="text-right">
      <p class="font-bold">Nombre:</p>
      <p class="font-bold">Descripción:</p>
      <p class="font-bold">Precio:</p>
      <p class="font-bold">Duración:</p>
      <p class="font-bold">Cantidad máxima de ingresos:</p>
      <p class="font-bold">Creado por:</p>
      <p class="font-bold">Actualizado por:</p>
    </div>
    <div>
      <p>{{ arg.name }}</p>
      <p>{{ arg.description }}</p>
      <p>{{ arg.price }} Bs.</p>
      <p>{{ arg.duration }} {{ arg.duration_unit }}</p>
      <p>{{ arg.max_checkins ?? "'No aplica'" }}</p>
      <p>{{ arg.created_by }}</p>
      <p>{{ arg.updated_by }}</p>
    </div>
  </div>
</template>
