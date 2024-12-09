<script lang="ts" setup>
import { onMounted, reactive } from "vue";
import type { Subscription } from "../interfaces/Subscription";
import api from "@/core/api";

const subscriptions = reactive<Subscription[]>([]);
const columns = [
  {
    key: "member",
    label: "Name",
  },
  {
    key: "end_date",
    label: "Estado",
  },
  {
    key: "membership",
    label: "Membresia",
  },
];

onMounted(async () => {
  const { data } = await api.get<Subscription[]>("api/subscribed-members");
  subscriptions.push(...data.data);
});
</script>

<template>
  <div>
    <Table :data="subscriptions" :columns="columns" withSlots>
      <template #member="{ item }">
        <div
          scope="row"
          class="flex items-center text-gray-900 whitespace-nowrap dark:text-white"
        >
          <Avatar :name="item.member" />
          <div class="ps-3">
            <div class="text-base font-semibold">{{ item.member }}</div>
            <div class="font-normal text-gray-500">{{ item.email }}</div>
          </div>
        </div>
      </template>
      <template #end_date="{ item }">
        <span>{{ item.end_date }}</span>
      </template>
      <template #membership="{ item }">
        <span>{{ item.membership }}</span>
      </template>
    </Table>
  </div>
</template>
