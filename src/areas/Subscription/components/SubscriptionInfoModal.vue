<script lang="ts" setup>
// Imports ----
import type { PropType } from "vue";
import { useModalStore } from "@/core/store/modal";
import { useGymStore } from "@/areas/gym/store/gymStore";
import ChenkisForm from "@/areas/chenkis/classes/ChenkisForm";
import type { Subscription } from "../interfaces/Subscription";

// Props ----
const props = defineProps({
  arg: {
    type: Object as PropType<Subscription>,
    required: true,
  },
});

// State ----
const chenkisForm = new ChenkisForm();
const { currentGym } = useGymStore();
const { hide } = useModalStore();

// Methods ----
const addChenkis = () => {
  chenkisForm.model.gym_id = currentGym?.id!;
  chenkisForm.model.member_id = props.arg.data.member.id;
  chenkisForm.model.registred_by = "Albert"; // TODO Change to the current user
  chenkisForm.submit();
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
        <span class="font-semibold text-gray-700">{{
          arg.data.member.name
        }}</span>
      </div>
      <div class="grid grid-cols-2 items-center gap-8">
        <span class="justify-self-end font-semibold text-gray-600"
          >Membresia:</span
        >
        <span class="font-semibold text-gray-700">{{
          arg.data.membership.name
        }}</span>
      </div>
      <div class="grid grid-cols-2 items-center gap-8">
        <span class="justify-self-end font-semibold text-gray-600"
          >Fecha de Inicio:</span
        >
        <span class="font-semibold text-gray-700">{{
          arg.data.start_date
        }}</span>
      </div>
      <div class="grid grid-cols-2 items-center gap-8">
        <span class="justify-self-end font-semibold text-gray-600"
          >Fecha de Fin:</span
        >
        <span class="font-semibold text-gray-700">{{ arg.data.end_date }}</span>
      </div>
      <div class="grid grid-cols-2 items-center gap-8">
        <span class="justify-self-end font-semibold text-gray-600"
          >Cantidad de Ingresos:</span
        >
        <span class="font-semibold text-gray-700">10</span>
      </div>
    </div>
    <div class="flex justify-center gap-4 mt-7">
      <Button @click="addChenkis">Registrar Ingreso</Button>
    </div>
  </div>
</template>
