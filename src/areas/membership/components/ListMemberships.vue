<script lang="ts" setup>
// Imports -----
import api from "@/core/api";
import { onMounted, ref } from "vue";
import { useGymStore } from "@/areas/gym/store/gymStore";
import type { Membership as MembershipInterface } from "../interfaces/Membership";

// Components -----
import EditIcon from "@/core/components/icons/EditIcon.vue";
import ShowIcon from "@/core/components/icons/ShowIcon.vue";
import TrashIcon from "@/core/components/icons/TrashIcon.vue";

// State -----
const memberships = ref<MembershipInterface[]>([]);
const { currentGym } = useGymStore();
const columns = [
  {
    label: "Name",
    key: "name",
  },
  {
    label: "Price",
    key: "price",
  },
  {
    label: "Duration",
    key: "duration",
  },
  {
    label: "Actions",
    key: "actions",
  },
];

// Hooks -----
onMounted(async () => {
  const { data } = await api.get(`api/gym/${currentGym.id}/memberships`);
  memberships.value = data;
});
</script>

<template>
  <div>
    <Table :data="memberships" :columns="columns" withSlots>
      <template #name="{ item }">
        <p>{{ item.name }}</p>
      </template>
      <template #price="{ item }">
        <p>{{ item.price }}</p>
      </template>
      <template #duration="{ item }">
        <p>{{ item.duration }} - {{ item.duration_unit }}</p>
      </template>
      <template #actions="{ item }">
        <div class="flex gap-3">
          <ShowIcon />
          <EditIcon />
          <TrashIcon />
        </div>
      </template>
    </Table>
  </div>
</template>
