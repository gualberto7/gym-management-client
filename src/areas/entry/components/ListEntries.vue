<script lang="ts" setup>
import api from "@/core/api";
import { onMounted, reactive } from "vue";
import type { PaginatedEntries } from "../interfaces/Entry";
import Pagination from "@/core/components/Pagination.vue";
import { useGymStore } from "@/areas/gym/store/gymStore";

const entries = reactive<PaginatedEntries>({
  data: [],
  links: { prev: "", next: "", first: "", last: "" },
  meta: {
    current_page: 0,
    from: 0,
    last_page: 0,
    path: "",
    per_page: 0,
    to: 0,
    total: 0,
    links: [],
  },
});
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
const { currentGym } = useGymStore();

onMounted(async () => {
  await loadEntries();
});

const loadEntries = async (query: string = "") => {
  const { data } = await api.get<PaginatedEntries>(
    `api/gym/${currentGym?.id}/entries`
  );
  Object.assign(entries, data);
};

const handlePagination = (url: string) => {
  const query = url.split("?")[1];
  loadEntries(query);
};
</script>

<template>
  <div>
    <div v-if="entries.data.length">
      <Table :data="entries.data" :columns="columns" withSlots>
        <template #name="{ item }">
          <div
            scope="row"
            class="flex items-center text-gray-900 whitespace-nowrap dark:text-white"
          >
            <Avatar :name="item.member_name" />
            <div class="ps-3">
              <div class="text-base font-semibold">{{ item.member_name }}</div>
              <div class="font-normal text-gray-500">
                {{ item.member_phone }}
              </div>
            </div>
          </div>
        </template>
        <template #phone="{ item }">
          <div class="text-gray-900 dark:text-white">
            {{ item.member_phone }}
          </div>
        </template>
        <template #created_at="{ item }">
          <div class="text-gray-900 dark:text-white">{{ item.created_at }}</div>
        </template>
      </Table>
      <Pagination
        :links="entries.links"
        :meta="entries.meta"
        @paginate="handlePagination"
      />
    </div>
    <div v-else>
      <p>No hay resultados</p>
    </div>
  </div>
</template>
