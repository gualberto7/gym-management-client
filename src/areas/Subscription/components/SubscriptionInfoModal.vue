<script lang="ts" setup>
// Imports ----
import type { PropType } from "vue";
import { useModalStore } from "@/core/store/modal";
import { useGymStore } from "@/areas/gym/store/gymStore";
import EntryForm from "@/areas/entry/classes/EntryForm";
import type { Subscription } from "../interfaces/Subscription";

// Props ----
const props = defineProps({
  arg: {
    type: Object as PropType<Subscription>,
    required: true,
  },
});

// State ----
const form = new EntryForm();
const { currentGym } = useGymStore();
const { hide } = useModalStore();

// Methods ----
const addEntry = () => {
  form.model.gym_id = currentGym?.id!;
  form.model.member_id = props.arg.member.id;
  form.submit();
  hide();
};
</script>

<template>
  <div class="p-5">
    <div class="flex flex-col gap-4">
      <div class="grid grid-cols-2 items-center gap-8">
        <span class="justify-self-end font-semibold text-gray-600"
          >Usuario:</span
        >
        <span class="font-semibold text-gray-700">{{ arg.member.name }}</span>
      </div>
      <div class="grid grid-cols-2 items-center gap-8">
        <span class="justify-self-end font-semibold text-gray-600"
          >Membresia:</span
        >
        <span class="font-semibold text-gray-700">{{
          arg.membership.name
        }}</span>
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
      <Button @click="addEntry">Registrar Ingreso</Button>
    </div>
  </div>
</template>
