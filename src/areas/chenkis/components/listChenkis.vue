<script lang="ts" setup>
import api from "@/core/api";
import { onMounted, reactive } from "vue";
import type { PaginatedChenkis, Chenki } from "../interfaces/chenki";

const chenkis = reactive<Chenki[]>([]);
const columns = [
  {
    key: "name",
    label: "Nombre",
  },
  {
    key: "phone",
    label: "Calular",
  },
  {
    key: "created_at",
    label: "Hora de ingreso",
  },
];

onMounted(async () => {
  const { data } = await api.get<PaginatedChenkis>("api/chenkis");
  console.log(data);
  chenkis.push(...data.data);
});
</script>

<template>
  <div>
    <Table :data="chenkis" :columns="columns" withSlots>
      <template #name="{ item }">
        <div
          scope="row"
          class="flex items-center text-gray-900 whitespace-nowrap dark:text-white"
        >
          <Avatar :name="item.member_name" />
          <div class="ps-3">
            <div class="text-base font-semibold">{{ item.member_name }}</div>
            <div class="font-normal text-gray-500">{{ item.member_phone }}</div>
          </div>
        </div>
      </template>
      <template #phone="{ item }">
        <div class="text-gray-900 dark:text-white">{{ item.member_phone }}</div>
      </template>
      <template #created_at="{ item }">
        <div class="text-gray-900 dark:text-white">{{ item.created_at }}</div>
      </template>
    </Table>
  </div>
</template>
