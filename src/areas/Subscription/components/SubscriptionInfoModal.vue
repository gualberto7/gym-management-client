<script lang="ts" setup>
import type { PropType } from "vue";
import type { Subscription } from "../interfaces/Subscription";

const props = defineProps({
  arg: {
    type: Object as PropType<Subscription>,
    required: true,
  },
});
</script>

<template>
  <div class="p-5">
    <div class="flex flex-col gap-4">
      <div class="grid grid-cols-2 items-center gap-8">
        <span class="justify-self-end font-semibold text-gray-600"
          >Usuario:</span
        >
        <span class="font-semibold text-gray-700">{{ arg.member }}</span>
      </div>
      <div class="grid grid-cols-2 items-center gap-8">
        <span class="justify-self-end font-semibold text-gray-600"
          >Membresia:</span
        >
        <span class="font-semibold text-gray-700">{{ arg.membership }}</span>
      </div>
      <div class="grid grid-cols-2 items-center gap-8">
        <span class="justify-self-end font-semibold text-gray-600"
          >Fecha de Inicio:</span
        >
        <span class="font-semibold text-gray-700">{{ arg.start_date }}</span>
      </div>
      <div class="grid grid-cols-2 items-center gap-8">
        <span class="justify-self-end font-semibold text-gray-600"
          >Fecha de Fin:</span
        >
        <span class="font-semibold text-gray-700">{{ arg.end_date }}</span>
      </div>
      <div class="grid grid-cols-2 items-center gap-8">
        <span class="justify-self-end font-semibold text-gray-600"
          >Cantidad de Ingresos:</span
        >
        <span class="font-semibold text-gray-700">10</span>
      </div>
    </div>
    <div class="flex justify-center gap-4 mt-7">
      <Button>Registrar Ingreso</Button>
    </div>
  </div>
</template>
